
import React, { useState } from 'react';

const extensionTypes = [
  {
    id: 'male-hex',
    label: 'Male Hex to Male Square',
    img: '/Extensions Male Hex to Male Square.png',
    tables: [
      {
        label: 'Standard Extensions',
        rows: [
          ['EX-28-4', '1/4', '1/4', '4"'],
          ['EX-38-4', '1/4', '3/8', '4"'],
          ['EX-48-4', '1/4', '1/2', '4"'],
          ['EX-210-4', '5/16', '1/4', '4"'],
          ['EX-310-4', '5/16', '3/8', '4"'],
          ['EX-410-4', '5/16', '1/2', '4"'],
          ['EX-510-4', '5/16', '5/8', '4"'],
          ['EX-214-6', '7/16', '1/4', '6"'],
          ['EX-314-6', '7/16', '3/8', '6"'],
          ['EX-414-6', '7/16', '1/2', '6"'],
          ['EX-514-6', '7/16', '5/8', '6"'],
          ['EX-614-6', '7/16', '3/4', '6"'],
          ['EX-316-6', '1/2', '3/8', '6"'],
          ['EX-416-6', '1/2', '1/2', '6"'],
          ['EX-516-6', '1/2', '5/8', '6"'],
          ['EX-616-6', '1/2', '3/4', '6"'],
          ['EX-816-6', '1/2', '1', '6"'],
          ['EX-320-6', '5/8', '3/8', '6"'],
          ['EX-420-6', '5/8', '1/2', '6"'],
          ['EX-520-6', '5/8', '5/8', '6"'],
          ['EX-620-6', '5/8', '3/4', '6"'],
          ['EX-820-6', '5/8', '1', '6"'],
          ['EX-324-6', '3/4', '3/8', '6"'],
          ['EX-424-6', '3/4', '1/2', '6"'],
          ['EX-524-6', '3/4', '5/8', '6"'],
          ['EX-624-6', '3/4', '3/4', '6"'],
          ['EX-824-6', '3/4', '1', '6"'],
        ],
      },
      {
        label: 'Wobble Extensions',
        img: '/Extensions Wobble Extensions 1.png',
        rows: [
          ['EXW-314-6', '7/16', '3/8', '6"'],
          ['EXW-414-6', '7/16', '1/2', '6"'],
          ['EXW-514-6', '7/16', '5/8', '6"'],
          ['EXW-316-6', '1/2', '3/8', '6"'],
          ['EXW-416-6', '1/2', '1/2', '6"'],
          ['EXW-516-6', '1/2', '5/8', '6"'],
          ['EXW-320-6', '5/8', '3/8', '6"'],
          ['EXW-420-6', '5/8', '1/2', '6"'],
          ['EXW-520-6', '5/8', '5/8', '6"'],
        ],
      },
    ],
  },
  {
    id: 'female-square',
    label: 'Female Square to Male Square',
    img: '/Extensions Female Square to Male Square.png',
    tables: [
      {
        label: 'Standard Extensions',
        rows: [
          ['EX-22-4', '1/4', '1/4', '4"'],
          ['EX-32-4', '1/4', '3/8', '4"'],
          ['EX-42-4', '1/4', '1/2', '4"'],
          ['EX-23-6', '3/8', '1/4', '6"'],
          ['EX-33-6', '3/8', '3/8', '6"'],
          ['EX-43-6', '3/8', '1/2', '6"'],
          ['EX-53-6', '3/8', '5/8', '6"'],
          ['EX-63-6', '3/8', '3/4', '6"'],
          ['EX-24-6', '1/2', '1/4', '6"'],
          ['EX-34-6', '1/2', '3/8', '6"'],
          ['EX-44-6', '1/2', '1/2', '6"'],
          ['EX-54-6', '1/2', '5/8', '6"'],
          ['EX-64-6', '1/2', '3/4', '6"'],
          ['EX-84-6', '1/2', '1', '6"'],
          ['EX-35-6', '5/8', '3/8', '6"'],
          ['EX-45-6', '5/8', '1/2', '6"'],
          ['EX-55-6', '5/8', '5/8', '6"'],
          ['EX-65-6', '5/8', '3/4', '6"'],
          ['EX-85-6', '5/8', '1', '6"'],
          ['EX-46-6', '3/4', '1/2', '6"'],
          ['EX-56-6', '3/4', '5/8', '6"'],
          ['EX-66-6', '3/4', '3/4', '6"'],
          ['EX-86-6', '3/4', '1', '6"'],
          ['EX-126-6', '3/4', '1-1/2', '6"'],
          ['EX-68-6', '1', '3/4', '6"'],
          ['EX-88-6', '1', '1', '6"'],
          ['EX-128-6', '1', '1-1/2', '6"'],
        ],
      },
      {
        label: 'Wobble Extensions',
        img: '/Extensions Wobble Extensions 2.png',
        rows: [
          ['EXW-33-6', '3/8', '3/8', '6"'],
          ['EXW-43-6', '3/8', '1/2', '6"'],
          ['EXW-53-6', '3/8', '5/8', '6"'],
          ['EXW-34-6', '1/2', '3/8', '6"'],
          ['EXW-44-6', '1/2', '1/2', '6"'],
          ['EXW-54-6', '1/2', '5/8', '6"'],
          ['EXW-35-6', '5/8', '3/8', '6"'],
          ['EXW-45-6', '5/8', '1/2', '6"'],
          ['EXW-55-6', '5/8', '5/8', '6"'],
        ],
      },
    ],
  },
];

const tableHeaders = ['PART NUMBER', 'MALE HEX DRIVE (A)', 'MALE SQUARE (B)', 'STANDARD LENGTH'];

const Extensions: React.FC = () => {
  const [selectedType, setSelectedType] = useState(extensionTypes[0].id);
  const currentType = extensionTypes.find(t => t.id === selectedType);
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-blue-900 mb-8">Extensions</h1>
        <p className="text-lg text-gray-700 mb-10">Universal Tool Inc. offers a variety of extensions for power and hand tools. Select a type below to view detailed tables for each configuration.</p>
        <div className="flex flex-wrap gap-4 mb-10">
          {extensionTypes.map(type => (
            <button
              key={type.id}
              className={`px-6 py-4 rounded-xl shadow border-2 font-semibold text-lg transition-all duration-200 ${selectedType === type.id ? 'border-blue-900 bg-blue-50 text-blue-900' : 'border-gray-200 bg-white text-gray-700 hover:border-blue-400 hover:bg-blue-50'}`}
              onClick={() => setSelectedType(type.id)}
            >
              {type.label}
            </button>
          ))}
        </div>
        {currentType && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">{currentType.label} Extensions</h2>
            {/* Render main type image if present */}
            {currentType.img && (
              <div className="flex justify-center mb-8">
                <img
                  src={currentType.img}
                  alt={currentType.label}
                  className="max-h-48 object-contain border border-blue-200 rounded-lg bg-white shadow"
                  loading="lazy"
                />
              </div>
            )}
            {currentType.tables.map((table) => (
              <div key={table.label} className="mb-8">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">{table.label}</h3>
                {/* Render table image if present */}
                {table.img && (
                  <div className="flex justify-center mb-4">
                    <img
                      src={table.img}
                      alt={table.label}
                      className="max-h-40 object-contain border border-blue-100 rounded bg-white shadow"
                      loading="lazy"
                    />
                  </div>
                )}
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
        <p className="text-gray-600 text-sm mt-4">Any length extension may be ordered. Additional configurations are available upon request.</p>
      </div>
    </section>
  );
};

export default Extensions;
