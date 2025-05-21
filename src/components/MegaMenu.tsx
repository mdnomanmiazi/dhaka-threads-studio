
import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const categoryData = [
  {
    title: "Woven",
    href: "/woven",
    description: "Premium woven fabrics with exquisite patterns and textures for high-quality garments.",
    image: "/images/woven-thumb.jpg"
  },
  {
    title: "Knit",
    href: "/knit",
    description: "Versatile knit fabrics offering comfort and style for casual and athletic wear.",
    image: "/images/knit-thumb.jpg"
  },
  {
    title: "Denim",
    href: "/denim",
    description: "Durable denim fabrics with modern washes and finishes for contemporary fashion.",
    image: "/images/denim-thumb.jpg"
  }
];

export function MegaMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link to="/">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[600px] gap-3 p-4 md:grid-cols-2 lg:grid-cols-3">
              {categoryData.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="overflow-hidden rounded-md mb-2" style={{ height: "120px" }}>
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-110" 
                    />
                  </div>
                  <div className="text-sm font-medium leading-none text-navy">{item.title}</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {item.description}
                  </p>
                </Link>
              ))}
              <Link
                to="/products"
                className="col-span-1 md:col-span-2 lg:col-span-3 block select-none rounded-md bg-navy p-3 text-white leading-none no-underline outline-none transition-colors hover:bg-navy/90 focus:bg-navy/90 text-center"
              >
                <div className="text-sm font-medium">View All Products</div>
              </Link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <Link to="/about">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <Link to="/contact">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default MegaMenu;
