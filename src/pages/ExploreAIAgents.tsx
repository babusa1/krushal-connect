import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Bot, Brain, LineChart, Network } from "lucide-react";

const ExploreAIAgents = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-[#E5DEFF] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#6E59A5] mb-6">
              Pioneering Intelligent AI Agents Across Industries
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Unleash the transformative power of Artificial Intelligence with Krushal's cutting-edge AI Agent development services. We create bespoke AI Agents tailored to your unique needs across various sectors.
            </p>
            <Button 
              onClick={() => navigate("/contact")}
              className="bg-[#6E59A5] hover:bg-[#5B479D] text-white px-8 py-6 text-lg rounded-full"
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#6E59A5] mb-12">
            Our Approach to AI Agent Development
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Brain className="w-12 h-12 text-[#6E59A5]" />,
                title: "Understand Your Needs",
                description: "Deep analysis of your business challenges and opportunities"
              },
              {
                icon: <LineChart className="w-12 h-12 text-[#6E59A5]" />,
                title: "Design Solutions",
                description: "Develop tailored AI Agents for your unique requirements"
              },
              {
                icon: <Network className="w-12 h-12 text-[#6E59A5]" />,
                title: "Develop & Deploy",
                description: "Build and deploy reliable and scalable AI Agents"
              },
              {
                icon: <Bot className="w-12 h-12 text-[#6E59A5]" />,
                title: "Support & Optimize",
                description: "Continuous monitoring and optimization for peak performance"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-[#F6F6F7]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#6E59A5] mb-12">
            Industries We Serve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Dairy",
                features: [
                  "Automated Herd Monitoring",
                  "Milk Quality Analysis",
                  "Smart Feed Management",
                  "Supply Chain Optimization"
                ]
              },
              {
                title: "Healthcare",
                features: [
                  "Virtual Patient Assistants",
                  "AI-Powered Diagnostic Support",
                  "Automated Administrative Tasks",
                  "Treatment Recommendations"
                ]
              },
              {
                title: "Insurance",
                features: [
                  "Automated Claims Processing",
                  "Fraud Detection & Prevention",
                  "Policy Recommendations",
                  "Risk Assessment"
                ]
              },
              {
                title: "Finance & Banking",
                features: [
                  "Customer Service Chatbots",
                  "Fraud Prevention",
                  "Financial Advice",
                  "Algorithmic Trading"
                ]
              },
              {
                title: "Agritech",
                features: [
                  "Precision Farming",
                  "Automated Irrigation",
                  "Pest Detection",
                  "Supply Chain Optimization"
                ]
              }
            ].map((industry, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-[#6E59A5] mb-6">{industry.title}</h3>
                <ul className="space-y-3">
                  {industry.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <Bot className="w-4 h-4 text-[#6E59A5]" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-white to-[#E5DEFF]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#6E59A5] mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Contact Krushal today to discuss your specific needs and discover how our AI Agent development services can drive innovation and growth for your business.
          </p>
          <Button 
            onClick={() => navigate("/contact")}
            className="bg-[#6E59A5] hover:bg-[#5B479D] text-white px-8 py-6 text-lg rounded-full"
          >
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ExploreAIAgents;