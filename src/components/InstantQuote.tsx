import React, { useState } from 'react';

interface ProductSpec {
  name: string;
  options: string[];
  priceMultiplier: { [key: string]: number };
}

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
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState<CustomizedProduct[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [customizingProduct, setCustomizingProduct] = useState<Product | null>(null);
  const [tempSpecs, setTempSpecs] = useState<{ [key: string]: string }>({});

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
        },
        driveDia: {
          name: 'Drive Diameter',
          options: ['1/2"', '3/4"', '7/8"', '15/16"', '1 1/4"'],
          priceMultiplier: { '1/2"': 1.0, '3/4"': 1.1, '7/8"': 1.2, '15/16"': 1.2, '1 1/4"': 1.3 }
        }
      }
    },
    {
      id: 'BH-83',
      name: 'Bit Holder BH-83',
      category: 'Bit Holders',
      basePrice: 13.75,
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg',
      description: 'Heavy-duty bit holder designed for demanding applications with customizable dimensions.',
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
        },
        driveDia: {
          name: 'Drive Diameter',
          options: ['1/2"', '3/4"', '7/8"', '15/16"', '1 1/4"'],
          priceMultiplier: { '1/2"': 1.0, '3/4"': 1.1, '7/8"': 1.2, '15/16"': 1.2, '1 1/4"': 1.3 }
        }
      }
    },
    // Guardian Blue ISO Sockets
    {
      id: 'GB-ISO-001',
      name: 'Guardian Blue ISO Socket',
      category: 'Guardian Blue ISO Sockets & Adapters',
      basePrice: 24.99,
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      description: 'Premium Guardian Blue ISO socket with enhanced grip and durability features.',
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
        length: {
          name: 'Length',
          options: ['Standard', 'Deep', 'Extra Deep'],
          priceMultiplier: { 'Standard': 1.0, 'Deep': 1.2, 'Extra Deep': 1.4 }
        }
      }
    },
    // Standard Sockets
    {
      id: 'STD-001',
      name: 'Standard Socket',
      category: 'Standard Sockets',
      basePrice: 8.99,
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
      description: 'Reliable standard socket for general-purpose applications with various size options.',
      specifications: {
        size: {
          name: 'Socket Size',
          options: ['6mm', '8mm', '10mm', '12mm', '14mm', '17mm', '19mm', '22mm'],
          priceMultiplier: { '6mm': 0.9, '8mm': 1.0, '10mm': 1.0, '12mm': 1.1, '14mm': 1.1, '17mm': 1.2, '19mm': 1.2, '22mm': 1.3 }
        },
        drive: {
          name: 'Drive Size',
          options: ['1/4"', '3/8"', '1/2"', '3/4"'],
          priceMultiplier: { '1/4"': 1.0, '3/8"': 1.1, '1/2"': 1.2, '3/4"': 1.4 }
        },
        type: {
          name: 'Socket Type',
          options: ['Standard', 'Deep', 'Impact'],
          priceMultiplier: { 'Standard': 1.0, 'Deep': 1.2, 'Impact': 1.3 }
        }
      }
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

  const categories = [
    'all',
    'Bit Holders',
    'Guardian Blue ISO Sockets & Adapters',
    'Standard Sockets',
    'Wobble Sockets',
    'Extensions',
    'Torx Sockets'
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const calculateCustomPrice = (product: Product, specs: { [key: string]: string }) => {
    let multiplier = 1;
    Object.entries(specs).forEach(([key, value]) => {
      if (product.specifications[key] && product.specifications[key].priceMultiplier[value]) {
        multiplier *= product.specifications[key].priceMultiplier[value];
      }
    });
    return product.basePrice * multiplier;
  };

  const openCustomization = (product: Product) => {
    setCustomizingProduct(product);
    // Set default specs
    const defaultSpecs: { [key: string]: string } = {};
    Object.entries(product.specifications).forEach(([key, spec]) => {
      defaultSpecs[key] = spec.options[0];
    });
    setTempSpecs(defaultSpecs);
  };

  const addToCart = (product: Product, specs: { [key: string]: string }, quantity: number = 1) => {
    const finalPrice = calculateCustomPrice(product, specs);
    const customizedProduct: CustomizedProduct = {
      ...product,
      selectedSpecs: specs,
      finalPrice,
      quantity
    };

    const existingIndex = cart.findIndex(item => 
      item.id === product.id && 
      JSON.stringify(item.selectedSpecs) === JSON.stringify(specs)
    );

    if (existingIndex >= 0) {
      const updatedCart = [...cart];
      updatedCart[existingIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, customizedProduct]);
    }

    setCustomizingProduct(null);
  };

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const updateQuantity = (index: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(index);
      return;
    }
    
    const updatedCart = [...cart];
    updatedCart[index].quantity = newQuantity;
    setCart(updatedCart);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.finalPrice * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-emerald-700">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-sm border-b border-green-300/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Instant Quote System</h1>
              <p className="text-green-100 mt-2">Customize and quote your precision tools instantly</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white">${getTotalPrice().toFixed(2)}</div>
              <div className="text-green-200 text-sm">{getTotalItems()} items in quote</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sticky top-24">
              <h3 className="text-xl font-bold text-white mb-4">Filters</h3>
              
              <div className="mb-6">
                <label className="block text-green-100 text-sm font-medium mb-2">Search Products</label>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by name or part number..."
                  className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-green-200 border border-green-300/30 focus:ring-2 focus:ring-green-400 focus:border-transparent"
                />
              </div>

              <div className="mb-6">
                <label className="block text-green-100 text-sm font-medium mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-green-300/30 focus:ring-2 focus:ring-green-400 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-green-800 text-white">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="bg-green-600/30 rounded-xl p-4">
                <h4 className="font-semibold text-white mb-2">Quote Summary</h4>
                <div className="text-green-100 text-sm space-y-1">
                  <div className="flex justify-between">
                    <span>Items:</span>
                    <span>{getTotalItems()}</span>
                  </div>
                  <div className="flex justify-between font-bold text-white">
                    <span>Total:</span>
                    <span>${getTotalPrice().toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="h-48 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-green-200 text-sm mb-2">Part #: {product.id}</p>
                  <p className="text-green-100 text-sm mb-3">{product.description}</p>
                  
                  <div className="text-xl font-bold text-white mb-4">
                    Starting at ${product.basePrice.toFixed(2)}
                  </div>
                  
                  <button
                    onClick={() => openCustomization(product)}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-500 hover:to-emerald-500 transition-all duration-200 transform hover:scale-105"
                  >
                    Customize & Add to Quote
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Cart */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sticky top-24">
              <h3 className="text-xl font-bold text-white mb-4">Your Quote</h3>
              
              {cart.length === 0 ? (
                <p className="text-green-200 text-center py-8">No items selected</p>
              ) : (
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {cart.map((item, index) => (
                    <div key={index} className="bg-white/10 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-white text-sm">{item.name}</h4>
                        <button
                          onClick={() => removeFromCart(index)}
                          className="text-red-300 hover:text-red-200"
                        >
                          ×
                        </button>
                      </div>
                      
                      <div className="text-xs text-green-200 mb-2">
                        {Object.entries(item.selectedSpecs).map(([key, value]) => (
                          <div key={key}>{item.specifications[key]?.name}: {value}</div>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(index, item.quantity - 1)}
                            className="w-6 h-6 bg-green-600 text-white rounded text-sm hover:bg-green-500"
                          >
                            -
                          </button>
                          <span className="text-white font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(index, item.quantity + 1)}
                            className="w-6 h-6 bg-green-600 text-white rounded text-sm hover:bg-green-500"
                          >
                            +
                          </button>
                        </div>
                        <div className="text-right">
                          <div className="text-green-200 text-xs">${item.finalPrice.toFixed(2)} each</div>
                          <div className="text-white font-bold">${(item.finalPrice * item.quantity).toFixed(2)}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="border-t border-green-300/30 pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xl font-bold text-white">Total:</span>
                      <span className="text-2xl font-bold text-white">${getTotalPrice().toFixed(2)}</span>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 rounded-lg font-semibold hover:from-green-400 hover:to-emerald-400 transform hover:scale-105 transition-all duration-200 shadow-lg mb-2">
                      Request Official Quote
                    </button>
                    
                    <button className="w-full bg-white/20 text-white py-2 rounded-lg font-medium hover:bg-white/30 transition-colors">
                      Save Quote
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Customization Modal */}
      {customizingProduct && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Customize {customizingProduct.name}</h2>
                <button
                  onClick={() => setCustomizingProduct(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {Object.entries(customizingProduct.specifications).map(([key, spec]) => (
                  <div key={key}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {spec.name}
                    </label>
                    <select
                      value={tempSpecs[key] || spec.options[0]}
                      onChange={(e) => setTempSpecs({ ...tempSpecs, [key]: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      {spec.options.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-900">Customized Price:</span>
                  <span className="text-2xl font-bold text-green-600">
                    ${calculateCustomPrice(customizingProduct, tempSpecs).toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setCustomizingProduct(null)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => addToCart(customizingProduct, tempSpecs)}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-500 hover:to-emerald-500 transition-all duration-200 font-semibold"
                >
                  Add to Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InstantQuotePage;