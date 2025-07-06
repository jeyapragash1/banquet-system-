import React from 'react';
import PageHeader from '../components/PageHeader';
import DataTable from '../components/DataTable';
import { eventInquiries } from '../data/dummyData.jsx';
import { LuEye, LuPencil, LuFileText } from 'react-icons/lu'; // <-- CORRECTED: Changed LuEdit to LuPencil

const EventInquiries = () => {
    const columns = [
        { header: 'Event ID', accessor: 'id' },
        { header: 'Customer', accessor: 'customerName' },
        { header: 'Event Type', accessor: 'eventType' },
        { header: 'Event Date', accessor: 'eventDate' },
        { header: 'Amount', accessor: 'agreedAmount' },
        { header: 'Balance', accessor: 'balance' },
        { header: 'Taken By', accessor: 'takenBy' },
        { header: 'Status', accessor: 'status' },
        { header: 'Actions', accessor: 'actions' },
    ];
  
    const inquiryDataWithActions = eventInquiries.map(inquiry => ({
        ...inquiry,
        agreedAmount: `${inquiry.agreedAmount.toLocaleString()}`,
        balance: `${inquiry.balance.toLocaleString()}`,
        actions: (
          <div className="flex gap-3">
            <button className="text-blue-500 hover:text-blue-700" title="View Details"><LuEye /></button>
            {/* CORRECTED: Changed LuEdit to LuPencil */}
            <button className="text-green-500 hover:text-green-700" title="Edit Inquiry"><LuPencil /></button>
            <button className="text-purple-500 hover:text-purple-700" title="Generate Invoice"><LuFileText /></button>
          </div>
        )
    }));

    return (
        <div>
            <PageHeader title="Event Inquiries" buttonText="Create New Inquiry" />
            <div className="bg-white p-6 rounded-lg shadow-md">
                <DataTable
                    title="All Event Inquiries"
                    columns={columns}
                    data={inquiryDataWithActions}
                />
            </div>
        </div>
    );
};

export default EventInquiries;