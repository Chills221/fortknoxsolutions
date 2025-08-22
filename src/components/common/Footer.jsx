'use client';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {

  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: Facebook, 
      href: '#',
      ariaLabel: 'Visit our Facebook page'
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      href: '#',
      ariaLabel: 'Connect with us on LinkedIn'
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      href: '#',
      ariaLabel: 'Follow us on Instagram'
    },
  ];

  return (
    <footer 
      className="bg-black text-[#cba769] border-t border-[#cba769]/20"
      role="contentinfo"
      aria-label="Site footer"
    >
     
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
            <p className="text-white text-xs sm:text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} Fort Knox Solutions. All rights reserved.
            </p>
            <div className="flex justify-center sm:justify-end">
              <div className="flex flex-row space-x-3 sm:space-x-4 ">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="bg-[#cba769]/10 p-2 sm:p-3 rounded-lg hover:bg-[#cba769] hover:text-black transition-all duration-300 group border border-[#cba769]/20 hover:border-[#cba769]"
                      aria-label={social.ariaLabel}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-white group-hover:text-black transition-colors duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;