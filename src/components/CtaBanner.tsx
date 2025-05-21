
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const CtaBanner: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-navy to-navy/90 relative overflow-hidden">
      {/* Glassmorphism decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-iceBlue/10 backdrop-blur-sm"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-iceBlue/5 backdrop-blur-sm"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Let's create something iconic together
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Start your product inquiry now and bring your fashion vision to life with our premium manufacturing services.
          </p>
          
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy font-bold rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(51,195,240,0.5)] group"
          >
            Request a Sample
            <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
