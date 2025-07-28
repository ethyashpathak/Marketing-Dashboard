import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/Card';

const COLORS = ['#8B5CF6', '#06B6D4', '#10B981', '#F59E0B', '#EF4444'];

function CustomTooltip({ active, payload, label, labelFormatter, valueFormatter }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
        <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
          {labelFormatter ? labelFormatter(label) : label}
        </p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {valueFormatter ? valueFormatter(entry.value) : entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
}

export function RevenueChart({ data, title = "Revenue Trend" }) {
  const [renderKey, setRenderKey] = useState(0);

  const handleMouseEnter = () => {
    setRenderKey(prev => prev + 1);
  };

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onMouseEnter={handleMouseEnter}
    >
      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        {title}
      </h3>
      
      <ResponsiveContainer key={renderKey} width="100%" height={300}>
        <LineChart data={data}>
          <defs>
            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity={0.8}/>
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity={0.1}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.2)" />
          <XAxis 
            dataKey="month" 
            stroke="#64748B"
            fontSize={12}
            fontWeight="600"
            tick={{ fill: 'currentColor' }}
          />
          <YAxis 
            stroke="#64748B"
            fontSize={12}
            fontWeight="600"
            tick={{ fill: 'currentColor' }}
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            }}
            labelStyle={{ color: '#1f2937', fontWeight: 'bold' }}
            formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']}
          />
          <Line 
            type="monotone" 
            dataKey="revenue" 
            stroke="#8B5CF6" 
            strokeWidth={3}
            dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#8B5CF6', strokeWidth: 2 }}
          />
          <Line 
            type="monotone" 
            dataKey="target" 
            stroke="#94A3B8" 
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function TrafficChart({ data, title = "Daily Traffic" }) {
  const [renderKey, setRenderKey] = useState(0);

  const handleMouseEnter = () => {
    setRenderKey(prev => prev + 1);
  };

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onMouseEnter={handleMouseEnter}
    >
      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        {title}
      </h3>
      
      <ResponsiveContainer key={renderKey} width="100%" height={300}>
        <BarChart data={data}>
          <defs>
            <linearGradient id="usersGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#0891B2" />
            </linearGradient>
            <linearGradient id="sessionsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.2)" />
          <XAxis 
            dataKey="date" 
            stroke="#64748B"
            fontSize={12}
            fontWeight="600"
            tick={{ fill: 'currentColor' }}
            tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          />
          <YAxis 
            stroke="#64748B"
            fontSize={12}
            fontWeight="600"
            tick={{ fill: 'currentColor' }}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            }}
            labelStyle={{ color: '#1f2937', fontWeight: 'bold' }}
            labelFormatter={(label) => new Date(label).toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          />
          <Bar 
            dataKey="users" 
            fill="url(#usersGradient)" 
            radius={[4, 4, 0, 0]} 
          />
          <Bar 
            dataKey="sessions" 
            fill="url(#sessionsGradient)" 
            radius={[4, 4, 0, 0]} 
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function EngagementChart({ data, title = "User Engagement Sources" }) {
  const [renderKey, setRenderKey] = useState(0);

  const handleMouseEnter = () => {
    setRenderKey(prev => prev + 1);
  };

  const renderLabel = (entry) => {
    return `${entry.name}: ${entry.value}%`;
  };

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onMouseEnter={handleMouseEnter}
    >
      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        {title}
      </h3>
      
      <ResponsiveContainer key={renderKey} width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderLabel}
            outerRadius={100}
            innerRadius={40}
            paddingAngle={3}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.color || COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            }}
            labelStyle={{ color: '#1f2937', fontWeight: 'bold' }}
            formatter={(value) => [`${value}%`, 'Usage']}
          />
        </PieChart>
      </ResponsiveContainer>
      
      <div className="mt-6 grid grid-cols-2 gap-3">
        {data.map((entry, index) => (
          <div key={entry.name} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
            <div 
              className="w-4 h-4 rounded-full" 
              style={{ backgroundColor: entry.color || COLORS[index % COLORS.length] }}
            />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
