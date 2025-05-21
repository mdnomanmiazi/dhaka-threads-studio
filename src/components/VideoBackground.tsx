
import React, { useEffect, useRef } from 'react';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const VideoBackground: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.2
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Video background with fallback image */}
      <div className="absolute inset-0 w-full h-full">
        {/* This would be an actual video in production */}
        <div className="w-full h-full bg-navy animate-on-scroll bg-[url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-navy/70 backdrop-blur-sm"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-on-scroll md:col-span-1 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center group hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <Play className="w-10 h-10 text-white ml-1 group-hover:scale-110 transition-transform" />
            </div>
          </div>
          
          <div className="text-white md:col-span-1 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Crafting Excellence in Every Thread</h2>
            <p className="text-gray-200 mb-8 text-lg">
              Our state-of-the-art manufacturing processes combine traditional craftsmanship with cutting-edge technology to deliver garments of exceptional quality and consistency.
            </p>
            <Link to="/about" className="btn-primary bg-white/10 hover:bg-white/20 backdrop-blur-sm inline-flex items-center">
              Discover Our Process
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoBackground;
