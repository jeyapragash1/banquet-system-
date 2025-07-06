import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const RevenueChart = ({ data, title }) => {
  return (
    // STYLE CHANGE: Background and border
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 h-full">
      {/* STYLE CHANGE: Title text color */}
      <h3 className="font-bold text-lg text-white mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          {/* STYLE CHANGE: Grid line color */}
          <CartesianGrid strokeDasharray="3 3" stroke="#4a5568" vertical={false} />
          {/* STYLE CHANGE: Axis label color */}
          <XAxis dataKey="name" tick={{ fill: '#a0aec0' }} />
          <YAxis tick={{ fill: '#a0aec0' }} tickFormatter={(value) => `${value/1000}k`}/>
          {/* STYLE CHANGE: Tooltip background color */}
          <Tooltip 
            cursor={{fill: 'rgba(113, 128, 150, 0.1)'}} 
            contentStyle={{backgroundColor: '#2d3748', border: '1px solid #4a5568', borderRadius: '0.5rem'}}
            labelStyle={{color: '#e2e8f0'}}
          />
          <Legend wrapperStyle={{color: '#a0aec0'}} />
          <Bar dataKey="Revenue" fill="#28c76f" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Expenses" fill="#ea5455" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;