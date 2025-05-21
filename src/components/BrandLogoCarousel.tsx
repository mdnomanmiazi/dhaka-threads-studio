
import React, { useEffect, useRef } from 'react';

interface LogoItem {
  name: string;
  logo: string;
}

// Placeholder for brand logos - replace with actual client logos
const brandLogos: LogoItem[] = [
  { name: "Fashion Brand 1", logo: "BRAND 1" },
  { name: "Apparel Co 2", logo: "BRAND 2" },
  { name: "Style Inc 3", logo: "BRAND 3" },
  { name: "Design House 4", logo: "BRAND 4" },
  { name: "Clothing Corp 5", logo: "BRAND 5" },
  { name: "Textile Group 6", logo: "BRAND 6" },
  { name: "Garment Global 7", logo: "BRAND 7" },
  { name: "Fashion Elite 8", logo: "BRAND 8" }
];

const BrandLogoCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const animateScroll = () => {
      if (scrollRef.current) {
        if (scrollRef.current.scrollLeft >= (scrollRef.current.scrollWidth - scrollRef.current.clientWidth)) {
          scrollRef.current.scrollLeft = 0;
        } else {
          scrollRef.current.scrollLeft += 1;
        }
      }
    };
    
    const interval = setInterval(animateScroll, 30);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">Trusted by Global Brands</h2>
          <p className="text-gray-600">Join the world's leading fashion houses who rely on our manufacturing expertise.</p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <div 
            ref={scrollRef}
            className="flex gap-16 py-8 overflow-x-auto scrollbar-none"
            style={{ scrollBehavior: 'smooth' }}
          >
            {/* Double the logos for continuous scrolling */}
            {[...brandLogos, ...brandLogos].map((brand, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 flex items-center justify-center h-20 w-48 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-gray-400 hover:text-navy transition-colors">
                  {brand.logo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandLogoCarousel;
