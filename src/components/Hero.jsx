import Image from 'next/image';

const Hero = () => {
  return (
    <section 
      className="relative w-full overflow-hidden rounded-xl"
      aria-labelledby="hero-heading"
    >
      {/* Desktop Hero Image */}
      <div className="hidden md:block relative w-full aspect-[1920/780]">
        <Image
          src="/images/hero-desktop.webp"
          alt="Fort Knox Solutions security system installed on modern home with reinforced windows and doors"
          fill
          priority
          fetchPriority="high"
          quality={85}
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Mobile Hero Image */}
      <div className="block md:hidden relative w-full aspect-[4/7]">
        <Image
          src="/images/hero-mobile.webp"
          alt="Fort Knox Solutions security system for residential protection"
          fill
          priority
          fetchPriority="high"
          quality={85}
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Overlay - with gradient for better text readability */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 md:bg-black/50" 
        aria-hidden="true"
      />

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 text-center">
          
          {/* Main Heading - Fully Responsive */}
          <h1 
            id="hero-heading"
            className="text-[clamp(1.75rem,5vw,4.5rem)] text-white mb-3 sm:mb-4 md:mb-6 font-normal leading-[1.15] tracking-[0.05em] uppercase break-words"
          >
            Protect Your Home Like Fort Knox
          </h1>
          
          {/* Subheading - Fully Responsive */}
          <p className="text-[clamp(1rem,2.5vw,1.875rem)] text-white/95 mb-6 sm:mb-8 md:mb-10 font-light leading-[1.4] tracking-[0.03em] max-w-[min(90%,56rem)] mx-auto">
            Comprehensive security for your windows and doors. Trusted, affordable solutions for peace of mind.
          </p>

          {/* CTA Button - Touch-friendly */}
          <a 
            href="#contactform"
            className="inline-block text-center text-[clamp(0.813rem,1.5vw,0.875rem)] font-medium text-black bg-[#cfb16b] px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 uppercase tracking-[0.165em] transition-colors duration-300 ease-in-out hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-[#cfb16b] focus:ring-offset-2 focus:ring-offset-black active:scale-[0.98] touch-manipulation min-h-[44px] leading-tight"
            aria-label="Book your free security consultation - Navigate to contact form"
          >
            <span className="block sm:inline">Book Your Free Security</span>
            {' '}
            <span className="block sm:inline">Consultation Today!</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
