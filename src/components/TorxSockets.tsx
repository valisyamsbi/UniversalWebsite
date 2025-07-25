import React from 'react';

const torxHeaders = [
  'PART #', 'SOLID MAGNET', 'TORX SIZE (A)', 'SQUARE DRIVE (B)', 'LENGTH (L)', 'NOSE DIA. (C)', 'DRIVE DIA. (D)'
];
const torxRows = [
  ['TXE-42', 'TXME-42', 'E-4', '1/4', '1', '5/16', '1/2'],
  ['TXE-52', 'TXME-52', 'E-5', '1/4', '1', '5/16', '1/2'],
  ['TXE-62', 'TXME-62', 'E-6', '1/4', '1', '3/8', '1/2'],
  ['TXE-82', 'TXME-82', 'E-8', '1/4', '1', '3/8', '1/2'],
  ['TXE-102', 'TXME-102', 'E-10', '1/4', '1', '5/8', '5/8'],
  ['TXE-122', 'TXME-122', 'E-12', '1/4', '1', '5/8', '5/8'],
  ['TXE-63', 'TXME-63', 'E-6', '3/8', '1 1/4', '3/4', '3/4'],
  ['TXE-73', 'TXME-73', 'E-7', '3/8', '1 1/4', '3/4', '3/4'],
  ['TXE-83', 'TXME-83', 'E-8', '3/8', '1 1/4', '3/4', '3/4'],
  ['TXE-103', 'TXME-103', 'E-10', '3/8', '1 1/4', '3/4', '3/4'],
  ['TXE-123', 'TXME-123', 'E-12', '3/8', '1 1/4', '3/4', '3/4'],
  ['TXE-143', 'TXME-143', 'E-14', '3/8', '1 1/4', '3/4', '3/4'],
  ['TXE-163', 'TXME-163', 'E-16', '3/8', '1 1/4', '13/16', '13/16'],
  ['TXE-84', 'TXME-84', 'E-8', '1/2', '1 1/2', '1', '1'],
  ['TXE-104', 'TXME-104', 'E-10', '1/2', '1 1/2', '1', '1'],
  ['TXE-124', 'TXME-124', 'E-12', '1/2', '1 1/2', '1', '1'],
  ['TXE-144', 'TXME-144', 'E-14', '1/2', '1 1/2', '1', '1'],
  ['TXE-164', 'TXME-164', 'E-16', '1/2', '1 1/2', '1', '1'],
  ['TXE-184', 'TXME-184', 'E-18', '1/2', '1 1/2', '1 1/4', '1 1/4'],
  ['TXE-204', 'TXME-204', 'E-20', '1/2', '1 1/2', '1 1/4', '1 1/4'],
  ['TXE-244', 'TXME-244', 'E-24', '1/2', '1 1/2', '1 1/4', '1 1/4'],
  ['TXE-105', 'TXME-105', 'E-10', '5/8', '1 7/8', '1 1/8', '1 1/8'],
  ['TXE-125', 'TXME-125', 'E-12', '5/8', '1 7/8', '1 1/8', '1 1/8'],
  ['TXE-145', 'TXME-145', 'E-14', '5/8', '1 7/8', '1 1/4', '1 1/4'],
  ['TXE-165', 'TXME-165', 'E-16', '5/8', '1 7/8', '1 1/4', '1 1/4'],
  ['TXE-185', 'TXME-185', 'E-18', '5/8', '2', '1 1/4', '1 1/4'],
  ['TXE-205', 'TXME-205', 'E-20', '5/8', '2', '1 1/4', '1 1/4'],
  ['TXE-245', 'TXME-245', 'E-24', '5/8', '2', '1 1/2', '1 1/2'],
  ['TXE-146', 'TXME-146', 'E-14', '3/4', '2', '1 1/2', '1 1/2'],
  ['TXE-166', 'TXME-166', 'E-16', '3/4', '2', '1 1/2', '1 1/2'],
  ['TXE-186', 'TXME-186', 'E-18', '3/4', '2', '1 1/2', '1 1/2'],
  ['TXE-206', 'TXME-206', 'E-20', '3/4', '2', '1 1/2', '1 1/2'],
  ['TXE-246', 'TXME-246', 'E-24', '3/4', '2', '1 1/2', '1 1/2'],
];

const TorxSockets: React.FC = () => (
  <section className="py-24 bg-white">
    <div className="max-w-5xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Torx Sockets</h1>
      <p className="text-lg text-gray-700 mb-10">Universal Tool Inc. offers a range of Torx sockets for SAE and Metric fasteners, available in various drive sizes and Torx sizes. Any other variations on sizes available upon request.</p>
      <div className="flex flex-col items-center mb-10">
        <img
          src="/Torx Sockets For SAE and Metric.png"
          alt="Torx Sockets For SAE & Metric Fasteners"
          className="max-h-56 object-contain border border-blue-200 rounded-lg bg-white shadow mb-4"
          loading="lazy"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-800 border border-blue-300 rounded-lg mb-4">
          <thead className="bg-blue-100">
            <tr>
              {torxHeaders.map((header, idx) => (
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
            {torxRows.map((row, idx) => (
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
      <p className="text-gray-600 text-sm mt-4">Any other variations on sizes available upon request.</p>
    </div>
  </section>
);

export default TorxSockets;