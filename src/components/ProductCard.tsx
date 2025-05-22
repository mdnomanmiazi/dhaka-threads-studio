
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription, DialogHeader, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
  tags?: string[];
  index?: number;
}

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  companyName: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(7, { message: "Please enter a valid phone number." }),
  productName: z.string(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

const ProductCard: React.FC<ProductCardProps> = ({ 
  image, 
  title, 
  category, 
  description, 
  tags = [],
  index = 0
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const animationDelay = `${index * 150}ms`;
  
  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      companyName: "",
      email: "",
      phone: "",
      productName: title,
      message: ""
    }
  });

  // Form submission handler
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Send data to the webhook
      const response = await fetch('https://n8n.tunelai.com/webhook-test/f2d16942-0f05-4c13-b4ce-35eee59d4e58', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      
      if (response.ok) {
        console.log("Form submitted:", values);
        toast({
          title: "Success",
          description: "Your sample request has been submitted successfully!",
        });
        setIsSubmitted(true);
      } else {
        console.error("Form submission failed:", response.statusText);
        toast({
          title: "Error",
          description: "There was a problem submitting your request. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Connection error. Please check your internet connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form state when dialog closes
  const handleDialogClose = () => {
    if (isSubmitted) {
      setTimeout(() => {
        setIsSubmitted(false);
        form.reset();
      }, 300);
    }
  };
  
  return (
    <Dialog onOpenChange={(open) => !open && handleDialogClose()}>
      <DialogTrigger asChild>
        <div 
          className="product-card bg-white rounded-lg overflow-hidden shadow-md cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ animationDelay }}
        >
          <div className="relative overflow-hidden h-60">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out"
              style={{
                transform: isHovered ? 'scale(1.1)' : 'scale(1)',
              }}
            />
            <div 
              className="absolute inset-0 bg-navy bg-opacity-0 transition-all duration-300"
              style={{
                opacity: isHovered ? 0.2 : 0,
              }}
            ></div>
            <div className="absolute top-4 left-4">
              <span className="bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full">
                {category}
              </span>
            </div>
          </div>
          
          <div className="p-4">
            <h3 className="text-lg font-serif font-medium text-navy">{title}</h3>
            <p className="text-sm text-gray-600 mt-2 line-clamp-2">{description}</p>
            
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            <div 
              className="mt-4 flex items-center text-gold text-sm font-medium transition-all duration-300"
              style={{
                transform: isHovered ? 'translateX(8px)' : 'translateX(0)',
                opacity: isHovered ? 1 : 0.7,
              }}
            >
              <span>View Details</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-1 transition-transform duration-300"
                style={{
                  transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                }}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </DialogTrigger>
      
      <DialogContent className="max-w-3xl">
        {/* Product Details */}
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif font-medium text-navy">{title}</DialogTitle>
          <DialogDescription className="text-gray-600">{category}</DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-[1.02]">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-gray-600 mb-4">{description}</p>
            
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4 mb-4">
                {tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            <div className="mt-6">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-gold hover:bg-gold/90 text-navy font-medium">
                    Request Sample
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Request Sample</DialogTitle>
                    <DialogDescription>
                      Fill out the form below to request a sample of {title}
                    </DialogDescription>
                  </DialogHeader>
                  
                  {!isSubmitted ? (
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="companyName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your company" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="your.email@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your phone number" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={form.control}
                          name="productName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Product</FormLabel>
                              <FormControl>
                                <Input {...field} readOnly />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Please provide any additional details about your request" 
                                  className="min-h-[120px]" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <DialogFooter className="mt-6">
                          <DialogClose asChild>
                            <Button type="button" variant="outline">Cancel</Button>
                          </DialogClose>
                          <Button 
                            type="submit" 
                            className="bg-navy hover:bg-navy/90"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Submitting..." : "Submit Request"}
                          </Button>
                        </DialogFooter>
                      </form>
                    </Form>
                  ) : (
                    <div className="py-8 text-center animate-fade-in">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-serif font-medium text-navy mb-2">Thank You!</h3>
                      <p className="text-gray-600">Your sample request has been submitted. We'll get back to you shortly.</p>
                      <div className="mt-6">
                        <DialogClose asChild>
                          <Button variant="outline">Close</Button>
                        </DialogClose>
                      </div>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductCard;
