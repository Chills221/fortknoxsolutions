import Image from 'next/image';

/*************  ✨ Windsurf Command 🌟  *************/
/**
 * The AboutComponent is a React component that renders the About page.
 * 
 * The page has a header with a title, a main content section with a brief description of the company,
 * and a features grid with four items: Trusted Protection, Tailored Solutions, Proven Expertise, and Customer First.
 * 
 * The component uses the `useIsMobile` hook to determine if the user is on a mobile device and adjusts the layout accordingly.
 * 
 * @returns {JSX.Element} The About page component.
 */
const AboutComponent = () => {
  return (
    <section id='about' className="bg-black text-white py-16 ">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center lg:mb-16 mb-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#cfb16b] mb-4">
            About Us
          </h2>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-10 mb-10">
          {/* Left Content */}
          <div className="flex-1 lg:space-y-4 space-y-8 lg:order-1 lg:w-[60%] w-full">
            {/* Who We Are */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#cfb16b] lg:mb-3 mb-5">
                Who We Are
              </h3>
              <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                At Fort Knox Solutions, we believe every family deserves to feel safe in their own home. 
                Based in Toronto, we specialize in window security film, door reinforcements, and advanced 
                lock systems that transform ordinary houses into secure sanctuaries. Our name is inspired 
                by the legendary Fort Knox, a symbol of impenetrable protection and strength.
              </p>
            </div>

            {/* Our Mission */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#cfb16b] lg:mb-3 mb-5">
                Our Mission
              </h3>
              <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                To provide homeowners with affordable, effective, and reliable security solutions that protect what matters most — your family, and especially your peace of mind.

              </p>
               <p className="text-gray-300 text-base lg:text-lg leading-relaxed mt-4">
              We know that a standard lock or basic alarm system isn’t enough anymore. Burglars often target vulnerable entry points like windows and doors – that’s where we come in.


              </p>
               <p className="text-gray-300 text-base lg:text-lg leading-relaxed mt-4">
              Our team combines expertise, high-quality products, and honest service to give you security that lasts. Whether it’s reinforcing your doors, applying shatter-resistant window film, or installing security cameras, we treat your home as if it were our own.

              </p>





            </div>
             <div className="grid grid-cols-1 sm:grid-cols-2  gap-8 mb-6">
          {/* Trusted Protection */}
          <div className="flex flex-col items-start lg:space-y-4 space-y-8">
            <div className="w-12 h-12 text-[#cfb16b] rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-900" fill="#cfb16b" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Trusted Protection</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                We use premium-grade security solutions to keep your family safe.
              </p>
            </div>
          </div>

          {/* Tailored Solutions */}
          <div className="flex flex-col items-start space-y-4">
            <div className="w-12 h-12 text-[#cfb16b] rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-900" fill="#cfb16b" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Tailored Solutions</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Every home is unique, and so are our customized security approaches.
              </p>
            </div>
          </div>

          {/* Proven Expertise */}
          <div className="flex flex-col items-start space-y-4">
            <div className="w-12 h-12 text-[#cfb16b] rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-900" fill="#cfb16b" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Proven Expertise</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                With years of experience in home security, we deliver reliable results.
              </p>
            </div>
          </div>

          {/* Customer First */}
          <div className="flex flex-col items-start space-y-4">
            <div className="w-12 h-12 text-[#cfb16b] rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-900" fill="#cfb16b" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Customer First</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your safety and satisfaction are our top priorities.
              </p>
            </div>
          </div>
        </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 lg:w-[40%] w-full mx-auto lg:mx-0 lg:order-2">
            
              <Image
                src={`/images/about-image.webp`}
                alt="aboutimg"
                width={500}
                height={600}
               
                className="w-full lg:h-[700px] h-auto object-cover rounded-xl "
              />
              {/* <div className="bg-black/40 rounded-b-xl p-4  absolute bottom-0 left-0 lg:w-[70%] w-full h-[40%]">
          <h2 className="text-xl sm:text-2xl font-bold text-[#cfb16b] mb-2">
            Our Promise
          </h2>
          <p className="text-white text-base  leading-[120%] w-full">
            When you choose Fort Knox Solutions, you're choosing more than just security products — 
            you're choosing peace of mind.
          </p>
        </div> */}
            
          </div>
        </div>

        {/* Features Grid */}
       
      </div>
    </section>
  );
};

export default AboutComponent;