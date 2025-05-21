
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '@/components/HeroSlider';
import FeatureColumn from '@/components/FeatureColumn';
import ProductCard from '@/components/ProductCard';
import FabricFeatures from '@/components/FabricFeatures';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MouseCursorEffect from '@/components/MouseCursorEffect';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .stagger-item');
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
      image: "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      title: "Linen Blend Blazers",
      category: "Woven",
      description: "Linen blend blazers with a touch of sophistication, perfect for any occasion.",
      tags: ["Men's", "Linen", "Blazers"],
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Oxford Button-Down Shirt",
      category: "Woven",
      description: "A classic Oxford button-down shirt with a timeless look and feel.",
      tags: ["Men's", "Oxford", "Shirt"],
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Soft Knit Sweaters",
      category: "Knit",
      description: "Luxuriously soft knit sweaters made from premium yarns, providing comfort and style for all seasons.",
      tags: ["Unisex", "Cashmere Blend", "Premium"],
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
      title: "Cotton T-Shirt",
      category: "Knit",
      description: "A comfortable cotton t-shirt with a relaxed fit and classic style.",
      tags: ["Unisex", "Cotton", "T-Shirt"],
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1616150638538-ffb0679a3fc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      title: "Performance Polo",
      category: "Knit",
      description: "A high-performance polo shirt designed for comfort and style.",
      tags: ["Unisex", "Performance", "Polo"],
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Designer Denim Jeans",
      category: "Denim",
      description: "Premium denim jeans with modern washes and expert craftsmanship, designed for comfort and durability.",
      tags: ["Women's", "Stretch Denim", "Designer"],
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      title: "Men's Straight Fit Jeans",
      category: "Denim",
      description: "A classic men's straight fit jeans with a timeless look and feel.",
      tags: ["Men's", "Straight Fit", "Jeans"],
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1624378439575-d8705ad7b66b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
      title: "Denim Jacket",
      category: "Denim",
      description: "A stylish denim jacket with a modern twist, perfect for any occasion.",
      tags: ["Men's", "Denim", "Jacket"],
    },
  ];

  // MaterialHighlight component - replaces ProductGallery with something more modern
  const MaterialHighlight = () => {
    return (
      <section className="py-20 overflow-hidden relative bg-gradient-to-r from-gray-900 to-navy">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border border-iceBlue/10 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full border border-iceBlue/20 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-3/4 left-10 w-48 h-48 bg-gradient-to-tr from-iceBlue/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Material Innovation</h2>
            <p className="text-white/70 max-w-3xl mx-auto">Explore our cutting-edge fabric technology, crafted for performance and sustainability</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Woven card */}
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 p-6 hover:border-iceBlue/30 transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80')] bg-cover opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700"></div>
              <div className="relative z-10">
                <h3 className="text-4xl font-serif font-bold text-white mb-3">WOVEN</h3>
                <div className="h-px w-16 bg-gradient-to-r from-iceBlue to-transparent my-4"></div>
                <p className="text-white/80 mb-6">Premium structured fabrics with exceptional drape and durability for timeless apparel.</p>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link to="/woven" className="inline-flex items-center text-iceBlue hover:text-white transition-colors">
                        <span className="border-b border-iceBlue/50 hover:border-white/50 pb-1">Explore Woven</span>
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Discover our woven collection</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-navy/80 to-transparent"></div>
            </div>

            {/* Knit card */}
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 p-6 hover:border-iceBlue/30 transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80')] bg-cover opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700"></div>
              <div className="relative z-10">
                <h3 className="text-4xl font-serif font-bold text-white mb-3">KNIT</h3>
                <div className="h-px w-16 bg-gradient-to-r from-iceBlue to-transparent my-4"></div>
                <p className="text-white/80 mb-6">Flexible, comfortable fabrics engineered for stretch and recovery in performance wear.</p>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link to="/knit" className="inline-flex items-center text-iceBlue hover:text-white transition-colors">
                        <span className="border-b border-iceBlue/50 hover:border-white/50 pb-1">Explore Knit</span>
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Discover our knit collection</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-navy/80 to-transparent"></div>
            </div>

            {/* Denim card */}
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 p-6 hover:border-iceBlue/30 transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')] bg-cover opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700"></div>
              <div className="relative z-10">
                <h3 className="text-4xl font-serif font-bold text-white mb-3">DENIM</h3>
                <div className="h-px w-16 bg-gradient-to-r from-iceBlue to-transparent my-4"></div>
                <p className="text-white/80 mb-6">Innovative denim crafted for durability with sustainable washing and finishing techniques.</p>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link to="/denim" className="inline-flex items-center text-iceBlue hover:text-white transition-colors">
                        <span className="border-b border-iceBlue/50 hover:border-white/50 pb-1">Explore Denim</span>
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Discover our denim collection</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-navy/80 to-transparent"></div>
            </div>
          </div>
        </div>
        
        {/* Video background section */}
        <div className="mt-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/40 z-10"></div>
          <div className="relative z-20 container-custom py-24 flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Premium Manufacturing Process</h2>
            <p className="text-white/80 max-w-2xl mb-10">Our state-of-the-art facilities combine traditional craftsmanship with cutting-edge technology</p>
            <Link to="/about" className="bg-iceBlue text-navy hover:bg-white transition-all duration-300 px-8 py-3 rounded-md font-medium">
              Discover Our Process
            </Link>
          </div>
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="https://player.vimeo.com/external/453516430.sd.mp4?s=0877b70ea81ab2c983389a876484e7138e9d8711&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
          </video>
        </div>

        {/* Brand values */}
        <div className="container-custom py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Principles that guide every aspect of our manufacturing process</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sustainability */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 text-center hover:transform hover:scale-105 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-iceBlue to-iceBlue/40 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-3">Sustainable Sourcing</h3>
              <p className="text-white/70">Ethically sourced materials with minimal environmental impact and maximum traceability</p>
            </div>
            
            {/* Global Network */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 text-center hover:transform hover:scale-105 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-iceBlue to-iceBlue/40 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-3">Global Manufacturing</h3>
              <p className="text-white/70">Strategic global facilities with localized expertise to serve markets efficiently</p>
            </div>
            
            {/* Design */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 text-center hover:transform hover:scale-105 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-iceBlue to-iceBlue/40 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-3">Trend-Driven Design</h3>
              <p className="text-white/70">Forward-thinking design aligned with global fashion forecasts and consumer insights</p>
            </div>
          </div>
        </div>
        
        {/* Client logos carousel */}
        <div className="container-custom py-16 overflow-hidden">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-serif font-bold text-white mb-2">Trusted By Global Brands</h2>
            <p className="text-white/60">Partnering with industry leaders worldwide</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-navy to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-navy to-transparent z-10"></div>
            
            <div className="flex space-x-16 animate-[scroll_20s_linear_infinite] whitespace-nowrap">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="flex items-center justify-center min-w-[150px] grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                  <div className="text-2xl font-bold text-white/40">BRAND {i + 1}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* CTA Banner */}
        <div className="relative mt-16 py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-iceBlue/20 to-navy/80 z-0"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80')] bg-cover opacity-10 mix-blend-overlay"></div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Let's create something iconic together</h2>
              <p className="text-xl text-white/80 mb-8">Turn your vision into reality with our expert manufacturing solutions</p>
              <Link to="/contact" className="inline-block bg-white text-navy hover:bg-iceBlue transition-all duration-300 px-8 py-3 rounded-md font-medium shadow-lg shadow-iceBlue/20 hover:shadow-iceBlue/40">
                Request a Sample
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  return (
    <div className="page-transition">
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
      
      {/* New Fabric Features Section */}
      <FabricFeatures />
      
      {/* New Material Highlight Section - replaces ProductGallery */}
      <MaterialHighlight />
      
      {/* Featured Products Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">Featured Products</h2>
            <p className="text-gray-600">Explore our wide range of high-quality garments, from premium woven fabrics to luxurious knits and trendy denim styles.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="stagger-item">
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
      
      {/* Clients/Trusted by Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">Trusted by Global Brands</h2>
            <p className="text-gray-600">We've proudly served leading fashion brands from around the world with quality garment manufacturing solutions.</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
            <div className="w-24 h-12 stagger-item flex items-center justify-center">
              <div className="text-2xl font-bold text-gray-400">BRAND 1</div>
            </div>
            <div className="w-24 h-12 stagger-item flex items-center justify-center">
              <div className="text-2xl font-bold text-gray-400">BRAND 2</div>
            </div>
            <div className="w-24 h-12 stagger-item flex items-center justify-center">
              <div className="text-2xl font-bold text-gray-400">BRAND 3</div>
            </div>
            <div className="w-24 h-12 stagger-item flex items-center justify-center">
              <div className="text-2xl font-bold text-gray-400">BRAND 4</div>
            </div>
            <div className="w-24 h-12 stagger-item flex items-center justify-center">
              <div className="text-2xl font-bold text-gray-400">BRAND 5</div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
