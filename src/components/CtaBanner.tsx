
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const CtaBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-navy to-blue-900 relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-iceBlue blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-blue-300 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif">
            Let's create something iconic together
          </h2>
          <p className="text-blue-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Transform your clothing concepts into reality with our expert manufacturing capabilities and innovative fabric solutions.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-white text-navy font-medium rounded-md hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            Request a Sample
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
