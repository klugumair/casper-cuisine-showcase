import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import TestimonialSection from "@/components/TestimonialSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <MenuSection />
      <AboutSection />
      <TestimonialSection />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;
