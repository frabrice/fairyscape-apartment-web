import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen min-h-[640px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Home%20Image%20Apt.JPG")',
        }}
      />

      {/* Layered overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

      {/* Top gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B8860B] to-transparent opacity-60" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
        {/* Eyebrow label */}
        <p className="section-label text-[#D4A017] mb-6 animate-fade-up delay-100">
          Kigali, Rwanda
        </p>

        {/* Main headline */}
        <h1 className="font-cormorant font-light text-white leading-[1.08] mb-6 animate-fade-up delay-200"
          style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
        >
          Live Beyond
          <br />
          <em className="italic font-light" style={{ color: '#D4A017' }}>Ordinary</em>
        </h1>

        {/* Subtext */}
        <p className="font-jost font-light text-white/70 text-base tracking-wide max-w-md mx-auto mb-10 animate-fade-up delay-300">
          Luxury furnished apartments in the heart of Kigali — where sophistication meets everyday comfort.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-400">
          <Link
            to="/book-tour"
            onClick={() => window.scrollTo(0, 0)}
            className="btn-gold inline-flex items-center gap-2"
          >
            Book a Tour
          </Link>
          <Link
            to="/gallery"
            className="btn-outline inline-flex items-center gap-2"
          >
            Explore Spaces
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-700">
        <span className="font-jost text-[0.65rem] tracking-[0.2em] uppercase text-white/50">Scroll</span>
        <ChevronDown size={18} className="text-white/40 bounce-slow" />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};

export default Hero;
