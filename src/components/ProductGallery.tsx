
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
      setActiveIndex(current => (current + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="container-custom py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="animate-on-scroll">
          <h2 className="text-3xl font-serif font-bold text-navy mb-3">{title}</h2>
          <p className="text-gray-600 mb-6">{description}</p>
          <Link to={categoryLink} className="inline-flex items-center text-navy font-medium hover:underline transition-all">
            Explore Collection <ChevronRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
        
        <div className="relative h-80 overflow-hidden rounded-lg shadow-md animate-on-scroll">
          {images.map((image, index) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
