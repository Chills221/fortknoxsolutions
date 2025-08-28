import React from 'react';
import { Shield, Users, Award, Wrench, Heart, Lock } from 'lucide-react';

const WhyChoose = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" style={{ color: '#ccb16a' }} />,
      title: "Local Experts, Local Care",
      description: "We're a Toronto-based team that understands the unique security challenges of our community."
    },
    {
      icon: <Shield className="w-8 h-8" style={{ color: '#ccb16a' }} />,
      title: "Proven Protection",
      description: "Our security films, reinforcements, and cameras are designed to withstand real threats, from break-ins to accidents."
    },
    {
      icon: <Wrench className="w-8 h-8" style={{ color: '#ccb16a' }} />,
      title: "Professional Installation",
      description: "Every job is completed with precision and attention to detail, leaving you with a flawless, secure finish."
    },
    {
      icon: <Award className="w-8 h-8" style={{ color: '#ccb16a' }} />,
      title: "Warranty-Backed Solutions",
      description: "We only use premium materials supported by manufacturer warranties, ensuring long-term reliability."
    },
    {
      icon: <Heart className="w-8 h-8" style={{ color: '#ccb16a' }} />,
      title: "Customer-First Approach",
      description: "Your safety, comfort, and satisfaction come before everything else. We take the time to understand your needs and customize the right solution."
    }
  ];

  return (
    <section 
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#fffdfa' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Lock className="w-12 h-12" style={{ color: '#ccb16a' }} />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Choose Us?
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              When it comes to protecting your home or business, trust matters. At <span className="font-semibold" style={{ color: '#ccb16a' }}>Fort Knox Solutions</span>, we don't just install products — we deliver peace of mind. Here's why families and businesses across Toronto choose us:
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 justify-center items-stretch">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-gray-50">
                  {feature.icon}
                </div>
                <h3 
                  className="text-xl font-semibold mb-4"
                  style={{ color: '#ccb16a' }}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div 
            className="inline-block px-8 py-6 rounded-lg shadow-md"
            style={{ backgroundColor: '#ccb16a' }}
          >
            <p className="text-white text-lg font-medium leading-relaxed max-w-3xl">
              With Fort Knox Solutions, you're not just securing windows and doors — you're protecting what matters most.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;