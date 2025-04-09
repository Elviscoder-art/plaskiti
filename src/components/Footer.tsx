
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-go-green-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Go Green Nature</h3>
            <p className="text-go-green-100 mb-4">
              Dedicated to preserving and protecting our natural environment for future generations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-go-green-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-go-green-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-go-green-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-go-green-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-go-green-100 hover:text-white"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-go-green-100 hover:text-white"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('programs')}
                  className="text-go-green-100 hover:text-white"
                >
                  Programs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="text-go-green-100 hover:text-white"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-go-green-100 hover:text-white"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Programs</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-go-green-100 hover:text-white">
                  Forest Conservation
                </a>
              </li>
              <li>
                <a href="#" className="text-go-green-100 hover:text-white">
                  Water Resource Management
                </a>
              </li>
              <li>
                <a href="#" className="text-go-green-100 hover:text-white">
                  Environmental Education
                </a>
              </li>
              <li>
                <a href="#" className="text-go-green-100 hover:text-white">
                  Sustainable Agriculture
                </a>
              </li>
              <li>
                <a href="#" className="text-go-green-100 hover:text-white">
                  Wildlife Protection
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-go-green-100 mb-4">
              Subscribe to our newsletter to receive updates on our programs and events.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-800"
              />
              <button className="bg-go-green-600 hover:bg-go-green-700 px-4 py-2 rounded-r-md flex items-center justify-center">
                <Mail size={20} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-go-green-800 pt-6 text-center text-go-green-200">
          <p>© {currentYear} Go Green Nature. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
