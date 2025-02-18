
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import HeroCarousel from "@/components/hero/HeroCarousel";
import { ArrowRight, Brain, LineChart, Leaf, Calculator, 
         RefreshCcw, UserCheck, TrendingUp, BarChart2, 
         Database, Shield, Building2, Tractor } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PersonalizedInsights = () => {
  const navigate = useNavigate();

  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      title: "Transform Your Operations with AI-Driven Insights",
      tagline: "Personalized Nutrition, Smart Rationing, and Predictive Forecasting"
    },
    {
      url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      title: "Data-Driven Decision Making",
      tagline: "Optimize processes and enhance performance with AI analytics"
    },
    {
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      title: "Smart Livestock Management",
      tagline: "Enhance productivity with personalized nutrition insights"
    }
  ];

  const features = [
    {
      icon: <Brain className="w-12 h-12 text-[#8B5CF6]" />,
      title: "Personalized Nutrition",
      description: "AI-driven feed recommendations tailored to your livestock's specific needs"
    },
    {
      icon: <Calculator className="w-12 h-12 text-[#8B5CF6]" />,
      title: "Linear Programming Module",
      description: "Advanced optimization for non-linear needs with long-term maintainability"
    },
    {
      icon: <LineChart className="w-12 h-12 text-[#8B5CF6]" />,
      title: "Dynamic Configuration",
      description: "Real-time adjustment of weights for regional implementation"
    },
    {
      icon: <RefreshCcw className="w-12 h-12 text-[#8B5CF6]" />,
      title: "Continuous Optimization",
      description: "Pipeline results into subsequent optimizations for ongoing improvement"
    },
    {
      icon: <UserCheck className="w-12 h-12 text-[#8B5CF6]" />,
      title: "Expert Review System",
      description: "Easy review and override capabilities for veterinarians and consultants"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-[#8B5CF6]" />,
      title: "Predictive Forecasting",
      description: "Precise production forecasts by farm and animal"
    }
  ];

  const results = [
    {
      stat: "25%",
      title: "Farmer Engagement",
      description: "Increase in farmer engagement through valuable insights"
    },
    {
      stat: "50%",
      title: "Partnership Sales",
      description: "Growth in sales through partner offerings"
    },
    {
      stat: "20%",
      title: "Procurement Optimization",
      description: "Reduction in procurement quantity variance"
    },
    {
      stat: "30%",
      title: "Planning Accuracy",
      description: "Improvement in milk procurement planning"
    }
  ];

  const domains = [
    {
      icon: <BarChart2 className="w-12 h-12 text-white" />,
      title: "Milk Data Analytics",
      features: [
        "Field Staff Earnings Tracking",
        "Performance Analytics",
        "Resource Optimization",
        "Quality Monitoring"
      ]
    },
    {
      icon: <Building2 className="w-12 h-12 text-white" />,
      title: "Finance Domain",
      features: [
        "Risk Management",
        "Collection Analytics",
        "Loan Monitoring",
        "Financial Planning"
      ]
    },
    {
      icon: <Shield className="w-12 h-12 text-white" />,
      title: "Insurance Services",
      features: [
        "Claims Management",
        "Risk Assessment",
        "Policy Monitoring",
        "Customer Service"
      ]
    },
    {
      icon: <Tractor className="w-12 h-12 text-white" />,
      title: "AgriBusiness",
      features: [
        "Crop Data Analytics",
        "Field Staff Management",
        "Resource Planning",
        "Performance Tracking"
      ]
    }
  ];

  const veterinaryAnalytics = [
    {
      title: "Entity Data Pipeline",
      description: "Comprehensive management of farmer, farm, animal, and geography-level information"
    },
    {
      title: "Validated Data Platform",
      description: "Seamless data changes with maintained system integrity and reporting"
    },
    {
      title: "Business Metrics",
      description: "Track cost per visit, animals treated, visits per farmer, and more"
    },
    {
      title: "Service Optimization",
      description: "95% compliance rate and improved success in veterinary procedures"
    },
    {
      title: "Cost Management",
      description: "20% cost reduction through optimal medicine use and protocol adherence"
    },
    {
      title: "Customer Insights",
      description: "Identify and target profitable segments for enhanced satisfaction"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <HeroCarousel 
        images={carouselImages}
        buttonConfig={{
          text: "Schedule a Demo",
          onClick: () => navigate("/contact")
        }}
      />

      {/* Key Features Section */}
      <section className="py-16 bg-[#F6F6F7]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Key Features of Our Personalized Insights Platform
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gradient-to-br from-[#9b87f5] to-[#8B5CF6] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Impactful Results
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-lg p-8 rounded-lg">
                <div className="text-4xl font-bold mb-2">
                  {result.stat}
                </div>
                <h3 className="text-xl font-semibold mb-2">{result.title}</h3>
                <p className="text-gray-100">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domain Coverage Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Comprehensive Coverage Across Domains
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {domains.map((domain, index) => (
              <div key={index} className="bg-[#F8F7FF] p-8 rounded-lg shadow-lg">
                <div className="mb-4 w-12 h-12 bg-[#8B5CF6] rounded-full flex items-center justify-center">
                  {domain.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#6E59A5]">{domain.title}</h3>
                <ul className="space-y-2">
                  {domain.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600">
                      <Leaf className="w-4 h-4 text-[#8B5CF6]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Veterinary Analytics Section */}
      <section className="py-16 bg-[#F6F6F7]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Transforming Veterinary Services Through Analytics
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {veterinaryAnalytics.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-semibold mb-4 text-[#8B5CF6]">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment & CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#9b87f5] to-[#8B5CF6] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Smart Investment for Your Business
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Choose between pay-per-use for cost-effective scalability or organization-level licensing for comprehensive access. Empower your teams with AI-driven solutions that transform operations and drive efficiency.
          </p>
          <Button 
            onClick={() => navigate("/contact")}
            className="bg-white text-[#8B5CF6] hover:bg-gray-100 px-8 py-6 text-lg"
          >
            Schedule a Demo Today <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PersonalizedInsights;
