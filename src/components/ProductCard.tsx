
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface ProductCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
  tags?: string[];
  index?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  image, 
  title, 
  category, 
  description, 
  tags = [],
  index = 0
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const animationDelay = `${index * 150}ms`;
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div 
          className="product-card bg-white rounded-lg overflow-hidden shadow-md cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ animationDelay }}
        >
          <div className="relative overflow-hidden h-60">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out"
              style={{
                transform: isHovered ? 'scale(1.1)' : 'scale(1)',
              }}
            />
            <div 
              className="absolute inset-0 bg-navy bg-opacity-0 transition-all duration-300"
              style={{
                opacity: isHovered ? 0.2 : 0,
              }}
            ></div>
            <div className="absolute top-4 left-4">
              <span className="bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full">
                {category}
              </span>
            </div>
          </div>
          
          <div className="p-4">
            <h3 className="text-lg font-serif font-medium text-navy">{title}</h3>
            <p className="text-sm text-gray-600 mt-2 line-clamp-2">{description}</p>
            
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            <div 
              className="mt-4 flex items-center text-gold text-sm font-medium transition-all duration-300"
              style={{
                transform: isHovered ? 'translateX(8px)' : 'translateX(0)',
                opacity: isHovered ? 1 : 0.7,
              }}
            >
              <span>View Details</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-1 transition-transform duration-300"
                style={{
                  transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                }}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </DialogTrigger>
      
      <DialogContent className="max-w-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-[1.02]">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="mb-2">
              <span className="bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full">
                {category}
              </span>
            </div>
            <h2 className="text-2xl font-serif font-medium text-navy mb-3">{title}</h2>
            <p className="text-gray-600 mb-4">{description}</p>
            
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4 mb-4">
                {tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            <div className="mt-6">
              <button className="btn-primary w-full btn-hover-effect">
                Request Sample
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductCard;
