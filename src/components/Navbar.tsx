import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, LayoutGrid, Image, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', icon: <Home size={16} />, path: '/' },
    { name: 'Floor Plans', icon: <LayoutGrid size={16} />, path: '/floor-plans' },
    { name: 'Gallery', icon: <Image size={16} />, path: '/gallery' },
    { name: 'Contact', icon: <Phone size={16} />, path: '/contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="text-[#B8860B] text-2xl font-cormorant hover:text-[#8B6508] transition-colors duration-300 tracking-wide"
            >
              Fairyscape
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`
                      group flex items-center gap-1.5 px-2 py-1.5 text-sm font-light tracking-wide
                      transition-all duration-300 relative
                      ${isActive ? 'text-[#B8860B]' : 'text-gray-600 hover:text-gray-900'}
                    `}
                  >
                    <span className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B8860B] transform origin-left transition-transform duration-300" />
                    )}
                  </Link>
                );
              })}
              <Link
                to="/book-now"
                className="ml-6 bg-[#B8860B] hover:bg-[#8B6508] text-white px-6 py-2 rounded-lg text-sm transition-colors duration-300 shadow-sm hover:shadow-md"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <Link
              to="/book-now"
              className="bg-[#B8860B] hover:bg-[#8B6508] text-white px-4 py-1.5 rounded-lg text-sm transition-colors duration-300 shadow-sm hover:shadow-md mr-4"
            >
              Book Now
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`
                    flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-light tracking-wide
                    transition-all duration-300
                    ${isActive ? 'text-[#B8860B] bg-[#B8860B]/5' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}
                  `}
                  onClick={() => setIsOpen(false)}
                >
                  <span className={`transition-transform duration-300 ${isActive ? 'scale-110' : ''}`}>
                    {item.icon}
                  </span>
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;