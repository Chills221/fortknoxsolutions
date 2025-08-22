'use client';
import React, { useState } from 'react';
import Image from 'next/image';
const TestimonialsComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "Aenean et magna mi. Aenean suscipit ligula et leo hendrerit, volutpat porta nibh fringilla. Fusce commodo eget nunc eu pulvinar. Vivamus odio orci, tincidunt at ipsum id, euismod condimentum sapien. Donec tempus consectetur diam, sed ultrices ipsum convallis a. Suspendisse consequat consectetur tempor.",
      author: "Laura",
      position: "Teacher"
    },
    {
      id: 2,
      rating: 5,
      text: "Fort Knox Solutions transformed our home security completely. The window film installation was flawless and the team was incredibly professional. We feel so much safer now knowing our family is protected by their advanced security solutions.",
      author: "Michael",
      position: "Software Engineer"
    },
    {
      id: 3,
      rating: 5,
      text: "Outstanding service from start to finish! The door reinforcement system they installed is top-notch. The installation was quick, clean, and the results exceeded our expectations. Highly recommend their expertise.",
      author: "Sarah",
      position: "Business Owner"
    },
    {
      id: 4,
      rating: 5,
      text: "The advanced lock systems they installed have given us incredible peace of mind. The team was knowledgeable, punctual, and respectful of our home. Their attention to detail is remarkable.",
      author: "David",
      position: "Architect"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id='testimonials' className="bg-black text-white py-26">
      <div className="max-w-7xl mx-auto  px-4">
        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ">
          {/* Left Side - Image (30% width on desktop) */}
          <div className="w-full lg:w-[40%] flex justify-center lg:justify-start ">
            <Image
              src={`/images/testimonial-img.webp`}
              alt="testimonials"
              width={500}
              height={600}
              className="w-full lg:h-[600px] h-auto object-cover rounded-xl "
            />
          </div>

          {/* Right Side - Testimonials Slider (70% width on desktop) */}
          <div className="w-full lg:w-[58%] flex flex-col justify-center">
            {/* Header */}
            <div className="lg:mb-8 mb-4">
              <p className="text-sm font-semibold text-[#cfb16b] tracking-widest uppercase mb-4">
                TESTIMONIALS
              </p>
              <h2 className="text-4xl sm:text-5xl text-bold leading-tight w-full">
                Our Clients Testimonials
              </h2>
            </div>

            {/* Testimonial Content */}
            <div className="lg:relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={testimonial.id} className="w-full flex-shrink-0 pr-8">
                      {/* Star Rating */}
                      <div className="flex items-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-6 h-6 text-[#cfb16b] mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <blockquote className="text-lg sm:text-xl leading-relaxed text-white mb-8">
                        "{testimonial.text}"
                      </blockquote>

                      {/* Author */}
                      <div className="flex items-center">
                        <span className="text-[yellow-400] font-bold text-lg mr-2">-</span>
                        <div>
                          <cite className="text-white font-semibold text-lg ">
                            {testimonial.author}
                          </cite>
                          <p className="text-gray-400 text-sm">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex space-x-4 absolute lg:left-0 left-6 mt-8 ">
                  <button
                    onClick={prevSlide}
                    className="w-10 h-10 border border-white cursor-pointer rounded-full flex items-center justify-center hover:border-[#cfb16b] hover:text-[#cfb16b] transition-colors duration-200 focus:outline-none focus:ring focus:ring-none focus:ring-none focus:ring-offset-black"
                    aria-label="Previous testimonial"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-10 h-10 border border-white cursor-pointer rounded-full flex items-center justify-center hover:border-[#cfb16b] hover:text-[#cfb16b] transition-colors duration-200 focus:outline-none focus:ring focus:ring-none focus:ring-none focus:ring-offset-black"
                    aria-label="Next testimonial"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="lg:flex items-center justify-between lg:mt-12 mt-4 lg:w-[2%] w-full hidden ">
            {/* Dots Indicator */}
            <div className="flex lg:flex-col flex-row gap-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-4 h-4 rounded-full cursor-pointer transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black ${index === currentSlide
                      ? 'border border-white'
                      : 'border border-white'
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsComponent;