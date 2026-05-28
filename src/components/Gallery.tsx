import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const previewImages = [
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Aprt%20Suit%201.JPG', title: 'Luxury Suite', description: 'Elegant living space with modern furnishings' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apt%20Suit%204.JPG', title: 'Premium Apartment', description: 'Spacious and bright interior design' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Aprtmnt%20GyM.jpg', title: 'Modern Gym', description: 'State-of-the-art fitness facilities' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_88.JPG', title: 'Rooftop Garden', description: 'Peaceful outdoor relaxation area' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Cozy%20Rooms%20Apt.JPG', title: 'Cozy Bedroom', description: 'Comfortable and stylish sleeping quarters' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Packing%20Apt.JPG', title: 'Secure Parking', description: '24/7 monitored parking facilities' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <p className="section-label mb-4">Gallery</p>
            <h2
              className="font-cormorant font-light text-gray-900 leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              See it
              <br />
              <em className="italic">for yourself</em>
            </h2>
          </div>
          <Link
            to="/gallery"
            onClick={() => window.scrollTo(0, 0)}
            className="group inline-flex items-center gap-2 font-jost text-[0.72rem] tracking-[0.15em] uppercase text-[#B8860B] hover:text-[#8B6508] transition-colors duration-200"
          >
            View All Photos
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Grid — 3 large + 3 smaller */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
          {previewImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden cursor-pointer ${index === 0 ? 'col-span-2 md:col-span-1 row-span-2' : ''}`}
              style={{ aspectRatio: index === 0 ? 'auto' : '4/3', minHeight: index === 0 ? 'clamp(200px, 45vw, 360px)' : undefined }}
              onClick={() => window.scrollTo(0, 0)}
            >
              <Link to="/gallery" onClick={() => window.scrollTo(0, 0)}>
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  <h3 className="font-cormorant text-base font-light text-white">{image.title}</h3>
                  <p className="font-jost text-[0.68rem] text-white/60 mt-0.5">{image.description}</p>
                </div>
                {/* Corner accent */}
                <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#B8860B] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
