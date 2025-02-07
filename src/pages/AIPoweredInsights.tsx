
import { Brain, ChartBar, ChartLine, Database, Network, Signal, Target, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import HeroCarousel from "@/components/hero/HeroCarousel";
import { useNavigate } from "react-router-dom";
import AIApproachCard from "@/components/ai-insights/AIApproachCard";
import InsightCard from "@/components/ai-insights/InsightCard";
import SuccessStoryCard from "@/components/ai-insights/SuccessStoryCard";

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
      
      <HeroCarousel 
        images={carouselImages}
        buttonConfig={{
          text: "Explore AI Services",
          onClick: () => navigate("/explore-ai-services")
        }}
      />

      {/* Overview Section */}
      <section className="py-16 bg-gradient-to-b from-[#E5DEFF] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed animate-fade-in">
              Unlock your business's full potential with Krushal's AI-Powered Insights Services. We leverage advanced data analytics to deliver actionable insights that fuel strategic growth and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Harness the Power of AI Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-[#6E59A5] mb-6">Transform Data into Your Competitive Advantage</h2>
            <p className="text-gray-700 mb-8">
              In today's fast-paced world, data is your most valuable asset, but only if you can unlock its hidden potential. AI-Powered Insights are the key. We use cutting-edge Artificial Intelligence to sift through the noise and deliver clear, actionable intelligence, enabling your business to make smarter decisions, faster.
            </p>
            <h3 className="text-2xl font-semibold text-[#6E59A5] mb-4">Our AI-Driven Approach</h3>
            <div className="space-y-6">
              <AIApproachCard
                icon={Brain}
                title="Artificial Intelligence (AI): Smarter, Faster Insights"
                description="Leverage AI to analyze massive datasets at superhuman speed. We process complex data to reveal hidden patterns and surface insights you'd otherwise miss."
              />
              <AIApproachCard
                icon={Network}
                title="Machine Learning (ML): Evolving Insights for Business Growth"
                description="Move beyond static reports. ML systems learn from your data, constantly refining accuracy and prediction. Insights become sharper and more relevant as your business evolves."
              />
              <AIApproachCard
                icon={Signal}
                title="Natural Language Processing (NLP): Deep Customer Understanding"
                description="Unlock the voice of your customer. NLP analyzes text data from feedback to social media, revealing sentiment, trends, and a deeper understanding of your market."
              />
            </div>
            
            <div className="mt-8 p-6 bg-[#F8F7FF] rounded-lg border border-[#E5DEFF]">
              <h3 className="text-2xl font-semibold text-[#6E59A5] mb-4">Impact: Strategic Advantage, Data-Driven Success</h3>
              <p className="text-gray-700">
                Krushal's AI Insights transform data into your strategic weapon. Decide with confidence, optimize operations, deeply understand customers, and unlock new growth opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Areas of Application */}
      <section className="py-16 bg-[#F8F7FF]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#6E59A5] mb-12">Key Areas of Application</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Consumer Insights",
                description: "Analyzing consumer behavior to tailor products and services."
              },
              {
                icon: Target,
                title: "Marketing Insights",
                description: "Optimizing campaigns to reach the right audience with personalized messages."
              },
              {
                icon: ChartBar,
                title: "Product Insights",
                description: "Improving product development by identifying market gaps and needs."
              },
              {
                icon: ChartLine,
                title: "Predictive Analytics",
                description: "Forecasting customer behavior and business outcomes."
              }
            ].map((item, index) => (
              <InsightCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#6E59A5] mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                client: "Dairy Farm",
                industry: "Dairy",
                challenge: "Needed to optimize milk production and reduce costs.",
                solution: "Implemented an AI-powered system to monitor cow health and environmental conditions.",
                outcome: "Increased milk production by 18% and reduced labor costs.",
                icon: Database
              },
              {
                client: "AgriTech Company",
                industry: "Agritech",
                challenge: "Improve soil health and increase crop yields.",
                solution: "Utilized AI-driven analytics to assess soil composition.",
                outcome: "Increased crop yields by 20% and reduced fertilizer usage by 15%.",
                icon: ChartLine
              }
            ].map((story, index) => (
              <SuccessStoryCard
                key={index}
                {...story}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-[#E5DEFF] to-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#6E59A5] mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how AI-powered insights can drive your business forward.
          </p>
          <Button 
            className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white px-8 py-6 text-lg rounded-full"
            onClick={() => window.location.href = '/contact'}
          >
            Request a Demo
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AIPoweredInsights;
