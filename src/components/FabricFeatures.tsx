
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

interface FeatureBlockProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  linkTo: string;
  delay: number;
}

const FeatureBlock: React.FC<FeatureBlockProps> = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  linkTo,
  delay 
}) => {
  const blockRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (blockRef.current) {
      observer.observe(blockRef.current);
    }
    
    return () => {
      if (blockRef.current) {
        observer.unobserve(blockRef.current);
      }
    };
  }, [delay]);
  
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div
          ref={blockRef}
          className="animate-on-scroll relative group cursor-pointer"
        >
          <Link 
            to={linkTo}
            className="block h-full"
          >
            <div className="relative h-80 rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-100 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${backgroundImage})` }}
              ></div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent"></div>
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8 z-10">
                <div className="transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                  <h3 className="text-3xl font-serif font-bold text-white mb-2 tracking-wide">{title}</h3>
                  <div className="w-12 h-0.5 bg-gold mb-3 transition-all duration-500 group-hover:w-20"></div>
                  <p className="text-white/90 text-lg font-light">{subtitle}</p>
                </div>
              </div>
              
              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </Link>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="bg-white border border-gray-200 shadow-lg text-gray-800 w-auto">
        <p className="text-sm">Explore our {title.toLowerCase()} fabric collection</p>
      </HoverCardContent>
    </HoverCard>
  );
};

const FabricFeatures: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gold/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-navy/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-block">
            <span className="text-sm font-medium text-gold uppercase tracking-wider mb-2 block">Premium Collections</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">
              Fabric Innovation
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-navy mx-auto mb-6"></div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Discover our premium textile categories, each crafted with precision and innovation for the modern fashion industry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureBlock 
            title="WOVEN" 
            subtitle="Crisp & Classic" 
            backgroundImage="https://images.unsplash.com/photo-1594938291221-94f18cbb5660?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            linkTo="https://demo.texwavefashion.com/woven"
            delay={0}
          />
          <FeatureBlock 
            title="KNIT" 
            subtitle="Soft & Stretchable" 
            backgroundImage="https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
            linkTo="https://demo.texwavefashion.com/knit"
            delay={150}
          />
          <FeatureBlock 
            title="DENIM" 
            subtitle="Bold & Built to Last" 
            backgroundImage="https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            linkTo="https://demo.texwavefashion.com/denim"
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default FabricFeatures;
