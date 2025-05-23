
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import MegaMenu from './MegaMenu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Check if current path matches
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  // Handle scrolling effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 py-4'}`}>
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-navy text-2xl font-bold">
            TexWave<span className="text-gold">Fashion</span>
          </h1>
        </Link>
        
        {/* Desktop Navigation with MegaMenu */}
        <div className="hidden lg:block">
          <MegaMenu />
        </div>
        
        {/* Get a Quote Button */}
        <div className="hidden lg:block">
          <Link to="/contact" className="btn-primary">
            Get a Quote
          </Link>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="lg:hidden text-navy"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full p-5">
          <div className="flex justify-end">
            <button 
              className="text-navy"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-6 mt-10 items-center">
            <Link to="/" className={`text-xl ${isActive('/') ? 'text-gold font-medium' : 'text-navy'}`}>
              Home
            </Link>
            
            <h3 className="text-xl text-navy">Products</h3>
            <div className="flex flex-col space-y-4 pl-4">
              <Link to="/woven" className={`${isActive('/woven') ? 'text-gold' : 'text-navy'}`}>
                Woven
              </Link>
              <Link to="/knit" className={`${isActive('/knit') ? 'text-gold' : 'text-navy'}`}>
                Knit
              </Link>
              <Link to="/denim" className={`${isActive('/denim') ? 'text-gold' : 'text-navy'}`}>
                Denim
              </Link>
            </div>
            
            <Link to="/about" className={`text-xl ${isActive('/about') ? 'text-gold font-medium' : 'text-navy'}`}>
              About Us
            </Link>
            
            <Link to="/contact" className={`text-xl ${isActive('/contact') ? 'text-gold font-medium' : 'text-navy'}`}>
              Contact Us
            </Link>
            
            <Link to="/contact" className="btn-primary w-full text-center mt-8">
              Get a Quote
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
