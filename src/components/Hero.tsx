import React from 'react';

const Hero: React.FC = () => {
  return (

    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Image Background */}
      <img
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://www.avalontoolsinc.com/wp-content/uploads/2018/07/surface-drive-impact-sockets.jpg"
        alt="Surface drive impact sockets background"
        draggable="false"
      />
      {/* Dark overlay for text visibility */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Precision
              <span className="block w-full min-w-[0] whitespace-nowrap bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent inline-block leading-[1.1] pb-2">
                Fastening Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              For over two decades, we've engineered custom sockets, adapters, and extensions 
              that deliver unmatched reliability in the world's most demanding assembly environments.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            {/* <button
              onClick={() => navigate('/quote')}
              className="px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Get Instant Quote
            </button> */}
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">20+</div>
              <div className="text-blue-200">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">1000+</div>
              <div className="text-blue-200">Custom Tools Designed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-blue-200">Quality Assurance</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse z-10"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-300/20 rounded-full blur-2xl animate-pulse delay-1000 z-10"></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-white/5 rounded-full blur-lg animate-pulse delay-500 z-10"></div>
    </div>
  );
};

export default Hero;