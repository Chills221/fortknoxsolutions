import Button from './Elements/Button';
import Image from 'next/image';

const Hero = () => {
  return (
    <>
      <div className="w-full relative">
        <Image
          src={`/images/hero-desktop.webp`}
          alt="aboutimg"
          width={1920}
          height={780}

          className="w-full rounded-xl md:block hidden "
        />
        <Image
          src={`/images/hero-mobile.webp`}
          alt="aboutimg"
          width={800}
          height={1400}

          className="w-full h-full object-cover rounded-xl md:hidden block  "
        />
        <div className="absolute inset-0 md:bg-black/50 bg-black/30 w-full h-full"></div>

        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-10 container-custom text-center">
          <div className="max-w-7xl mx-auto sm:py-0 py-6 px-4">
            <h1 className="sm:text-5xl text-3xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.2] tracking-[5px] uppercase max-w-4xl mx-auto">
              Protect Your Home Like Fort Knox{' '}

            </h1>
            <h2 className="sm:text-3xl text-2xl max-w-6xl mx-auto  text-white mb-6 leading-[1.2] tracking-[5px]">
              At Fort Knox Solutions, we provide comprehensive security for your windows and doors, helping homeowners achieve peace of mind with trusted, affordable solutions.

            </h2>

            <a href="#contactform" className="relative inline-block text-center overflow-hidden z-10 text-black hover:text-white hover:bg-black text-sm font-medium bg-[#cfb16b] px-10 uppercase py-3 tracking-[2.64px] transition-all duration-300 ease-linear">Book Your Free Security Consultation Today!</a>
          </div>
        </div>
      </div>

    </>
  );
};

export default Hero;