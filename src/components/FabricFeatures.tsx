
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
        <div className="animate-on-scroll relative block overflow-hidden group bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-lg shadow-xl transition-all duration-500">
          <div 
            ref={blockRef}
            className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>
          <Link to={linkTo} className="relative h-full flex flex-col justify-between p-8 z-10 block">
            <h3 className="text-4xl font-serif font-bold tracking-wider text-white mb-2">{title}</h3>
            <div className="h-px w-16 bg-gradient-to-r from-white to-transparent my-3"></div>
            <p className="text-white/80 text-lg font-light italic">{subtitle}</p>
          </Link>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-navy/80 to-transparent opacity-80"></div>
          <div className="absolute inset-0 border border-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="glassmorphism bg-white/10 backdrop-blur-md border-white/20 text-white w-auto">
        <p className="text-sm">Explore our {title.toLowerCase()} fabric collection</p>
      </HoverCardContent>
    </HoverCard>
  );
};

const FabricFeatures: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-navy/95 z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border border-white/5 animate-pulse opacity-30"></div>
        <div className="absolute top-3/4 right-1/3 w-96 h-96 rounded-full border border-white/10 animate-pulse opacity-20" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-2/3 w-48 h-48 rounded-full border border-white/5 animate-pulse opacity-10" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Fabric Innovation</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">Discover our premium textile categories, each crafted with precision and innovation.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <FeatureBlock 
            title="WOVEN" 
            subtitle="Crisp & Classic" 
            backgroundImage="https://images.unsplash.com/photo-1594938291221-94f18cbb5660?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            linkTo="/woven"
            delay={0}
          />
          <FeatureBlock 
            title="KNIT" 
            subtitle="Soft & Stretchable" 
            backgroundImage="https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
            linkTo="/knit"
            delay={150}
          />
          <FeatureBlock 
            title="DENIM" 
            subtitle="Bold & Built to Last" 
            backgroundImage="https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            linkTo="/denim"
            delay={300}
          />
        </div>
      </div>
      
      {/* Diagonal section divider */}
      <div className="absolute bottom-0 left-0 w-full h-16 overflow-hidden z-10">
        <svg 
          viewBox="0 0 1440 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="absolute bottom-0 w-full h-full"
        >
          <path 
            d="M0 100H1440V20L0 100Z" 
            fill="white" 
          />
        </svg>
      </div>
    </section>
  );
};

export default FabricFeatures;
