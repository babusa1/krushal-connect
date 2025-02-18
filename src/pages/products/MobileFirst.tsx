
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import HeroCarousel from "@/components/hero/HeroCarousel";
import { ArrowRight, Smartphone, LineChart, Users, Zap, 
         Library, Phone, Wifi, FileText, BarChart3, 
         Leaf, Building2, Shield, Tractor } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MobileFirst = () => {
  const navigate = useNavigate();

  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      title: "Transform Your Field Operations with AI-Driven Technology",
      tagline: "Boost efficiency by 30% and reduce costs by 20% with our innovative solutions"
    },
    {
      url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      title: "Mobile-First Field Service Management",
      tagline: "Empower your field teams with cutting-edge technology"
    },
    {
      url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      title: "Real-time Operations Management",
      tagline: "Access critical data and insights instantly, anywhere"
    }
  ];

  const features = [
    {
      icon: <LineChart className="w-12 h-12 text-[#1EAEDB]" />,
      title: "Integrated Real-time Field Data",
      description: "Centralized platform for real-time visibility and monitoring of operations"
    },
    {
      icon: <Smartphone className="w-12 h-12 text-[#1EAEDB]" />,
      title: "Mobile-First Approach",
      description: "Powerful tools at your field agents' fingertips"
    },
    {
      icon: <Zap className="w-12 h-12 text-[#1EAEDB]" />,
      title: "AI-Powered Scheduling",
      description: "Optimize technician schedules and routes with advanced algorithms"
    },
    {
      icon: <Wifi className="w-12 h-12 text-[#1EAEDB]" />,
      title: "Seamless Mobile Operations",
      description: "Offline-capable mobile application for uninterrupted work"
    },
    {
      icon: <Phone className="w-12 h-12 text-[#1EAEDB]" />,
      title: "Real-Time Data Access",
      description: "Essential information and invoicing at your fingertips"
    },
    {
      icon: <FileText className="w-12 h-12 text-[#1EAEDB]" />,
      title: "Intelligent Reporting",
      description: "Over 1,000 reporting templates for comprehensive insights"
    }
  ];

  const domains = [
    {
      icon: <Library className="w-12 h-12 text-white" />,
      title: "Dairy Sector",
      features: [
        "Farm Extension Operations",
        "Cattle Nutrition Operations",
        "Procurement Operations",
        "Inventory Management"
      ]
    },
    {
      icon: <Building2 className="w-12 h-12 text-white" />,
      title: "Finance Domain",
      features: [
        "Field Ops Digitization",
        "Loan Origination & Monitoring",
        "Real-time Performance Tracking",
        "Digital Documentation"
      ]
    },
    {
      icon: <Shield className="w-12 h-12 text-white" />,
      title: "Insurance Sector",
      features: [
        "Field Agent Operations",
        "Customer & Policy Management",
        "Claims Processing",
        "Risk Assessment"
      ]
    },
    {
      icon: <Tractor className="w-12 h-12 text-white" />,
      title: "AgriBusiness",
      features: [
        "Farm Extension Operations",
        "Farm Input Adoption",
        "Procurement Operations",
        "Mobile Inventory Management"
      ]
    }
  ];

  const results = [
    {
      stat: "30%",
      title: "Efficiency Boost",
      description: "Increase in operational efficiency through AI-driven optimization"
    },
    {
      stat: "20%",
      title: "Cost Reduction",
      description: "Reduction in operational costs through smart resource allocation"
    },
    {
      stat: "<5%",
      title: "Protocol Variance",
      description: "Reduced protocol deviations through targeted training"
    },
    {
      stat: "1000+",
      title: "Report Templates",
      description: "Comprehensive reporting solutions for all your needs"
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
            Key Features of Our Field Operations Platform
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

      {/* Domain Coverage Section */}
      <section className="py-16 bg-gradient-to-br from-[#1EAEDB] to-[#0FA0CE] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Comprehensive Coverage Across Domains
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {domains.map((domain, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg p-8 rounded-lg">
                <div className="mb-4">{domain.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{domain.title}</h3>
                <ul className="space-y-2">
                  {domain.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Leaf className="w-4 h-4" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Proven Results
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#1EAEDB] mb-2">
                  {result.stat}
                </div>
                <h3 className="text-xl font-semibold mb-2">{result.title}</h3>
                <p className="text-gray-600">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 bg-[#F6F6F7]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Approach
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Industry Standard Data Model</h3>
              <p className="text-gray-600">
                Implemented best practices for partial-use inventory management with proven industry standards.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Localized UI</h3>
              <p className="text-gray-600">
                User-friendly, localization-enabled interface designed for efficient usage with minimal training.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Offline Capabilities</h3>
              <p className="text-gray-600">
                Smooth operation in offline mode, perfect for remote areas with limited connectivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#1EAEDB] to-[#0FA0CE] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Field Operations?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover how our AI-driven Field Service Management Technology can transform your operations, drive efficiency, and deliver exceptional service quality.
          </p>
          <Button 
            onClick={() => navigate("/contact")}
            className="bg-white text-[#1EAEDB] hover:bg-gray-100 px-8 py-6 text-lg"
          >
            Schedule a Demo Today <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default MobileFirst;
