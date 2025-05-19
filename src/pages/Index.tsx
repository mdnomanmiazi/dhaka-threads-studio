
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '@/components/HeroSlider';
import FeatureColumn from '@/components/FeatureColumn';
import ProductCard from '@/components/ProductCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
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
  }, []);

  // Feature icons
  const sourceIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  );
  
  const qualityIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
  
  const deliveryIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
  
  // Featured products
  const featuredProducts = [
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
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Soft Knit Sweaters",
      category: "Knit",
      description: "Luxuriously soft knit sweaters made from premium yarns, providing comfort and style for all seasons.",
      tags: ["Unisex", "Cashmere Blend", "Premium"],
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Designer Denim Jeans",
      category: "Denim",
      description: "Premium denim jeans with modern washes and expert craftsmanship, designed for comfort and durability.",
      tags: ["Women's", "Stretch Denim", "Designer"],
    },
  ];
  
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <HeroSlider />
      
      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">Our Core Strengths</h2>
            <p className="text-gray-600">We pride ourselves on delivering excellence across every aspect of the garment manufacturing process, ensuring your fashion products meet the highest standards.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureColumn 
              icon={sourceIcon}
              title="Global Sourcing"
              description="We source the finest fabrics and materials from trusted global suppliers, ensuring quality and sustainability at every step."
              delay={100}
            />
            
            <FeatureColumn 
              icon={qualityIcon}
              title="Quality Control"
              description="Our rigorous quality control processes ensure that every garment meets international standards and your exact specifications."
              delay={200}
            />
            
            <FeatureColumn 
              icon={deliveryIcon}
              title="On-Time Delivery"
              description="We understand the importance of deadlines in the fashion industry and pride ourselves on consistent, reliable delivery timelines."
              delay={300}
            />
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">Featured Products</h2>
            <p className="text-gray-600">Explore our wide range of high-quality garments, from premium woven fabrics to luxurious knits and trendy denim styles.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
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
          
          <div className="text-center mt-12 animate-on-scroll">
            <Link to="/woven" className="btn-primary">
              Explore All Products
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Elevate Your Fashion Brand?</h2>
            <p className="text-lg mb-8">Partner with us for premium garment manufacturing solutions that combine quality, innovation, and reliability.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary">
                Contact Us
              </Link>
              <Link to="/about" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy transition-colors px-6 py-3 rounded">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Clients/Trusted by Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">Trusted by Global Brands</h2>
            <p className="text-gray-600">We've proudly served leading fashion brands from around the world with quality garment manufacturing solutions.</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
            <div className="w-24 h-12 animate-on-scroll flex items-center justify-center">
              <div className="text-2xl font-bold text-gray-400">BRAND 1</div>
            </div>
            <div className="w-24 h-12 animate-on-scroll flex items-center justify-center">
              <div className="text-2xl font-bold text-gray-400">BRAND 2</div>
            </div>
            <div className="w-24 h-12 animate-on-scroll flex items-center justify-center">
              <div className="text-2xl font-bold text-gray-400">BRAND 3</div>
            </div>
            <div className="w-24 h-12 animate-on-scroll flex items-center justify-center">
              <div className="text-2xl font-bold text-gray-400">BRAND 4</div>
            </div>
            <div className="w-24 h-12 animate-on-scroll flex items-center justify-center">
              <div className="text-2xl font-bold text-gray-400">BRAND 5</div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Index;
