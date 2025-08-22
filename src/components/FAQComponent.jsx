'use client';
import React, { useState } from 'react';

import Image from 'next/image';

const FAQComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "1. What security solutions do you offer?",
      answer: "We specialize in window security film, door reinforcements, and advanced lock systems. Our solutions are designed to transform ordinary houses into secure sanctuaries while maintaining the aesthetic appeal of your home."
    },
    {
      question: "2. How long does installation take?",
      answer: "Installation time varies depending on the scope of work. Typically, window security film takes 2-4 hours, door reinforcements take 1-2 hours per door, and lock system upgrades take 30-60 minutes per lock. We provide accurate time estimates during our initial consultation."
    },
    {
      question: "3. Do you provide warranty on your services?",
      answer: "Yes, we provide comprehensive warranties on all our security solutions. Window security films come with a 10-year warranty, door reinforcements have a 5-year warranty, and lock systems include manufacturer warranties plus our 2-year installation guarantee."
    },
    {
      question: "4. Are your solutions suitable for all home types?",
      answer: "Absolutely! Our security solutions are designed to work with various home types including single-family homes, condos, townhouses, and apartments. We customize our approach based on your specific home structure and security needs."
    },
    {
      question: "5. How much do your security solutions cost?",
      answer: "Pricing varies based on the specific solutions you choose and the size of your property. We offer free consultations and detailed quotes. Our solutions are competitively priced and we offer flexible payment options to fit your budget."
    },
    {
      question: "6. Do you offer emergency services?",
      answer: "Yes, we provide 24/7 emergency security services for urgent situations. Whether you've experienced a break-in attempt or need immediate security upgrades, our team is available to help secure your home quickly and professionally."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    <div id='faq' className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className=" mb-16">
          <p className="text-sm font-semibold text-[#cfb16b] tracking-widest uppercase mb-4">
            SUPPORT
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight md:max-w-4xl w-full">
           Frequently Asked Questions
          </h2>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-start">
          {/* Left Side - Image (50% width on desktop) */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className=" w-full">
              
               <Image
                    src={`/images/faq-img.jpg`}
                    alt="aboutimg"
                    width={500}
                    height={600}
                    className="w-full h-96 sm:h-[500px] lg:h-[600px] object-cover rounded-2xl "
                     />
            </div>
          </div>

          {/* Right Side - FAQ Accordion (50% width on desktop) */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-white border-b border-black ">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center py-6 text-left "
                    aria-expanded={activeIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 ">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0 ">
                      <svg
                        className={`w-6 h-6 text-gray-500 transform transition-transform duration-200 ${
                          activeIndex === index ? 'rotate-180' : 'rotate-0'
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>
                  
                  <div
                    id={`faq-answer-${index}`}
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      activeIndex === index 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 text-base leading-relaxed">
                        {faq.answer}
                        
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            {/* <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-4">
                Our security experts are here to help. Contact us for personalized advice and solutions.
              </p>
              <button className="bg-[#cfb16b] hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2">
                Contact Us Today
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default FAQComponent;