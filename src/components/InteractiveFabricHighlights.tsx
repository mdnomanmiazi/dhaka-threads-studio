import React, { useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
interface FabricItem {
  title: string;
  description: string;
  image: string;
  link: string;
}
const fabricItems: FabricItem[] = [{
  title: "Woven Excellence",
  description: "Premium fabrics with exceptional structure and durability",
  image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
  link: "/woven"
}, {
  title: "Knit Comfort",
  description: "Versatile and breathable materials for ultimate comfort",
  image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  link: "/knit"
}, {
  title: "Denim Durability",
  description: "Iconic styles that combine heritage with innovation",
  image: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  link: "/denim"
}];
const InteractiveFabricHighlights: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });
    const cards = document.querySelectorAll('.fabric-card');
    cards.forEach(card => observer.observe(card));
    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);
  return;
};
export default InteractiveFabricHighlights;