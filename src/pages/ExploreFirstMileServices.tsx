
import React from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/first-mile/HeroSection";
import ServicesSection from "@/components/first-mile/ServicesSection";
import CaseStudiesSection from "@/components/first-mile/CaseStudiesSection";
import InsightsSection from "@/components/first-mile/InsightsSection";
import CTASection from "@/components/first-mile/CTASection";

const ExploreFirstMileServices = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <CaseStudiesSection />
      <InsightsSection />
      <CTASection />
    </div>
  );
};

export default ExploreFirstMileServices;
