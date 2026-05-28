import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const sliderImages = [
  'https://res.cloudinary.com/dz4nl90xs/image/upload/v1777025758/Fairy_Scape_3_if9t3g.png',
  'https://res.cloudinary.com/dz4nl90xs/image/upload/v1777025756/Fairy_scape_15_jgowjv.png',
  'https://res.cloudinary.com/dz4nl90xs/image/upload/v1777025755/Fairy_Scape_2_xnilqg.png',
  'https://res.cloudinary.com/dz4nl90xs/image/upload/v1777025760/Fairy_Scape_5_u2tcgh.png',
  'https://res.cloudinary.com/dz4nl90xs/image/upload/v1777025768/Fairy_scape_13_gowlxu.png',
];

const thumbnails = [
  {
    src: 'https://res.cloudinary.com/dz4nl90xs/image/upload/v1777025756/Fairy_scape_15_jgowjv.png',
    label: 'Living Room',
  },
  {
    src: 'https://res.cloudinary.com/dz4nl90xs/image/upload/v1777025759/Fairy_Scape_4_yzlbjk.png',
    label: 'Bedroom',
  },
  {
    src: 'https://res.cloudinary.com/dz4nl90xs/image/upload/v1777025768/Fairy_scape_13_gowlxu.png',
    label: 'Rooftop Garden',
  },
];

const INTERVAL = 5000;

