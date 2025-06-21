import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BedDouble, Bath, Maximize, Wifi, Tv, Car, Trees as Tree } from 'lucide-react';

const FloorPlans = () => {
  const [activeFloor, setActiveFloor] = useState('ground');

  const apartments = {
    ground: [
      {
        id: 'g1',
        name: 'Apartment A',
        size: '60m²',
        bedrooms: 2,
        bathrooms: 2,
        price: '$50/night',
        features: ['Rooftop Garden', 'Free Wi-Fi', 'Equipped Gym', 'Parking Space'],
        image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Aprt%20Suit%201.JPG',
      },
      {
        id: 'g2',
        name: 'Apartment B',
        size: '60m²',
        bedrooms: 2,
        bathrooms: 2,
        price: '$50/night',
        features: ['Rooftop Garden', 'Free Wi-Fi', 'Equipped Gym', 'Parking Space'],
        image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Aprt%20Suit%202.JPG',
      },
      {
        id: 'g3',
        name: 'Apartment C',
        size: '60m²',
        bedrooms: 2,
        bathrooms: 2,
        price: '$50/night',
        features: ['Rooftop Garden', 'Free Wi-Fi', 'Equipped Gym', 'Parking Space'],
        image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Aprt%20Suit%203.JPG',
      },
      {
        id: 'g4',
        name: 'Apartment D',
        size: '60m²',
        bedrooms: 2,
        bathrooms: 2,
        price: '$50/night',
        features: ['Rooftop Garden', 'Free Wi-Fi', 'Equipped Gym', 'Parking Space'],
        image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apt%20Suit%204.JPG',
      },
    ],
    first: [
      {
        id: 'f1',
        name: 'Apartment A',
        size: '60m²',
        bedrooms: 2,
        bathrooms: 2,
        price: '$50/night',
        features: ['Rooftop Garden', 'Free Wi-Fi', 'Equipped Gym', 'Parking Space'],
        image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Aprt%20Suit%202.JPG',
      },
      {
        id: 'f2',
        name: 'Apartment B',
        size: '60m²',
        bedrooms: 2,
        bathrooms: 2,
        price: '$50/night',
        features: ['Rooftop Garden', 'Free Wi-Fi', 'Equipped Gym', 'Parking Space'],
        image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Aprt%20Suit%203.JPG',
      },
      {
        id: 'f3',
        name: 'Apartment C',
        size: '60m²',
        bedrooms: 2,
        bathrooms: 2,
        price: '$50/night',
        features: ['Rooftop Garden', 'Free Wi-Fi', 'Equipped Gym', 'Parking Space'],
        image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apt%20Suit%204.JPG',
      },
      {
        id: 'f4',
        name: 'Apartment D',
        size: '60m²',
        bedrooms: 2,
        bathrooms: 2,
        price: '$50/night',
        features: ['Rooftop Garden', 'Free Wi-Fi', 'Equipped Gym', 'Parking Space'],
        image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Aprt%20Suit%201.JPG',
      },
    ],
  };

  const amenityIcons = {
    'Rooftop Garden': <Tree className="w-5 h-5" />,
    'Free Wi-Fi': <Wifi className="w-5 h-5" />,
    'Equipped Gym': <Tv className="w-5 h-5" />,
    'Parking Space': <Car className="w-5 h-5" />,
  };

  return (
    <section id="floor-plans" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-cormorant font-medium text-gray-900 mb-4">
            Available Floor Plans
          </h2>
          <div className="w-20 h-0.5 bg-[#B8860B] mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover your perfect living space with our thoughtfully designed floor plans
          </p>
        </div>

        {/* Floor Selection */}
        <div className="flex justify-center gap-4 mb-8">
          {['ground', 'first'].map((floor) => (
            <button
              key={floor}
              onClick={() => setActiveFloor(floor)}
              className={`
                px-6 py-2 rounded-lg text-sm transition-all duration-300
                ${activeFloor === floor
                  ? 'bg-[#B8860B] text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100'}
              `}
            >
              {floor === 'ground' ? 'Ground Floor' : '1st Floor'}
            </button>
          ))}
        </div>

        {/* Floor Plan Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {apartments[activeFloor].map((apartment) => (
            <div
              key={apartment.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-40">
                <img
                  src={apartment.image}
                  alt={apartment.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4">
                <div className="mb-2">
                  <h3 className="text-sm font-medium text-gray-900">{apartment.name}</h3>
                  <p className="text-[#B8860B] font-medium text-sm">{apartment.price}</p>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-3 text-xs text-gray-600">
                  <div className="flex items-center gap-1">
                    <Maximize className="w-3.5 h-3.5" />
                    <span>{apartment.size}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BedDouble className="w-3.5 h-3.5" />
                    <span>{apartment.bedrooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-3.5 h-3.5" />
                    <span>{apartment.bathrooms}</span>
                  </div>
                </div>

                <div className="border-t pt-3">
                  <div className="grid grid-cols-2 gap-1.5">
                    {apartment.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1 text-[10px] text-gray-600"
                      >
                        {amenityIcons[feature] || <div className="w-3.5 h-3.5" />}
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link 
                  to="/book-tour#top"
                  onClick={() => window.scrollTo(0, 0)}
                  className="block w-full mt-3 bg-[#B8860B] hover:bg-[#8B6508] text-white py-1.5 rounded text-xs transition-colors duration-300 text-center"
                >
                  Schedule Viewing
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FloorPlans;