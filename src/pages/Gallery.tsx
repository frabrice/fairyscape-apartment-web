import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface GalleryImage {
  url: string;
  category: string;
  title: string;
  description: string;
}

const categories = [
  { name: 'Sitting Rooms', id: 'sitting-room' },
  { name: 'Kitchen', id: 'kitchen' },
  { name: 'Rooms', id: 'rooms' },
  { name: 'Bathroom', id: 'bathroom' },
  { name: 'Garden', id: 'garden' },
  { name: 'Gym', id: 'gym' },
  { name: 'Outside', id: 'outside' },
] as const;

const images: GalleryImage[] = [
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_22.JPG', category: 'sitting-room', title: 'Modern Living Room', description: 'Contemporary design with comfortable seating' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Aprt%20Suit%201.JPG', category: 'sitting-room', title: 'Luxury Suite Living Area', description: 'Elegant and spacious living room setup' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Aprt%20Suit%202.JPG', category: 'sitting-room', title: 'Premium Living Space', description: 'Stylish and comfortable living area' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Aprt%20Suit%203.JPG', category: 'sitting-room', title: 'Executive Suite', description: 'High-end furnishings and modern design' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apt%20Suit%204.JPG', category: 'sitting-room', title: 'Deluxe Living Room', description: 'Sophisticated living space with premium amenities' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_23.JPG', category: 'kitchen', title: 'Modern Kitchen', description: 'Fully equipped kitchen with modern appliances' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_22.JPG', category: 'kitchen', title: 'Open Plan Kitchen', description: 'Spacious kitchen with dining area' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_24.JPG', category: 'kitchen', title: 'Designer Kitchen', description: 'Contemporary kitchen with premium finishes' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_47.JPG', category: 'kitchen', title: 'Luxury Kitchen', description: 'High-end kitchen with quality appliances' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_49.JPG', category: 'kitchen', title: 'Gourmet Kitchen', description: 'Chef-inspired kitchen design' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_32.JPG', category: 'rooms', title: 'Master Bedroom', description: 'Luxurious master suite with premium bedding' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_34.JPG', category: 'rooms', title: 'Guest Bedroom', description: 'Comfortable guest room with modern amenities' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_35.JPG', category: 'rooms', title: 'Executive Bedroom', description: 'Elegant bedroom with workspace' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_36.JPG', category: 'rooms', title: 'Premium Bedroom', description: 'Stylish bedroom with quality furnishings' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_44.JPG', category: 'rooms', title: 'Deluxe Room', description: 'Spacious bedroom with sitting area' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_46.JPG', category: 'rooms', title: 'Comfort Suite', description: 'Cozy bedroom with modern design' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_29.JPG', category: 'bathroom', title: 'Modern Bathroom', description: 'Contemporary bathroom with premium fixtures' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_38.JPG', category: 'bathroom', title: 'Luxury Bathroom', description: 'Spa-like bathroom experience' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_39.JPG', category: 'bathroom', title: 'En-suite Bathroom', description: 'Private bathroom with modern amenities' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_77.JPG', category: 'garden', title: 'Rooftop Garden', description: 'Peaceful garden with city views' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_78.JPG', category: 'garden', title: 'Garden Lounge', description: 'Outdoor relaxation area' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_88.JPG', category: 'garden', title: 'Garden Terrace', description: 'Beautiful terrace garden setup' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_85.JPG', category: 'garden', title: 'Garden View', description: 'Scenic garden landscape' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_80.JPG', category: 'garden', title: 'Garden Seating', description: 'Comfortable outdoor seating area' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_69.JPG', category: 'outside', title: 'Building Exterior', description: 'Modern architectural design' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_70.JPG', category: 'outside', title: 'Property View', description: 'Panoramic view of the property' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_71.JPG', category: 'outside', title: 'Building Entrance', description: 'Welcoming entrance area' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_75.JPG', category: 'outside', title: 'Exterior View', description: 'Stunning exterior architecture' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_82.JPG', category: 'outside', title: 'Property Grounds', description: 'Well-maintained property surroundings' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_12.JPG', category: 'outside', title: 'Building Facade', description: 'Elegant building exterior' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_10.JPG', category: 'outside', title: 'Street View', description: 'Property view from the street' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_1.JPG', category: 'outside', title: 'Main Entrance', description: 'Grand entrance to the property' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Aprtmnt%20GyM.jpg', category: 'gym', title: 'Fitness Center', description: 'State-of-the-art gym equipment' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Packing%20Apt.JPG', category: 'outside', title: 'Parking Area', description: 'Secure parking facilities' },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<string>('sitting-room');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [preloadedImages, setPreloadedImages] = useState<Set<string>>(new Set());

  const filteredImages = images.filter(img => img.category === activeCategory);

  useEffect(() => {
    images.forEach(({ url }) => {
      if (!preloadedImages.has(url)) {
        const img = new Image();
        img.src = url;
        img.onload = () => setPreloadedImages(prev => new Set([...prev, url]));
      }
    });
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelectedImage(null); };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

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
          <p className="section-label text-[#D4A017] mb-4">Visual Tour</p>
          <h1 className="font-cormorant font-light text-white" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
            Gallery
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`font-jost text-[0.7rem] tracking-[0.15em] uppercase px-5 py-2.5 border transition-all duration-250 ${
                activeCategory === cat.id
                  ? 'bg-[#B8860B] text-white border-[#B8860B]'
                  : 'border-gray-200 text-gray-500 hover:border-[#B8860B] hover:text-[#B8860B]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden aspect-[4/3] cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{
                  opacity: preloadedImages.has(image.url) ? 1 : 0,
                  transition: 'opacity 0.4s ease, transform 0.7s ease',
                }}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <h3 className="font-cormorant text-lg font-light text-white mb-1">{image.title}</h3>
                <p className="font-jost text-xs text-white/70">{image.description}</p>
              </div>
              {/* Gold corner accent on hover */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-[#B8860B] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            {/* Caption */}
            <div className="mt-4 text-center">
              <h3 className="font-cormorant text-lg font-light text-white mb-1">{selectedImage.title}</h3>
              <p className="font-jost text-xs text-white/50">{selectedImage.description}</p>
            </div>
            <button
              className="absolute -top-10 right-0 text-white/60 hover:text-[#B8860B] transition-colors duration-200"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
