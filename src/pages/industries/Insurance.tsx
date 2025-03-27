
import React from "react";
import Navigation from "@/components/Navigation";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { Button } from "@/components/ui/button";
import { 
  CreditCard, 
  FileText, 
  ShieldCheck, 
  AlertTriangle, 
  PieChart, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Insurance = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <PageBreadcrumb 
        items={[
          { label: "Industries", path: "/" },
          { label: "Insurance" }
        ]}
      />
      
      <div className="container mx-auto px-4 pt-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#673AB7] mb-12 font-baloo">
          Insurance Industry Solutions
        </h1>
        <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-20">
          Explore our innovative solutions for the insurance sector, designed to streamline operations and enhance customer experiences.
        </p>
      </div>

      {/* Key Challenges Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#673AB7] mb-16">
            Key Challenges in Rural Insurance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <AlertTriangle className="h-12 w-12 text-[#FF5722] mb-6" />
              <h3 className="text-xl font-semibold mb-4">Limited Access</h3>
              <p className="text-gray-600">
                Rural communities often have limited access to insurance services due to geographical challenges and infrastructure gaps.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <FileText className="h-12 w-12 text-[#673AB7] mb-6" />
              <h3 className="text-xl font-semibold mb-4">Complex Paperwork</h3>
              <p className="text-gray-600">
                Traditional insurance processes involve complicated paperwork that can be difficult for rural customers to complete.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <PieChart className="h-12 w-12 text-[#FF5722] mb-6" />
              <h3 className="text-xl font-semibold mb-4">Risk Assessment</h3>
              <p className="text-gray-600">
                Accurate risk assessment is challenging in rural areas due to limited data and unique environmental factors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#673AB7] mb-16">
            Our AI-Powered Insurance Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col items-start">
              <ShieldCheck className="h-16 w-16 text-[#673AB7] mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Field Agent Operations</h3>
              <p className="text-gray-700 mb-6">
                Our mobile-first platform empowers field agents with digital tools to efficiently onboard new customers, process claims, and provide better service in remote areas.
              </p>
              <ul className="space-y-3">
                {["Digital KYC", "Offline capability", "GPS-enabled verification", "Real-time reporting"].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-[#4CAF50] mr-2 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-start">
              <CreditCard className="h-16 w-16 text-[#FF5722] mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Product Recommendation Engine</h3>
              <p className="text-gray-700 mb-6">
                AI-driven analytics to match customers with the most suitable insurance products based on their profile, needs, and risk factors.
              </p>
              <ul className="space-y-3">
                {["Personalized offerings", "Risk-based pricing", "Cross-sell opportunities", "Coverage optimization"].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-[#4CAF50] mr-2 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 bg-[#EDE7F6]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#673AB7] mb-12">
            Success Story
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Rural Microinsurance Initiative</h3>
            <p className="text-gray-700 mb-6">
              We partnered with a leading agricultural insurance provider to develop a mobile-first platform that simplified policy enrollment and claims processing for small farmers.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-[#673AB7]">85%</p>
                <p className="text-gray-600">Reduction in claim processing time</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-[#673AB7]">3x</p>
                <p className="text-gray-600">Increase in rural policy adoption</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-[#673AB7]">40%</p>
                <p className="text-gray-600">Lower operational costs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#673AB7] to-[#9b87f5] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Ready to transform your insurance operations?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Let's discuss how our solutions can help you expand your reach in rural markets while improving operational efficiency.
          </p>
          <Button 
            onClick={() => navigate("/contact")}
            className="bg-white text-[#673AB7] hover:bg-[#E5DEFF] px-8 py-6 text-lg font-medium flex items-center gap-2 mx-auto"
          >
            Contact Us <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Insurance;
