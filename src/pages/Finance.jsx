import React from 'react';
import PageHeader from '../components/PageHeader';

const Finance = () => {
    return (
        <div>
            <PageHeader title="Tax & Finance Management" />
            {/* <-- DARK MODE: Container background and border */}
            <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg shadow-lg">
                {/* <-- DARK MODE: Header text and border color */}
                <h2 className="text-xl font-bold text-white mb-6 border-b border-gray-700 pb-4">Tax Configuration</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                    <div>
                        {/* <-- DARK MODE: Label text color */}
                        <label htmlFor="taxType" className="block text-sm font-medium text-gray-300">Tax Type</label>
                        {/* <-- DARK MODE: Select input styling */}
                        <select id="taxType" name="taxType" className="mt-1 block w-full py-2 px-3 border border-gray-600 bg-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm">
                            <option>Percentage</option>
                            <option>Flat Rate</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="taxValue" className="block text-sm font-medium text-gray-300">Value</label>
                        {/* <-- DARK MODE: Text input styling */}
                        <input type="text" name="taxValue" id="taxValue" defaultValue="7.5" className="mt-1 block w-full py-2 px-3 border border-gray-600 bg-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm" placeholder="e.g., 7.5 or 100" />
                    </div>
                </div>
                <div className="mt-6">
                    <button className="bg-primary text-white font-semibold py-2 px-6 rounded-lg hover:bg-opacity-90">
                        Save Configuration
                    </button>
                </div>
            </div>
             <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg shadow-lg mt-8">
                <h2 className="text-xl font-bold text-white mb-6 border-b border-gray-700 pb-4">Financial Reports</h2>
                <div className="flex gap-4">
                    {/* <-- DARK MODE: Button styling */}
                    <button className="bg-gray-700 text-gray-300 font-semibold py-2 px-4 rounded-lg hover:bg-gray-600">Generate Daily Income Report</button>
                    <button className="bg-gray-700 text-gray-300 font-semibold py-2 px-4 rounded-lg hover:bg-gray-600">Generate Monthly Income Report</button>
                </div>
            </div>
        </div>
    );
};

export default Finance;