import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Phone, Mail, MapPin, CalendarCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BookNow = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <div className="h-[48vh] min-h-[300px] relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_1.JPG")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8860B] to-transparent opacity-50" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <p className="section-label text-[#D4A017] mb-4">Reservations</p>
          <h1 className="font-cormorant font-light text-white" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
            Book Your Stay
          </h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-20">
        <div className="max-w-xl mb-14">
          <p className="section-label mb-4">Choose a Method</p>
          <h2 className="font-cormorant font-light text-gray-900 leading-tight" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)' }}>
            Select your preferred
            <br />
            <em className="italic">booking option</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Airbnb */}
          <div className="luxury-card p-8 group">
            <div className="w-10 h-10 flex items-center justify-center bg-[rgba(184,134,11,0.08)] group-hover:bg-[rgba(184,134,11,0.15)] transition-colors duration-300 mb-6">
              <ExternalLink size={18} className="text-[#B8860B]" />
            </div>
            <h3 className="font-cormorant text-xl font-medium text-gray-900 mb-2">Book with Airbnb</h3>
            <p className="font-jost font-light text-sm text-gray-500 mb-7 leading-relaxed">
              Reserve through our Airbnb listing with instant confirmation and traveler protection.
            </p>
            <a
              href="https://www.airbnb.com/rooms/1360785158351791125?guests=1&adults=1&s=67&unique_share_id=55d13210-98bf-4942-a72a-9ce6861117dd"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2"
            >
              Book on Airbnb
              <ExternalLink size={13} />
            </a>
          </div>

          {/* Booking.com */}
          <div className="luxury-card p-8 group">
            <div className="w-10 h-10 flex items-center justify-center bg-[rgba(184,134,11,0.08)] group-hover:bg-[rgba(184,134,11,0.15)] transition-colors duration-300 mb-6">
              <ExternalLink size={18} className="text-[#B8860B]" />
            </div>
            <h3 className="font-cormorant text-xl font-medium text-gray-900 mb-2">Book with Booking.com</h3>
            <p className="font-jost font-light text-sm text-gray-500 mb-7 leading-relaxed">
              Reserve through Booking.com for best rate guarantee and flexible cancellation options.
            </p>
            <a
              href="https://www.booking.com/hotel/rw/fairyscape-apartments-kigali-kigali.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2"
            >
              Book on Booking.com
              <ExternalLink size={13} />
            </a>
          </div>

          {/* Direct contact */}
          <div className="luxury-card p-8 group">
            <div className="w-10 h-10 flex items-center justify-center bg-[rgba(184,134,11,0.08)] group-hover:bg-[rgba(184,134,11,0.15)] transition-colors duration-300 mb-6">
              <Phone size={18} className="text-[#B8860B]" />
            </div>
            <h3 className="font-cormorant text-xl font-medium text-gray-900 mb-2">Get in Touch Directly</h3>
            <p className="font-jost font-light text-sm text-gray-500 mb-6 leading-relaxed">
              Contact us directly for special rates and custom arrangements.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-[#B8860B]" />
                <span className="font-jost font-light text-sm text-gray-600">+250 788 351 957</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-[#B8860B]" />
                <span className="font-jost font-light text-sm text-gray-600">fairyscape250@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={14} className="text-[#B8860B]" />
                <span className="font-jost font-light text-sm text-gray-600">10, KK 535 St, Kicukiro District</span>
              </div>
            </div>
          </div>

          {/* Book a tour */}
          <div className="luxury-card p-8 group">
            <div className="w-10 h-10 flex items-center justify-center bg-[rgba(184,134,11,0.08)] group-hover:bg-[rgba(184,134,11,0.15)] transition-colors duration-300 mb-6">
              <CalendarCheck size={18} className="text-[#B8860B]" />
            </div>
            <h3 className="font-cormorant text-xl font-medium text-gray-900 mb-2">Book a Tour</h3>
            <p className="font-jost font-light text-sm text-gray-500 mb-7 leading-relaxed">
              Schedule a private viewing of our luxury apartments before committing.
            </p>
            <Link
              to="/book-tour"
              onClick={() => window.scrollTo(0, 0)}
              className="btn-gold inline-block"
            >
              Schedule Tour
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookNow;
