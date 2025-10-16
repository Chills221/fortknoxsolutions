'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

    const { name, email, phone, message, services } = formData;

    if (!name.trim()) newErrors.name = "Name is required.";
    else if (name.trim().length < 3) newErrors.name = "Name must be at least 3 characters.";

    if (!email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Enter a valid email.";

    if (!phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!/^\d{10}$/.test(phone)) newErrors.phone = "Phone must be 10 digits.";


    //if (!services || services.length === 0) newErrors.services = "Select at least one service.";

    if (!message.trim()) newErrors.message = "Message is required.";
    else if (message.trim().length < 10) newErrors.message = "Message must be at least 10 characters.";

    return newErrors;
  };
  const handleSubmit = async (e) => {

    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      console.log('Errors:', newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    try {
      const form = e.target;
      const formDataToSend = new FormData(form);

      // add services manually
      formDataToSend.set("services", formData.services.join(", "));

      await fetch("/form.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formDataToSend).toString(),
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
    <div id='contact' className="min-h-screen flex items-center justify-center md:py-16 py-10 bg-white">
      <div className="w-full max-w-7xl bg-[#f4f6f8] overflow-hidden lg:p-16 sm:p-8 px-4 py-8">
        <div className='mb-8'>
          <p className='text-base text-[#cfb16b] font-semibold '>Let’s Secure Your Home Today</p>
          <h2 className="text-3xl sm:text-4xl text-black uppercase font-semibold leading-tight py-3 lg:max-w-5xl w-full">
            Your safety is our priority. Get in touch with us to schedule a free consultation or to learn more about our services.
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 my-2">

          {/* Left Side - Form */}
          <div className="flex-1 ">
            <iframe
              title='tintwiz'
              src="https://app.tintwiz.com/web/ce/8bazaap4i6yzwbiugpguuw2iuprfjosy"
              width="100%"
              height="680"
              frameBorder="0"
              allowFullScreen
            />
          </div>

          {/* Right Side - Contact Info */}
          <div className="flex-1 " style={{ backgroundColor: '#f5f5f5' }}>
            <Image
              src={`/images/contact-img.webp`}
              alt="aboutimg"
              width={500}
              height={600}

              className="w-full lg:h-[600px] h-auto object-cover rounded-xl "
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-6 justify-between items-center my-2">

          <div className="flex flex-1 items-center space-x-4 bg-white p-8 shadow-[0px_0px_20px_0px_rgba(19,16,34,0.1)]">
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
              </div>
            </div>
          </div>
          <div className="flex flex-1 items-center space-x-4 bg-white p-8 shadow-[0px_0px_20px_0px_rgba(19,16,34,0.1)]">
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

          <div className="flex flex-1 items-center space-x-4 bg-white p-8 shadow-[0px_0px_20px_0px_rgba(19,16,34,0.1)]">
            <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#f6e9cc' }}>
              <svg className="w-6 h-6 text-[#cfb16b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-black mb-2">Location</h3>
              <p className="text-black break-all text-sm">
                7250 Keele Street Unit 304<br/>Concord L4K 1Z8,
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactFormComponent;