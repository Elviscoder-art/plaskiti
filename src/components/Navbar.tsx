
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white/90 sticky top-0 z-50 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-go-green-600 font-bold text-2xl">Go Green Nature</span>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-go-green-800">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-go-green-800 hover:text-go-green-600 font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-go-green-800 hover:text-go-green-600 font-medium">
              About Us
            </button>
            <button onClick={() => scrollToSection('programs')} className="text-go-green-800 hover:text-go-green-600 font-medium">
              Programs
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-go-green-800 hover:text-go-green-600 font-medium">
              Gallery
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-go-green-800 hover:text-go-green-600 font-medium">
              Contact
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 flex flex-col">
            <button onClick={() => scrollToSection('home')} className="text-go-green-800 hover:text-go-green-600 font-medium py-2">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-go-green-800 hover:text-go-green-600 font-medium py-2">
              About Us
            </button>
            <button onClick={() => scrollToSection('programs')} className="text-go-green-800 hover:text-go-green-600 font-medium py-2">
              Programs
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-go-green-800 hover:text-go-green-600 font-medium py-2">
              Gallery
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-go-green-800 hover:text-go-green-600 font-medium py-2">
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
