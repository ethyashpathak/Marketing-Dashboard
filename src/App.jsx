import { useState } from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { AnalyticsPage } from './components/AnalyticsPage';

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
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Section
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              This section is coming soon! Navigate to Overview or Analytics to see the full dashboard.
            </p>
          </div>
        );
    }
  };

  return (

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        {/* Header with Navigation */}
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {/* Main Content */}
        <main className="p-6">
          {renderContent()}
        </main>
      </div>
  );
}

export default App;
