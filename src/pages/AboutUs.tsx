import React from 'react';
import { Shield, Users, Trophy, Target } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
  const values = [
    {
      icon: <Shield className="w-12 h-12 text-[#B8860B]" />,
      title: 'Trust & Security',
      description: 'Building trust through transparency and maintaining the highest standards of security for our residents.',
    },
    {
      icon: <Users className="w-12 h-12 text-[#B8860B]" />,
      title: 'Community Focus',
      description: 'Creating a vibrant community where residents can thrive and build lasting connections.',
    },
    {
      icon: <Trophy className="w-12 h-12 text-[#B8860B]" />,
      title: 'Excellence',
      description: 'Committed to delivering excellence in every aspect of our service and facilities.',
    },
    {
      icon: <Target className="w-12 h-12 text-[#B8860B]" />,
      title: 'Innovation',
      description: 'Continuously innovating to provide modern living solutions that exceed expectations.',
    },
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
              backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
            }}
          >
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-light text-white mb-4">About ScaryEscape</h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto px-4">
                Redefining luxury living in the heart of Kigali since 2020
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story */}
        <div className="mb-20">
          <h2 className="text-3xl font-light text-gray-900 mb-6 text-center">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Founded in 2020, ScaryEscape emerged from a vision to transform the residential landscape of Kigali. We recognized the need for a living space that seamlessly blends luxury, comfort, and community.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our commitment to excellence has made us a leading name in premium residential properties, with a focus on creating spaces that inspire and nurture our residents' aspirations.
              </p>
            </div>
            <div className="relative h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Our Story"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-light text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="text-3xl font-light text-gray-900 mb-12 text-center">Our Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Chief Executive Officer',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
              },
              {
                name: 'Michael Chen',
                role: 'Chief Operations Officer',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
              },
              {
                name: 'Elena Rodriguez',
                role: 'Head of Resident Experience',
                image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;