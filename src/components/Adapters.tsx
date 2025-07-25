

import React, { useState } from 'react';

const adapterCategories = [
  {
    id: 'male-square-male-hex',
    label: 'Male Square to Male Hex',
    img: '/Adapters Male Square to Male Hex.png',
    rows: [
      ['A-82', '1/4', '1/4', '25/32'],
      ['A-6MM2', '1/4', '6MM', '25/32'],
      ['A-102', '1/4', '5/16', '25/32'],
      ['A-8MM2', '1/4', '8MM', '25/32'],
      ['A-122', '1/4', '3/8', '26/32'],
      ['A-10MM2', '1/4', '10MM', '25/32'],
      ['A-142', '1/4', '7/16', '25/32'],
      ['A-12MM2', '1/4', '12MM', '25/32'],
      ['A-162', '1/4', '1/2', '25/32'],
      ['A-13MM3', '3/8', '13MM', '15/16'],
      ['A-182', '1/4', '9/16', '25/32'],
      ['A-10MM3', '3/8', '10MM', '15/16'],
      ['A-202', '1/4', '5/8', '25/32'],
      ['A-12MM3', '3/8', '12MM', '15/16'],
      ['A-123', '3/8', '3/8', '15/16'],
      ['A-13MM3', '3/8', '13MM', '15/16'],
      ['A-143', '3/8', '7/16', '15/16'],
      ['A-14MM3', '3/8', '14MM', '15/16'],
      ['A-163', '3/8', '1/2', '15/16'],
      ['A-15MM3', '3/8', '15MM', '15/16'],
      ['A-183', '3/8', '9/16', '15/16'],
      ['A-16MM3', '3/8', '16MM', '15/16'],
      ['A-203', '3/8', '5/8', '15/16'],
      ['A-17MM3', '3/8', '17MM', '15/16'],
      ['A-223', '3/8', '11/16', '15/16'],
      ['A-18MM3', '3/8', '18MM', '15/16'],
      ['A-243', '3/8', '3/4', '15/16'],
      ['A-19MM3', '3/8', '19MM', '15/16'],
      ['A-263', '3/8', '13/16', '15/16'],
      ['A-10MM4', '1/2', '10MM', '1-1/8'],
      ['A-283', '3/8', '7/8', '15/16'],
      ['A-12MM4', '1/2', '12MM', '1-1/8'],
      ['A-124', '1/2', '3/8', '1-3/32'],
      ['A-13MM4', '1/2', '13MM', '1-1/8'],
      ['A-144', '1/2', '7/16', '1-3/32'],
      ['A-14MM4', '1/2', '14MM', '1-1/8'],
      ['A-164', '1/2', '1/2', '1-3/32'],
      ['A-15MM4', '1/2', '15MM', '1-1/8'],
      ['A-184', '1/2', '9/16', '1-3/32'],
      ['A-16MM4', '1/2', '16MM', '1-1/8'],
      ['A-204', '1/2', '5/8', '1-1/8'],
      ['A-17MM4', '1/2', '17MM', '1-1/8'],
      ['A-224', '1/2', '11/16', '1-1/8'],
      ['A-18MM4', '1/2', '18MM', '1-1/8'],
      ['A-244', '1/2', '3/4', '1-1/8'],
      ['A-19MM4', '1/2', '19MM', '1-1/8'],
      ['A-264', '1/2', '13/16', '1-1/8'],
      ['A-21MM4', '1/2', '21MM', '1-1/8'],
      ['A-284', '1/2', '7/8', '1-1/8'],
      ['A-22MM4', '1/2', '22MM', '1-1/8'],
      ['A-304', '1/2', '15/16', '1-1/8'],
      ['A-24MM4', '1/2', '24MM', '1-1/8'],
      ['A-324', '1/2', '1', '1-1/8'],
      ['A-13MM5', '5/8', '13MM', '1-1/4'],
      ['A-344', '1/2', '1-1/16', '1-1/8'],
      ['A-15MM5', '5/8', '15MM', '1-1/4'],
      ['A-364', '1/2', '1-1/8', '1-1/8'],
      ['A-18MM5', '5/8', '18MM', '1-1/4'],
      ['A-404', '1/2', '1-1/4', '1-1/8'],
      ['A-24MM5', '5/8', '24MM', '1-1/4'],
      ['A-206', '3/4', '5/8', '1-1/8'],
      ['A-27MM5', '5/8', '27MM', '1-1/4'],
      ['A-246', '3/4', '3/4', '1-1/8'],
      ['A-30MM5', '5/8', '30MM', '1-1/4'],
      ['A-286', '3/4', '7/8', '1-1/8'],
      ['A-18MM6', '3/4', '18MM', '1-3/8'],
      ['A-326', '3/4', '1', '1-1/8'],
      ['A-24MM6', '3/4', '24MM', '1-3/8'],
      ['A-406', '3/4', '1-1/4', '1-1/8'],
      ['A-27MM6', '3/4', '27MM', '1-3/8'],
      ['A-486', '3/4', '1-1/2', '1-1/8'],
      ['A-30MM6', '3/4', '30MM', '1-3/8'],
      ['A-328', '1', '1', '1-1/2'],
      ['A-36MM6', '3/4', '36MM', '1-3/8'],
      ['A-488', '1', '1-1/2', '1-1/2'],
      ['A-38MM6', '3/4', '38MM', '1-3/8'],
    ],
  },
  {
    id: 'male-hex-female-hex',
    label: 'Male Hex to Female Hex',
    img: '/Adapters Male Hex to Female Hex.png',
    rows: [
      ['A-1012', '3/8', '5/16', '13/16'],
      ['A-8M10MM', '10MM', '8MM', '13/16'],
      ['A-1212', '3/8', '3/8', '7/8'],
      ['A-10M10MM', '10MM', '10MM', '7/8'],
      ['A-1412', '3/8', '7/16', '15/16'],
      ['A-12M10MM', '10MM', '12MM', '15/16'],
      ['A-1612', '3/8', '1/2', '15/16'],
      ['A-13M10MM', '10MM', '13MM', '1'],
      ['A-1812', '3/8', '9/16', '1'],
      ['A-15M10MM', '10MM', '15MM', '1'],
      ['A-2012', '3/8', '5/8', '1'],
      ['A-10M13MM', '13MM', '10MM', '15/16'],
      ['A-1214', '7/16', '3/8', '15/16'],
      ['A-12M13MM', '13MM', '12MM', '1'],
      ['A-1414', '7/16', '7/16', '15/16'],
      ['A-13M13MM', '13MM', '13MM', '1'],
      ['A-1614', '7/16', '1/2', '1'],
      ['A-15M13MM', '13MM', '15MM', '1'],
      ['A-1814', '7/16', '9/16', '1'],
      ['A-16M13MM', '13MM', '16MM', '1-1/8'],
      ['A-2014', '7/16', '5/8', '1'],
      ['A-17M13MM', '13MM', '17MM', '1-1/4'],
      ['A-1216', '1/2', '3/8', '15/16'],
      ['A-18M13MM', '13MM', '18MM', '1-1/4'],
      ['A-1416', '1/2', '7/16', '15/16'],
      ['A-19M13MM', '13MM', '19MM', '1-1/4'],
      ['A-1616', '1/2', '1/2', '1'],
      ['A-21M13MM', '13MM', '21MM', '1-1/4'],
      ['A-1816', '1/2', '9/16', '1'],
      ['A-10M15MM', '15MM', '10MM', '15/16'],
      ['A-2016', '1/2', '5/8', '1-1/8'],
      ['A-12M15MM', '15MM', '12MM', '1'],
      ['A-2216', '1/2', '11/16', '1-1/4'],
      ['A-13M15MM', '15MM', '13MM', '1'],
      ['A-2416', '1/2', '3/4', '1-1/4'],
      ['A-15M15MM', '15MM', '15MM', '1'],
      ['A-1418', '9/16', '7/16', '15/16'],
      ['A-16M15MM', '15MM', '16MM', '1-1/8'],
      ['A-1618', '9/16', '1/2', '1'],
      ['A-17M15MM', '15MM', '17MM', '1-1/4'],
      ['A-1818', '9/16', '9/16', '1'],
      ['A-18M15MM', '15MM', '18MM', '1-1/4'],
      ['A-2018', '9/16', '5/8', '1-1/8'],
      ['A-19M15MM', '15MM', '19MM', '1-1/4'],
      ['A-2218', '9/16', '11/16', '1-1/4'],
      ['A-21M15MM', '15MM', '21MM', '1-1/4'],
      ['A-2418', '9/16', '3/4', '1-1/4'],
      ['A-24M15MM', '15MM', '24MM', '1-3/8'],
    ],
  },
  {
    id: 'threaded',
    label: 'Threaded Adapters',
    subTables: [
      {
        label: 'Male Square to Female Thread',
        img: '/Adapters Threaded Adapters 1.png',
        headers: ['PART #', 'MALE SQUARE (A)', 'FEMALE THREAD (B)', 'O. A. L. (C)'],
        rows: [
          ['TA-12-242', '1/4', '3/8-24', '1-1/4'],
          ['TA-12-243', '3/8', '3/8-24', '1-1/2'],
          ['TA-12-244', '1/2', '3/8-24', '1-3/4'],
          ['TA-16-203', '3/8', '1/2-20', '1-3/4'],
          ['TA-16-204', '1/2', '1/2-20', '2'],
        ],
      },
      {
        label: 'Male to Male Threaded',
        img: '/Adapters Threaded Adapters 2.png',
        headers: ['PART #', 'MALE (A)', 'MALE (B)', 'O. A. L. (C)'],
        rows: [
          ['TA-12-248', '1/4', '3/8-24', '1-1/2'],
          ['TA-12-2412', '3/8', '3/8-24', '1-3/4'],
          ['TA-12-2416', '1/2', '3/8-24', '2'],
          ['TA-16-2012', '3/8', '1/2-20', '2'],
          ['TA-16-2016', '1/2', '1/2-20', '2-1/4'],
        ],
      },
    ],
  },
  


];


