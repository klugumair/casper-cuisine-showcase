import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Car, Truck } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="location" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Find <span className="text-primary">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Visit our restaurant or get your favorites delivered right to your door.
            We're here to serve you the best fast food experience in the city.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Section */}
          <div className="relative">
            <Card className="overflow-hidden shadow-card">
              <div className="h-96 bg-muted relative">
                {/* Mock Map */}
                <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Interactive Map
                    </h3>
                    <p className="text-muted-foreground">
                      Click to open in Google Maps
                    </p>
                  </div>
                </div>
                {/* Location Pin */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-8 bg-primary rounded-full animate-pulse shadow-glow"></div>
                </div>
              </div>
            </Card>
            
            <Button 
              variant="hero" 
              size="lg" 
              className="absolute bottom-4 left-4"
            >
              Open in Maps
            </Button>
          </div>

          {/* Location Info */}
          <div className="space-y-8">
            {/* Main Location Card */}
            <Card className="bg-card shadow-card">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground mb-2">
                      Main Location
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      123 Flavor Street, Downtown District<br />
                      Food City, FC 12345
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Call Us</p>
                      <p className="font-semibold text-foreground">(555) 123-FOOD</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Hours</p>
                      <p className="font-semibold text-foreground">10AM - 11PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Options */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Car className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">
                    Pickup
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Order ahead and skip the line
                  </p>
                  <p className="text-sm font-semibold text-primary">
                    Ready in 15-20 mins
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">
                    Delivery
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Fast delivery to your door
                  </p>
                  <p className="text-sm font-semibold text-primary">
                    25-35 mins average
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Operating Hours */}
            <Card className="bg-card shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-4 flex items-center">
                  <Clock className="h-6 w-6 text-primary mr-3" />
                  Operating Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Thursday</span>
                    <span className="font-semibold">10:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Friday - Saturday</span>
                    <span className="font-semibold">10:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-semibold">11:00 AM - 9:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="order" size="lg" className="flex-1">
                Order for Delivery
              </Button>
              <Button variant="outline" size="lg" className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Call Restaurant
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;