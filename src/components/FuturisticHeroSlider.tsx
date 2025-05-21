
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface Slide {
  id: number;
  image: string;
  heading: string;
  subheading: string;
  ctaLink: string;
  ctaText: string;
}

// Slides data with more futuristic images
const slides: Slide[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    heading: 'Future of Apparel Technology',
    subheading: 'Innovative manufacturing solutions for the next generation of fashion',
    ctaLink: '/contact',
    ctaText: 'Explore Innovation',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1621619856624-42fd193a0661?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    heading: 'Precision Engineered Fabrics',
    subheading: 'Advanced textiles designed for performance and sustainability',
    ctaLink: '/about',
    ctaText: 'Discover Technology',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80',
    heading: 'Smart Textile Evolution',
    subheading: 'Where technology meets fashion in perfect harmony',
    ctaLink: '/woven',
    ctaText: 'View Collection',
  },
];

const FuturisticHeroSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-advance slides
  useEffect(() => {
    if (isHovering) return;
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <section 
      className="relative h-screen w-full overflow-hidden bg-black"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-transparent to-black/40"></div>
        <div className="grid grid-cols-12 h-full w-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-blue-200/5 h-full"></div>
          ))}
        </div>
        <div className="grid grid-rows-12 h-full w-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-b border-blue-200/5 w-full"></div>
          ))}
        </div>
      </div>
      
      {/* Carousel */}
      <Carousel className="h-full w-full" opts={{ loop: true, align: 'start' }} orientation="horizontal">
        <CarouselContent className="h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id} className="h-full relative">
              {/* Background image with scale effect */}
              <div 
                className={cn(
                  "absolute inset-0 bg-cover bg-center transition-transform duration-[8s]",
                  index === activeIndex ? "scale-105" : "scale-100"
                )}
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-20 h-full flex items-center">
                <div className="container mx-auto px-8">
                  <div className="max-w-2xl text-left text-white">
                    {/* Animated heading */}
                    <div className="overflow-hidden mb-3">
                      <h1 
                        className={cn(
                          "text-4xl md:text-6xl lg:text-7xl font-bold transition-transform duration-1000 tracking-tight text-gradient",
                          index === activeIndex ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        )}
                      >
                        {slide.heading}
                      </h1>
                    </div>
                    
                    {/* Animated line */}
                    <div 
                      className={cn(
                        "h-[1px] w-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent transition-all duration-[1500ms]",
                        index === activeIndex ? "w-40" : "w-0"
                      )}
                    ></div>
                    
                    {/* Animated subheading */}
                    <p 
                      className={cn(
                        "text-lg md:text-xl mb-8 mt-6 font-light text-blue-50/90 max-w-lg transition-all delay-300 duration-1000",
                        index === activeIndex ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                      )}
                    >
                      {slide.subheading}
                    </p>
                    
                    {/* Animated button */}
                    <div 
                      className={cn(
                        "transform transition-all delay-500 duration-1000",
                        index === activeIndex ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                      )}
                    >
                      <Link to={slide.ctaLink} className="group inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all px-6 py-3 rounded-md">
                        {slide.ctaText}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Tech elements overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-30">
                {/* Circuit pattern overlay */}
                <svg className="absolute bottom-0 right-0 w-full h-1/3 text-white/5" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 400 L800 400" stroke="currentColor" strokeWidth="1" />
                  <path d="M0 200 L800 200" stroke="currentColor" strokeWidth="0.5" />
                  <path d="M0 600 L800 600" stroke="currentColor" strokeWidth="0.5" />
                  <path d="M400 0 L400 800" stroke="currentColor" strokeWidth="1" />
                  <path d="M200 0 L200 800" stroke="currentColor" strokeWidth="0.5" />
                  <path d="M600 0 L600 800" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="400" cy="400" r="50" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="400" cy="400" r="100" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="400" cy="400" r="200" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </svg>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Custom navigation */}
        <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-gold w-8' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm" />
            </TooltipTrigger>
            <TooltipContent side="right">Previous slide</TooltipContent>
          </Tooltip>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm" />
            </TooltipTrigger>
            <TooltipContent side="left">Next slide</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Carousel>
    </section>
  );
};

export default FuturisticHeroSlider;
