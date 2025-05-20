
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import ProductCategorySlider from '@/components/ProductCategorySlider';

const Knit = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  
  // Featured slides for the category
  const featuredSlides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Soft Knit Sweaters",
      description: "Luxuriously soft knit sweaters made from premium yarns, providing comfort and style for all seasons.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
      title: "Cotton T-Shirts",
      description: "Premium cotton t-shirts with superior comfort and durability, perfect for everyday wear or custom branding.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1616150638538-ffb0679a3fc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      title: "Performance Polos",
      description: "High-performance polo shirts made from technical fabrics that provide moisture-wicking and comfort for active wear.",
    },
  ];
  
  // Knit products data
  const products = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Soft Knit Sweaters",
      category: "Knit",
      description: "Luxuriously soft knit sweaters made from premium yarns, providing comfort and style for all seasons.",
      tags: ["Unisex", "Cashmere Blend", "Premium"],
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
      title: "Cotton T-Shirts",
      category: "Knit",
      description: "Premium cotton t-shirts with superior comfort and durability, perfect for everyday wear or custom branding.",
      tags: ["Unisex", "Cotton", "Casual"],
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1616150638538-ffb0679a3fc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      title: "Performance Polos",
      category: "Knit",
      description: "High-performance polo shirts made from technical fabrics that provide moisture-wicking and comfort for active wear.",
      tags: ["Men's", "Performance", "Sports"],
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1546482705-1233e8530333?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=723&q=80",
      title: "Lightweight Cardigans",
      category: "Knit",
      description: "Versatile and lightweight cardigans crafted from fine knit yarns, perfect for layering in any season.",
      tags: ["Women's", "Modal Blend", "Layering"],
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1519568470290-c0c1fbfff16f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      title: "Jersey Tops",
      category: "Knit",
      description: "Comfortable jersey tops with stretch and recovery, designed for everyday wear with timeless style.",
      tags: ["Women's", "Jersey", "Casual"],
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1611911813383-67769b37a149?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      title: "Kids' Knit Pullovers",
      category: "Knit",
      description: "Colorful and comfortable pullovers for children, made from soft yarns that are both cozy and durable.",
      tags: ["Kids'", "Cotton Blend", "Colorful"],
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1572495641004-28421ae52e52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      title: "Activewear Sets",
      category: "Knit",
      description: "Technical knit activewear with moisture-wicking properties, designed for performance during workouts and sports.",
      tags: ["Unisex", "Performance", "Sports"],
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1564352969906-8b7f46a8cf7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      title: "Designer Knitwear",
      category: "Knit",
      description: "Premium designer knitwear featuring intricate patterns and luxurious materials for statement fashion pieces.",
      tags: ["Women's", "Premium", "Designer"],
    },
  ];
  
  // Filter options
  const filters = [
    'All', 
    "Men's", 
    "Women's", 
    "Kids'", 
    'Unisex', 
    'Premium', 
    'Casual', 
    'Performance'
  ];
  
  // Apply filters
  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => 
        product.tags.includes(activeFilter)
      );
      setFilteredProducts(filtered);
    }
  }, [activeFilter]);
  
  // Animation observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));
    
    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, [filteredProducts]);
  
  return (
    <>
      <Header />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-navy text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Knit Products</h1>
            <p className="text-lg opacity-90">
              Discover our versatile range of knit garments, combining comfort, style, and durability for everyday wear.
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured Products Slider */}
      <ProductCategorySlider slides={featuredSlides} category="Knit" />
      
      {/* Decorative Element */}
      <div className="py-8 bg-white">
        <div className="container-custom">
          <div className="flex items-center justify-center">
            <div className="h-px bg-gray-200 w-1/3"></div>
            <div className="mx-4">
              <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M12.5 3L10 9h8l-2.5 6"></path>
                  <path d="M6 12l-3 9h6"></path>
                  <path d="M13.5 12H20"></path>
                  <path d="M5.5 21l5-9"></path>
                </svg>
              </div>
            </div>
            <div className="h-px bg-gray-200 w-1/3"></div>
          </div>
        </div>
      </div>
      
      {/* Filters */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm transition-all transform hover:scale-105 ${
                  activeFilter === filter 
                    ? 'bg-navy text-white shadow-md' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Products Grid */}
      <section className="section-padding bg-white relative">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute inset-0" 
            style={{ 
              backgroundImage: 'repeating-linear-gradient(45deg, #d4af37 0, #d4af37 1px, transparent 0, transparent 50%)',
              backgroundSize: '20px 20px'
            }}>
          </div>
        </div>
      
        <div className="container-custom relative">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl text-gray-600">No products found matching your filter criteria.</h3>
              <button 
                className="mt-4 btn-primary"
                onClick={() => setActiveFilter('All')}
              >
                View All Products
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <div key={product.id} className="animate-on-scroll">
                  <ProductCard 
                    image={product.image}
                    title={product.title}
                    category={product.category}
                    description={product.description}
                    tags={product.tags}
                    index={index}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="bg-navy text-white rounded-lg p-8 md:p-12 flex flex-col md:flex-row justify-between items-center animate-on-scroll relative overflow-hidden">
            {/* Decorative pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <div className="w-full h-full" style={{ 
                backgroundImage: 'repeating-linear-gradient(90deg, #d4af37, #d4af37 10px, transparent 10px, transparent 20px)',
                backgroundSize: '20px 100%'
              }}></div>
            </div>
            
            <div className="mb-6 md:mb-0 text-center md:text-left relative z-10">
              <h3 className="text-2xl font-serif font-bold mb-2">Looking for Custom Knitwear?</h3>
              <p className="text-white/80">Our team can help create custom knit garments tailored to your brand specifications.</p>
            </div>
            <a href="/contact" className="btn-secondary hover:scale-105 transition-transform whitespace-nowrap relative z-10">
              Request a Quote
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Knit;
