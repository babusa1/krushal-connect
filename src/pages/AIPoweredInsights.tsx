
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

      {/* Harness the Power of AI Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl font-bold text-[#6E59A5] mb-6">Harness the Power of AI</h2>
              <p className="text-gray-700 mb-8">
                In today's fast-paced world, data is your most valuable asset, but only if you can unlock its hidden potential. AI-Powered Insights are the key. We use cutting-edge Artificial Intelligence to sift through the noise and deliver clear, actionable intelligence, enabling your business to make smarter decisions, faster.
              </p>
              <h3 className="text-2xl font-semibold text-[#6E59A5] mb-4">Our AI-Driven Approach</h3>
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#E5DEFF] rounded-full">
                      <Brain className="w-8 h-8 text-[#9b87f5]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-[#6E59A5] mb-2">Artificial Intelligence (AI)</h4>
                      <p className="text-gray-600">
                        Think Smarter, Not Harder. Imagine machines that can analyze massive datasets with human-like intelligence, but at superhuman speed and scale. That's AI. We leverage AI to process your complex data, identify hidden patterns, and surface the insights that would otherwise be missed.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#E5DEFF] rounded-full">
                      <Network className="w-8 h-8 text-[#9b87f5]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-[#6E59A5] mb-2">Machine Learning (ML)</h4>
                      <p className="text-gray-600">
                        Insights That Evolve With Your Business. Stop relying on static reports. Machine Learning empowers our systems to learn from your historical data, constantly refining their accuracy and predictive power. As your business grows and changes, your insights become sharper and more relevant over time.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#E5DEFF] rounded-full">
                      <Signal className="w-8 h-8 text-[#9b87f5]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-[#6E59A5] mb-2">Natural Language Processing (NLP)</h4>
                      <p className="text-gray-600">
                        Understand Your Customers Like Never Before. Unlock the voice of your customer. NLP allows us to analyze text data – from customer feedback and surveys to social media and beyond – to understand sentiment, identify emerging trends, and gain a deeper understanding of your market.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-[#F8F7FF] rounded-lg border border-[#E5DEFF]">
                <h3 className="text-2xl font-semibold text-[#6E59A5] mb-4">Impact</h3>
                <p className="text-gray-700">
                  With Krushal's AI-Powered Insights, you're not just collecting data, you're gaining a strategic advantage. Make data-driven decisions with confidence, optimize your operations, understand your customers on a deeper level, and uncover new opportunities for growth.
                </p>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
                  alt="AI Technology Visual"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#9b87f5]/30 to-transparent rounded-lg" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#E5DEFF] rounded-full -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#9b87f5]/20 rounded-full -z-10" />
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
