import React from 'react';
import { Shield, Home, ClipboardList, Calendar, Wrench, CheckCircle } from 'lucide-react';

const ProcessSteps = () => {
  const steps = [
    {
      number: "01",
      title: "Request Your Free Security Assessment",
      description: "Fill out our quick form or give us a call. We'll schedule a time that works best for you.",
      icon: <ClipboardList className="w-6 h-6" />
    },
    {
      number: "02", 
      title: "In-Home Walkthrough",
      description: "One of our security specialists will visit your home, inspect entry points like windows and doors, and listen to your concerns.",
      icon: <Home className="w-6 h-6" />
    },
    {
      number: "03",
      title: "Personalized Security Plan", 
      description: "We provide a tailored recommendation that fits your home, budget, and priorities — whether it's window film, door reinforcements, cameras, or a combination.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      number: "04",
      title: "Clear Quote & Scheduling",
      description: "You'll receive a transparent, no-obligation estimate. Once approved, we set a convenient date for installation.",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      number: "05", 
      title: "Professional Installation",
      description: "Our trained team installs your chosen solutions with care — clean, efficient, and respectful of your home.",
      icon: <Wrench className="w-6 h-6" />
    },
    {
      number: "06",
      title: "Final Check & Peace of Mind",
      description: "We walk you through the finished work, answer any questions, and make sure you're completely satisfied. Then, enjoy the peace of mind knowing your home is stronger and safer.",
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8" style={{backgroundColor: '#fffdfa'}}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left side - Title and Subtitle */}
          <div className="lg:col-span-4 lg:sticky lg:top-8">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-6 leading-tight" style={{color: '#ccb16a'}}>
                Our Process
              </h2>
              <p className="text-xl leading-relaxed" style={{color: '#8b7355'}}>
                From Free Assessment to Full Protection
              </p>
              <div className="mt-6 w-20 h-1 rounded" style={{backgroundColor: '#ccb16a'}}></div>
            </div>
            <div className="hidden lg:block">
              <p className="text-lg leading-relaxed" style={{color: '#6b5b47'}}>
                At Fort Knox Solutions, we make securing your home simple and stress-free. 
                Here's what you can expect:
              </p>
            </div>
          </div>

          {/* Right side - Process Cards */}
          <div className="lg:col-span-8">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border group"
                //   style={{
                //     backgroundColor: 'white',
                //     borderColor: '#e6dcc8',
                //     '--tw-shadow': '0 10px 15px -3px rgba(204, 177, 106, 0.1), 0 4px 6px -2px rgba(204, 177, 106, 0.05)',
                //     '--tw-shadow-colored': '0 10px 15px -3px rgba(204, 177, 106, 0.1), 0 4px 6px -2px rgba(204, 177, 106, 0.05)'
                //   }}
                //   onMouseEnter={(e) => {
                //     e.currentTarget.style.borderColor = '#ccb16a';
                //     e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(204, 177, 106, 0.15), 0 10px 10px -5px rgba(204, 177, 106, 0.1)';
                //   }}
                //   onMouseLeave={(e) => {
                //     e.currentTarget.style.borderColor = '#e6dcc8';
                //     e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(204, 177, 106, 0.1), 0 4px 6px -2px rgba(204, 177, 106, 0.05)';
                //   }}
                >
                  <div className="flex items-start space-x-6">
                    {/* Step Number */}
                    <div className="flex-shrink-0">
                      <div 
                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                        style={{background: 'linear-gradient(135deg, #ccb16a 0%, #b8a05a 100%)'}}
                      >
                        {step.number}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-3">
                        <div 
                          className="transition-colors duration-300"
                          style={{color: '#ccb16a'}}
                        >
                          {step.icon}
                        </div>
                        <h3 
                          className="text-xl font-semibold transition-colors duration-300"
                          style={{color: '#4a3f32'}}
                        >
                          {step.title}
                        </h3>
                      </div>
                      <p 
                        className="leading-relaxed text-lg"
                        style={{color: '#6b5b47'}}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Connecting line (except for last item) */}
                  {index < steps.length - 1 && (
                    <div className="ml-8 mt-6">
                      <div 
                        className="w-px h-8"
                        style={{background: 'linear-gradient(to bottom, #ccb16a, transparent)'}}
                      ></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Call to Action */}
            <div className="mt-12 text-center">
              <div 
                className="rounded-2xl p-8 text-white shadow-xl"
                style={{background: 'linear-gradient(135deg, #ccb16a 0%, #b8a05a 100%)'}}
              >
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="mb-6 text-lg" style={{color: '#f5f1e8'}}>
                  Contact us today for your free security assessment
                </p>
                {/* <button 
                  className="font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  style={{
                    backgroundColor: '#fffdfa',
                    color: '#ccb16a'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#f9f6f1';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#fffdfa';
                  }}
                >
                  Get Your Free Assessment
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSteps;