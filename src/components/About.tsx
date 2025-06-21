import React from 'react';
import { Shield, Wifi, Coffee, Key } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-[#B8860B]" />,
      title: '24/7 Security',
      description: 'Round-the-clock security personnel and advanced surveillance systems.',
    },
    {
      icon: <Wifi className="w-8 h-8 text-[#B8860B]" />,
      title: 'Smart Living',
      description: 'State-of-the-art home automation and high-speed internet.',
    },
    {
      icon: <Coffee className="w-8 h-8 text-[#B8860B]" />,
      title: 'Premium Amenities',
      description: 'Exclusive access to our rooftop lounge and fitness center.',
    },
    {
      icon: <Key className="w-8 h-8 text-[#B8860B]" />,
      title: 'Concierge Service',
      description: '24-hour concierge service for all your needs.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Experience Luxury Living
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ScaryEscape offers an unparalleled living experience in Kigali, combining modern luxury with comfort and convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About