const Hero = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (index: number) => {
    if (animating || index === current) return;
    setCurrent(index);
    setAnimating(true);
    setTimeout(() => setAnimating(false), 900);
  };

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % sliderImages.length);
    }, INTERVAL);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  return (
    <div
      className="relative flex flex-col lg:flex-row overflow-hidden bg-[#0e0e0e]"
      style={{ minHeight: '100svh' }}
    >
      {/* ── LEFT PANEL ── */}
      <div className="relative z-10 flex flex-col lg:w-1/4 px-6 sm:px-10 lg:px-12 pt-20 sm:pt-24 lg:pt-28 pb-6 lg:pb-8 flex-shrink-0">

        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-5">
          <span className="w-6 sm:w-8 h-px bg-[#B8860B]" />
          <span className="font-jost text-[0.6rem] sm:text-[0.65rem] tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#B8860B]">
            Kigali, Rwanda — Est. 2023
          </span>
        </div>

        {/* Oversized outline number */}
        <div
          className="hidden sm:block font-cormorant font-light leading-none select-none animate-fade-in"
          style={{
            fontSize: 'clamp(3rem, 7vw, 7.5rem)',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(184,134,11,0.18)',
            lineHeight: 1,
            marginBottom: '-0.15em',
          }}
        >
          08
        </div>

        {/* Main headline */}
        <h1
          className="font-cormorant font-light text-white leading-[1.04] animate-fade-up delay-100"
          style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '0.85rem' }}
        >
          Luxury
          <br />
          <em className="italic" style={{ color: '#D4A017' }}>Furnished</em>
          <br />
          Apartments
        </h1>

        <p className="font-jost font-light text-white/45 text-sm leading-relaxed max-w-xs animate-fade-up delay-200 mb-6">
          Eight meticulously designed residences in the heart of Kigali — where every detail speaks of refinement.
        </p>

        {/* CTAs */}
        <div className="flex flex-row flex-wrap gap-4 animate-fade-up delay-300 mb-auto">
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
            className="inline-flex items-center gap-3 font-jost text-[0.72rem] tracking-[0.14em] uppercase text-white/50 hover:text-[#D4A017] transition-colors duration-300 group self-center"
          >
            <span className="inline-block w-4 h-px bg-current transition-all duration-300 group-hover:w-6" />
            View Gallery
          </Link>
        </div>

        {/* Stats row */}
        <div className="flex gap-6 sm:gap-8 pt-5 mt-5 border-t border-white/[0.07] animate-fade-up delay-400">
          {[
            { value: '50+', label: 'Happy Residents' },
            { value: '8', label: 'Luxury Units' },
            { value: '24/7', label: 'Security' },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-cormorant text-xl sm:text-2xl font-light text-white leading-none">{s.value}</div>
              <div className="font-jost text-[0.55rem] sm:text-[0.58rem] tracking-[0.18em] uppercase text-white/30 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div
        className="relative lg:w-3/4 flex-shrink-0 overflow-hidden flex flex-col"
        style={{ minHeight: '55vw', maxHeight: '70vh' }}
      >
        {/* ── Image slider ── */}
        <div className="relative flex-1 overflow-hidden" style={{ minHeight: '200px' }}>

          {sliderImages.map((src, i) => (
            <div
              key={i}
              className="absolute inset-0"
              style={{
                zIndex: i === current ? 2 : 0,
                opacity: i === current ? 1 : 0,
                transition: 'opacity 0.9s ease-in-out',
              }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url("${src}")`,
                  transform: i === current ? 'scale(1.04)' : 'scale(1)',
                  transition: i === current ? 'transform 6s ease-out' : 'none',
                }}
              />
            </div>
          ))}

          {/* Overlays */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0e0e0e] via-[#0e0e0e]/5 to-transparent pointer-events-none" />
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0e0e0e]/10 to-[#0e0e0e]/30 pointer-events-none" />

          {/* Availability card */}
          <div className="absolute z-20 top-4 right-4 sm:top-6 sm:right-6 bg-white/[0.08] backdrop-blur-md border border-white/10 px-4 sm:px-5 py-3 sm:py-4 animate-fade-up delay-500">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="font-jost text-[0.55rem] sm:text-[0.58rem] tracking-[0.2em] uppercase text-white/50">Available Now</span>
            </div>
            <div className="font-cormorant text-base sm:text-lg font-light text-white mb-0.5">From 85,500 FRW</div>
            <div className="font-jost text-[0.6rem] sm:text-[0.62rem] text-white/35">per night · 88m² · 2 bed</div>
          </div>

          {/* Slide indicators */}
          <div className="absolute z-20 bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-2.5">
            {sliderImages.map((_, i) => (
              <button
                key={i}
                onClick={() => { goTo(i); startTimer(); }}
                aria-label={`Go to slide ${i + 1}`}
              >
                <span
                  className="block h-px transition-all duration-500"
                  style={{
                    width: i === current ? '28px' : '14px',
                    background: i === current ? '#D4A017' : 'rgba(255,255,255,0.3)',
                  }}
                />
              </button>
            ))}
            <div className="relative ml-1 w-10 h-px bg-white/15 overflow-hidden">
              <div
                key={current}
                className="absolute left-0 top-0 h-full bg-[#D4A017]"
                style={{ animation: `slideProgress ${INTERVAL}ms linear forwards` }}
              />
            </div>
          </div>

          {/* Vertical label — desktop only */}
          <div className="absolute right-5 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-3">
            <span
              className="font-jost text-[0.52rem] tracking-[0.25em] uppercase text-white/20"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              Fairyscape Apartments
            </span>
            <span className="w-px h-12 bg-white/10" />
          </div>
        </div>

        {/* ── 3-image thumbnail strip ── */}
        <div className="flex h-20 sm:h-24 lg:h-32 flex-shrink-0">
          {thumbnails.map((thumb, i) => (
            <div key={i} className="relative flex-1 overflow-hidden group cursor-pointer">
              <img
                src={thumb.src}
                alt={thumb.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-jost text-[0.55rem] sm:text-[0.6rem] tracking-[0.18em] uppercase text-white/50 group-hover:text-white/90 transition-colors duration-400">
                  {thumb.label}
                </span>
                <span className="block mt-1.5 h-px w-0 bg-[#B8860B] group-hover:w-8 transition-all duration-500" />
              </div>
              {i < thumbnails.length - 1 && (
                <div className="absolute right-0 top-2 bottom-2 w-px bg-white/10" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Scrolling marquee strip ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden bg-[#B8860B]/90 backdrop-blur-sm py-1.5 sm:py-2">
        <div
          ref={marqueeRef}
          className="flex whitespace-nowrap"
          style={{ animation: 'marquee 28s linear infinite' }}
        >
          {[...Array(3)].map((_, i) => (
            <span key={i} className="flex items-center gap-8 px-8">
              {['Luxury Living', 'Kigali Rwanda', 'Prime Location', '8 Units Available', 'Daily Housekeeping', 'Rooftop Garden', 'Equipped Gym', '24/7 Security', 'Free Wi-Fi'].map((t) => (
                <React.Fragment key={t}>
                  <span className="font-jost text-[0.6rem] sm:text-[0.62rem] tracking-[0.2em] uppercase text-white/90">{t}</span>
                  <span className="text-white/40 text-[0.5rem]">✦</span>
                </React.Fragment>
              ))}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes slideProgress {
          0%   { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default Hero;
