import React, { useState, useRef, useEffect } from 'react';
import { LogOut, User, Trash2, ChevronRight, Loader2 } from 'lucide-react';
import { auth, db } from './firebase';
import { signOut } from 'firebase/auth';
import { doc, deleteDoc } from 'firebase/firestore';

export default function ProfileMenu({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [swipeProgress, setSwipeProgress] = useState(0);
  const [isResetting, setIsResetting] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
        setShowReset(false);
        setSwipeProgress(0);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSwipe = (e) => {
    const value = Number(e.target.value);
    setSwipeProgress(value);

    if (value > 95 && !isResetting) {
      handleResetData();
    }
  };

  const handleSwipeEnd = () => {
    if (swipeProgress <= 95 && !isResetting) {
      setSwipeProgress(0); // Snap back if not completed
    }
  };

  const handleResetData = async () => {
    setIsResetting(true);
    try {
      // 1. Delete user document from Firestore
      await deleteDoc(doc(db, "users", user.uid));
      // 2. Clear local storage fallback
      localStorage.removeItem('ccdeck_appScriptUrl');
      // 3. Reload to force the app back to SetupWizard state
      window.location.reload();
    } catch (e) {
      console.error("Failed to reset data:", e);
      setIsResetting(false);
      setSwipeProgress(0);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (e) {
      console.error("Error signing out:", e);
    }
  };

  if (!user) return null;

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center p-3 rounded-2xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all border border-transparent hover:border-white/10"
        title="Profile"
      >
        <User size={18} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-64 rounded-2xl bg-[#0c1017] border border-white/10 shadow-2xl overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200">
          <div className="p-4 border-b border-white/5">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Signed in as</p>
            <p className="text-xs font-black text-white truncate">{user.email || 'Anonymous'}</p>
          </div>

          <div className="p-2 space-y-1">
            {!showReset ? (
              <>
                <button
                  onClick={() => setShowReset(true)}
                  className="w-full flex items-center gap-3 p-3 rounded-xl text-left text-xs font-black text-orange-500 hover:bg-orange-500/10 hover:text-orange-400 transition-colors uppercase tracking-widest"
                >
                  <Trash2 size={14} />
                  Reset Setup & Data
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 p-3 rounded-xl text-left text-xs font-black text-rose-500 hover:bg-rose-500/10 hover:text-rose-400 transition-colors uppercase tracking-widest"
                >
                  <LogOut size={14} />
                  Sign Out
                </button>
              </>
            ) : (
              <div className="p-2 space-y-4">
                <p className="text-[9px] font-bold text-orange-400 uppercase tracking-widest text-center leading-relaxed">
                  Warning: This clears your ccdeck setup completely.
                </p>

                <div className="relative h-12 bg-white/5 rounded-xl border border-white/10 overflow-hidden group">
                  {/* The Track Background filling up */}
                  <div
                    className="absolute top-0 left-0 h-full bg-rose-500/20 transition-all duration-75"
                    style={{ width: `${swipeProgress}%` }}
                  ></div>

                  {/* The Text */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-white transition-colors">
                      {isResetting ? <Loader2 size={14} className="animate-spin text-rose-500"/> : "Swipe to reset"}
                    </span>
                  </div>

                  {/* The Thumb */}
                  <div
                    className="absolute top-1 bottom-1 left-1 w-10 bg-rose-500 rounded-lg shadow-lg flex items-center justify-center transition-all duration-75 pointer-events-none z-10"
                    style={{ left: `calc(${swipeProgress}% - ${(swipeProgress/100) * 40}px + 4px)` }}
                  >
                    <ChevronRight size={16} className="text-white" />
                  </div>

                  {/* The actual hidden input range handling the interaction */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={swipeProgress}
                    onChange={handleSwipe}
                    onMouseUp={handleSwipeEnd}
                    onTouchEnd={handleSwipeEnd}
                    disabled={isResetting}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                  />
                </div>

                <button
                  onClick={() => { setShowReset(false); setSwipeProgress(0); }}
                  disabled={isResetting}
                  className="w-full py-2 text-[9px] font-bold text-gray-500 hover:text-white uppercase tracking-widest transition-colors"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}