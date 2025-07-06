import React from 'react';
import StatCard from '../components/StatCard';
import RevenueChart from '../components/RevenueChart';
import DataTable from '../components/DataTable';
import { dashboardStats, monthlyRevenueData, eventInquiries, inventoryItems } from '../data/dummyData.jsx';

// Define gradients for each card
const cardGradients = [
    'from-secondary to-purple-500', // For Bookings
    'from-primary to-green-500',   // For Revenue
    'from-warning to-orange-500',  // For Customers
    'from-danger to-red-500'       // For Expenses
];

const Dashboard = () => {
  const eventColumns = [
    { header: 'Event ID', accessor: 'id' },
    { header: 'Customer', accessor: 'customerName' },
    { header: 'Status', accessor: 'status' },
  ];

  const stockColumns = [
    { header: 'Item Name', accessor: 'name' },
    { header: 'Stock Left', accessor: 'quantity' },
    { header: 'Status', accessor: 'status' },
  ];

  // Combine stats with their gradients
  const statsWithGradients = dashboardStats.map((stat, index) => ({
      ...stat,
      gradient: cardGradients[index]
  }));

  return (
    <div className="space-y-8">
      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsWithGradients.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Main Section: Chart and Upcoming Events */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3">
          <RevenueChart data={monthlyRevenueData} title="Monthly Revenue vs Expenses" />
        </div>
        <div className="lg:col-span-2">
          <DataTable title="Recent Inquiries" data={eventInquiries.slice(0, 4)} columns={eventColumns} />
        </div>
      </div>

      {/* Bottom Section: Low Stock and other reports */}
      <div className="grid grid-cols-1 gap-6">
        <DataTable title="Low Stock Items" data={inventoryItems.filter(item => item.status === 'Low Stock')} columns={stockColumns} />
      </div>
    </div>
  );
};

export default Dashboard;