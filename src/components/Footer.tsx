import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-light tracking-wider text-white hover:text-[#B8860B] transition-colors duration-300">
              Fairyscape
            </Link>
            <p className="mt-4 text-sm text-white/70">
              Luxury living redefined in the heart of Kigali. Experience comfort, style, and sophistication.
            </p>
            <div className="flex gap-4 mt-6">
              <a 
                href="https://www.instagram.com/fairyscape_apartments/profilecard/?igsh=Y284NzFwd3R0YXll" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#B8860B] transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/floor-plans" className="block text-sm text-white/70 hover:text-[#B8860B] transition-colors duration-300">
                Floor Plans
              </Link>
              <Link to="/gallery" className="block text-sm text-white/70 hover:text-[#B8860B] transition-colors duration-300">
                Gallery
              </Link>
              <Link to="/contact" className="block text-sm text-white/70 hover:text-[#B8860B] transition-colors duration-300">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm">
                <MapPin size={18} className="text-[#B8860B] flex-shrink-0 mt-1" />
                <span className="text-white/70">10, KK 535 St, Kicukiro District, Rwanda</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Phone size={18} className="text-[#B8860B] flex-shrink-0 mt-1" />
                <div className="text-white/70">
                  <p>+250 788 351 957</p>
                  <p>+250 780 849 228</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Mail size={18} className="text-[#B8860B] flex-shrink-0 mt-1" />
                <div className="text-white/70">
                  <p>fairyscape250@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-white font-semibold mb-4">Office Hours</h3>
            <div className="space-y-2 text-sm text-white/70">
              <p>Monday - Friday</p>
              <p className="font-light">9:00 AM - 6:00 PM</p>
              <p className="mt-4">Saturday</p>
              <p className="font-light">10:00 AM - 4:00 PM</p>
              <p className="mt-4">Sunday</p>
              <p className="font-light">Closed</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="text-center text-sm text-white/50">
            <p>&copy; {currentYear} Fairyscape. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;