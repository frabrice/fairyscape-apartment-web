import React from 'react';
import { Users, Building2, Shield } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: <Users className="w-5 h-5 text-[#B8860B]" />,
      value: '50+',
      label: 'Happy Residents',
    },
    {
      icon: <Building2 className="w-5 h-5 text-[#B8860B]" />,
      value: '8',
      label: 'Luxury Units',
    },
    {
      icon: <Shield className="w-5 h-5 text-[#B8860B]" />,
      value: '24/7',
      label: 'Security',
    },
  ];

  return (
    <div className="relative -mt-20 z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-3 bg-white rounded-xl shadow-xl py-3 px-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center transform hover:scale-105 transition-transform duration-300"
          >
            <div className="flex justify-center mb-1">{stat.icon}</div>
            <div className="text-xl font-cormorant font-medium text-gray-900 leading-none">
              {stat.value}
            </div>
            <div className="text-[10px] text-gray-600 leading-tight">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;