
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? '' : 'hidden';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-subtle" : "bg-white"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/" className="text-xl font-semibold flex items-center">
            <img 
              src="/lovable-uploads/9150c33c-d3f7-4c4e-8ef1-ecd850631701.png" 
              alt="Jacobi Robotics" 
              className="h-8 mr-2"
            />
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-accent">
              Products
            </a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-accent">
              Solutions
            </a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-accent">
              Resources
            </a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-accent">
              Company
            </a>
            <a 
              href="/contact" 
              className="px-5 py-2 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors"
            >
              Contact Us
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center justify-center" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-white pt-16 transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col p-4 space-y-6 text-lg">
          <a 
            href="#" 
            className="font-medium text-gray-700 hover:text-accent py-2"
            onClick={closeMenu}
          >
            Products
          </a>
          <a 
            href="#" 
            className="font-medium text-gray-700 hover:text-accent py-2"
            onClick={closeMenu}
          >
            Solutions
          </a>
          <a 
            href="#" 
            className="font-medium text-gray-700 hover:text-accent py-2"
            onClick={closeMenu}
          >
            Resources
          </a>
          <a 
            href="#" 
            className="font-medium text-gray-700 hover:text-accent py-2"
            onClick={closeMenu}
          >
            Company
          </a>
          <a 
            href="/contact" 
            className="px-5 py-2 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors text-center mt-4"
            onClick={closeMenu}
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
