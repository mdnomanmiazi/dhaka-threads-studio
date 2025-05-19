
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  // Form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission delay
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
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
  
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-navy text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
            <p className="text-lg opacity-90">
              Get in touch with our team to discuss your garment manufacturing needs.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form and Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-on-scroll">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-serif font-bold text-navy mb-6">Send Us a Message</h2>
                
                {/* Success Message */}
                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-gray-700 mb-2">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Product Information">Product Information</option>
                        <option value="Price Quote">Price Quote</option>
                        <option value="Sampling Request">Sampling Request</option>
                        <option value="Partnership Opportunity">Partnership Opportunity</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 mb-2">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-primary w-full ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="animate-on-scroll">
              <h2 className="text-2xl font-serif font-bold text-navy mb-6">Contact Information</h2>
              
              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-navy mb-1">Our Office</h3>
                    <p className="text-gray-600">
                      123 Fashion Street, Gulshan<br />
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-navy mb-1">Phone</h3>
                    <p className="text-gray-600 mb-1">
                      <a href="tel:+8801712345678" className="hover:text-gold transition">
                        +880 171 234 5678
                      </a> (Sales)
                    </p>
                    <p className="text-gray-600">
                      <a href="tel:+8801812345678" className="hover:text-gold transition">
                        +880 181 234 5678
                      </a> (Support)
                    </p>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-navy mb-1">Email</h3>
                    <p className="text-gray-600 mb-1">
                      <a href="mailto:info@fashiontrends.com" className="hover:text-gold transition">
                        info@fashiontrends.com
                      </a> (General Inquiries)
                    </p>
                    <p className="text-gray-600">
                      <a href="mailto:sales@fashiontrends.com" className="hover:text-gold transition">
                        sales@fashiontrends.com
                      </a> (Sales)
                    </p>
                  </div>
                </div>
                
                {/* Hours */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-navy mb-1">Working Hours</h3>
                    <p className="text-gray-600 mb-1">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-600">
                      Saturday: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Social Media Links */}
              <div className="mt-8">
                <h3 className="text-lg font-medium text-navy mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com" 
                    className="w-10 h-10 bg-navy rounded-full flex items-center justify-center hover:bg-gold transition"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  
                  <a 
                    href="https://twitter.com" 
                    className="w-10 h-10 bg-navy rounded-full flex items-center justify-center hover:bg-gold transition"
                    aria-label="Twitter"
                  >
                    <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  
                  <a 
                    href="https://linkedin.com" 
                    className="w-10 h-10 bg-navy rounded-full flex items-center justify-center hover:bg-gold transition"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  
                  <a 
                    href="https://instagram.com" 
                    className="w-10 h-10 bg-navy rounded-full flex items-center justify-center hover:bg-gold transition"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="animate-on-scroll">
            <h2 className="text-2xl font-serif font-bold text-navy mb-6 text-center">Our Location</h2>
            <div className="h-[400px] w-full rounded-lg overflow-hidden shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29206.577811158906!2d90.40402249758642!3d23.793241651648532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7abd941ed15%3A0x3a4ab99b390a1239!2sGulshan%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1653293878828!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="FashionTrends Buying House location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll">
            <h2 className="text-3xl font-serif font-bold text-navy mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Find quick answers to common questions about our services.</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div className="bg-white rounded-lg shadow-md p-6 animate-on-scroll">
                <h3 className="text-lg font-medium text-navy mb-2">What is the minimum order quantity (MOQ)?</h3>
                <p className="text-gray-600">
                  Our standard MOQ varies by product type, but generally starts at 1,000 pieces per style and color. We can discuss flexibility based on your specific requirements.
                </p>
              </div>
              
              {/* FAQ Item 2 */}
              <div className="bg-white rounded-lg shadow-md p-6 animate-on-scroll">
                <h3 className="text-lg font-medium text-navy mb-2">What is your typical production timeline?</h3>
                <p className="text-gray-600">
                  After approval of samples, standard production time is 45-60 days, depending on quantity and product complexity. Rush orders may be accommodated with additional charges.
                </p>
              </div>
              
              {/* FAQ Item 3 */}
              <div className="bg-white rounded-lg shadow-md p-6 animate-on-scroll">
                <h3 className="text-lg font-medium text-navy mb-2">Do you provide sampling services?</h3>
                <p className="text-gray-600">
                  Yes, we offer comprehensive sampling services including development samples, pre-production samples, and production samples to ensure your products meet exact specifications.
                </p>
              </div>
              
              {/* FAQ Item 4 */}
              <div className="bg-white rounded-lg shadow-md p-6 animate-on-scroll">
                <h3 className="text-lg font-medium text-navy mb-2">What payment terms do you offer?</h3>
                <p className="text-gray-600">
                  Our standard payment terms are 30% deposit upon order confirmation and 70% before shipment. For established clients, we offer flexible payment options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Contact;
