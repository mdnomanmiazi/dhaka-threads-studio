
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

// Slide interface with parallax layers
interface Slide {
  id: number;
  backgroundImage: string;
  overlayImage?: string;
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
  theme: 'dark' | 'light';
}

// Enhanced slides data
const slides: Slide[] = [
  {
    id: 1,
    backgroundImage: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    headline: 'REVOLUTIONIZE YOUR FASHION',
    subheadline: 'Premium apparel manufacturing with cutting-edge technology and sustainable practices',
    ctaText: 'Get Started',
    ctaLink: '/contact',
    theme: 'dark'
  },
  {
    id: 2,
    backgroundImage: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    headline: 'CRAFTED TO PERFECTION',
    subheadline: 'Every thread tells a story of quality, innovation, and exceptional craftsmanship',
    ctaText: 'Learn More',
    ctaLink: '/about',
    theme: 'dark'
  },
  {
    id: 3,
    backgroundImage: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    headline: 'GLOBAL REACH, LOCAL TOUCH',
    subheadline: 'Delivering world-class fashion solutions with personalized service across continents',
    ctaText: 'Explore Products',
    ctaLink: '/products',
    theme: 'dark'
  },
];

const HeroSlider: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    duration: 40 
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const parallaxRef = useRef<HTMLDivElement>(null);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Initialize embla
  useEffect(() => {
    if (!emblaApi) return;
    
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    setIsLoaded(true);
    
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        parallaxRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced autoplay
  const autoplay = useCallback(() => {
    if (isPaused || !emblaApi) return;
    
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current);
    }
    
    autoplayRef.current = setTimeout(() => {
      emblaApi.scrollNext();
      autoplay();
    }, 6000);
  }, [emblaApi, isPaused]);

  useEffect(() => {
    autoplay();
    
    return () => {
      if (autoplayRef.current) {
        clearTimeout(autoplayRef.current);
      }
    };
  }, [autoplay]);

  return (
    <div 
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Parallax Background Container */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 scale-110"
      >
        <div className="absolute inset-0 overflow-hidden" ref={emblaRef}>
          <div className="flex h-full w-full">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className="relative flex-[0_0_100%] h-full"
              >
                {/* Background Image with Ken Burns Effect */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-[10s] ease-out"
                  style={{ 
                    backgroundImage: `url(${slide.backgroundImage})`,
                    transform: index === selectedIndex ? 'scale(1.1)' : 'scale(1.05)',
                  }}
                >
                  {/* Dynamic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent"></div>
                </div>

                {/* Animated Geometric Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div 
                    className={`absolute top-1/4 -right-32 w-64 h-64 border border-gold/20 rotate-45 transition-all duration-[2s] ${
                      index === selectedIndex ? 'translate-x-0 opacity-30' : 'translate-x-32 opacity-0'
                    }`}
                  ></div>
                  <div 
                    className={`absolute bottom-1/4 -left-32 w-48 h-48 border border-white/10 rotate-12 transition-all duration-[2s] delay-300 ${
                      index === selectedIndex ? 'translate-x-0 opacity-20' : '-translate-x-32 opacity-0'
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Content Layer */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 flex flex-col justify-center transition-all duration-1000 ${
                  index === selectedIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {/* Main Headline */}
                <h1 
                  className={`text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-white leading-tight tracking-tight transform transition-all duration-1200 ${
                    index === selectedIndex ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                  }`}
                  style={{ 
                    fontFamily: "'Montserrat', 'Inter', sans-serif",
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {slide.headline.split(' ').map((word, wordIndex) => (
                    <span 
                      key={wordIndex}
                      className="inline-block mr-4"
                      style={{
                        animationDelay: index === selectedIndex ? `${wordIndex * 150}ms` : '0ms'
                      }}
                    >
                      {word}
                    </span>
                  ))}
                </h1>

                {/* Subheadline */}
                <p 
                  className={`text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1200 delay-300 ${
                    index === selectedIndex ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}
                  style={{ 
                    textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
                    fontWeight: '300'
                  }}
                >
                  {slide.subheadline}
                </p>

                {/* CTA Button */}
                <div 
                  className={`transform transition-all duration-1200 delay-500 ${
                    index === selectedIndex ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                >
                  <Link 
                    to={slide.ctaLink} 
                    className="group inline-flex items-center gap-3 bg-gradient-to-r from-gold to-yellow-400 hover:from-yellow-400 hover:to-gold text-navy px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-gold/25"
                  >
                    <span>{slide.ctaText}</span>
                    <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>

                {/* Decorative Line */}
                <div 
                  className={`mt-12 mx-auto transition-all duration-1200 delay-700 ${
                    index === selectedIndex ? 'w-24 opacity-60' : 'w-0 opacity-0'
                  } h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Navigation */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute top-1/2 left-6 z-30 -translate-y-1/2 group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 group-hover:-translate-x-1 transition-transform duration-300" />
      </button>
      
      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute top-1/2 right-6 z-30 -translate-y-1/2 group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
      </button>
      
      {/* Modern Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-3">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`group relative transition-all duration-500 ${
              index === selectedIndex 
                ? 'w-12 h-3' 
                : 'w-3 h-3 hover:w-6'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <div 
              className={`w-full h-full rounded-full transition-all duration-500 ${
                index === selectedIndex 
                  ? 'bg-gold shadow-lg shadow-gold/50' 
                  : 'bg-white/40 group-hover:bg-white/70'
              }`}
            ></div>
          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-30 h-1 bg-white/20">
        <div 
          className="h-full bg-gradient-to-r from-gold to-yellow-400 transition-all duration-300 ease-linear"
          style={{ 
            width: `${((selectedIndex + 1) / slides.length) * 100}%` 
          }}
        ></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 text-white/60 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-light tracking-wider">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
