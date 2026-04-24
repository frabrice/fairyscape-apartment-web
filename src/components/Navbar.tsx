import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Floor Plans', path: '/floor-plans' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/98 backdrop-blur-md shadow-[0_1px_0_rgba(184,134,11,0.15)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Link
            to="/"
            className="font-cormorant text-2xl tracking-[0.08em] transition-colors duration-300"
            style={{ color: scrolled ? 'var(--gold)' : 'white' }}
          >
            Fairyscape
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative font-jost text-[0.78rem] tracking-[0.14em] uppercase font-light transition-colors duration-300 pb-0.5 ${
                    isActive
                      ? scrolled ? 'text-[#B8860B]' : 'text-[#D4A017]'
                      : scrolled ? 'text-gray-700 hover:text-[#B8860B]' : 'text-white/85 hover:text-white'
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-[#B8860B] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
            <Link
              to="/book-now"
              className="btn-gold rounded-none ml-4 inline-block"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-4">
            <Link
              to="/book-now"
              className="btn-gold rounded-none text-[0.7rem] px-4 py-2"
            >
              Book Now
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors duration-300 ${scrolled ? 'text-gray-700' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-[rgba(184,134,11,0.12)] px-6 py-4 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2.5 font-jost text-[0.78rem] tracking-[0.14em] uppercase font-light border-b border-gray-50 transition-colors duration-200 ${
                  isActive ? 'text-[#B8860B]' : 'text-gray-600 hover:text-[#B8860B]'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
