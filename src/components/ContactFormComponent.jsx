'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from "lucide-react";

const servicesList = [
  "Free Security Consultation",
  "Security Window Film",
  "Door Reinforcements",
  "Security Cameras",
];

const ContactFormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
    services: [], // ✅ Added for multi-select
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openServices, setOpenServices] = useState(false); // dropdown toggle

  const toggleService = (service) => {
    setFormData((prev) => {
      const services = prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services };
    });

    // ✅ Close dropdown after selecting
    setOpenServices(false);
  };


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

    const { name, email, phone, address, message, services } = formData;

    if (!name.trim()) newErrors.name = "Name is required.";
    else if (name.trim().length < 3) newErrors.name = "Name must be at least 3 characters.";

    if (!email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Enter a valid email.";

    if (!phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!/^\d{10}$/.test(phone)) newErrors.phone = "Phone must be 10 digits.";

    if (!address.trim()) newErrors.address = "Address is required.";

    if (!services || services.length === 0) newErrors.services = "Select at least one service.";

    if (!message.trim()) newErrors.message = "Message is required.";
    else if (message.trim().length < 10) newErrors.message = "Message must be at least 10 characters.";

    return newErrors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const form = e.target;
      const formDataToSend = new FormData(form);

      // ✅ add services manually
      formDataToSend.set("services", formData.services.join(", "));

      await fetch("/form.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        services: [],
        message: "",
      });
    } catch (error) {
      console.error("Form submission error", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id='contact' className="min-h-screen flex items-center justify-center md:py-16 py-10" style={{ backgroundColor: '#fff' }}>
      <div className="w-full max-w-7xl bg-[#F8F8F8] overflow-hidden lg:p-16 sm:p-8 px-4 py-8">
        <div className='mb-8'>
          <p className='text-base text-[#cfb16b] font-semibold '>Let’s Secure Your Home Today</p>
          <h2 className="text-3xl sm:text-4xl text-black uppercase font-semibold leading-tight py-3 lg:max-w-5xl w-full">
            Your safety is our priority. Get in touch with us to schedule a free consultation or to learn more about our services.
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Left Side - Form */}
          <div className="flex-1 ">
           <form name="contact" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact-form" />
              {success && (
                <div className="p-4 bg-green-100 text-green-700 rounded-lg">
                  ✅ Thank you! Your message has been sent.
                </div>
              )}
              <div className="mx-auto lg:mx-0">
                <div className="space-y-4">
                  {/* Email Field */}
                  <div className='grid sm:grid-cols-2 gap-4'>
                    <div className="flex flex-col">
                      <label htmlFor="Name" className="text-lg font-semibold text-black mb-2">
                        Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          className={`w-full px-4 py-4 pr-12 text-gray-700 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#cfb16b] focus:border-transparent transition-all duration-200 ${errors.name ? 'border-red-500' : 'border-gray-200'
                            }`}
                          aria-describedby={errors.name ? "email-error" : undefined}
                        />

                      </div>
                      {errors.name && (
                        <span id="email-error" className="text-red-500 text-sm mt-1" role="alert">
                          {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Phone Field */}
                    <div className="flex flex-col">
                      <label htmlFor="email" className="text-lg font-semibold text-black mb-2">
                        Email
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Your email"
                          className={`w-full px-4 py-4 pr-12 text-gray-700 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#cfb16b] focus:border-transparent transition-all duration-200 ${errors.email ? 'border-red-500' : 'border-gray-200'
                            }`}
                          aria-describedby={errors.email ? "phone-error" : undefined}
                        />

                      </div>
                      {errors.email && (
                        <span id="phone-error" className="text-red-500 text-sm mt-1" role="alert">
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Address Field */}
                  <div className='grid sm:grid-cols-2 gap-4'>
                    <div className="flex flex-col">
                      <label htmlFor="phone" className="text-lg font-semibold text-black mb-2">
                        phone
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Your number"
                          className="w-full px-4 py-4 pr-12 text-gray-700 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#cfb16b] focus:border-transparent transition-all duration-200"
                        />

                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="text-lg font-semibold text-black mb-2">
                        Services Interested
                      </label>
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setOpenServices(!openServices)}
                          className="w-full flex justify-between items-center px-4 py-3 border rounded-lg bg-white"
                        >
                          {formData.services.length > 0
                            ? formData.services.join(", ")
                            : "Select Services"}
                          <ChevronDown className="w-4 h-4" />
                        </button>

                        {openServices && (
                          <div className="absolute mt-1 w-full bg-white border rounded-lg shadow-lg z-10">
                            {servicesList.map((service) => (
                              <label
                                key={service}
                                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                              >
                                <input
                                  type="checkbox"
                                  checked={formData.services.includes(service)}
                                  onChange={() => toggleService(service)}
                                  className="mr-2"
                                />
                                {service}
                              </label>
                            ))}
                          </div>
                        )}
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
            </form>
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
                    <Link href="tel:416-770-5156s" className="text-black break-all text-sm flex items-center mb-0">
                      <span className="text-black break-all text-sm">Mobile:</span> 416-770-5156

                    </Link>
                    {/* <Link href="tel:+1234 - 853 - 365" className="text-black break-all text-sm">
                      <span className="text-black break-all text-sm">Hotline:</span> +1234 - 853 - 365
                    </Link> */}
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
                    <Link href="mailto:info@fortknoxsolutions.ca" className="text-black break-all text-sm">info@fortknoxsolutions.ca</Link>
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
                    7250 Keele St, Vaughan, ON L4K 1Z8,
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