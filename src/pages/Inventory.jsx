import React from 'react';
import PageHeader from '../components/PageHeader';
import DataTable from '../components/DataTable';
import { inventoryItems } from '../data/dummyData.jsx';
import { LuPencil, LuHistory } from 'react-icons/lu'; // <-- CORRECTED: Changed LuEdit to LuPencil

const Inventory = () => {
    const columns = [
        { header: 'Item Name', accessor: 'name' },
        { header: 'Category', accessor: 'category' },
        { header: 'Quantity', accessor: 'quantity' },
        { header: 'Status', accessor: 'status' },
        { header: 'Actions', accessor: 'actions' },
    ];
  
    const inventoryDataWithActions = inventoryItems.map(item => ({
        ...item,
        status: (
            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                item.status === 'In Stock' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
            }`}>
                {item.status}
            </span>
        ),
        actions: (
          <div className="flex gap-3">
            {/* CORRECTED: Changed LuEdit to LuPencil */}
            <button className="text-green-500 hover:text-green-700" title="Edit Item"><LuPencil /></button>
            <button className="text-blue-500 hover:text-blue-700" title="View Stock Log"><LuHistory /></button>
          </div>
        )
    }));

    return (
        <div>
            <PageHeader title="Inventory Management" buttonText="Add New Item" />
            <div className="bg-white p-6 rounded-lg shadow-md">
                <DataTable
                    title="All Inventory Items"
                    columns={columns}
                    data={inventoryDataWithActions}
                />
            </div>
        </div>
    );
};

export default Inventory;