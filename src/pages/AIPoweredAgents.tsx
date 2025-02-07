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
      url: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      title: "Intelligent Automation",
      tagline: "Transform Your Business with Advanced AI-Powered Process Automation"
    },
    {
      url: "https://images.unsplash.com/photo-1639322537228-f710d846310a",
      title: "Data-Driven Services",
      tagline: "Unlock Insights and Drive Innovation with AI-Powered Analytics"
    },
    {
      url: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      title: "AI-Powered Innovation",
      tagline: "Revolutionize Your Industry with Cutting-Edge AI Solutions"
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