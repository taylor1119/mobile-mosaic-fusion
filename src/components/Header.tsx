
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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-subtle" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="text-xl font-semibold flex items-center space-x-2">
            <span className="bg-primary text-primary-foreground h-8 w-8 rounded-full flex items-center justify-center">M</span>
            <span>Minimal</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium hover:text-accent transition-colors">Features</a>
            <a href="#about" className="text-sm font-medium hover:text-accent transition-colors">About</a>
            <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">Contact</a>
            <a 
              href="#download" 
              className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Download
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
          "fixed inset-0 z-40 bg-background pt-16 transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8 text-lg">
          <a 
            href="#features" 
            className="font-medium hover:text-accent transition-colors"
            onClick={closeMenu}
          >
            Features
          </a>
          <a 
            href="#about" 
            className="font-medium hover:text-accent transition-colors"
            onClick={closeMenu}
          >
            About
          </a>
          <a 
            href="#contact" 
            className="font-medium hover:text-accent transition-colors"
            onClick={closeMenu}
          >
            Contact
          </a>
          <a 
            href="#download" 
            className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            onClick={closeMenu}
          >
            Download
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
