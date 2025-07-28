import { clsx } from 'clsx';

export function cn(...inputs) {
  return clsx(inputs);
}

export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(number) {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + 'M';
  }
  if (number >= 1000) {
    return (number / 1000).toFixed(1) + 'K';
  }
  return number.toString();
}

export function formatPercentage(number, decimals = 1) {
  return `${number.toFixed(decimals)}%`;
}

export function formatChangePercentage(current, previous) {
  const change = ((current - previous) / previous) * 100;
  return {
    value: Math.abs(change),
    isPositive: change >= 0,
    formatted: formatPercentage(Math.abs(change))
  };
}

export function getChangeColor(isPositive) {
  return isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400';
}

export function getProgressColor(percentage) {
  if (percentage >= 90) return 'bg-green-500';
  if (percentage >= 70) return 'bg-blue-500';
  if (percentage >= 50) return 'bg-yellow-500';
  return 'bg-red-500';
}
