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
    <Card className="animate-slide-in hover:scale-105 transition-transform duration-200">
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={cn("p-2 rounded-lg", colorMap[type])}>
              <Icon size={20} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {formatValue(current)}
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className={cn("flex items-center space-x-1", getChangeColor(change.isPositive))}>
              {change.isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
              <span className="text-sm font-medium">{change.formatted}</span>
            </div>
            {target && (
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Target: {formatValue(target)}
              </p>
            )}
          </div>
        </div>
        
        {target && (
          <div className="mt-4">
            <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
              <span>Progress to target</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
