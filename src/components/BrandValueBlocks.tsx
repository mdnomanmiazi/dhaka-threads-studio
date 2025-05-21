import React, { useEffect } from 'react';
import { ShieldCheck, Globe, Lightbulb } from 'lucide-react';
interface ValueBlock {
  icon: React.ReactNode;
  title: string;
  description: string;
}
const valueBlocks: ValueBlock[] = [{
  icon: <ShieldCheck className="h-10 w-10 text-iceBlue" />,
  title: "Sustainable Sourcing",
  description: "We prioritize eco-friendly materials and ethical sourcing practices to minimize environmental impact."
}, {
  icon: <Globe className="h-10 w-10 text-iceBlue" />,
  title: "Global Manufacturing Network",
  description: "Our worldwide production facilities ensure efficiency, quality control, and rapid delivery to any market."
}, {
  icon: <Lightbulb className="h-10 w-10 text-iceBlue" />,
  title: "Trend-Driven Design",
  description: "Our design team constantly monitors fashion trends to deliver cutting-edge products that capture market attention."
}];
const BrandValueBlocks: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.2
    });
    const blocks = document.querySelectorAll('.value-block');
    blocks.forEach(block => observer.observe(block));
    return () => {
      blocks.forEach(block => observer.unobserve(block));
    };
  }, []);
  return;
};
export default BrandValueBlocks;