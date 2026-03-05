import React, { useState } from 'react';
import { ShieldCheck, ChevronRight, Check, Loader2, Copy, ExternalLink, Settings } from 'lucide-react';
import ProfileMenu from './ProfileMenu';
import { db } from './firebase';
import { doc, setDoc } from 'firebase/firestore';

export default function SetupWizard({ user, onComplete }) {
  const [step, setStep] = useState(1);
  const [sheetUrl, setSheetUrl] = useState('');
  const [sheetId, setSheetId] = useState('');
  const [webAppUrl, setWebAppUrl] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleExtractId = () => {
    setError('');
    // Regex to match Google Sheets ID
    const match = sheetUrl.match(/\/d\/([a-zA-Z0-9-_]+)/);
    if (match && match[1]) {
      setSheetId(match[1]);
      setStep(2);
    } else {
      setError("Could not extract Sheet ID. Please ensure you pasted the full Google Sheets URL.");
    }
  };

  const handleSaveWebAppUrl = async () => {
    if (!webAppUrl.startsWith('https://script.google.com/macros/s/')) {
      setError("Invalid Web App URL. It should start with 'https://script.google.com/macros/s/'.");
      return;
    }

    setIsSaving(true);
    setError('');
    try {
      // Use Promise.race to prevent getting stuck if Firestore hangs
      const savePromise = setDoc(doc(db, "users", user.uid), {
        appScriptUrl: webAppUrl
      }, { merge: true });

      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Timeout saving to database")), 5000)
      );

      await Promise.race([savePromise, timeoutPromise]);
      localStorage.setItem('ccdeck_appScriptUrl', webAppUrl); // Fallback storage
      onComplete(webAppUrl);
    } catch (err) {
      console.warn("Firestore save failed, falling back to local storage:", err);
      // Fallback: Even if Firestore fails, allow the user to proceed locally
      localStorage.setItem('ccdeck_appScriptUrl', webAppUrl);
      onComplete(webAppUrl);
    } finally {
      setIsSaving(false);
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText(appScriptCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const appScriptCode = `/**
 * ccdeck - Advanced Gmail Parser (Now with 2-Way Sync!)
 */
const DATABASE_SPREADSHEET_ID = "${sheetId}";

function extractCreditCardTransactions() {
  const ss = SpreadsheetApp.openById(DATABASE_SPREADSHEET_ID);
  const sheet = ss.getSheets()[0]; // Always use the first tab for transactions

  // Create headers if empty
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Date', 'CardLast4', 'Amount', 'Merchant', 'Subject', 'MessageID']);
  }

  const data = sheet.getDataRange().getValues();
  const processedIds = new Set();
  const processedTransactions = new Set(); // To prevent duplicates from multiple emails for same tx

  for (let i = 1; i < data.length; i++) {
    if (data[i][5]) processedIds.add(data[i][5]);
    if (data[i][0] && data[i][1] && data[i][2]) {
      // Create a composite key: Date(YYYY-MM-DD) + Card + Amount
      const d = new Date(data[i][0]);
      if (!isNaN(d)) {
         const dateKey = d.toISOString().split('T')[0];
         processedTransactions.add(dateKey + "_" + data[i][1] + "_" + Math.abs(Number(data[i][2])));
      }
    }
  }

  // Comprehensive search for Indian bank transaction/refund/payment keywords
  const gmailTransactionFilter = 'after:2023/12/31 (subject:"Transaction" OR subject:"Spent" OR subject:"charge" OR subject:"debited" OR subject:"payment" OR subject:"credited" OR subject:"alert" OR subject:"txn" OR subject:"purchase" OR subject:"refund" OR subject:"reversal" OR "debited" OR "spent" OR "credited" OR "payment received" OR "transaction alert" OR "refund initiated" OR "repayment")';
  const emailThreads = GmailApp.search(gmailTransactionFilter);

  for (let i = 0; i < emailThreads.length; i++) {
    const emailMessages = emailThreads[i].getMessages();

    for (let j = 0; j < emailMessages.length; j++) {
      const currentEmail = emailMessages[j];
      const messageId = currentEmail.getId();

      if (processedIds.has(messageId)) continue;

      const emailBody = currentEmail.getPlainBody();
      const emailDate = currentEmail.getDate();
      const emailSubject = currentEmail.getSubject();

      // Comprehensive check for Indian bank Refunds, Reversals, and Bill Payments
      const isPayment = /(?:payment (?:received|successful|credited)|credited to|payment of rs|thank you for your payment|refund(?:ed| of| initiated| processed)|reversal|reversed|repayment)/i.test(emailSubject) ||
                        /(?:payment (?:received|successful|credited)|credited to|payment of rs|thank you for your payment|refund(?:ed| of| initiated| processed)|reversal|reversed|repayment)/i.test(emailBody);

      let spendAmount = parseSpendAmount(emailBody) || parseSpendAmount(emailSubject);
      let cardSuffix = parseCardSuffix(emailBody) || parseCardSuffix(emailSubject);
      let merchantName = isPayment ? "Bill Payment / Refund" : parseMerchantName(emailBody);

      if (spendAmount !== null && cardSuffix) {
        const dateKey = emailDate.toISOString().split('T')[0];
        const txKey = dateKey + "_" + cardSuffix + "_" + Math.abs(spendAmount);

        // Skip if we already logged this exact amount on this card today (prevents double counting duplicate alert emails)
        if (processedTransactions.has(txKey)) continue;

        if (isPayment) {
          spendAmount = -Math.abs(spendAmount);
        }

        sheet.appendRow([emailDate, cardSuffix, spendAmount, merchantName, emailSubject, messageId]);
        processedIds.add(messageId);
        processedTransactions.add(txKey);
      }
    }
  }
}

function parseSpendAmount(textData) {
  // Handles Rs. 100, Rs 100, INR 100, Rs.100.50
  const currencyPattern = /(?:Rs\\.?|INR\\.?)\\s*([\\d,]+(?:\\.\\d+)?)/i;
  const matchResult = currencyPattern.exec(textData);
  if (matchResult) return parseFloat(matchResult[1].replace(/,/g, ''));
  return null;
}

function parseCardSuffix(textData) {
  const cardSuffixPattern = /(?:ending with|ending in|card no\\.?|card)\\s*(?:XX|XXXX|X)?(\\d{4})/i;
  const matchResult = cardSuffixPattern.exec(textData);
  if (matchResult) return matchResult[1];
  return null;
}

function parseMerchantName(textData) {
  // Ordered from most specific to least specific for Indian Bank formats (HDFC, SBI, ICICI, Axis, Amex)
  const patterns = [
    /(?:merchant|info|remarks|description|desc)\\s*[:\\-]\\s*([A-Za-z0-9\\s\\.\\*\\-\\&]+?)(?:\\r?\\n|$)/i,
    /(?:at|to|towards)\\s+([A-Za-z0-9\\s\\.\\*\\-\\&]+?)\\s+(?:on|using|via|for|from|through|with)/i,
    /spent\\s+(?:Rs\\.?|INR\\.?)\\s*[\\d,]+(?:\\.\\d+)?\\s+(?:at|on)\\s+([A-Za-z0-9\\s\\.\\*\\-\\&]+)/i,
    /(?:at|to|towards)\\s+([A-Za-z0-9\\s\\.\\*\\-\\&]{3,40})(?:\\.|$|(?=\\r?\\n))/i
  ];
  for (let pattern of patterns) {
    const matchResult = pattern.exec(textData);
    if (matchResult && matchResult[1]) {
      let merchant = matchResult[1].trim();
      merchant = merchant.replace(/\\s+(on|using|via|for|from|through|with)$/i, '').trim();
      if (merchant.length > 1) return merchant;
    }
  }
  return "Unknown Merchant";
}

// ==========================================
// THE WEB API (Reads/Writes to Vercel)
// ==========================================

// 1. Sends data TO the dashboard
function doGet(e) {
  // We strictly read from the sheet here so the dashboard loads instantly.
  // The background sync is handled by the Time-driven trigger you set up.

  const ss = SpreadsheetApp.openById(DATABASE_SPREADSHEET_ID);
  const txSheet = ss.getSheets()[0];
  const settingsSheet = ss.getSheetByName('Settings');

  // Fetch Transactions
  const txData = txSheet.getDataRange().getValues();
  const transactions = [];
  for (let i = 1; i < txData.length; i++) {
    if (txData[i][1] && txData[i][2] !== "") {
      transactions.push({
        date: txData[i][0],
        card: String(txData[i][1]),
        amount: Number(txData[i][2]),
        merchant: txData[i][3],
        subject: txData[i][4]
      });
    }
  }
  transactions.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Fetch Custom Settings (Limits/Balances)
  const settings = {};
  if (settingsSheet) {
    const setData = settingsSheet.getDataRange().getValues();
    for (let i = 1; i < setData.length; i++) {
      settings[String(setData[i][0])] = {
        limit: Number(setData[i][1]),
        adjustment: Number(setData[i][2])
      };
    }
  }

  return ContentService.createTextOutput(JSON.stringify({ transactions, settings }))
    .setMimeType(ContentService.MimeType.JSON);
}

// 2. Receives custom configurations FROM the dashboard
function doPost(e) {
  const ss = SpreadsheetApp.openById(DATABASE_SPREADSHEET_ID);
  let settingsSheet = ss.getSheetByName('Settings');

  // Auto-create Settings tab if it doesn't exist
  if (!settingsSheet) {
    settingsSheet = ss.insertSheet('Settings');
    settingsSheet.appendRow(['CardLast4', 'Limit', 'Adjustment']);
  }

  try {
    const payload = JSON.parse(e.postData.contents);
    const card = String(payload.card);
    const limit = Number(payload.limit);
    const adjustment = Number(payload.adjustment);

    const data = settingsSheet.getDataRange().getValues();
    let found = false;

    // Update existing card row
    for (let i = 1; i < data.length; i++) {
      if (String(data[i][0]) === card) {
        settingsSheet.getRange(i + 1, 2).setValue(limit);
        settingsSheet.getRange(i + 1, 3).setValue(adjustment);
        found = true;
        break;
      }
    }

    // Append new card row if not found
    if (!found) {
      settingsSheet.appendRow([card, limit, adjustment]);
    }

    return ContentService.createTextOutput(JSON.stringify({ status: 'success' })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: error.toString() })).setMimeType(ContentService.MimeType.JSON);
  }
}`;

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (e) {
      console.error("Error signing out:", e);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#05070a] flex flex-col items-center justify-center p-4 selection:bg-indigo-500/30 relative overflow-hidden text-gray-900 dark:text-white transition-colors duration-300">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,_#312e81_0%,_transparent_50%)] opacity-20 dark:opacity-40 pointer-events-none"></div>

      <div className="bg-white dark:bg-white/5 backdrop-blur-3xl border border-gray-200 dark:border-white/10 p-8 md:p-12 rounded-[3rem] w-full max-w-2xl shadow-2xl dark:shadow-[0_0_80px_rgba(0,0,0,0.5)] relative z-10 overflow-y-auto max-h-[90vh] custom-scrollbar transition-colors">
        <div className="absolute top-6 right-6">
          <ProfileMenu user={user} />
        </div>

        <div className="flex flex-col items-center mb-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-tr from-indigo-600 to-blue-400 rounded-2xl flex items-center justify-center shadow-lg mb-6">
            <Settings className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight leading-none mb-1 uppercase">Database Setup</h1>
          <p className="text-[9px] font-bold text-indigo-600 dark:text-indigo-400 tracking-[0.3em] uppercase">Connect Google Sheets</p>
        </div>

        <div className="flex justify-between items-center mb-10 relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-px bg-gray-200 dark:bg-white/10 -z-10"></div>
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm border-2 transition-colors ${
              step > num ? 'bg-indigo-600 border-indigo-600 text-white' :
              step === num ? 'bg-white dark:bg-[#0c1017] border-indigo-500 text-indigo-500 dark:text-indigo-400' :
              'bg-white dark:bg-[#0c1017] border-gray-200 dark:border-white/10 text-gray-400 dark:text-gray-600'
            }`}>
              {step > num ? <Check size={16} /> : num}
            </div>
          ))}
        </div>

        {error && (
          <div className="mb-6 p-4 bg-rose-500/10 border border-rose-500/20 rounded-2xl text-rose-500 text-xs font-bold text-center">
            {error}
          </div>
        )}

        {step === 1 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <h3 className="text-lg font-black uppercase tracking-tighter mb-4 text-indigo-600 dark:text-indigo-400">1. Create a Google Sheet</h3>
              <ol className="list-decimal list-inside space-y-3 text-sm text-gray-600 dark:text-gray-300 font-medium">
                <li>Go to <a href="https://sheets.google.com" target="_blank" rel="noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1">Google Sheets <ExternalLink size={12}/></a> and create a new Blank spreadsheet.</li>
                <li>In the first row, create exactly these 4 column headers: <br/><code className="bg-gray-100 dark:bg-white/10 px-2 py-1 rounded text-gray-900 dark:text-white font-mono text-xs ml-5 mt-2 inline-block">date | merchant | amount | card</code></li>
                <li>Copy the full URL of your new Google Sheet from the address bar.</li>
              </ol>
            </div>

            <div className="pt-4">
              <label className="block text-[9px] font-black text-gray-400 dark:text-gray-500 uppercase mb-3 tracking-widest">Paste Google Sheet URL</label>
              <input
                type="text"
                placeholder="https://docs.google.com/spreadsheets/d/1A2B3C4D5E6F7G8H9I0J..."
                value={sheetUrl}
                onChange={(e) => setSheetUrl(e.target.value)}
                className="w-full bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 rounded-2xl px-5 py-4 text-gray-900 dark:text-white font-black outline-none text-xs placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:border-indigo-500/50 transition-colors"
              />
            </div>

            <button
              onClick={handleExtractId}
              disabled={!sheetUrl}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white px-7 py-4 rounded-2xl font-black transition-all flex items-center justify-center gap-2 shadow-lg text-xs uppercase tracking-widest mt-4"
            >
              Continue <ChevronRight size={16} />
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <h3 className="text-lg font-black uppercase tracking-tighter mb-4 text-indigo-600 dark:text-indigo-400">2. Add Apps Script Code</h3>
              <ol className="list-decimal list-inside space-y-3 text-sm text-gray-600 dark:text-gray-300 font-medium">
                <li>In your Google Sheet, click <strong>Extensions &gt; Apps Script</strong>.</li>
                <li>Delete any code in the editor and <strong>paste the code below</strong>.</li>
                <li>Click the Save icon (💾) or press Ctrl+S/Cmd+S.</li>
              </ol>
            </div>

            <div className="relative group">
              <div className="absolute right-4 top-4 z-20">
                <button
                  onClick={copyCode}
                  className="p-2 bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20 rounded-lg text-gray-900 dark:text-white backdrop-blur-md transition-colors flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest"
                >
                  {copied ? <Check size={14} className="text-emerald-600 dark:text-emerald-400"/> : <Copy size={14} />}
                  {copied ? 'Copied!' : 'Copy Code'}
                </button>
              </div>
              <pre className="bg-gray-50 dark:bg-[#0c1017] border border-gray-200 dark:border-white/10 rounded-2xl p-6 text-[10px] sm:text-xs text-gray-800 dark:text-gray-300 font-mono overflow-x-auto h-64 relative">
                <code>{appScriptCode}</code>
              </pre>
            </div>

            <div className="flex gap-4 pt-4">
              <button onClick={() => setStep(1)} className="flex-1 bg-white dark:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/10 text-gray-900 dark:text-white px-7 py-4 rounded-2xl font-black transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-widest border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none">Back</button>
              <button onClick={() => setStep(3)} className="flex-[2] bg-indigo-600 hover:bg-indigo-700 text-white px-7 py-4 rounded-2xl font-black transition-all flex items-center justify-center gap-2 shadow-lg text-xs uppercase tracking-widest">Next Step <ChevronRight size={16} /></button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <h3 className="text-lg font-black uppercase tracking-tighter mb-4 text-indigo-600 dark:text-indigo-400">3. Enable Auto-Sync</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Set up a trigger so ccdeck syncs your emails automatically in the background.</p>
              <ol className="list-decimal list-inside space-y-3 text-sm text-gray-600 dark:text-gray-300 font-medium">
                <li>In Apps Script, click the <strong>Clock icon (Triggers)</strong> on the left sidebar.</li>
                <li>Click the blue <strong>+ Add Trigger</strong> button at the bottom right.</li>
                <li>Set "Choose which function to run" to <strong>extractCreditCardTransactions</strong>.</li>
                <li>Set "Select event source" to <strong>Time-driven</strong>.</li>
                <li>Set "Select type of time based trigger" to <strong>Hour timer</strong>.</li>
                <li>Set "Select hour interval" to <strong>Every hour</strong> (or your preference) and click Save.</li>
              </ol>
            </div>

            <div className="flex gap-4 pt-4">
              <button onClick={() => setStep(2)} className="flex-1 bg-white dark:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/10 text-gray-900 dark:text-white px-7 py-4 rounded-2xl font-black transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-widest border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none">Back</button>
              <button onClick={() => setStep(4)} className="flex-[2] bg-indigo-600 hover:bg-indigo-700 text-white px-7 py-4 rounded-2xl font-black transition-all flex items-center justify-center gap-2 shadow-lg text-xs uppercase tracking-widest">Next Step <ChevronRight size={16} /></button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <h3 className="text-lg font-black uppercase tracking-tighter mb-4 text-indigo-600 dark:text-indigo-400">4. Deploy Web App</h3>
              <ol className="list-decimal list-inside space-y-3 text-sm text-gray-600 dark:text-gray-300 font-medium">
                <li>In Apps Script, click the blue <strong>Deploy</strong> button (top right) &gt; <strong>New deployment</strong>.</li>
                <li>Click the gear icon next to "Select type" and choose <strong>Web app</strong>.</li>
                <li>Set "Execute as" to <strong>Me</strong>.</li>
                <li>Set "Who has access" to <strong>Anyone</strong>.</li>
                <li>Click <strong>Deploy</strong>. <em>(You may need to "Review permissions" &gt; choose your account &gt; Advanced &gt; Go to project)</em>.</li>
                <li>Copy the <strong>Web app URL</strong> provided.</li>
              </ol>
            </div>

            <div className="pt-4">
              <label className="block text-[9px] font-black text-gray-400 dark:text-gray-500 uppercase mb-3 tracking-widest">Paste Web App URL</label>
              <input
                type="text"
                placeholder="https://script.google.com/macros/s/AKfycb..."
                value={webAppUrl}
                onChange={(e) => setWebAppUrl(e.target.value)}
                className="w-full bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 rounded-2xl px-5 py-4 text-gray-900 dark:text-white font-black outline-none text-xs placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:border-indigo-500/50 transition-colors"
              />
            </div>

            <div className="flex gap-4 pt-4">
              <button onClick={() => setStep(3)} disabled={isSaving} className="flex-1 bg-white dark:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/10 text-gray-900 dark:text-white px-7 py-4 rounded-2xl font-black transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-widest border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none">Back</button>
              <button
                onClick={handleSaveWebAppUrl}
                disabled={!webAppUrl || isSaving}
                className="flex-[2] bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white px-7 py-4 rounded-2xl font-black transition-all flex items-center justify-center gap-2 shadow-lg text-xs uppercase tracking-widest"
              >
                {isSaving ? <Loader2 size={16} className="animate-spin" /> : <><Check size={16}/> Finish Setup</>}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}