import React from 'react';
import { Shield, Camera, Lock, CheckCircle } from 'lucide-react';
import Image from 'next/image';

const MainContent = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Content Column */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Your home should feel like the safest place in the world.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              That's why we specialize in residential security services that make a real difference. From security window film that strengthens glass, to door reinforcements that stop forced entry, to security cameras for 24/7 awareness – we've got you covered.
            </p>
          </div>

          {/* Security Features */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-yellow-600" />
              </div>
              <span className="text-gray-700 font-medium">Security Window Film Protection</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <Lock className="w-5 h-5 text-yellow-600" />
              </div>
              <span className="text-gray-700 font-medium">Door Reinforcement Systems</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <Camera className="w-5 h-5 text-yellow-600" />
              </div>
              <span className="text-gray-700 font-medium">24/7 Security Camera Systems</span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
            <div className="flex items-start space-x-3">
              {/* <CheckCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" /> */}
              <div>
                {/* <h3 className="font-semibold text-gray-900 mb-2">Free Security Consultation</h3> */}
                <p className="text-gray-700">
                  Our team offers free security consultations, walking you through every step so you can feel confident in your protection.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Column */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            {/* <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
              alt="Modern secure home with security features"
              className="w-full h-full object-cover"
              style={{ minHeight: '500px' }}
            /> */}
             <Image
                          src={`/images/home-image.jpg`}
                          alt="aboutimg"
                          width={500}
                          height={600}
            
                          className="w-full lg:h-[600px] h-auto object-cover rounded-xl "
                        />
            {/* Overlay for better text contrast if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          
          {/* Floating Security Badge */}
          
        </div>
      </div>
    </section>
  );
};

export default MainContent;