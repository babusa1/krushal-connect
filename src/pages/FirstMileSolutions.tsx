
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { ArrowRight } from "lucide-react";
import HeroCarousel from "@/components/hero/HeroCarousel";
import MarketOpportunity from "@/components/sections/MarketOpportunity";
import SolutionSection from "@/components/sections/SolutionSection";
import IndustryUseCases from "@/components/sections/IndustryUseCases";
import OutcomesSection from "@/components/sections/OutcomesSection";

const FirstMileSolutions = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac",
      title: "Dairy Solutions",
      tagline: "Transforming dairy operations with modern first-mile solutions"
    },
    {
      url: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937",
      title: "Agritech Innovation",
      tagline: "Empowering farmers with cutting-edge agricultural technology"
    },
    {
      url: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
      title: "Insurance Services",
      tagline: "Secure futures with innovative insurance solutions"
    },
    {
      url: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc",
      title: "Banking Solutions",
      tagline: "Revolutionizing rural banking accessibility"
    },
    {
      url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
      title: "Healthcare Access",
      tagline: "Bridging healthcare gaps in rural communities"
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <HeroCarousel images={images} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MarketOpportunity />
        <SolutionSection />
        <IndustryUseCases />
        <OutcomesSection />
      </div>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 bg-gradient-to-br from-[#673AB7] to-[#9b87f5] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            First Mile as a Service for Underserved Markets
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-white/90">
            Join the revolution in rural transformation
          </p>
          <Button 
            className="bg-white text-[#673AB7] hover:bg-[#E5DEFF] px-6 sm:px-8 py-4 sm:py-6 rounded-full text-base sm:text-lg font-medium flex items-center gap-2 mx-auto"
          >
            Contact Us <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default FirstMileSolutions;
