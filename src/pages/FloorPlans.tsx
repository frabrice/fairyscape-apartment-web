import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BedDouble, Bath, Maximize, Wifi, Tv, Car, Trees as Tree } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FloorPlans = () => {
  const [activeFloor, setActiveFloor] = useState('ground');

  const apartments = {
    ground: [
      {
        id: 'g1',
        name: 'Apartment A',
        size: '88m²',
        bedrooms: 2,
        bathrooms: 2,
        price: '75,000frw/night',
        features: ['Rooftop Garden', 'Free Wi-Fi', 'Equipped Gym', 'Parking Space'],
        image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Aprt%20Suit%201.JPG',
      },
      {
        id: 'g2',
        name: 'Apartment B',
        size: '88m²',
        bedrooms: 2,
        bathrooms: 2,
        price: '75,000frw/night',
        features: ['Rooftop Garden', 'Free Wi-Fi', 'Equipped Gym', 'Parking Space'],
        image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Aprt%20Suit%202.JPG',
      },
      {
        id: 'g3',
        name: 'Apartment C',
        size: '88m²',
        bedrooms: 2,
        bathrooms: 2,
        price: '75,000frw/night',
        features: ['Rooftop Garden', 'Free Wi-Fi', 'Equipped Gym', 'Parking Space'],
        image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Aprt%20Suit%203.JPG',
      },
      {
        id: 'g4',
        name: 'Apartment D',
        size: '88m²',
        bedrooms: 2,
        bathrooms: 2,
        price: '75,000frw/night',
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
        price: '75,000frw/night',
        features: ['Rooftop Garden', 'Free Wi-Fi', 'Equipped Gym', 'Parking Space'],
        image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Aprt%20Suit%202.JPG',
      },
      {
        id: 'f2',
        name: 'Apartment B',
        size: '88m²',
        bedrooms: 2,
        bathrooms: 2,
        price: '75,000frw/night',
        features: ['Rooftop Garden', 'Free Wi-Fi', 'Equipped Gym', 'Parking Space'],
        image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Aprt%20Suit%203.JPG',
      },
      {
        id: 'f3',
        name: 'Apartment C',
        size: '88m²',
        bedrooms: 2,
        bathrooms: 2,
        price: '75,000frw/night',
        features: ['Rooftop Garden', 'Free Wi-Fi', 'Equipped Gym', 'Parking Space'],
        image: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apt%20Suit%204.JPG',
      },
      {
        id: 'f4',
        name: 'Apartment D',
        size: '88m²',
        bedrooms: 2,
        bathrooms: 2,
        price: '75,000frw/night',
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
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="h-[40vh] relative">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Aprt%20Suit%201.JPG")',
            }}
          >
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-light text-white mb-4">Our Floor Plans</h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto px-4">
                Discover your perfect living space
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floor Plans Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Floor Selection */}
        <div className="flex justify-center gap-4 mb-12">
          {['ground', 'first'].map((floor) => (
            <button
              key={floor}
              onClick={() => setActiveFloor(floor)}
              className={`
                px-8 py-3 rounded-lg font-light transition-all duration-300
                ${activeFloor === floor
                  ? 'bg-[#B8860B] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
              `}
            >
              {floor === 'ground' ? 'Ground Floor' : '1st Floor'}
            </button>
          ))}
        </div>

        {/* Floor Plan Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {apartments[activeFloor].map((apartment) => (
            <div
              key={apartment.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64">
                <img
                  src={apartment.image}
                  alt={apartment.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{apartment.name}</h3>
                    <p className="text-[#B8860B] font-bold mt-1">{apartment.price}</p>
                  </div>
                  <span className="px-3 py-1 bg-[#B8860B]/10 text-[#B8860B] rounded-full text-sm">
                    {activeFloor.charAt(0).toUpperCase() + activeFloor.slice(1)} Floor
                  </span>
                </div>

                <div className="flex flex-wrap gap-6 mb-6 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Maximize className="w-5 h-5" />
                    <span>{apartment.size}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BedDouble className="w-5 h-5" />
                    <span>{apartment.bedrooms} Bedrooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="w-5 h-5" />
                    <span>{apartment.bathrooms} Bathrooms</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Features</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {apartment.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        {amenityIcons[feature]}
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link 
                  to="/book-tour#top"
                  onClick={() => window.scrollTo(0, 0)}
                  className="block w-full mt-6 bg-[#B8860B] hover:bg-[#8B6508] text-white py-2 rounded-lg transition-colors duration-300 shadow-md text-center"
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