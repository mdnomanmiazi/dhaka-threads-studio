
import React, { useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
interface FabricItem {
  title: string;
  description: string;
  image: string;
  link: string;
}
const fabricItems: FabricItem[] = [{
  title: "Woven Excellence",
  description: "Premium fabrics with exceptional structure and durability",
  image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
  link: "/woven"
}, {
  title: "Knit Comfort",
  description: "Versatile and breathable materials for ultimate comfort",
  image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  link: "/knit"
}, {
  title: "Denim Durability",
  description: "Iconic styles that combine heritage with innovation",
  image: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  link: "/denim"
}];

const InteractiveFabricHighlights: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });
    const cards = document.querySelectorAll('.fabric-card');
    cards.forEach(card => observer.observe(card));
    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);
  
  return (
    <section ref={sectionRef} className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15]"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Premium Fabric Collections</h2>
          <p className="text-gray-300">Explore our diverse range of high-quality fabrics engineered for performance, comfort, and style.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {fabricItems.map((item, index) => (
            <div 
              key={index} 
              className="fabric-card relative rounded-xl overflow-hidden shadow-xl transition-all duration-500 group"
              style={{ 
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
              <div className="fabric-card__overlay absolute inset-0 opacity-0 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                <div className="icon-container p-3 rounded-full bg-white/10 backdrop-blur-sm w-fit mb-4">
                  <div className="w-8 h-8 rounded-full bg-iceBlue"></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-200 mb-6">{item.description}</p>
                <Link 
                  to={item.link} 
                  className="explore-link flex items-center text-iceBlue hover:text-white bg-white/10 backdrop-blur-sm py-2 px-4 rounded-lg w-fit"
                >
                  <span>Explore</span>
                  <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveFabricHighlights;
