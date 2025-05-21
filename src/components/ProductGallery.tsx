
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

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
      setActiveIndex(current => (current + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative overflow-hidden bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
          {/* Text content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold tracking-tight md:text-4xl">{title}</h2>
            <p className="text-gray-600 max-w-prose">{description}</p>
            <Link 
              to={categoryLink} 
              className="inline-flex items-center text-navy hover:text-gold transition-colors font-medium"
            >
              Explore Collection <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          {/* Image gallery */}
          <div className="relative h-[400px] bg-white rounded-lg shadow-md overflow-hidden">
            {images.map((image, index) => (
              <div 
                key={image.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <AspectRatio ratio={4/3}>
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
            ))}
            
            {/* Navigation dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex ? 'bg-navy w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
