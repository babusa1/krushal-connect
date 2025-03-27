
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { ArrowRight, ChartBar, CreditCard, LineChart, Users, 
         BarChart2, Building, Network, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";
import HeroCarousel from "@/components/hero/HeroCarousel";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const Finance = () => {
  const navigate = useNavigate();

  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc",
      title: "Redefining Rural Finance",
      tagline: "AI-Powered Solutions for Inclusive Growth - Bridging the Financial Gap, One Community at a Time"
    },
    {
      url: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e",
      title: "Transforming Financial Access",
      tagline: "Driving Efficiency and Sustainability in Underserved Markets"
    },
    {
      url: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0",
      title: "Empowering Rural Communities",
      tagline: "Innovative Solutions for Sustainable Financial Growth"
    }
  ];

  const challenges = [
    {
      title: "High Operational Costs",
      description: "Reaching remote areas and managing dispersed operations drives up costs significantly."
    },
    {
      title: "Limited Access to Data",
      description: "Lack of reliable data on rural borrowers hinders accurate risk assessment and credit scoring."
    },
    {
      title: "Inefficient Processes",
      description: "Manual processes and outdated technology lead to delays, errors, and increased costs."
    },
    {
      title: "High Default Rates",
      description: "Lack of effective monitoring and collection mechanisms contribute to higher default rates."
    }
  ];

  const offerings = [
    {
      icon: <Building className="w-12 h-12 text-[#8B5CF6]" />,
      title: "Field Operations Digitization",
      description: "Transform field operations with mobile-first applications",
      points: [
        "Reduced operational costs",
        "Better data capture",
        "Improved transparency"
      ]
    },
    {
      icon: <CreditCard className="w-12 h-12 text-[#8B5CF6]" />,
      title: "Loan Origination",
      description: "Streamline loan processing with AI-powered credit scoring",
      points: [
        "Faster loan approvals",
        "Accurate risk assessment",
        "Reduced costs"
      ]
    },
    {
      icon: <ChartBar className="w-12 h-12 text-[#8B5CF6]" />,
      title: "Loan Monitoring",
      description: "Real-time monitoring and early warning systems",
      points: [
        "Reduced default rates",
        "Proactive intervention",
        "Improved compliance"
      ]
    },
    {
      icon: <Network className="w-12 h-12 text-[#8B5CF6]" />,
      title: "Risk Management",
      description: "Comprehensive AI-powered risk assessment solutions",
      points: [
        "Portfolio diversification",
        "Accurate forecasting",
        "Enhanced compliance"
      ]
    }
  ];

  const advantages = [
    {
      icon: <BarChart2 className="w-12 h-12 text-white" />,
      title: "AI-Powered Insights",
      description: "Leveraging advanced AI for actionable insights"
    },
    {
      icon: <DollarSign className="w-12 h-12 text-white" />,
      title: "Mobile-First Platform",
      description: "Empowering field staff with easy-to-use tools"
    },
    {
      icon: <LineChart className="w-12 h-12 text-white" />,
      title: "Seamless Integration",
      description: "Compatible with existing banking systems"
    },
    {
      icon: <Users className="w-12 h-12 text-white" />,
      title: "Customized Solutions",
      description: "Tailored to meet specific institutional needs"
    }
  ];

  const impacts = [
    {
      stat: "↑40%",
      title: "Financial Access",
      description: "Increased access for underserved communities"
    },
    {
      stat: "↓30%",
      title: "Operating Costs",
      description: "Reduced operational costs for institutions"
    },
    {
      stat: "↓25%",
      title: "Default Rates",
      description: "Improved portfolio performance"
    },
    {
      stat: "2x",
      title: "Growth Rate",
      description: "Sustainable and inclusive economic expansion"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <PageBreadcrumb 
        items={[
          { label: "Industries", path: "/about" },
          { label: "Finance" }
        ]}
      />
      
      <HeroCarousel 
        images={carouselImages}
        buttonConfig={{
          text: "Transform Your Financial Services",
          onClick: () => navigate("/contact")
        }}
      />

      {/* Challenges Section */}
      <section className="py-16 bg-[#F6F6F7]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            The Rural Finance Challenge
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-[#8B5CF6]">
                  {challenge.title}
                </h3>
                <p className="text-gray-600">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings Section */}
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
                      <DollarSign className="w-4 h-4 text-[#8B5CF6]" />
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
            Ready to Transform Your Financial Services?
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

export default Finance;
