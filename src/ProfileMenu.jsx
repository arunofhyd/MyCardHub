import React, { useState, useRef, useEffect } from 'react';
import { LogOut, User, Trash2, ChevronRight, Loader2, Download, Upload, Moon, Sun } from 'lucide-react';
import { auth, db } from './firebase';
import { signOut } from 'firebase/auth';
import { doc, deleteDoc, getDoc, setDoc } from 'firebase/firestore';

export default function ProfileMenu({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [swipeProgress, setSwipeProgress] = useState(0);
  const [isResetting, setIsResetting] = useState(false);
  const [isRestoring, setIsRestoring] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const menuRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }

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

  const handleExportBackup = async () => {
    try {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        const backup = {
          portfolio: data.portfolio || "[]",
          customConfig: data.customConfig || "{}"
        };
        const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `ccdeck_backup_${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      } else {
        alert("No data found to export.");
      }
    } catch (e) {
      console.error("Error exporting backup:", e);
      alert("Failed to export backup.");
    }
  };

  const handleRestoreBackup = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsRestoring(true);
    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const backupData = JSON.parse(event.target.result);
        if (backupData.portfolio !== undefined && backupData.customConfig !== undefined) {
          await setDoc(doc(db, "users", user.uid), {
            portfolio: backupData.portfolio,
            customConfig: backupData.customConfig
          }, { merge: true });
          alert("Backup restored successfully!");
          window.location.reload();
        } else {
          alert("Invalid backup file format.");
        }
      } catch (err) {
        console.error("Failed to restore backup:", err);
        alert("Failed to restore backup: Invalid JSON.");
      } finally {
        setIsRestoring(false);
        if (fileInputRef.current) fileInputRef.current.value = "";
      }
    };
    reader.readAsText(file);
  };

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('ccdeck_theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('ccdeck_theme', 'dark');
      setIsDark(true);
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
        className="flex items-center justify-center p-3 rounded-2xl bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all border border-transparent dark:hover:border-white/10"
        title="Profile"
      >
        <User size={18} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-64 rounded-2xl bg-white dark:bg-[#0c1017] border border-gray-200 dark:border-white/10 shadow-2xl overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200">
          <div className="p-4 border-b border-gray-100 dark:border-white/5 flex justify-between items-start">
            <div className="overflow-hidden pr-4">
              <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Signed in as</p>
              <p className="text-xs font-black text-gray-900 dark:text-white truncate">{user.email || 'Anonymous'}</p>
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 shrink-0 bg-gray-100 dark:bg-white/5 rounded-lg text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              title="Toggle Theme"
            >
              {isDark ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          </div>

          <div className="p-2 space-y-1">
            {!showReset ? (
              <>
                <button
                  onClick={handleExportBackup}
                  className="w-full flex items-center gap-3 p-3 rounded-xl text-left text-xs font-black text-indigo-400 hover:bg-indigo-500/10 hover:text-indigo-300 transition-colors uppercase tracking-widest"
                >
                  <Download size={14} />
                  Export Backup
                </button>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isRestoring}
                  className="w-full flex items-center gap-3 p-3 rounded-xl text-left text-xs font-black text-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300 transition-colors uppercase tracking-widest"
                >
                  {isRestoring ? <Loader2 size={14} className="animate-spin" /> : <Upload size={14} />}
                  Restore Backup
                </button>
                <input
                  type="file"
                  accept=".json"
                  ref={fileInputRef}
                  onChange={handleRestoreBackup}
                  className="hidden"
                />

                <div className="h-px bg-gray-100 dark:bg-white/5 my-1 mx-2"></div>

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
                <p className="text-[9px] font-bold text-orange-500 dark:text-orange-400 uppercase tracking-widest text-center leading-relaxed">
                  Warning: This clears your ccdeck setup completely.
                </p>

                <div className="relative h-12 bg-gray-100 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 overflow-hidden group">
                  {/* The Track Background filling up */}
                  <div
                    className="absolute top-0 left-0 h-full bg-rose-500/20 transition-all duration-75"
                    style={{ width: `${swipeProgress}%` }}
                  ></div>

                  {/* The Text */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition-colors">
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
                  className="w-full py-2 text-[9px] font-bold text-gray-500 hover:text-gray-900 dark:hover:text-white uppercase tracking-widest transition-colors"
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