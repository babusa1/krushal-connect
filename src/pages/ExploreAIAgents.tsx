import React from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Sparkles, Code, MessageCircle, Search, Lightbulb, ShieldCheck } from "lucide-react";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const ExploreAIAgents = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Sparkles className="w-8 h-8 text-[#673AB7]" />,
      title: "AI-Powered Virtual Assistants",
      description: "Create intelligent virtual assistants that automate tasks, provide personalized support, and enhance customer experiences."
    },
    {
      icon: <Code className="w-8 h-8 text-[#673AB7]" />,
      title: "AI-Driven Automation",
      description: "Automate complex workflows and processes with AI agents that learn, adapt, and optimize performance over time."
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-[#673AB7]" />,
      title: "Intelligent Chatbots",
      description: "Develop chatbots that understand natural language, provide instant responses, and resolve customer inquiries efficiently."
    },
    {
      icon: <Search className="w-8 h-8 text-[#673AB7]" />,
      title: "AI-Enhanced Search",
      description: "Improve search accuracy and relevance with AI agents that understand user intent and deliver personalized search results."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-[#673AB7]" />,
      title: "Predictive Maintenance",
      description: "Use AI agents to predict equipment failures, optimize maintenance schedules, and reduce downtime."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#673AB7]" />,
      title: "Fraud Detection",
      description: "Detect and prevent fraudulent activities with AI agents that analyze patterns, identify anomalies, and flag suspicious transactions."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <PageBreadcrumb 
        items={[
          { label: "What We Do", path: "/about" },
          { label: "AI Agents", path: "/ai-agents" },
          { label: "Explore AI Agents" }
        ]}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#673AB7] mb-6 font-baloo">
              Explore AI Agents
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Discover how AI agents can transform your business operations and drive innovation.
            </p>
            <Button 
              onClick={() => navigate("/contact")}
              className="bg-[#673AB7] hover:bg-[#512DA8] text-white px-8 py-4 text-lg"
            >
              Get Started <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#673AB7] mb-12 font-baloo">
            Our AI Agent Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#673AB7] to-[#9b87f5] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-baloo">
            Ready to Transform Your Business with AI Agents?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about how our AI agent solutions can drive efficiency, reduce costs, and improve customer satisfaction.
          </p>
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

export default ExploreAIAgents;
