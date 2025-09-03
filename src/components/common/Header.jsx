'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about-us' },
    { name: 'Services', href: '/services' },
    { name: 'Commercial', href: '/commercial' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact-us' },
  ];

  return (
    <>
      <div className=" bg-white py-2 z-20 relative">
        <div className="max-w-[1360px] mx-auto flex md:flex-row flex-col items-center justify-between px-4 md:gap-0 gap-2">

          <div className="flex items-center space-x-32">
            <Link href="/"><Image src={`/images/logo.webp`} alt="Fort Knox Solutions" width={205} height={60} className="h-[60px] w-auto  py-" /></Link>
           
          </div>


          <nav className="hidden md:flex items-center space-x-8 relative">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-md leading-[16px] text-[#cb8b13] font-medium uppercase relative after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-[#f6b63f] after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100'
              >
                {item.name}
              </a>
            ))}
            
          </nav>
          <div className="flex md:flex-row flex-col items-center space-x-4 md:gap-2 gap-2">
            <div className="flex items-center space-x-4 bg-white px-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#f6e9cc' }}>
                <svg className="w-6 h-6 text-[#cfb16b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0 ">
                {/* <h3 className="text-lg font-semibold text-black mb-2">Call Us</h3> */}
                <div className="flex sm:flex-row flex-col sm:gap-4 sm:items-center">
                  <Link href="tel:416-770-5156s" className="text-lg leading-[16px] text-[#000000] font-medium flex items-center mb-0">
                    416-770-5156
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex  items-center rounded-full border-4 border-[#f6e9cc]">
              <a href="/#contactform"  className="text-lg leading-[16px] text-[#000000] px-3 py-3 text-center font-medium flex items-center mb-0">
                Get Free Quote
              </a>
            </div>
          </div>


          <div className="md:hidden block">
            <input type="checkbox" className="openSideMenu" id="openSideMenu" />
            <label htmlFor="openSideMenu" className="sideIconToggle">
              <div className="spinner diagonal part-1"></div>
              <div className="spinner horizontal"></div>
              <div className="spinner diagonal part-2"></div>
            </label>
            <div id="sideMenu" className="flex flex-col items-start gap-6 py-10">
              <div className="md:hidden bg-card ">
                <nav className="py-4 space-y-2 pl-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="w-auto block py-2 text-[#f6b63f] hover:text-primary hover:bg-muted transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#f6b63f] after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} color='#c5ad87' /> : <Menu size={24} color='#c5ad87' />}
          </button> */}
        </div>


        {/* {isMobileMenuOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-[#cfb16b] hover:text-primary hover:bg-muted transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )} */}
      </div>
    </>

  )
}

export default Header