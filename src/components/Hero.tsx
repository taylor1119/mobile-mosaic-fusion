
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      const elements = heroRef.current.querySelectorAll('.parallax-element');
      elements.forEach((el) => {
        const speed = parseFloat((el as HTMLElement).dataset.speed || '1');
        (el as HTMLElement).style.transform = `translate(${x * 20 * speed}px, ${y * 20 * speed}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <div className="relative overflow-hidden min-h-screen flex items-center" ref={heroRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="parallax-element absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-accent/5 blur-3xl"
          data-speed="0.5"
        />
        <div 
          className="parallax-element absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
          data-speed="0.3"
        />
      </div>
      
      <div className="container mx-auto px-4 pt-20 md:pt-32 lg:pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-center lg:text-left animate-fade-in">
            <div>
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
                Introducing Minimal
              </span>
              <h1 className="font-bold text-balance">
                Simplicity is the ultimate sophistication
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                Discover the beauty of minimalism in design. Elevate your digital experience with our clean, 
                functional, and elegant solution.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#download" 
                className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group"
              >
                Get Started
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#learn-more" 
                className="px-6 py-3 border border-input rounded-full font-medium hover:bg-secondary transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="relative z-10 aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-subtle">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/5"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass p-6 rounded-xl max-w-xs text-center">
                  <h3 className="text-xl font-medium mb-2">Minimal Design</h3>
                  <p className="text-sm text-muted-foreground">
                    Less is more. Focus on what truly matters with our minimal approach.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="parallax-element absolute -top-6 -right-6 w-24 h-24 bg-background rounded-lg border border-border shadow-subtle flex items-center justify-center animate-float" data-speed="1.2">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-accent font-medium">+</span>
              </div>
            </div>
            
            <div className="parallax-element absolute -bottom-8 -left-8 w-32 h-16 bg-background rounded-lg border border-border shadow-subtle flex items-center justify-center animate-float animation-delay-1000" data-speed="0.8">
              <span className="text-sm font-medium">Seamless</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
