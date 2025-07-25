import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    {
      number: "20+",
      label: "Years of Excellence",
      description: "Two decades of trusted manufacturing and innovation"
    },
    {
      number: "1,000+",
      label: "Custom Tools Designed",
      description: "Precision-engineered solutions for diverse applications"
    },
    {
      number: "99.9%",
      label: "Quality Assurance",
      description: "Rigorous testing ensures exceptional reliability"
    },
    {
      number: "500+",
      label: "Satisfied Clients",
      description: "Trusted by leading manufacturers worldwide"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Proven Track Record of Excellence
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our commitment to quality and precision has earned us the trust of manufacturers 
            across automotive, aerospace, and industrial sectors.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="text-5xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                  {stat.number}
                </div>
                <h3 className="text-xl font-semibold text-blue-100 mb-2">{stat.label}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Experience the Difference?</h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of manufacturers who trust Universal Tool Inc. for their precision fastening solutions. 
              Let us help you improve productivity, safety, and quality in your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300"
              >
                Request a Quote
              </button>
              <button
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transform hover:scale-105 transition-all duration-300"
              >
                View Our Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;