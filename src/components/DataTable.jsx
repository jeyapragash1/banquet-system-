import React from 'react';

const DataTable = ({ title, data, columns }) => {
  const getStatusChip = (status) => {
    switch (status) {
      case 'Confirmed':
        return <span className="px-2 py-1 text-xs font-semibold text-green-300 bg-green-500/20 rounded-full">Confirmed</span>;
      case 'Pending':
        return <span className="px-2 py-1 text-xs font-semibold text-yellow-300 bg-yellow-500/20 rounded-full">Pending</span>;
      default:
        return <span className="px-2 py-1 text-xs font-semibold text-gray-300 bg-gray-500/20 rounded-full">{status}</span>;
    }
  };

  return (
    // STYLE CHANGE: Background and border
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 h-full">
      {/* STYLE CHANGE: Title text color */}
      <h3 className="font-bold text-lg text-white mb-4">{title}</h3>
      <div className="overflow-x-auto">
        {/* STYLE CHANGE: Table text colors */}
        <table className="w-full text-sm text-left text-gray-400">
          {/* STYLE CHANGE: Header background and text colors */}
          <thead className="text-xs text-gray-300 uppercase bg-gray-700">
            <tr>
              {columns.map((col, index) => (
                <th key={index} scope="col" className="px-4 py-3">{col.header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              // STYLE CHANGE: Row background and border colors
              <tr key={rowIndex} className="bg-gray-800 border-b border-gray-700 hover:bg-gray-700/50">
                {columns.map((col, colIndex) => (
                  // STYLE CHANGE: Main row text color
                  <td key={colIndex} className="px-4 py-4 font-medium text-gray-200 whitespace-nowrap">
                    {col.accessor === 'status' ? getStatusChip(row[col.accessor]) : row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;