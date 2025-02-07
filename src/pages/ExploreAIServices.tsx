
import Navigation from "@/components/Navigation";
import { Brain, ChartLine, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const ExploreAIServices = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Users,
      title: "Customer Intelligence",
      description: "Gain a 360-degree view of your customers. Understand their behavior, preferences, and needs to create personalized experiences and build lasting loyalty.",
      bullets: [
        "Deep Customer Understanding: Segment customers based on behavior and needs",
        "Personalized Experiences: Tailor offers and content for maximum impact",
        "Sentiment & Feedback Analysis: Analyze customer opinions from text data",
        "Predictive Churn Reduction: Proactively engage at-risk customers"
      ]
    },
    {
      icon: Brain,
      title: "Operational Excellence",
      description: "Optimize your internal processes and assets for peak performance and efficiency, reducing costs and maximizing productivity.",
      bullets: [
        "Process Optimization: Identify and eliminate operational bottlenecks",
        "Predictive Maintenance & Asset Management: Minimize downtime",
        "Intelligent Supply Chain: Streamline logistics and optimize inventory",
        "Advanced Fraud & Anomaly Detection: Protect your business"
      ]
    },
    {
      icon: Target,
      title: "Market & Competitive Advantage",
      description: "Stay ahead of the competition and identify new opportunities by understanding market trends and your competitive landscape.",
      bullets: [
        "Market Trend Forecasting: Predict market shifts and trends",
        "Competitive Landscape Analysis: Understand competitor strategies",
        "Demand & Pricing Optimization: Maximize revenue with optimized pricing"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 mt-16 bg-gradient-to-br from-[#E5DEFF] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#6E59A5] mb-6 animate-fade-in">
              Transform Data into Your Strategic Advantage with Krushal's AI-Powered Insights
            </h1>
            <p className="text-lg text-gray-700 mb-8 animate-fade-in">
              In today's data-rich world, unlock hidden potential with Krushal. We leverage cutting-edge Artificial Intelligence to transform your raw data into clear, actionable intelligence. Drive smarter decisions, optimize operations, and gain a competitive edge.
            </p>
            <Button 
              onClick={() => navigate("/contact")}
              className="bg-[#9b87f5] hover:bg-[#8B5CF6] text-white px-8 py-6 text-lg rounded-full animate-fade-in"
            >
              Request a Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#6E59A5] mb-12">
            Krushal: AI-Powered Insight Services
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-16">
            Unlock the full potential of your data with Krushal's AI-Powered Insight services. We transform complex data into clear, actionable intelligence, driving smarter decisions and a stronger competitive edge for your business.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="mb-4 w-12 h-12 bg-[#E5DEFF] rounded-full flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-[#9b87f5]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#6E59A5] mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                        <ChartLine className="w-4 h-4 text-[#9b87f5] mt-1 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-[#F8F7FF]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#6E59A5] mb-8">
            Impact: Strategic Advantage, Data-Driven Success
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700">
              Krushal's AI Insights transform data into your strategic weapon. Decide with confidence, optimize operations, deeply understand customers, and unlock new growth opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-[#E5DEFF] to-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#6E59A5] mb-6">
            Ready to Unlock Your Data's Potential?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Contact Krushal today to discuss how our AI-Powered Insight services can transform your business.
          </p>
          <Button 
            onClick={() => navigate("/contact")}
            className="bg-[#9b87f5] hover:bg-[#8B5CF6] text-white px-8 py-6 text-lg rounded-full"
          >
            Get a Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ExploreAIServices;
