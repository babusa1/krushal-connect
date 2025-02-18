
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { ArrowRight, Leaf, LineChart, Users, Tractor, 
         BarChart2, Heart, Zap, ChartPie } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dairy = () => {
  const navigate = useNavigate();

  const challenges = [
    {
      title: "Low Milk Productivity",
      description: "India's dairy farms lag behind global peers by 4-5x, limiting farmer incomes and competitiveness."
    },
    {
      title: "Milk Safety Concerns",
      description: "Adulteration, aflatoxin contamination, and antibiotic residues threaten consumer health and trust."
    },
    {
      title: "Inefficient Operations",
      description: "Fragmented supply chains and manual processes drive up costs and reduce profitability."
    },
    {
      title: "Limited Infrastructure",
      description: "Restricted access to veterinary services, quality feed, and financial resources hinders progress."
    }
  ];

  const offerings = [
    {
      icon: <Tractor className="w-12 h-12 text-[#8B5CF6]" />,
      title: "Farm Extension Operations",
      description: "Our teams work directly with farmers to implement best practices",
      points: [
        "Increase milk production and quality",
        "Reduce costs and maximize profitability",
        "Adopt sustainable farming practices"
      ]
    },
    {
      icon: <Heart className="w-12 h-12 text-[#8B5CF6]" />,
      title: "Cattle Nutrition Operations",
      description: "Optimize nutrition programs with balanced feed formulations",
      points: [
        "Improve animal health",
        "Increase milk yield",
        "Reduce methane emissions"
      ]
    },
    {
      icon: <ChartPie className="w-12 h-12 text-[#8B5CF6]" />,
      title: "Procurement Operations",
      description: "Streamline processes with technology-driven solutions",
      points: [
        "Reduce procurement costs",
        "Improve milk quality and safety",
        "Ensure fair pricing for farmers"
      ]
    },
    {
      icon: <BarChart2 className="w-12 h-12 text-[#8B5CF6]" />,
      title: "Milk Data Analytics",
      description: "AI-powered analytics platform providing actionable insights",
      points: [
        "Optimize farm management",
        "Improve milk quality",
        "Reduce costs and increase profits"
      ]
    }
  ];

  const advantages = [
    {
      icon: <Zap className="w-12 h-12 text-white" />,
      title: "First-Mile-as-a-Service",
      description: "Comprehensive solution for unique dairy first mile challenges"
    },
    {
      icon: <LineChart className="w-12 h-12 text-white" />,
      title: "Technology-Driven",
      description: "Leveraging AI and data analytics for superior results"
    },
    {
      icon: <Users className="w-12 h-12 text-white" />,
      title: "Local-First Approach",
      description: "Empowering farmers and village-level stakeholders"
    },
    {
      icon: <BarChart2 className="w-12 h-12 text-white" />,
      title: "Data Visibility",
      description: "Ground-truth visibility for B2B partners"
    }
  ];

  const impacts = [
    {
      stat: "4-5x",
      title: "Productivity Gap Closed",
      description: "Bringing Indian dairy farms closer to global standards"
    },
    {
      stat: "↓20%",
      title: "Methane Reduction",
      description: "Contributing to environmental sustainability"
    },
    {
      stat: "↑30%",
      title: "Income Increase",
      description: "Improving farmer livelihoods through better practices"
    },
    {
      stat: "100%",
      title: "Quality Assurance",
      description: "Enhanced milk safety and quality standards"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac"
            alt="Dairy Operations"
            className="w-full h-[600px] object-cover"
          />
        </div>
        <div className="container mx-auto px-4 py-32 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Transforming Dairy, Empowering Farmers
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              From Optimized Farm Operations to Enhanced Milk Quality and Safety, 
              Krushal is Redefining Dairy in Underserved Markets.
            </p>
            <Button 
              onClick={() => navigate("/contact")}
              className="bg-white text-[#8B5CF6] hover:bg-gray-100 px-8 py-6 text-lg"
            >
              Transform Your Dairy Operations <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 bg-[#F6F6F7]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            The Dairy Challenge
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
                      <Leaf className="w-4 h-4 text-[#8B5CF6]" />
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
            Ready to Transform Your Dairy Operations?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to learn how Krushal's First-Mile-as-a-Service solutions can help you achieve your goals.
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

export default Dairy;
