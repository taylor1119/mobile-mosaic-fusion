
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, Menu, X } from 'lucide-react';

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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-subtle" : "bg-white"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="text-xl font-semibold flex items-center">
            <img 
              src="/lovable-uploads/9150c33c-d3f7-4c4e-8ef1-ecd850631701.png" 
              alt="Jacobi Robotics" 
              className="h-8 mr-2"
            />
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-accent flex items-center">
                Developers
                <ChevronDown size={16} className="ml-1" />
              </a>
            </div>
            <div className="relative group">
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-accent flex items-center">
                Solutions
                <ChevronDown size={16} className="ml-1" />
              </a>
            </div>
            <div className="relative group">
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-accent flex items-center">
                Company
                <ChevronDown size={16} className="ml-1" />
              </a>
            </div>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-accent">Blog</a>
            <a 
              href="#" 
              className="px-6 py-2 bg-white text-gray-700 rounded-full font-medium border-2 border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Request a Demo
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
        <nav className="flex flex-col items-center justify-center h-full space-y-8 text-lg">
          <a 
            href="#" 
            className="font-medium text-gray-700 hover:text-accent"
            onClick={closeMenu}
          >
            Developers
          </a>
          <a 
            href="#" 
            className="font-medium text-gray-700 hover:text-accent"
            onClick={closeMenu}
          >
            Solutions
          </a>
          <a 
            href="#" 
            className="font-medium text-gray-700 hover:text-accent"
            onClick={closeMenu}
          >
            Company
          </a>
          <a 
            href="#" 
            className="font-medium text-gray-700 hover:text-accent"
            onClick={closeMenu}
          >
            Blog
          </a>
          <a 
            href="#" 
            className="px-6 py-3 bg-white text-gray-700 rounded-full font-medium border-2 border-gray-300 hover:bg-gray-50 transition-colors"
            onClick={closeMenu}
          >
            Request a Demo
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
