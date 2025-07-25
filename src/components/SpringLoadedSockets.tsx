
const springLoadedHeaders = ['PART #', 'HEX SIZE', 'DRIVE SIZE', 'OAL'];
const springLoadedRows = [
  ['EXSSF-10MM3-L', '10MM', '3/8"', '3"'],
  ['EXSSF-13MM3-L', '13MM', '3/8"', '3"'],
  ['EXSSF-15MM3-L', '15MM', '3/8"', '3"'],
  ['EXSSF-15MM4-L', '15MM', '1/2"', '3"'],
  ['EXSSF-18MM4-L', '18MM', '1/2"', '3"'],
  ['EXSSF-19MM4-L', '19MM', '1/2"', '3"'],
  ['EXSSF-19MM6-L', '19MM', '3/4"', '3"'],
  ['EXSSF-24MM6-L', '24MM', '3/4"', '3"'],
];

const SpringLoadedSockets: React.FC = () => (
  <section className="py-24 bg-white">
    <div className="max-w-5xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Spring Loaded Sockets</h1>
      <p className="text-lg text-gray-700 mb-10">Universal Tool Inc. offers spring loaded sockets for applications requiring secure engagement and easy release. Standard travel is 1/2". Add 1/2" of length for each additional 1/4" of travel. These sockets are available in various drive sizes and types.</p>
      <div className="flex flex-col items-center mb-10">
        <img
          src="/Spring Loaded Sockets.png"
          alt="Spring Loaded Sockets"
          className="max-h-56 object-contain border border-blue-200 rounded-lg bg-white shadow mb-4"
          loading="lazy"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-800 border border-blue-300 rounded-lg mb-4">
          <thead className="bg-blue-100">
            <tr>
              {springLoadedHeaders.map((header, idx) => (
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
            {springLoadedRows.map((row, idx) => (
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

export default SpringLoadedSockets;
