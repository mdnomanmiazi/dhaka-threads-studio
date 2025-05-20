
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import ProductCategorySlider from '@/components/ProductCategorySlider';

const Woven = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  
  // Featured slides for the category
  const featuredSlides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
      title: "Premium Cotton Shirts",
      description: "High-quality cotton shirts with premium stitching and attention to detail, perfect for both casual and formal wear.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      title: "Linen Blend Blazers",
      description: "Sophisticated linen blend blazers with expert tailoring and premium details, designed for comfort and style.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Formal Trousers",
      description: "Premium formal trousers crafted from high-quality wool and poly blends, featuring precise tailoring and elegant styling.",
    },
  ];
  
  // Woven products data
  const products = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
      title: "Premium Cotton Shirts",
      category: "Woven",
      description: "High-quality cotton shirts with premium stitching and attention to detail, perfect for both casual and formal wear.",
      tags: ["Men's", "Cotton", "Premium"],
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      title: "Linen Blend Blazers",
      category: "Woven",
      description: "Sophisticated linen blend blazers with expert tailoring and premium details, designed for comfort and style.",
      tags: ["Men's", "Linen", "Business"],
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Formal Trousers",
      category: "Woven",
      description: "Premium formal trousers crafted from high-quality wool and poly blends, featuring precise tailoring and elegant styling.",
      tags: ["Men's", "Formal", "Wool Blend"],
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Oxford Button-Down Shirts",
      category: "Woven",
      description: "Classic Oxford button-down shirts made from premium cotton with meticulous attention to detail and perfect fit.",
      tags: ["Men's", "Cotton", "Classic"],
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80",
      title: "Silk Blouses",
      category: "Woven",
      description: "Luxurious silk blouses with refined finishes and elegant draping, perfect for professional and evening wear.",
      tags: ["Women's", "Silk", "Luxury"],
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Pleated Skirts",
      category: "Woven",
      description: "Finely pleated skirts with crisp lines and flowing movement, available in a variety of premium fabrics and patterns.",
      tags: ["Women's", "Formal", "Polyester Blend"],
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1506638794690-bb4c98fdb7af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      title: "Children's Uniform Shirts",
      category: "Woven",
      description: "Durable and comfortable school uniform shirts designed specifically for children with easy-care fabrics and reinforced stitching.",
      tags: ["Kids'", "Cotton Blend", "Uniforms"],
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      title: "Formal Dress Shirts",
      category: "Woven",
      description: "Premium formal dress shirts with spread collars and French cuffs, crafted from the finest Egyptian cotton.",
      tags: ["Men's", "Cotton", "Formal"],
    },
  ];
  
  // Filter options
  const filters = [
    'All', 
    "Men's", 
    "Women's", 
    "Kids'", 
    'Cotton', 
    'Silk', 
    'Formal', 
    'Business'
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
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Woven Products</h1>
            <p className="text-lg opacity-90">
              Explore our premium collection of woven garments, crafted with attention to detail and the highest quality materials.
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured Products Slider */}
      <ProductCategorySlider slides={featuredSlides} category="Woven" />
      
      {/* Decorative Element */}
      <div className="py-8 bg-white">
        <div className="container-custom">
          <div className="flex items-center justify-center">
            <div className="h-px bg-gray-200 w-1/3"></div>
            <div className="mx-4">
              <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M6 9h12m-6 3h6m-9 3h9m-9 3h9"></path>
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
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
              backgroundImage: 'linear-gradient(90deg, #d4af37 1px, transparent 1px), linear-gradient(#d4af37 1px, transparent 1px)',
              backgroundSize: '40px 40px'
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
                backgroundImage: 'radial-gradient(circle, #d4af37 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}></div>
            </div>
            
            <div className="mb-6 md:mb-0 text-center md:text-left relative z-10">
              <h3 className="text-2xl font-serif font-bold mb-2">Need Custom Woven Products?</h3>
              <p className="text-white/80">Contact us to discuss your specific requirements and get a personalized quote.</p>
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

export default Woven;
