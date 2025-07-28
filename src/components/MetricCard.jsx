import { TrendingUp, TrendingDown, DollarSign, Users, Target, Percent } from 'lucide-react';
import { Card, CardContent } from './ui/Card';
import { formatCurrency, formatNumber, formatChangePercentage, getChangeColor, cn } from '../utils/helpers';

const iconMap = {
  revenue: DollarSign,
  users: Users,
  conversions: Target,
  growth: Percent
};

const colorMap = {
  revenue: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400',
  users: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
  conversions: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400',
  growth: 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400'
};

export function MetricCard({ type, title, current, previous, target, format = 'number' }) {
  const Icon = iconMap[type];
  const change = formatChangePercentage(current, previous);
  
  const formatValue = (value) => {
    switch (format) {
      case 'currency':
        return formatCurrency(value);
      case 'percentage':
        return `${value}%`;
      default:
        return formatNumber(value);
    }
  };

  const progress = target ? (current / target) * 100 : 0;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={cn("p-3 rounded-xl", colorMap[type])}>
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-1">{title}</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {formatValue(current)}
            </p>
          </div>
        </div>
        <div className="text-right">
          <div className={cn("flex items-center space-x-1 px-2 py-1 rounded-lg text-sm font-semibold", 
            change.isPositive 
              ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' 
              : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
          )}>
            {change.isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            <span>{change.formatted}</span>
          </div>
          {target && (
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              Target: {formatValue(target)}
            </p>
          )}
        </div>
      </div>
      
      {target && (
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
            <span>Progress to target</span>
            <span className="font-semibold">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
