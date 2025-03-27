import React from "react";
import Navigation from "@/components/Navigation";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import LeadershipSection from "@/components/about/LeadershipSection";

const Leadership = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <PageBreadcrumb 
        items={[
          { label: "About", path: "/about" },
          { label: "Leadership" }
        ]}
      />
      
      <LeadershipSection />
    </div>
  );
};

export default Leadership;
