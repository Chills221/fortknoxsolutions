'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Logo {
  id: number;
  image: string;
  alt: string;
  link?: string;
}

const ClientLogos: React.FC = () => {
  const logos: Logo[] = [
    {
      id: 1,
      image: '/images/awards/nextdoor-logo.svg',
      alt: 'Next Door',
      link: 'https://ca.nextdoor.com/',
    },
    {
      id: 3,
      image: '/images/awards/homestar-logo.webp',
      alt: 'HomeStars Verified',
      link: 'https://www.homestars.com/',
    },
    {
      id: 6,
      image: '/images/awards/google-reviews.webp',
      alt: 'Google Reviews',
      link: 'https://share.google/iOqgtybV4M6qvFvHa',
    },
  ];

  return (
    <section className="bg-white py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
          Trusted in the communities we serve
        </h2>
        
        {/* Logos flex - horizontally centered, fully responsive */}
        <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 items-center justify-center">
          {logos.map((logo) => (
            <div 
              key={`logo-${logo.id}`} 
              className="flex items-center justify-center w-full sm:w-[200px] md:w-[250px] lg:w-[300px]"
            >
              {logo.link ? (
                <Link
                  href={logo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-80 transition-opacity duration-200 w-full"
                >
                  <Image
                    src={logo.image}
                    alt={logo.alt}
                    width={300}
                    height={100}
                    className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[280px] lg:max-w-[300px] max-h-[60px] sm:max-h-[75px] md:max-h-[90px] lg:max-h-[100px] h-auto object-contain mx-auto"
                  />
                </Link>
              ) : (
                <Image
                  src={logo.image}
                  alt={logo.alt}
                  width={300}
                  height={100}
                  className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[280px] lg:max-w-[300px] max-h-[60px] sm:max-h-[75px] md:max-h-[90px] lg:max-h-[100px] h-auto object-contain mx-auto"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
