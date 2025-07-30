import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
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
import { cn } from '../utils/helpers';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function Dropdown({ activeTab, setActiveTab }) {
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
   const dropdownRef = useRef(null);
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
        <>
        <div className=" left-0 relative z-50" ref={dropdownRef}>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Dropdown toggle clicked, current state:', isDropdownOpen);
                setIsDropdownOpen(!isDropdownOpen);
              }}
              className=" left-0 flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-2xl hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-800 dark:hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl premium-card group"
            >
              {currentSection && <currentSection.icon className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:animate-pulse" />}
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                {currentSection?.label || 'MENU'}
              </span>
              <ChevronDown className={`w-4 h-4 text-gray-600 dark:text-gray-400 transition-all duration-300 ${isDropdownOpen ? 'rotate-180 text-blue-600' : ''}`} />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </button>

            {isDropdownOpen && (
              <>
                <div 
                  className="fixed inset-0 z-50"
                  style={{ zIndex: 999999998 }}
                  onClick={() => setIsDropdownOpen(false)}
                />
                <div 
                  className="fixed top-20 left-0 w-80 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-2xl overflow-hidden"
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
        </>
    )
}

export default Dropdown
