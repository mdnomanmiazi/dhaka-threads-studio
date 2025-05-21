
import React from 'react';

interface FloatingElementsProps {
  className?: string;
}

const FloatingElements: React.FC<FloatingElementsProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Circle elements */}
      <div className="absolute top-[10%] left-[5%] w-32 h-32 rounded-full border border-blue-200/30 float"></div>
      <div className="absolute top-[30%] right-[10%] w-24 h-24 rounded-full border border-blue-300/20 float-delayed"></div>
      <div className="absolute bottom-[15%] left-[20%] w-40 h-40 rounded-full border border-sky-200/20 float-slow"></div>
      
      {/* Square elements */}
      <div className="absolute top-[60%] right-[15%] w-16 h-16 rotate-45 border border-blue-100/30 float-delayed"></div>
      <div className="absolute top-[25%] left-[30%] w-20 h-20 rotate-12 border border-blue-200/20 float-slow"></div>
      
      {/* Line elements */}
      <div className="absolute top-[45%] left-[5%] w-[15%] h-[1px] bg-gradient-to-r from-transparent via-blue-200/40 to-transparent float"></div>
      <div className="absolute bottom-[30%] right-[5%] w-[10%] h-[1px] bg-gradient-to-r from-transparent via-blue-300/30 to-transparent float-delayed"></div>
      
      {/* Dot pattern */}
      <div className="absolute top-[15%] right-[30%] grid grid-cols-3 gap-3 float-slow">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-blue-200/40"></div>
        ))}
      </div>
    </div>
  );
};

export default FloatingElements;
