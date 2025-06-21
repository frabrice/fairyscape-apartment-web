import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      content: "Living at Fairyscape has exceeded all my expectations. The attention to detail and level of service is unmatched.",
      author: "Sarah Mitchell",
      position: "CEO, Tech Innovations",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5
    },
    {
      content: "The amenities and community atmosphere make this more than just a residence - it's truly a lifestyle upgrade.",
      author: "Michael Chang",
      position: "Executive Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5
    },
    {
      content: "From the stunning views to the impeccable service, every aspect of Fairyscape speaks luxury and comfort.",
      author: "Emma Thompson",
      position: "Interior Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-cormorant font-medium text-gray-900 mb-4">
            What Our Residents Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover why our residents choose Fairyscape as their home
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#B8860B] text-[#B8860B]" />
                ))}
              </div>
              <blockquote className="text-gray-600 mb-6 italic">
                "{testimonial.content}"
              </blockquote>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials