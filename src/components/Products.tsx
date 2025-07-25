
import React from 'react';

const Products: React.FC = () => {

  const industries = [
    {
      name: "Automotive Manufacturing",
      icon: "🚗",
      description: "Precision tools for assembly lines and service operations"
    },
    {
      name: "Aerospace Industry",
      icon: "✈️",
      description: "High-tolerance fastening solutions for critical applications"
    },
    {
      name: "Industrial Manufacturing",
      icon: "🏭",
      description: "Heavy-duty tools for demanding production environments"
    },
    {
      name: "Field Service",
      icon: "🔧",
      description: "Portable solutions for on-site maintenance and repair"
    }
  ];


  // List of product categories and their routes
  const productCategories = [
    { name: "Guardian Blue ISO Sockets & Adapters", route: "/guardian-blue-iso-sockets-adapters" },
    { name: "Guardian Blue ISD Sockets", route: "/guardian-blue-isd-sockets" },
    { name: "Standard Sockets", route: "/standard-sockets" },
    { name: "Bit Holders", route: "/bit-holders" },
    { name: "Wobble Sockets", route: "/wobble-sockets" },
    { name: "Extensions", route: "/extensions" },
    { name: "Adapters", route: "/adapters" },
    { name: "Universals", route: "/universals" },
    { name: "Pulse Tool Sockets", route: "/pulse-tool-sockets" },
    { name: "Anti-Mar Lug Nut Sockets", route: "/anti-mar-lug-nut-sockets" },
    { name: "Spring Loaded Combination Sockets", route: "/spring-loaded-combination-sockets" },
    { name: "Spring Loaded Extensions", route: "/spring-loaded-extensions" },
    { name: "Torx Sockets", route: "/torx-sockets" },
    { name: "Spring Loaded Sockets", route: "/spring-loaded-sockets" },
    { name: "Gear Driven Sockets", route: "/gear-driven-sockets" },
    { name: "Hold & Drive Sockets", route: "/hold-drive-sockets" },
  ];


  // Socket Number Builder state
  const [socketBuilder, setSocketBuilder] = React.useState({
    type: '',
    magnet: '',
    hex: '',
    drive: '',
    length: '',
    style: '',
  });
  const [unitSystem, setUnitSystem] = React.useState<'inch' | 'metric'>('inch');

  const handleBuilderChange = (key: keyof typeof socketBuilder, value: string) => {
    setSocketBuilder((prev) => ({ ...prev, [key]: value }));
  };

  // Example values for Inch and Metric
  const inchHexSizes = [
    '3/16', '7/32', '1/4', '9/32', '5/16', '11/32', '3/8', '7/16', '1/2', '9/16', '5/8', '11/16', '3/4', '13/16', '7/8', '15/16', '1'
  ];
  const metricHexSizes = [
    '5', '5.5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '21', '22', '24', '27', '30', '32'
  ];
  const inchLengths = ['1', '1-1/2', '2', '2-1/2', '3', '4', '5', '6'];
  const metricLengths = ['25', '38', '50', '63', '75', '100', '125', '150'];

  // Custom part number formatting: hyphens only between 2nd-3rd and 4th-5th positions
  const partNumberParts = [
    socketBuilder.type,
    socketBuilder.magnet,
    socketBuilder.hex,
    socketBuilder.drive,
    socketBuilder.length,
    socketBuilder.style
  ];

  let partNumber = '';
  if (partNumberParts.some(Boolean)) {
    // Only add hyphens if both sides are non-empty
    if (partNumberParts[0]) partNumber += partNumberParts[0];
    if (partNumberParts[1]) partNumber += (partNumber ? '' : '') + partNumberParts[1];
    if (partNumberParts[2]) partNumber += (partNumberParts[1] ? '-' : '') + partNumberParts[2];
    if (partNumberParts[3]) partNumber += partNumberParts[3];
    if (partNumberParts[4]) partNumber += (partNumberParts[3] ? '-' : '') + partNumberParts[4];
    if (partNumberParts[5]) partNumber += partNumberParts[5];
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Precision-Engineered 
            <span className="text-blue-900"> Fastening Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive range of custom tools is designed to meet the unique challenges 
            of modern manufacturing and assembly operations.
          </p>
        </div>

        {/* Product Categories Tile Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Browse Our Product Categories</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productCategories.map((cat) => (
              <a
                key={cat.name}
                href={cat.route}
                className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100 p-6 text-center group"
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="w-14 h-14 mb-4 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-900 transition-colors">
                    <svg className="w-8 h-8 text-blue-900 group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="font-semibold text-gray-900 group-hover:text-blue-900 text-lg mb-1">{cat.name}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Products Grid (legacy, can be removed or kept as needed) */}
        {/*
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {products.map((product, index) => (
            ...existing code...
          ))}
        </div>
        */}



        {/* Socket Number Builder Section */}
        <div className="relative rounded-2xl p-8 md:p-12 shadow-lg mb-20 bg-gradient-to-br from-blue-100 via-blue-50 to-white transition-all duration-700 border border-blue-200">
          {/* Inch/Metric Toggle */}
          <div className="absolute top-6 right-8 flex items-center space-x-2 z-10">
            <span className={`px-3 py-1 rounded-l-lg font-semibold cursor-pointer transition-colors duration-200 ${unitSystem === 'inch' ? 'bg-blue-500 text-white' : 'bg-white text-blue-900 border border-blue-200'}`}
              onClick={() => { setUnitSystem('inch'); setSocketBuilder(sb => ({ ...sb, hex: '', length: '' })); }}
            >Inch</span>
            <span className={`px-3 py-1 rounded-r-lg font-semibold cursor-pointer transition-colors duration-200 ${unitSystem === 'metric' ? 'bg-blue-500 text-white' : 'bg-white text-blue-900 border border-blue-200'}`}
              onClick={() => { setUnitSystem('metric'); setSocketBuilder(sb => ({ ...sb, hex: '', length: '' })); }}
            >Metric</span>
          </div>
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-blue-900 mb-4 drop-shadow">Socket Number Builder</h3>
            <p className="text-lg text-blue-900/80 max-w-2xl mx-auto">
              Use the dropdowns below to understand and build a socket part number. Each position represents a key attribute of the socket.
            </p>
          </div>
          {/* Positions Row */}
          <div className="grid grid-cols-6 gap-4 mb-2">
            {[1,2,3,4,5,6].map((n) => (
              <div key={n} className="text-center font-bold text-blue-900 text-lg border border-blue-200 bg-white/60 rounded-lg py-2 shadow-sm transition-all duration-300 hover:bg-blue-100">
                {n}<sup>{['st','nd','rd','th','th','th'][n-1]}</sup> Position
              </div>
            ))}
          </div>
          {/* Labels Row */}
          <div className="grid grid-cols-6 gap-4 mb-4">
            <div className="text-center text-blue-800 text-sm font-medium border border-blue-100 bg-white/70 rounded-lg py-1">Type</div>
            <div className="text-center text-blue-800 text-sm font-medium border border-blue-100 bg-white/70 rounded-lg py-1">Magnet Type</div>
            <div className="text-center text-blue-800 text-sm font-medium border border-blue-100 bg-white/70 rounded-lg py-1">Hex Size</div>
            <div className="text-center text-blue-800 text-sm font-medium border border-blue-100 bg-white/70 rounded-lg py-1">Drive Size</div>
            <div className="text-center text-blue-800 text-sm font-medium border border-blue-100 bg-white/70 rounded-lg py-1">Length</div>
            <div className="text-center text-blue-800 text-sm font-medium border border-blue-100 bg-white/70 rounded-lg py-1">Style</div>
          </div>
          {/* Dropdowns Row */}
          <div className="grid grid-cols-6 gap-4">
            {/* 1st Position: Type */}
            <select
              className="w-full rounded border-blue-300 focus:ring-blue-500 focus:border-blue-500 text-blue-900 bg-white/90 shadow border transition-all duration-300 hover:border-blue-500"
              value={socketBuilder.type}
              onChange={e => handleBuilderChange('type', e.target.value)}
            >
              <option value="">Select</option>
              <option value="A">A = ADAPTER</option>
              <option value="BH">BH = BIT HOLDER</option>
              <option value="D">D = 12 POINT DOUBLE HEX</option>
              <option value="DSQ">DSQ = DOUBLE SQUARE</option>
              <option value="EX">EX = EXTENSION</option>
              <option value="EXS">EXS = SPRING LOADED EXTENSION</option>
              <option value="FL">FL = 6 POINT - FAST LEAD</option>
              <option value="HD">HD = HOLD AND DRIVE</option>
              <option value="KO">KO = KNICK-OFF SOCKET</option>
              <option value="OCT">OCT = OCTAGONAL SOCKET</option>
              <option value="P">P = 6 POINT SINGLE HEX</option>
              <option value="QR">QR = QUICK CHANGE RING</option>
              <option value="SB">SB = SWIVEL BALLS</option>
              <option value="SF">SF = 6 POINT SURFACE HEX</option>
              <option value="TX">TX = TORX</option>
              <option value="U">U = UNIVERSALS</option>
              <option value="UW">UW = WOBBLE SOCKET</option>
              <option value="9">9 = PULSE TOOL</option>
            </select>
            {/* 2nd Position: Magnet Type */}
            <select
              className="w-full rounded border-blue-200 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              value={socketBuilder.magnet}
              onChange={e => handleBuilderChange('magnet', e.target.value)}
            >
              <option value="">Select</option>
              <option value="M">M = SOLID MAGNET / SIDE WALL</option>
              <option value="HM">HM = HOLLOW MAGNET</option>
              <option value="SM">SM = SPRING LOADED MAGNET</option>
            </select>
            {/* 3rd Position: Hex Size */}
            <select
              className="w-full rounded border-blue-200 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              value={socketBuilder.hex}
              onChange={e => handleBuilderChange('hex', e.target.value)}
            >
              <option value="">Select</option>
              {unitSystem === 'inch'
                ? inchHexSizes.map(size => (
                    <option key={size} value={size}>{size} in</option>
                  ))
                : metricHexSizes.map(size => (
                    <option key={size} value={size}>{size} mm</option>
                  ))}
            </select>
            {/* 4th Position: Drive Size */}
            <select
              className="w-full rounded border-blue-200 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              value={socketBuilder.drive}
              onChange={e => handleBuilderChange('drive', e.target.value)}
            >
              <option value="">Select</option>
              <option value="1/4">1/4"</option>
              <option value="3/8">3/8"</option>
              <option value="1/2">1/2"</option>
              <option value="5/8">5/8"</option>
              <option value="3/4">3/4"</option>
              <option value="1">1"</option>
            </select>
            {/* 5th Position: Length */}
            <select
              className="w-full rounded border-blue-200 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              value={socketBuilder.length}
              onChange={e => handleBuilderChange('length', e.target.value)}
            >
              <option value="">Select</option>
              {unitSystem === 'inch'
                ? inchLengths.map(len => (
                    <option key={len} value={len}>{len} in</option>
                  ))
                : metricLengths.map(len => (
                    <option key={len} value={len}>{len} mm</option>
                  ))}
            </select>
            {/* 6th Position: Style */}
            <select
              className="w-full rounded border-blue-200 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              value={socketBuilder.style}
              onChange={e => handleBuilderChange('style', e.target.value)}
            >
              <option value="">Select</option>
              <option value="AL">AL = ALUMINUM</option>
              <option value="B">B = BALL RETAINER</option>
              <option value="DB">DB = DEEP BROACH</option>
              <option value="DW">DW = DEEP WELL</option>
              <option value="HW">HW = HEAVY WALL</option>
              <option value="NT">NT = NOSE TAPER</option>
              <option value="OR">OR = O RING</option>
              <option value="P">P = PIN RETAINER</option>
              <option value="PL">PL = PLASTIC SLEEVE</option>
              <option value="PLC">PLC = EXTENDED SLEEVE</option>
              <option value="PLN">PLN = PLUNGER</option>
              <option value="PLS">PLS = SPINNING SLEEVE</option>
              <option value="S">S = SPECIAL</option>
              <option value="SKO">SKO = SOCKET ONLY</option>
              <option value="SL">SL = SLOTTED SOCKET</option>
              <option value="SPR">SPR = SPRING</option>
              <option value="T">T = THIN WALL</option>
              <option value="TN">TN = TURNED NOSE</option>
            </select>
          </div>
          {/* Part Number Summary */}
          <div className="mt-8 flex justify-center">
            {partNumber && (
              <div className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 text-white text-2xl font-bold shadow-lg border-2 border-blue-200 animate-fade-in">
                Part Number: <span className="ml-2 tracking-wider">{partNumber}</span>
              </div>
            )}
          </div>
        </div>

        {/* Industries Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From production floors to field service operations, our tools deliver reliability 
              across diverse manufacturing environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors duration-200">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{industry.name}</h4>
                <p className="text-sm text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;