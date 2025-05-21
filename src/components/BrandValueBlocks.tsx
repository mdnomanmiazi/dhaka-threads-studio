
import React, { useEffect } from 'react';
import { ShieldCheck, Globe, Lightbulb } from 'lucide-react';
interface ValueBlock {
  icon: React.ReactNode;
  title: string;
  description: string;
}
const valueBlocks: ValueBlock[] = [{
  icon: <ShieldCheck className="h-10 w-10 text-iceBlue" />,
  title: "Sustainable Sourcing",
  description: "We prioritize eco-friendly materials and ethical sourcing practices to minimize environmental impact."
}, {
  icon: <Globe className="h-10 w-10 text-iceBlue" />,
  title: "Global Manufacturing Network",
  description: "Our worldwide production facilities ensure efficiency, quality control, and rapid delivery to any market."
}, {
  icon: <Lightbulb className="h-10 w-10 text-iceBlue" />,
  title: "Trend-Driven Design",
  description: "Our design team constantly monitors fashion trends to deliver cutting-edge products that capture market attention."
}];

const BrandValueBlocks: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.2
    });
    const blocks = document.querySelectorAll('.value-block');
    blocks.forEach(block => observer.observe(block));
    return () => {
      blocks.forEach(block => observer.unobserve(block));
    };
  }, []);
  
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white to-gray-100 opacity-50"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">Our Core Values</h2>
          <p className="text-gray-600">We combine innovation, sustainability, and expertise to deliver exceptional garment manufacturing solutions.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueBlocks.map((block, index) => (
            <div key={index} className="value-block p-8 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-xl hover:translate-y-[-5px] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-iceBlue to-navy transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-5 rounded-full p-4 bg-gray-50 text-iceBlue">
                  {block.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-navy">{block.title}</h3>
                <p className="text-gray-600">{block.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandValueBlocks;
