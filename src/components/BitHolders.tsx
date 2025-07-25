

import React from 'react';

const bitHolderTableHeaders = [
  'Part #',
  'SOLID MAGNET',
  'HEX SIZE (A)',
  'SQUARE DRIVE (B)',
  'LENGTH (L)',
  'NOSE DIA. (C)',
  'DRIVE DIA. (D)',
  'H DEPTH (E)',
];

const bitHolderRows = [
  ["BH-82", "BHM-82", "1/4", "1/4", "1 1/4", "1/2", "1/2", "9/16"],
  ["BH-83", "BHM-83", "1/4", "3/8", "1 1/2", "7/16", "3/4", "9/16"],
  ["BH-84", "BHM-84", "1/4", "1/2", "1 3/4", "7/16", "7/8", "9/16"],
  ["BH-102", "BHM-102", "5/16", "1/4", "1 1/4", "1/2", "1/2", "9/16"],
  ["BH-103", "BHM-103", "5/16", "3/8", "1 1/2", "3/4", "3/4", "9/16"],
  ["BH-104", "BHM-104", "5/16", "1/2", "1 3/4", "5/8", "15/16", "9/16"],
  ["BH-105", "BHM-105", "5/16", "5/8", "2", "13/16", "1 1/4", "9/16"],
  ["BH-142", "BHM-142", "7/16", "1/4", "1 1/4", "5/8", "5/8", "5/8"],
  ["BH-143", "BHM-143", "7/16", "3/8", "1 1/2", "3/4", "3/4", "5/8"],
  ["BH-144", "BHM-144", "7/16", "1/2", "1 3/4", "5/8", "15/16", "5/8"],
  ["BH-145", "BHM-145", "7/16", "5/8", "2", "13/16", "1 1/4", "5/8"],
  ["BH-203", "BHM-203", "5/8", "3/8", "1 1/2", "15/16", "15/16", "11/16"],
  ["BH-204", "BHM-204", "5/8", "1/2", "1 3/4", "1", "1", "11/16"],
  ["BH-205", "BHM-205", "5/8", "5/8", "2", "1", "1 1/4", "11/16"],
  ["BH-206", "BHM-246", "5/8", "3/4", "2 1/2", "1 1/4", "1 1/2", "11/16"],
  ["BH-244", "BHM-244", "3/4", "1/2", "1 3/4", "1 1/4", "1 1/4", "7/8"],
  ["BH-245", "BHM-245", "3/4", "5/8", "2", "1 3/8", "1 3/8", "7/8"],
  ["BH-246", "BHM-246", "3/4", "3/4", "2 1/2", "1 1/4", "1 1/2", "7/8"],
  ["BH-248", "BHM-248", "3/4", "1", "3", "1 5/16", "2", "7/8"]
];

const BitHolders: React.FC = () => (
  <section className="py-24 bg-white">
    <div className="max-w-5xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Bit Holders</h1>
      <p className="text-lg text-gray-700 mb-10">Universal Tool Inc. offers a comprehensive range of bit holders for power and hand tools. Below is a detailed table of available bit holders. Additional lengths and configurations are available upon request.</p>
      <div className="flex justify-center">
        <img src="/Bit Holders.png" alt="Bit Holders" className="w-full max-w-lg rounded-xl border border-blue-100 shadow mb-8" />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-800 border border-blue-300 rounded-lg mb-4">
          <thead className="bg-blue-100">
            <tr>
              {bitHolderTableHeaders.map((header, idx) => (
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
            {bitHolderRows.map((row, idx) => (
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
      <p className="text-gray-600 text-sm mt-4">Bit holders are also available as male quick change. Additional lengths and configurations (ROTX, male square, triple square, screwdriver type, etc.) are available upon request. Broach depth will determine the length the bit sticks out—please reference length needed.</p>
    </div>
  </section>
);

export default BitHolders;
