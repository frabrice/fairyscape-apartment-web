import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Gallery = () => {
  const images = [
    {
      url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Aprt%20Suit%201.JPG',
      title: 'Luxury Suite',
      description: 'Elegant living space with modern furnishings',
    },
    {
      url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apt%20Suit%204.JPG',
      title: 'Premium Apartment',
      description: 'Spacious and bright interior design',
    },
    {
      url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Aprtmnt%20GyM.jpg',
      title: 'Modern Gym',
      description: 'State-of-the-art fitness facilities',
    },
    {
      url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_88.JPG',
      title: 'Rooftop Garden',
      description: 'Peaceful outdoor relaxation area',
    },
    {
      url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Cozy%20Rooms%20Apt.JPG',
      title: 'Cozy Bedroom',
      description: 'Comfortable and stylish sleeping quarters',
    },
    {
      url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Packing%20Apt.JPG',
      title: 'Secure Parking',
      description: '24/7 monitored parking facilities',
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a visual tour of our premium apartments and facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg aspect-video shadow-lg"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#B8860B] bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-white font-semibold mb-2">{image.title}</h3>
                <p className="text-white/90 text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/gallery#top"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-2 bg-[#B8860B] hover:bg-[#8B6508] text-white px-8 py-3 rounded-lg transition-colors duration-300 shadow-lg group"
          >
            View All Gallery
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;