const defaultTableHeaders = [
  'PART NUMBER',
  'DRIVE 1',
  'DRIVE 2',
  'LENGTH',
];

const Adapters: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(adapterCategories[0].id);
  const currentCategory = adapterCategories.find(cat => cat.id === selectedCategory);
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-blue-900 mb-8">Adapters</h1>
        <p className="text-lg text-gray-700 mb-10">Universal Tool Inc. offers a wide range of adapters for sockets and drive tools. Select a category below to view available adapters.</p>
        <div className="flex flex-wrap gap-4 mb-10">
          {adapterCategories.map(cat => (
            <button
              key={cat.id}
              className={`px-6 py-4 rounded-xl shadow border-2 font-semibold text-lg transition-all duration-200 ${selectedCategory === cat.id ? 'border-blue-900 bg-blue-50 text-blue-900' : 'border-gray-200 bg-white text-gray-700 hover:border-blue-400 hover:bg-blue-50'}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
        {currentCategory && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">{currentCategory.label}</h2>
            {/* For categories with subTables (threaded) */}
            {'subTables' in currentCategory && currentCategory.subTables ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {currentCategory.subTables.map((sub) => (
                  <div key={sub.label}>
                    <div className="flex justify-center mb-4">
                      <img
                        src={sub.img}
                        alt={sub.label}
                        className="max-h-40 object-contain border border-blue-200 rounded-lg bg-white shadow"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-blue-700 mb-2 text-center">{sub.label}</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-sm text-left text-gray-800 border border-blue-300 rounded-lg mb-4">
                        <thead className="bg-blue-100">
                          <tr>
                            {sub.headers.map((header, idx) => (
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
                          {sub.rows.map((row, idx) => (
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
            ) : (
              <>
                {currentCategory.img && (
                  <div className="flex justify-center mb-8">
                    <img
                      src={currentCategory.img}
                      alt={currentCategory.label}
                      className="max-h-48 object-contain border border-blue-200 rounded-lg bg-white shadow"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm text-left text-gray-800 border border-blue-300 rounded-lg mb-4">
                    <thead className="bg-blue-100">
                      <tr>
                        {defaultTableHeaders.map((header, idx) => (
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
                      {currentCategory.rows.map((row, idx) => (
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
          </div>
        )}
        <p className="text-gray-600 text-sm mt-4">Additional sizes and configurations available upon request.</p>
      </div>
    </section>
  );
};

export default Adapters;
