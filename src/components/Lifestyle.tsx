import React from 'react';
import { Lock, Wifi, Home, Dumbbell, Flower2, Sparkles } from 'lucide-react';

const Lifestyle = () => {
  const amenities = [
    {
      icon: <Lock className="w-6 h-6 text-[#B8860B]" />,
      title: 'Secure Parking',
      description: '24/7 monitored parking facilities with controlled access',
      image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Packing%20Apt.JPG',
    },
    {
      icon: <Wifi className="w-6 h-6 text-[#B8860B]" />,
      title: 'Free Wi-Fi',
      description: 'High-speed internet access throughout the premises',
      image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apt%20Wi-Fi.jpg',
    },
    {
      icon: <Home className="w-6 h-6 text-[#B8860B]" />,
      title: 'Cozy Rooms',
      description: 'Thoughtfully designed spaces for ultimate comfort',
      image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Cozy%20Rooms%20Apt.JPG',
    },
    {
      icon: <Dumbbell className="w-6 h-6 text-[#B8860B]" />,
      title: 'Equipped Gym',
      description: 'State-of-the-art fitness center with modern equipment',
      image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Aprtmnt%20GyM.jpg',
    },
    {
      icon: <Flower2 className="w-6 h-6 text-[#B8860B]" />,
      title: 'Rooftop Garden',
      description: 'Serene green space with panoramic city views',
      image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_88.JPG',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#B8860B]" />,
      title: 'Daily Cleaning',
      description: 'Professional housekeeping services',
      image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_1.JPG',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-cormorant font-medium text-gray-900 mb-4">
            Premium Amenities & Services
          </h2>
          <div className="w-20 h-0.5 bg-[#B8860B] mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Experience unparalleled comfort with our carefully curated selection of premium amenities and services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="relative h-[250px] overflow-hidden rounded-lg">
                <img
                  src={amenity.image}
                  alt={amenity.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Content that appears on hover */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white/90 text-sm leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              </div>

              {/* Smaller title card that overlaps the image */}
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm py-1.5 px-3 rounded-lg shadow-lg flex items-center gap-2">
                <div className="p-1 bg-[#B8860B]/10 rounded">
                  {amenity.icon}
                </div>
                <h3 className="text-xs font-medium text-gray-900">
                  {amenity.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lifestyle;