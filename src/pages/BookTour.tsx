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

const availableTimes = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'];

const steps = [
  { number: 1, title: 'Date & Time', icon: Calendar },
  { number: 2, title: 'Preferences', icon: MessageSquare },
  { number: 3, title: 'Your Details', icon: User },
];

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
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateStep = (currentStep: number) => {
    const newErrors: FormErrors = {};
    if (currentStep === 1) {
      if (!formData.date) newErrors.date = 'Please select a date';
      if (!formData.time) newErrors.time = 'Please select a time';
    } else if (currentStep === 2) {
      if (!formData.description.trim()) newErrors.description = 'Please describe your preferences';
    } else if (currentStep === 3) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => { if (validateStep(step)) setStep(prev => Math.min(prev + 1, 3)); };
  const handleBack = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateStep(3)) return;
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    try {
      await emailjs.send(
        'service_pd4f1na',
        'template_3heksju',
        {
          to_name: 'Fairyscape Team',
          to_email: 'fairyscape250@gmail.com',
          from_name: formData.fullName,
          from_email: formData.email,
          phone: formData.phone,
          tour_date: formData.date,
          tour_time: formData.time,
          preferences: formData.description,
          subject: 'New Tour Booking Request',
          message: `Tour Booking Details:\nDate: ${formData.date}\nTime: ${formData.time}\nPreferences: ${formData.description}\nName: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}`,
        },
        '0ozjhZ3XoMFWBBZ_n'
      );
      setSubmitStatus({ type: 'success', message: 'Your tour request has been sent. We will contact you shortly to confirm.' });
      setFormData({ date: '', time: '', description: '', fullName: '', phone: '', email: '' });
      setStep(1);
    } catch {
      setSubmitStatus({ type: 'error', message: 'There was an error sending your request. Please try again or contact us directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (fieldName: string) =>
    `w-full border font-jost font-light text-sm text-gray-800 px-4 py-3 outline-none transition-colors duration-200 focus:border-[#B8860B] ${
      errors[fieldName] ? 'border-red-400' : 'border-gray-200'
    }`;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <div className="relative pt-[72px]">
        <div className="h-[38vh] min-h-[220px] relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("https://raw.githubusercontent.com/frabrice/EricApt/refs/heads/main/Apartments_1.JPG")' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/65" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8860B] to-transparent opacity-50" />
          <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
            <p className="section-label text-[#D4A017] mb-4">Private Viewing</p>
            <h1 className="font-cormorant font-light text-white" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
              Book a Tour
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16">

        {/* Step indicator */}
        <div className="flex items-center mb-12">
          {steps.map((s, i) => {
            const Icon = s.icon;
            const isActive = step === s.number;
            const isDone = step > s.number;
            return (
              <React.Fragment key={s.number}>
                <div className="flex flex-col items-center gap-2">
                  <div
                    className={`w-9 h-9 flex items-center justify-center transition-all duration-300 ${
                      isActive || isDone ? 'bg-[#B8860B] text-white' : 'border border-gray-200 text-gray-300'
                    }`}
                  >
                    <Icon size={15} />
                  </div>
                  <span className={`font-jost text-[0.65rem] tracking-widest uppercase whitespace-nowrap ${isActive ? 'text-[#B8860B]' : 'text-gray-400'}`}>
                    {s.title}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`flex-1 h-px mx-3 mb-5 transition-colors duration-300 ${isDone ? 'bg-[#B8860B]' : 'bg-gray-200'}`} />
                )}
              </React.Fragment>
            );
          })}
        </div>

        <div className="border border-[rgba(184,134,11,0.15)] p-8">
          <form ref={formRef} onSubmit={handleSubmit}>

            {/* Step 1 */}
            {step === 1 && (
              <div className="space-y-7">
                <div>
                  <label className="block font-jost text-[0.72rem] tracking-[0.15em] uppercase text-gray-500 mb-3">
                    Select Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className={inputClass('date')}
                  />
                  {errors.date && <p className="mt-2 font-jost text-xs text-red-500">{errors.date}</p>}
                </div>

                <div>
                  <label className="block font-jost text-[0.72rem] tracking-[0.15em] uppercase text-gray-500 mb-3">
                    Select Time
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {availableTimes.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => handleChange({ target: { name: 'time', value: time } } as React.ChangeEvent<HTMLInputElement>)}
                        className={`py-2.5 font-jost text-xs tracking-wide border transition-all duration-200 ${
                          formData.time === time
                            ? 'bg-[#B8860B] text-white border-[#B8860B]'
                            : 'border-gray-200 text-gray-600 hover:border-[#B8860B] hover:text-[#B8860B]'
                        }`}
                      >
                        <Clock size={11} className="inline mr-1" />
                        {time}
                      </button>
                    ))}
                  </div>
                  {errors.time && <p className="mt-2 font-jost text-xs text-red-500">{errors.time}</p>}
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div>
                <label className="block font-jost text-[0.72rem] tracking-[0.15em] uppercase text-gray-500 mb-3">
                  Your Preferences
                </label>
                <textarea
                  name="description"
                  rows={7}
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Tell us about your preferences — number of bedrooms, desired floor, specific amenities, move-in date, etc."
                  className={`${inputClass('description')} resize-none`}
                />
                {errors.description && <p className="mt-2 font-jost text-xs text-red-500">{errors.description}</p>}
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div className="space-y-6">
                {[
                  { label: 'Full Name', name: 'fullName', type: 'text', icon: User },
                  { label: 'Phone Number', name: 'phone', type: 'tel', icon: Phone },
                  { label: 'Email Address', name: 'email', type: 'email', icon: Mail },
                ].map(({ label, name, type, icon: Icon }) => (
                  <div key={name}>
                    <label className="block font-jost text-[0.72rem] tracking-[0.15em] uppercase text-gray-500 mb-3">
                      {label}
                    </label>
                    <div className="relative">
                      <Icon size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                      <input
                        type={type}
                        name={name}
                        value={formData[name as keyof FormData]}
                        onChange={handleChange}
                        className={`${inputClass(name)} pl-9`}
                      />
                    </div>
                    {errors[name] && <p className="mt-2 font-jost text-xs text-red-500">{errors[name]}</p>}
                  </div>
                ))}
              </div>
            )}

            {/* Status */}
            {submitStatus.type && (
              <div
                className={`mt-6 p-4 font-jost text-sm ${
                  submitStatus.type === 'success'
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            {/* Nav buttons */}
            <div className="mt-10 flex justify-between items-center">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex items-center gap-2 font-jost text-[0.72rem] tracking-[0.12em] uppercase text-gray-400 hover:text-gray-700 transition-colors duration-200"
                >
                  <ChevronLeft size={16} />
                  Back
                </button>
              ) : (
                <span />
              )}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="btn-gold inline-flex items-center gap-2"
                >
                  Continue
                  <ChevronRight size={14} />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-gold inline-flex items-center gap-2 ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Book Tour'}
                  <ChevronRight size={14} />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookTour;
