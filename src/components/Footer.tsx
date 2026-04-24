import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: '#111' }} className="text-white/80">
      {/* Gold top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#B8860B] to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="font-cormorant text-2xl tracking-[0.08em] text-white hover:text-[#D4A017] transition-colors duration-300 block mb-4"
            >
              Fairyscape
            </Link>
            <div className="h-px w-10 bg-[#B8860B] mb-4" />
            <p className="font-jost font-light text-sm text-white/50 leading-relaxed mb-6">
              Luxury living redefined in the heart of Kigali. Experience comfort, style, and sophistication.
            </p>
            <a
              href="https://www.instagram.com/fairyscape_apartments/profilecard/?igsh=Y284NzFwd3R0YXll"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/40 hover:text-[#B8860B] transition-colors duration-300 group"
            >
              <Instagram size={18} />
              <span className="font-jost text-xs tracking-widest uppercase">Instagram</span>
              <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-jost text-[0.7rem] tracking-[0.2em] uppercase text-white/30 mb-6">
              Explore
            </h3>
            <div className="space-y-3">
              {[
                { label: 'Floor Plans', to: '/floor-plans' },
                { label: 'Gallery', to: '/gallery' },
                { label: 'Contact', to: '/contact' },
                { label: 'Book a Tour', to: '/book-tour' },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="block font-jost font-light text-sm text-white/50 hover:text-[#B8860B] transition-colors duration-300 group flex items-center gap-1"
                >
                  <span className="h-px w-0 bg-[#B8860B] group-hover:w-3 transition-all duration-300 inline-block" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-jost text-[0.7rem] tracking-[0.2em] uppercase text-white/30 mb-6">
              Contact
            </h3>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-[#B8860B] flex-shrink-0 mt-0.5" />
                <span className="font-jost font-light text-sm text-white/50 leading-relaxed">
                  10, KK 535 St, Kicukiro District, Rwanda
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={15} className="text-[#B8860B] flex-shrink-0 mt-0.5" />
                <div className="font-jost font-light text-sm text-white/50 space-y-1">
                  <p>+250 788 351 957</p>
                  <p>+250 780 849 228</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={15} className="text-[#B8860B] flex-shrink-0 mt-0.5" />
                <p className="font-jost font-light text-sm text-white/50">fairyscape250@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-jost text-[0.7rem] tracking-[0.2em] uppercase text-white/30 mb-6">
              Office Hours
            </h3>
            <div className="space-y-4 font-jost font-light text-sm text-white/50">
              <div>
                <p className="text-white/30 text-xs tracking-wider uppercase mb-1">Mon – Fri</p>
                <p>9:00 AM – 6:00 PM</p>
              </div>
              <div>
                <p className="text-white/30 text-xs tracking-wider uppercase mb-1">Saturday</p>
                <p>10:00 AM – 4:00 PM</p>
              </div>
              <div>
                <p className="text-white/30 text-xs tracking-wider uppercase mb-1">Sunday</p>
                <p>Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-jost font-light text-xs text-white/25 tracking-wide">
            &copy; {currentYear} Fairyscape. All rights reserved.
          </p>
          <p className="font-jost font-light text-xs text-white/20 tracking-wider uppercase">
            Kigali, Rwanda
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
