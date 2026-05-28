import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    content: "Living at Fairyscape has exceeded all my expectations. The attention to detail and level of service is truly unmatched. Kigali is beautiful and this apartment made it feel like home.",
    author: "Sarah Mitchell",
    country: "United States",
    rating: 5,
  },
  {
    content: "The amenities and community atmosphere make this more than just a residence — it's a genuine lifestyle upgrade. I stay here every time I visit Rwanda for business.",
    author: "Michael Okonkwo",
    country: "Nigeria",
    rating: 5,
  },
  {
    content: "From the stunning views to the impeccable service, every aspect of Fairyscape speaks of luxury and comfort. Highly recommend to anyone visiting Kigali.",
    author: "Emma Thompson",
    country: "United Kingdom",
    rating: 5,
  },
  {
    content: "I've stayed in many furnished apartments across Africa, but Fairyscape stands apart. The quality of the furnishings and the cleanliness are absolutely top-tier.",
    author: "Kwame Asante",
    country: "Ghana",
    rating: 5,
  },
  {
    content: "Perfect location, spotless rooms, and a team that genuinely cares. My month-long stay flew by. I'll definitely be back on my next trip to Rwanda.",
    author: "Isabelle Tremblay",
    country: "Canada",
    rating: 5,
  },
  {
    content: "As someone who travels to Kigali frequently for work, Fairyscape has become my go-to. It feels like a five-star hotel but with the warmth of a real home.",
    author: "James Kariuki",
    country: "Kenya",
    rating: 5,
  },
  {
    content: "The rooftop garden alone is worth it. Watching the Kigali skyline at sunset from my own apartment — that's an experience I won't forget. Incredible value.",
    author: "Amara Diallo",
    country: "Senegal",
    rating: 5,
  },
  {
    content: "Booked Fairyscape for a two-week business trip and was blown away. The Wi-Fi is fast, the gym is great, and the staff responded to every request within minutes.",
    author: "David Nkosi",
    country: "South Africa",
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
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#B8860B] text-[#B8860B]" />
                ))}
              </div>
              <span className="font-jost text-sm text-gray-400">Rated 5.0 by residents</span>
            </div>
            <button className="font-jost text-[0.72rem] tracking-[0.14em] uppercase text-[#B8860B] border-b border-[#B8860B]/40 hover:border-[#B8860B] transition-colors duration-200 pb-0.5 whitespace-nowrap">
              See All
            </button>
          </div>
        </div>

        {/* Cards — horizontal scroll row */}
        <div className="flex gap-5 overflow-x-auto pb-4 -mx-6 px-6 lg:-mx-10 lg:px-10 snap-x snap-mandatory scrollbar-none">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="luxury-card p-7 flex flex-col group flex-shrink-0 snap-start"
              style={{ width: 'clamp(280px, 80vw, 340px)' }}
            >
              {/* Quote icon */}
              <Quote size={24} className="text-[rgba(184,134,11,0.2)] mb-5 group-hover:text-[rgba(184,134,11,0.4)] transition-colors duration-300" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={11} className="fill-[#B8860B] text-[#B8860B]" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-cormorant text-base font-light italic text-gray-700 leading-relaxed flex-1 mb-6">
                "{t.content}"
              </blockquote>

              {/* Divider */}
              <div className="h-px bg-[rgba(184,134,11,0.15)] mb-5" />

              {/* Author — initials avatar + name + country */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[rgba(184,134,11,0.1)] ring-1 ring-[rgba(184,134,11,0.25)] flex items-center justify-center flex-shrink-0">
                  <span className="font-cormorant text-sm font-medium text-[#B8860B]">
                    {t.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-jost font-medium text-sm text-gray-900">{t.author}</div>
                  <div className="font-jost text-xs text-[#B8860B]/70 font-light">{t.country}</div>
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
