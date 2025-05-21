
import React, { useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FabricItem {
  title: string;
  description: string;
  image: string;
  link: string;
}

const fabricItems: FabricItem[] = [
  {
    title: "Woven Excellence",
    description: "Premium fabrics with exceptional structure and durability",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    link: "/woven"
  },
  {
    title: "Knit Comfort",
    description: "Versatile and breathable materials for ultimate comfort",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    link: "/knit"
  },
  {
    title: "Denim Durability",
    description: "Iconic styles that combine heritage with innovation",
    image: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    link: "/denim"
  }
];

const InteractiveFabricHighlights: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const cards = document.querySelectorAll('.fabric-card');
    cards.forEach(card => observer.observe(card));
    
    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">Experience Our Materials</h2>
          <p className="text-gray-600">Discover the exceptional quality and variety of fabrics that define our manufacturing capabilities.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" ref={sectionRef}>
          {fabricItems.map((item, index) => (
            <div 
              key={index} 
              className="fabric-card relative h-[500px] rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent z-10"></div>
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                />
              </div>
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-serif font-bold mb-2">{item.title}</h3>
                <p className="mb-4 text-white/90">{item.description}</p>
                <Link 
                  to={item.link} 
                  className="inline-flex items-center text-white hover:text-iceBlue transition-colors group"
                >
                  <span>Explore</span>
                  <ChevronRight className="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="absolute inset-0 bg-iceBlue/10 opacity-0 transition-opacity duration-500 hover:opacity-100 z-5"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveFabricHighlights;
