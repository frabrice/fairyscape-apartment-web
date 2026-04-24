import React from 'react';
import { Shield, Clock, Sparkles, MapPin, Wifi, Coffee } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Prime Location',
    description: 'Situated in the heart of Kigali, with easy access to business districts, shopping centers, and entertainment venues.',
  },
  {
    icon: Shield,
    title: 'Security & Safety',
    description: '24/7 security personnel and advanced surveillance systems ensure your peace of mind at all times.',
  },
  {
    icon: Wifi,
    title: 'Modern Amenities',
    description: 'High-speed internet, smart home features, and state-of-the-art appliances in every unit.',
  },
  {
    icon: Coffee,
    title: 'Lifestyle Services',
    description: 'Premium facilities including a fully-equipped gym, rooftop garden, and vibrant communal spaces.',
  },
  {
    icon: Clock,
    title: 'Responsive Management',
    description: 'Dedicated property management team available around the clock to assist all residents.',
  },
  {
    icon: Sparkles,
    title: 'Quality Finishes',
    description: 'Premium materials and exceptional craftsmanship throughout every apartment.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24" style={{ background: 'var(--cream)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="max-w-xl mb-16">
          <p className="section-label mb-4">Why Fairyscape</p>
          <h2
            className="font-cormorant font-light text-gray-900 leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Crafted for those
            <br />
            <em className="italic">who expect more</em>
          </h2>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="luxury-card p-8 group cursor-default">
                {/* Number + icon row */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-10 h-10 flex items-center justify-center bg-[rgba(184,134,11,0.08)] group-hover:bg-[rgba(184,134,11,0.15)] transition-colors duration-300">
                    <Icon size={18} className="text-[#B8860B]" />
                  </div>
                  <span className="font-cormorant text-5xl font-light text-[rgba(184,134,11,0.12)] leading-none select-none group-hover:text-[rgba(184,134,11,0.22)] transition-colors duration-300">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Text */}
                <h3 className="font-cormorant text-xl font-medium text-gray-900 mb-3 tracking-wide">
                  {feature.title}
                </h3>
                <p className="font-jost font-light text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom accent line */}
                <div className="mt-6 h-px bg-[rgba(184,134,11,0.12)] group-hover:bg-[rgba(184,134,11,0.35)] transition-colors duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
