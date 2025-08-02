import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Users, 
  Clock, 
  Leaf, 
  Heart,
  ChefHat,
  Truck,
  Star
} from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: ChefHat,
      title: "Expert Chefs",
      description: "Our culinary team brings years of experience to create extraordinary fast food."
    },
    {
      icon: Leaf,
      title: "Fresh Ingredients",
      description: "We source the finest, freshest ingredients from local suppliers daily."
    },
    {
      icon: Clock,
      title: "Lightning Fast",
      description: "Average delivery time of 30 minutes without compromising quality."
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every meal is prepared with passion and attention to detail."
    }
  ];

  const awards = [
    { year: "2024", title: "Best Fast Food Experience", org: "Food & Beverage Awards" },
    { year: "2024", title: "Innovation in Quick Service", org: "Restaurant Industry Awards" },
    { year: "2023", title: "Customer Choice Award", org: "Local Business Excellence" },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-primary bg-primary/10">
            Our Story
          </Badge>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            About <span className="text-primary">Casper Cuisine</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Born from a passion for extraordinary flavors and exceptional service, 
            Casper Cuisine is revolutionizing the fast food industry with gourmet 
            ingredients, innovative recipes, and a commitment to quality that never compromises.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To deliver bold, unforgettable flavors through fresh ingredients and 
                innovative cooking techniques, while maintaining the speed and convenience 
                that modern life demands.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="border-primary text-primary">
                  <Award className="h-3 w-3 mr-1" />
                  Quality First
                </Badge>
                <Badge variant="outline" className="border-primary text-primary">
                  <Users className="h-3 w-3 mr-1" />
                  Community Focused
                </Badge>
                <Badge variant="outline" className="border-primary text-primary">
                  <Truck className="h-3 w-3 mr-1" />
                  Fast Delivery
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-secondary/30 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                <div className="text-muted-foreground">Satisfied Customers</div>
              </div>
              <div className="text-center p-6 bg-secondary/30 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <div className="text-muted-foreground">Locations</div>
              </div>
            </div>

            <Button variant="hero" size="lg" className="group">
              Join Our Story
              <Heart className="ml-2 h-5 w-5 group-hover:text-red-500 transition-colors" />
            </Button>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-hero rounded-2xl p-8 shadow-card">
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <Card key={index} className="bg-card/80 backdrop-blur-sm border-primary/20">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-bold text-card-foreground mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-foreground mb-8">
            Recognition & Awards
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {awards.map((award, index) => (
              <Card key={index} className="bg-card shadow-card hover:shadow-glow transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">{award.year}</div>
                  <h4 className="font-bold text-card-foreground mb-2">{award.title}</h4>
                  <p className="text-sm text-muted-foreground">{award.org}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;