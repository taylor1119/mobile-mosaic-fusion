
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

const Index = () => {
  // Disable body scroll when mobile menu is open
  useEffect(() => {
    const handleResize = () => {
      // Reset any inline styles if window is resized to desktop
      if (window.innerWidth >= 768) {
        document.body.style.overflow = '';
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <section id="about" className="section-padding bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                About Us
              </span>
              <h2 className="font-bold mb-6 text-balance">
                We believe in the power of simplicity
              </h2>
              <p className="text-muted-foreground mb-8">
                Minimal was founded with a singular vision: to bring clarity to complexity. In a world 
                overflowing with distractions, we craft experiences that cut through the noise and 
                focus on what truly matters. Our team of designers and developers work together to 
                create products that are not only beautiful but also functional and intuitive.
              </p>
              <a 
                href="#contact" 
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
        
        <section id="contact" className="section-padding">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
                  Contact Us
                </span>
                <h2 className="font-bold mb-6 text-balance">
                  Let's start a conversation
                </h2>
                <p className="text-muted-foreground mb-8 max-w-lg">
                  Have a question or feedback? We'd love to hear from you. Our team is always 
                  ready to connect and help you with any inquiries you might have.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                      <span className="text-lg font-medium">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Say Hello</h4>
                      <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                      <span className="text-lg font-medium">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Connect</h4>
                      <p className="text-sm text-muted-foreground">Schedule a discovery call</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                      <span className="text-lg font-medium">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Collaborate</h4>
                      <p className="text-sm text-muted-foreground">Start working together</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-background rounded-2xl border border-border p-8 shadow-subtle">
                <h3 className="text-xl font-medium mb-6">Send us a message</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 rounded-lg border border-input focus:border-accent focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 rounded-lg border border-input focus:border-accent focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-input focus:border-accent focus:outline-none transition-colors resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        <section id="download" className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-bold mb-6 text-balance max-w-2xl mx-auto">
              Ready to experience the power of minimalism?
            </h2>
            <p className="mb-8 text-primary-foreground/80 max-w-xl mx-auto">
              Join thousands of designers, developers, and creators who have already embraced our minimal approach.
            </p>
            <a 
              href="#" 
              className="inline-block px-8 py-4 bg-white text-primary rounded-full font-medium hover:bg-white/90 transition-colors"
            >
              Download Now
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
