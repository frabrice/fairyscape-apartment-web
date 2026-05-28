import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface GalleryImage {
  url: string;
  category: string;
  title: string;
  description: string;
}

const categories = [
  { name: 'Rooms', id: 'rooms' },
  { name: 'Garden', id: 'garden' },
  { name: 'Bathroom', id: 'bathroom' },
  { name: 'Sitting Rooms', id: 'sitting-room' },
  { name: 'Kitchen', id: 'kitchen' },
  { name: 'Gym', id: 'gym' },
  { name: 'Others', id: 'outside' },
] as const;

type CategoryId = typeof categories[number]['id'];

const images: GalleryImage[] = [
  // Rooms
  { url: 'https://res.cloudinary.com/dz4nl90xs/image/upload/v1777025755/Fairy_Scape_2_xnilqg.png', category: 'rooms', title: 'Master Bedroom', description: 'Luxurious master suite with premium bedding' },
  { url: 'https://res.cloudinary.com/dz4nl90xs/image/upload/v1777025760/Fairy_Scape_5_u2tcgh.png', category: 'rooms', title: 'Premium Bedroom', description: 'Stylish bedroom with quality furnishings' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_32.JPG', category: 'rooms', title: 'Guest Bedroom', description: 'Comfortable guest room with modern amenities' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_34.JPG', category: 'rooms', title: 'Executive Bedroom', description: 'Elegant bedroom with workspace' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_35.JPG', category: 'rooms', title: 'Deluxe Room', description: 'Spacious bedroom with sitting area' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_36.JPG', category: 'rooms', title: 'Comfort Suite', description: 'Cozy bedroom with modern design' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_44.JPG', category: 'rooms', title: 'Luxury Room', description: 'Premium room with refined finishes' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_46.JPG', category: 'rooms', title: 'Suite Bedroom', description: 'Elegant suite with curated decor' },

  // Garden
  { url: 'https://res.cloudinary.com/dz4nl90xs/image/upload/v1777025768/Fairy_scape_13_gowlxu.png', category: 'garden', title: 'Rooftop Terrace', description: 'Panoramic city views from the rooftop' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_77.JPG', category: 'garden', title: 'Rooftop Garden', description: 'Peaceful garden with city views' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_78.JPG', category: 'garden', title: 'Garden Lounge', description: 'Outdoor relaxation area' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_88.JPG', category: 'garden', title: 'Garden Terrace', description: 'Beautiful terrace garden setup' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_85.JPG', category: 'garden', title: 'Garden View', description: 'Scenic garden landscape' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_80.JPG', category: 'garden', title: 'Garden Seating', description: 'Comfortable outdoor seating area' },

  // Bathroom
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_29.JPG', category: 'bathroom', title: 'Modern Bathroom', description: 'Contemporary bathroom with premium fixtures' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_38.JPG', category: 'bathroom', title: 'Luxury Bathroom', description: 'Spa-like bathroom experience' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_39.JPG', category: 'bathroom', title: 'En-suite Bathroom', description: 'Private bathroom with modern amenities' },

  // Sitting Rooms
  { url: 'https://res.cloudinary.com/dz4nl90xs/image/upload/v1777025758/Fairy_Scape_3_if9t3g.png', category: 'sitting-room', title: 'Luxury Living Area', description: 'Sophisticated lounge with premium furnishings' },
  { url: 'https://res.cloudinary.com/dz4nl90xs/image/upload/v1777025756/Fairy_scape_15_jgowjv.png', category: 'sitting-room', title: 'Open Living Space', description: 'Bright and elegant sitting area' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_22.JPG', category: 'sitting-room', title: 'Modern Living Room', description: 'Contemporary design with comfortable seating' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Aprt%20Suit%201.JPG', category: 'sitting-room', title: 'Luxury Suite Living Area', description: 'Elegant and spacious living room setup' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Aprt%20Suit%202.JPG', category: 'sitting-room', title: 'Premium Living Space', description: 'Stylish and comfortable living area' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Aprt%20Suit%203.JPG', category: 'sitting-room', title: 'Executive Suite', description: 'High-end furnishings and modern design' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apt%20Suit%204.JPG', category: 'sitting-room', title: 'Deluxe Living Room', description: 'Sophisticated living space with premium amenities' },

  // Kitchen
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_23.JPG', category: 'kitchen', title: 'Modern Kitchen', description: 'Fully equipped kitchen with modern appliances' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_24.JPG', category: 'kitchen', title: 'Designer Kitchen', description: 'Contemporary kitchen with premium finishes' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_47.JPG', category: 'kitchen', title: 'Luxury Kitchen', description: 'High-end kitchen with quality appliances' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_49.JPG', category: 'kitchen', title: 'Gourmet Kitchen', description: 'Chef-inspired kitchen design' },

  // Gym
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Aprtmnt%20GyM.jpg', category: 'gym', title: 'Fitness Center', description: 'State-of-the-art gym equipment' },

  // Others
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_69.JPG', category: 'outside', title: 'Building Exterior', description: 'Modern architectural design' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_70.JPG', category: 'outside', title: 'Property View', description: 'Panoramic view of the property' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_71.JPG', category: 'outside', title: 'Building Entrance', description: 'Welcoming entrance area' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_75.JPG', category: 'outside', title: 'Exterior View', description: 'Stunning exterior architecture' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_82.JPG', category: 'outside', title: 'Property Grounds', description: 'Well-maintained property surroundings' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_12.JPG', category: 'outside', title: 'Building Facade', description: 'Elegant building exterior' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_1.JPG', category: 'outside', title: 'Main Entrance', description: 'Grand entrance to the property' },
  { url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Packing%20Apt.JPG', category: 'outside', title: 'Parking Area', description: 'Secure parking facilities' },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('rooms');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredImages = images.filter(img => img.category === activeCategory);
  const activeLabel = categories.find(c => c.id === activeCategory)?.name ?? '';
  const count = filteredImages.length;

  const openLightbox = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const lightboxPrev = () => {
    const i = (selectedIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedIndex(i);
    setSelectedImage(filteredImages[i]);
  };

  const lightboxNext = () => {
    const i = (selectedIndex + 1) % filteredImages.length;
    setSelectedIndex(i);
    setSelectedImage(filteredImages[i]);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') setSelectedImage(null);
      if (e.key === 'ArrowLeft') lightboxPrev();
      if (e.key === 'ArrowRight') lightboxNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedImage, selectedIndex, filteredImages]);

  const handleCategoryChange = (id: CategoryId) => {
    setActiveCategory(id);
    gridRef.current?.scrollTo({ top: 0 });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero banner */}
      <div className="h-[42vh] min-h-[260px] relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://res.cloudinary.com/dz4nl90xs/image/upload/v1777025758/Fairy_Scape_3_if9t3g.png")' }}
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

      {/* Main layout: sidebar + grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* ── Side navigation ── */}
          <aside className="lg:w-52 flex-shrink-0">
            {/* Mobile: horizontal scroll tabs */}
            <div className="lg:hidden flex gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`flex-shrink-0 font-jost text-[0.68rem] tracking-[0.14em] uppercase px-4 py-2 border transition-all duration-200 ${
                    activeCategory === cat.id
                      ? 'bg-[#B8860B] text-white border-[#B8860B]'
                      : 'border-gray-200 text-gray-500 hover:border-[#B8860B] hover:text-[#B8860B] bg-white'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Desktop: vertical sidebar */}
            <div className="hidden lg:block sticky top-28">
              <p className="font-jost text-[0.6rem] tracking-[0.2em] uppercase text-gray-300 mb-5">Browse by</p>
              <nav className="space-y-1">
                {categories.map((cat) => {
                  const catCount = images.filter(img => img.category === cat.id).length;
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`w-full text-left flex items-center justify-between px-4 py-3 transition-all duration-200 group border-l-2 ${
                        isActive
                          ? 'border-[#B8860B] bg-[rgba(184,134,11,0.06)]'
                          : 'border-transparent hover:border-[rgba(184,134,11,0.3)] hover:bg-[rgba(184,134,11,0.03)]'
                      }`}
                    >
                      <span className={`font-jost text-[0.75rem] tracking-[0.1em] uppercase transition-colors duration-200 ${
                        isActive ? 'text-[#B8860B]' : 'text-gray-500 group-hover:text-[#B8860B]'
                      }`}>
                        {cat.name}
                      </span>
                      <span className={`font-jost text-[0.6rem] tabular-nums transition-colors duration-200 ${
                        isActive ? 'text-[#B8860B]/60' : 'text-gray-300 group-hover:text-[#B8860B]/40'
                      }`}>
                        {catCount}
                      </span>
                    </button>
                  );
                })}
              </nav>

              {/* Thin gold divider */}
              <div className="mt-8 h-px bg-gradient-to-r from-[#B8860B]/30 to-transparent" />

              <div className="mt-6">
                <p className="font-jost text-[0.6rem] tracking-[0.15em] uppercase text-gray-300 mb-1">Showing</p>
                <p className="font-cormorant text-2xl font-light text-gray-900">{count}</p>
                <p className="font-jost text-[0.65rem] text-gray-400">{activeLabel} photo{count !== 1 ? 's' : ''}</p>
              </div>
            </div>
          </aside>

          {/* ── Image grid ── */}
          <div ref={gridRef} className="flex-1 min-w-0">
            {/* Section heading */}
            <div className="flex items-end justify-between mb-6 pb-4 border-b border-gray-100">
              <div>
                <h2 className="font-cormorant text-2xl sm:text-3xl font-light text-gray-900">{activeLabel}</h2>
                <p className="font-jost text-[0.65rem] text-gray-400 mt-0.5 tracking-wide">{count} image{count !== 1 ? 's' : ''}</p>
              </div>
              <span className="hidden sm:block font-cormorant text-5xl font-light text-gray-100 leading-none select-none">
                {String(categories.findIndex(c => c.id === activeCategory) + 1).padStart(2, '0')}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
              {filteredImages.map((image, index) => (
                <div
                  key={`${activeCategory}-${index}`}
                  className="group relative overflow-hidden aspect-[4/3] cursor-pointer"
                  onClick={() => openLightbox(image, index)}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                    <h3 className="font-cormorant text-base font-light text-white">{image.title}</h3>
                    <p className="font-jost text-[0.65rem] text-white/65 mt-0.5">{image.description}</p>
                  </div>
                  <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#B8860B] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-3 right-3 font-jost text-[0.55rem] text-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              ))}
            </div>
          </div>
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
              className="w-full h-auto max-h-[80vh] object-contain"
            />

            {/* Caption */}
            <div className="mt-4 text-center">
              <h3 className="font-cormorant text-lg font-light text-white mb-1">{selectedImage.title}</h3>
              <p className="font-jost text-xs text-white/40">{selectedIndex + 1} / {filteredImages.length}</p>
            </div>

            {/* Close */}
            <button
              className="absolute -top-10 right-0 text-white/50 hover:text-[#B8860B] transition-colors duration-200"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              <X size={22} />
            </button>

            {/* Prev */}
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-white/40 hover:text-[#B8860B] transition-colors duration-200 hidden sm:block"
              onClick={(e) => { e.stopPropagation(); lightboxPrev(); }}
              aria-label="Previous"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Next */}
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-white/40 hover:text-[#B8860B] transition-colors duration-200 hidden sm:block"
              onClick={(e) => { e.stopPropagation(); lightboxNext(); }}
              aria-label="Next"
            >
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
