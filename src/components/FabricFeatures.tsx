import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Shirt, Scissors } from "lucide-react";
interface FeatureBlockProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  linkTo: string;
  delay: number;
  icon: React.ReactNode;
}
const FeatureBlock: React.FC<FeatureBlockProps> = ({
  title,
  subtitle,
  backgroundImage,
  linkTo,
  delay,
  icon
}) => {
  const blockRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
        }
      });
    }, {
      threshold: 0.1
    });
    if (blockRef.current) {
      observer.observe(blockRef.current);
    }
    return () => {
      if (blockRef.current) {
        observer.unobserve(blockRef.current);
      }
    };
  }, [delay]);
  return <div ref={blockRef} className="animate-on-scroll feature-card relative overflow-hidden rounded-xl transition-all duration-500">
      <div className="absolute inset-0 bg-cover bg-center" style={{
      backgroundImage: `url(${backgroundImage})`
    }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/40 to-navy/90"></div>
      
      <div className="relative h-full flex flex-col items-center justify-between p-6 z-10">
        <div className="icon-container p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4">
          <div className="text-iceBlue">{icon}</div>
        </div>
        
        <h3 className="text-2xl md:text-3xl font-serif font-bold tracking-wider text-white text-center mb-3">{title}</h3>
        
        <div className="h-px w-16 bg-gradient-to-r from-iceBlue via-white to-iceBlue my-3"></div>
        
        <p className="text-white/80 text-base md:text-lg font-light text-center mb-6">{subtitle}</p>
        
        <Link to={linkTo} className="explore-link px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white transition-all hover:bg-white/20">
          Explore Collection
        </Link>
      </div>
      
      <div className="fabric-card__overlay absolute inset-0 opacity-0 transition-opacity duration-500"></div>
    </div>;
};
const FabricFeatures: React.FC = () => {
  return <section className="py-24 bg-gradient-to-b from-gray-900 to-navy relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full border border-iceBlue/20 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full border border-white/10 animate-pulse" style={{
          animationDuration: '15s'
        }}></div>
          <div className="absolute top-1/3 left-1/3 w-32 h-32 rounded-full border-2 border-white/5 animate-spin" style={{
          animationDuration: '30s'
        }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Our Fabric Innovation</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">Discover our signature textile categories, each crafted with precision and expertise</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureBlock title="WOVEN EXCELLENCE" subtitle="Crisp textures and refined details for the perfect structured garments" backgroundImage="https://images.unsplash.com/photo-1594938291221-94f18cbb5660?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" linkTo="/woven" delay={0} icon={<Shirt size={32} />} />
          <FeatureBlock title="KNIT PRECISION" subtitle="Soft, versatile fabrics engineered for comfortable, adaptive wear" backgroundImage="https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" linkTo="/knit" delay={150} icon={<Shirt size={32} />} />
          <FeatureBlock title="DENIM INNOVATION" subtitle="Enduring quality meets contemporary style for timeless appeal" backgroundImage="https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" linkTo="/denim" delay={300} icon={<Scissors size={32} />} />
        </div>
      </div>
      
      
    </section>;
};
export default FabricFeatures;