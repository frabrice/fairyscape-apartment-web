import React, { useState } from 'react';
import { Calendar, Clock, MessageSquare, User, Phone, Mail, ChevronRight, ChevronLeft } from 'lucide-react';

const BookTour = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    description: '',
    fullName: '',
    phone: '',
    email: '',
  });

  const [errors, setErrors] = useState({});

  const availableTimes = [
    '09:00', '10:00', '11:00', '12:00', 
    '14:00', '15:00', '16:00', '17:00'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when field is modified
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateStep = (currentStep) => {
    const newErrors = {};
    
    switch (currentStep) {
      case 1:
        if (!formData.date) newErrors.date = 'Please select a date';
        if (!formData.time) newErrors.time = 'Please select a time';
        break;
      case 2:
        if (!formData.description.trim()) {
          newErrors.description = 'Please provide a brief description';
        }
        break;
      case 3:
        if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        if (!formData.email.trim()) {
          newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'Please enter a valid email';
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(prev => Math.min(prev + 1, 3));
    }
  };

  const handleBack = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(3)) {
      // Handle form submission
      console.log('Form submitted:', formData);
      // You would typically send this data to your backend here
    }
  };

  const steps = [
    {
      number: 1,
      title: 'Select Date & Time',
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      number: 2,
      title: 'Your Preferences',
      icon: <MessageSquare className="w-6 h-6" />,
    },
    {
      number: 3,
      title: 'Personal Details',
      icon: <User className="w-6 h-6" />,
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Progress Steps */}
      <div className="flex justify-between mb-8 relative">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2" />
        {steps.map((s, index) => (
          <div key={index} className="relative z-10 flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step >= s.number
                  ? 'bg-[#B8860B] text-white'
                  : 'bg-gray-200 text-gray-400'
              }`}
            >
              {s.icon}
            </div>
            <p className="mt-2 text-sm font-medium text-gray-600">{s.title}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
        <form onSubmit={handleSubmit}>
          {/* Step 1: Date and Time Selection */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  Select Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className={`w-full rounded-lg border ${
                    errors.date ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-[#B8860B] focus:border-[#B8860B]`}
                />
                {errors.date && <p className="mt-1 text-sm text-red-500">{errors.date}</p>}
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                  Select Time *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {availableTimes.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => handleChange({ target: { name: 'time', value: time } })}
                      className={`py-2 px-4 rounded-lg border ${
                        formData.time === time
                          ? 'bg-[#B8860B] text-white border-[#B8860B]'
                          : 'border-gray-300 hover:border-[#B8860B] text-gray-700'
                      } transition-colors duration-200`}
                    >
                      <Clock className="w-4 h-4 inline-block mr-2" />
                      {time}
                    </button>
                  ))}
                </div>
                {errors.time && <p className="mt-1 text-sm text-red-500">{errors.time}</p>}
              </div>
            </div>
          )}

          {/* Step 2: Description */}
          {step === 2 && (
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                What are you looking for? *
              </label>
              <textarea
                id="description"
                name="description"
                rows={6}
                value={formData.description}
                onChange={handleChange}
                placeholder="Tell us about your preferences (number of bedrooms, desired floor, specific amenities, etc.)"
                className={`w-full rounded-lg border ${
                  errors.description ? 'border-red-500' : 'border-gray-300'
                } focus:ring-[#B8860B] focus:border-[#B8860B]`}
              />
              {errors.description && (
                <p className="mt-1 text-sm text-red-500">{errors.description}</p>
              )}
            </div>
          )}

          {/* Step 3: Personal Details */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full rounded-lg border ${
                    errors.fullName ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-[#B8860B] focus:border-[#B8860B]`}
                />
                {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full rounded-lg border ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-[#B8860B] focus:border-[#B8860B]`}
                />
                {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full rounded-lg border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-[#B8860B] focus:border-[#B8860B]`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="flex items-center gap-2 px-6 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors duration-200"
              >
                <ChevronLeft size={20} />
                Back
              </button>
            )}
            <div className="ml-auto">
              {step < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-2 px-6 py-2 bg-[#B8860B] hover:bg-[#8B6508] text-white rounded-lg transition-colors duration-200"
                >
                  Next
                  <ChevronRight size={20} />
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-2 bg-[#B8860B] hover:bg-[#8B6508] text-white rounded-lg transition-colors duration-200"
                >
                  Book Tour
                  <ChevronRight size={20} />
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookTour;