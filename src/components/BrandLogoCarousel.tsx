
import React, { useEffect, useRef } from 'react';
interface LogoItem {
  name: string;
  logo: string;
}

// Placeholder for brand logos - replace with actual client logos
const brandLogos: LogoItem[] = [{
  name: "Fashion Brand 1",
  logo: "BRAND 1"
}, {
  name: "Apparel Co 2",
  logo: "BRAND 2"
}, {
  name: "Style Inc 3",
  logo: "BRAND 3"
}, {
  name: "Design House 4",
  logo: "BRAND 4"
}, {
  name: "Clothing Corp 5",
  logo: "BRAND 5"
}, {
  name: "Textile Group 6",
  logo: "BRAND 6"
}, {
  name: "Garment Global 7",
  logo: "BRAND 7"
}, {
  name: "Fashion Elite 8",
  logo: "BRAND 8"
}];

const BrandLogoCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const animateScroll = () => {
      if (scrollRef.current) {
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
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
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <h3 className="text-2xl font-serif text-center mb-8 text-navy">Trusted by Leading Brands</h3>
        
        <div 
          ref={scrollRef} 
          className="overflow-hidden whitespace-nowrap"
          style={{ WebkitOverflowScrolling: 'touch', msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
          <div className="inline-block animate-on-scroll">
            {/* Duplicate the logos to create a seamless loop */}
            {[...brandLogos, ...brandLogos].map((logo, index) => (
              <div 
                key={index} 
                className="inline-block mx-8 opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="h-20 flex items-center justify-center">
                  <span className="text-xl font-bold text-navy">{logo.logo}</span>
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
