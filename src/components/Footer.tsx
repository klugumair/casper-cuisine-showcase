import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Phone, 
  Mail, 
  MapPin,
  Clock
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-display font-bold text-primary mb-4">
                Casper Cuisine
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Bold flavors, fresh ingredients, and unforgettable taste. 
                Experience the ultimate fast food revolution.
              </p>
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                "Home",
                "Menu",
                "About Us",
                "Nutrition Info",
                "Careers",
                "Franchise"
              ].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">
                    123 Flavor Street<br />
                    Downtown District<br />
                    Food City, FC 12345
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <p className="text-muted-foreground">(555) 123-FOOD</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <p className="text-muted-foreground">hello@caspercuisine.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="text-muted-foreground">
                    Mon-Thu: 10AM-10PM<br />
                    Fri-Sat: 10AM-11PM<br />
                    Sun: 11AM-9PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6">Stay Updated</h4>
            <p className="text-muted-foreground mb-4">
              Subscribe to get special offers, new menu items, and exclusive deals!
            </p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-background border-border focus:border-primary"
              />
              <Button variant="default" className="w-full">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-muted-foreground text-sm">
                © 2024 Casper Cuisine. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
            <Button variant="order" size="lg">
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;