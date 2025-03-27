
import React from "react";
import Navigation from "@/components/Navigation";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { FileText, Lightbulb, TrendingUp, Landmark, Shield } from "lucide-react";
import CaseStudyCard from "@/components/first-mile/CaseStudyCard";
import SuccessStoryCard from "@/components/ai-insights/SuccessStoryCard";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CaseStudies = () => {
  const navigate = useNavigate();

  const firstMileCaseStudies = [
    {
      region: "Punjab",
      challenge: "A dairy cooperative struggled with inefficient milk collection and quality tracking across remote villages.",
      solution: "Implemented a mobile-first digital platform for field agents to capture data, monitor quality, and streamline payments.",
      outcome: "Reduced collection time by 40%, improved quality parameters by 25%, and increased farmer satisfaction by 60%.",
      icon: TrendingUp
    },
    {
      region: "Maharashtra",
      challenge: "Small farmers faced difficulties accessing financial services and insurance due to limited documentation and rural location.",
      solution: "Deployed a digital KYC solution with offline capabilities and integration with local financial institutions.",
      outcome: "Enabled 10,000+ farmers to access formal banking services, with loan processing time reduced from weeks to days.",
      icon: Landmark
    },
    {
      region: "Karnataka",
      challenge: "Rural insurance company struggled with high operational costs and fraud in claim verification process.",
      solution: "Introduced AI-powered verification tools with GPS tagging and digital documentation for field agents.",
      outcome: "85% reduction in processing time, 30% decrease in fraudulent claims, and 40% lower operational costs.",
      icon: Shield
    }
  ];

  const aiInsightsCaseStudies = [
    {
      client: "National Agricultural Cooperative",
      industry: "Agriculture",
      challenge: "Needed to predict crop yields and optimize resource allocation across diverse geographical regions.",
      solution: "Implemented AI-driven analytics platform to analyze soil, weather, and historical data for predictive insights.",
      outcome: "Improved yield forecasting accuracy by 32% and optimized resource distribution, resulting in 18% cost reduction.",
      icon: Lightbulb
    },
    {
      client: "Rural Microfinance Network",
      industry: "Finance",
      challenge: "Struggled with credit risk assessment for borrowers without formal credit history.",
      solution: "Developed an alternative credit scoring system using AI to analyze transaction patterns and payment behaviors.",
      outcome: "Reduced default rates by 25% while expanding financial inclusion to 35,000 previously unserved rural customers.",
      icon: FileText
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <PageBreadcrumb 
        items={[
          { label: "Case Studies" }
        ]}
      />
      
      <div className="container mx-auto px-4 pt-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#673AB7] mb-12 font-baloo">
          Case Studies
        </h1>
        <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-16">
          Explore our success stories and see how we've helped businesses transform their operations 
          across various industries. Our solutions address real challenges and deliver measurable results.
        </p>
      </div>

      {/* First Mile Solutions Case Studies */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1EAEDB] mb-12">First Mile Digital Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {firstMileCaseStudies.map((study, index) => (
              <CaseStudyCard
                key={index}
                {...study}
              />
            ))}
          </div>
        </div>
      </section>

      {/* AI Insights Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#673AB7] mb-12">AI-Powered Insights</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {aiInsightsCaseStudies.map((study, index) => (
              <SuccessStoryCard
                key={index}
                {...study}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study Section */}
      <section className="py-16 bg-[#EDE7F6]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#673AB7] mb-12">
            Featured Case Study
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Transforming Insurance Operations in Rural India</h3>
            <p className="text-gray-700 mb-6">
              A leading agricultural insurance provider partnered with us to develop a mobile-first platform that simplified policy enrollment 
              and claims processing for small farmers across 500 villages in rural India.
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
            <Button 
              onClick={() => navigate("/industries/insurance")}
              className="bg-[#673AB7] hover:bg-[#5d33a7] text-white"
            >
              Learn More About Our Insurance Solutions
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#1EAEDB] to-[#82d7f7] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Ready to transform your operations?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Let's discuss how our solutions can address your unique challenges and drive measurable results.
          </p>
          <Button 
            onClick={() => navigate("/contact")}
            className="bg-white text-[#1EAEDB] hover:bg-[#E5F7FB] px-8 py-6 text-lg font-medium"
          >
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
