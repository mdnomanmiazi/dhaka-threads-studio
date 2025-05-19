
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
  const [transitioning, setTransitioning] = useState(false);
  
  // Handle automatic slide transition
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentSlide]);
  
  // Navigate to next slide
  const nextSlide = () => {
    if (transitioning) return;
    
    setTransitioning(true);
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    
    setTimeout(() => {
      setTransitioning(false);
    }, 1000);
  };
  
  // Navigate to previous slide
  const prevSlide = () => {
    if (transitioning) return;
    
    setTransitioning(true);
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    
    setTimeout(() => {
      setTransitioning(false);
    }, 1000);
  };
  
  // Navigate to specific slide
  const goToSlide = (index: number) => {
    if (transitioning || index === currentSlide) return;
    
    setTransitioning(true);
    setCurrentSlide(index);
    
    setTimeout(() => {
      setTransitioning(false);
    }, 1000);
  };
  
  return (
    <div className="relative h-screen w-full overflow-hidden bg-navy">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background image with overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              transform: index === currentSlide ? 'scale(1.05)' : 'scale(1)', 
              transition: 'transform 6s ease-out',
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          
          {/* Slide content */}
          <div className="relative z-20 h-full flex items-center">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto text-center text-white">
                <h1 
                  className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 transform transition-transform duration-700 ${
                    index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                >
                  {slide.heading}
                </h1>
                <p 
                  className={`text-lg md:text-xl mb-8 transform transition-transform delay-300 duration-700 ${
                    index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                >
                  {slide.subheading}
                </p>
                <div 
                  className={`transform transition-all delay-500 duration-700 ${
                    index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                >
                  <Link to={slide.ctaLink} className="btn-secondary">
                    {slide.ctaText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 z-30 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 z-30 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Slide indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-gold' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
