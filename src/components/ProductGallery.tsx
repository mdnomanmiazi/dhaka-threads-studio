
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
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image carousel */}
        <div className="relative w-full overflow-hidden rounded-lg shadow-xl">
          <AspectRatio ratio={16 / 9}>
            {images.map((image, index) => (
              <div 
                key={image.id} 
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === activeIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover" 
                />
              </div>
            ))}
          </AspectRatio>
          
          {/* Navigation dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Text content */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-gray-600">{description}</p>
          <Link 
            to={categoryLink} 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            View Collection <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
