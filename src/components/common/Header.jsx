'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <div className=" bg-white py-2 z-20 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4">

          <div className="flex items-center space-x-32">
            <Image src={`/images/logo.webp`} alt="Fort Knox Solutions" width={205} height={60} className="h-[60px] w-auto  py-" />
           
          </div>


          <nav className="hidden md:flex items-center space-x-8 relative">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-lg leading-[16px] text-[#cb8b13] font-semibold uppercase relative after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-[#f6b63f] after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100'
              >
                {item.name}
              </a>
            ))}
          </nav>


          <div className="md:hidden block">
            <input type="checkbox" className="openSideMenu" id="openSideMenu" />
            <label htmlFor="openSideMenu" className="sideIconToggle" onclick="openNav()">
              <div className="spinner diagonal part-1"></div>
              <div className="spinner horizontal"></div>
              <div className="spinner diagonal part-2"></div>
            </label>
            <div id="sideMenu" className="flex flex-col items-start gap-6 py-10">
              <div className="md:hidden bg-card ">
                <nav className="py-4 space-y-2 pl-4">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="w-auto block py-2 text-[#f6b63f] hover:text-primary hover:bg-muted transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#f6b63f] after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
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