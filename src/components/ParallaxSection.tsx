
import React, { useEffect, useRef, useState } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ 
  children, 
  className = "", 
  speed = 0.3 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const scrollPosition = window.pageYOffset;
      const elementPosition = ref.current.offsetTop;
      const elementHeight = ref.current.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Calculate when the element is in view
      if (scrollPosition + windowHeight > elementPosition && 
          scrollPosition < elementPosition + elementHeight) {
        
        // Calculate how far the element is from the viewport top
        const distance = (scrollPosition + windowHeight - elementPosition);
        const parallaxOffset = distance * speed;
        
        setOffset(parallaxOffset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial calculation
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return (
    <div 
      ref={ref} 
      className={`relative overflow-hidden ${className}`}
      style={{ transform: `translateY(${-offset}px)` }}
    >
      {children}
    </div>
  );
};

export default ParallaxSection;
