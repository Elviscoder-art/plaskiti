
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 hero-gradient opacity-80"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 lg:py-40 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Protecting Nature for Future Generations
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Join our mission to preserve, protect, and restore our natural environment through sustainable practices, education, and community engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => scrollToSection('programs')}
              className="btn-primary flex items-center justify-center gap-2"
            >
              Our Programs
              <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-go-green-700 hover:bg-go-green-50 font-semibold py-2 px-6 rounded-md transition-colors duration-200"
            >
              Get Involved
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
