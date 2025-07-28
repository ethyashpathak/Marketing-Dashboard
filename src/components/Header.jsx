import { Sun, Moon, Menu, Bell, Search, User, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { 
  BarChart3, 
  Users, 
  Target, 
  TrendingUp, 
  Settings, 
  FileText, 
  Globe,
  ShoppingCart
} from 'lucide-react';

const menuItems = [
  { icon: BarChart3, label: 'Overview', id: 'overview' },
  { icon: TrendingUp, label: 'Analytics', id: 'analytics' },
  { icon: Users, label: 'Audience', id: 'audience' },
  { icon: Target, label: 'Campaigns', id: 'campaigns' },
  { icon: ShoppingCart, label: 'E-commerce', id: 'ecommerce' },
  { icon: Globe, label: 'Geographic', id: 'geographic' },
  { icon: FileText, label: 'Reports', id: 'reports' },
  { icon: Settings, label: 'Settings', id: 'settings' }
];

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
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const currentSection = menuItems.find(item => item.id === activeTab);

  return (
    <header className="backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border-b border-white/20 dark:border-gray-700/50 px-4 lg:px-8 py-6 sticky top-0 z-[9999] shadow-lg">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
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

          <div className="relative z-50" ref={dropdownRef}>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Dropdown toggle clicked, current state:', isDropdownOpen);
                setIsDropdownOpen(!isDropdownOpen);
              }}
              className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-2xl hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-800 dark:hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl premium-card group"
            >
              {currentSection && <currentSection.icon className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:animate-pulse" />}
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                {currentSection?.label || 'Select Section'}
              </span>
              <ChevronDown className={`w-4 h-4 text-gray-600 dark:text-gray-400 transition-all duration-300 ${isDropdownOpen ? 'rotate-180 text-blue-600' : ''}`} />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </button>

            {isDropdownOpen && (
              <>
                <div 
                  className="fixed inset-0 bg-transparent"
                  style={{ zIndex: 999999998 }}
                  onClick={() => setIsDropdownOpen(false)}
                />
                <div 
                  className="fixed top-20 left-4 w-80 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-2xl overflow-hidden"
                  style={{ 
                    zIndex: 999999999,
                    position: 'fixed'
                  }}
                >
                  <div className="p-2">
                    {menuItems.map((item, index) => {
                      const Icon = item.icon;
                      const isActive = activeTab === item.id;
                      
                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            console.log('Navigation clicked:', item.id);
                            setActiveTab(item.id);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full flex items-center space-x-4 px-4 py-4 text-left transition-all duration-300 rounded-2xl ${
                            isActive 
                              ? 'bg-blue-500 text-white' 
                              : 'text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                          }`}
                        >
                          <div className={`p-2 rounded-xl ${
                            isActive 
                              ? 'bg-white/20' 
                              : 'bg-gray-100 dark:bg-gray-700'
                          }`}>
                            <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-blue-600 dark:text-blue-400'}`} />
                          </div>
                          <span className="font-semibold flex-1">{item.label}</span>
                          {isActive && (
                            <div className="w-3 h-3 bg-white rounded-full" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                  
                  <div className="border-t border-gray-200 dark:border-gray-700 p-4">
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-2xl border border-green-200 dark:border-green-700">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-bold text-green-800 dark:text-green-200">
                          System Status
                        </span>
                      </div>
                      <p className="text-xs text-green-700 dark:text-green-300 font-medium">
                        🚀 All systems operational
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
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
