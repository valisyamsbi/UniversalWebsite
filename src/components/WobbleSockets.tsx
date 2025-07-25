
import React, { useState } from 'react';

const wobbleDriveOptions = [
  {
    id: '3-8',
    label: '3/8" Drive',
    img: '/Wobble Sockets 3by8 Spring Loaded.png',
    tables: [
      {
        label: 'SAE',
        rows: [
          ['UWP-103-B', '5/16', '3/4'],
          ['UWP-123-B', '3/8', '3/4'],
          ['UWP-163-B', '1/2', '13/16'],
          ['UWP-183-B', '9/16', '7/8'],
          ['UWP-203-B', '5/8', '1'],
          ['UWP-223-B', '11/16', '1'],
          ['UWP-243-B', '3/4', '1-1/8'],
          ['UWP-283-B', '7/8', '1-1/4'],
          ['UWP-303-B', '15/16', '1-3/8'],
          ['UWP-323-B', '1', '1-3/8'],
          ['UWP-363-B', '1-1/8', '1-1/2'],
          ['UWP-403-B', '1-1/4', '1-3/4'],
          ['UWP-483-B', '1-1/2', '2'],
        ],
      },
      {
        label: 'Metric',
        rows: [
          ['UWP-8MM3-B', '8MM', '3/4'],
          ['UWP-10MM3-B', '10MM', '3/4'],
          ['UWP-11MM3-B', '11MM', '3/4'],
          ['UWP-12MM3-B', '12MM', '3/4'],
          ['UWP-13MM3-B', '13MM', '13/16'],
          ['UWP-14MM3-B', '14MM', '7/8'],
          ['UWP-15MM3-B', '15MM', '7/8'],
          ['UWP-16MM3-B', '16MM', '1'],
          ['UWP-17MM3-B', '17MM', '1'],
          ['UWP-18MM3-B', '18MM', '1-1/8'],
          ['UWP-19MM3-B', '19MM', '1-1/8'],
          ['UWP-21MM3-B', '21MM', '1-1/4'],
          ['UWP-22MM3-B', '22MM', '1-1/4'],
          ['UWP-24MM3-B', '24MM', '1-1/2'],
          ['UWP-27MM3-B', '27MM', '1-5/8'],
        ],
      },
    ],
  },
  {
    id: '1-2',
    label: '1/2" Drive',
    img: '/Wobble Sockets 1by2 Spring Loaded.png',
    tables: [
      {
        label: 'SAE',
        rows: [
          ['UWP-104-B', '5/16', '7/8'],
          ['UWP-124-B', '3/8', '7/8'],
          ['UWP-164-B', '1/2', '7/8'],
          ['UWP-184-B', '9/16', '7/8'],
          ['UWP-204-B', '5/8', '1'],
          ['UWP-224-B', '11/16', '1'],
          ['UWP-244-B', '3/4', '1-1/8'],
          ['UWP-284-B', '7/8', '1-1/4'],
          ['UWP-304-B', '15/16', '1-3/8'],
          ['UWP-324-B', '1', '1-3/8'],
          ['UWP-344-B', '1-1/16', '1-1/2'],
          ['UWP-364-B', '1-1/8', '1-1/2'],
          ['UWP-404-B', '1-1/4', '1-3/4'],
          ['UWP-484-B', '1-1/2', '2'],
        ],
      },
      {
        label: 'Metric',
        rows: [
          ['UWP-8MM4-B', '8MM', '7/8'],
          ['UWP-10MM4-B', '10MM', '7/8'],
          ['UWP-11MM4-B', '11MM', '7/8'],
          ['UWP-12MM4-B', '12MM', '7/8'],
          ['UWP-13MM4-B', '13MM', '7/8'],
          ['UWP-14MM4-B', '14MM', '7/8'],
          ['UWP-15MM4-B', '15MM', '7/8'],
          ['UWP-16MM4-B', '16MM', '1'],
          ['UWP-17MM4-B', '17MM', '1'],
          ['UWP-18MM4-B', '18MM', '1-1/8'],
          ['UWP-19MM4-B', '19MM', '1-1/8'],
          ['UWP-21MM4-B', '21MM', '1-1/4'],
          ['UWP-22MM4-B', '22MM', '1-1/4'],
          ['UWP-24MM4-B', '24MM', '1-1/2'],
          ['UWP-27MM4-B', '27MM', '1-5/8'],
          ['UWP-30MM4-B', '30MM', '1-3/4'],
          ['UWP-36MM4-B', '36MM', '2'],
        ],
      },
    ],
  },
];

const tableHeaders = ['Part #', 'Size', 'OAL'];

const WobbleSockets: React.FC = () => {
  const [selectedDrive, setSelectedDrive] = useState(wobbleDriveOptions[0].id);
  const currentDrive = wobbleDriveOptions.find(d => d.id === selectedDrive);
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-blue-900 mb-8">Wobble Sockets</h1>
        <p className="text-lg text-gray-700 mb-10">Universal Tool Inc. offers 3/8" and 1/2" Spring Loaded Universal Wobble Sockets in both SAE and Metric sizes. Select a drive size below to view detailed tables and images.</p>
        <div className="flex flex-wrap gap-4 mb-10">
          {wobbleDriveOptions.map(drive => (
            <button
              key={drive.id}
              className={`px-6 py-4 rounded-xl shadow border-2 font-semibold text-lg transition-all duration-200 ${selectedDrive === drive.id ? 'border-blue-900 bg-blue-50 text-blue-900' : 'border-gray-200 bg-white text-gray-700 hover:border-blue-400 hover:bg-blue-50'}`}
              onClick={() => setSelectedDrive(drive.id)}
            >
              {drive.label}
            </button>
          ))}
        </div>
        {currentDrive && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">{currentDrive.label} Spring Loaded Universal Wobble Sockets</h2>
            <div className="flex justify-center">
              <img src={currentDrive.img} alt={currentDrive.label + ' Wobble Sockets'} className="w-full max-w-lg rounded-xl border border-blue-100 shadow mb-8" />
            </div>
            {currentDrive.tables.map((table) => (
              <div key={table.label} className="mb-8">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">{table.label}</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm text-left text-gray-800 border border-blue-300 rounded-lg mb-4">
                    <thead className="bg-blue-100">
                      <tr>
                        {tableHeaders.map((header, idx) => (
                          <th
                            key={idx}
                            className="py-2 px-3 font-semibold border-b border-r border-blue-300 first:border-l last:border-r"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {table.rows.map((row, idx) => (
                        <tr key={idx} className="bg-white border-b border-blue-200 last:border-b-0">
                          {row.map((cell, cidx) => (
                            <td
                              key={cidx}
                              className="py-2 px-3 border-r border-blue-100 first:border-l last:border-r"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        )}
        <p className="text-gray-600 text-sm mt-4">Additional sizes and configurations are available upon request.</p>
      </div>
    </section>
  );
};

export default WobbleSockets;
