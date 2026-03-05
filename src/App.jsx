import React, { useState, useEffect, useMemo } from 'react';
import { CreditCard, AlertCircle, Calendar, IndianRupee, PieChart, TrendingUp, ShieldCheck, Zap, Loader2, Settings, Pencil, X, Lock, RefreshCcw, Delete, Plus, Trash2, Info, CreditCard as CardIcon, ChevronRight, Clock, ArrowUpDown, GripVertical, Eye, EyeOff, LogOut } from 'lucide-react';
import Login from './Login';
import SetupWizard from './SetupWizard';
import ProfileMenu from './ProfileMenu';
import { auth, db } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

// Premium Gradient Palette for Dynamic Cards
const PREMIUM_GRADIENTS = [
  'bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950',
  'bg-gradient-to-br from-gray-900 via-slate-800 to-slate-950',
  'bg-gradient-to-br from-rose-900 via-red-900 to-black',
  'bg-gradient-to-br from-amber-700 via-orange-800 to-stone-950',
  'bg-gradient-to-br from-red-700 via-rose-950 to-black',
  'bg-gradient-to-br from-zinc-800 to-black',
  'bg-gradient-to-br from-rose-800 via-red-950 to-black',
  'bg-gradient-to-br from-yellow-700 via-amber-950 to-black',
  'bg-gradient-to-br from-purple-700 via-indigo-950 to-black'
];

// Network Logo Component with /assets/ support & clean fallbacks
const CardNetworkLogo = ({ network }) => {
  const [imgError, setImgError] = useState(false);
  const networkName = network?.toLowerCase();

  if (!imgError && ['visa', 'mastercard', 'rupay', 'amex'].includes(networkName)) {
    return (
      <img 
        src={`/assets/${networkName}.png`} 
        alt={networkName}
        className="h-5 md:h-7 w-auto object-contain drop-shadow-xl"
        onError={() => setImgError(true)}
      />
    );
  }

  switch (networkName) {
    case 'visa':
      return <div className="text-white italic font-black text-xl tracking-tighter drop-shadow-lg leading-none">VISA</div>;
    case 'mastercard':
      return (
        <svg viewBox="0 0 24 24" className="h-8 w-auto drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <circle cx="7" cy="12" r="7" fill="#EB001B" />
          <circle cx="17" cy="12" r="7" fill="#F79E1B" />
          <path d="M12 17.5c1.7-1.4 2.7-3.5 2.7-5.5s-1-4.1-2.7-5.5c-1.7 1.4-2.7 3.5-2.7 5.5s1 4.1 2.7 5.5z" fill="#FF5F00" />
        </svg>
      );
    case 'amex':
      return <div className="bg-[#016fcf] px-2 py-0.5 rounded border border-white/30 shadow-lg text-[10px] font-black tracking-tighter text-white uppercase italic">AMEX</div>;
    case 'rupay':
      return <div className="text-white font-black italic text-lg drop-shadow-lg leading-none">RuPay<span className="text-orange-500 font-bold not-italic">❯</span></div>;
    default:
      return <CardIcon className="text-white/40" size={20} />;
  }
};

// Removed initial cards for testing purposes
const INITIAL_PORTFOLIO = [];

const formatInr = (amount) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);

const getLastStatementDate = (stmtDay) => {
  const today = new Date();
  let lastStmt = new Date(today.getFullYear(), today.getMonth(), stmtDay);
  if (today.getDate() < stmtDay) lastStmt.setMonth(lastStmt.getMonth() - 1);
  lastStmt.setHours(0, 0, 0, 0);
  return lastStmt;
};

const getDates = (stmtDay, dueDay) => {
  const today = new Date(); 
  let nextStmt = new Date(today.getFullYear(), today.getMonth(), stmtDay);
  if (today.getDate() > stmtDay) nextStmt.setMonth(nextStmt.getMonth() + 1);
  let nextDue = new Date(nextStmt.getFullYear(), nextStmt.getMonth(), dueDay);
  if (dueDay < stmtDay) nextDue.setMonth(nextDue.getMonth() + 1);
  const daysToStmt = Math.ceil((nextStmt - today) / (1000 * 60 * 60 * 24));
  const daysToDue = Math.ceil((nextDue - today) / (1000 * 60 * 60 * 24));
  return { 
    stmt: nextStmt.toLocaleDateString('en-IN', { month: 'short', day: 'numeric' }), 
    due: nextDue.toLocaleDateString('en-IN', { month: 'short', day: 'numeric' }), 
    daysToStmt, daysToDue 
  };
};

