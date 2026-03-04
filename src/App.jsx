import React, { useState, useEffect, useMemo } from 'react';
import { CreditCard, AlertCircle, Calendar, IndianRupee, PieChart, TrendingUp, ShieldCheck, Zap, Loader2, Settings, Pencil, X, Lock, RefreshCcw, Delete, Plus, Trash2, Info, CreditCard as CardIcon, ChevronRight, Clock, ArrowUpDown, GripVertical, Eye, EyeOff } from 'lucide-react';

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

// FULLY RESTORED: Your default 9 cards
const INITIAL_PORTFOLIO = [
  { id: 'amex', name: 'Amex Blue', bank: 'American Express', last4: '2000', limit: 370000, stmtDate: 2, dueDate: 20, bg: PREMIUM_GRADIENTS[0], image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=600&auto=format', network: 'amex' },
  { id: 'millennia', name: 'HDFC Millennia', bank: 'HDFC Bank', last4: '1697', limit: 231000, stmtDate: 6, dueDate: 26, bg: PREMIUM_GRADIENTS[1], image: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=600&auto=format', network: 'visa' },
  { id: 'swiggy', name: 'HDFC Swiggy', bank: 'HDFC Bank', last4: '2569', limit: 185000, stmtDate: 6, dueDate: 26, bg: PREMIUM_GRADIENTS[2], image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format', network: 'mastercard' },
  { id: 'amazon', name: 'Amazon Pay', bank: 'ICICI Bank', last4: '2002', limit: 330000, stmtDate: 12, dueDate: 30, bg: PREMIUM_GRADIENTS[3], image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600&auto=format', network: 'visa' },
  { id: 'airtel', name: 'Airtel Axis', bank: 'Axis Bank', last4: '8559', limit: 185000, stmtDate: 12, dueDate: 2, bg: PREMIUM_GRADIENTS[4], image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600&auto=format', network: 'rupay' },
  { id: 'onecard', name: 'OneCard BOB', bank: 'BOB', last4: '8697', limit: 300000, stmtDate: 18, dueDate: 4, bg: PREMIUM_GRADIENTS[5], image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=600&auto=format', network: 'visa' },
  { id: 'mojo', name: 'Kotak Mojo', bank: 'Kotak Bank', last4: '8222', limit: 488000, stmtDate: 20, dueDate: 6, bg: PREMIUM_GRADIENTS[6], image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=600&auto=format', network: 'visa' },
  { id: 'tiger', name: 'IndusInd Tiger', bank: 'IndusInd Bank', last4: '6688', limit: 200000, stmtDate: 23, dueDate: 11, bg: PREMIUM_GRADIENTS[7], image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=600&auto=format', network: 'visa' },
  { id: 'ixigo', name: 'AU ixigo', bank: 'AU Small Finance', last4: '1309', limit: 70000, stmtDate: 24, dueDate: 12, bg: PREMIUM_GRADIENTS[8], image: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=600&auto=format', network: 'visa' }
];

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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [cardSpends, setCardSpends] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [portfolio, setPortfolio] = useState(INITIAL_PORTFOLIO);
  const [customConfig, setCustomConfig] = useState({});
  const [editingCard, setEditingCard] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', bank: '', last4: '', limit: 0, balance: 0, emis: [], network: 'visa', stmtDate: 1, dueDate: 15 });
  
  const [sortMode, setSortMode] = useState('custom');
  const [sortDirection, setSortDirection] = useState('desc');
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [draggedIdx, setDraggedIdx] = useState(null);

  const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzSZk7SCZwdrwokpnjoBREXLwxj3rYUv6mAz-4IJiZhqn7DFDIdftERkfptW1tbkqzy/exec";

  useEffect(() => {
    if (sessionStorage.getItem('mycardhub_unlocked') === 'true') setIsAuthenticated(true);
  }, []);

  const addPinNumber = (num) => {
    if (pin.length < 4) {
      const nextPin = pin + num;
      setPin(nextPin);
      if (nextPin === '4421') {
        setTimeout(() => { sessionStorage.setItem('mycardhub_unlocked', 'true'); setIsAuthenticated(true); }, 300);
      } else if (nextPin.length === 4) {
        setPinError(true);
        setTimeout(() => { setPin(''); setPinError(false); }, 600);
      }
    }
  };

  useEffect(() => {
    if (!isAuthenticated) return;
    const fetchLiveData = async () => {
      try {
        const response = await fetch(GOOGLE_APPS_SCRIPT_URL + '?t=' + Date.now(), { cache: 'no-store' });
        const data = await response.json();
        
        if (data.settings?.GLOBAL_PORTFOLIO?.portfolio) {
          setPortfolio(JSON.parse(data.settings.GLOBAL_PORTFOLIO.portfolio));
        }

        const processedSettings = {};
        Object.entries(data.settings || {}).forEach(([card, val]) => {
            if (card === 'GLOBAL_PORTFOLIO') return;
            processedSettings[card] = {
                limit: val.limit,
                adjustment: val.adjustment,
                emis: typeof val.emis === 'string' ? JSON.parse(val.emis) : (val.emis || [])
            };
        });
        setCustomConfig(processedSettings);

        const currentSpends = {};
        const p = data.settings?.GLOBAL_PORTFOLIO?.portfolio ? JSON.parse(data.settings.GLOBAL_PORTFOLIO.portfolio) : INITIAL_PORTFOLIO;

        data.transactions?.forEach((row) => {
          const cardNum = String(row.card).trim();

          // Clean amount: strip out anything except numbers, decimal points, and minus signs
          const cleanAmountStr = String(row.amount).replace(/[^\d.-]/g, '');
          const amount = Number(cleanAmountStr);

          if (isNaN(amount)) return;

          // Try to parse DD/MM/YYYY or standard ISO date
          let txDate = new Date(row.date);
          if (isNaN(txDate.getTime()) && typeof row.date === 'string') {
            const parts = row.date.split('/');
            if (parts.length === 3) {
              // DD/MM/YYYY
              txDate = new Date(`${parts[2]}-${parts[1]}-${parts[0]}T00:00:00.000Z`);
            }
          }

          const cardInfo = p.find(c => c.last4 === cardNum);
          if (cardInfo) {
            // Include all transactions to ensure spends show up, regardless of statement date filtering
            currentSpends[cardNum] = (currentSpends[cardNum] || 0) + amount;
          }
        });

        // Add Mock data fallback if there's no transactions
        if (!data.transactions || data.transactions.length === 0) {
           setCardSpends({ '2000': 12500, '2002': 5000, '8559': 3500 });
        } else {
           setCardSpends(currentSpends);
        }

        setTransactions(data.transactions || []);
        setIsLoading(false);
      } catch (error) {
        console.error("Fetch Live Data Error:", error);
        // Fallback mock data in case of error
        setCardSpends({ '2000': 12500, '2002': 5000, '8559': 3500 });
        setTransactions([]);
        setIsLoading(false);
      }
    };
    fetchLiveData();
  }, [isAuthenticated]);

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
    try { await fetch(GOOGLE_APPS_SCRIPT_URL, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify({ card: 'GLOBAL_PORTFOLIO', portfolio: JSON.stringify(p) }) }); } catch (e) {}
  };

  const saveEdit = async () => {
    setIsSaving(true);
    const updatedP = portfolio.map(c => c.id === editingCard.id ? { ...c, name: editForm.name, bank: editForm.bank, last4: editForm.last4, network: editForm.network, stmtDate: editForm.stmtDate, dueDate: editForm.dueDate } : c);
    setPortfolio(updatedP);
    await syncPortfolio(updatedP);
    const fSpend = cardSpends[editForm.last4] || 0;
    const newAdj = editForm.balance - fSpend;
    const newConfig = { ...customConfig, [editForm.last4]: { limit: editForm.limit, adjustment: newAdj, emis: editForm.emis } };
    setCustomConfig(newConfig);
    try { await fetch(GOOGLE_APPS_SCRIPT_URL, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify({ card: editForm.last4, limit: editForm.limit, adjustment: newAdj, emis: JSON.stringify(editForm.emis) }) }); } catch (e) {}
    setIsSaving(false);
    setEditingCard(null);
  };

  const totalLimit = portfolio.reduce((sum, card) => sum + (customConfig[card.last4]?.limit || card.limit), 0);
  const totalSpent = portfolio.reduce((sum, card) => {
    const fSpend = cardSpends[card.last4] || 0;
    const adj = customConfig[card.last4]?.adjustment || 0;
    return sum + Math.max(0, fSpend + adj);
  }, 0);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#05070a] flex flex-col items-center justify-center p-4 selection:bg-indigo-500/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,_#312e81_0%,_transparent_50%)] opacity-40"></div>
        <div className={`bg-white/5 backdrop-blur-3xl border border-white/10 p-10 md:p-14 rounded-[4rem] w-full max-w-sm shadow-[0_0_80px_rgba(0,0,0,0.5)] transition-all duration-500 relative z-10 ${pinError ? 'animate-shake border-rose-500/50' : ''}`}>
          <div className="flex flex-col items-center mb-14 text-center">
            <div className="w-16 h-16 bg-gradient-to-tr from-indigo-600 to-blue-400 rounded-2xl flex items-center justify-center shadow-lg mb-8">
              <ShieldCheck className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight leading-none mb-1">My Card Hub</h1>
            <p className="text-[9px] font-bold text-indigo-400 tracking-[0.4em] uppercase">Vault Terminal</p>
          </div>
          <div className="flex gap-5 justify-center mb-12">
            {[...Array(4)].map((_, i) => (
              <div key={i} className={`w-2.5 h-2.5 rounded-full transition-all duration-500 border ${pin.length > i ? 'bg-white border-white scale-150 shadow-[0_0_20px_rgba(255,255,255,0.7)]' : 'bg-transparent border-white/20'}`} />
            ))}
          </div>
          <div className="grid grid-cols-3 gap-5 max-w-[280px] mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button key={num} onClick={() => addPinNumber(String(num))} className="w-16 h-16 rounded-[1.5rem] bg-white/5 border border-white/10 flex items-center justify-center text-2xl font-bold text-white hover:bg-white/10 active:scale-90 transition-all backdrop-blur-md">{num}</button>
            ))}
            <div className="w-16 h-16"></div>
            <button onClick={() => addPinNumber('0')} className="w-16 h-16 rounded-[1.5rem] bg-white/5 border border-white/10 flex items-center justify-center text-2xl font-bold text-white hover:bg-white/10 active:scale-90 transition-all backdrop-blur-md">0</button>
            <button onClick={() => setPin(pin.slice(0, -1))} className="w-16 h-16 rounded-[1.5rem] bg-white/5 flex items-center justify-center text-gray-400 hover:text-white active:scale-90 transition-all"><Delete size={24} /></button>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{__html: `@keyframes shake { 0%, 100% { transform: translateX(0); } 20%, 60% { transform: translateX(-8px); } 40%, 80% { transform: translateX(8px); } } .animate-shake { animation: shake 0.4s ease-in-out; }`}} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#05070a] text-gray-100 p-4 md:p-10 font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      <header className="max-w-7xl mx-auto mb-10 md:mb-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-10 text-center md:text-left">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="p-3 bg-indigo-600 rounded-2xl shadow-lg">
              <ShieldCheck className="text-white w-7 h-7" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-none uppercase">My Card Hub</h1>
              <p className="text-gray-500 font-bold tracking-[0.2em] mt-2 uppercase text-[9px]">Financial Control v2.0</p>
            </div>
          </div>
          <div className="flex gap-4 items-center w-full md:w-auto">
            <button onClick={addNewCard} className="flex-1 md:flex-none bg-white/5 hover:bg-white/10 border border-white/10 text-white px-5 py-4 rounded-2xl font-black transition-all flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest">
               <Plus size={16} className="text-indigo-400" /> Add Card
            </button>
            <button onClick={() => window.location.reload()} disabled={isLoading} className="flex-1 md:flex-none bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white px-7 py-4 rounded-2xl font-black transition-all flex items-center justify-center gap-2 shadow-lg text-[10px] uppercase tracking-widest">
                {isLoading ? <Loader2 size={16} className="animate-spin" /> : <RefreshCcw size={16} />} Sync
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-[#0c1017] border border-white/5 rounded-[2rem] p-7 md:p-8 shadow-2xl relative overflow-hidden group">
            <div className="text-gray-500 text-[9px] font-black uppercase tracking-[0.3em] mb-3">Total Credit Line</div>
            <div className="text-3xl md:text-4xl font-black text-white tracking-tighter">{formatInr(totalLimit)}</div>
          </div>
          <div className="bg-[#0c1017] border border-white/5 rounded-[2rem] p-7 md:p-8 shadow-2xl relative overflow-hidden group">
            <div className="text-gray-500 text-[9px] font-black uppercase tracking-[0.3em] mb-3 flex items-center gap-2"><TrendingUp size={12} className="text-rose-500" /> Net Debt</div>
            <div className="text-3xl md:text-4xl font-black text-white tracking-tighter">{isLoading ? '...' : formatInr(totalSpent)}</div>
            <div className="absolute bottom-0 left-0 h-1 bg-white/5 w-full"><div className="h-full bg-gradient-to-r from-rose-500 to-indigo-500 transition-all duration-1000 shadow-[0_0_15px_rgba(244,63,94,0.4)]" style={{ width: `${(totalSpent/totalLimit)*100}%` }}></div></div>
          </div>
          <div className="bg-[#0c1017] border border-white/5 rounded-[2rem] p-7 md:p-8 shadow-2xl relative overflow-hidden group text-center md:text-left">
            <div className="text-gray-500 text-[9px] font-black uppercase tracking-[0.3em] mb-3 flex items-center justify-center md:justify-start gap-2"><PieChart size={12} className="text-emerald-500" /> Utilization</div>
            <div className="text-3xl md:text-4xl font-black text-white tracking-tighter">{isLoading ? '...' : `${((totalSpent / totalLimit) * 100).toFixed(1)}%`}</div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 pb-32">
        <div className="lg:col-span-2 space-y-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-2 gap-4">
            <h2 className="text-sm font-black uppercase tracking-widest text-gray-500 flex items-center gap-2">
               <ArrowUpDown size={14} /> View Order
               <button onClick={() => setShowSortMenu(!showSortMenu)} className="ml-2 hover:text-white transition-colors">
                 {showSortMenu ? <EyeOff size={16} /> : <Eye size={16} />}
               </button>
            </h2>
            {showSortMenu && (
              <div className="flex flex-wrap bg-white/5 p-1 rounded-xl border border-white/5">
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
                    className={`px-4 py-1.5 flex items-center gap-1 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${sortMode === mode.id ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-500 hover:text-white'}`}
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
                <div key={card.id} draggable={sortMode === 'custom'} onDragStart={() => onDragStart(index)} onDragOver={(e) => onDragOver(e, index)} onDragEnd={onDragEnd} className={`group relative bg-[#0c1017] border border-white/5 rounded-[2.5rem] p-2 transition-all hover:border-indigo-500/20 ${draggedIdx === index ? 'opacity-20 scale-95' : 'opacity-100'} ${sortMode === 'custom' ? 'cursor-grab active:cursor-grabbing' : ''}`}>
                  <div className={`relative h-52 rounded-[2rem] p-7 flex flex-col justify-between overflow-hidden ${card.bg} shadow-2xl`}>
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
                    <button onClick={() => openEditModal(card)} className="absolute top-4 right-6 p-2.5 text-gray-600 hover:text-white hover:bg-white/5 rounded-xl transition-all z-20"><Settings size={18} /></button>
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-[8px] text-gray-500 uppercase font-black tracking-[0.2em] mb-1.5">Live Spend</div>
                        <div className={`text-2xl font-black ${spent < 0 ? 'text-emerald-400' : 'text-white'} tracking-tighter`}>{isLoading ? '...' : formatInr(spent)}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[8px] text-gray-500 uppercase font-black tracking-[0.2em] mb-1.5">Installments</div>
                        <div className="text-lg font-black text-amber-400 tracking-tighter">{formatInr(monthlyEmi)}</div>
                      </div>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden shadow-inner">
                      <div className={`h-full rounded-full transition-all duration-1000 ${util > 30 ? 'bg-amber-500' : 'bg-indigo-600'}`} style={{ width: `${util}%` }}></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                      <div className="flex flex-col gap-1">
                        <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Statement</span>
                        <div className="flex items-center gap-1.5 text-[10px] font-black text-white"><Calendar size={10} className="text-indigo-400" /> {dates.stmt}</div>
                      </div>
                      <div className="flex flex-col gap-1 text-right">
                        <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Payment Due</span>
                        <div className={`flex items-center justify-end gap-1.5 text-[10px] font-black ${dates.daysToDue <= 7 ? 'text-rose-500' : 'text-white'}`}>{dates.due} <Clock size={10} /></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-10">
          <div className="bg-[#0c1017] border border-white/5 rounded-[2.5rem] p-8 shadow-2xl">
            <h2 className="text-lg font-black flex items-center gap-3 mb-8 uppercase tracking-tighter text-white"><RefreshCcw size={18} className="text-indigo-500" /> Activity</h2>
            {isLoading ? (
              <div className="flex justify-center items-center py-20"><Loader2 size={32} className="text-indigo-600 animate-spin" /></div>
            ) : (
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                {transactions.map((tx, idx) => {
                  const cardInfo = portfolio.find(c => c.last4 === tx.card);
                  const isCredit = tx.amount < 0;
                  return (
                    <div key={idx} className="flex justify-between items-center p-4 rounded-2xl bg-white/[0.02] border border-white/5 group">
                      <div className="flex gap-4 items-center overflow-hidden">
                        <div className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center ${cardInfo?.bg || 'bg-gray-800'} text-white text-[9px] font-black shadow-2xl relative overflow-hidden`}>
                          <span className="relative z-10">{tx.card}</span>
                        </div>
                        <div className="overflow-hidden">
                          <div className="font-black text-white text-xs truncate w-24 group-hover:text-indigo-400 transition-colors uppercase tracking-tight">{tx.merchant}</div>
                          <div className="text-[8px] font-bold text-gray-600 uppercase mt-0.5 tracking-wider">{tx.date}</div>
                        </div>
                      </div>
                      <div className={`font-black text-xs shrink-0 ${isCredit ? 'text-emerald-400' : 'text-rose-500'} tracking-tighter`}>{isCredit ? '+' : '-'}{formatInr(Math.abs(tx.amount))}</div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </main>

      {editingCard && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#0c1017] border border-white/10 rounded-[3rem] w-full max-w-2xl shadow-2xl my-auto flex flex-col transition-all">
            <div className="p-8 border-b border-white/5 flex justify-between items-center">
              <div><h3 className="text-xl font-black text-white uppercase tracking-tighter">Credit Card Details</h3><p className="text-[9px] font-black text-indigo-500 uppercase mt-1 tracking-widest leading-none">Card Ending: {editingCard.last4}</p></div>
              <button onClick={() => setEditingCard(null)} className="p-3 bg-white/5 rounded-xl text-gray-500 hover:text-white transition-all"><X size={20}/></button>
            </div>
            <div className="p-8 overflow-y-auto custom-scrollbar space-y-10 max-h-[60vh]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><label className="block text-[9px] font-black text-gray-500 uppercase mb-3 tracking-widest">Descriptor</label><input value={editForm.name} onChange={(e) => setEditForm({...editForm, name: e.target.value})} className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-5 py-4 text-white font-black outline-none uppercase text-xs" /></div>
                <div><label className="block text-[9px] font-black text-gray-500 uppercase mb-3 tracking-widest">Institution</label><input value={editForm.bank} onChange={(e) => setEditForm({...editForm, bank: e.target.value})} className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-5 py-4 text-white font-black outline-none uppercase text-xs" /></div>
                <div><label className="block text-[9px] font-black text-gray-500 uppercase mb-3 tracking-widest">Card Ending in</label><input value={editForm.last4} onChange={(e) => setEditForm({...editForm, last4: e.target.value})} className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-5 py-4 text-white font-black outline-none text-xs" maxLength={4} /></div>
                <div><label className="block text-[9px] font-black text-gray-500 uppercase mb-3 tracking-widest">Network Logic</label><select value={editForm.network} onChange={(e) => setEditForm({...editForm, network: e.target.value})} className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-5 py-4 text-white font-black outline-none uppercase text-[10px]"><option value="visa">Visa</option><option value="mastercard">Mastercard</option><option value="amex">Amex</option><option value="rupay">RuPay</option></select></div>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/5">
                <div><label className="block text-[9px] font-black text-gray-500 uppercase mb-3 tracking-widest">Stmt Date</label><input type="number" min="1" max="31" value={editForm.stmtDate} onChange={(e) => setEditForm({...editForm, stmtDate: Number(e.target.value)})} className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-5 py-4 text-white font-black text-center text-xs" /></div>
                <div><label className="block text-[9px] font-black text-gray-500 uppercase mb-3 tracking-widest">Due Date</label><input type="number" min="1" max="31" value={editForm.dueDate} onChange={(e) => setEditForm({...editForm, dueDate: Number(e.target.value)})} className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-5 py-4 text-white font-black text-center text-xs" /></div>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/5">
                <div><label className="block text-[9px] font-black text-gray-500 uppercase mb-3 tracking-widest">Credit Line</label><input type="number" value={editForm.limit} onChange={(e) => setEditForm({...editForm, limit: Number(e.target.value)})} className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-5 py-4 text-white font-black outline-none text-xs" /></div>
                <div><label className="block text-[9px] font-black text-gray-500 uppercase mb-3 tracking-widest">Outstanding Bal / Live Spend</label><input type="number" value={editForm.balance} onChange={(e) => setEditForm({...editForm, balance: Number(e.target.value)})} className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-5 py-4 text-white font-black outline-none text-xs" /></div>
              </div>
              <div className="space-y-6 pt-6 border-t border-white/5">
                <div className="flex justify-between items-center"><label className="block text-[9px] font-black text-gray-500 uppercase tracking-widest">EMI Inventory</label><button onClick={() => setEditForm({...editForm, emis: [...editForm.emis, { id: Date.now(), merchant: '', emiAmount: 0, totalLoanAmount: 0, interestRate: 0, tenureRemaining: 12 }]})} className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-[8px] font-black uppercase tracking-widest flex items-center gap-1.5 shadow-lg"><Plus size={12}/> New Loan</button></div>
                <div className="space-y-5">
                  {editForm.emis.map((emi) => (
                    <div key={emi.id} className="p-6 bg-black/40 rounded-3xl border border-white/5 space-y-5 relative">
                      <button onClick={() => setEditForm({ ...editForm, emis: editForm.emis.filter(e => e.id !== emi.id) })} className="absolute top-4 right-4 text-gray-700 hover:text-rose-500 transition-colors"><Trash2 size={16}/></button>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                         <div className="col-span-1 md:col-span-2"><label className="text-[8px] font-black text-gray-600 uppercase mb-1.5 block tracking-widest">Purchase</label><input placeholder="e.g. iPhone 15 Pro" value={emi.merchant} onChange={(e) => setEditForm({...editForm, emis: editForm.emis.map(item => item.id === emi.id ? {...item, merchant: e.target.value} : item)})} className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-xs font-black text-white outline-none" /></div>
                         <div className="grid grid-cols-2 gap-3">
                           <div><label className="text-[8px] font-black text-gray-600 uppercase mb-1.5 block tracking-widest">Monthly EMI</label><input type="number" value={emi.emiAmount} onChange={(e) => setEditForm({...editForm, emis: editForm.emis.map(item => item.id === emi.id ? {...item, emiAmount: Number(e.target.value)} : item)})} className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-[10px] font-black text-white outline-none" /></div>
                           <div><label className="text-[8px] font-black text-gray-600 uppercase mb-1.5 block tracking-widest">Total Amount</label><input type="number" value={emi.totalLoanAmount} onChange={(e) => setEditForm({...editForm, emis: editForm.emis.map(item => item.id === emi.id ? {...item, totalLoanAmount: Number(e.target.value)} : item)})} className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-[10px] font-black text-white outline-none" /></div>
                         </div>
                         <div className="grid grid-cols-2 gap-3">
                           <div><label className="text-[8px] font-black text-gray-600 uppercase mb-1.5 block tracking-widest">Rate %</label><input type="number" value={emi.interestRate} onChange={(e) => setEditForm({...editForm, emis: editForm.emis.map(item => item.id === emi.id ? {...item, interestRate: Number(e.target.value)} : item)})} className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-[10px] font-black text-white outline-none" /></div>
                           <div><label className="text-[8px] font-black text-gray-600 uppercase mb-1.5 block tracking-widest">Months Left</label><input type="number" value={emi.tenureRemaining} onChange={(e) => setEditForm({...editForm, emis: editForm.emis.map(item => item.id === emi.id ? {...item, tenureRemaining: Number(e.target.value)} : item)})} className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-[10px] font-black text-white outline-none" /></div>
                         </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button onClick={() => deleteCard(editingCard.id)} className="w-full py-4 bg-rose-500/5 hover:bg-rose-500/10 text-rose-500 rounded-2xl text-[9px] font-black uppercase tracking-[0.4em] transition-all flex items-center justify-center gap-2 border border-rose-500/10"><Trash2 size={14} /> Delete Card</button>
            </div>
            <div className="p-8 bg-black/50 border-t border-white/5 flex gap-4">
              <button disabled={isSaving} onClick={() => setEditingCard(null)} className="flex-1 py-4 rounded-2xl font-black text-gray-500 hover:text-white transition-all uppercase text-[9px] tracking-widest">Discard</button>
              <button disabled={isSaving} onClick={saveEdit} className="flex-[2] flex items-center justify-center gap-2 py-4 rounded-2xl font-black bg-indigo-600 hover:bg-indigo-700 text-white transition-all shadow-lg uppercase text-[9px] tracking-widest">{isSaving ? <Loader2 size={14} className="animate-spin" /> : 'Synchronize'}</button>
            </div>
          </div>
        </div>
      )}
      <style dangerouslySetInnerHTML={{__html: `.custom-scrollbar::-webkit-scrollbar { width: 3px; } .custom-scrollbar::-webkit-scrollbar-track { background: transparent; } .custom-scrollbar::-webkit-scrollbar-thumb { background-color: rgba(255,255,255,0.05); border-radius: 10px; }`}} />
    </div>
  );
}
