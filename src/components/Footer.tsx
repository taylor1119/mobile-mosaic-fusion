
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <img 
              src="/lovable-uploads/9150c33c-d3f7-4c4e-8ef1-ecd850631701.png" 
              alt="Jacobi Robotics" 
              className="h-8 mb-4"
            />
            <p className="text-sm text-gray-600 mb-4">
              Innovative robotics solutions for modern industries.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-600 hover:text-accent transition-colors">Automation</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-accent transition-colors">AI Solutions</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-accent transition-colors">Industrial Robots</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-accent transition-colors">Custom Robotics</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-600 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-accent transition-colors">News</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-600 hover:text-accent transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-accent transition-colors">Documentation</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-accent transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-accent transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} Jacobi Robotics. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
