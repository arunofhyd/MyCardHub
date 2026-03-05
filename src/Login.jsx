import React, { useState } from 'react';
import { ShieldCheck, Loader2 } from 'lucide-react';
import { auth } from './firebase';
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setError('');
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#05070a] flex flex-col items-center justify-center p-4 selection:bg-indigo-500/30 relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,_#312e81_0%,_transparent_50%)] opacity-20 dark:opacity-40 pointer-events-none"></div>

      <div className="bg-white dark:bg-white/5 backdrop-blur-3xl border border-gray-200 dark:border-white/10 p-10 md:p-14 rounded-[4rem] w-full max-w-md shadow-2xl dark:shadow-[0_0_80px_rgba(0,0,0,0.5)] relative z-10 transition-colors">
        <div className="flex flex-col items-center mb-10 text-center">
          <div className="w-16 h-16 bg-gradient-to-tr from-indigo-600 to-blue-400 rounded-2xl flex items-center justify-center shadow-lg mb-8">
            <ShieldCheck className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight leading-none mb-1">ccdeck</h1>
          <p className="text-[9px] font-bold text-indigo-600 dark:text-indigo-400 tracking-[0.4em] uppercase">Secure Access</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 rounded-2xl text-rose-500 text-xs font-bold text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleEmailAuth} className="space-y-4 mb-8">
          <div>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 rounded-2xl px-5 py-4 text-gray-900 dark:text-white font-black outline-none text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-indigo-500/50 transition-colors"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 rounded-2xl px-5 py-4 text-gray-900 dark:text-white font-black outline-none text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-indigo-500/50 transition-colors"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white px-7 py-4 rounded-2xl font-black transition-all flex items-center justify-center gap-2 shadow-lg text-xs uppercase tracking-widest mt-2"
          >
            {isLoading ? <Loader2 size={16} className="animate-spin" /> : (isRegistering ? 'Sign Up' : 'Sign In')}
          </button>
        </form>

        <div className="flex items-center gap-4 mb-8">
          <div className="h-px bg-gray-200 dark:bg-white/10 flex-1"></div>
          <span className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-widest">or</span>
          <div className="h-px bg-gray-200 dark:bg-white/10 flex-1"></div>
        </div>

        <button
          onClick={handleGoogleLogin}
          disabled={isLoading}
          className="w-full bg-white dark:bg-white text-gray-900 dark:text-black border border-gray-200 dark:border-transparent hover:bg-gray-50 dark:hover:bg-gray-100 disabled:opacity-50 px-7 py-4 rounded-2xl font-black transition-all flex items-center justify-center gap-3 shadow-sm dark:shadow-lg text-xs uppercase tracking-widest"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Continue with Google
        </button>

        <div className="mt-8 text-center">
          <button
            onClick={() => setIsRegistering(!isRegistering)}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors"
          >
            {isRegistering ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
          </button>
        </div>
      </div>
    </div>
  );
}