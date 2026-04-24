import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BedDouble, Bath, Maximize, Wifi, Car, Trees as Tree, Dumbbell } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
      price: '75,000 FRW',
      features: ['Rooftop Garden', 'Free Wi-Fi', 'Equipped Gym', 'Parking Space'],
      image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Aprt%20Suit%201.JPG',
    },
    {
      id: 'g2',
      name: 'Apartment B',
      size: '88m²',
      bedrooms: 2,
      bathrooms: 2,
      price: '75,000 FRW',
      features: ['Rooftop Garden', 'Free Wi-Fi', 'Equipped Gym', 'Parking Space'],
      image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Aprt%20Suit%202.JPG',
    },
    {
      id: 'g3',
      name: 'Apartment C',
      size: '88m²',
      bedrooms: 2,
      bathrooms: 2,
      price: '75,000 FRW',
      features: ['Rooftop Garden', 'Free Wi-Fi', 'Equipped Gym', 'Parking Space'],
      image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Aprt%20Suit%203.JPG',
    },
    {
      id: 'g4',
      name: 'Apartment D',
      size: '88m²',
      bedrooms: 2,
      bathrooms: 2,
      price: '75,000 FRW',
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
      price: '75,000 FRW',
      features: ['Rooftop Garden', 'Free Wi-Fi', 'Equipped Gym', 'Parking Space'],
      image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Aprt%20Suit%202.JPG',
    },
    {
      id: 'f2',
      name: 'Apartment B',
      size: '88m²',
      bedrooms: 2,
      bathrooms: 2,
      price: '75,000 FRW',
      features: ['Rooftop Garden', 'Free Wi-Fi', 'Equipped Gym', 'Parking Space'],
      image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Aprt%20Suit%203.JPG',
    },
    {
      id: 'f3',
      name: 'Apartment C',
      size: '88m²',
      bedrooms: 2,
      bathrooms: 2,
      price: '75,000 FRW',
      features: ['Rooftop Garden', 'Free Wi-Fi', 'Equipped Gym', 'Parking Space'],
      image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apt%20Suit%204.JPG',
    },
    {
      id: 'f4',
      name: 'Apartment D',
      size: '88m²',
      bedrooms: 2,
      bathrooms: 2,
      price: '75,000 FRW',
      features: ['Rooftop Garden', 'Free Wi-Fi', 'Equipped Gym', 'Parking Space'],
      image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Aprt%20Suit%201.JPG',
    },
  ],
};

const featureIcons: Record<string, React.ReactNode> = {
  'Rooftop Garden': <Tree size={14} />,
  'Free Wi-Fi': <Wifi size={14} />,
  'Equipped Gym': <Dumbbell size={14} />,
  'Parking Space': <Car size={14} />,
};

const FloorPlans = () => {
  const [activeFloor, setActiveFloor] = useState<FloorKey>('ground');

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <div className="h-[48vh] min-h-[300px] relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Aprt%20Suit%201.JPG")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8860B] to-transparent opacity-50" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <p className="section-label text-[#D4A017] mb-4">Accommodations</p>
          <h1 className="font-cormorant font-light text-white" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
            Our Floor Plans
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

        {/* Floor selector */}
        <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="section-label mb-2">Select Floor</p>
            <h2 className="font-cormorant font-light text-2xl text-gray-900">
              <em className="italic">Find your perfect space</em>
            </h2>
          </div>
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

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {apartments[activeFloor].map((apt, idx) => (
            <div key={apt.id} className="luxury-card group overflow-hidden">
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={apt.image}
                  alt={apt.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 bg-[#B8860B] text-white px-4 py-1.5">
                  <span className="font-jost text-sm tracking-wide">{apt.price}<span className="opacity-70 text-xs">/night</span></span>
                </div>
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1">
                  <span className="font-jost text-[0.65rem] tracking-widest uppercase">
                    {activeFloor === 'ground' ? 'Ground' : '1st'} Floor
                  </span>
                </div>
              </div>

              <div className="p-7">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-cormorant text-xl font-medium text-gray-900">{apt.name}</h3>
                  <span className="font-jost text-[0.65rem] tracking-widest uppercase text-gray-300">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Specs */}
                <div className="flex gap-6 mb-5 pb-5 border-b border-[rgba(184,134,11,0.1)]">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Maximize size={14} className="text-[#B8860B]" />
                    <span className="font-jost text-sm">{apt.size}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <BedDouble size={14} className="text-[#B8860B]" />
                    <span className="font-jost text-sm">{apt.bedrooms} Bedrooms</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Bath size={14} className="text-[#B8860B]" />
                    <span className="font-jost text-sm">{apt.bathrooms} Bathrooms</span>
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-7">
                  {apt.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-gray-400">
                      <span className="text-[#B8860B]">{featureIcons[f]}</span>
                      <span className="font-jost text-xs">{f}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/book-tour"
                  onClick={() => window.scrollTo(0, 0)}
                  className="btn-gold text-center block"
                >
                  Schedule Viewing
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FloorPlans;
