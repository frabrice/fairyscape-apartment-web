import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface GalleryImage {
  url: string;
  category: string;
  title: string;
  description: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [preloadedImages, setPreloadedImages] = useState<Set<string>>(new Set());

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
    // Sitting Room images
    {
      url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_22.JPG',
      category: 'sitting-room',
      title: 'Modern Living Room',
      description: 'Contemporary design with comfortable seating',
    },
    {
      url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Aprt%20Suit%201.JPG',
      category: 'sitting-room',
      title: 'Luxury Suite Living Area',
      description: 'Elegant and spacious living room setup',
    },
    {
      url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Aprt%20Suit%202.JPG',
      category: 'sitting-room',
      title: 'Premium Living Space',
      description: 'Stylish and comfortable living area',
    },
    {
      url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Aprt%20Suit%203.JPG',
      category: 'sitting-room',
      title: 'Executive Suite',
      description: 'High-end furnishings and modern design',
    },
    {
      url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apt%20Suit%204.JPG',
      category: 'sitting-room',
      title: 'Deluxe Living Room',
      description: 'Sophisticated living space with premium amenities',
    },
    // Kitchen images
    {
      url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_23.JPG',
      category: 'kitchen',
      title: 'Modern Kitchen',
      description: 'Fully equipped kitchen with modern appliances',
    },
    {
      url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_22.JPG',
      category: 'kitchen',
      title: 'Open Plan Kitchen',
      description: 'Spacious kitchen with dining area',
    },
    {
      url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_24.JPG',
      category: 'kitchen',
      title: 'Designer Kitchen',
      description: 'Contemporary kitchen with premium finishes',
    },
    {
      url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_47.JPG',
      category: 'kitchen',
      title: 'Luxury Kitchen',
      description: 'High-end kitchen with quality appliances',
    },
    {
      url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_49.JPG',
      category: 'kitchen',
      title: 'Gourmet Kitchen',
      description: 'Chef-inspired kitchen design',
    },
    // Room images
    {
      url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_32.JPG',
      category: 'rooms',
      title: 'Master Bedroom',
      description: 'Luxurious master suite with premium bedding',
    },
    {
      url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_34.JPG',
      category: 'rooms',
      title: 'Guest Bedroom',
      description: 'Comfortable guest room with modern amenities',
    },
    {
      url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_35.JPG',
      category: 'rooms',
      title: 'Executive Bedroom',
      description: 'Elegant bedroom with workspace',
    },
    {
      url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_36.JPG',
      category: 'rooms',
      title: 'Premium Bedroom',
      description: 'Stylish bedroom with quality furnishings',
    },
    {
      url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_44.JPG',
      category: 'rooms',
      title: 'Deluxe Room',
      description: 'Spacious bedroom with sitting area',
    },
    {
      url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_46.JPG',
      category: 'rooms',
      title: 'Comfort Suite',
      description: 'Cozy bedroom with modern design',
    },
    // Bathroom images
    {
      url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_29.JPG',
      category: 'bathroom',
      title: 'Modern Bathroom',
      description: 'Contemporary bathroom with premium fixtures',
    },
    {
      url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_38.JPG',
      category: 'bathroom',
      title: 'Luxury Bathroom',
      description: 'Spa-like bathroom experience',
    },
    {
      url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_39.JPG',
      category: 'bathroom',
      title: 'En-suite Bathroom',
      description: 'Private bathroom with modern amenities',
    },
    // Garden images
    {
      url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_77.JPG',
      category: 'garden',
      title: 'Rooftop Garden',
      description: 'Peaceful garden with city views',
    },
    {
      url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_78.JPG',
      category: 'garden',
      title: 'Garden Lounge',
      description: 'Outdoor relaxation area',
    },
    {
      url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_88.JPG',
      category: 'garden',
      title: 'Garden Terrace',
      description: 'Beautiful terrace garden setup',
    },
    {
      url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_85.JPG',
      category: 'garden',
      title: 'Garden View',
      description: 'Scenic garden landscape',
    },
    {
      url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_80.JPG',
      category: 'garden',
      title: 'Garden Seating',
      description: 'Comfortable outdoor seating area',
    },
    // Outside images
    {
      url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_69.JPG',
      category: 'outside',
      title: 'Building Exterior',
      description: 'Modern architectural design',
    },
    {
      url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_70.JPG',
      category: 'outside',
      title: 'Property View',
      description: 'Panoramic view of the property',
    },
    {
      url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_71.JPG',
      category: 'outside',
      title: 'Building Entrance',
      description: 'Welcoming entrance area',
    },
    {
      url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_75.JPG',
      category: 'outside',
      title: 'Exterior View',
      description: 'Stunning exterior architecture',
    },
    {
      url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_82.JPG',
      category: 'outside',
      title: 'Property Grounds',
      description: 'Well-maintained property surroundings',
    },
    {
      url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_12.JPG',
      category: 'outside',
      title: 'Building Facade',
      description: 'Elegant building exterior',
    },
    {
      url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_10.JPG',
      category: 'outside',
      title: 'Street View',
      description: 'Property view from the street',
    },
    {
      url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_1.JPG',
      category: 'outside',
      title: 'Main Entrance',
      description: 'Grand entrance to the property',
    },
    // Gym image
    {
      url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Aprtmnt%20GyM.jpg',
      category: 'gym',
      title: 'Fitness Center',
      description: 'State-of-the-art gym equipment',
    },
    // Parking image
    {
      url: 'https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Packing%20Apt.JPG',
      category: 'outside',
      title: 'Parking Area',
      description: 'Secure parking facilities',
    }
  ];

  const [activeCategory, setActiveCategory] = useState<string>('sitting-room');

  const filteredImages = images.filter(img => img.category === activeCategory);

  // Preload images
  useEffect(() => {
    const preloadImage = (url: string) => {
      if (!preloadedImages.has(url)) {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          setPreloadedImages(prev => new Set([...prev, url]));
        };
      }
    };

    images.forEach(image => preloadImage(image.url));
  }, [preloadedImages]);

  // Handle category change
  const handleCategoryChange = (categoryId: string) => {
    setIsLoading(true);
    setActiveCategory(categoryId);
    setTimeout(() => setIsLoading(false), 100);
  };

  // Handle escape key to close lightbox
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Category Filter */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`
                px-4 py-2 rounded-full font-light transition-all duration-300 text-sm
                ${activeCategory === category.id
                  ? 'bg-[#B8860B] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
              `}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className={`
                group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer
                ${isLoading ? 'animate-pulse bg-gray-200' : ''}
              `}
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.title}
                className={`
                  w-full h-full object-cover transform group-hover:scale-110 transition-all duration-500
                  ${isLoading ? 'opacity-0' : 'opacity-100'}
                `}
                onLoad={() => setIsLoading(false)}
                style={{ 
                  opacity: preloadedImages.has(image.url) ? 1 : 0,
                  transition: 'opacity 0.3s ease-in-out'
                }}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-white font-semibold mb-2">{image.title}</h3>
                <p className="text-white/90 text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl w-full">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto max-h-[90vh] object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white hover:text-[#B8860B] transition-colors duration-300"
              onClick={() => setSelectedImage(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;