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
  return;
};
export default ProductGallery;