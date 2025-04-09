
import React from 'react';
import { ArrowRight, Trees, Droplets, Users } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "Forest Conservation",
      description: "Our flagship program focuses on preserving forest ecosystems, protecting biodiversity, and promoting sustainable forestry practices.",
      icon: Trees,
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1988&q=80"
    },
    {
      id: 2,
      title: "Water Resource Management",
      description: "We work to protect and restore watersheds, rivers, and wetlands through community-based conservation and monitoring initiatives.",
      icon: Droplets,
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
    },
    {
      id: 3,
      title: "Environmental Education",
      description: "Empowering communities with knowledge and skills to become environmental stewards through workshops, school programs, and community training.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    }
  ];

  return (
    <section id="programs" className="py-16 md:py-24 bg-go-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-heading text-center mx-auto after:left-1/2 after:-translate-x-1/2">Our Programs</h2>
          <p className="text-lg text-gray-600">
            Discover our initiatives focused on preserving nature and building sustainable communities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div key={program.id} className="program-card">
              <div className="h-48 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-go-green-100 p-2 rounded-full">
                    <program.icon className="text-go-green-600" size={20} />
                  </div>
                  <h3 className="font-bold text-xl text-go-green-800">{program.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <button className="flex items-center text-go-green-600 hover:text-go-green-800 font-medium">
                  Learn more
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
