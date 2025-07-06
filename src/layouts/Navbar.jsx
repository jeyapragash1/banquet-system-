import React from 'react';
import { LuSearch, LuBell, LuUser } from 'react-icons/lu';

const Navbar = () => {
  return (
    // STYLE CHANGE: Navbar background and border
    <header className="h-20 bg-gray-800 border-b border-gray-700 flex items-center justify-between px-8">
      <div>
        {/* STYLE CHANGE: Text colors */}
        <h2 className="text-xl font-semibold text-white">Welcome, Super Admin</h2>
        <p className="text-sm text-gray-400">Here's what's happening today.</p>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative">
          {/* STYLE CHANGE: Icon and input colors */}
          <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-64 border bg-gray-700 border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>
        <button className="relative text-gray-400 hover:text-white">
          <LuBell className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-danger opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-danger"></span>
          </span>
        </button>
        <div className="flex items-center gap-3">
          {/* STYLE CHANGE: User icon background and text colors */}
          <LuUser className="w-10 h-10 text-gray-300 bg-gray-700 p-2 rounded-full" />
          <div>
             <p className="font-semibold text-sm text-white">Admin</p>
             <p className="text-xs text-gray-400">admin@pearl.com</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;