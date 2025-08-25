import Button from './Elements/Button';
import Image from 'next/image';

const Hero = () => {
  return (
    <>
    <div className="w-full relative">
        <Image
                      src={`/images/hero-image.webp`}
                      alt="aboutimg"
                      width={1920}
                      height={780}
                     
                      className="w-full rounded-xl md:block hidden "
                    />
                    <Image
                      src={`/images/hero-mbl.webp`}
                      alt="aboutimg"
                      width={800}
                      height={1200}
                     
                      className="w-full lg:h-[1000px] h-[700px] object-cover rounded-xl md:hidden block  "
                    />
      <div className="absolute inset-0 bg-black/50 w-full h-full"></div>
      
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-10 container-custom text-center">
        <div className="max-w-7xl mx-auto sm:py-0 py-6 px-4">
          <h1 className="sm:text-5xl text-3xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.2] tracking-[5px] uppercase max-w-4xl mx-auto">
            Protect Your Home Like Fort Knox{' '}
            
          </h1>
           <h2 className="sm:text-3xl text-2xl max-w-6xl mx-auto  text-white mb-6 leading-[1.2] tracking-[5px]">
         At Fort Knox Solutions, we provide comprehensive security for your windows and doors, helping homeowners achieve peace of mind with trusted, affordable solutions.
            
          </h2>
          
          <Button text="Book Your Free Security Consultation Today!" />
        </div>

        {/* Stats */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 sm:gap-8 gap-6 sm:mt-16  max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-semibold text-white mb-2">10+</div>
            <div className="text-white">Years of Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-semibold text-white mb-2">56+</div>
            <div className="text-white">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-semibold text-white mb-2">120+</div>
            <div className="text-white">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-semibold text-white mb-2">100%</div>
            <div className="text-white">Client Satisfaction</div>
          </div>
        </div> */}
      </div>
      </div>
    
    </>
  );
};

export default Hero;