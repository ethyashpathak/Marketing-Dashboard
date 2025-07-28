import { useState } from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { AnalyticsPage } from './components/AnalyticsPage';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Dashboard />;
      case 'analytics':
        return <AnalyticsPage />;
      default:
        return (
          <div className="text-center py-20">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-2xl max-w-md mx-auto premium-card">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">🚀</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Section
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                This amazing section is coming soon! Navigate to Overview or Analytics to explore our stunning dashboard.
              </p>
              <div className="mt-8">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full w-1/3 shimmer"></div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Coming Soon...</p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen dashboard-bg relative overflow-hidden scroll-smooth">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse float-animation"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse float-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse float-animation" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10">
        <div className="glass-effect dark:glass-effect-dark">
          <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        
        <main className="p-6 lg:p-8 overflow-y-auto scroll-smooth">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>

      <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 float-animation" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 float-animation" style={{animationDelay: '3s'}}></div>
    </div>
  );
}

export default App;
