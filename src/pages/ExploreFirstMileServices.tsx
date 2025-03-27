
import React from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/first-mile/HeroSection";
import ServicesSection from "@/components/first-mile/ServicesSection";
import CaseStudiesSection from "@/components/first-mile/CaseStudiesSection";
import InsightsSection from "@/components/first-mile/InsightsSection";
import CTASection from "@/components/first-mile/CTASection";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const ExploreFirstMileServices = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <PageBreadcrumb 
        items={[
          { label: "First Mile Solutions", path: "/first-mile-solutions" },
          { label: "Explore Services" }
        ]}
      />
      
      <div className="container mx-auto px-4 pt-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#673AB7] mb-12 font-baloo">
          First Mile Services
        </h1>
      </div>
      <HeroSection />
      <ServicesSection />
      <CaseStudiesSection />
      <InsightsSection />
      <CTASection />
    </div>
  );
};

export default ExploreFirstMileServices;
