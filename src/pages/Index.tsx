import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '@/components/HeroSlider';
import FeatureColumn from '@/components/FeatureColumn';
import ProductCard from '@/components/ProductCard';
import FabricFeatures from '@/components/FabricFeatures';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MouseCursorEffect from '@/components/MouseCursorEffect';
import InteractiveFabricHighlights from '@/components/InteractiveFabricHighlights';
import BrandValueBlocks from '@/components/BrandValueBlocks';
import BrandLogoCarousel from '@/components/BrandLogoCarousel';
import VideoBackground from '@/components/VideoBackground';
import CtaBanner from '@/components/CtaBanner';

const Index = () => {
  // Animation observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    });
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .stagger-item');
    animatedElements.forEach(el => observer.observe(el));
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // Feature icons
  const sourceIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>;
  const qualityIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>;
  const deliveryIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>;

  // Featured products
  const featuredProducts = [{
    id: 1,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    title: "Premium Cotton Shirts",
    category: "Woven",
    description: "High-quality cotton shirts with premium stitching and attention to detail, perfect for both casual and formal wear.",
    tags: ["Men's", "Cotton", "Premium"]
  }, {
    id: 2,
    image: "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    title: "Linen Blend Blazers",
    category: "Woven",
    description: "Linen blend blazers with a touch of sophistication, perfect for any occasion.",
    tags: ["Men's", "Linen", "Blazers"]
  }, {
    id: 3,
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Oxford Button-Down Shirt",
    category: "Woven",
    description: "A classic Oxford button-down shirt with a timeless look and feel.",
    tags: ["Men's", "Oxford", "Shirt"]
  }, {
    id: 4,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Soft Knit Sweaters",
    category: "Knit",
    description: "Luxuriously soft knit sweaters made from premium yarns, providing comfort and style for all seasons.",
    tags: ["Unisex", "Cashmere Blend", "Premium"]
  }, {
    id: 5,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
    title: "Cotton T-Shirt",
    category: "Knit",
    description: "A comfortable cotton t-shirt with a relaxed fit and classic style.",
    tags: ["Unisex", "Cotton", "T-Shirt"]
  }, {
    id: 6,
    image: "https://images.unsplash.com/photo-1616150638538-ffb0679a3fc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    title: "Performance Polo",
    category: "Knit",
    description: "A high-performance polo shirt designed for comfort and style.",
    tags: ["Unisex", "Performance", "Polo"]
  }, {
    id: 7,
    image: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Designer Denim Jeans",
    category: "Denim",
    description: "Premium denim jeans with modern washes and expert craftsmanship, designed for comfort and durability.",
    tags: ["Women's", "Stretch Denim", "Designer"]
  }, {
    id: 8,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    title: "Men's Straight Fit Jeans",
    category: "Denim",
    description: "A classic men's straight fit jeans with a timeless look and feel.",
    tags: ["Men's", "Straight Fit", "Jeans"]
  }, {
    id: 9,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7b66b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    title: "Denim Jacket",
    category: "Denim",
    description: "A stylish denim jacket with a modern twist, perfect for any occasion.",
    tags: ["Men's", "Denim", "Jacket"]
  }];

  return <div className="page-transition">
      <MouseCursorEffect />
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
            <FeatureColumn icon={sourceIcon} title="Global Sourcing" description="We source the finest fabrics and materials from trusted global suppliers, ensuring quality and sustainability at every step." delay={100} />
            
            <FeatureColumn icon={qualityIcon} title="Quality Control" description="Our rigorous quality control processes ensure that every garment meets international standards and your exact specifications." delay={200} />
            
            <FeatureColumn icon={deliveryIcon} title="On-Time Delivery" description="We understand the importance of deadlines in the fashion industry and pride ourselves on consistent, reliable delivery timelines." delay={300} />
          </div>
        </div>
      </section>
      
      {/* New Fabric Features Section */}
      <FabricFeatures />
      
      {/* NEW SECTIONS REPLACING PRODUCT GALLERY */}
      <InteractiveFabricHighlights />
      
      <VideoBackground />
      
      <BrandValueBlocks />
      
      <BrandLogoCarousel />
      
      <CtaBanner />
      
      {/* Featured Products Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">Featured Products</h2>
            <p className="text-gray-600">Explore our wide range of high-quality garments, from premium woven fabrics to luxurious knits and trendy denim styles.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => <div key={product.id} className="stagger-item">
                <ProductCard image={product.image} title={product.title} category={product.category} description={product.description} tags={product.tags} index={index} />
              </div>)}
          </div>
          
          <div className="text-center mt-12 animate-on-scroll">
            <Link to="/woven" className="btn-primary">
              Explore All Products
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default Index;
