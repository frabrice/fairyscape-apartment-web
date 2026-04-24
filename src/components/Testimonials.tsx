import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    content: "Living at Fairyscape has exceeded all my expectations. The attention to detail and level of service is truly unmatched.",
    author: "Sarah Mitchell",
    position: "CEO, Tech Innovations",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 5,
  },
  {
    content: "The amenities and community atmosphere make this more than just a residence — it's a genuine lifestyle upgrade.",
    author: "Michael Chang",
    position: "Executive Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 5,
  },
  {
    content: "From the stunning views to the impeccable service, every aspect of Fairyscape speaks of luxury and comfort.",
    author: "Emma Thompson",
    position: "Interior Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <p className="section-label mb-4">Testimonials</p>
            <h2
              className="font-cormorant font-light text-gray-900 leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Voices of our
              <br />
              <em className="italic">community</em>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-[#B8860B] text-[#B8860B]" />
              ))}
            </div>
            <span className="font-jost text-sm text-gray-400">Rated 5.0 by residents</span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="luxury-card p-8 flex flex-col group"
            >
              {/* Quote icon */}
              <Quote size={28} className="text-[rgba(184,134,11,0.2)] mb-6 group-hover:text-[rgba(184,134,11,0.4)] transition-colors duration-300" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={12} className="fill-[#B8860B] text-[#B8860B]" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-cormorant text-lg font-light italic text-gray-700 leading-relaxed flex-1 mb-8">
                "{t.content}"
              </blockquote>

              {/* Divider */}
              <div className="h-px bg-[rgba(184,134,11,0.15)] mb-6" />

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full overflow-hidden ring-1 ring-[rgba(184,134,11,0.2)]">
                  <img
                    src={t.image}
                    alt={t.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-jost font-medium text-sm text-gray-900">{t.author}</div>
                  <div className="font-jost text-xs text-gray-400 font-light">{t.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
