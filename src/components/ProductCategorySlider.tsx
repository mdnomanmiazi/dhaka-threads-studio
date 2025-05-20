
import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface ProductCategorySliderProps {
  slides: Slide[];
  category: string;
}

const ProductCategorySlider: React.FC<ProductCategorySliderProps> = ({ slides, category }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ stopOnMouseEnter: true, delay: 5000 })]
  );
  const [activeSlide, setActiveSlide] = useState(0);

  // Handle slide click
  const scrollTo = (index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
      setActiveSlide(index);
    }
  };

  return (
    <section className="relative bg-gray-50 overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at 30px 30px, #d4af37 2px, transparent 0)',
            backgroundSize: '40px 40px'
          }}>
        </div>
      </div>
      
      <div className="container-custom py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-center">
          Featured {category} Products
        </h2>
        
        <div className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {slides.map((slide) => (
                <div key={slide.id} className="min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
                  <div className="group relative bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl h-full">
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={slide.image} 
                        alt={slide.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-serif font-bold mb-2">{slide.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{slide.description}</p>
                      <Link 
                        to={`/contact`} 
                        className="inline-flex items-center text-navy font-medium hover:text-gold transition-colors"
                      >
                        Request Sample <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation controls */}
          <button 
            onClick={() => emblaApi?.scrollPrev()} 
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-navy p-2 rounded-full shadow-md transition-all hover:scale-110 z-10"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          
          <button 
            onClick={() => emblaApi?.scrollNext()} 
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-navy p-2 rounded-full shadow-md transition-all hover:scale-110 z-10"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
          
          {/* Custom pagination dots */}
          <div className="flex justify-center gap-2 mt-8">
            {slides.map((_, index) => (
              <button 
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 bg-gray-300 hover:bg-navy cursor-pointer ${
                  activeSlide === index ? 'w-8 bg-navy' : 'w-2'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-12 w-full">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
};

export default ProductCategorySlider;
