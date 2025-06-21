import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, CalendarCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-8 h-8 text-[#B8860B]" />,
      title: 'Phone',
      details: [
        '+250 788 351 957',
        '+250 780 849 228'
      ]
    },
    {
      icon: <Mail className="w-8 h-8 text-[#B8860B]" />,
      title: 'Email',
      details: [
        'fairyscape250@gmail.com'
      ]
    },
    {
      icon: <MapPin className="w-8 h-8 text-[#B8860B]" />,
      title: 'Location',
      details: [
        '10, KK 556 St',
        'Kicukiro District, Rwanda'
      ]
    },
    {
      icon: <Clock className="w-8 h-8 text-[#B8860B]" />,
      title: 'Office Hours',
      details: [
        'Mon - Fri: 9:00 AM - 6:00 PM',
        'Sat: 10:00 AM - 4:00 PM'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="h-[40vh] relative">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_1.JPG")',
            }}
          >
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-light text-white mb-4">Contact Us</h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto px-4">
                Get in touch with our team for inquiries and support
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Information Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-[#B8860B]/10 rounded-2xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
              {item.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600 mb-2">{detail}</p>
              ))}
            </div>
          ))}
        </div>

        {/* Book a Tour Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#B8860B]/5 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-[#B8860B]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CalendarCheck className="w-8 h-8 text-[#B8860B]" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Want to See Our Apartments?
            </h3>
            <p className="text-gray-600 mb-8">
              Schedule a tour of our luxury apartments and experience the perfect blend of comfort and elegance.
            </p>
            <Link
              to="/book-tour"
              className="inline-flex items-center justify-center gap-2 bg-[#B8860B] hover:bg-[#8B6508] text-white px-8 py-3 rounded-lg transition-colors duration-300 shadow-lg"
            >
              Schedule a Tour
              <CalendarCheck className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;