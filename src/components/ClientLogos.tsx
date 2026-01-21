'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Logo {
  id: number;
  image: string;
  alt: string;
  link?: string;
  speed: number; // Animation duration in seconds (lower = faster)
}

const ClientLogos: React.FC = () => {
  const logos: Logo[] = [
    {
      id: 1,
      image: '/images/awards/crime-stoppers-logo.webp',
      alt: 'Crime Stoppers of Halton Community Watch',
      link: 'https://www.crimestoppers.ca/',
      speed: 20, // 20 seconds for full scroll
    },
    {
      id: 2,
      image: '/images/awards/burlington-365-logo.webp',
      alt: 'Burlington 365',
      link: 'https://www.burlington.ca/',
      speed: 25, // 25 seconds for full scroll
    },
    {
      id: 3,
      image: '/images/awards/homestar-logo.webp',
      alt: 'HomeStars Verified',
      link: 'https://www.homestars.com/',
      speed: 18, // 18 seconds for full scroll
    },
    {
      id: 4,
      image: '/images/awards/oc-logo.webp',
      alt: 'Oakville Chamber',
      link: 'https://www.oakvillechamber.com/',
      speed: 22, // 22 seconds for full scroll
    },
    {
      id: 5,
      image: '/images/awards/bbb-logo.webp',
      alt: 'BBB Accredited Business',
      link: 'https://www.bbb.org/',
      speed: 24, // 24 seconds for full scroll
    },
    {
      id: 6,
      image: '/images/awards/google-reviews.webp',
      alt: 'Google Reviews',
      link: 'https://share.google/iOqgtybV4M6qvFvHa',
      speed: 19, // 19 seconds for full scroll
    },
  ];

  return (
    <section className="bg-white py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
          Trusted in the communities we serve
        </h2>
        
        {/* Continuous scrolling container */}
        <div className="relative w-full overflow-hidden">
          <div className="client-logos-wrapper">
            <div className="flex gap-8 items-center animate-scroll-logos">
              {/* First set of logos */}
              {logos.map((logo) => (
                <div key={`logo-${logo.id}`} className="flex-shrink-0">
                  {logo.link ? (
                    <Link
                      href={logo.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:opacity-80 transition-opacity duration-200"
                    >
                      <Image
                        src={logo.image}
                        alt={logo.alt}
                        width={400}
                        height={75}
                        className="max-w-[400px] max-h-[75px] w-auto h-auto object-contain"
                      />
                    </Link>
                  ) : (
                    <Image
                      src={logo.image}
                      alt={logo.alt}
                      width={300}
                      height={75}
                      className="max-w-[400px] max-h-[75px] w-auto h-auto object-contain"
                    />
                  )}
                </div>
              ))}
              {/* Duplicate set for seamless infinite loop */}
              {logos.map((logo) => (
                <div key={`logo-duplicate-${logo.id}`} className="flex-shrink-0">
                  {logo.link ? (
                    <Link
                      href={logo.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:opacity-80 transition-opacity duration-200"
                    >
                      <Image
                        src={logo.image}
                        alt={logo.alt}
                        width={400}
                        height={75}
                        className="max-w-[400px] max-h-[75px] w-auto h-auto object-contain"
                      />
                    </Link>
                  ) : (
                    <Image
                      src={logo.image}
                      alt={logo.alt}
                      width={400}
                      height={75}
                      className="max-w-[400px] max-h-[75px] w-auto h-auto object-contain"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
