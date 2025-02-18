
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { ArrowRight, BarChart2, LineChart, Users, Shield, 
         Smartphone, Brain, FileCheck, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import HeroCarousel from "@/components/hero/HeroCarousel";

const Insurance = () => {
  const navigate = useNavigate();

  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
      title: "Reimagining Rural Insurance",
      tagline: "AI-Powered Solutions for Inclusion and Growth"
    },
    {
      url: "https://images.unsplash.com/photo-1560472355-536de3962603",
      title: "Transforming Insurance Access",
      tagline: "Connecting Underserved Communities to Vital Protection"
    },
    {
      url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      title: "Data-Driven Solutions",
      tagline: "Optimizing Operations Through AI and Analytics"
    }
  ];

  const challenges = [
    {
      icon: <AlertTriangle className="w-12 h-12 text-[#8B5CF6]" />,
      title: "High Distribution Costs",
      description: "Reaching remote areas and managing a dispersed agent network is expensive."
    },
    {
      icon: <Users className="w-12 h-12 text-[#8B5CF6]" />,
      title: "Limited Product Understanding",
      description: "Rural populations may have low financial literacy and limited understanding of insurance products."
    },
    {
      icon: <BarChart2 className="w-12 h-12 text-[#8B5CF6]" />,
      title: "Data Scarcity",
      description: "Lack of reliable data on rural customers hinders accurate risk assessment and product design."
    },
    {
      icon: <FileCheck className="w-12 h-12 text-[#8B5CF6]" />,
      title: "Inefficient Claims Processes",
      description: "Manual claims processing can be slow, cumbersome, and prone to errors."
    }
  ];

  const offerings = [
    {
      icon: <Smartphone className="w-12 h-12 text-[#8B5CF6]" />,
      title: "Field Agent Operations",
      description: "Mobile-first platform for field agents",
      points: [
        "Streamlined workflows",
        "Automated task management",
        "Real-time product information",
        "Secure data collection"
      ]
    },
    {
      icon: <Brain className="w-12 h-12 text-[#8B5CF6]" />,
      title: "Product Recommendation Engine",
      description: "AI-powered product matching",
      points: [
        "Personalized recommendations",
        "Increased sales",
        "Reduced mis-selling",
        "Better customer retention"
      ]
    },
    {
      icon: <Shield className="w-12 h-12 text-[#8B5CF6]" />,
      title: "Risk Management",
      description: "Comprehensive risk assessment solutions",
      points: [
        "Improved underwriting",
        "Portfolio diversification",
        "Accurate forecasting",
        "Enhanced compliance"
      ]
    },
    {
      icon: <FileCheck className="w-12 h-12 text-[#8B5CF6]" />,
      title: "Monitoring & Claims",
      description: "Automated claims processing",
      points: [
        "Faster settlements",
        "Fraud detection",
        "Digital submissions",
        "Enhanced efficiency"
      ]
    }
  ];

  const advantages = [
    {
      icon: <Brain className="w-12 h-12 text-white" />,
      title: "AI-Driven Personalization",
      description: "Tailored insurance products for rural communities"
    },
    {
      icon: <Smartphone className="w-12 h-12 text-white" />,
      title: "Mobile-First Efficiency",
      description: "User-friendly tools for field operations"
    },
    {
      icon: <BarChart2 className="w-12 h-12 text-white" />,
      title: "Data-Powered Insights",
      description: "Deep understanding of rural customer needs"
    },
    {
      icon: <LineChart className="w-12 h-12 text-white" />,
      title: "Reduced Costs",
      description: "Lower distribution and operational costs"
    }
  ];

  const impacts = [
    {
      stat: "↑60%",
      title: "Market Reach",
      description: "Increased insurance penetration in rural markets"
    },
    {
      stat: "↓40%",
      title: "Operating Costs",
      description: "Reduced operational expenses"
    },
    {
      stat: "↑45%",
      title: "Processing Speed",
      description: "Faster claims settlement"
    },
    {
      stat: "3x",
      title: "Agent Efficiency",
      description: "Improved field agent productivity"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <HeroCarousel 
        images={carouselImages}
        buttonConfig={{
          text: "Transform Your Insurance Services",
          onClick: () => navigate("/contact")
        }}
      />

      {/* Challenges Section */}
      <section className="py-16 bg-[#F6F6F7]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            The Rural Insurance Challenge
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-4">{challenge.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-[#8B5CF6]">
                  {challenge.title}
                </h3>
                <p className="text-gray-600">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Offerings Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Key Offerings
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {offerings.map((offering, index) => (
              <div key={index} className="bg-[#F8F7FF] p-8 rounded-lg shadow-lg">
                <div className="mb-4">{offering.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{offering.title}</h3>
                <p className="text-gray-600 mb-4">{offering.description}</p>
                <ul className="space-y-2">
                  {offering.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-[#8B5CF6]" />
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-gradient-to-br from-[#9b87f5] to-[#8B5CF6] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            The Krushal Advantage
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-lg p-8 rounded-lg">
                <div className="mb-4 flex justify-center">{advantage.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-gray-100">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-[#F6F6F7]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Impact
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impacts.map((impact, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-lg shadow-lg">
                <div className="text-4xl font-bold text-[#8B5CF6] mb-2">
                  {impact.stat}
                </div>
                <h3 className="text-xl font-semibold mb-2">{impact.title}</h3>
                <p className="text-gray-600">{impact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#9b87f5] to-[#8B5CF6] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Insurance Strategy?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to learn how Krushal's AI-powered solutions can help you achieve your goals.
          </p>
          <Button 
            onClick={() => navigate("/contact")}
            className="bg-white text-[#8B5CF6] hover:bg-gray-100 px-8 py-6 text-lg"
          >
            Get Started Today <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Insurance;
