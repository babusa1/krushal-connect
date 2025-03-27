
import React from "react";
import Navigation from "@/components/Navigation";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  Leaf, 
  Droplet, 
  BarChart2, 
  Truck, 
  CheckCircle2, 
  ArrowRight,
  CloudRain,
  LineChart,
  Smartphone
} from "lucide-react";

const Agritech = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <PageBreadcrumb 
        items={[
          { label: "Industries", path: "/" },
          { label: "Agritech" }
        ]}
      />
      
      <div className="container mx-auto px-4 pt-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#673AB7] mb-12 font-baloo">
          Agritech Solutions
        </h1>
        <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-20">
          Transforming agriculture with data-driven farming solutions that enhance productivity, sustainability, and profitability.
        </p>
      </div>

      {/* Hero Section with Image */}
      <section className="mb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#673AB7] mb-6">
                Empowering Farmers with Modern Technology
              </h2>
              <p className="text-gray-700 mb-6">
                Our agritech solutions combine IoT, AI, and mobile technology to provide farmers with actionable insights and tools that optimize crop yields, reduce waste, and increase profitability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => navigate("/contact")}
                  className="bg-[#673AB7] hover:bg-[#5E35B1] text-white"
                >
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  onClick={() => navigate("/case-studies")}
                  className="border-[#673AB7] text-[#673AB7] hover:bg-[#EDE7F6]"
                >
                  View Case Studies
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027" 
                alt="Smart farming technology" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#673AB7] mb-16">
            Our Agritech Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Leaf className="w-12 h-12 text-[#4CAF50] mb-6" />
              <h3 className="text-xl font-semibold mb-4">Precision Farming</h3>
              <p className="text-gray-600">
                Data-driven insights for optimized crop management, soil analysis, and resource allocation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Droplet className="w-12 h-12 text-[#2196F3] mb-6" />
              <h3 className="text-xl font-semibold mb-4">Smart Irrigation</h3>
              <p className="text-gray-600">
                Automated water management systems that optimize usage based on real-time soil and weather conditions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <BarChart2 className="w-12 h-12 text-[#673AB7] mb-6" />
              <h3 className="text-xl font-semibold mb-4">Pest Management</h3>
              <p className="text-gray-600">
                AI-powered monitoring and early detection systems to minimize crop damage and reduce pesticide use.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Truck className="w-12 h-12 text-[#FF5722] mb-6" />
              <h3 className="text-xl font-semibold mb-4">Supply Chain</h3>
              <p className="text-gray-600">
                Blockchain-based tracking and logistics optimization for enhanced transparency and efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#673AB7] mb-8">
                Key Features & Benefits
              </h2>
              <ul className="space-y-4">
                {[
                  "IoT sensors for real-time environmental monitoring",
                  "AI-powered crop disease detection and prevention",
                  "Mobile-first apps designed for rural use with offline capabilities",
                  "Predictive analytics for yield forecasting and planning",
                  "Integration with weather data for smart decision-making",
                  "Farmer community platforms for knowledge sharing"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#4CAF50] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#F1F8E9] p-6 rounded-lg">
                <CloudRain className="w-10 h-10 text-[#4CAF50] mb-4" />
                <h3 className="font-semibold text-lg mb-2">Weather Integration</h3>
                <p className="text-gray-700">Hyper-local weather forecasting for better planning</p>
              </div>
              <div className="bg-[#E8F5E9] p-6 rounded-lg">
                <LineChart className="w-10 h-10 text-[#4CAF50] mb-4" />
                <h3 className="font-semibold text-lg mb-2">Yield Analytics</h3>
                <p className="text-gray-700">Data-driven insights for improved productivity</p>
              </div>
              <div className="bg-[#E0F2F1] p-6 rounded-lg">
                <Smartphone className="w-10 h-10 text-[#4CAF50] mb-4" />
                <h3 className="font-semibold text-lg mb-2">Mobile Access</h3>
                <p className="text-gray-700">Farm management from anywhere, anytime</p>
              </div>
              <div className="bg-[#F9FBE7] p-6 rounded-lg">
                <BarChart2 className="w-10 h-10 text-[#4CAF50] mb-4" />
                <h3 className="font-semibold text-lg mb-2">Resource Optimization</h3>
                <p className="text-gray-700">Reduce waste and maximize efficiency</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#4CAF50] to-[#8BC34A] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Ready to Transform Your Agricultural Operations?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join thousands of farmers who are already benefiting from our innovative agritech solutions.
          </p>
          <Button 
            onClick={() => navigate("/contact")}
            className="bg-white text-[#4CAF50] hover:bg-[#F1F8E9] px-8 py-6 text-lg font-medium flex items-center gap-2 mx-auto"
          >
            Schedule a Demo <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Agritech;
