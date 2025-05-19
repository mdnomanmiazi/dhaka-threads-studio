
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

const Denim = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  
  // Denim products data
  const products = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Designer Denim Jeans",
      category: "Denim",
      description: "Premium denim jeans with modern washes and expert craftsmanship, designed for comfort and durability.",
      tags: ["Women's", "Stretch Denim", "Designer"],
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      title: "Men's Straight Fit Jeans",
      category: "Denim",
      description: "Classic straight fit jeans made from high-quality denim with traditional five-pocket styling and versatile washes.",
      tags: ["Men's", "Classic Denim", "Straight Fit"],
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1624378439575-d8705ad7b66b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
      title: "Denim Jackets",
      category: "Denim",
      description: "Versatile denim jackets in various washes and styles, featuring quality stitching and attention to detail.",
      tags: ["Unisex", "Outerwear", "Classic Denim"],
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      title: "Skinny Jeans",
      category: "Denim",
      description: "Contemporary skinny jeans with stretch denim for the perfect fit, available in multiple washes and finishes.",
      tags: ["Women's", "Stretch Denim", "Skinny Fit"],
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
      title: "Denim Shirts",
      category: "Denim",
      description: "Stylish denim shirts that combine comfort with durability, perfect for casual wear or layering.",
      tags: ["Men's", "Classic Denim", "Casual"],
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1475178626620-a4d074967452?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=886&q=80",
      title: "Kids' Denim Overalls",
      category: "Denim",
      description: "Durable and cute denim overalls for kids, designed with adjustable straps and reinforced stitching for active wear.",
      tags: ["Kids'", "Classic Denim", "Overalls"],
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=926&q=80",
      title: "Denim Skirts",
      category: "Denim",
      description: "Versatile denim skirts in various lengths and styles, combining classic denim durability with feminine silhouettes.",
      tags: ["Women's", "Classic Denim", "Casual"],
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      title: "Relaxed Fit Jeans",
      category: "Denim",
      description: "Comfortable relaxed fit jeans with premium denim construction, offering both style and ease of movement.",
      tags: ["Men's", "Classic Denim", "Relaxed Fit"],
    },
  ];
  
  // Filter options
  const filters = [
    'All', 
    "Men's", 
    "Women's", 
    "Kids'", 
    'Classic Denim', 
    'Stretch Denim', 
    'Skinny Fit', 
    'Casual'
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
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Denim Products</h1>
            <p className="text-lg opacity-90">
              Browse our collection of premium denim garments, combining timeless style with exceptional quality and comfort.
            </p>
          </div>
        </div>
      </section>
      
      {/* Filters */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  activeFilter === filter 
                    ? 'bg-navy text-white' 
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
      <section className="section-padding bg-white">
        <div className="container-custom">
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
          <div className="bg-navy text-white rounded-lg p-8 md:p-12 flex flex-col md:flex-row justify-between items-center animate-on-scroll">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl font-serif font-bold mb-2">Need Customized Denim Products?</h3>
              <p className="text-white/80">Our denim experts can help create premium denim garments to your exact specifications.</p>
            </div>
            <a href="/contact" className="btn-secondary whitespace-nowrap">
              Request a Quote
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Denim;
