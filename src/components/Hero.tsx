import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden bg-[#0e0e0e]">

      {/* ── LEFT PANEL: editorial text ── */}
      <div className="relative z-10 flex flex-col justify-between lg:w-[48%] px-8 md:px-14 lg:px-16 pt-36 pb-12 lg:pt-40">

        {/* Top eyebrow */}
        <div className="flex items-center gap-4 mb-auto">
          <span className="w-8 h-px bg-[#B8860B]" />
          <span className="font-jost text-[0.65rem] tracking-[0.3em] uppercase text-[#B8860B]">
            Kigali, Rwanda — Est. 2023
          </span>
        </div>

        {/* Main headline */}
        <div className="mt-12 mb-10">
          {/* Oversized outline number */}
          <div
            className="font-cormorant font-light leading-none select-none mb-2 animate-fade-in"
            style={{
              fontSize: 'clamp(6rem, 14vw, 11rem)',
              color: 'transparent',
              WebkitTextStroke: '1px rgba(184,134,11,0.18)',
              lineHeight: 1,
            }}
          >
            08
          </div>

          <h1
            className="font-cormorant font-light text-white leading-[1.04] animate-fade-up delay-100"
            style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5rem)' }}
          >
            Luxury
            <br />
            <em className="italic" style={{ color: '#D4A017' }}>Furnished</em>
            <br />
            Apartments
          </h1>

          <p className="font-jost font-light text-white/45 text-sm leading-relaxed mt-6 max-w-xs animate-fade-up delay-200">
            Eight meticulously designed residences in the heart of Kigali — where every detail speaks of refinement.
          </p>
        </div>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
          <Link
            to="/book-tour"
            onClick={() => window.scrollTo(0, 0)}
            className="btn-gold inline-flex items-center justify-center gap-3 group"
          >
            Book a Tour
            <span className="inline-block w-4 h-px bg-white transition-all duration-300 group-hover:w-6" />
          </Link>
          <Link
            to="/gallery"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-3 font-jost text-[0.72rem] tracking-[0.14em] uppercase text-white/50 hover:text-[#D4A017] transition-colors duration-300 group"
          >
            <span className="inline-block w-4 h-px bg-current transition-all duration-300 group-hover:w-6" />
            View Gallery
          </Link>
        </div>

        {/* Bottom stats row */}
        <div className="flex gap-8 mt-12 pt-8 border-t border-white/[0.07] animate-fade-up delay-400">
          {[
            { value: '50+', label: 'Happy Residents' },
            { value: '8', label: 'Luxury Units' },
            { value: '24/7', label: 'Security' },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-cormorant text-2xl font-light text-white leading-none">{s.value}</div>
              <div className="font-jost text-[0.6rem] tracking-[0.18em] uppercase text-white/30 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT PANEL: stacked images ── */}
      <div className="relative lg:w-[52%] min-h-[55vh] lg:min-h-screen flex-shrink-0 overflow-hidden">

        {/* Main full-bleed image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Home%20Image%20Apt.JPG")',
          }}
        />

        {/* Overlay gradient — left edge blends with dark left panel */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0e] via-[#0e0e0e]/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e]/50 to-transparent" />

        {/* Floating card — availability */}
        <div
          className="absolute bottom-10 right-8 bg-white/[0.07] backdrop-blur-md border border-white/10 px-6 py-5 animate-fade-up delay-500"
          style={{ minWidth: '200px' }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-jost text-[0.6rem] tracking-[0.2em] uppercase text-white/50">Available Now</span>
          </div>
          <div className="font-cormorant text-xl font-light text-white mb-1">From 51,500 FRW</div>
          <div className="font-jost text-[0.65rem] text-white/35">per night · 88m² · 2 bed</div>
        </div>

        {/* Floating thumbnail — second image */}
        <div className="absolute top-1/3 -left-8 lg:-left-12 w-28 h-36 lg:w-36 lg:h-48 overflow-hidden border-2 border-[#0e0e0e] shadow-2xl animate-fade-up delay-400">
          <img
            src="https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Aprt%20Suit%201.JPG"
            alt="Apartment interior"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Vertical text label on right edge */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
          <span
            className="font-jost text-[0.55rem] tracking-[0.25em] uppercase text-white/20"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            Fairyscape Apartments
          </span>
          <span className="w-px h-16 bg-white/10" />
        </div>
      </div>

      {/* ── Scrolling marquee strip ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden bg-[#B8860B]/90 backdrop-blur-sm py-2.5">
        <div
          ref={marqueeRef}
          className="flex gap-0 whitespace-nowrap"
          style={{
            animation: 'marquee 28s linear infinite',
          }}
        >
          {[...Array(3)].map((_, i) => (
            <span key={i} className="flex items-center gap-8 px-8">
              {['Luxury Living', 'Kigali Rwanda', 'Prime Location', '8 Units Available', 'Daily Housekeeping', 'Rooftop Garden', 'Equipped Gym', '24/7 Security', 'Free Wi-Fi'].map((t) => (
                <React.Fragment key={t}>
                  <span className="font-jost text-[0.65rem] tracking-[0.2em] uppercase text-white/90">{t}</span>
                  <span className="text-white/40 text-xs">✦</span>
                </React.Fragment>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Marquee keyframes injected via style tag */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
};

export default Hero;
