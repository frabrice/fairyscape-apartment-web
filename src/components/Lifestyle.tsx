import React from 'react';
import { Lock, Wifi, Home, Dumbbell, Flower2, Sparkles } from 'lucide-react';

const amenities = [
  {
    icon: Lock,
    title: 'Secure Parking',
    description: '24/7 monitored parking facilities with controlled access',
    image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Packing%20Apt.JPG',
  },
  {
    icon: Wifi,
    title: 'Free Wi-Fi',
    description: 'High-speed internet access throughout the premises',
    image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apt%20Wi-Fi.jpg',
  },
  {
    icon: Home,
    title: 'Cozy Rooms',
    description: 'Thoughtfully designed spaces for ultimate comfort',
    image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Cozy%20Rooms%20Apt.JPG',
  },
  {
    icon: Dumbbell,
    title: 'Equipped Gym',
    description: 'State-of-the-art fitness center with modern equipment',
    image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Aprtmnt%20GyM.jpg',
  },
  {
    icon: Flower2,
    title: 'Rooftop Garden',
    description: 'Serene green space with panoramic city views',
    image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_88.JPG',
  },
  {
    icon: Sparkles,
    title: 'Daily Cleaning',
    description: 'Professional housekeeping services included',
    image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_1.JPG',
  },
];

const Lifestyle = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <p className="section-label mb-4">Amenities</p>
            <h2 className="font-cormorant font-light text-gray-900 leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Curated for
              <br />
              <em className="italic">exceptional living</em>
            </h2>
          </div>
          <p className="font-jost font-light text-gray-500 text-sm leading-relaxed max-w-xs">
            Every amenity at Fairyscape is thoughtfully selected to enrich your daily life and elevate your living experience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(184,134,11,0.1)]">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div key={index} className="group relative bg-white overflow-hidden">
                {/* Image */}
                <div className="relative h-[200px] sm:h-[240px] lg:h-[260px] overflow-hidden">
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    style={{ transformOrigin: 'center' }}
                  />
                  {/* Gradient overlay always present but deepens on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent transition-opacity duration-500" />

                  {/* Description - revealed on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="font-jost text-sm text-white/85 leading-relaxed">
                      {amenity.description}
                    </p>
                  </div>
                </div>

                {/* Title bar */}
                <div className="flex items-center gap-3 px-5 py-4 border-b border-[rgba(184,134,11,0.1)] group-hover:border-[rgba(184,134,11,0.3)] transition-colors duration-300">
                  <div className="w-8 h-8 flex items-center justify-center bg-[rgba(184,134,11,0.08)] group-hover:bg-[rgba(184,134,11,0.15)] transition-colors duration-300">
                    <Icon size={16} className="text-[#B8860B]" />
                  </div>
                  <h3 className="font-jost text-sm font-medium tracking-wide text-gray-900">
                    {amenity.title}
                  </h3>
                  <span className="ml-auto w-5 h-px bg-[#B8860B] opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Lifestyle;
