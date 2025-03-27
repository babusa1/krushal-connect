import React from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Bot, Brain, Database, Cloud, Smartphone, Truck, Home } from "lucide-react";
import MarketOpportunity from "@/components/sections/MarketOpportunity";
import OutcomesSection from "@/components/sections/OutcomesSection";
import SolutionSection from "@/components/sections/SolutionSection";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const WhatWeDo = () => {
  const navigate = useNavigate();

  const solutions = [
    {
      icon: <Truck className="w-12 h-12 text-[#673AB7]" />,
      title: "First Mile Solutions",
      description: "Transforming operations in rural and underserved markets",
      route: "/first-mile-solutions"
    },
    {
      icon: <Bot className="w-12 h-12 text-[#673AB7]" />,
      title: "AI Agents",
      description: "Intelligent automation for enhanced efficiency",
      route: "/ai-agents"
    },
    {
      icon: <Brain className="w-12 h-12 text-[#673AB7]" />,
      title: "AI-Powered Insights",
      description: "Data-driven decision making for better outcomes",
      route: "/ai-insights"
    },
    {
      icon: <Smartphone className="w-12 h-12 text-[#673AB7]" />,
      title: "Mobile First Digital",
      description: "User-centric solutions for seamless experiences",
      route: "/mobile-first-digital"
    },
    {
      icon: <Cloud className="w-12 h-12 text-[#673AB7]" />,
      title: "Cloud & DevOps",
      description: "Scalable infrastructure for modern applications",
      route: "/cloud-and-devops"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <PageBreadcrumb 
        items={[
          { label: "What We Do" }
        ]}
      />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
            alt="Technology Solutions"
            className="w-full h-[500px] object-cover"
          />
        </div>
        <div className="container mx-auto px-4 py-24 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-baloo">
              What We Do
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Transforming industries through innovative technology solutions
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#673AB7] mb-12 font-baloo">
            Our Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
                onClick={() => navigate(solution.route)}
              >
                <div className="flex flex-col items-center text-center">
                  {solution.icon}
                  <h3 className="text-xl font-bold mt-4 mb-2 text-[#673AB7] font-baloo">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-16 bg-[#F8F7FF]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#673AB7] mb-12 font-baloo">
            Market Opportunity
          </h2>
          <MarketOpportunity />
        </div>
      </section>

      {/* Solution Impact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#673AB7] mb-12 font-baloo">
            Our Impact
          </h2>
          <SolutionSection />
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 bg-[#F8F7FF]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#673AB7] mb-12 font-baloo">
            Outcomes That Matter
          </h2>
          <OutcomesSection />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#673AB7] to-[#8B5CF6] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-baloo">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us to discuss how our solutions can help your organization thrive
          </p>
          <Button 
            onClick={() => navigate("/contact")}
            className="bg-white text-[#673AB7] hover:bg-gray-100 px-8 py-6 text-lg rounded-full"
          >
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
