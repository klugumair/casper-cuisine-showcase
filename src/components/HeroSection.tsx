import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-food-banner.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Delicious fast food spread"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-food"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-2 mb-8 animate-bounce-in">
            <Star className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">
              #1 Fast Food Experience
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 animate-slide-in-left">
            <span className="text-foreground">Crave it.</span>{" "}
            <span className="text-primary">Bite it.</span>{" "}
            <span className="text-foreground">Love it.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-in-right">
            Bold flavors, fresh ingredients, and unforgettable taste.
            Experience the ultimate fast food revolution at Casper Cuisine.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button variant="hero" size="xl" className="group">
              Order Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="border-primary/50 text-foreground hover:bg-primary/10">
              View Menu
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto animate-fade-in">
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-primary">4.9</div>
              <div className="text-sm text-muted-foreground">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-primary">30min</div>
              <div className="text-sm text-muted-foreground">Delivery</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-primary/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-primary/25 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default HeroSection;