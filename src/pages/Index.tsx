
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Layers, Play } from 'lucide-react';
import FuturisticHeroSlider from '@/components/FuturisticHeroSlider';
import ProductCard from '@/components/ProductCard';
import ProductGallery from '@/components/ProductGallery';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MouseCursorEffect from '@/components/MouseCursorEffect';
import ParallaxSection from '@/components/ParallaxSection';
import FloatingElements from '@/components/FloatingElements';
import FuturisticFeature from '@/components/FuturisticFeature';

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

  // Featured products
  const featuredProducts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
      title: "Premium Cotton Shirts",
      category: "Woven",
      description: "High-quality cotton shirts with premium stitching and attention to detail, perfect for both casual and formal wear.",
      tags: ["Performance", "Advanced", "Premium"],
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Soft Knit Sweaters",
      category: "Knit",
      description: "Luxuriously soft knit sweaters made from premium yarns, providing comfort and style for all seasons.",
      tags: ["Smart Fabric", "Thermal", "Premium"],
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Designer Denim Jeans",
      category: "Denim",
      description: "Premium denim jeans with modern washes and expert craftsmanship, designed for comfort and durability.",
      tags: ["Stretch", "Moisture-Wicking", "Designer"],
    },
  ];

  // Product category galleries
  const wovenGallery = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
      alt: "Premium cotton shirt"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      alt: "Linen blend blazers"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      alt: "Oxford button-down shirt"
    }
  ];
  
  const knitGallery = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      alt: "Soft knit sweater"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
      alt: "Cotton T-shirt"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1616150638538-ffb0679a3fc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      alt: "Performance polo"
    }
  ];
  
  const denimGallery = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      alt: "Designer denim jeans"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      alt: "Men's straight fit jeans"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1624378439575-d8705ad7b66b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
      alt: "Denim jacket"
    }
  ];
  
  return (
    <div className="page-transition bg-frost">
      <MouseCursorEffect />
      <Header />
      
      {/* Hero Section */}
      <FuturisticHeroSlider />
      
      {/* Intro Section with Parallax */}
      <ParallaxSection className="py-24 cold-gradient relative overflow-hidden">
        <FloatingElements />
        
        <div className="container-custom max-w-5xl relative z-10">
          <div className="text-center animate-on-scroll mb-16">
            <p className="text-blue-600 font-medium mb-3 tracking-wide">NEXT GENERATION TEXTILES</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate max-w-2xl mx-auto leading-tight">
              Engineering the <span className="text-gradient">future of fabric</span> through innovation
            </h2>
            
            <div className="animated-line mx-auto mb-8"></div>
            
            <p className="text-slate/80 max-w-2xl mx-auto">
              We combine cutting-edge technology with precision manufacturing to create textiles that push the boundaries of performance, sustainability, and design.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FuturisticFeature 
              icon={<Sparkles className="h-8 w-8" />}
              title="Advanced Materials"
              description="We source and develop innovative fabrics that offer superior performance and sustainability metrics."
              delay={100}
            />
            
            <FuturisticFeature 
              icon={<Layers className="h-8 w-8" />}
              title="Precision Engineering"
              description="Our manufacturing processes maintain micron-level precision for consistent quality in every product."
              delay={200}
            />
            
            <FuturisticFeature 
              icon={<Play className="h-8 w-8" />}
              title="Smart Integration"
              description="Seamlessly blend technology with textiles to create intelligent garments for the modern world."
              delay={300}
            />
          </div>
        </div>
      </ParallaxSection>
      
      {/* Category Showcase */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-frost to-transparent z-10"></div>
        <FloatingElements className="opacity-30" />
        
        {/* Woven Section */}
        <ProductGallery 
          title="Woven Excellence" 
          description="Discover our precision-engineered woven fabrics, combining traditional craftsmanship with cutting-edge technology."
          categoryLink="/woven"
          images={wovenGallery}
        />
        
        {/* Knit Section */}
        <div className="container-custom py-20">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 md:pr-12 glass-card rounded-2xl p-12 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-slate mb-4">Knit Innovation</h2>
              <div className="w-20 h-[2px] bg-gradient-to-r from-blue-400 to-sky-300 mb-6"></div>
              <p className="text-slate/80 mb-8">Experience the perfect blend of comfort and advanced functionality with our performance knit collection.</p>
              <Link to="/knit" className="group inline-flex items-center bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all px-6 py-3 rounded-md">
                Explore Knit Products
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <div className="grid grid-cols-2 gap-4">
                {knitGallery.map((image) => (
                  <div 
                    key={image.id} 
                    className="relative overflow-hidden rounded-lg gallery-item group"
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                      <p className="text-white px-4 pb-4 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{image.alt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Denim Section */}
        <ProductGallery 
          title="Denim Precision" 
          description="Explore our range of advanced denim products, engineered for performance with modern technical features."
          categoryLink="/denim"
          images={denimGallery}
        />
      </section>
      
      {/* Products Section with Frost Panel */}
      <section className="py-24 relative overflow-hidden cold-gradient">
        <FloatingElements className="opacity-40" />
        
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <p className="text-blue-600 font-medium mb-3 tracking-wide">FEATURED COLLECTIONS</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate">
              Engineered for <span className="text-gradient">Performance</span>
            </h2>
            <div className="animated-line mx-auto mb-8"></div>
            <p className="text-slate/80">
              Our fabrics combine innovative technology with precision craftsmanship to deliver unmatched quality and functionality.
            </p>
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
          
          <div className="text-center mt-16 animate-on-scroll">
            <Link to="/woven" className="group inline-flex items-center bg-blue-600 text-white hover:bg-blue-700 transition-all px-8 py-4 rounded-md">
              Explore All Products
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section with Glassmorphism */}
      <section className="py-32 relative overflow-hidden bg-blue-900 text-white">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('https://cdn.dribbble.com/userupload/571446/file/original-e845d7fbc56651ef82efc75426ba808d.jpg?resize=2048x1536')] bg-cover bg-center opacity-10"></div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-800/50"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto glass rounded-xl p-8 md:p-12">
            <div className="text-center animate-on-scroll">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Brand?</h2>
              <p className="text-lg mb-8 text-blue-50/90">Partner with us for advanced textile manufacturing solutions that combine innovation, quality, and sustainability.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="group inline-flex items-center bg-white text-blue-900 hover:bg-blue-50 transition-all px-8 py-4 rounded-md">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/about" className="inline-flex items-center bg-transparent border-2 border-white text-white hover:bg-white/10 transition-all px-8 py-4 rounded-md">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Clients Section with Animated Lines */}
      <section className="py-20 bg-white relative overflow-hidden">
        <FloatingElements className="opacity-30" />
        
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll">
            <p className="text-blue-600 font-medium mb-3 tracking-wide">PARTNERSHIPS</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate">Trusted by Industry Leaders</h2>
            <div className="animated-line mx-auto mb-8"></div>
            <p className="text-slate/80">Our advanced manufacturing solutions power the products of leading fashion and technical apparel brands worldwide.</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            <div className="w-24 h-12 stagger-item flex items-center justify-center frost-panel rounded-lg p-6">
              <div className="text-xl font-bold text-slate/70">BRAND 1</div>
            </div>
            <div className="w-24 h-12 stagger-item flex items-center justify-center frost-panel rounded-lg p-6">
              <div className="text-xl font-bold text-slate/70">BRAND 2</div>
            </div>
            <div className="w-24 h-12 stagger-item flex items-center justify-center frost-panel rounded-lg p-6">
              <div className="text-xl font-bold text-slate/70">BRAND 3</div>
            </div>
            <div className="w-24 h-12 stagger-item flex items-center justify-center frost-panel rounded-lg p-6">
              <div className="text-xl font-bold text-slate/70">BRAND 4</div>
            </div>
            <div className="w-24 h-12 stagger-item flex items-center justify-center frost-panel rounded-lg p-6">
              <div className="text-xl font-bold text-slate/70">BRAND 5</div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
