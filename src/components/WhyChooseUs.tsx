import React from 'react';
import { Shield, Clock, Sparkles, MapPin, Wifi, Coffee } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <MapPin className="w-8 h-8 text-[#B8860B]" />,
      title: 'Prime Location',
      description: 'Situated in the heart of Kigali, with easy access to business districts, shopping centers, and entertainment venues.'
    },
    {
      icon: <Shield className="w-8 h-8 text-[#B8860B]" />,
      title: 'Security & Safety',
      description: '24/7 security personnel and advanced surveillance systems for your peace of mind.'
    },
    {
      icon: <Wifi className="w-8 h-8 text-[#B8860B]" />,
      title: 'Modern Amenities',
      description: 'High-speed internet, smart home features, and state-of-the-art appliances in every unit.'
    },
    {
      icon: <Coffee className="w-8 h-8 text-[#B8860B]" />,
      title: 'Lifestyle Services',
      description: 'Access to premium facilities including a fully-equipped gym, rooftop garden, and communal spaces.'
    },
    {
      icon: <Clock className="w-8 h-8 text-[#B8860B]" />,
      title: 'Responsive Management',
      description: 'Dedicated property management team available around the clock to assist residents.'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#B8860B]" />,
      title: 'Quality Finishes',
      description: 'Premium materials and exceptional craftsmanship throughout all our apartments.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-cormorant font-medium text-gray-900 mb-4">
            Why Choose Fairyscape
          </h2>
          <div className="w-20 h-0.5 bg-[#B8860B] mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the perfect blend of luxury, comfort, and convenience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-[#B8860B]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#B8860B]/20 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;