
import React from 'react';

const antiMarHeaders = [
  'PART #', 'HEX SIZE', 'DRIVE', 'OAL', 'SLEEVE LENGTH', 'NOSE DIA.'
];

const antiMarRows = [
  ['SF-17MM4-LPLC', '17MM', '1/2"', '3 1/4"', '2"', '1 1/8"'],
  ['SF-19MM4-LPLC', '19MM', '1/2"', '3 1/4"', '2"', '1 1/4"'],
  ['SF-19MM5-LPLC', '19MM', '5/8"', '3 1/2"', '2"', '1 1/4"'],
  ['SF-21MM5-LPLC', '21MM', '5/8"', '3 1/2"', '2"', '1 1/4"'],
  ['SF-19MM6-LPLC', '19MM', '3/4"', '4"', '2 1/2"', '1 1/4"'],
  ['SF-21MM6-LPLC', '21MM', '3/4"', '4"', '2 1/2"', '1 3/8"'],
  ['SF-22MM6-LPLC', '22MM', '3/4"', '4"', '2 1/2"', '1 1/2"'],
];

const AntiMarLugNutSockets: React.FC = () => (
  <section className="py-24 bg-white">
    <div className="max-w-5xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Anti Mar Lug Nut Sockets</h1>
      <p className="text-lg text-gray-700 mb-10">Universal Tool Inc. offers anti-mar lug nut sockets designed to protect wheels and lug nuts from damage during installation and removal. These sockets feature protective nylon sleeves and are available in various sizes and styles.</p>
      <div className="flex flex-col gap-8 mb-10 items-center justify-center">
        <img
          src="/Anti Mar Lug Nut Sockets.png"
          alt="Anti Mar Lug Nut Sockets"
          className="max-h-48 object-contain border border-blue-200 rounded-lg bg-white shadow"
          loading="lazy"
        />
        <img
          src="/Anti Mar Lug Nut Sockets Nylon Anti-Mar Sleeve Styles.png"
          alt="Nylon Anti-Mar Sleeve Styles"
          className="max-h-48 object-contain border border-blue-200 rounded-lg bg-white shadow"
          loading="lazy"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-800 border border-blue-300 rounded-lg mb-4">
          <thead className="bg-blue-100">
            <tr>
              {antiMarHeaders.map((header, idx) => (
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
            {antiMarRows.map((row, idx) => (
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
      <p className="text-gray-600 text-sm mt-4">These sockets are available in additional lengths, spring loaded, sidewall magnets, thin wall, deep broach, etc.</p>
    </div>
  </section>
);

export default AntiMarLugNutSockets;
