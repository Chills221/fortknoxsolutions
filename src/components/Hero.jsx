import { ArrowRight } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import Button from './Elements/Button';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(/images/hero-bg.jpg)` }}
    >
      <div className="absolute inset-0 bg-black/50 w-full h-full"></div>
      
      <div className="relative z-10 container-custom text-center">
        <div className="max-w-4xl mx-auto sm:py-0 py-6">
          <h1 className="sm:text-5xl text-3xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.2] tracking-[5px] uppercase">
            We make{' '}
            <span className="text-gradient">Improving your Home</span>{' '}
            simple
          </h1>
          
          <p className="sm:text-xl text-base md:text-2xl text-white sm:mb-8 mb-4 max-w-2xl mx-auto">
            Professional window security film, door reinforcements, and advanced lock systems 
            that transform ordinary houses into secure sanctuaries.
          </p>         
        
          <Button text="Contact Us Now" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 sm:gap-8 gap-6 sm:mt-16  max-w-4xl mx-auto">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;