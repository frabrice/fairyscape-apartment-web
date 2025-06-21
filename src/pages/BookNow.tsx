import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Phone, Mail, MapPin, CalendarCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BookNow = () => {
  const bookingOptions = [
    {
      title: 'Book with Airbnb',
      description: 'Reserve through our Airbnb listing with instant confirmation',
      icon: <ExternalLink className="w-6 h-6" />,
      link: 'https://www.airbnb.com/rooms/1360785158351791125?guests=1&adults=1&s=67&unique_share_id=55d13210-98bf-4942-a72a-9ce6861117dd',
      buttonText: 'Book on Airbnb',
      external: true
    },
    {
      title: 'Book with Booking.com',
      description: 'Reserve through Booking.com for best rate guarantee',
      icon: <ExternalLink className="w-6 h-6" />,
      link: 'https://www.booking.com/hotel/rw/fairyscape-apartments-kigali-kigali.html',
      buttonText: 'Book on Booking.com',
      external: true
    },
    {
      title: 'Get in Touch First',
      description: 'Contact us directly for special rates and custom arrangements',
      icon: <Phone className="w-6 h-6" />,
      content: {
        phone: '+250 788 351 957',
        email: 'fairyscape250@gmail.com',
        address: '10, KK 556 St, Kicukiro District, Rwanda'
      }
    },
    {
      title: 'Book a Tour',
      description: 'Schedule a viewing of our luxury apartments',
      icon: <CalendarCheck className="w-6 h-6" />,
      link: '/book-tour',
      buttonText: 'Schedule Tour'
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
              <h1 className="text-4xl font-light text-white mb-4">Book Your Stay</h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto px-4">
                Choose your preferred booking method and start your luxury living experience
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Options */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {bookingOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-8">
                <div className="w-12 h-12 bg-[#B8860B]/10 rounded-lg flex items-center justify-center mb-6">
                  {React.cloneElement(option.icon, { className: 'w-6 h-6 text-[#B8860B]' })}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-6">{option.description}</p>

                {option.content ? (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Phone className="w-5 h-5 text-[#B8860B]" />
                      <span>{option.content.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Mail className="w-5 h-5 text-[#B8860B]" />
                      <span>{option.content.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin className="w-5 h-5 text-[#B8860B]" />
                      <span>{option.content.address}</span>
                    </div>
                  </div>
                ) : option.link ? (
                  option.external ? (
                    <a
                      href={option.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full gap-2 bg-[#B8860B] hover:bg-[#8B6508] text-white px-6 py-3 rounded-lg transition-colors duration-300"
                    >
                      {option.buttonText}
                      <ExternalLink size={18} />
                    </a>
                  ) : (
                    <Link
                      to={option.link}
                      className="inline-flex items-center justify-center w-full gap-2 bg-[#B8860B] hover:bg-[#8B6508] text-white px-6 py-3 rounded-lg transition-colors duration-300"
                    >
                      {option.buttonText}
                    </Link>
                  )
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookNow;