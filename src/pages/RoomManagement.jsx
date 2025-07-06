import React from 'react';
import PageHeader from '../components/PageHeader';
import { rooms } from '../data/dummyData.jsx';
import { LuBedDouble, LuCalendarPlus } from 'react-icons/lu';

const RoomManagement = () => {
  return (
    <div>
      <PageHeader title="Room Management (3 Rooms)" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {rooms.map(room => (
          // <-- DARK MODE: Card background and border changed
          <div key={room.id} className="bg-gray-800 border border-gray-700 p-6 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                {/* <-- DARK MODE: Header text color changed */}
                <h3 className="text-lg font-bold text-white">{room.name}</h3>
                {/* <-- DARK MODE: Status chip colors changed for dark theme */}
                <span className={`px-3 py-1 text-xs font-semibold rounded-full {room.status === 'Available' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                  {room.status}
                </span>
              </div>
              <div className="flex items-baseline gap-2 mt-4">
                  <span className="text-3xl font-bold text-primary">
                    {room.price}</span>
                  {/* <-- DARK MODE: Sub-text color changed */}
                  <span className="text-gray-400">/ night</span>
              </div>
              {room.status === 'Booked' && (
                  // <-- DARK MODE: Sub-text color changed
                  <p className="text-sm text-gray-400 mt-2">Assigned to Event: {room.assignedTo}</p>
              )}
            </div>
            <button disabled={room.status === 'Booked'} className="mt-6 w-full flex items-center justify-center gap-2 bg-secondary text-white font-semibold py-2 rounded-lg disabled:bg-gray-600 disabled:cursor-not-allowed hover:bg-opacity-90">
              <LuCalendarPlus />
              Assign to Event
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomManagement;