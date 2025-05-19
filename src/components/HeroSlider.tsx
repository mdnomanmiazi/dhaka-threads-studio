
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight, Circle, CircleDot } from "lucide-react";

// Slide interface
interface Slide {
  id: number;
  image: string;
  heading: string;
  subheading: string;
  ctaLink: string;
  ctaText: string;
}

// Slides data
const slides: Slide[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    heading: 'Trusted Global Apparel Sourcing',
    subheading: 'Your premium partner for fashion manufacturing in Bangladesh',
    ctaLink: '/contact',
    ctaText: 'Get a Quote',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    heading: 'Quality That Speaks Volumes',
    subheading: 'Premium fabrics and expert craftsmanship for global brands',
    ctaLink: '/about',
    ctaText: 'Learn More',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    heading: 'Fashion Delivered On Time',
    subheading: 'Reliable production and consistent on-time delivery worldwide',
    ctaLink: '/woven',
    ctaText: 'Explore Products',
  },
];

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Handle automatic slide transition
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoPlay) {
      interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoPlay]);
  
  // Pause autoplay on mouse enter, resume on mouse leave
  const handleMouseEnter = () => setAutoPlay(false);
  const handleMouseLeave = () => setAutoPlay(true);
  
  return (
    <div 
      className="relative h-screen w-full overflow-hidden bg-navy"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full h-full"
        setApi={(api) => {
          if (api) {
            api.on("select", () => {
              setCurrentSlide(api.selectedScrollSnap());
            });
          }
        }}
        current={currentSlide}
      >
        <CarouselContent className="h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id} className="h-full p-0">
              <div className="relative h-full w-full">
                {/* Background image with overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-10000"
                  style={{ 
                    backgroundImage: `url(${slide.image})`,
                    transform: index === currentSlide ? 'scale(1.05)' : 'scale(1)', 
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                </div>
                
                {/* Slide content */}
                <div className="relative z-20 h-full flex items-center">
                  <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center text-white">
                      <h1 
                        className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in`}
                      >
                        {slide.heading}
                      </h1>
                      <p 
                        className={`text-lg md:text-xl mb-8 animate-fade-in`}
                      >
                        {slide.subheading}
                      </p>
                      <div 
                        className={`animate-fade-in`}
                      >
                        <Link to={slide.ctaLink} className="btn-secondary">
                          {slide.ctaText}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Custom navigation arrows */}
        <button
          onClick={() => {
            setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
          }}
          className="absolute top-1/2 left-4 z-30 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <button
          onClick={() => {
            setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
          }}
          className="absolute top-1/2 right-4 z-30 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
        
        {/* Slide indicators */}
        <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="flex items-center justify-center h-8 w-8"
              aria-label={`Go to slide ${index + 1}`}
            >
              {index === currentSlide ? (
                <CircleDot className="h-3 w-3 text-gold" />
              ) : (
                <Circle className="h-3 w-3 text-white/50 hover:text-white/80" />
              )}
            </button>
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default HeroSlider;
