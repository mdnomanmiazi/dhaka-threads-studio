
import React, { useEffect } from 'react';
import { ShieldCheck, Globe, Lightbulb } from 'lucide-react';

interface ValueBlock {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const valueBlocks: ValueBlock[] = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-iceBlue" />,
    title: "Sustainable Sourcing",
    description: "We prioritize eco-friendly materials and ethical sourcing practices to minimize environmental impact."
  },
  {
    icon: <Globe className="h-10 w-10 text-iceBlue" />,
    title: "Global Manufacturing Network",
    description: "Our worldwide production facilities ensure efficiency, quality control, and rapid delivery to any market."
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-iceBlue" />,
    title: "Trend-Driven Design",
    description: "Our design team constantly monitors fashion trends to deliver cutting-edge products that capture market attention."
  }
];

const BrandValueBlocks: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );
    
    const blocks = document.querySelectorAll('.value-block');
    blocks.forEach(block => observer.observe(block));
    
    return () => {
      blocks.forEach(block => observer.unobserve(block));
    };
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">Our Core Values</h2>
          <p className="text-gray-600">These principles guide our approach to garment manufacturing and define our commitment to excellence.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueBlocks.map((block, index) => (
            <div 
              key={index} 
              className="value-block bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-500 animate-on-scroll"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative mb-6">
                <div className="absolute -inset-1 bg-gradient-to-r from-iceBlue to-navy opacity-30 rounded-full blur-sm"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-full p-4 inline-block">
                  {block.icon}
                </div>
              </div>
              <h3 className="text-xl font-serif font-bold text-navy mb-3">{block.title}</h3>
              <p className="text-gray-600">{block.description}</p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-iceBlue to-navy transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandValueBlocks;
