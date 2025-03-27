import React from "react";
import Navigation from "@/components/Navigation";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const Careers = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <PageBreadcrumb 
        items={[
          { label: "Careers" }
        ]}
      />
      
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8">
          Join Our Team
        </h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          Explore exciting career opportunities at Krushal AI and help us transform rural industries with innovative technology solutions.
        </p>
        
        {/* Placeholder for Careers Content */}
        <div className="text-center">
          <p className="text-xl text-gray-700">
            Check back soon for updated job listings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Careers;
