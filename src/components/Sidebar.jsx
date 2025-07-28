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
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          {/* Close button for mobile */}
          <div className="lg:hidden flex justify-end mb-4">
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">AD</span>
            </div>
            <div>
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
          {menuItems.map((item) => {
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
                  "w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 group",
                  isActive
                    ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-gray-100"
                )}
              >
                <Icon className={cn(
                  "w-5 h-5 transition-colors duration-200",
                  isActive ? "text-blue-600 dark:text-blue-400" : "group-hover:text-gray-700 dark:group-hover:text-gray-300"
                )} />
                <span className="font-medium">{item.label}</span>
                {isActive && (
                  <div className="ml-auto w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Bottom section */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 rounded-lg">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                System Status
              </span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              All systems operational
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              Last updated: 2 min ago
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