export default function App() {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [appScriptUrl, setAppScriptUrl] = useState('');

  const [transactions, setTransactions] = useState([]);
  const [cardSpends, setCardSpends] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [portfolio, setPortfolio] = useState([]);
  const [customConfig, setCustomConfig] = useState({});
  const [editingCard, setEditingCard] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', bank: '', last4: '', limit: 0, balance: 0, emis: [], network: 'visa', stmtDate: 1, dueDate: 15 });
  const [editingTransaction, setEditingTransaction] = useState(null);
  const [editTxForm, setEditTxForm] = useState({ merchant: '', amount: 0, date: '', card: '' });
  const [cardTxFilter, setCardTxFilter] = useState('year'); // 'all', 'year', 'month'
  
  const [sortMode, setSortMode] = useState('custom');
  const [sortDirection, setSortDirection] = useState('desc');
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [draggedIdx, setDraggedIdx] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        try {
          const docRef = doc(db, 'users', currentUser.uid);
          const getDocPromise = getDoc(docRef);
          const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 5000));

          const docSnap = await Promise.race([getDocPromise, timeoutPromise]);

          if (docSnap.exists() && docSnap.data().appScriptUrl) {
            setAppScriptUrl(docSnap.data().appScriptUrl);
          } else {
            // Check local storage fallback
            const localUrl = localStorage.getItem('ccdeck_appScriptUrl');
            setAppScriptUrl(localUrl || '');
          }
        } catch (e) {
          console.error("Error fetching user doc, using fallback:", e);
          const localUrl = localStorage.getItem('ccdeck_appScriptUrl');
          setAppScriptUrl(localUrl || '');
        }
      } else {
        setAppScriptUrl('');
      }
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user || !appScriptUrl) return;

    const fetchLiveData = async () => {
      setIsLoading(true);
      try {
        let userPortfolio = [];
        let userConfig = {};

        try {
          const docRef = doc(db, 'users', user.uid);
          const getDocPromise = getDoc(docRef);
          const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 5000));
          const docSnap = await Promise.race([getDocPromise, timeoutPromise]);

          if (docSnap.exists()) {
            const data = docSnap.data();
            if (data.portfolio) {
               userPortfolio = JSON.parse(data.portfolio);
               // If for some reason it's empty, use initial
               if (userPortfolio.length === 0) {
                 userPortfolio = INITIAL_PORTFOLIO;
                 setDoc(doc(db, "users", user.uid), { portfolio: JSON.stringify(INITIAL_PORTFOLIO) }, { merge: true }).catch(()=>{});
               }
            } else {
               // First time or missing
               userPortfolio = INITIAL_PORTFOLIO;
               setDoc(doc(db, "users", user.uid), { portfolio: JSON.stringify(INITIAL_PORTFOLIO) }, { merge: true }).catch(()=>{});
            }

            if (data.customConfig) {
               userConfig = JSON.parse(data.customConfig);
            }
          } else {
               // User document doesn't exist but somehow has appScriptUrl (unlikely, but safe fallback)
               userPortfolio = INITIAL_PORTFOLIO;
               setDoc(doc(db, "users", user.uid), { portfolio: JSON.stringify(INITIAL_PORTFOLIO) }, { merge: true }).catch(()=>{});
          }
        } catch (e) {
          console.warn("Firestore fetch timed out or failed, using local fallback state", e);
          // Fallback to local state if firestore fails
          userPortfolio = portfolio.length > 0 ? portfolio : INITIAL_PORTFOLIO;
          userConfig = customConfig;
        }

        setPortfolio(userPortfolio);
        setCustomConfig(userConfig);

        // Fetch from AppScript with a timeout so UI doesn't hang forever
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 15000); // 15s timeout

        let response;
        try {
          response = await fetch(appScriptUrl + '?t=' + Date.now(), {
            cache: 'no-store',
            signal: controller.signal
          });
          clearTimeout(timeoutId);
        } catch (fetchErr) {
          clearTimeout(timeoutId);
          throw new Error("Failed to fetch from Google Apps Script. It might be taking too long or the URL is invalid.");
        }

        const data = await response.json();

        const currentSpends = {};
        const p = userPortfolio;
        const validTransactions = [];

        data.transactions?.forEach((row) => {
          const cardNum = String(row.card).trim();
          const cleanAmountStr = String(row.amount).replace(/[^\d.-]/g, '');
          const amount = Number(cleanAmountStr);

          if (isNaN(amount)) return;

          let txDate = new Date(row.date);
          if (isNaN(txDate.getTime()) && typeof row.date === 'string') {
            const parts = row.date.split('/');
            if (parts.length === 3) {
              txDate = new Date(`${parts[2]}-${parts[1]}-${parts[0]}T00:00:00.000Z`);
            }
          }

          // Reassign the clean parsed date and amount back so the Activity Feed can process them safely
          row.date = isNaN(txDate.getTime()) ? new Date().toISOString() : txDate.toISOString();
          row.amount = amount;
          row.card = cardNum;

          validTransactions.push(row);

          const cardInfo = p.find(c => c.last4 === cardNum);
          if (cardInfo) {
            currentSpends[cardNum] = (currentSpends[cardNum] || 0) + amount;
          }
        });

        setCardSpends(currentSpends);
        setTransactions(validTransactions);
        setIsLoading(false);
      } catch (error) {
        console.error("Fetch Live Data Error:", error);
        setIsLoading(false);
      }
    };
    fetchLiveData();
  }, [user, appScriptUrl]);

  const groupedTransactions = useMemo(() => {
    const groups = {};
    transactions.slice(0, 100).forEach(tx => {
      const d = new Date(tx.date);
      if (isNaN(d)) return;
      const monthYear = d.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
      if (!groups[monthYear]) groups[monthYear] = [];

      const formattedDate = d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
      groups[monthYear].push({ ...tx, formattedDate });
    });
    return groups;
  }, [transactions]);

  const displayPortfolio = useMemo(() => {
    let sorted = [...portfolio];

    if (sortMode === 'alphabetical') {
      sorted.sort((a, b) => sortDirection === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
    } else if (sortMode === 'usage') {
      sorted.sort((a, b) => {
        const diff = (cardSpends[b.last4] || 0) - (cardSpends[a.last4] || 0);
        return sortDirection === 'desc' ? diff : -diff;
      });
    } else if (sortMode === 'date') {
      sorted.sort((a, b) => {
        const diff = a.stmtDate - b.stmtDate;
        return sortDirection === 'asc' ? diff : -diff;
      });
    }

    return sorted;
  }, [portfolio, sortMode, sortDirection, cardSpends]);

  const onDragStart = (idx) => sortMode === 'custom' && setDraggedIdx(idx);
  const onDragOver = (e, idx) => {
    e.preventDefault();
    if (draggedIdx === null || draggedIdx === idx) return;
    const newP = [...portfolio];
    const item = newP.splice(draggedIdx, 1)[0];
    newP.splice(idx, 0, item);
    setPortfolio(newP);
    setDraggedIdx(idx);
  };
  const onDragEnd = () => { setDraggedIdx(null); syncPortfolio(portfolio); };

  const openEditModal = (card) => {
    const fetchedSpend = cardSpends[card.last4] || 0;
    const config = customConfig[card.last4] || {};
    setEditForm({ 
      id: card.id, name: card.name, bank: card.bank, last4: card.last4,
      limit: config.limit || card.limit, 
      balance: fetchedSpend + (config.adjustment || 0),
      emis: config.emis || [],
      network: card.network || 'visa',
      stmtDate: card.stmtDate || 1,
      dueDate: card.dueDate || 15
    });
    setEditingCard(card);
  };

  const addNewCard = () => {
    const newId = `card_${Date.now()}`;
    // Re-use PREMIUM_GRADIENTS from above
    const newCard = { id: newId, name: 'Platinum Card', bank: 'New Bank', last4: '0000', limit: 100000, stmtDate: 1, dueDate: 15, bg: PREMIUM_GRADIENTS[Math.floor(Math.random() * PREMIUM_GRADIENTS.length)], network: 'visa' };
    const updated = [...portfolio, newCard];
    setPortfolio(updated);
    syncPortfolio(updated);
    openEditModal(newCard);
  };

  const deleteCard = (id) => {
    if (window.confirm("Delete card??")) {
        const updated = portfolio.filter(c => c.id !== id);
        setPortfolio(updated);
        syncPortfolio(updated);
        setEditingCard(null);
    }
  };

  const syncPortfolio = async (p) => {
    if (!user) return;
    try {
      await setDoc(doc(db, "users", user.uid), {
        portfolio: JSON.stringify(p)
      }, { merge: true });
    } catch (e) {
      console.error("Failed to sync portfolio", e);
    }
  };

  const formatForTxInput = (isoString) => {
    const d = new Date(isoString);
    if (isNaN(d)) return isoString;
    const pad = (n) => String(n).padStart(2, '0');
    return `${pad(d.getDate())}-${pad(d.getMonth() + 1)}-${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  };

  const parseFromTxInput = (dateStr) => {
    // Expected format: DD-MM-YYYY HH:mm:ss
    const parts = dateStr.match(/(\d{2})-(\d{2})-(\d{4}) (\d{2}):(\d{2}):(\d{2})/);
    if (parts) {
      const [, day, month, year, hours, mins, secs] = parts;
      const d = new Date(`${year}-${month}-${day}T${hours}:${mins}:${secs}`);
      if (!isNaN(d)) return d.toISOString();
    }
    // Fallback if parsing fails or format is different
    const fallbackD = new Date(dateStr);
    if (!isNaN(fallbackD)) return fallbackD.toISOString();
    return dateStr;
  };

  const openEditTxModal = (tx) => {
    setEditTxForm({
      merchant: tx.merchant,
      amount: tx.amount,
      date: formatForTxInput(tx.date),
      card: tx.card,
      originalDate: tx.date,
      originalMerchant: tx.merchant,
      originalCard: tx.card
    });
    setEditingTransaction(tx);
  };

  const saveTxEdit = () => {
    // Note: To properly update this in Google Sheets, an explicit API method is needed.
    // For now, updating local state to reflect UI change.
    const updatedTransactions = transactions.map(t => {
      if (t.date === editTxForm.originalDate && t.merchant === editTxForm.originalMerchant && t.card === editTxForm.originalCard) {
        return { ...t, merchant: editTxForm.merchant, amount: Number(editTxForm.amount), card: editTxForm.card, date: parseFromTxInput(editTxForm.date) };
      }
      return t;
    });
    setTransactions(updatedTransactions);
    setEditingTransaction(null);
  };

  const saveEdit = async () => {
    if (!user) return;
    setIsSaving(true);
    const updatedP = portfolio.map(c => c.id === editingCard.id ? { ...c, name: editForm.name, bank: editForm.bank, last4: editForm.last4, network: editForm.network, stmtDate: editForm.stmtDate, dueDate: editForm.dueDate } : c);
    setPortfolio(updatedP);
    await syncPortfolio(updatedP);

    const fSpend = cardSpends[editForm.last4] || 0;
    const newAdj = editForm.balance - fSpend;
    const newConfig = { ...customConfig, [editForm.last4]: { limit: editForm.limit, adjustment: newAdj, emis: editForm.emis } };
    setCustomConfig(newConfig);

    try {
      await setDoc(doc(db, "users", user.uid), {
        customConfig: JSON.stringify(newConfig)
      }, { merge: true });
    } catch (e) {
      console.error("Failed to save config", e);
    }

    setIsSaving(false);
    setEditingCard(null);
  };

  const totalLimit = portfolio.reduce((sum, card) => sum + (customConfig[card.last4]?.limit || card.limit), 0);
  const totalSpent = portfolio.reduce((sum, card) => {
    const fSpend = cardSpends[card.last4] || 0;
    const adj = customConfig[card.last4]?.adjustment || 0;
    return sum + Math.max(0, fSpend + adj);
  }, 0);

  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-[#05070a] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <Login />;
  }

  if (!appScriptUrl) {
    return <SetupWizard user={user} onComplete={(url) => setAppScriptUrl(url)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#05070a] text-gray-900 dark:text-gray-100 p-4 md:p-10 font-sans selection:bg-indigo-500/30 overflow-x-hidden transition-colors duration-300">
      <header className="max-w-7xl mx-auto mb-10 md:mb-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-10 text-center md:text-left">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="p-3 bg-indigo-600 rounded-2xl shadow-lg">
              <ShieldCheck className="text-white w-7 h-7" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white tracking-tight leading-none uppercase">ccdeck</h1>
              <p className="text-gray-500 font-bold tracking-[0.2em] mt-2 uppercase text-[9px]">Financial Control v2.0</p>
            </div>
          </div>
          <div className="flex gap-4 items-center w-full md:w-auto">
            <button onClick={addNewCard} className="flex-1 md:flex-none bg-white dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white px-5 py-4 rounded-2xl font-black transition-all flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest shadow-sm dark:shadow-none">
               <Plus size={16} className="text-indigo-500 dark:text-indigo-400" /> Add Card
            </button>
            <button onClick={() => window.location.reload()} disabled={isLoading} className="flex-1 md:flex-none bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white px-7 py-4 rounded-2xl font-black transition-all flex items-center justify-center gap-2 shadow-lg text-[10px] uppercase tracking-widest">
                {isLoading ? <Loader2 size={16} className="animate-spin" /> : <RefreshCcw size={16} />} Sync
            </button>
            <ProfileMenu user={user} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white dark:bg-[#0c1017] border border-gray-200 dark:border-white/5 rounded-[2rem] p-7 md:p-8 shadow-xl dark:shadow-2xl relative overflow-hidden group transition-colors">
            <div className="text-gray-400 dark:text-gray-500 text-[9px] font-black uppercase tracking-[0.3em] mb-3">Total Credit Line</div>
            <div className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tighter">{formatInr(totalLimit)}</div>
          </div>
          <div className="bg-white dark:bg-[#0c1017] border border-gray-200 dark:border-white/5 rounded-[2rem] p-7 md:p-8 shadow-xl dark:shadow-2xl relative overflow-hidden group transition-colors">
            <div className="text-gray-400 dark:text-gray-500 text-[9px] font-black uppercase tracking-[0.3em] mb-3 flex items-center gap-2"><TrendingUp size={12} className="text-rose-500" /> Net Debt</div>
            <div className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tighter">{isLoading ? '...' : formatInr(totalSpent)}</div>
            <div className="absolute bottom-0 left-0 h-1 bg-gray-100 dark:bg-white/5 w-full"><div className="h-full bg-gradient-to-r from-rose-500 to-indigo-500 transition-all duration-1000 shadow-[0_0_15px_rgba(244,63,94,0.4)]" style={{ width: `${(totalSpent/totalLimit)*100}%` }}></div></div>
          </div>
          <div className="bg-white dark:bg-[#0c1017] border border-gray-200 dark:border-white/5 rounded-[2rem] p-7 md:p-8 shadow-xl dark:shadow-2xl relative overflow-hidden group text-center md:text-left transition-colors">
            <div className="text-gray-400 dark:text-gray-500 text-[9px] font-black uppercase tracking-[0.3em] mb-3 flex items-center justify-center md:justify-start gap-2"><PieChart size={12} className="text-emerald-500" /> Utilization</div>
            <div className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tighter">{isLoading ? '...' : `${((totalSpent / totalLimit) * 100).toFixed(1)}%`}</div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 pb-32">
        <div className="lg:col-span-2 space-y-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-2 gap-4">
            <h2 className="text-sm font-black uppercase tracking-widest text-gray-400 dark:text-gray-500 flex items-center gap-2">
               <ArrowUpDown size={14} /> View Order
               <button onClick={() => setShowSortMenu(!showSortMenu)} className="ml-2 hover:text-gray-900 dark:hover:text-white transition-colors">
                 {showSortMenu ? <EyeOff size={16} /> : <Eye size={16} />}
               </button>
            </h2>
            {showSortMenu && (
              <div className="flex flex-wrap bg-white dark:bg-white/5 p-1 rounded-xl border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none">
                {[{ id: 'custom', label: 'Custom' }, { id: 'usage', label: 'Usage' }, { id: 'date', label: 'Date' }, { id: 'alphabetical', label: 'A-Z' }].map(mode => (
                  <button
                    key={mode.id}
                    onClick={() => {
                      if (sortMode === mode.id && mode.id !== 'custom') {
                        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
                      } else {
                        setSortMode(mode.id);
                        if (mode.id === 'date') setSortDirection('asc');
                        else if (mode.id === 'usage') setSortDirection('desc');
                        else if (mode.id === 'alphabetical') setSortDirection('asc');
                      }
                    }}
                    className={`px-4 py-1.5 flex items-center gap-1 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${sortMode === mode.id ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}
                  >
                    {mode.label}
                    {sortMode === mode.id && mode.id !== 'custom' && (
                      <ArrowUpDown size={10} className={sortDirection === 'asc' ? 'rotate-180' : ''} />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {displayPortfolio.map((card, index) => {
              const fSpend = cardSpends[card.last4] || 0;
              const config = customConfig[card.last4] || {};
              const spent = fSpend + (config.adjustment || 0);
              const activeLimit = config.limit || card.limit;
              const util = Math.min(100, (spent / activeLimit) * 100);
              const dates = getDates(card.stmtDate, card.dueDate);
              const monthlyEmi = (config.emis || []).reduce((sum, e) => sum + Number(e.emiAmount || 0), 0);

              return (
                <div key={card.id} draggable={sortMode === 'custom'} onDragStart={() => onDragStart(index)} onDragOver={(e) => onDragOver(e, index)} onDragEnd={onDragEnd} className={`group relative bg-white dark:bg-[#0c1017] border border-gray-200 dark:border-white/5 rounded-[2.5rem] p-2 transition-all hover:border-indigo-500/30 dark:hover:border-indigo-500/20 shadow-xl dark:shadow-none ${draggedIdx === index ? 'opacity-20 scale-95' : 'opacity-100'} ${sortMode === 'custom' ? 'cursor-grab active:cursor-grabbing' : ''}`}>
                  <div className={`relative h-52 rounded-[2rem] p-7 flex flex-col justify-between overflow-hidden ${card.bg} shadow-lg dark:shadow-2xl`}>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
                    {card.image && <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{ backgroundImage: `url('${card.image}')` }}></div>}
                    <div className="flex justify-between items-start z-10">
                      <div>
                        <div className="text-white font-black tracking-tight text-lg drop-shadow-xl uppercase truncate w-32">{card.bank}</div>
                        <div className="text-white/80 text-[10px] font-bold tracking-[0.2em] uppercase mt-1 truncate w-32">{card.name}</div>
                      </div>
                      <div className="z-20 drop-shadow-2xl"><CardNetworkLogo network={card.network} /></div>
                    </div>
                    <div className="z-10 flex justify-between items-end">
                      <div className="font-mono text-xl md:text-2xl tracking-[0.3em] text-white flex gap-3 drop-shadow-2xl font-black">
                        <span className="opacity-40">••••</span><span>{card.last4}</span>
                      </div>
                      {sortMode === 'custom' && <div className="p-2 bg-black/20 rounded-lg text-white/40"><GripVertical size={16} /></div>}
                    </div>
                  </div>

                  <div className="p-7 space-y-6 relative">
                    <button onClick={() => openEditModal(card)} className="absolute top-4 right-6 p-2.5 text-gray-400 hover:text-gray-900 dark:text-gray-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-xl transition-all z-20"><Settings size={18} /></button>
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-[8px] text-gray-400 dark:text-gray-500 uppercase font-black tracking-[0.2em] mb-1.5">Live Spend</div>
                        <div className={`text-2xl font-black ${spent < 0 ? 'text-emerald-500 dark:text-emerald-400' : 'text-gray-900 dark:text-white'} tracking-tighter`}>{isLoading ? '...' : formatInr(spent)}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[8px] text-gray-400 dark:text-gray-500 uppercase font-black tracking-[0.2em] mb-1.5">Installments</div>
                        <div className="text-lg font-black text-amber-500 dark:text-amber-400 tracking-tighter">{formatInr(monthlyEmi)}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-full bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden shadow-inner flex-1">
                        <div className={`h-full rounded-full transition-all duration-1000 ${util > 30 ? 'bg-amber-500' : 'bg-indigo-500 dark:bg-indigo-600'}`} style={{ width: `${util}%` }}></div>
                      </div>
                      <span className="text-[8px] font-black text-gray-400 dark:text-gray-500 tracking-widest">{util.toFixed(1)}%</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100 dark:border-white/5">
                      <div className="flex flex-col gap-1">
                        <span className="text-[8px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Statement</span>
                        <div className="flex items-center gap-1.5 text-[10px] font-black text-gray-900 dark:text-white"><Calendar size={10} className="text-indigo-500 dark:text-indigo-400" /> {dates.stmt}</div>
                      </div>
                      <div className="flex flex-col gap-1 text-right">
                        <span className="text-[8px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Payment Due</span>
                        <div className={`flex items-center justify-end gap-1.5 text-[10px] font-black ${dates.daysToDue <= 7 ? 'text-rose-500' : 'text-gray-900 dark:text-white'}`}>{dates.due} <Clock size={10} /></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-10">
          <div className="bg-white dark:bg-[#0c1017] border border-gray-200 dark:border-white/5 rounded-[2.5rem] p-8 shadow-xl dark:shadow-2xl transition-colors">
            <h2 className="text-xl font-black flex items-center gap-3 mb-8 uppercase tracking-tighter text-gray-900 dark:text-white"><RefreshCcw size={22} className="text-indigo-500" /> Activity Feed</h2>
            {isLoading ? (
              <div className="flex justify-center items-center py-20"><Loader2 size={32} className="text-indigo-500 dark:text-indigo-600 animate-spin" /></div>
            ) : (
              <div className="space-y-8 max-h-[700px] overflow-y-auto pr-2 custom-scrollbar">
                {Object.entries(groupedTransactions).map(([monthYear, monthTxs], groupIdx) => (
                  <div key={groupIdx} className="space-y-4">
                    <h3 className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] sticky top-0 bg-white/90 dark:bg-[#0c1017]/90 backdrop-blur-md py-2 z-10 border-b border-gray-100 dark:border-white/5 transition-colors">
                      {monthYear}
                    </h3>
                    {monthTxs.map((tx, idx) => {
                      const cardInfo = portfolio.find(c => c.last4 === tx.card);
                      const isCredit = tx.amount < 0;
                      return (
                        <div key={idx} onClick={() => openEditTxModal(tx)} className="flex justify-between items-center p-5 rounded-2xl bg-gray-50 hover:bg-gray-100 dark:bg-white/[0.02] dark:hover:bg-white/[0.05] border border-gray-100 dark:border-white/5 group cursor-pointer transition-colors shadow-sm">
                          <div className="flex gap-4 items-center overflow-hidden flex-1">
                            <div className={`w-12 h-12 shrink-0 rounded-[1rem] flex items-center justify-center ${cardInfo?.bg || 'bg-gray-800'} text-white text-[10px] font-black shadow-lg dark:shadow-xl relative overflow-hidden border border-black/10 dark:border-white/10`}>
                              <span className="relative z-10">{tx.card}</span>
                            </div>
                            <div className="overflow-hidden flex-1">
                              <div className="font-black text-gray-900 dark:text-white text-sm truncate group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors uppercase tracking-tight">{tx.merchant}</div>
                              <div className="text-[9px] font-bold text-gray-400 dark:text-gray-500 uppercase mt-1 tracking-[0.1em]">{tx.formattedDate}</div>
                            </div>
                          </div>
                          <div className={`font-black text-sm shrink-0 ml-4 ${isCredit ? 'text-emerald-500 dark:text-emerald-400' : 'text-rose-500'} tracking-tighter`}>{isCredit ? '+' : '-'}{formatInr(Math.abs(tx.amount))}</div>
                        </div>
                      );
                    })}
                  </div>
                ))}
                {Object.keys(groupedTransactions).length === 0 && (
                  <div className="text-center py-10 text-gray-400 dark:text-gray-500 text-xs font-black uppercase tracking-widest">No activity found</div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>

      {editingCard && (
        <div className="fixed inset-0 bg-black/50 dark:bg-black/95 backdrop-blur-2xl z-50 flex items-center justify-center p-4 md:p-8 overflow-y-auto">
          <div className="bg-white dark:bg-[#0c1017] border border-gray-200 dark:border-white/10 rounded-[3rem] overflow-hidden w-full max-w-6xl shadow-2xl my-auto flex flex-col md:flex-row transition-colors h-[90vh]">

            {/* Left Side: Settings */}
            <div className="flex flex-col w-full md:w-1/2 border-b md:border-b-0 md:border-r border-gray-200 dark:border-white/5 bg-white dark:bg-[#0c1017] z-10 transition-colors">
              <div className="p-6 md:p-8 border-b border-gray-200 dark:border-white/5 flex justify-between items-center shrink-0">
                <div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">Card Config</h3>
                  <p className="text-xs font-black text-indigo-500 uppercase mt-1 tracking-widest leading-none">Settings & Limits</p>
                </div>
                {/* Mobile close button only */}
                <button onClick={() => setEditingCard(null)} className="md:hidden p-3 bg-gray-100 dark:bg-white/5 rounded-xl text-gray-500 hover:text-gray-900 dark:hover:text-white transition-all"><X size={20}/></button>
              </div>

              <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar flex-1 space-y-10">
                <div className="grid grid-cols-1 gap-6">
                  <div><label className="block text-[11px] font-black text-gray-500 uppercase mb-3 tracking-widest">Descriptor</label><input value={editForm.name} onChange={(e) => setEditForm({...editForm, name: e.target.value})} className="w-full bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 rounded-2xl px-5 py-4 text-gray-900 dark:text-white font-black outline-none uppercase text-sm" /></div>
                  <div className="grid grid-cols-2 gap-6">
                    <div><label className="block text-[11px] font-black text-gray-500 uppercase mb-3 tracking-widest">Institution</label><input value={editForm.bank} onChange={(e) => setEditForm({...editForm, bank: e.target.value})} className="w-full bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 rounded-2xl px-5 py-4 text-gray-900 dark:text-white font-black outline-none uppercase text-sm" /></div>
                    <div><label className="block text-[11px] font-black text-gray-500 uppercase mb-3 tracking-widest">Ending In</label><input value={editForm.last4} onChange={(e) => setEditForm({...editForm, last4: e.target.value})} className="w-full bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 rounded-2xl px-5 py-4 text-gray-900 dark:text-white font-black outline-none text-sm" maxLength={4} /></div>
                  </div>
                  <div><label className="block text-[11px] font-black text-gray-500 uppercase mb-3 tracking-widest">Network Logic</label><select value={editForm.network} onChange={(e) => setEditForm({...editForm, network: e.target.value})} className="w-full bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 rounded-2xl px-5 py-4 text-gray-900 dark:text-white font-black outline-none uppercase text-sm"><option value="visa">Visa</option><option value="mastercard">Mastercard</option><option value="amex">Amex</option><option value="rupay">RuPay</option></select></div>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-200 dark:border-white/5">
                  <div><label className="block text-[11px] font-black text-gray-500 uppercase mb-3 tracking-widest">Stmt Date</label><input type="number" min="1" max="31" value={editForm.stmtDate} onChange={(e) => setEditForm({...editForm, stmtDate: Number(e.target.value)})} className="w-full bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 rounded-2xl px-5 py-4 text-gray-900 dark:text-white font-black text-center text-sm" /></div>
                  <div><label className="block text-[11px] font-black text-gray-500 uppercase mb-3 tracking-widest">Due Date</label><input type="number" min="1" max="31" value={editForm.dueDate} onChange={(e) => setEditForm({...editForm, dueDate: Number(e.target.value)})} className="w-full bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 rounded-2xl px-5 py-4 text-gray-900 dark:text-white font-black text-center text-sm" /></div>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-200 dark:border-white/5">
                  <div><label className="block text-[11px] font-black text-gray-500 uppercase mb-3 tracking-widest">Credit Line</label><input type="number" value={editForm.limit} onChange={(e) => setEditForm({...editForm, limit: Number(e.target.value)})} className="w-full bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 rounded-2xl px-5 py-4 text-gray-900 dark:text-white font-black outline-none text-sm" /></div>
                  <div><label className="block text-[11px] font-black text-gray-500 uppercase mb-3 tracking-widest">Live Spend</label><input type="number" value={editForm.balance} onChange={(e) => setEditForm({...editForm, balance: Number(e.target.value)})} className="w-full bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 rounded-2xl px-5 py-4 text-gray-900 dark:text-white font-black outline-none text-sm" /></div>
                </div>

                <div className="space-y-6 pt-6 border-t border-gray-200 dark:border-white/5">
                  <div className="flex justify-between items-center"><label className="block text-[11px] font-black text-gray-500 uppercase tracking-widest">EMI Inventory</label><button onClick={() => setEditForm({...editForm, emis: [...editForm.emis, { id: Date.now(), merchant: '', emiAmount: 0, totalLoanAmount: 0, interestRate: 0, tenureRemaining: 12, firstPaymentMonth: '', totalTenure: 12 }]})} className="px-5 py-3 bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-lg"><Plus size={14}/> New Loan</button></div>
                  <div className="space-y-6">
                    {editForm.emis.map((emi) => {
                      let endText = '';
                      if (emi.firstPaymentMonth && emi.totalTenure) {
                        const [year, month] = emi.firstPaymentMonth.split('-');
                        const d = new Date(year, month - 1);
                        d.setMonth(d.getMonth() + Number(emi.totalTenure) - 1);
                        endText = d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
                      } else if (emi.tenureRemaining) {
                        const d = new Date();
                        d.setMonth(d.getMonth() + Number(emi.tenureRemaining) - 1);
                        endText = d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
                      }

                      return (
                        <div key={emi.id} className="p-6 bg-gray-50 dark:bg-black/40 rounded-[2rem] border border-gray-200 dark:border-white/5 space-y-6 relative">
                          <button onClick={() => setEditForm({ ...editForm, emis: editForm.emis.filter(e => e.id !== emi.id) })} className="absolute top-5 right-5 p-2 bg-rose-500/10 rounded-xl text-rose-500 hover:bg-rose-500 hover:text-white transition-colors"><Trash2 size={16}/></button>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="col-span-1 md:col-span-2"><label className="text-[10px] font-black text-gray-600 uppercase mb-2 block tracking-widest">Purchase</label><input placeholder="e.g. iPhone 15 Pro" value={emi.merchant} onChange={(e) => setEditForm({...editForm, emis: editForm.emis.map(item => item.id === emi.id ? {...item, merchant: e.target.value} : item)})} className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-xl px-4 py-3 text-sm font-black text-gray-900 dark:text-white outline-none" /></div>
                            <div className="grid grid-cols-2 gap-4">
                              <div><label className="text-[10px] font-black text-gray-600 uppercase mb-2 block tracking-widest">Monthly EMI</label><input type="number" value={emi.emiAmount} onChange={(e) => setEditForm({...editForm, emis: editForm.emis.map(item => item.id === emi.id ? {...item, emiAmount: Number(e.target.value)} : item)})} className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-xl px-4 py-3 text-sm font-black text-gray-900 dark:text-white outline-none" /></div>
                              <div><label className="text-[10px] font-black text-gray-600 uppercase mb-2 block tracking-widest">Total Amount</label><input type="number" value={emi.totalLoanAmount} onChange={(e) => setEditForm({...editForm, emis: editForm.emis.map(item => item.id === emi.id ? {...item, totalLoanAmount: Number(e.target.value)} : item)})} className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-xl px-4 py-3 text-sm font-black text-gray-900 dark:text-white outline-none" /></div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div><label className="text-[10px] font-black text-gray-600 uppercase mb-2 block tracking-widest">First Pay Mth</label><input type="month" value={emi.firstPaymentMonth || ''} onChange={(e) => setEditForm({...editForm, emis: editForm.emis.map(item => item.id === emi.id ? {...item, firstPaymentMonth: e.target.value} : item)})} className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-xl px-4 py-3 text-sm font-black text-gray-900 dark:text-white outline-none dark:[color-scheme:dark]" /></div>
                              <div><label className="text-[10px] font-black text-gray-600 uppercase mb-2 block tracking-widest">Total Months</label><input type="number" value={emi.totalTenure || emi.tenureRemaining || 12} onChange={(e) => setEditForm({...editForm, emis: editForm.emis.map(item => item.id === emi.id ? {...item, totalTenure: Number(e.target.value)} : item)})} className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-xl px-4 py-3 text-sm font-black text-gray-900 dark:text-white outline-none" /></div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div><label className="text-[10px] font-black text-gray-600 uppercase mb-2 block tracking-widest">Rate %</label><input type="number" value={emi.interestRate} onChange={(e) => setEditForm({...editForm, emis: editForm.emis.map(item => item.id === emi.id ? {...item, interestRate: Number(e.target.value)} : item)})} className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-xl px-4 py-3 text-sm font-black text-gray-900 dark:text-white outline-none" /></div>
                              <div><label className="text-[10px] font-black text-gray-600 uppercase mb-2 block tracking-widest">Months Left</label><input type="number" value={emi.tenureRemaining} onChange={(e) => setEditForm({...editForm, emis: editForm.emis.map(item => item.id === emi.id ? {...item, tenureRemaining: Number(e.target.value)} : item)})} className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-xl px-4 py-3 text-sm font-black text-gray-900 dark:text-white outline-none" /></div>
                            </div>
                          </div>
                          {endText && (
                            <div className="mt-5 pt-5 border-t border-gray-200 dark:border-white/5 text-right">
                               <span className="text-[10px] font-black text-indigo-500 dark:text-indigo-400 uppercase tracking-widest">Active Until: {endText}</span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-6">
                  <button onClick={() => deleteCard(editingCard.id)} className="w-full py-5 bg-rose-50 hover:bg-rose-100 dark:bg-rose-500/5 dark:hover:bg-rose-500/10 text-rose-500 rounded-2xl text-[11px] font-black uppercase tracking-[0.4em] transition-all flex items-center justify-center gap-3 border border-rose-200 dark:border-rose-500/10"><Trash2 size={16} /> Delete Card</button>
                </div>
              </div>

              <div className="p-6 md:p-8 bg-gray-50 dark:bg-[#0a0d13] border-t border-gray-200 dark:border-white/5 flex gap-4 shrink-0 transition-colors">
                <button disabled={isSaving} onClick={() => setEditingCard(null)} className="flex-1 py-5 rounded-2xl font-black text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:hover:text-white dark:hover:bg-white/5 transition-all uppercase text-[11px] tracking-widest">Discard</button>
                <button disabled={isSaving} onClick={saveEdit} className="flex-[2] flex items-center justify-center gap-2 py-5 rounded-2xl font-black bg-indigo-600 hover:bg-indigo-700 text-white transition-all shadow-lg uppercase text-[11px] tracking-widest">{isSaving ? <Loader2 size={16} className="animate-spin" /> : 'Synchronize Settings'}</button>
              </div>
            </div>

            {/* Right Side: Card Activity */}
            <div className="flex flex-col w-full md:w-1/2 bg-gray-100 dark:bg-[#05070a]/50 relative z-0 transition-colors">
              <div className="p-6 md:p-8 border-b border-gray-200 dark:border-white/5 flex justify-between items-center shrink-0">
                <div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tighter flex items-center gap-3"><RefreshCcw size={24} className="text-indigo-500"/> Transactions</h3>
                  <p className="text-xs font-black text-gray-500 uppercase mt-1 tracking-widest leading-none">Ending in {editingCard.last4}</p>
                </div>
                <div className="flex items-center gap-4">
                  <select
                    value={cardTxFilter}
                    onChange={(e) => setCardTxFilter(e.target.value)}
                    className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white text-[10px] font-black uppercase tracking-widest rounded-xl px-4 py-3 outline-none"
                  >
                    <option value="year">This Year</option>
                    <option value="statement">Current Statement</option>
                    <option value="all">All Time</option>
                  </select>
                  {/* Desktop close button */}
                  <button onClick={() => setEditingCard(null)} className="hidden md:block p-3 bg-gray-200 dark:bg-white/5 rounded-xl text-gray-500 hover:text-gray-900 dark:hover:text-white transition-all"><X size={20}/></button>
                </div>
              </div>

              <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar flex-1">
                <div className="space-y-4">
                  {(() => {
                    const cardTxs = transactions.filter(tx => tx.card === editingCard.last4);
                    let filteredTxs = cardTxs;

                    const now = new Date();
                    if (cardTxFilter === 'year') {
                       filteredTxs = cardTxs.filter(tx => new Date(tx.date).getFullYear() === now.getFullYear());
                    } else if (cardTxFilter === 'statement') {
                       // Calculate statement start and end dates
                       const stmtDay = editingCard.stmtDate || 1;
                       let cycleStart = new Date(now.getFullYear(), now.getMonth(), stmtDay);
                       if (now.getDate() < stmtDay) {
                         cycleStart.setMonth(cycleStart.getMonth() - 1);
                       }
                       cycleStart.setHours(0, 0, 0, 0);

                       let cycleEnd = new Date(cycleStart);
                       cycleEnd.setMonth(cycleEnd.getMonth() + 1);
                       cycleEnd.setHours(23, 59, 59, 999);

                       filteredTxs = cardTxs.filter(tx => {
                         const d = new Date(tx.date);
                         return d >= cycleStart && d < cycleEnd;
                       });
                    }

                    if (filteredTxs.length === 0) {
                      return <div className="text-center py-20 text-gray-400 dark:text-gray-500 text-sm font-black uppercase tracking-widest">No matching transactions found</div>;
                    }

                    return filteredTxs.map((tx, idx) => {
                      const isCredit = tx.amount < 0;
                      const d = new Date(tx.date);
                      const formattedDate = !isNaN(d) ? d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Unknown Date';

                      return (
                        <div key={idx} onClick={() => {setEditingTransaction(tx); setEditingCard(null);}} className="flex justify-between items-center p-5 rounded-2xl bg-white dark:bg-white/[0.02] hover:bg-gray-50 dark:hover:bg-white/[0.05] border border-gray-200 dark:border-white/5 group cursor-pointer transition-colors shadow-sm">
                          <div className="flex gap-4 items-center overflow-hidden flex-1">
                            <div className="overflow-hidden flex-1">
                              <div className="font-black text-gray-900 dark:text-white text-base truncate group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors uppercase tracking-tight">{tx.merchant}</div>
                              <div className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase mt-1 tracking-widest">{formattedDate}</div>
                            </div>
                          </div>
                          <div className={`font-black text-lg shrink-0 ml-4 ${isCredit ? 'text-emerald-500 dark:text-emerald-400' : 'text-rose-500'} tracking-tighter`}>{isCredit ? '+' : '-'}{formatInr(Math.abs(tx.amount))}</div>
                        </div>
                      );
                    });
                  })()}
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {editingTransaction && (
        <div className="fixed inset-0 bg-black/50 dark:bg-black/95 backdrop-blur-2xl z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white dark:bg-[#0c1017] border border-gray-200 dark:border-white/10 rounded-[3rem] overflow-hidden w-full max-w-lg shadow-2xl my-auto flex flex-col transition-all">
            <div className="p-8 border-b border-gray-100 dark:border-white/5 flex justify-between items-center">
              <div><h3 className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">Edit Transaction</h3><p className="text-[9px] font-black text-indigo-500 uppercase mt-1 tracking-widest leading-none">Manual Override</p></div>
              <button onClick={() => setEditingTransaction(null)} className="p-3 bg-gray-100 dark:bg-white/5 rounded-xl text-gray-500 hover:text-gray-900 dark:hover:text-white transition-all"><X size={20}/></button>
            </div>
            <div className="p-8 space-y-6">
              <div>
                <label className="block text-[9px] font-black text-gray-400 dark:text-gray-500 uppercase mb-3 tracking-widest">Merchant / Description</label>
                <input value={editTxForm.merchant} onChange={(e) => setEditTxForm({...editTxForm, merchant: e.target.value})} className="w-full bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 rounded-xl px-5 py-4 text-gray-900 dark:text-white font-black outline-none uppercase text-xs" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[9px] font-black text-gray-400 dark:text-gray-500 uppercase mb-3 tracking-widest">Amount</label>
                  <input type="number" value={editTxForm.amount} onChange={(e) => setEditTxForm({...editTxForm, amount: e.target.value})} className="w-full bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 rounded-xl px-5 py-4 text-gray-900 dark:text-white font-black outline-none text-xs" />
                </div>
                <div>
                  <label className="block text-[9px] font-black text-gray-400 dark:text-gray-500 uppercase mb-3 tracking-widest">Card Ending</label>
                  <input value={editTxForm.card} onChange={(e) => setEditTxForm({...editTxForm, card: e.target.value})} className="w-full bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 rounded-xl px-5 py-4 text-gray-900 dark:text-white font-black outline-none text-xs" maxLength={4} />
                </div>
              </div>
              <div>
                <label className="block text-[9px] font-black text-gray-400 dark:text-gray-500 uppercase mb-3 tracking-widest">Date / Time string</label>
                <input value={editTxForm.date} onChange={(e) => setEditTxForm({...editTxForm, date: e.target.value})} className="w-full bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 rounded-xl px-5 py-4 text-gray-900 dark:text-white font-black outline-none text-xs" />
              </div>
            </div>
            <div className="p-8 bg-gray-50 dark:bg-black/50 border-t border-gray-200 dark:border-white/5 flex gap-4">
              <button onClick={() => setEditingTransaction(null)} className="flex-1 py-4 rounded-2xl font-black text-gray-500 hover:text-gray-900 dark:hover:text-white transition-all uppercase text-[9px] tracking-widest">Discard</button>
              <button onClick={saveTxEdit} className="flex-[2] py-4 rounded-2xl font-black bg-indigo-600 hover:bg-indigo-700 text-white transition-all shadow-lg uppercase text-[9px] tracking-widest">Update Locally</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
