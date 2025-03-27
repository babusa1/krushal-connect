import React from "react";
import Navigation from "@/components/Navigation";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Cloud, Code, ShieldCheck, Database, Server } from "lucide-react";

const ExploreCloudServices = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <PageBreadcrumb 
        items={[
          { label: "What We Do", path: "/about" },
          { label: "Cloud & DevOps", path: "/cloud-and-devops" },
          { label: "Explore Cloud Services" }
        ]}
      />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Explore Our Cloud and DevOps Services
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Accelerate your digital transformation with our comprehensive cloud solutions.
          </p>
          <Button onClick={() => navigate("/contact")} className="bg-[#673AB7] text-white hover:bg-[#512DA8] px-8 py-3 rounded-md">
            Get Started
          </Button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cloud Migration */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <Cloud className="w-10 h-10 text-[#673AB7] mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Cloud Migration</h3>
              <p className="text-gray-600">
                Seamlessly migrate your applications and data to the cloud with minimal disruption.
              </p>
            </div>

            {/* DevOps Automation */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <Code className="w-10 h-10 text-[#673AB7] mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">DevOps Automation</h3>
              <p className="text-gray-600">
                Automate your software delivery pipeline for faster releases and improved quality.
              </p>
            </div>

            {/* Cloud Security */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <ShieldCheck className="w-10 h-10 text-[#673AB7] mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Cloud Security</h3>
              <p className="text-gray-600">
                Protect your cloud environment with our robust security solutions and best practices.
              </p>
            </div>

            {/* Data Management */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <Database className="w-10 h-10 text-[#673AB7] mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Data Management</h3>
              <p className="text-gray-600">
                Efficiently manage and optimize your data in the cloud for better insights and performance.
              </p>
            </div>

            {/* Serverless Architecture */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <Server className="w-10 h-10 text-[#673AB7] mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Serverless Architecture</h3>
              <p className="text-gray-600">
                Build and deploy applications without managing servers, reducing costs and complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#673AB7] to-[#9b87f5] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business with Cloud and DevOps?
          </h2>
          <p className="text-lg mb-8">
            Contact us today to learn more about our services and how we can help you achieve your business goals.
          </p>
          <Button onClick={() => navigate("/contact")} className="bg-white text-[#673AB7] hover:bg-gray-100 px-8 py-3 rounded-md">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ExploreCloudServices;
