import React, { useState, useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, Clock, MessageSquare, User, Phone, Mail, ChevronRight, ChevronLeft } from 'lucide-react';

interface FormData {
  date: string;
  time: string;
  description: string;
  fullName: string;
  phone: string;
  email: string;
}

interface FormErrors {
  [key: string]: string;
}

const BookTour = () => {
  const [step, setStep] = useState(1);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    date: '',
    time: '',
    description: '',
    fullName: '',
    phone: '',
    email: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const [errors, setErrors] = useState<FormErrors>({});

  const availableTimes = [
    '09:00', '10:00', '11:00', '12:00', 
    '14:00', '15:00', '16:00', '17:00'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateStep = (currentStep: number) => {
    const newErrors: FormErrors = {};
    
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const templateParams = {
        to_name: 'Fairyscape Team',
        to_email: 'fairyscape250@gmail.com',
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone,
        tour_date: formData.date,
        tour_time: formData.time,
        preferences: formData.description,
        subject: 'New Tour Booking Request',
        message: `
Tour Booking Details:
-------------------
Date: ${formData.date}
Time: ${formData.time}

Visitor Preferences:
${formData.description}

Personal Information:
-------------------
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
        `.trim()
      };

      await emailjs.send(
        'service_pd4f1na',
        'template_3heksju',
        templateParams,
        '0ozjhZ3XoMFWBBZ_n'
      );

      setSubmitStatus({
        type: 'success',
        message: 'Your tour request has been sent successfully! We will contact you shortly to confirm the appointment.'
      });

      setFormData({
        date: '',
        time: '',
        description: '',
        fullName: '',
        phone: '',
        email: '',
      });
      setStep(1);

    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'There was an error sending your request. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
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
    <div className="min-h-screen bg-gray-50">
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
              <h1 className="text-4xl font-light text-white mb-4">Book a Tour</h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto px-4">
                Schedule a viewing of our luxury apartments
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16">
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
          <form ref={formRef} onSubmit={handleSubmit}>
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
                        onClick={() => handleChange({ target: { name: 'time', value: time } } as React.ChangeEvent<HTMLInputElement>)}
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
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`pl-10 w-full rounded-lg border ${
                        errors.fullName ? 'border-red-500' : 'border-gray-300'
                      } focus:ring-[#B8860B] focus:border-[#B8860B]`}
                    />
                  </div>
                  {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`pl-10 w-full rounded-lg border ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      } focus:ring-[#B8860B] focus:border-[#B8860B]`}
                    />
                  </div>
                  {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`pl-10 w-full rounded-lg border ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      } focus:ring-[#B8860B] focus:border-[#B8860B]`}
                    />
                  </div>
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>
              </div>
            )}

            {/* Status Messages */}
            {submitStatus.type && (
              <div
                className={`mt-6 p-4 rounded-lg ${
                  submitStatus.type === 'success'
                    ? 'bg-green-50 text-green-800'
                    : 'bg-red-50 text-red-800'
                }`}
              >
                {submitStatus.message}
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
                    disabled={isSubmitting}
                    className={`flex items-center gap-2 px-6 py-2 bg-[#B8860B] hover:bg-[#8B6508] text-white rounded-lg transition-colors duration-200 ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Book Tour'}
                    <ChevronRight size={20} />
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookTour;