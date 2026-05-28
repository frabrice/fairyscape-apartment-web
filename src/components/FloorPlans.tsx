import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BedDouble, Bath, Maximize, Wifi, Car, Trees as Tree, Dumbbell } from 'lucide-react';

type FloorKey = 'ground' | 'first';

interface Apartment {
  id: string;
  name: string;
  size: string;
  bedrooms: number;
  bathrooms: number;
  price: string;
  features: string[];
  image: string;
}

const apartments: Record<FloorKey, Apartment[]> = {
  ground: [
    {
      id: 'g1',
      name: 'Apartment A',
      size: '88m²',
      bedrooms: 2,
      bathrooms: 2,
      price: '51,500 FRW',
      features: ['Rooftop Garden', 'Free Wi-Fi', 'Equipped Gym', 'Parking Space'],
      image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Aprt%20Suit%201.JPG',
    },
    {
      id: 'g2',
      name: 'Apartment B',
      size: '88m²',
      bedrooms: 2,
      bathrooms: 2,
      price: '51,500 FRW',
      features: ['Rooftop Garden', 'Free Wi-Fi', 'Equipped Gym', 'Parking Space'],
      image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Aprt%20Suit%202.JPG',
    },
    {
      id: 'g3',
      name: 'Apartment C',
      size: '88m²',
      bedrooms: 2,
      bathrooms: 2,
      price: '51,500 FRW',
      features: ['Rooftop Garden', 'Free Wi-Fi', 'Equipped Gym', 'Parking Space'],
      image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Aprt%20Suit%203.JPG',
    },
    {
      id: 'g4',
      name: 'Apartment D',
      size: '88m²',
      bedrooms: 2,
      bathrooms: 2,
      price: '51,500 FRW',
      features: ['Rooftop Garden', 'Free Wi-Fi', 'Equipped Gym', 'Parking Space'],
      image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apt%20Suit%204.JPG',
    },
  ],
  first: [
    {
      id: 'f1',
      name: 'Apartment A',
      size: '88m²',
      bedrooms: 2,
      bathrooms: 2,
      price: '51,500 FRW',
      features: ['Rooftop Garden', 'Free Wi-Fi', 'Equipped Gym', 'Parking Space'],
      image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Aprt%20Suit%202.JPG',
    },
    {
      id: 'f2',
      name: 'Apartment B',
      size: '88m²',
      bedrooms: 2,
      bathrooms: 2,
      price: '51,500 FRW',
      features: ['Rooftop Garden', 'Free Wi-Fi', 'Equipped Gym', 'Parking Space'],
      image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Aprt%20Suit%203.JPG',
    },
    {
      id: 'f3',
      name: 'Apartment C',
      size: '88m²',
      bedrooms: 2,
      bathrooms: 2,
      price: '51,500 FRW',
      features: ['Rooftop Garden', 'Free Wi-Fi', 'Equipped Gym', 'Parking Space'],
      image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apt%20Suit%204.JPG',
    },
    {
      id: 'f4',
      name: 'Apartment D',
      size: '88m²',
      bedrooms: 2,
      bathrooms: 2,
      price: '51,500 FRW',
      features: ['Rooftop Garden', 'Free Wi-Fi', 'Equipped Gym', 'Parking Space'],
      image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Aprt%20Suit%201.JPG',
    },
  ],
};

const featureIcons: Record<string, React.ReactNode> = {
  'Rooftop Garden': <Tree size={13} />,
  'Free Wi-Fi': <Wifi size={13} />,
  'Equipped Gym': <Dumbbell size={13} />,
  'Parking Space': <Car size={13} />,
};

const FloorPlans = () => {
  const [activeFloor, setActiveFloor] = useState<FloorKey>('ground');

  return (
    <section id="floor-plans" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <p className="section-label mb-4">Floor Plans</p>
            <h2
              className="font-cormorant font-light text-gray-900 leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Find your
              <br />
              <em className="italic">perfect space</em>
            </h2>
          </div>

          {/* Floor tabs */}
          <div className="flex border border-[rgba(184,134,11,0.25)]">
            {(['ground', 'first'] as FloorKey[]).map((floor) => (
              <button
                key={floor}
                onClick={() => setActiveFloor(floor)}
                className={`px-6 py-2.5 font-jost text-[0.72rem] tracking-[0.12em] uppercase transition-all duration-300 ${
                  activeFloor === floor
                    ? 'bg-[#B8860B] text-white'
                    : 'text-gray-500 hover:text-[#B8860B] bg-white'
                }`}
              >
                {floor === 'ground' ? 'Ground Floor' : '1st Floor'}
              </button>
            ))}
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {apartments[activeFloor].map((apt, idx) => (
            <div key={apt.id} className="luxury-card group overflow-hidden flex flex-col">
              {/* Image */}
              <div className="relative h-40 sm:h-44 overflow-hidden">
                <img
                  src={apt.image}
                  alt={apt.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Price badge */}
                <div className="absolute bottom-3 left-3 bg-[#B8860B] text-white px-3 py-1">
                  <span className="font-jost text-[0.7rem] tracking-wide">{apt.price}<span className="opacity-70">/night</span></span>
                </div>
              </div>

              {/* Details */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-cormorant text-lg font-medium text-gray-900">{apt.name}</h3>
                  <span className="font-jost text-[0.65rem] tracking-widest uppercase text-gray-400">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Specs */}
                <div className="flex gap-4 mb-4 pb-4 border-b border-[rgba(184,134,11,0.1)]">
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <Maximize size={13} className="text-[#B8860B]" />
                    <span className="font-jost text-xs">{apt.size}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <BedDouble size={13} className="text-[#B8860B]" />
                    <span className="font-jost text-xs">{apt.bedrooms} Bed</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <Bath size={13} className="text-[#B8860B]" />
                    <span className="font-jost text-xs">{apt.bathrooms} Bath</span>
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-y-2 mb-5">
                  {apt.features.map((f) => (
                    <div key={f} className="flex items-center gap-1.5 text-gray-400">
                      <span className="text-[#B8860B]">{featureIcons[f]}</span>
                      <span className="font-jost text-[0.68rem]">{f}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  to="/book-tour"
                  onClick={() => window.scrollTo(0, 0)}
                  className="mt-auto btn-gold text-center block"
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
