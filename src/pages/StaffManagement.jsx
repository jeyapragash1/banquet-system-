import React from 'react';
import PageHeader from '../components/PageHeader';
import { staff } from '../data/dummyData.jsx';

const StaffManagement = () => {
  return (
    <div>
      <PageHeader title="Staff Management" buttonText="Add New Employee" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {staff.map(member => (
          // <-- DARK MODE: Card background and border changed
          <div key={member.id} className="bg-gray-800 border border-gray-700 text-center p-6 rounded-lg shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
            <img 
              src={member.img}
              alt={member.name} 
              // <-- DARK MODE: Image border color changed
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-700"
            />
            {/* <-- DARK MODE: Text colors changed */}
            <h3 className="text-lg font-bold text-white">{member.name}</h3>
            <p className="text-secondary font-medium text-sm">{member.role}</p>
            <p className="text-gray-400 text-xs mt-1">{member.department} / ID: {member.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffManagement;