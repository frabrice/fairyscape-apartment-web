import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, CalendarCheck } from 'lucide-react';

const contactItems = [
  { icon: Phone, title: 'Phone', details: ['+250 788 351 957', '+250 780 849 228'] },
  { icon: Mail, title: 'Email', details: ['fairyscape250@gmail.com'] },
  { icon: MapPin, title: 'Location', details: ['10, KK 535 St', 'Kicukiro District, Rwanda'] },
  { icon: Clock, title: 'Office Hours', details: ['Mon – Fri: 9:00 AM – 6:00 PM', 'Sat: 10:00 AM – 4:00 PM'] },
];

const Contact = () => {
  return (
    <section className="py-24" style={{ background: 'var(--cream)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="max-w-xl mb-14">
          <p className="section-label mb-4">Contact</p>
          <h2
            className="font-cormorant font-light text-gray-900 leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            We'd love to
            <br />
            <em className="italic">hear from you</em>
          </h2>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="luxury-card p-7 group bg-white">
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

        {/* Tour CTA */}
        <div className="max-w-2xl mx-auto">
          <div className="border border-[rgba(184,134,11,0.2)] bg-white p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-[#B8860B] opacity-25" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-[#B8860B] opacity-25" />
            <div className="w-10 h-10 flex items-center justify-center bg-[rgba(184,134,11,0.08)] mx-auto mb-5">
              <CalendarCheck size={18} className="text-[#B8860B]" />
            </div>
            <p className="section-label mb-3">Tours Available</p>
            <h3 className="font-cormorant font-light text-2xl text-gray-900 mb-3">
              Want to see our apartments?
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
    </section>
  );
};

export default Contact;
