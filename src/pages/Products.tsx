
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Product data - using the same data structure as in Index.tsx
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

// Category information with visual elements
const categories = [
  {
    id: "woven",
    name: "Woven",
    description: "Crisp & Classic. Premium woven fabrics with exquisite patterns and textures for high-quality garments.",
    image: "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    link: "/woven"
  },
  {
    id: "knit",
    name: "Knit",
    description: "Soft & Stretchable. Versatile knit fabrics offering comfort and style for casual and athletic wear.",
    image: "https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
    link: "/knit"
  },
  {
    id: "denim",
    name: "Denim",
    description: "Bold & Built to Last. Durable denim fabrics with modern washes and finishes for contemporary fashion.",
    image: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    link: "/denim"
  }
];

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-xl">
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-serif font-medium text-navy">{product.title}</h3>
          <Badge variant="outline" className="bg-white/50 text-navy">
            {product.category}
          </Badge>
        </div>
        <p className="mt-2 line-clamp-2 text-sm text-gray-600">
          {product.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {product.tags.map((tag: string, index: number) => (
            <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

const CategoryCard = ({ category }: { category: any }) => {
  return (
    <Link 
      to={category.link} 
      className="group relative block overflow-hidden rounded-lg bg-gradient-to-br from-navy/90 to-navy/70 text-white shadow-md transition-all hover:shadow-xl"
    >
      <div className="absolute inset-0">
        <img
          src={category.image}
          alt={category.name}
          className="h-full w-full object-cover opacity-20 transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="relative z-10 flex h-full min-h-[200px] flex-col justify-between p-6">
        <h3 className="text-3xl font-serif font-bold tracking-wider">{category.name}</h3>
        <div>
          <div className="mb-3 h-px w-16 bg-white/50"></div>
          <p className="mb-4 max-w-md text-white/90">{category.description}</p>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
            View Collection <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </Link>
  );
};

const Products = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  
  const filteredProducts = activeFilter === "all" 
    ? products 
    : products.filter(product => product.category.toLowerCase() === activeFilter.toLowerCase());
  
  return (
    <div className="page-transition overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-navy py-20 text-white md:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-navy/95"></div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy to-transparent"></div>
          
          {/* Background patterns */}
          <div className="absolute left-0 top-0 h-full w-full opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"></path>
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl animate-on-scroll">
            <h1 className="text-3xl font-serif font-bold md:text-5xl">Our Product Collection</h1>
            <div className="mt-2 h-1 w-20 bg-gold"></div>
            <p className="mt-6 text-lg text-white/80">
              Discover our premium textile categories, from luxurious woven fabrics to comfortable knits and durable denims.
              Each product is crafted with precision and innovation to meet the highest standards in the fashion industry.
            </p>
          </div>
        </div>
      </section>
      
      {/* Categories Showcase */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <h2 className="mb-4 text-center text-3xl font-serif font-bold text-navy">Fabric Categories</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-gray-600">
            Explore our three premium fabric categories, each crafted with precision and innovation for distinct apparel needs.
          </p>
          
          <div className="grid gap-8 md:grid-cols-3">
            {categories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="mb-4 text-center text-3xl font-serif font-bold text-navy">Featured Products</h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-gray-600">
            Browse our selection of premium garments made with our high-quality fabrics.
          </p>
          
          <Tabs defaultValue="all" className="w-full">
            <div className="mb-8 flex justify-center">
              <TabsList className="bg-gray-100">
                <TabsTrigger value="all" onClick={() => setActiveFilter("all")}>All Products</TabsTrigger>
                <TabsTrigger value="woven" onClick={() => setActiveFilter("woven")}>Woven</TabsTrigger>
                <TabsTrigger value="knit" onClick={() => setActiveFilter("knit")}>Knit</TabsTrigger>
                <TabsTrigger value="denim" onClick={() => setActiveFilter("denim")}>Denim</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="woven" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="knit" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="denim" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-navy py-16 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-4 text-3xl font-serif font-bold">Ready to Start Your Project?</h2>
          <p className="mx-auto mb-8 max-w-2xl">
            Contact our team to discuss your custom fabric needs and get expert advice on the best materials for your designs.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gold hover:bg-gold/90">Get in Touch</Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Products;
