
const extensionHeaders = ['PART #', 'SQUARE (A)', 'SQUARE (B)', 'LENGTH STD (L)'];
const extensionRows = [
  ['EXS-33-L', '3/8"', '3/8"', '3"'],
  ['EXS-44-L', '1/2"', '1/2"', '3"'],
  ['EXS-55-L', '5/8"', '5/8"', '4"'],
  ['EXS-66-L', '3/4"', '3/4"', '4"'],
];

const SpringLoadedExtensions: React.FC = () => (
  <section className="py-24 bg-white">
    <div className="max-w-5xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Spring Loaded Extensions</h1>
      <p className="text-lg text-gray-700 mb-10">Universal Tool Inc. offers spring loaded extensions for applications requiring flexibility and secure engagement. Standard travel is 1/2". Add 1/2" of length for each additional 1/4" of travel. These extensions are available in various drive sizes and lengths.</p>
      <div className="flex flex-col items-center mb-10">
        <img
          src="/Spring Loaded Extensions.png"
          alt="Spring Loaded Extensions"
          className="max-h-56 object-contain border border-blue-200 rounded-lg bg-white shadow mb-4"
          loading="lazy"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-800 border border-blue-300 rounded-lg mb-4">
          <thead className="bg-blue-100">
            <tr>
              {extensionHeaders.map((header, idx) => (
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
            {extensionRows.map((row, idx) => (
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
      <p className="text-gray-600 text-sm mt-4">These extensions are available in additional lengths, spring loaded, sidewall magnets, thin wall, deep broach, etc.</p>
    </div>
  </section>
);

export default SpringLoadedExtensions;
