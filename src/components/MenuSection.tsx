import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Plus, Flame, Leaf } from "lucide-react";
import burgerImage from "@/assets/burger-classic.jpg";
import pizzaImage from "@/assets/pizza-pepperoni.jpg";
import friesImage from "@/assets/fries-golden.jpg";

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("burgers");

  const categories = [
    { id: "burgers", name: "Burgers", icon: "🍔" },
    { id: "pizzas", name: "Pizzas", icon: "🍕" },
    { id: "wraps", name: "Wraps & Fries", icon: "🌯" },
    { id: "combos", name: "Combos", icon: "🍽️" },
    { id: "beverages", name: "Beverages", icon: "🥤" },
  ];

  const menuItems = {
    burgers: [
      {
        id: 1,
        name: "Classic Casper Burger",
        description: "Double beef patty, melted cheese, lettuce, tomato, special sauce",
        price: "$12.99",
        image: burgerImage,
        badges: ["Popular", "New"],
        rating: 4.8,
        spicy: false,
      },
      {
        id: 2,
        name: "Spicy Ghost Burger",
        description: "Spicy chicken, jalapeños, pepper jack cheese, chipotle sauce",
        price: "$13.99",
        image: burgerImage,
        badges: ["Spicy"],
        rating: 4.9,
        spicy: true,
      },
      {
        id: 3,
        name: "Phantom Veggie Burger",
        description: "Plant-based patty, avocado, sprouts, vegan cheese, herb mayo",
        price: "$11.99",
        image: burgerImage,
        badges: ["Vegan"],
        rating: 4.7,
        spicy: false,
        vegan: true,
      },
    ],
    pizzas: [
      {
        id: 4,
        name: "Casper's Supreme",
        description: "Pepperoni, mushrooms, bell peppers, olives, mozzarella",
        price: "$18.99",
        image: pizzaImage,
        badges: ["Popular"],
        rating: 4.9,
        spicy: false,
      },
      {
        id: 5,
        name: "Spooky Spicy Pizza",
        description: "Spicy Italian sausage, jalapeños, red peppers, hot sauce drizzle",
        price: "$19.99",
        image: pizzaImage,
        badges: ["Spicy", "New"],
        rating: 4.8,
        spicy: true,
      },
      {
        id: 6,
        name: "Margherita Magic",
        description: "Fresh mozzarella, tomatoes, basil, olive oil drizzle",
        price: "$16.99",
        image: pizzaImage,
        badges: ["Classic"],
        rating: 4.6,
        spicy: false,
      },
    ],
    wraps: [
      {
        id: 7,
        name: "Crispy Chicken Wrap",
        description: "Crispy chicken, lettuce, tomatoes, ranch dressing",
        price: "$9.99",
        image: friesImage,
        badges: ["Popular"],
        rating: 4.7,
        spicy: false,
      },
      {
        id: 8,
        name: "Golden Fries",
        description: "Perfectly seasoned crispy fries with special spice blend",
        price: "$4.99",
        image: friesImage,
        badges: ["Classic"],
        rating: 4.8,
        spicy: false,
      },
    ],
    combos: [
      {
        id: 9,
        name: "Casper Combo",
        description: "Classic burger + fries + drink",
        price: "$15.99",
        image: burgerImage,
        badges: ["Best Value"],
        rating: 4.9,
        spicy: false,
      },
      {
        id: 10,
        name: "Pizza Party Combo",
        description: "Personal pizza + garlic bread + drink",
        price: "$17.99",
        image: pizzaImage,
        badges: ["Popular"],
        rating: 4.8,
        spicy: false,
      },
    ],
    beverages: [
      {
        id: 11,
        name: "Casper Cola",
        description: "Our signature cola with a mysterious twist",
        price: "$2.99",
        image: friesImage,
        badges: ["Signature"],
        rating: 4.5,
        spicy: false,
      },
      {
        id: 12,
        name: "Ghost Lemonade",
        description: "Refreshing lemonade with a hint of mint",
        price: "$3.49",
        image: friesImage,
        badges: ["Refreshing"],
        rating: 4.6,
        spicy: false,
      },
    ],
  };

  return (
    <section id="menu" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Our <span className="text-primary">Menu</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our mouth-watering selection of gourmet fast food,
            crafted with passion and served with love.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "menu"}
              size="lg"
              onClick={() => setActiveCategory(category.id)}
              className="min-w-[120px]"
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </Button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems[activeCategory as keyof typeof menuItems]?.map((item) => (
            <Card
              key={item.id}
              className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {item.badges.map((badge) => (
                    <Badge
                      key={badge}
                      variant={badge === "Popular" ? "default" : "secondary"}
                      className={
                        badge === "Spicy"
                          ? "bg-brand-red text-white"
                          : badge === "Vegan"
                          ? "bg-green-600 text-white"
                          : badge === "New"
                          ? "bg-primary text-primary-foreground animate-pulse"
                          : ""
                      }
                    >
                      {badge === "Spicy" && <Flame className="h-3 w-3 mr-1" />}
                      {badge === "Vegan" && <Leaf className="h-3 w-3 mr-1" />}
                      {badge}
                    </Badge>
                  ))}
                </div>
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full p-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-primary mr-1" />
                    <span className="text-sm font-medium">{item.rating}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-2xl font-bold text-primary">
                    {item.price}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {item.description}
                </p>
                <Button
                  variant="default"
                  size="lg"
                  className="w-full group"
                >
                  <Plus className="h-4 w-4 mr-2 group-hover:rotate-90 transition-transform" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center mt-16">
          <Button variant="outline" size="xl" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;