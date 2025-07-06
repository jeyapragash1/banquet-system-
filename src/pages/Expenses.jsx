import React from 'react';
import PageHeader from '../components/PageHeader';
import DataTable from '../components/DataTable';
import { expenses } from '../data/dummyData.jsx'; // <-- CORRECTED

const Expenses = () => {
    const columns = [
        { header: 'Date', accessor: 'date' },
        { header: 'Category', accessor: 'category' },
        { header: 'Description', accessor: 'description' },
        { header: 'Amount', accessor: 'amount' },
    ];

    const expenseData = expenses.map(e => ({...e, amount: `${e.amount.toFixed(2)}`}))

    return (
        <div>
            <PageHeader title="Utilities & Expense Tracker" buttonText="Log New Expense" />
            <div className="bg-white p-6 rounded-lg shadow-md">
                <DataTable
                    title="Expense Log"
                    columns={columns}
                    data={expenseData}
                />
            </div>
        </div>
    );
};

export default Expenses;