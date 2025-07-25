import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: "🔧",
      title: "Custom Tool Design",
      description: "Our engineering team works with you to design tools that meet your exact specifications and performance requirements.",
      features: ["CAD Design", "Prototyping", "Testing & Validation", "Documentation"]
    },
    {
      icon: "⚙️",
      title: "Precision Manufacturing",
      description: "State-of-the-art manufacturing facilities ensure consistent quality and precision in every tool we produce.",
      features: ["CNC Machining", "Quality Control", "Material Selection", "Surface Treatment"]
    },
    {
      icon: "📞",
      title: "Technical Support",
      description: "Comprehensive support from initial consultation through product lifecycle to ensure optimal performance.",
      features: ["Engineering Consultation", "Application Support", "Training Programs", "Maintenance Guidance"]
    },
    {
      icon: "🚚",
      title: "Fast Delivery",
      description: "Efficient production and logistics processes ensure your tools are delivered when you need them.",
      features: ["Quick Turnaround", "Rush Orders", "Global Shipping", "Inventory Management"]
    }
  ];

  const process = [
    {
      step: "1",
      title: "Consultation",
      description: "We analyze your specific requirements and application challenges to understand your needs."
    },
    {
      step: "2",
      title: "Design & Engineering",
      description: "Our team creates custom designs using advanced CAD software and engineering expertise."
    },
    {
      step: "3",
      title: "Prototyping",
      description: "We develop and test prototypes to ensure optimal performance before full production."
    },
    {
      step: "4",
      title: "Manufacturing",
      description: "Precision manufacturing using high-grade materials and advanced machining techniques."
    },
    {
      step: "5",
      title: "Quality Assurance",
      description: "Rigorous testing and inspection ensure every tool meets our exacting quality standards."
    },
    {
      step: "6",
      title: "Delivery & Support",
      description: "Fast delivery with ongoing technical support to maximize your tool performance."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Comprehensive 
            <span className="text-blue-900"> Manufacturing Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From initial consultation to final delivery, we provide complete manufacturing solutions 
            tailored to your specific fastening tool requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl hover:bg-blue-50 transition-all duration-300 group">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900">{service.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-blue-900 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Manufacturing Process</h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              A systematic approach ensuring quality, precision, and customer satisfaction at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <h4 className="font-semibold text-lg ml-3">{item.title}</h4>
                </div>
                <p className="text-blue-100 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;