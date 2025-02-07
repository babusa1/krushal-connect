import { Brain, ChartBar, ChartLine, Database, Network, Signal, Target, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroCarousel from "@/components/hero/HeroCarousel";
import { useNavigate } from "react-router-dom";

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

      {/* What are AI-Powered Insights Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl font-bold text-[#6E59A5] mb-6">What are AI-Powered Insights?</h2>
              <p className="text-gray-700">
                AI-powered insights involve extracting meaningful information from data using AI technologies, including AI, Machine Learning (ML), and Natural Language Processing (NLP). This approach allows businesses to make data-driven decisions quickly and efficiently.
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: <Brain className="w-6 h-6 text-[#9b87f5]" />,
                    title: "Artificial Intelligence (AI)",
                    description: "Mimics human intelligence, enabling machines to process and analyze large datasets."
                  },
                  {
                    icon: <Network className="w-6 h-6 text-[#9b87f5]" />,
                    title: "Machine Learning (ML)",
                    description: "Enables systems to learn from historical data and improve accuracy over time."
                  },
                  {
                    icon: <Signal className="w-6 h-6 text-[#9b87f5]" />,
                    title: "Natural Language Processing (NLP)",
                    description: "Focuses on understanding human language, enabling analysis of text data."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                    {item.icon}
                    <div>
                      <h3 className="font-semibold text-[#6E59A5]">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
                alt="AI Technology Visual"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#9b87f5]/20 to-transparent rounded-lg" />
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
                icon: <Users />,
                title: "Consumer Insights",
                description: "Analyzing consumer behavior to tailor products and services."
              },
              {
                icon: <Target />,
                title: "Marketing Insights",
                description: "Optimizing campaigns to reach the right audience with personalized messages."
              },
              {
                icon: <ChartBar />,
                title: "Product Insights",
                description: "Improving product development by identifying market gaps and needs."
              },
              {
                icon: <ChartLine />,
                title: "Predictive Analytics",
                description: "Forecasting customer behavior and business outcomes."
              }
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 w-12 h-12 mx-auto bg-[#E5DEFF] rounded-full flex items-center justify-center group-hover:bg-[#9b87f5] transition-colors duration-300">
                    <div className="text-[#9b87f5] group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-[#6E59A5] mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
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
                icon: <Database />
              },
              {
                client: "AgriTech Company",
                industry: "Agritech",
                challenge: "Improve soil health and increase crop yields.",
                solution: "Utilized AI-driven analytics to assess soil composition.",
                outcome: "Increased crop yields by 20% and reduced fertilizer usage by 15%.",
                icon: <ChartLine />
              }
            ].map((story, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="mb-4 w-12 h-12 bg-[#E5DEFF] rounded-full flex items-center justify-center">
                    <div className="text-[#9b87f5]">{story.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#6E59A5] mb-2">{story.client}</h3>
                  <p className="text-sm text-gray-500 mb-4">Industry: {story.industry}</p>
                  <div className="space-y-2">
                    <p className="text-sm"><span className="font-semibold">Challenge:</span> {story.challenge}</p>
                    <p className="text-sm"><span className="font-semibold">Solution:</span> {story.solution}</p>
                    <p className="text-sm"><span className="font-semibold">Outcome:</span> {story.outcome}</p>
                  </div>
                </CardContent>
              </Card>
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
