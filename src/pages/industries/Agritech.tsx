
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { ArrowRight, Leaf, LineChart, Sprout, CloudRain, 
         Smartphone, Brain, DollarSign, FileCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import HeroCarousel from "@/components/hero/HeroCarousel";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const Agritech = () => {
  const navigate = useNavigate();

  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449",
      title: "Reimagining AgriBusiness",
      tagline: "Data-Driven, Sustainable, and Profitable Solutions"
    },
    {
      url: "https://images.unsplash.com/photo-1592982537447-6f2a365a8ef3",
      title: "Transforming Agriculture",
      tagline: "One Field at a Time"
    },
    {
      url: "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95",
      title: "Empowering Farmers",
      tagline: "Through Innovative Solutions"
    }
  ];

  const challenges = [
    {
      icon: <Sprout className="w-12 h-12 text-[#22C55E]" />,
      title: "Low Farm Productivity",
      description: "Many farmers lack access to the knowledge, technology, and resources they need to maximize yields."
    },
    {
      icon: <Leaf className="w-12 h-12 text-[#22C55E]" />,
      title: "Inefficient Input Use",
      description: "Farmers often over- or under-apply fertilizers and pesticides, leading to environmental damage."
    },
    {
      icon: <DollarSign className="w-12 h-12 text-[#22C55E]" />,
      title: "Limited Market Access",
      description: "Farmers struggle to connect with buyers and secure fair prices for their crops."
    },
    {
      icon: <CloudRain className="w-12 h-12 text-[#22C55E]" />,
      title: "Climate Change Impacts",
      description: "Extreme weather events and changing patterns threaten crop yields and farmer livelihoods."
    }
  ];

  const offerings = [
    {
      icon: <FileCheck className="w-12 h-12 text-[#22C55E]" />,
      title: "Farm Extension Operations",
      description: "Expert guidance and support",
      points: [
        "On-site consultations",
        "Access to expert advice",
        "Customized recommendations",
        "Sustainable farming practices"
      ]
    },
    {
      icon: <Leaf className="w-12 h-12 text-[#22C55E]" />,
      title: "Farm Input Adoption",
      description: "Optimize resource utilization",
      points: [
        "Precision agriculture",
        "Quality input access",
        "Application training",
        "Pest management strategies"
      ]
    },
    {
      icon: <DollarSign className="w-12 h-12 text-[#22C55E]" />,
      title: "Procurement Operations",
      description: "Direct market access",
      points: [
        "Fair price securing",
        "Post-harvest management",
        "Market expansion",
        "Streamlined payments"
      ]
    },
    {
      icon: <LineChart className="w-12 h-12 text-[#22C55E]" />,
      title: "Crop Data Analytics",
      description: "Real-time insights platform",
      points: [
        "Data-driven decisions",
        "Yield optimization",
        "Early problem detection",
        "Profitability tracking"
      ]
    }
  ];

  const advantages = [
    {
      icon: <Brain className="w-12 h-12 text-white" />,
      title: "AI-Powered Insights",
      description: "Leveraging advanced analytics for better decisions"
    },
    {
      icon: <Smartphone className="w-12 h-12 text-white" />,
      title: "Mobile-First Platform",
      description: "Easy-to-use tools for farmers and staff"
    },
    {
      icon: <Leaf className="w-12 h-12 text-white" />,
      title: "Sustainable Solutions",
      description: "Environmentally conscious farming practices"
    },
    {
      icon: <LineChart className="w-12 h-12 text-white" />,
      title: "Scalable & Affordable",
      description: "Solutions for farmers of all sizes"
    }
  ];

  const impacts = [
    {
      stat: "↑40%",
      title: "Crop Yields",
      description: "Increased productivity through optimization"
    },
    {
      stat: "↓30%",
      title: "Input Costs",
      description: "Reduced expenses through precision farming"
    },
    {
      stat: "2x",
      title: "Market Access",
      description: "Expanded market opportunities"
    },
    {
      stat: "↑50%",
      title: "Farmer Income",
      description: "Improved profitability and sustainability"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <PageBreadcrumb 
        items={[
          { label: "Industries", path: "/about" },
          { label: "Agritech" }
        ]}
      />
      
      <HeroCarousel 
        images={carouselImages}
        buttonConfig={{
          text: "Transform Your Agribusiness",
          onClick: () => navigate("/contact")
        }}
      />

      {/* Challenges Section */}
      <section className="py-16 bg-[#F6F6F7]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            The AgriBusiness Challenge
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-4">{challenge.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-[#22C55E]">
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
              <div key={index} className="bg-[#F0FDF4] p-8 rounded-lg shadow-lg">
                <div className="mb-4">{offering.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{offering.title}</h3>
                <p className="text-gray-600 mb-4">{offering.description}</p>
                <ul className="space-y-2">
                  {offering.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Leaf className="w-4 h-4 text-[#22C55E]" />
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
      <section className="py-16 bg-gradient-to-br from-[#22C55E] to-[#16A34A] text-white">
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
                <div className="text-4xl font-bold text-[#22C55E] mb-2">
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
      <section className="py-16 bg-gradient-to-br from-[#22C55E] to-[#16A34A] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your AgriBusiness?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to learn how Krushal's AI-powered solutions can help you achieve your goals.
          </p>
          <Button 
            onClick={() => navigate("/contact")}
            className="bg-white text-[#22C55E] hover:bg-gray-100 px-8 py-6 text-lg"
          >
            Get Started Today <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Agritech;
