import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import HeroCarousel from "@/components/hero/HeroCarousel";
import ServicesSection from "@/components/ai-agents/ServicesSection";
import ProcessSection from "@/components/ai-agents/ProcessSection";
import IndustriesSection from "@/components/ai-agents/IndustriesSection";

const AIPoweredAgents = () => {
  const navigate = useNavigate();

  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
      title: "First Mile Modernization",
      tagline: "Empowering Industries with Intelligent AI Agents for Transformative Solutions"
    },
    {
      url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      title: "Mobile First Digital",
      tagline: "Human-Centric Solutions, Seamless Experiences"
    },
    {
      url: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1",
      title: "Insights and Data",
      tagline: "Unlocking the Power of Unified Data"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <HeroCarousel 
        images={carouselImages}
        buttonConfig={{
          text: "Explore AI Services",
          onClick: () => navigate("/explore-ai-services")
        }}
      />

      <ServicesSection />
      <ProcessSection />
      <IndustriesSection />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#673AB7] to-[#9b87f5] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to explore the possibilities of AI Agents?
          </h2>
          <Button 
            onClick={() => navigate("/contact")}
            className="bg-white text-[#673AB7] hover:bg-gray-100 px-8 py-6 text-lg"
          >
            Contact Us Today <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AIPoweredAgents;