import React from "react";
import Navigation from "@/components/Navigation";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, CheckCircle, Lightbulb, ShieldCheck, TrendingUp } from "lucide-react";
import HeroCarousel from "@/components/hero/HeroCarousel";
import { useNavigate } from "react-router-dom";

const PersonalizedInsights = () => {
  const navigate = useNavigate();

  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1576766416498-ca27479111c4",
      title: "Data-Driven Personalized Insights",
      tagline: "Unlock the power of data for informed decision-making"
    },
    {
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      title: "Actionable Insights",
      tagline: "Transform data into strategic advantages"
    },
    {
      url: "https://images.unsplash.com/photo-1587620962725-abab7fe93c57",
      title: "Predictive Analytics",
      tagline: "Forecast trends and optimize your business strategies"
    }
  ];

  const features = [
    {
      icon: <TrendingUp className="w-8 h-8 text-[#8B5CF6]" />,
      title: "Predictive Analytics",
      description: "Forecast future trends and make proactive decisions"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-[#8B5CF6]" />,
      title: "Customized Dashboards",
      description: "Visualize key metrics with tailored dashboards"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[#8B5CF6]" />,
      title: "Real-Time Reporting",
      description: "Access up-to-the-minute data for immediate insights"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#8B5CF6]" />,
      title: "Data Security",
      description: "Ensure the highest standards of data protection"
    }
  ];

  const benefits = [
    "Improved Decision-Making",
    "Enhanced Operational Efficiency",
    "Increased Revenue",
    "Better Customer Engagement"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <PageBreadcrumb 
        items={[
          { label: "Products & Solutions", path: "/products" },
          { label: "Personalized Insights" }
        ]}
      />
      
      <HeroCarousel 
        images={carouselImages}
        buttonConfig={{
          text: "Request a Demo",
          onClick: () => navigate("/contact")
        }}
      />

      {/* Key Features Section */}
      <section className="py-16 bg-[#F6F6F7]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Benefits of Personalized Insights
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-[#8B5CF6] mr-2" />
                <p className="text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#9b87f5] to-[#8B5CF6] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business with Personalized Insights?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us to learn more about how our data-driven solutions can drive your business forward.
          </p>
          <Button 
            onClick={() => navigate("/contact")}
            className="bg-white text-[#8B5CF6] hover:bg-gray-100 px-8 py-6 text-lg"
          >
            Request a Consultation <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PersonalizedInsights;
