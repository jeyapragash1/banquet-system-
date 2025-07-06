import React from 'react';
import PageHeader from '../components/PageHeader';
import DataTable from '../components/DataTable';
import { customers } from '../data/dummyData.jsx';
import { LuEye, LuPencil, LuTrash2 } from 'react-icons/lu';

const CustomerManagement = () => {
  const columns = [
    { header: 'Customer Name', accessor: 'name' },
    { header: 'Contact', accessor: 'contact' },
    { header: 'Pax/Sawan', accessor: 'pax' },
    { header: 'Community', accessor: 'community' },
    { header: 'Total Events', accessor: 'events' },
    { header: 'Total Spent', accessor: 'totalSpent' },
    { header: 'Actions', accessor: 'actions' },
  ];
  
  const customerDataWithActions = customers.map(customer => ({
    ...customer,
    totalSpent: `$${customer.totalSpent.toLocaleString()}`,
    actions: (
      <div className="flex gap-2">
        <button className="text-blue-500 hover:text-blue-700"><LuEye /></button>
        <button className="text-green-500 hover:text-green-700"><LuPencil /></button>
        <button className="text-red-500 hover:text-red-700"><LuTrash2 /></button>
      </div>
    )
  }));

  return (
    <div>
      <PageHeader title="Customer Management" buttonText="Add New Customer" buttonLink="/customers/new" />
      <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-lg">
        <DataTable
          title="All Customers"
          columns={columns}
          data={customerDataWithActions}
        />
      </div>
    </div>
  );
};

export default CustomerManagement;