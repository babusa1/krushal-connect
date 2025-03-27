import React from "react";
import Navigation from "@/components/Navigation";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CloudAndDevOps = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <PageBreadcrumb 
        items={[
          { label: "What We Do", path: "/about" },
          { label: "Cloud & DevOps" }
        ]}
      />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47a04ca0ecd8"
            alt="Cloud & DevOps"
            className="w-full h-[400px] object-cover"
          />
        </div>
        <div className="container mx-auto px-4 py-24 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cloud & DevOps Solutions
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Accelerate your digital transformation with our expert cloud and DevOps services
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#673AB7]">
                Our Cloud & DevOps Services
              </h2>
              <p className="text-gray-600 mb-4">
                We offer a comprehensive suite of cloud and DevOps services to help you streamline your operations, reduce costs, and improve agility.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Cloud Migration</li>
                <li>Infrastructure Automation</li>
                <li>Continuous Integration & Continuous Delivery (CI/CD)</li>
                <li>Monitoring & Support</li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1542903660-7d611b5aeffe"
                alt="Cloud Services"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-[#F6F6F7]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#673AB7]">
            Key Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#673AB7] mb-2">
                Scalability
              </div>
              <p className="text-gray-600">
                Easily scale your resources up or down based on demand.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#673AB7] mb-2">
                Cost Reduction
              </div>
              <p className="text-gray-600">
                Optimize your IT spending with our cost-effective solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#673AB7] mb-2">
                Improved Agility
              </div>
              <p className="text-gray-600">
                Accelerate your time to market with automated processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#673AB7] to-[#9b87f5] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us to learn more about how our Cloud & DevOps services can benefit your business.
          </p>
          <Button 
            onClick={() => navigate("/contact")}
            className="bg-white text-[#673AB7] hover:bg-gray-100 px-8 py-6 text-lg"
          >
            Contact Us Today <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CloudAndDevOps;
