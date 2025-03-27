import React from "react";
import Navigation from "@/components/Navigation";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const Insurance = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <PageBreadcrumb 
        items={[
          { label: "Industries" },
          { label: "Insurance" }
        ]}
      />
      
      <div className="container mx-auto px-4 pt-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#673AB7] mb-12 font-baloo">
          Insurance Industry Solutions
        </h1>
        <p className="text-lg text-gray-700 text-center">
          Explore our innovative solutions for the insurance sector, designed to streamline operations and enhance customer experiences.
        </p>
      </div>
    </div>
  );
};

export default Insurance;
