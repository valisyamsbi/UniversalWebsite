
import React, { useState } from 'react';



const pulseToolSocketsCategories = [
  {
    id: 'sae',
    label: 'SAE',
    headers: ['PART #', 'HEX A', 'SQUARE B', 'DIA. C'],
    rows: [
      ['9P-103-L', '5/16', '3/8', '3/4'],
      ['9P-123-L', '3/8', '3/8', '3/4'],
      ['9P-163-L', '1/2', '3/8', '13/16'],
      ['9P-183-L', '9/16', '3/8', '7/8'],
      ['9P-203-L', '5/8', '3/8', '15/16'],
      ['9P-243-L', '3/4', '3/8', '1-1/8'],
      ['9P-164-L', '1/2', '1/2', '15/16'],
      ['9P-184-L', '9/16', '1/2', '15/16'],
      ['9P-204-L', '5/8', '1/2', '15/16'],
      ['9P-244-L', '3/4', '1/2', '1-1/8'],
      ['9P-284-L', '7/8', '1/2', '1-3/8'],
      ['9P-304-L', '15/16', '1/2', '1-1/2'],
      ['9P-246-L', '3/4', '3/4', '1-1/2'],
      ['9P-286-L', '7/8', '3/4', '1-1/2'],
      ['9P-306-L', '15/16', '3/4', '1-1/2'],
      ['9P-326-L', '1', '3/4', '1-1/2'],
      ['9P-346-L', '1-1/16', '3/4', '1-5/8'],
      ['9P-348-L', '1-1/16', '1', '2'],
      ['9P-368-L', '1-1/8', '1', '2'],
      ['9P-408-L', '1-1/4', '1', '2'],
      ['9P-488-L', '1-1/2', '1', '2'],
    ],
  },
  {
    id: 'metric',
    label: 'Metric',
    headers: ['PART #', 'HEX A', 'SQUARE B', 'DIA. C'],

    rows: [
      ['9P-8MM3-L', '8MM', '3/8', '3/4'],
      ['9P-10MM3-L', '10MM', '3/8', '3/4'],
      ['9P-13MM3-L', '13MM', '3/8', '13/16'],
      ['9P-14MM3-L', '14MM', '3/8', '7/8'],
      ['9P-15MM3-L', '15MM', '3/8', '7/8'],
      ['9P-18MM3-L', '18MM', '3/8', '1-1/8'],
      ['9P-13MM4-L', '13MM', '1/2', '15/16'],
      ['9P-14MM4-L', '14MM', '1/2', '15/16'],
      ['9P-15MM4-L', '15MM', '1/2', '15/16'],
      ['9P-18MM4-L', '18MM', '1/2', '1-1/8'],
      ['9P-22MM4-L', '22MM', '1/2', '1-3/8'],
      ['9P-24MM4-L', '24MM', '1/2', '1-1/2'],
      ['9P-19MM6-L', '19MM', '3/4', '1-1/2'],
      ['9P-22MM6-L', '22MM', '3/4', '1-1/2'],
      ['9P-24MM6-L', '24MM', '3/4', '1-1/2'],
      ['9P-27MM6-L', '27MM', '3/4', '1-5/8'],
      ['9P-30MM6-L', '30MM', '3/4', '1-3/4'],
      ['9P-27MM8-L', '27MM', '1', '2'],
      ['9P-30MM8-L', '30MM', '1', '2'],
      ['9P-32MM8-L', '32MM', '1', '2'],
      ['9P-36MM8-L', '36MM', '1', '2'],
    ],
  },
];

const PulseToolSockets: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(pulseToolSocketsCategories[0].id);
  const currentCategory = pulseToolSocketsCategories.find(cat => cat.id === selectedCategory);
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-blue-900 mb-8">Pulse Tool Sockets</h1>
        <p className="text-lg text-gray-700 mb-10">Universal Tool Inc. offers a range of pulse tool sockets designed for use with pneumatic and electric pulse tools. These sockets are engineered for high durability and performance. Select a category below to view available pulse tool sockets.</p>
        <div className="flex flex-wrap gap-4 mb-10">
          {pulseToolSocketsCategories.map(cat => (
            <button
              key={cat.id}
              className={`px-6 py-4 rounded-xl shadow border-2 font-semibold text-lg transition-all duration-200 ${selectedCategory === cat.id ? 'border-blue-900 bg-blue-50 text-blue-900' : 'border-gray-200 bg-white text-gray-700 hover:border-blue-400 hover:bg-blue-50'}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
        {currentCategory && currentCategory.headers && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">{currentCategory.label}</h2>
            <div className="flex justify-center mb-8">
              <img
                src="/Pulse Tool Sockets.png"
                alt="Pulse Tool Sockets"
                className="max-h-48 object-contain border border-blue-200 rounded-lg bg-white shadow"
                loading="lazy"
              />
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left text-gray-800 border border-blue-300 rounded-lg mb-4">
                <thead className="bg-blue-100">
                  <tr>
                    {currentCategory.headers.map((header, idx) => (
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
          </div>
        )}
        <p className="text-gray-600 text-sm mt-4">Additional sizes and configurations available upon request.</p>
      </div>
    </section>
  );
};

export default PulseToolSockets;
