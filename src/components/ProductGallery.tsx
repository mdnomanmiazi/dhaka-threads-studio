
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface ProductGalleryProps {
  title: string;
  description: string;
  categoryLink: string;
  images: {
    id: number;
    src: string;
    alt: string;
  }[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({
  title,
  description,
  categoryLink,
  images
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text content */}
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">{title}</h2>
            <p className="text-gray-600 mb-6">{description}</p>
            <Link 
              to={categoryLink}
              className="inline-flex items-center text-navy font-bold hover:text-gold transition-colors btn-hover-effect"
            >
              <span>Explore Collection</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          {/* Gallery */}
          <div className="relative h-80 md:h-96">
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`absolute inset-0 gallery-item rounded-lg overflow-hidden shadow-lg transition-all duration-1000 ${
                  index === activeIndex ? 'opacity-100 z-20' : 'opacity-0 z-10'
                }`}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="overlay absolute inset-0"></div>
              </div>
            ))}
            
            {/* Image indicators */}
            <div className="absolute bottom-4 left-4 right-4 z-30 flex justify-center space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-gold w-6' : 'bg-white'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
