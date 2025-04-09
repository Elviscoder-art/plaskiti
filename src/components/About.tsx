
import React from 'react';
import { Leaf, Heart, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-heading text-center mx-auto after:left-1/2 after:-translate-x-1/2">About Us</h2>
          <p className="text-lg text-gray-600">
            Go Green Nature is dedicated to environmental conservation, sustainability, and 
            empowering communities to be stewards of our natural world.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
              alt="Beautiful mountain landscape" 
              className="rounded-lg shadow-md w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-go-green-700 mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-6">
              We are committed to protecting biodiversity, promoting sustainable practices, and 
              fostering a deep connection between people and nature. Through conservation efforts, 
              education, and community engagement, we strive to create a more sustainable and 
              environmentally conscious world.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-go-green-100 p-3 rounded-full">
                  <Leaf className="text-go-green-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Conservation</h4>
                  <p className="text-gray-600">Protecting natural habitats and biodiversity through targeted initiatives.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-go-green-100 p-3 rounded-full">
                  <Heart className="text-go-green-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Community Engagement</h4>
                  <p className="text-gray-600">Empowering communities to take part in environmental stewardship.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-go-green-100 p-3 rounded-full">
                  <Globe className="text-go-green-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sustainability</h4>
                  <p className="text-gray-600">Advocating for sustainable practices that balance human needs with ecological health.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
