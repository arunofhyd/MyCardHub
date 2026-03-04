import React, { useState, useEffect } from 'react';
import { CreditCard, AlertCircle, Calendar, IndianRupee, PieChart, TrendingUp, ShieldCheck, Zap, Loader2, Settings, Pencil, X, Lock, RefreshCcw, Delete, Plus, Trash2, Info, CreditCard as CardIcon } from 'lucide-react';

// Premium Gradient Palette for Dynamic Cards
const PREMIUM_GRADIENTS = [
  'bg-gradient-to-br from-blue-700 to-indigo-900',
  'bg-gradient-to-br from-indigo-800 to-slate-900',
  'bg-gradient-to-br from-orange-600 to-red-700',
  'bg-gradient-to-br from-amber-600 to-orange-800',
  'bg-gradient-to-br from-red-700 to-rose-950',
  'bg-gradient-to-br from-zinc-800 to-black',
  'bg-gradient-to-br from-rose-800 to-red-950',
  'bg-gradient-to-br from-yellow-700 to-amber-950',
  'bg-gradient-to-br from-purple-700 to-indigo-950',
  'bg-gradient-to-br from-emerald-700 to-teal-950',
  'bg-gradient-to-br from-cyan-700 to-blue-900'
];

const INITIAL_PORTFOLIO = [
  { id: 'amex', name: 'Amex Blue', bank: 'American Express', last4: '2000', limit: 370000, stmtDate: 2, dueDate: 20, feeTarget: 40000, bg: PREMIUM_GRADIENTS[0], image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=600&auto=format', network: 'amex' },
  { id: 'millennia', name: 'HDFC Millennia', bank: 'HDFC Bank', last4: '1697', limit: 231000, stmtDate: 6, dueDate: 26, bg: PREMIUM_GRADIENTS[1], image: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=600&auto=format', network: 'visa' },
  { id: 'swiggy', name: 'HDFC Swiggy', bank: 'HDFC Bank', last4: '2569', limit: 185000, stmtDate: 6, dueDate: 26, bg: PREMIUM_GRADIENTS[2], image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format', network: 'mastercard' },
  { id: 'amazon', name: 'Amazon Pay', bank: 'ICICI Bank', last4: '2002', limit: 330000, stmtDate: 12, dueDate: 30, bg: PREMIUM_GRADIENTS[3], image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600&auto=format', network: 'visa' },
  { id: 'airtel', name: 'Airtel Axis', bank: 'Axis Bank', last4: '8559', limit: 185000, stmtDate: 12, dueDate: 2, feeTarget: 200000, bg: PREMIUM_GRADIENTS[4], image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600&auto=format', network: 'rupay' }
];

const CardNetworkLogo = ({ network }) => {
  switch (network?.toLowerCase()) {
    case 'visa':
      return (
        <svg viewBox="0 0 120 40" className="h-6 w-auto filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <path d="M45.3 2.1l-6.2 27.9h8.8l6.2-27.9h-8.8zm36.3 0l-7.7 17.8-.3-1.4c-1.1-4.2-6.1-16.4-6.1-16.4h-9.1l-.1.5c0 0 17.8 31.8 18.8 31.8h9.1L99.9 2.1H81.6zm23.7 0c-1.8 0-3.4 1-4 2.5l-14.1 25.4h9.1l1.8-5h11.1l1 5h8.1l-7.1-27.9h-5.9zm-3.5 18.2l4.2-11.8 2.3 11.8h-6.5zM22.8 2.1l-8.6 18.5-.8-4.5C11.9 8.2 5.4 2.1 5.4 2.1H0l.2.8c6.9 1.7 14.5 9.4 19.1 18.5l10.2 20.3h9.3L54 2.1H42.5l-19.7 0z" fill="#FFFFFF" />
        </svg>
      );
    case 'mastercard':
      return (
        <svg viewBox="0 0 24 24" className="h-9 w-auto drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <circle cx="7" cy="12" r="7" fill="#EB001B" />
          <circle cx="17" cy="12" r="7" fill="#F79E1B" />
          <path d="M12 17.5c1.7-1.4 2.7-3.5 2.7-5.5s-1-4.1-2.7-5.5c-1.7 1.4-2.7 3.5-2.7 5.5s1 4.1 2.7 5.5z" fill="#FF5F00" opacity="0.9" />
        </svg>
      );
    case 'amex':
      return (
        <div className="bg-[#016fcf] px-2 py-1 rounded shadow-md border border-white/20">
          <span className="text-[11px] font-black tracking-tighter text-white uppercase leading-none">AMEX</span>
        </div>
      );
    case 'rupay':
      return (
        <svg viewBox="0 0 120 40" className="h-6 w-auto filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 5.1h15.2c5.1 0 8.6 2.8 8.6 7.4 0 4.6-3.5 7.4-8.6 7.4h-9.3l-1.3 7.8H5.2l2.1-12.6h0l2.1-10h0.6zm12.3 8.1c1.5 0 2.5-.7 2.5-2.2 0-1.5-1-2.2-2.5-2.2H12l-0.7 4.4h11zM42 5.1h9.3l-2.1 12.6c1.5 1.5 3.5 2.3 5.8 2.3 7.1 0 11.2-5.1 11.2-12.6 0-7.5-4.1-12.6-11.2-12.6-2.5 0-4.6.8-5.8 2.1l0.7-3.1h-8.8l-1.2 13.9h0zM57 18c-0.6 3.8-2.8 6.4-6.1 6.4-2.5 0-4.2-1.6-4.2-4.8 0-3.2 1.7-6.4 6.1-6.4 2.5 0 3.7 1.6 4.2 4.8zM75 1.1L67 32.7h9.3L78 21.6h12.6l-2 11.1h9.3l8-31.6H98.9L97 12.2H84.4l1.9-11.1H75zM116 5.1l-6.8 8.4h5.2l2.6-8.4h-1z" fill="#FFFFFF" />
          <path d="M109.2 5.1l-8 10h6l4-10z" fill="#FF9933" />
          <path d="M101.2 15.1l-8 10h6l4-10z" fill="#138808" />
        </svg>
      );
    default:
      return <CreditCard className="text-white/40" size={24} />;
  }
};

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
  return { nextStmt: nextStmt.toLocaleDateString('en-IN', { month: 'short', day: 'numeric' }), nextDue: nextDue.toLocaleDateString('en-IN', { month: 'short', day: 'numeric' }), daysToStmt, daysToDue };
};

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [cardSpends, setCardSpends] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  
  // Custom Portfolio state
  const [portfolio, setPortfolio] = useState(INITIAL_PORTFOLIO);
  const [customConfig, setCustomConfig] = useState({});
  
  // Modals
  const [editingCard, setEditingCard] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', bank: '', last4: '', limit: 0, balance: 0, emis: [], network: 'visa', stmtDate: 1, dueDate: 15 });

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
        const response = await fetch(GOOGLE_APPS_SCRIPT_URL);
        const data = await response.json();
        
        // Handle Portfolio Sync (Special global setting)
        if (data.settings?.GLOBAL_PORTFOLIO) {
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
        data.transactions?.forEach((row) => {
          const cardNum = String(row.card);
          const amount = Number(row.amount);
          const txDate = new Date(row.date);
          
          const cardInfo = (data.settings?.GLOBAL_PORTFOLIO ? JSON.parse(data.settings.GLOBAL_PORTFOLIO.portfolio) : INITIAL_PORTFOLIO).find(c => c.last4 === cardNum);
          if (cardInfo) {
            const lastStmt = getLastStatementDate(cardInfo.stmtDate);
            if (txDate >= lastStmt) {
                currentSpends[cardNum] = (currentSpends[cardNum] || 0) + amount;
            }
          }
        });

        setTransactions(data.transactions || []);
        setCardSpends(currentSpends);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch Google Sheet data:", error);
        setIsLoading(false);
      }
    };
    fetchLiveData();
  }, [isAuthenticated]);

  const openEditModal = (card) => {
    const fetchedSpend = cardSpends[card.last4] || 0;
    const config = customConfig[card.last4] || {};
    setEditForm({ 
      id: card.id,
      name: card.name,
      bank: card.bank,
      last4: card.last4,
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
    const newCard = {
        id: newId,
        name: 'New Card',
        bank: 'Bank Name',
        last4: '0000',
        limit: 100000,
        stmtDate: 1,
        dueDate: 15,
        bg: PREMIUM_GRADIENTS[Math.floor(Math.random() * PREMIUM_GRADIENTS.length)],
        network: 'visa'
    };
    const updatedPortfolio = [...portfolio, newCard];
    setPortfolio(updatedPortfolio);
    syncPortfolio(updatedPortfolio);
  };

  const deleteCard = (id) => {
    if (window.confirm("Are you sure you want to remove this card?")) {
        const updatedPortfolio = portfolio.filter(c => c.id !== id);
        setPortfolio(updatedPortfolio);
        syncPortfolio(updatedPortfolio);
        setEditingCard(null);
    }
  };

  const syncPortfolio = async (updatedPortfolio) => {
    try {
        await fetch(GOOGLE_APPS_SCRIPT_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({ 
            card: 'GLOBAL_PORTFOLIO', 
            portfolio: JSON.stringify(updatedPortfolio) 
          })
        });
      } catch (error) { console.error("Sync error:", error); }
  };

  const saveEdit = async () => {
    setIsSaving(true);
    
    // 1. Update Portfolio Details (Name, Bank, network, etc)
    const updatedPortfolio = portfolio.map(c => 
        c.id === editingCard.id ? { 
            ...c, 
            name: editForm.name, 
            bank: editForm.bank, 
            last4: editForm.last4,
            network: editForm.network,
            stmtDate: editForm.stmtDate,
            dueDate: editForm.dueDate
        } : c
    );
    setPortfolio(updatedPortfolio);
    await syncPortfolio(updatedPortfolio);

    // 2. Update Card Specific Settings (Limit, Adjustment, EMIs)
    const fetchedSpend = cardSpends[editForm.last4] || 0;
    const newAdjustment = editForm.balance - fetchedSpend;
    const newConfig = { 
      ...customConfig, 
      [editForm.last4]: { limit: editForm.limit, adjustment: newAdjustment, emis: editForm.emis } 
    };
    setCustomConfig(newConfig);

    try {
      await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ 
          card: editForm.last4, 
          limit: editForm.limit, 
          adjustment: newAdjustment,
          emis: JSON.stringify(editForm.emis) 
        })
      });
    } catch (error) { console.error("Sync error:", error); }

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
      <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-4 selection:bg-indigo-500/30 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none animate-pulse delay-700"></div>
        <div className={`bg-gray-900/40 backdrop-blur-3xl border border-gray-800/50 p-8 md:p-12 rounded-[3rem] w-full max-w-sm shadow-2xl transition-all duration-300 relative z-10 ${pinError ? 'animate-shake border-rose-500/50 shadow-rose-500/10' : ''}`}>
          <div className="flex flex-col items-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-tr from-indigo-500 to-cyan-400 rounded-3xl flex items-center justify-center shadow-2xl shadow-indigo-500/30 mb-6 rotate-3">
              <Lock className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">MYCARDHUB</h1>
            <p className="text-xs font-medium text-gray-500 mt-2 tracking-widest uppercase text-center">Secure Vault Access</p>
          </div>
          <div className="flex gap-6 justify-center mb-16">
            {[...Array(4)].map((_, i) => (
              <div key={i} className={`w-4 h-4 rounded-full transition-all duration-500 border-2 ${pin.length > i ? 'bg-indigo-400 border-indigo-400 scale-125 shadow-[0_0_20px_rgba(129,140,248,0.8)]' : 'bg-transparent border-gray-800'}`} />
            ))}
          </div>
          <div className="grid grid-cols-3 gap-5 max-w-[300px] mx-auto mb-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button key={num} onClick={() => addPinNumber(String(num))} className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl font-bold text-white hover:bg-white/10 active:scale-90 transition-all backdrop-blur-md shadow-lg">{num}</button>
            ))}
            <div className="w-16 h-16"></div>
            <button onClick={() => addPinNumber('0')} className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl font-bold text-white hover:bg-white/10 active:scale-90 transition-all backdrop-blur-md shadow-lg">0</button>
            <button onClick={() => setPin(pin.slice(0, -1))} className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 hover:bg-rose-500/20 active:scale-90 transition-all backdrop-blur-md shadow-lg"><Delete className="w-6 h-6" /></button>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{__html: `@keyframes shake { 0%, 100% { transform: translateX(0); } 20%, 60% { transform: translateX(-6px); } 40%, 80% { transform: translateX(6px); } } .animate-shake { animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both; }`}} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-4 md:p-8 font-sans selection:bg-indigo-500/30">
      <header className="max-w-7xl mx-auto mb-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 text-center md:text-left">
          <div>
            <h1 className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400 flex items-center justify-center md:justify-start gap-3">
              <ShieldCheck className="text-indigo-500 w-10 h-10" /> MYCARDHUB
            </h1>
            <p className="text-gray-500 font-medium tracking-wide mt-1 uppercase text-xs">Intelligent Credit Engine</p>
          </div>
          <div className="flex gap-3 justify-center">
            <button onClick={addNewCard} className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-3 rounded-2xl font-bold transition-all flex items-center gap-2">
               <Plus className="w-5 h-5 text-indigo-400" /> ADD CARD
            </button>
            <button onClick={() => window.location.reload()} disabled={isLoading} className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white px-6 py-3 rounded-2xl font-bold transition-all flex items-center gap-2 shadow-xl shadow-indigo-900/20">
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <RefreshCcw className="w-5 h-5" />} SYNC
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
            <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Total Credit Line</div>
            <div className="text-4xl font-black text-white tracking-tight">{formatInr(totalLimit)}</div>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2"><TrendingUp className="w-4 h-4 text-rose-400" /> Total Outstanding</div>
            <div className="text-4xl font-black text-white tracking-tight">{isLoading ? '...' : formatInr(totalSpent)}</div>
            <div className="absolute bottom-0 left-0 h-1.5 bg-gray-800 w-full"><div className="h-full bg-rose-500 transition-all duration-1000" style={{ width: `${(totalSpent/totalLimit)*100}%` }}></div></div>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2"><PieChart className="w-4 h-4 text-emerald-400" /> Utilization</div>
            <div className="text-4xl font-black text-white tracking-tight">{isLoading ? '...' : `${((totalSpent / totalLimit) * 100).toFixed(1)}%`}</div>
            <p className="text-[10px] text-emerald-500 font-bold mt-2 tracking-widest uppercase tracking-widest">Safe Zone (&lt;30%)</p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 pb-20">
        <div className="lg:col-span-2 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolio.map(card => {
              const fetchedSpend = cardSpends[card.last4] || 0;
              const config = customConfig[card.last4] || {};
              const spent = fetchedSpend + (config.adjustment || 0);
              const activeLimit = config.limit || card.limit;
              const util = Math.min(100, (spent / activeLimit) * 100);
              const dates = getDates(card.stmtDate, card.dueDate);
              const cardEmis = config.emis || [];
              const monthlyEmiTotal = cardEmis.reduce((sum, e) => sum + Number(e.amount), 0);

              return (
                <div key={card.id} className="group relative bg-gray-900 border border-gray-800 rounded-[2.5rem] p-2 overflow-hidden transition-all hover:border-gray-600 hover:shadow-3xl hover:-translate-y-1">
                  <div className={`relative h-52 rounded-[2rem] p-7 flex flex-col justify-between overflow-hidden ${card.bg} shadow-2xl`}>
                    {card.image && <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay group-hover:scale-110 transition-transform duration-1000" style={{ backgroundImage: `url('${card.image}')` }}></div>}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-white/10 pointer-events-none"></div>
                    <div className="flex justify-between items-start z-10">
                      <div>
                        <div className="text-white font-black tracking-tight text-lg drop-shadow-lg">{card.bank}</div>
                        <div className="text-white/80 text-[10px] font-bold tracking-widest uppercase">{card.name}</div>
                      </div>
                      <div className="z-20 drop-shadow-2xl brightness-125">
                        <CardNetworkLogo network={card.network} />
                      </div>
                    </div>
                    <div className="z-10 flex justify-between items-end">
                      <div className="font-mono text-2xl tracking-[0.25em] text-white flex gap-4 drop-shadow-2xl font-bold">
                        <span>••••</span><span>{card.last4}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-7 space-y-6 relative">
                    <button onClick={() => openEditModal(card)} className="absolute top-4 right-4 p-3 text-gray-500 hover:text-indigo-400 hover:bg-gray-800 rounded-2xl transition-all z-20">
                      <Pencil className="w-5 h-5" />
                    </button>
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">Current Spend</div>
                        <div className={`text-2xl font-black ${spent < 0 ? 'text-emerald-400' : 'text-white'}`}>{isLoading ? '...' : formatInr(spent)}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">Monthly EMIs</div>
                        <div className="text-lg font-bold text-amber-400">{formatInr(monthlyEmiTotal)}</div>
                      </div>
                    </div>
                    <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden shadow-inner">
                      <div className={`h-full rounded-full transition-all duration-1000 ${util > 30 ? 'bg-amber-500' : 'bg-indigo-500'}`} style={{ width: `${util}%` }}></div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-800/50 text-[10px] font-bold uppercase">
                      <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-gray-500" /><span className="text-gray-400">Next Stmt: <span className="text-gray-200">{dates.nextStmt}</span></span></div>
                      {cardEmis.length > 0 && <div className="text-amber-400 flex items-center gap-1"><Zap className="w-3 h-3"/> {cardEmis.length} ACTIVE EMIs</div>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-900 border border-gray-800 rounded-[2.5rem] p-8 shadow-2xl">
            <h2 className="text-lg font-black flex items-center gap-2 mb-8 uppercase tracking-tight"><RefreshCcw className="w-5 h-5 text-emerald-400" /> Real-time Feed</h2>
            {isLoading ? (
              <div className="flex justify-center items-center py-20"><Loader2 className="w-10 h-10 text-indigo-500 animate-spin" /></div>
            ) : (
              <div className="space-y-5 max-h-[600px] overflow-y-auto pr-3 custom-scrollbar">
                {transactions.map((tx, idx) => {
                  const cardInfo = portfolio.find(c => c.last4 === tx.card);
                  const isCredit = tx.amount < 0;
                  return (
                    <div key={idx} className="flex justify-between items-center p-4 rounded-3xl bg-gray-950/50 border border-gray-800/50 hover:border-gray-700 transition-all group">
                      <div className="flex gap-4 items-center">
                        <div className={`w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center ${cardInfo?.bg || 'bg-gray-800'} text-white text-xs font-black shadow-lg relative overflow-hidden`}>
                          <span className="relative z-10">{tx.card}</span>
                        </div>
                        <div>
                          <div className="font-bold text-white text-sm truncate w-24 group-hover:text-indigo-400 transition-colors uppercase">{tx.merchant}</div>
                          <div className="text-[10px] font-bold text-gray-600 uppercase">{tx.date}</div>
                        </div>
                      </div>
                      <div className={`font-black text-sm shrink-0 ${isCredit ? 'text-emerald-400' : 'text-rose-400'}`}>{isCredit ? '+' : '-'}{formatInr(Math.abs(tx.amount))}</div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </main>

      {editingCard && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-gray-900 border border-gray-800 rounded-[3rem] w-full max-w-2xl shadow-3xl overflow-hidden my-auto flex flex-col">
            <div className="p-8 border-b border-gray-800 flex justify-between items-center bg-gray-900/50">
              <div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">Configure Card</h3>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Global Sync Active</p>
              </div>
              <button onClick={() => setEditingCard(null)} className="p-3 bg-gray-800 rounded-2xl text-gray-400 hover:text-white transition-colors"><X /></button>
            </div>
            
            <div className="p-8 overflow-y-auto custom-scrollbar space-y-10 max-h-[60vh]">
              {/* Card Meta Settings */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">Display Name</label>
                  <input value={editForm.name} onChange={(e) => setEditForm({...editForm, name: e.target.value})} className="w-full bg-gray-950 border border-gray-800 rounded-2xl px-6 py-4 text-white font-bold focus:border-indigo-500 transition-all outline-none" placeholder="e.g. My Primary Card" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">Bank Institution</label>
                  <input value={editForm.bank} onChange={(e) => setEditForm({...editForm, bank: e.target.value})} className="w-full bg-gray-950 border border-gray-800 rounded-2xl px-6 py-4 text-white font-bold focus:border-indigo-500 transition-all outline-none" placeholder="e.g. HDFC Bank" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">Last 4 Digits</label>
                  <input value={editForm.last4} onChange={(e) => setEditForm({...editForm, last4: e.target.value})} className="w-full bg-gray-950 border border-gray-800 rounded-2xl px-6 py-4 text-white font-bold focus:border-indigo-500 transition-all outline-none" maxLength={4} />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">Network Type</label>
                  <select value={editForm.network} onChange={(e) => setEditForm({...editForm, network: e.target.value})} className="w-full bg-gray-950 border border-gray-800 rounded-2xl px-6 py-4 text-white font-bold focus:border-indigo-500 transition-all outline-none">
                    <option value="visa">Visa</option>
                    <option value="mastercard">Mastercard</option>
                    <option value="amex">Amex</option>
                    <option value="rupay">RuPay</option>
                  </select>
                </div>
              </div>

              {/* Billing Cycle Settings */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">Stmt Date (1-31)</label>
                  <input type="number" value={editForm.stmtDate} onChange={(e) => setEditForm({...editForm, stmtDate: Number(e.target.value)})} className="w-full bg-gray-950 border border-gray-800 rounded-2xl px-6 py-4 text-white font-bold outline-none" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">Due Date (1-31)</label>
                  <input type="number" value={editForm.dueDate} onChange={(e) => setEditForm({...editForm, dueDate: Number(e.target.value)})} className="w-full bg-gray-950 border border-gray-800 rounded-2xl px-6 py-4 text-white font-bold outline-none" />
                </div>
              </div>

              {/* Finance Overrides */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-800">
                <div>
                  <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">Credit Limit</label>
                  <input type="number" value={editForm.limit} onChange={(e) => setEditForm({...editForm, limit: Number(e.target.value)})} className="w-full bg-gray-950 border border-gray-800 rounded-2xl px-6 py-4 text-white font-bold focus:border-indigo-500 transition-all outline-none" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">Current Balance</label>
                  <input type="number" value={editForm.balance} onChange={(e) => setEditForm({...editForm, balance: Number(e.target.value)})} className="w-full bg-gray-950 border border-gray-800 rounded-2xl px-6 py-4 text-white font-bold focus:border-indigo-500 transition-all outline-none" />
                </div>
              </div>

              {/* EMIs */}
              <div>
                <div className="flex justify-between items-center mb-6">
                   <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest">Loan Installments</label>
                   <button onClick={() => setEditForm({...editForm, emis: [...editForm.emis, { id: Date.now(), merchant: '', amount: 0, totalMonths: 12, remainingMonths: 12, rate: 0 }]})} className="px-4 py-2 bg-indigo-500/10 text-indigo-400 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-500/20 transition-all flex items-center gap-1"><Plus size={14}/> Add EMI</button>
                </div>
                <div className="space-y-4">
                  {editForm.emis.map((emi) => (
                    <div key={emi.id} className="p-6 bg-gray-950 rounded-3xl border border-gray-800 space-y-4 relative">
                      <button onClick={() => setEditForm({ ...editForm, emis: editForm.emis.filter(e => e.id !== emi.id) })} className="absolute top-4 right-4 text-gray-700 hover:text-rose-500"><Trash2 size={16}/></button>
                      <div className="grid grid-cols-2 gap-4">
                         <input placeholder="Merchant" value={emi.merchant} onChange={(e) => setEditForm({...editForm, emis: editForm.emis.map(item => item.id === emi.id ? {...item, merchant: e.target.value} : item)})} className="col-span-2 bg-gray-900 border border-gray-800 rounded-xl px-4 py-2 text-xs font-bold text-white outline-none" />
                         <input placeholder="Amount" type="number" value={emi.amount} onChange={(e) => setEditForm({...editForm, emis: editForm.emis.map(item => item.id === emi.id ? {...item, amount: Number(e.target.value)} : item)})} className="bg-gray-900 border border-gray-800 rounded-xl px-4 py-2 text-xs font-bold text-white outline-none" />
                         <input placeholder="Tenure Left" type="number" value={emi.remainingMonths} onChange={(e) => setEditForm({...editForm, emis: editForm.emis.map(item => item.id === emi.id ? {...item, remainingMonths: Number(e.target.value)} : item)})} className="bg-gray-900 border border-gray-800 rounded-xl px-4 py-2 text-xs font-bold text-white outline-none" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Danger Zone */}
              <div className="pt-6 border-t border-gray-800">
                <button onClick={() => deleteCard(editingCard.id)} className="w-full py-4 bg-rose-500/10 hover:bg-rose-500/20 text-rose-500 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2">
                    <Trash2 size={14} /> Remove Card from Portfolio
                </button>
              </div>
            </div>
            
            <div className="p-8 bg-gray-950/50 border-t border-gray-800 flex gap-4">
              <button disabled={isSaving} onClick={() => setEditingCard(null)} className="flex-1 py-4 rounded-2xl font-black text-gray-500 hover:bg-gray-800 transition-all uppercase tracking-widest text-xs">Cancel</button>
              <button disabled={isSaving} onClick={saveEdit} className="flex-[2] flex items-center justify-center gap-3 py-4 rounded-2xl font-black bg-indigo-600 hover:bg-indigo-700 text-white transition-all shadow-2xl shadow-indigo-900/40 uppercase tracking-widest text-xs">
                {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Apply Sync'}
              </button>
            </div>
          </div>
        </div>
      )}
      <style dangerouslySetInnerHTML={{__html: `.custom-scrollbar::-webkit-scrollbar { width: 5px; } .custom-scrollbar::-webkit-scrollbar-track { background: transparent; } .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #1f2937; border-radius: 20px; } @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } } .animate-spin-slow { animation: spin-slow 12s linear infinite; }`}} />
    </div>
  );
}
