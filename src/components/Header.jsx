import { Sun, Moon, Menu, Bell, Search, User, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Dropdown from './dropdown';



export function Header({ activeTab, setActiveTab }) {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);
  
  

  return (
    <header className="backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border-b border-white/20 dark:border-gray-700/50 px-4 lg:px-8 py-6 sticky top-0 z-[9999] shadow-lg">
      <div className=" left-0 flex items-center justify-between max-w-7xl mx-auto">
       <div className='left-0'> <Dropdown className='left-0' activeTab={activeTab} setActiveTab={setActiveTab} /></div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-4 group">
            
            <div className="relative">
               
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 neon-glow">
                <span className="text-white font-bold text-xl">AD</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
            </div>
            <div className="group-hover:transform group-hover:scale-105 transition-all duration-300">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-gray-100 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                ADmyBRAND Insights
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                ✨ Analytics Dashboard
              </p>
            </div>
          </div>

          
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
            <div className="relative backdrop-blur-sm bg-white/60 dark:bg-gray-800/60 rounded-2xl border border-white/30 dark:border-gray-600/30 transition-all duration-300 group-hover:bg-white/80 dark:group-hover:bg-gray-800/80">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 w-5 h-5 group-hover:text-blue-600 transition-colors duration-300" />
              <input
                type="text"
                placeholder="Search analytics..."
                className="pl-12 pr-6 py-3 w-64 lg:w-80 bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-0 font-medium"
              />
            </div>
          </div>

          <button className="relative p-3 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/30 dark:border-gray-600/30 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 transform hover:scale-110 group">
            <Bell className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 transition-colors duration-300" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            </span>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </button>

          <button
            onClick={() => setIsDark(!isDark)}
            className="relative p-3 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/30 dark:border-gray-600/30 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-500 transform hover:scale-110 hover:rotate-12 group overflow-hidden"
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <div className="relative z-10">
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-500 group-hover:text-yellow-400 transition-all duration-300 animate-pulse" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
              )}
            </div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>

          <div className="flex items-center space-x-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-white/30 dark:border-gray-600/30 pl-4 pr-2 py-2 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 group">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Shaswat Pathak</p>
              <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">🚀 Founding Engineer</p>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-60 group-hover:opacity-80 transition duration-300"></div>
              <button className="relative w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg">
                <User className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
