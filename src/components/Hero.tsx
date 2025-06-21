import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-[120vh]">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: 'url("https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Home%20Image%20Apt.JPG")',
          height: '120vh'
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8">
            Welcome to <span className="text-[#B8860B]">Fairyscape</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
            Experience luxury living in the heart of Kigali. Where sophistication meets comfort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/book-tour#top" 
              className="bg-[#B8860B] hover:bg-[#8B6508] text-white px-8 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300 shadow-lg"
              onClick={() => window.scrollTo(0, 0)}
            >
              Book a Tour <ChevronRight size={20} />
            </Link>
            <Link 
              to="/gallery" 
              className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors duration-300 shadow-lg inline-flex items-center justify-center"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero