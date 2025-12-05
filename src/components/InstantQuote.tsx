import React, { useState } from 'react';

interface ProductSpec {
  name: string;
  options: string[];
  priceMultiplier: { [key: string]: number };
}

export default InstantQuotePage;

interface Product {
  id: string;
  name: string;
  category: string;
  basePrice: number;
  image: string;
  specifications: { [key: string]: ProductSpec };
  description: string;
}

interface CustomizedProduct extends Product {
  selectedSpecs: { [key: string]: string };
  finalPrice: number;
  quantity: number;
}

const InstantQuotePage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSpecs, setSelectedSpecs] = useState<{ [key: string]: string }>({});
  const [quantity, setQuantity] = useState<number>(1);
  const [serverQuote, setServerQuote] = useState<{ unitPrice: number; total: number; currency?: string } | null>(null);

  const products: Product[] = [
    // Bit Holders
    {
      id: 'BH-82',
      name: 'Bit Holder BH-82',
      category: 'Bit Holders',
      basePrice: 12.50,
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg',
      description: 'Precision-engineered bit holder with customizable specifications for optimal performance.',
      specifications: {
        hexSize: {
          name: 'Hex Size',
          options: ['1/4"', '5/16"', '3/8"'],
          priceMultiplier: { '1/4"': 1.0, '5/16"': 1.1, '3/8"': 1.2 }
        },
        squareDrive: {
          name: 'Square Drive',
          options: ['1/4"', '3/8"', '1/2"', '5/8"'],
          priceMultiplier: { '1/4"': 1.0, '3/8"': 1.1, '1/2"': 1.2, '5/8"': 1.3 }
        },
        length: {
          name: 'Length',
          options: ['1 1/4"', '1 1/2"', '1 3/4"', '2"'],
          priceMultiplier: { '1 1/4"': 1.0, '1 1/2"': 1.1, '1 3/4"': 1.2, '2"': 1.3 }
        },
        noseDia: {
          name: 'Nose Diameter',
          options: ['1/2"', '7/16"', '5/8"', '3/4"', '13/16"'],
          priceMultiplier: { '1/2"': 1.0, '7/16"': 1.0, '5/8"': 1.1, '3/4"': 1.1, '13/16"': 1.2 }
        }
      },
    },
    // Wobble Sockets
    {
      id: 'WOB-001',
      name: 'Wobble Socket',
      category: 'Wobble Sockets',
      basePrice: 16.50,
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      description: 'Flexible wobble socket for accessing angled fasteners with precision control.',
      specifications: {
        size: {
          name: 'Socket Size',
          options: ['8mm', '10mm', '12mm', '14mm', '17mm', '19mm'],
          priceMultiplier: { '8mm': 1.0, '10mm': 1.0, '12mm': 1.1, '14mm': 1.1, '17mm': 1.2, '19mm': 1.2 }
        },
        drive: {
          name: 'Drive Size',
          options: ['1/4"', '3/8"', '1/2"'],
          priceMultiplier: { '1/4"': 1.0, '3/8"': 1.1, '1/2"': 1.2 }
        },
        wobbleAngle: {
          name: 'Wobble Angle',
          options: ['15°', '20°', '25°'],
          priceMultiplier: { '15°': 1.0, '20°': 1.1, '25°': 1.2 }
        }
      }
    },
    // Extensions
    {
      id: 'EXT-001',
      name: 'Extension',
      category: 'Extensions',
      basePrice: 12.99,
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg',
      description: 'Precision extension for reaching deep or recessed fasteners.',
      specifications: {
        length: {
          name: 'Length',
          options: ['2"', '3"', '4"', '6"', '8"', '12"'],
          priceMultiplier: { '2"': 0.9, '3"': 1.0, '4"': 1.1, '6"': 1.2, '8"': 1.3, '12"': 1.5 }
        },
        drive: {
          name: 'Drive Size',
          options: ['1/4"', '3/8"', '1/2"', '3/4"'],
          priceMultiplier: { '1/4"': 1.0, '3/8"': 1.1, '1/2"': 1.2, '3/4"': 1.4 }
        },
        type: {
          name: 'Extension Type',
          options: ['Standard', 'Flexible', 'Locking'],
          priceMultiplier: { 'Standard': 1.0, 'Flexible': 1.3, 'Locking': 1.2 }
        }
      }
    },
    // Torx Sockets
    {
      id: 'TRX-001',
      name: 'Torx Socket',
      category: 'Torx Sockets',
      basePrice: 11.50,
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
      description: 'Precision Torx socket for star-shaped fasteners with superior grip.',
      specifications: {
        torxSize: {
          name: 'Torx Size',
          options: ['T10', 'T15', 'T20', 'T25', 'T30', 'T40', 'T45', 'T50'],
          priceMultiplier: { 'T10': 1.0, 'T15': 1.0, 'T20': 1.0, 'T25': 1.1, 'T30': 1.1, 'T40': 1.2, 'T45': 1.2, 'T50': 1.3 }
        },
        drive: {
          name: 'Drive Size',
          options: ['1/4"', '3/8"', '1/2"'],
          priceMultiplier: { '1/4"': 1.0, '3/8"': 1.1, '1/2"': 1.2 }
        },
        type: {
          name: 'Socket Type',
          options: ['Standard', 'Deep', 'External'],
          priceMultiplier: { 'Standard': 1.0, 'Deep': 1.2, 'External': 1.1 }
        }
      }
    }
  ];

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    const defaultSpecs: { [key: string]: string } = {};
    Object.entries(product.specifications).forEach(([key, spec]) => {
      defaultSpecs[key] = spec.options[0];
    });
    setSelectedSpecs(defaultSpecs);
    setServerQuote(null);
  };

  const handleSpecChange = (key: string, value: string) => {
    setSelectedSpecs({ ...selectedSpecs, [key]: value });
    setServerQuote(null);
  };

  const handleQuantityChange = (qty: number) => {
    setQuantity(Math.max(1, qty));
    setServerQuote(null);
  };

  const fetchServerQuote = async () => {
    if (!selectedProduct) return;
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ categorySlug: selectedProduct.category.toLowerCase().replace(/[^a-z0-9]+/g, '-'), selections: selectedSpecs, quantity })
      });
      if (!res.ok) {
        setServerQuote(null);
        alert('No server price available for this combination');
        return;
      }
      const payload = await res.json();
      if (payload?.data) {
        setServerQuote({ unitPrice: payload.data.unitPrice, total: payload.data.total, currency: payload.data.currency });
      }
    } catch (e) {
      setServerQuote(null);
      alert('Failed to fetch server quote');
    }
  };

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-gray-900">Instant Quote Request</h1>
            <p className="text-gray-600 mt-2">Get a fast, custom quote for your selected product.</p>
          </div>
        </div>
        <div className="flex justify-center items-start py-12">
          <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">
            <form className="space-y-8">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Select Product</label>
                <select
                  value={selectedProduct?.id || ''}
                  onChange={e => {
                    const prod = products.find(p => p.id === e.target.value);
                    if (prod) { handleProductSelect(prod); }
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                >
                  <option value="">Choose a product...</option>
                  {products.map(product => (
                    <option key={product.id} value={product.id}>{product.name}</option>
                  ))}
                </select>
              </div>
              {selectedProduct && (
                <>
                  <div className="space-y-6">
                    {Object.entries(selectedProduct.specifications).map(([key, spec]) => (
                      <div key={key}>
                        <label className="block text-gray-700 font-medium mb-2">{spec.name}</label>
                        <select
                          value={selectedSpecs[key] || spec.options[0]}
                          onChange={e => handleSpecChange(key, e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                        >
                          {spec.options.map(option => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <label className="block text-gray-700 font-medium mb-2">Quantity</label>
                    <input
                      type="number"
                      min={1}
                      value={quantity}
                      onChange={e => handleQuantityChange(Number(e.target.value))}
                      className="w-32 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                    />
                    <button
                      type="button"
                      onClick={fetchServerQuote}
                      className="ml-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
                    >
                      Get Price
                    </button>
                  </div>
                  {serverQuote && (
                    <div className="mt-8 p-4 bg-gray-100 rounded-lg border">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-sm text-gray-600">Price per unit</div>
                          <div className="text-xl font-bold text-gray-900">{serverQuote.currency || 'USD'} {serverQuote.unitPrice.toFixed(2)}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-600">Total</div>
                          <div className="text-xl font-bold text-gray-900">{serverQuote.currency || 'USD'} {serverQuote.total.toFixed(2)}</div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="mt-8">
                    <button type="button" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg">
                      Request Official Quote
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    );
  }
// ...function and export only...