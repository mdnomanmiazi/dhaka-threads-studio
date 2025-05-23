
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

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
    image: 'https://i.postimg.cc/K8ysHHh8/fashion-portrait-gorgeous-woman-stylish-winter-fluffy-blue-coat-black-hat-posing-bright-grey-wall.jpg',
    heading: 'Trusted Global Apparel Sourcing',
    subheading: 'Your premium partner for fashion manufacturing in Bangladesh',
    ctaLink: '/contact',
    ctaText: 'Get a Quote',
  },
  {
    id: 2,
    image: 'https://i.postimg.cc/GmJSwxbJ/pexels-jmendezrf-1536619.jpg',
    heading: 'Quality That Speaks Volumes',
    subheading: 'Premium fabrics and expert craftsmanship for global brands',
    ctaLink: '/about',
    ctaText: 'Learn More',
  },
  {
    id: 3,
    image: 'https://i.postimg.cc/LsxCh4YJ/woman-model-business-suit-wearing-hat.jpg',
    heading: 'Fashion Delivered On Time',
    subheading: 'Reliable production and consistent on-time delivery worldwide',
    ctaLink: '/woven',
    ctaText: 'Explore Products',
  },
];

const HeroSlider: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const [isPaused, setIsPaused] = useState(false);

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
    
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Autoplay functionality
  const autoplay = useCallback(() => {
    if (isPaused || !emblaApi) return;
    
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current);
    }
    
    autoplayRef.current = setTimeout(() => {
      emblaApi.scrollNext();
      autoplay();
    }, 5000); // 5 seconds interval
  }, [emblaApi, isPaused]);

  // Start autoplay
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
      className="relative h-screen w-full overflow-hidden bg-navy"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute inset-0 overflow-hidden" ref={emblaRef}>
        <div className="flex h-full w-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="relative flex-[0_0_100%] h-full"
            >
              {/* Background image with overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[8s]"
                style={{ 
                  backgroundImage: `url(${slide.image})`,
                  transform: index === selectedIndex ? 'scale(1.08)' : 'scale(1.01)',
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              </div>
              
              {/* Slide content */}
              <div className="relative z-20 h-full flex items-center">
                <div className="container-custom">
                  <div className="max-w-3xl mx-auto text-center text-white">
                    <h1 
                      className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 transform transition-all duration-1000 ${
                        index === selectedIndex ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                      }`}
                    >
                      {slide.heading}
                    </h1>
                    <p 
                      className={`text-lg md:text-xl mb-8 transform transition-all delay-300 duration-1000 ${
                        index === selectedIndex ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                      }`}
                    >
                      {slide.subheading}
                    </p>
                    <div 
                      className={`transform transition-all delay-500 duration-1000 ${
                        index === selectedIndex ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
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
        </div>
      </div>
      
      {/* Navigation arrows */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute top-1/2 left-4 z-30 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute top-1/2 right-4 z-30 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex 
                ? 'bg-gold w-8' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
