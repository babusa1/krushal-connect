
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import HeroCarousel from "@/components/hero/HeroCarousel";
import { ArrowRight, Smartphone, LineChart, Users, Zap, 
         Library, Phone, Wifi, FileText, BarChart3, 
         Leaf, Building2, Shield, Tractor } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const FieldOperations = () => {
  const navigate = useNavigate();

  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      title: "Field Operations with Our AI-Driven Technology",
      tagline: "Boost efficiency by 30% and reduce costs by 20% with our innovative solutions"
    },
    {
      url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      title: "AI-Powered Field Service Management",
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
      icon: <LineChart className="w-12 h-12 text-[#8B5CF6]" />,
      title: "Integrated Real-time Field Data",
      description: "Centralized platform for real-time visibility and monitoring of operations"
    },
    {
      icon: <Smartphone className="w-12 h-12 text-[#8B5CF6]" />,
      title: "Mobile-First Approach",
      description: "Powerful tools at your field agents' fingertips"
    },
    {
      icon: <Zap className="w-12 h-12 text-[#8B5CF6]" />,
      title: "AI-Powered Scheduling",
      description: "Optimize technician schedules and routes with advanced algorithms"
    },
    {
      icon: <Wifi className="w-12 h-12 text-[#8B5CF6]" />,
      title: "Seamless Mobile Operations",
      description: "Offline-capable mobile application for uninterrupted work"
    },
    {
      icon: <Phone className="w-12 h-12 text-[#8B5CF6]" />,
      title: "Real-Time Data Access",
      description: "Essential information and invoicing at your fingertips"
    },
    {
      icon: <FileText className="w-12 h-12 text-[#8B5CF6]" />,
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
      description: "Increased field productivity through streamlined operations"
    },
    {
      stat: "25%",
      title: "Success Rate Increase",
      description: "Enhanced on-ground activities with actionable insights"
    },
    {
      stat: "20%",
      title: "Cost Reduction",
      description: "Reduced operational costs through optimized resourcing"
    },
    {
      stat: "100%",
      title: "Offline Capability",
      description: "Uninterrupted functionality even in remote areas"
    }
  ];

  const approaches = [
    {
      title: "Real-Time Data Collection",
      description: "Captures field activity data in real-time, with seamless offline mobile integration for uninterrupted operations"
    },
    {
      title: "Centralized Monitoring",
      description: "Comprehensive dashboards and detailed reports for complete operational visibility"
    },
    {
      title: "Task Management",
      description: "Smart scheduling, progress tracking, and resource optimization for maximum efficiency"
    },
    {
      title: "Communication Hub",
      description: "Facilitates seamless interactions between field teams and management"
    },
    {
      title: "Advanced Analytics",
      description: "Actionable insights and predictive analytics for informed decision-making"
    },
    {
      title: "Compliance & Geolocation",
      description: "Regulatory compliance monitoring with geospatial analysis capabilities"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <PageBreadcrumb 
        items={[
          { label: "Products", path: "/products/field-operations" },
          { label: "Field Operations" }
        ]}
      />
      
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
      <section className="py-16 bg-gradient-to-br from-[#9b87f5] to-[#8B5CF6] text-white">
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

      {/* Approach Section */}
      <section className="py-16 bg-[#F6F6F7]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Technology Approach
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approaches.map((approach, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-semibold mb-4 text-[#8B5CF6]">{approach.title}</h3>
                <p className="text-gray-600">{approach.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Built on a microservices platform using an open-source stack, our solution delivers both online and offline functionality for uninterrupted field operations.
            </p>
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
                <div className="text-4xl font-bold text-[#8B5CF6] mb-2">
                  {result.stat}
                </div>
                <h3 className="text-xl font-semibold mb-2">{result.title}</h3>
                <p className="text-gray-600">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#9b87f5] to-[#8B5CF6] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Field Operations?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover how our AI-driven Field Service Management Technology can transform your operations, drive efficiency, and deliver exceptional service quality.
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

export default FieldOperations;
