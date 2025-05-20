
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FuturisticFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
  className?: string;
}

const FuturisticFeature: React.FC<FuturisticFeatureProps> = ({ 
  icon, 
  title, 
  description, 
  delay = 0,
  className = ""
}) => {
  return (
    <div 
      className={cn(
        "stagger-item relative frost-panel group overflow-hidden transition-all duration-500",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="p-8 relative z-10">
        <div className="mb-6 text-blue-600 bg-blue-50 p-3 rounded-lg inline-flex items-center justify-center w-14 h-14 group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
        
        <h3 className="text-xl font-medium text-slate mb-3 group-hover:text-blue-700 transition-colors duration-300">{title}</h3>
        
        <div className="w-10 h-0.5 bg-blue-200 mb-4 group-hover:w-16 transition-all duration-500"></div>
        
        <p className="text-slate/80">{description}</p>
      </div>
      
      {/* Corner accent */}
      <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

export default FuturisticFeature;
