
import React, { useEffect, useRef } from 'react';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const VideoBackground: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );
    
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
    <section className="relative h-[600px] overflow-hidden" ref={sectionRef}>
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* For now use a placeholder image instead of video */}
        <div className="absolute inset-0 bg-navy/40 z-10"></div>
        <div className="w-full h-full bg-gradient-to-r from-navy to-iceBlue animate-pulse" style={{ animationDuration: '15s' }}>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="flex flex-col items-center justify-center h-full text-white text-center animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">Premium Garment Manufacturing</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl text-white/90">
            Explore our state-of-the-art production facilities and quality processes
          </p>
          <Link 
            to="/about" 
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white group flex items-center px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300"
          >
            <Play className="mr-2 h-6 w-6 animate-pulse" />
            <span className="font-medium">Discover Our Process</span>
          </Link>
        </div>
      </div>
      
      {/* Abstract floating elements */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-iceBlue/10 backdrop-blur-xl animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-gold/10 backdrop-blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default VideoBackground;
