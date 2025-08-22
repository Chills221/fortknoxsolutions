'use client';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col space-y-12 lg:space-y-0 md:flex-row flex-wrap lg:justify-between">
          
          {/* Contact Details - Mobile First */}
          <div className="flex-1 lg:max-w-sm">
            <h3 className="text-lg sm:text-xl font-bold text-[#cfb16b] mb-4 sm:mb-6">
              Contact Details
            </h3>
            <div className="flex flex-col space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3">
                <Phone 
                  className="h-4 w-4 sm:h-5 sm:w-5 text-[#cfb16b] flex-shrink-0" 
                  aria-hidden="true"
                />
                <a 
                  href="tel:+10000000000"
                  className="text-white hover:text-[#cba769] transition-colors duration-200 text-sm sm:text-base"
                  aria-label="Call us at (000) 000-0000"
                >
                  (000) 000-0000
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail 
                  className="h-4 w-4 sm:h-5 sm:w-5 text-[#cba769] flex-shrink-0" 
                  aria-hidden="true"
                />
                <a 
                  href="mailto:info@fortknoxsolutions.com"
                  className="text-white hover:text-[#cba769] transition-colors duration-200 text-sm sm:text-base break-all"
                  aria-label="Email us at info@fortknoxsolutions.com"
                >
                  info@fortknoxsolutions.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin 
                  className="h-4 w-4 sm:h-5 sm:w-5 text-[#cba769] flex-shrink-0 mt-1" 
                  aria-hidden="true"
                />
                <address className="text-white not-italic text-sm sm:text-base leading-relaxed">
                  123 Security Street<br />
                  Toronto, ON M5V 3A8<br />
                  Canada
                </address>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex-1 lg:max-w-xs">
            <h3 className="text-lg sm:text-xl font-bold text-[#cfb16b] mb-4 sm:mb-6">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col space-y-2 sm:space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white hover:text-[#cba769] transition-colors duration-200 text-sm sm:text-base inline-block py-1"
                      aria-label={`Navigate to ${link.name} section`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Follow Us & Legal Combined for Mobile */}
          <div className="flex flex-col space-y-8 sm:space-y-12 lg:space-y-0 lg:flex-row lg:space-x-8 flex-1">
            
            {/* Follow Us */}
            <div className="lg:flex-1">
              <h3 className="text-lg sm:text-xl font-bold text-[#cfb16b] mb-4 sm:mb-6">
                Follow Us
              </h3>
              <div className="flex flex-row space-x-3 sm:space-x-4">
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

            {/* Legal */}
            <div className="lg:flex-1 ">
              <h3 className="text-lg sm:text-xl font-bold text-[#cfb16b] mb-4 sm:mb-6">
                Legal
              </h3>
              <nav aria-label="Legal navigation">
                <ul className="flex flex-col space-y-2 sm:space-y-3">
                  <li>
                    <a
                      href="#privacy"
                      className="text-white hover:text-[#cba769] transition-colors duration-200 text-sm sm:text-base inline-block py-1"
                      aria-label="Read our Privacy Policy"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#terms"
                      className="text-white hover:text-[#cba769] transition-colors duration-200 text-sm sm:text-base inline-block py-1"
                      aria-label="Read our Terms & Conditions"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-[#cba769]/20 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
            <p className="text-white text-xs sm:text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} Fort Knox Solutions. All rights reserved.
            </p>
            <div className="flex justify-center sm:justify-end">
              <p className="text-white text-xs">
                Designed with excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;