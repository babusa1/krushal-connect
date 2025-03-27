import React from "react";
import Navigation from "@/components/Navigation";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import AboutUsSection from "@/components/about/AboutUsSection";
import OurValuesSection from "@/components/about/OurValuesSection";
import OurTeamSection from "@/components/about/OurTeamSection";
import ContactUsSection from "@/components/about/ContactUsSection";

const WhatWeDo = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <PageBreadcrumb 
        items={[
          { label: "About Us" }
        ]}
      />
      
      <AboutUsSection />
      <OurValuesSection />
      <OurTeamSection />
      <ContactUsSection />
    </div>
  );
};

export default WhatWeDo;
