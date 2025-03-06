
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

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

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    workEmail: '',
    country: '',
    phoneNumber: '',
    projectDescription: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your server
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Have a project in mind! Book a demo.
              </h1>
              <p className="text-lg text-gray-600">
                Got a project? Drop me a line if you want to work together on something
                exciting. Or do you need our help? Feel free to contact us.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-lg shadow-lg max-w-5xl mx-auto">
              {/* Contact Info Column */}
              <div className="bg-[#1a2e3a] text-white p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-10">Get in touch</h2>
                
                <div className="space-y-8">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#2a3e4a] flex items-center justify-center mr-4">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300 mb-1">EMAIL US</p>
                      <p className="font-medium">contact@jacobirobotics.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#2a3e4a] flex items-center justify-center mr-4">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300 mb-1">PHONE NUMBER</p>
                      <p className="font-medium">+1-222-555-2222</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#2a3e4a] flex items-center justify-center mr-4">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300 mb-1">ADDRESS</p>
                      <p className="font-medium">4071 Emery St</p>
                      <p className="font-medium">Emeryville, CA 94608</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-16">
                  <p className="mb-4 text-gray-300 flex items-center">
                    <span className="w-6 h-px bg-gray-500 mr-2"></span>
                    Connect with us:
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-[#2a3e4a] flex items-center justify-center hover:bg-[#3a4e5a] transition-colors">
                      <Facebook size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-[#2a3e4a] flex items-center justify-center hover:bg-[#3a4e5a] transition-colors">
                      <Twitter size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-[#2a3e4a] flex items-center justify-center hover:bg-[#3a4e5a] transition-colors">
                      <Linkedin size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-[#2a3e4a] flex items-center justify-center hover:bg-[#3a4e5a] transition-colors">
                      <Instagram size={18} />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Form Column */}
              <div className="bg-white p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                        placeholder="First name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                        Company name
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                        placeholder="Company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="workEmail" className="block text-sm font-medium text-gray-700 mb-1">
                        Work email
                      </label>
                      <input
                        type="email"
                        id="workEmail"
                        value={formData.workEmail}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                        placeholder="Work email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                      Country
                    </label>
                    <input
                      type="text"
                      id="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                      placeholder="Country"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <div className="flex">
                      <div className="w-20 flex items-center justify-center border border-gray-300 rounded-l-md bg-gray-50 px-2">
                        <span className="inline-flex items-center">
                          <img src="https://cdn.jsdelivr.net/npm/flag-icon-css@3.5.0/flags/4x3/ca.svg" alt="Canada" className="h-4 w-4 mr-1" />
                          +880
                        </span>
                      </div>
                      <input
                        type="tel"
                        id="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-r-md focus:ring-accent focus:border-accent"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 mb-1">
                      Describe the project you need help with
                    </label>
                    <textarea
                      id="projectDescription"
                      value={formData.projectDescription}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent resize-none"
                      placeholder="Please tell us how we can help..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="inline-block px-8 py-3 bg-[#1a2e3a] text-white rounded-md hover:bg-[#2a3e4a] transition-colors font-medium"
                  >
                    SUBMIT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
