import { 
  BarChart3, 
  Users, 
  Target, 
  TrendingUp, 
  Settings, 
  FileText, 
  Globe,
  ShoppingCart,
  X
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../utils/helpers';

const menuItems = [
  { icon: BarChart3, label: 'Overview', id: 'overview', active: true },
  { icon: TrendingUp, label: 'Analytics', id: 'analytics' },
  { icon: Users, label: 'Audience', id: 'audience' },
  { icon: Target, label: 'Campaigns', id: 'campaigns' },
  { icon: ShoppingCart, label: 'E-commerce', id: 'ecommerce' },
  { icon: Globe, label: 'Geographic', id: 'geographic' },
  { icon: FileText, label: 'Reports', id: 'reports' },
  { icon: Settings, label: 'Settings', id: 'settings' }
];

export function Sidebar({ isOpen, onClose, activeTab, setActiveTab }) {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Trigger animations when sidebar opens
      const timer = setTimeout(() => setIsAnimated(true), 100);
      return () => clearTimeout(timer);
    } else {
      setIsAnimated(false);
    }
  }, [isOpen]);
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:z-auto",
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        {/* Header section */}
        <div className={cn(
          "p-6 border-b border-gray-200 dark:border-gray-700 transition-all duration-500 ease-out",
          isAnimated ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        )}>
          {/* Close button for mobile */}
          <div className="lg:hidden flex justify-end mb-4">
            <button
              onClick={onClose}
              className={cn(
                "p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform",
                isAnimated ? "scale-100 rotate-0" : "scale-0 rotate-180"
              )}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Logo */}
          <div className={cn(
            "flex items-center space-x-3 transition-all duration-700 ease-out",
            isAnimated ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
          )}>
            <div className={cn(
              "w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center transition-all duration-500 ease-out",
              isAnimated ? "scale-100 rotate-0" : "scale-0 rotate-180"
            )}>
              <span className="text-white font-bold text-lg">AD</span>
            </div>
            <div className={cn(
              "transition-all duration-700 ease-out delay-200",
              isAnimated ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            )}>
              <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                ADmyBRAND
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Insights Dashboard
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  onClose(); // Close mobile menu when item is selected
                }}
                className={cn(
                  "w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-300 group transform ease-out",
                  isActive
                    ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-gray-100",
                  // Staggered animation based on index
                  isAnimated ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                )}
                style={{
                  transitionDelay: isAnimated ? `${300 + index * 100}ms` : '0ms'
                }}
              >
                <Icon className={cn(
                  "w-5 h-5 transition-all duration-300",
                  isActive ? "text-blue-600 dark:text-blue-400" : "group-hover:text-gray-700 dark:group-hover:text-gray-300",
                  isAnimated ? "scale-100 rotate-0" : "scale-0 rotate-45"
                )} 
                style={{
                  transitionDelay: isAnimated ? `${400 + index * 100}ms` : '0ms'
                }}
                />
                <span className={cn(
                  "font-medium transition-all duration-300",
                  isAnimated ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                )}
                style={{
                  transitionDelay: isAnimated ? `${450 + index * 100}ms` : '0ms'
                }}
                >{item.label}</span>
                {isActive && (
                  <div className={cn(
                    "ml-auto w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full transition-all duration-300",
                    isAnimated ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  )}
                  style={{
                    transitionDelay: isAnimated ? `${500 + index * 100}ms` : '0ms'
                  }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Bottom section */}
        <div className={cn(
          "p-4 border-t border-gray-200 dark:border-gray-700 transition-all duration-700 ease-out",
          isAnimated ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}
        style={{
          transitionDelay: isAnimated ? `${300 + menuItems.length * 100 + 200}ms` : '0ms'
        }}
        >
          <div className={cn(
            "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 rounded-lg transition-all duration-500 ease-out transform",
            isAnimated ? "scale-100" : "scale-95"
          )}
          style={{
            transitionDelay: isAnimated ? `${400 + menuItems.length * 100 + 200}ms` : '0ms'
          }}
          >
            <div className={cn(
              "flex items-center space-x-3 mb-2 transition-all duration-500",
              isAnimated ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
            )}
            style={{
              transitionDelay: isAnimated ? `${500 + menuItems.length * 100 + 200}ms` : '0ms'
            }}
            >
              <div className={cn(
                "w-2 h-2 bg-green-500 rounded-full animate-pulse transition-all duration-300",
                isAnimated ? "scale-100" : "scale-0"
              )}
              style={{
                transitionDelay: isAnimated ? `${600 + menuItems.length * 100 + 200}ms` : '0ms'
              }}
              ></div>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                System Status
              </span>
            </div>
            <p className={cn(
              "text-xs text-gray-600 dark:text-gray-400 transition-all duration-500",
              isAnimated ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            )}
            style={{
              transitionDelay: isAnimated ? `${650 + menuItems.length * 100 + 200}ms` : '0ms'
            }}
            >
              All systems operational
            </p>
            <p className={cn(
              "text-xs text-gray-500 dark:text-gray-500 mt-1 transition-all duration-500",
              isAnimated ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            )}
            style={{
              transitionDelay: isAnimated ? `${700 + menuItems.length * 100 + 200}ms` : '0ms'
            }}
            >
              Last updated: 2 min ago
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
