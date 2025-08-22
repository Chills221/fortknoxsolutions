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
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <div className=" bg-black py-2">
         <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4">
         
           <div className="flex items-center space-x-32">
             <Image src={`/images/logo.webp`} alt="Fort Knox Solutions" width={205} height={60} className="h-[60px] w-auto  py-" />
            {/* <div className="text-xl font-bold ">
               <span className="text-gradient">FORT KNOX</span>
              <div className="text-sm font-normal text-muted-foreground">SOLUTIONS</div> 
            </div> */}
          </div>

         
           <nav className="hidden md:flex items-center space-x-8 relative">
             {navItems.map((item) => (
               <a
                key={item.name}
                href={item.href}
               className="text-[#c5ad87] font-medium uppercase"
               >
                {item.name}
               </a>
             ))}
           </nav>

         
           <button
             className="md:hidden "
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
           >
            {isMobileMenuOpen ? <X size={24} color='#c5ad87' /> : <Menu size={24} color='#c5ad87' />}
           </button>
         </div>

       
         {isMobileMenuOpen && (
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
         )}
       </div>
      </>
    
  )
}

export default Header