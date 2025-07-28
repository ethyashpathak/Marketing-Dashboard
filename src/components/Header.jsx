import { Sun, Moon, Menu, Bell, Search, User, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
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

  const currentSection = menuItems.find(item => item.id === activeTab);

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 lg:px-6 py-4 sticky top-0 z-30">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">AD</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                ADmyBRAND Insights
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Analytics Dashboard
              </p>
            </div>
          </div>

          {/* Navigation Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-150"
            >
              {currentSection && <currentSection.icon className="w-5 h-5" />}
              <span className="font-medium text-gray-900 dark:text-gray-100">
                {currentSection?.label || 'Select Section'}
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-150 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
                <div className="py-2">
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;
                    
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveTab(item.id);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-all duration-150 hover:bg-gray-50 dark:hover:bg-gray-700 ${
                          isActive 
                            ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-r-4 border-blue-600' 
                            : 'text-gray-600 dark:text-gray-400'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{item.label}</span>
                        {isActive && (
                          <div className="ml-auto w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full" />
                        )}
                      </button>
                    );
                  })}
                </div>
                
                {/* System Status in Dropdown */}
                <div className="border-t border-gray-200 dark:border-gray-700 p-4">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-3 rounded-lg">
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        System Status
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      All systems operational
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-3">
          {/* Search */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search analytics..."
              className="pl-10 pr-4 py-2 w-48 lg:w-64 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-150"
            />
          </div>

          {/* Notifications */}
          <button className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600" />
            )}
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Shaswat Pathak</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Founding Engineer</p>
            </div>
            <button className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-150">
              <User className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {isDropdownOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </header>
  );
}
