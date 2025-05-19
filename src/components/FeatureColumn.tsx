
import React, { useEffect, useRef } from 'react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureColumn: React.FC<FeatureProps> = ({ icon, title, description, delay = 0 }) => {
  const featureRef = useRef<HTMLDivElement>(null);
  
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
      { threshold: 0.3 }
    );
    
    if (featureRef.current) {
      observer.observe(featureRef.current);
    }
    
    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, [delay]);
  
  return (
    <div ref={featureRef} className="animate-on-scroll flex flex-col items-center text-center p-6 md:p-8">
      <div className="text-gold mb-4 transition-all duration-500 hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-serif font-medium mb-3 text-navy">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureColumn;
