import React from 'react';
import { Users, Building2, Shield } from 'lucide-react';

const stats = [
  { icon: Users, value: '50+', label: 'Happy Residents' },
  { icon: Building2, value: '8', label: 'Luxury Units' },
  { icon: Shield, value: '24/7', label: 'Security' },
];

const Stats = () => {
  return (
    <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 -mt-8">
      <div className="grid grid-cols-3 bg-white shadow-[0_8px_48px_rgba(0,0,0,0.12)] border border-[rgba(184,134,11,0.1)]">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className={`flex flex-col items-center justify-center py-5 sm:py-6 px-2 sm:px-4 group hover:bg-[rgba(184,134,11,0.04)] transition-colors duration-300 ${
                index < stats.length - 1 ? 'border-r border-[rgba(184,134,11,0.15)]' : ''
              }`}
            >
              <Icon
                size={16}
                className="text-[#B8860B] mb-1.5 sm:mb-2 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="font-cormorant text-2xl sm:text-3xl font-light text-gray-900 leading-none mb-1">
                {stat.value}
              </div>
              <div className="section-label text-gray-400 text-[0.55rem] sm:text-[0.6rem] text-center">{stat.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
