
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { ArrowRight, Tractor, Building2, LineChart, BookOpen, PiggyBank, GraduationCap, Heart, Stethoscope, Brain, Phone, ChartPie, Users, Truck, BarChart3, Leaf, Timer, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ExploreFirstMileServices = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Field Services",
      description: "Comprehensive farm and animal care management",
      icon: Tractor,
      items: [
        {
          subtitle: "Farm Care Plan",
          points: [
            "Farm, Herd & Manure Management",
            "Health Advisory Services",
            "Nutrition Advisory Programs"
          ]
        },
        {
          subtitle: "Animal Care Plan",
          points: [
            "Preventive Care Solutions",
            "Reproductive Care Programs",
            "Diagnostics & Curative Care",
            "Medicines & Consumables Supply"
          ]
        }
      ]
    },
    {
      title: "Central Services",
      description: "AI-powered veterinary and farmer support",
      icon: Building2,
      items: [
        {
          subtitle: "Central Vet Assist",
          points: [
            "Rules-based Diagnosis Systems",
            "Treatment & Prescriptions",
            "Field Service Quality Management"
          ]
        },
        {
          subtitle: "Central Farmer Assist",
          points: [
            "24/7 Farmer Helpline",
            "Personalized Smart Ration",
            "Cattle Loans & Insurance"
          ]
        }
      ]
    },
    {
      title: "System & Insights",
      description: "Data-driven operations and analytics",
      icon: LineChart,
      items: [
        {
          subtitle: "Field Operations",
          points: [
            "Logistics & Staff Management"
          ]
        },
        {
          subtitle: "Farm & Milk Insights",
          points: [
            "Farm & Milk Data Analysis",
            "Targeted Farm Actions",
            "GHG Tracking & Credits"
          ]
        },
        {
          subtitle: "Animal Care Technology",
          points: [
            "Animal & Farm Records",
            "Vet Service Automation",
            "Antibiotics Risk Alerts"
          ]
        }
      ]
    }
  ];

  const caseStudies = [
    {
      region: "Maharashtra",
      challenge: "High healthcare costs for farmers",
      solution: "Implemented animal care plans through vet/paravet ecosystem focusing on preventive care and nutrition",
      outcome: "Reduced animal illness and healthcare costs",
      icon: Heart
    },
    {
      region: "Tamil Nadu",
      challenge: "Dairy struggling with farmer loyalty and milk quantity",
      solution: "Deployed on-field team with farmer helpline for veterinary and advisory services",
      outcome: "Improved practices adoption and higher milk yield",
      icon: Users
    },
    {
      region: "Andhra Pradesh",
      challenge: "Dairy facing milk quality issues",
      solution: "On-field team implementation of nutrition best practices",
      outcome: "Enhanced milk quality standards",
      icon: ChartPie
    },
    {
      region: "Bihar",
      challenge: "Lack of veterinary support for paravet network",
      solution: "Centralized veterinarian service with standard protocols and inventory management",
      outcome: "Improved field staff training and prescription management",
      icon: Stethoscope
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with Background Image */}
      <section className="relative pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b"
            alt="First Mile Solutions"
            className="w-full h-[500px] object-cover"
          />
        </div>
        <div className="container mx-auto px-4 py-24 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
              First Mile Solutions & Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-12 animate-fadeIn">
              Driving Excellence through Closed-Loop Partnerships with Dairies & AgriBusiness
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-[#1EAEDB] transition-all">
                <service.icon className="w-12 h-12 text-[#1EAEDB] mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                {service.items.map((item, idx) => (
                  <div key={idx} className="mb-6">
                    <h4 className="font-semibold text-[#1EAEDB] mb-3">{item.subtitle}</h4>
                    <ul className="space-y-2">
                      {item.points.map((point, pointIdx) => (
                        <li key={pointIdx} className="flex items-start space-x-2 text-gray-600">
                          <ArrowRight className="w-4 h-4 mt-1 text-[#1EAEDB]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-[#F8F7FF]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <study.icon className="w-12 h-12 text-[#1EAEDB] mb-4" />
                <div className="inline-block px-3 py-1 rounded-full bg-[#E5F7FB] text-[#1EAEDB] text-sm font-medium mb-4">
                  {study.region}
                </div>
                <h3 className="font-semibold mb-3 text-gray-900">Challenge:</h3>
                <p className="text-gray-600 mb-4">{study.challenge}</p>
                <h3 className="font-semibold mb-3 text-gray-900">Solution:</h3>
                <p className="text-gray-600 mb-4">{study.solution}</p>
                <h3 className="font-semibold mb-3 text-gray-900">Outcome:</h3>
                <p className="text-gray-600">{study.outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#1EAEDB] to-[#33C3F0] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Operations?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us to learn how our first mile solutions can optimize your dairy and agribusiness operations
          </p>
          <Button 
            onClick={() => navigate("/contact")}
            className="bg-white text-[#1EAEDB] hover:bg-[#E5F7FB] px-8 py-6 rounded-full text-lg font-medium"
          >
            Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ExploreFirstMileServices;
