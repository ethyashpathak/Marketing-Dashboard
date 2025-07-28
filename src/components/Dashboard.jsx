import { MetricCard } from './MetricCard';
import { RevenueChart, TrafficChart, EngagementChart } from './Charts';
import { DataTable } from './DataTable';
import { 
  overviewMetrics, 
  revenueData, 
  userEngagementData, 
  campaignPerformance,
  dailyTrafficData 
} from '../data/mockData';
import { formatCurrency, formatNumber, formatPercentage } from '../utils/helpers';

export function Dashboard() {
  // Define columns for the campaign performance table
  const campaignColumns = [
    { 
      key: 'campaign', 
      label: 'Campaign Name',
      render: (value) => (
        <div className="font-medium text-gray-900 dark:text-gray-100">
          {value}
        </div>
      )
    },
    { 
      key: 'impressions', 
      label: 'Impressions',
      render: (value) => (
        <span className="text-gray-600 dark:text-gray-400">
          {formatNumber(value)}
        </span>
      )
    },
    { 
      key: 'clicks', 
      label: 'Clicks',
      render: (value) => (
        <span className="text-gray-600 dark:text-gray-400">
          {formatNumber(value)}
        </span>
      )
    },
    { 
      key: 'conversions', 
      label: 'Conversions',
      render: (value) => (
        <span className="font-medium text-green-600 dark:text-green-400">
          {value}
        </span>
      )
    },
    { 
      key: 'spend', 
      label: 'Spend',
      render: (value) => (
        <span className="text-gray-600 dark:text-gray-400">
          {formatCurrency(value)}
        </span>
      )
    },
    { 
      key: 'roas', 
      label: 'ROAS',
      render: (value) => (
        <div className="flex items-center">
          <span className={`font-medium ${
            value >= 5 ? 'text-green-600 dark:text-green-400' :
            value >= 3 ? 'text-yellow-600 dark:text-yellow-400' :
            'text-red-600 dark:text-red-400'
          }`}>
            {value}x
          </span>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Dashboard Overview
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Welcome back! Here's what's happening with your marketing campaigns today.
        </p>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <MetricCard
          type="revenue"
          title="Total Revenue"
          current={overviewMetrics.revenue.current}
          previous={overviewMetrics.revenue.previous}
          target={overviewMetrics.revenue.target}
          format="currency"
        />
        <MetricCard
          type="users"
          title="Active Users"
          current={overviewMetrics.users.current}
          previous={overviewMetrics.users.previous}
          target={overviewMetrics.users.target}
        />
        <MetricCard
          type="conversions"
          title="Conversions"
          current={overviewMetrics.conversions.current}
          previous={overviewMetrics.conversions.previous}
          target={overviewMetrics.conversions.target}
        />
        <MetricCard
          type="growth"
          title="Growth Rate"
          current={overviewMetrics.growth.current}
          previous={overviewMetrics.growth.previous}
          target={overviewMetrics.growth.target}
          format="percentage"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <RevenueChart data={revenueData} />
        <EngagementChart data={userEngagementData} />
      </div>

      {/* Traffic Chart */}
      <TrafficChart data={dailyTrafficData} />

      {/* Campaign Performance Table */}
      <DataTable
        data={campaignPerformance}
        columns={campaignColumns}
        title="Campaign Performance"
        searchable={true}
        sortable={true}
        pagination={true}
        pageSize={6}
      />
    </div>
  );
}
