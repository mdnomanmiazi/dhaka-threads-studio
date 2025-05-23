import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const About = () => {
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
      <section className="pt-32 pb-20 bg-navy text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">About TexWaveFashion</h1>
            <p className="text-lg opacity-90">
              Your trusted partner for high-quality garment manufacturing solutions since 2005.
            </p>
          </div>
        </div>
      </section>
      
      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll order-2 lg:order-1">
              <h2 className="text-3xl font-serif font-bold text-navy mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                TexWaveFashion was founded in 2005 by a team of experienced textile professionals with a shared vision: to create a garment buying house that combines global quality standards with the manufacturing advantages of Bangladesh.
              </p>
              <p className="text-gray-600 mb-4">
                Starting with a small team of just 15 dedicated professionals, we've grown to become one of the leading apparel sourcing partners for brands around the world. Today, our team of over 150 experts works tirelessly to ensure that every garment we produce meets the exact specifications of our clients.
              </p>
              <p className="text-gray-600">
                Our commitment to quality, ethical manufacturing practices, and reliable delivery timelines has earned us the trust of fashion brands across Europe, North America, and Australia. We take pride in combining traditional craftsmanship with modern production techniques to deliver garments that exceed expectations.
              </p>
            </div>
            
            <div className="animate-on-scroll order-1 lg:order-2">
              <img 
                src="https://i.postimg.cc/1tpf32Tj/1659540133081.jpg" 
                alt="Factory interior" 
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission and Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-md animate-on-scroll">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-navy mb-4 text-center md:text-left">Our Mission</h3>
              <p className="text-gray-600">
                To provide premium quality garment manufacturing solutions that combine innovation, sustainability, and reliability, helping our clients bring their fashion visions to life while maintaining the highest ethical standards in our operations.
              </p>
            </div>
            
            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-md animate-on-scroll">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-navy mb-4 text-center md:text-left">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted and innovative garment sourcing partner globally, setting industry standards for quality, sustainability, and customer satisfaction while positively impacting the communities in which we operate.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Counter */}
      <section className="py-20 bg-navy text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Years of Experience */}
            <div className="text-center animate-on-scroll">
              <div className="text-5xl font-bold text-gold mb-2">18+</div>
              <div className="text-lg">Years of Experience</div>
            </div>
            
            {/* Global Clients */}
            <div className="text-center animate-on-scroll">
              <div className="text-5xl font-bold text-gold mb-2">150+</div>
              <div className="text-lg">Global Clients</div>
            </div>
            
            {/* Team Members */}
            <div className="text-center animate-on-scroll">
              <div className="text-5xl font-bold text-gold mb-2">200+</div>
              <div className="text-lg">Team Members</div>
            </div>
            
            {/* Countries Served */}
            <div className="text-center animate-on-scroll">
              <div className="text-5xl font-bold text-gold mb-2">25+</div>
              <div className="text-lg">Countries Served</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Accreditations and Certifications */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">Our Accreditations & Certifications</h2>
            <p className="text-gray-600">We adhere to international standards and are proudly certified by leading industry organizations.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {/* Certification 1 */}
            <div className="animate-on-scroll">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group">
                      <div className="w-full h-32 flex items-center justify-center overflow-hidden">
                        <img 
                          src="https://mother-tex.com/wp-content/uploads/2021/11/bsci.png" 
                          alt="BSCI Certification" 
                          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <p className="text-center mt-4 font-medium text-navy">BSCI</p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-navy text-white">
                    <p>BSCI</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            
            {/* Certification 2 */}
            <div className="animate-on-scroll">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group">
                      <div className="w-full h-32 flex items-center justify-center overflow-hidden">
                        <img 
                          src="https://mother-tex.com/wp-content/uploads/2021/11/accord.png" 
                          alt="ACCORD" 
                          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <p className="text-center mt-4 font-medium text-navy">ACCORD</p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-navy text-white">
                    <p>ACCORD</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            
            {/* Certification 3 */}
            <div className="animate-on-scroll">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group">
                      <div className="w-full h-32 flex items-center justify-center overflow-hidden">
                        <img 
                          src="https://mother-tex.com/wp-content/uploads/2021/11/oeko-tex.png" 
                          alt="OEKO-TEX Standard 100" 
                          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <p className="text-center mt-4 font-medium text-navy">OEKO-TEX</p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-navy text-white">
                    <p>OEKO-TEX Standard 100 - Tested for harmful substances</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            
            {/* Certification 4 */}
            <div className="animate-on-scroll">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group">
                      <div className="w-full h-32 flex items-center justify-center overflow-hidden">
                        <img 
                          src="https://mother-tex.com/wp-content/uploads/2021/11/GOTS.png" 
                          alt="GOTS" 
                          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <p className="text-center mt-4 font-medium text-navy">GOTS</p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-navy text-white">
                    <p>GOTS</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            
            {/* Certification 5 */}
            <div className="animate-on-scroll">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group">
                      <div className="w-full h-32 flex items-center justify-center overflow-hidden">
                        <img 
                          src="https://mother-tex.com/wp-content/uploads/2021/11/LEED.png" 
                          alt="LEED Green Associate" 
                          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <p className="text-center mt-4 font-medium text-navy">LEED Green Associate</p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-navy text-white">
                    <p>LEED Green Associate</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">Our Leadership Team</h2>
            <p className="text-gray-600">Meet the experienced professionals who lead our company with vision, expertise, and dedication.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md animate-on-scroll">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                  alt="CEO" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-navy">Mohammed Rahman</h3>
                <p className="text-gold font-medium mb-3">Chief Executive Officer</p>
                <p className="text-gray-600 mb-4">With over 25 years of experience in the textile industry, Mohammed leads our company with vision and strategic insight.</p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md animate-on-scroll">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80" 
                  alt="COO" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-navy">Fatima Akhtar</h3>
                <p className="text-gold font-medium mb-3">Chief Operations Officer</p>
                <p className="text-gray-600 mb-4">Fatima oversees all operational aspects of our business, ensuring efficiency and quality in every step of production.</p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md animate-on-scroll">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                  alt="CDO" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-navy">Imran Hossain</h3>
                <p className="text-gold font-medium mb-3">Chief Design Officer</p>
                <p className="text-gray-600 mb-4">Imran brings creative excellence to our team, with a keen eye for fashion trends and innovative design solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">Our Core Values</h2>
            <p className="text-gray-600">The fundamental principles that guide our business operations and relationships.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md animate-on-scroll">
              <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-navy mb-3">Quality Excellence</h3>
              <p className="text-gray-600">
                We are uncompromising in our commitment to quality, ensuring every garment meets the highest standards through rigorous quality control processes.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md animate-on-scroll">
              <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-navy mb-3">Ethical Practices</h3>
              <p className="text-gray-600">
                We operate with integrity and transparency, ensuring fair labor practices and sustainable production methods in all our facilities.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md animate-on-scroll">
              <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-navy mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                We are dedicated to understanding and exceeding our clients' expectations, building long-term partnerships based on trust and reliability.
              </p>
            </div>
            
            {/* Value 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md animate-on-scroll">
              <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-navy mb-3">Timeliness</h3>
              <p className="text-gray-600">
                We respect deadlines and deliver on time, every time, understanding the critical importance of timing in the fashion industry.
              </p>
            </div>
            
            {/* Value 5 */}
            <div className="bg-white p-8 rounded-lg shadow-md animate-on-scroll">
              <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-navy mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace innovation in all aspects of our business, from production techniques to design processes and sustainable practices.
              </p>
            </div>
            
            {/* Value 6 */}
            <div className="bg-white p-8 rounded-lg shadow-md animate-on-scroll">
              <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-navy mb-3">Global Outlook</h3>
              <p className="text-gray-600">
                We think globally while acting locally, bringing international standards and trends to our manufacturing processes in Bangladesh.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Partner with Us?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto">
              Discover how our expertise in garment manufacturing can help bring your fashion vision to life with quality, reliability, and sustainability.
            </p>
            <a href="/contact" className="btn-secondary text-lg">
              Contact Our Team
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default About;
