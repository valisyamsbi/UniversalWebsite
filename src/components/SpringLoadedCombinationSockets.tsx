
import React, { useState } from 'react';

const driveOptions = [
  {
    key: '3/8',
    label: '3/8" Drive',
    image: '/Spring loaded Combination Sockets 3by8 Drive Spring Loaded.png',
    imageAlt: '3/8 Drive Spring Loaded Combination Sockets',
    tableHeaders: ['PART #', 'HEX (A)', 'HEX (B)', 'OUTSIDE DIA. (C)', 'LENGTH STD (L)'],
    tableRows: [
      ['SF-10M8M3-L', '10M', '8M', '3/4"', '3"'],
      ['SF-11M8M3-L', '11M', '8M', '3/4"', '3"'],
      ['SF-12M8M3-L', '12M', '8M', '3/4"', '3"'],
      ['SF-13M10M3-L', '13M', '10M', '13/16"', '3"'],
      ['SF-14M10M3-L', '14M', '10M', '7/8"', '3"'],
      ['SF-15M10M3-L', '15M', '10M', '15/16"', '3"'],
      ['SF-15M13M3-L', '15M', '13M', '15/16"', '3"'],
      ['SF-16M13M3-L', '16M', '13M', '1"', '3"'],
      ['SF-18M13M3-L', '18M', '13M', '1 1/8"', '3"'],
      ['SF-18M15M3-L', '18M', '15M', '1 1/8"', '3"'],
      ['SF-19M13M3-L', '19M', '13M', '1 1/8"', '3"'],
      ['SF-19M15M3-L', '19M', '15M', '1 1/8"', '3"'],
      ['SF-21M15M3-L', '21M', '15M', '1 1/4"', '3"'],
      ['SF-21M17M3-L', '21M', '17M', '1 1/4"', '3"'],
    ],
  },
  {
    key: '1/2',
    label: '1/2" Drive',
    image: '/Spring loaded Combination Sockets 1by2 Drive Spring Loaded.png',
    imageAlt: '1/2 Drive Spring Loaded Combination Sockets',
    tableHeaders: ['PART #', 'HEX (A)', 'HEX (B)', 'OUTSIDE DIA. (C)', 'LENGTH STD (L)'],
    tableRows: [
      ['SF-13M10M4-L', '13M', '10M', '15/16"', '3"'],
      ['SF-14M10M4-L', '14M', '10M', '15/16"', '3"'],
      ['SF-15M10M4-L', '15M', '10M', '15/16"', '3"'],
      ['SF-16M13M4-L', '16M', '13M', '1"', '3"'],
      ['SF-17M13M4-L', '17M', '13M', '1 1/8"', '3"'],
      ['SF-18M13M4-L', '18M', '13M', '1 1/8"', '3"'],
      ['SF-18M15M4-L', '18M', '15M', '1 1/8"', '3"'],
      ['SF-19M13M4-L', '19M', '13M', '1 1/8"', '3 1/2"'],
      ['SF-19M15M4-L', '19M', '15M', '1 1/8"', '3 1/2"'],
      ['SF-21M15M4-L', '21M', '15M', '1 1/4"', '3 1/2"'],
      ['SF-21M17M4-L', '21M', '17M', '1 1/4"', '3 1/2"'],
      ['SF-22M18M4-L', '22M', '18M', '1 3/8"', '3 1/2"'],
      ['SF-24M18M4-L', '24M', '18M', '1 1/2"', '3 1/2"'],
      ['SF-24M19M4-L', '24M', '19M', '1 1/2"', '3 1/2"'],
    ],
  },
];

const SpringLoadedCombinationSockets: React.FC = () => {
  const [selectedDrive, setSelectedDrive] = useState('3/8');

  const drive = driveOptions.find((d) => d.key === selectedDrive);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-blue-900 mb-8">Spring Loaded Combination Sockets</h1>
        <p className="text-lg text-gray-700 mb-10">Universal Tool Inc. offers spring loaded combination sockets that drive two hex sizes with one socket. Replacement inserts are available separately. Select a drive size below to view details.</p>
        <div className="flex gap-6 mb-10">
          {driveOptions.map((d) => (
            <button
              key={d.key}
              className={`px-6 py-3 rounded-lg border-2 font-semibold transition-colors duration-200 focus:outline-none ${selectedDrive === d.key ? 'bg-blue-800 text-white border-blue-800' : 'bg-white text-blue-800 border-blue-300 hover:bg-blue-100'}`}
              onClick={() => setSelectedDrive(d.key)}
            >
              {d.label}
            </button>
          ))}
        </div>
        {drive && (
          <>
            <div className="flex flex-col items-center mb-8">
              <img
                src={drive.image}
                alt={drive.imageAlt}
                className="max-h-56 object-contain border border-blue-200 rounded-lg bg-white shadow mb-4"
                loading="lazy"
              />
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left text-gray-800 border border-blue-300 rounded-lg mb-4">
                <thead className="bg-blue-100">
                  <tr>
                    {drive.tableHeaders.map((header, idx) => (
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
                  {drive.tableRows.map((row, idx) => (
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
          </>
        )}
        <p className="text-gray-600 text-sm mt-4">These sockets are available in additional lengths, spring loaded, sidewall magnets, thin wall, deep broach, etc.</p>
      </div>
    </section>
  );
};

export default SpringLoadedCombinationSockets;
