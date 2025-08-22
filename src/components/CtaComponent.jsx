'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Cta_bg from "../../public/images/cta-bg.jpg";
import Button from './Elements/Button';

const CtaComponent = ({ backgroundImage = '/hero-bg.jpg' }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!email.trim()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Newsletter signup:', email);
      setEmail('');
      setIsSubmitting(false);
      // Add your newsletter signup logic here
    }, 1000);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden py-20 ">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 ">
       
         <Image
            src={`/images/cta-bg.jpg`}
            alt="cta_bg"
            width={500}
            height={800}
            className="w-full h-[1000px] object-cover"
            />
        
        <div className="absolute inset-0 bg-black/70 w-full h-full"></div>
        {/* Dark overlay for better text readability */}
        {/* <div className="absolute inset-0 bg-black/40"></div> */}
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Newsletter Label */}
        <div className="mb-8">
          <span className="inline-block text-xs sm:text-sm font-semibold text-[#cfb16b] tracking-[0.2em] sm:tracking-[0.25em] uppercase">
            Newsletter
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-white font-bold leading-tight mb-8 lg:mb-10">
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase">
            Subscribe And Get 
          </span>
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-2 sm:mt-3 lg:mt-4">
           20% Offer
          </span>
        </h1>

        {/* Description */}
        <div className="">
          <p className="text-white text-lg leading-relaxed max-w-3xl mx-auto px-2">
            Aenean et magna mi. Aenean suscipit ligula et leo hendrerit, volutpat porta nibh
            fringilla. Fusce commodo eget nunc eu pulvinar. Vivamus odio orci.
          </p>
          <div className='mt-10'>
           <Button  text="Contact Us" />
           </div>
        </div>

        {/* Email Signup Form */}
        <div className="w-full max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-0 sm:gap-0">
           
           
          </div>
        </div>

       
      </div>

      {/* Background Pattern Overlay (Optional Enhancement) */}
      <div className="absolute inset-0 z-5 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
      </div>
    </section>
  );
};

export default CtaComponent;