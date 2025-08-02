import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Downtown",
      rating: 5,
      text: "Absolutely amazing! The Casper Burger is hands down the best burger I've ever had. The flavors are incredible and the delivery was lightning fast!",
      avatar: "SJ",
    },
    {
      id: 2,
      name: "Mike Chen",
      location: "Midtown",
      rating: 5,
      text: "Casper Cuisine has completely changed my fast food experience. Their pizzas are restaurant quality, and the customer service is phenomenal!",
      avatar: "MC",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      location: "West Side",
      rating: 5,
      text: "I'm obsessed with their Ghost Lemonade and spicy wings combo. The quality is consistent and the packaging is eco-friendly. Highly recommend!",
      avatar: "ER",
    },
    {
      id: 4,
      name: "David Thompson",
      location: "East Side",
      rating: 5,
      text: "As a food blogger, I'm picky about where I eat. Casper Cuisine exceeded all my expectations. Fresh ingredients, bold flavors, perfect execution!",
      avatar: "DT",
    },
    {
      id: 5,
      name: "Lisa Park",
      location: "Uptown",
      rating: 5,
      text: "The vegan options are incredible! Finally, a fast food place that doesn't compromise on taste for plant-based meals. The Phantom Veggie Burger is a masterpiece!",
      avatar: "LP",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            What Our <span className="text-primary">Customers</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our amazing customers
            have to say about their Casper Cuisine experience.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-display font-bold text-primary mb-2">50K+</div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-display font-bold text-primary mb-2">4.9</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-display font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-display font-bold text-primary mb-2">30min</div>
            <div className="text-muted-foreground">Avg Delivery</div>
          </div>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-card">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                {/* Quote Icon */}
                <Quote className="h-12 w-12 text-primary mx-auto mb-6 opacity-60" />
                
                {/* Rating Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-primary fill-primary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Customer Info */}
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mr-4">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-foreground">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-muted-foreground">
                      {testimonials[currentIndex].location}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm hover:bg-primary/20 border border-primary/20"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm hover:bg-primary/20 border border-primary/20"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;