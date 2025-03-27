
import Navigation from "@/components/Navigation";
import HeroCarousel from "@/components/hero/HeroCarousel";
import { useNavigate } from "react-router-dom";
import Overview from "@/components/ai-insights/Overview";
import TransformData from "@/components/ai-insights/TransformData";
import KeyAreas from "@/components/ai-insights/KeyAreas";
import SuccessStories from "@/components/ai-insights/SuccessStories";
import CallToAction from "@/components/ai-insights/CallToAction";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const AIPoweredInsights = () => {
  const navigate = useNavigate();

  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      title: "AI-Powered Insights Services",
      tagline: "Transforming Data into Actionable Intelligence"
    },
    {
      url: "https://images.unsplash.com/photo-1509228468518-180dd4864904",
      title: "Advanced Analytics Solutions",
      tagline: "Leverage AI and ML for data-driven decision making"
    },
    {
      url: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0",
      title: "Predictive Analytics",
      tagline: "Forecast trends and make informed business decisions"
    },
    {
      url: "https://images.unsplash.com/photo-1488229297570-58520851e868",
      title: "Business Intelligence",
      tagline: "Transform raw data into meaningful business insights"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <PageBreadcrumb 
        items={[
          { label: "Services", path: "/" },
          { label: "AI-Powered Insights" }
        ]}
      />
      
      <HeroCarousel 
        images={carouselImages}
        buttonConfig={{
          text: "Explore AI Services",
          onClick: () => navigate("/explore-ai-services")
        }}
      />

      <Overview />
      <TransformData />
      <KeyAreas />
      <SuccessStories />
      <CallToAction />
    </div>
  );
};

export default AIPoweredInsights;
