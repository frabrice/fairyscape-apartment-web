import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, CalendarCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const contactInfo = [
  { icon: Phone, title: 'Phone', details: ['+250 788 351 957', '+250 780 849 228'] },
  { icon: Mail, title: 'Email', details: ['fairyscape250@gmail.com'] },
  { icon: MapPin, title: 'Location', details: ['10, KK 535 St', 'Kicukiro District, Rwanda'] },
  { icon: Clock, title: 'Office Hours', details: ['Mon – Fri: 9:00 AM – 6:00 PM', 'Sat: 10:00 AM – 4:00 PM'] },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <div className="relative pt-[72px]">
        <div className="h-[40vh] min-h-[240px] relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_1.JPG")' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/65" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8860B] to-transparent opacity-50" />
          <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
            <p className="section-label text-[#D4A017] mb-4">Get In Touch</p>
            <h1 className="font-cormorant font-light text-white" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
              Contact Us
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

        {/* Info cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="luxury-card p-7 group">
                <div className="w-10 h-10 flex items-center justify-center bg-[rgba(184,134,11,0.08)] group-hover:bg-[rgba(184,134,11,0.15)] transition-colors duration-300 mb-5">
                  <Icon size={18} className="text-[#B8860B]" />
                </div>
                <h3 className="font-cormorant text-lg font-medium text-gray-900 mb-3">{item.title}</h3>
                {item.details.map((d, i) => (
                  <p key={i} className="font-jost font-light text-sm text-gray-500 mb-1">{d}</p>
                ))}
              </div>
            );
          })}
        </div>

        {/* Book tour CTA */}
        <div className="max-w-2xl mx-auto">
          <div className="border border-[rgba(184,134,11,0.2)] p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-[#B8860B] opacity-25" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-[#B8860B] opacity-25" />
            <div className="w-10 h-10 flex items-center justify-center bg-[rgba(184,134,11,0.08)] mx-auto mb-5">
              <CalendarCheck size={18} className="text-[#B8860B]" />
            </div>
            <p className="section-label mb-3">Tours Available</p>
            <h3 className="font-cormorant font-light text-2xl text-gray-900 mb-3">
              Want to see our apartments in person?
            </h3>
            <p className="font-jost font-light text-sm text-gray-500 mb-8 leading-relaxed">
              Schedule a private tour and experience the perfect blend of comfort and elegance firsthand.
            </p>
            <Link to="/book-tour" onClick={() => window.scrollTo(0, 0)} className="btn-gold inline-block">
              Schedule a Tour
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
