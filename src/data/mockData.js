export const overviewMetrics = {
  revenue: {
    current: 524750,
    previous: 487230,
    change: 7.7,
    target: 600000
  },
  users: {
    current: 89420,
    previous: 82150,
    change: 8.9,
    target: 95000
  },
  conversions: {
    current: 3247,
    previous: 2980,
    change: 9.0,
    target: 3500
  },
  growth: {
    current: 12.4,
    previous: 8.7,
    change: 42.5,
    target: 15.0
  }
};

export const revenueData = [
  { month: 'Jan', revenue: 425000, target: 500000 },
  { month: 'Feb', revenue: 445000, target: 510000 },
  { month: 'Mar', revenue: 467000, target: 520000 },
  { month: 'Apr', revenue: 489000, target: 530000 },
  { month: 'May', revenue: 512000, target: 540000 },
  { month: 'Jun', revenue: 524750, target: 550000 }
];

export const userEngagementData = [
  { name: 'Organic Search', value: 35, color: '#8B5CF6' },
  { name: 'Social Media', value: 28, color: '#06B6D4' },
  { name: 'Direct Traffic', value: 20, color: '#10B981' },
  { name: 'Email Marketing', value: 12, color: '#F59E0B' },
  { name: 'Paid Ads', value: 5, color: '#EF4444' }
];

export const campaignPerformance = [
  { campaign: 'Summer Sale 2024', impressions: 125000, clicks: 8500, conversions: 247, spend: 12500, roas: 4.2 },
  { campaign: 'Brand Awareness Q2', impressions: 98000, clicks: 4200, conversions: 156, spend: 8900, roas: 3.8 },
  { campaign: 'Product Launch', impressions: 87000, clicks: 6800, conversions: 298, spend: 15200, roas: 5.1 },
  { campaign: 'Retargeting Campaign', impressions: 156000, clicks: 12400, conversions: 445, spend: 18700, roas: 6.3 },
  { campaign: 'Holiday Promo', impressions: 203000, clicks: 15600, conversions: 678, spend: 22400, roas: 7.2 },
  { campaign: 'Back to School', impressions: 145000, clicks: 9800, conversions: 324, spend: 13600, roas: 4.7 },
  { campaign: 'Flash Sale Weekend', impressions: 89000, clicks: 7200, conversions: 189, spend: 9800, roas: 3.4 },
  { campaign: 'Newsletter Signup', impressions: 76000, clicks: 3400, conversions: 234, spend: 5600, roas: 8.9 }
];

export const dailyTrafficData = [
  { date: '2024-07-01', users: 2340, sessions: 3240, bounceRate: 0.32 },
  { date: '2024-07-02', users: 2180, sessions: 3020, bounceRate: 0.35 },
  { date: '2024-07-03', users: 2890, sessions: 3980, bounceRate: 0.28 },
  { date: '2024-07-04', users: 3240, sessions: 4320, bounceRate: 0.25 },
  { date: '2024-07-05', users: 2950, sessions: 3850, bounceRate: 0.31 },
  { date: '2024-07-06', users: 2120, sessions: 2890, bounceRate: 0.38 },
  { date: '2024-07-07', users: 1890, sessions: 2450, bounceRate: 0.42 },
  { date: '2024-07-08', users: 2670, sessions: 3560, bounceRate: 0.29 },
  { date: '2024-07-09', users: 2840, sessions: 3720, bounceRate: 0.27 },
  { date: '2024-07-10', users: 3120, sessions: 4180, bounceRate: 0.24 },
  { date: '2024-07-11', users: 3380, sessions: 4520, bounceRate: 0.22 },
  { date: '2024-07-12', users: 2980, sessions: 3890, bounceRate: 0.30 },
  { date: '2024-07-13', users: 2560, sessions: 3240, bounceRate: 0.33 },
  { date: '2024-07-14', users: 2340, sessions: 3120, bounceRate: 0.35 }
];

export const topPages = [
  { page: '/products/premium-analytics', views: 45678, uniqueViews: 32456, avgTime: '3:24', bounceRate: '23%' },
  { page: '/dashboard/overview', views: 38942, uniqueViews: 28743, avgTime: '4:12', bounceRate: '18%' },
  { page: '/pricing', views: 29384, uniqueViews: 24567, avgTime: '2:45', bounceRate: '34%' },
  { page: '/features/advanced-reporting', views: 26754, uniqueViews: 21098, avgTime: '3:56', bounceRate: '21%' },
  { page: '/blog/marketing-insights', views: 23456, uniqueViews: 19234, avgTime: '5:23', bounceRate: '15%' },
  { page: '/contact', views: 18792, uniqueViews: 16543, avgTime: '1:34', bounceRate: '45%' },
  { page: '/about', views: 15623, uniqueViews: 13298, avgTime: '2:12', bounceRate: '38%' },
  { page: '/support/documentation', views: 12847, uniqueViews: 10234, avgTime: '6:45', bounceRate: '12%' }
];

export const deviceData = [
  { device: 'Desktop', users: 52340, percentage: 58.5 },
  { device: 'Mobile', users: 28670, percentage: 32.1 },
  { device: 'Tablet', users: 8410, percentage: 9.4 }
];

export const geographicData = [
  { country: 'United States', users: 28456, percentage: 31.8, revenue: 167890 },
  { country: 'United Kingdom', users: 15632, percentage: 17.5, revenue: 98456 },
  { country: 'Canada', users: 12089, percentage: 13.5, revenue: 76234 },
  { country: 'Germany', users: 8934, percentage: 10.0, revenue: 54321 },
  { country: 'Australia', users: 7245, percentage: 8.1, revenue: 43567 },
  { country: 'France', users: 6789, percentage: 7.6, revenue: 38902 },
  { country: 'Japan', users: 5432, percentage: 6.1, revenue: 32145 },
  { country: 'Others', users: 4843, percentage: 5.4, revenue: 28567 }
];
