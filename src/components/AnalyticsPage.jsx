import { Card, CardHeader, CardTitle, CardContent } from './ui/Card';
import { DataTable } from './DataTable';
import { topPages, deviceData, geographicData } from '../data/mockData';
import { formatNumber } from '../utils/helpers';
import { Monitor, Smartphone, Tablet, Globe, Users, Eye } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export function AnalyticsPage() {
  const pageColumns = [
    { 
      key: 'page', 
      label: 'Page',
      render: (value) => (
        <div className="font-medium text-blue-600 dark:text-blue-400 truncate max-w-xs">
          {value}
        </div>
      )
    },
    { 
      key: 'views', 
      label: 'Page Views',
      render: (value) => (
        <span className="font-medium text-gray-900 dark:text-gray-100">
          {formatNumber(value)}
        </span>
      )
    },
    { 
      key: 'uniqueViews', 
      label: 'Unique Views',
      render: (value) => (
        <span className="text-gray-600 dark:text-gray-400">
          {formatNumber(value)}
        </span>
      )
    },
    { 
      key: 'avgTime', 
      label: 'Avg. Time',
      render: (value) => (
        <span className="text-gray-600 dark:text-gray-400">
          {value}
        </span>
      )
    },
    { 
      key: 'bounceRate', 
      label: 'Bounce Rate',
      render: (value) => (
        <span className={`font-medium ${
          parseFloat(value) < 25 ? 'text-green-600 dark:text-green-400' :
          parseFloat(value) < 35 ? 'text-yellow-600 dark:text-yellow-400' :
          'text-red-600 dark:text-red-400'
        }`}>
          {value}
        </span>
      )
    }
  ];

  const deviceIcons = {
    Desktop: Monitor,
    Mobile: Smartphone,
    Tablet: Tablet
  };

  return (
    <div className="space-y-6">
      <AnimatedSection>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Analytics Deep Dive
          </h2>
          <p className="text-gray-600 dark:text-gray-200">
            Detailed insights into user behavior and content performance.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {deviceData.map((device, index) => {
          const Icon = deviceIcons[device.device];
          return (
            <AnimatedSection key={device.device} animation="scaleIn" delay={index * 100}>
              <Card className="h-full">
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          {device.device}
                        </p>
                        <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                          {formatNumber(device.users)}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                        {device.percentage}%
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${device.percentage}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-6">
        <AnimatedSection delay={200}>
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="w-5 h-5" />
                  <span>Geographic Distribution</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {geographicData.map((country, index) => (
                    <div key={country.country} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-gray-100">
                            {country.country}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {formatNumber(country.users)} users ({country.percentage}%)
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900 dark:text-gray-100">
                          ${formatNumber(country.revenue)}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Revenue</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={300}>
          <div>
            <DataTable
              data={topPages}
              columns={pageColumns}
              title="Top Performing Pages"
              searchable={true}
              sortable={true}
              pagination={true}
              pageSize={8}
            />
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
