import React from "react";
import Navigation from "@/components/Navigation";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const CaseStudies = () => {
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
        <p className="text-lg text-gray-700 text-center">
          Explore our success stories and see how we've helped businesses transform their operations.
        </p>
      </div>
    </div>
  );
};

export default CaseStudies;
