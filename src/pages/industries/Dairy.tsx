
import React from "react";
import Navigation from "@/components/Navigation";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Briefcase,
  CheckCircle2,
  ClipboardList,
  GaugeCircle,
  LayoutDashboard,
  LucideIcon,
  PiggyBank,
  TrendingUp,
  Truck,
  Users2,
} from "lucide-react";

interface FeatureItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center justify-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
    <Icon className="w-10 h-10 text-[#8B5CF6] mb-4" />
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

const Dairy = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: LayoutDashboard,
      title: "Real-Time Monitoring",
      description: "Track milk production and quality in real-time."
    },
    {
      icon: Truck,
      title: "Efficient Logistics",
      description: "Optimize milk collection and distribution routes."
    },
    {
      icon: ClipboardList,
      title: "Quality Assurance",
      description: "Ensure milk quality with automated testing and compliance."
    },
    {
      icon: Users2,
      title: "Farmer Management",
      description: "Manage farmer relationships and payments efficiently."
    },
    {
      icon: Briefcase,
      title: "Inventory Management",
      description: "Keep track of dairy products and supplies."
    },
    {
      icon: PiggyBank,
      title: "Financial Tools",
      description: "Access financial tools for better farm management."
    }
  ];

  const benefits = [
    {
      icon: CheckCircle2,
      title: "Improved Efficiency",
      description: "Streamline dairy operations for maximum productivity."
    },
    {
      icon: TrendingUp,
      title: "Increased Profitability",
      description: "Boost revenue with data-driven insights."
    },
    {
      icon: GaugeCircle,
      title: "Enhanced Quality",
      description: "Ensure high-quality milk production."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <PageBreadcrumb 
        items={[
          { label: "Industries" },
          { label: "Dairy" }
        ]}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="md:order-2">
              <img
                src="https://images.unsplash.com/photo-1608686264069-ccf367c46475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Dairy Farm"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:order-1">
              <h1 className="text-4xl font-bold text-gray-800 mb-6">
                Transforming Dairy Farming with Technology
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Empowering dairy farmers with innovative solutions for efficient
                and sustainable milk production.
              </p>
              <Button
                onClick={() => navigate("/contact")}
                className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-bold py-3 px-6 rounded-full"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureItem key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <FeatureItem key={index} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-[#F3E5F5]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Ready to Revolutionize Your Dairy Farm?
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Contact us today to learn more about how our technology can
            transform your dairy operations.
          </p>
          <Button
            onClick={() => navigate("/contact")}
            className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-bold py-4 px-8 rounded-full text-xl"
          >
            Get Started
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Dairy;
