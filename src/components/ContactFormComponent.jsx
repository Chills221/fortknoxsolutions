'use client'
import React, { useState } from 'react';
import Button from './Elements/Button';
import Link from 'next/link';

const ContactFormComponent = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert('Message sent successfully!');
      setFormData({ email: '', phone: '', address: '', message: '' });
    } catch (error) {
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id='contact' className="min-h-screen flex items-center justify-center md:py-16 py-10" style={{ backgroundColor: '#fff' }}>
      <div className="w-full max-w-7xl bg-[#F8F8F8] overflow-hidden lg:p-16 sm:p-8 px-4 py-8">
        <div className='mb-8'>
          <h4 className='text-base text-[#cfb16b] font-bold'>Get A Quote</h4>
          <h2 className="text-3xl sm:text-4xl text-black uppercase font-semibold leading-tight py-3 lg:max-w-3xl w-full">
            Repairing your pro restoring  your peace of mind
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Side - Form */}
          <div className="flex-1 ">
            <div className="mx-auto lg:mx-0">
              <div className="space-y-4">
                {/* Email Field */}
                <div className='grid sm:grid-cols-2 gap-4'>
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-lg font-semibold text-black mb-2">
                      Your Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your Email"
                        className={`w-full px-4 py-4 pr-12 text-gray-700 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#cfb16b] focus:border-transparent transition-all duration-200 ${errors.email ? 'border-red-500' : 'border-gray-200'
                          }`}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                        <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </div>
                    </div>
                    {errors.email && (
                      <span id="email-error" className="text-red-500 text-sm mt-1" role="alert">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="text-lg font-semibold text-black mb-2">
                      Your Phone
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Your Phone"
                        className={`w-full px-4 py-4 pr-12 text-gray-700 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#cfb16b] focus:border-transparent transition-all duration-200 ${errors.phone ? 'border-red-500' : 'border-gray-200'
                          }`}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                        <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                    </div>
                    {errors.phone && (
                      <span id="phone-error" className="text-red-500 text-sm mt-1" role="alert">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                {/* Address Field */}
                <div className="flex flex-col">
                  <label htmlFor="address" className="text-lg font-semibold text-black mb-2">
                    Your Address
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Your Address"
                      className="w-full px-4 py-4 pr-12 text-gray-700 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#cfb16b] focus:border-transparent transition-all duration-200"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                      <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div className="flex flex-col">
                  <label htmlFor="message" className="text-lg font-semibold text-black mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Message"
                      rows="3"
                      className={`w-full px-4 py-4 pr-12 text-gray-700 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#cfb16b] focus:border-transparent transition-all duration-200 resize-vertical min-h-[120px] ${errors.message ? 'border-red-500' : 'border-gray-200'
                        }`}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    <div className="absolute top-4 right-4">
                      <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                  </div>
                  {errors.message && (
                    <span id="message-error" className="text-red-500 text-sm mt-1" role="alert">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 text-white font-normal cursor-pointer tracking-[2.64px] text-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-orange-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transform hover:-translate-y-0.5"
                  style={{ backgroundColor: '#cfb16b' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#cfb16b'}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    'SEND MESSAGE'
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Info */}
          <div className="flex-1 " style={{ backgroundColor: '#f5f5f5' }}>
            <div className="mx-auto lg:mx-0 space-y-10">

              {/* Call Us */}
              <div className="flex items-center space-x-4 bg-white p-8 shadow-[0px_0px_20px_0px_rgba(19,16,34,0.1)]">
                <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#f6e9cc' }}>
                  <svg className="w-6 h-6 text-[#cfb16b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0 ">
                  <h3 className="text-lg font-semibold text-black mb-2">Call Us</h3>
                  <div className="flex sm:flex-row flex-col sm:gap-4 sm:items-center">
                    <Link href="tel:+5623 - 080 - 59632" className="text-black break-all text-sm flex items-center mb-0">
                      <span className="text-black break-all text-sm">Mobile:</span> +5623 - 080 - 59632
                    </Link>
                    <Link href="tel:+1234 - 853 - 365" className="text-black break-all text-sm">
                      <span className="text-black break-all text-sm">Hotline:</span> +1234 - 853 - 365
                    </Link>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4 bg-white p-8 shadow-[0px_0px_20px_0px_rgba(19,16,34,0.1)]">
                <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#f6e9cc' }}>
                  <svg className="w-6 h-6 text-[#cfb16b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-black mb-2">Email</h3>
                  <div className="space-y-1 flex sm:flex-row flex-col sm:gap-4">
                    <Link href="#" className="text-black break-all text-sm">info@exampleyourmail.com</Link>
                    <Link href="#" className="text-black break-all text-sm">info@example.com</Link>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4 bg-white p-8 shadow-[0px_0px_20px_0px_rgba(19,16,34,0.1)]">
                <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#f6e9cc' }}>
                  <svg className="w-6 h-6 text-[#cfb16b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-black mb-2">Location</h3>
                  <p className="text-black break-all text-sm">
                    Dhaka 102, utl 1216, road 45 sterl linehouse street
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormComponent;