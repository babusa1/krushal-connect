
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
      
      <section className="relative py-20 mt-16">
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: `url("/lovable-uploads/9114eb0c-c8f9-4859-ac25-dfea74a21dbc.png")`,
            backgroundBlendMode: "overlay"
          }}>
          <div className="absolute inset-0 bg-gradient-to-r from-[#673AB7] to-[#8B5CF6] opacity-90"></div>
        </div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-baloo">Our Leadership</h1>
            <p className="text-xl leading-relaxed mb-8">
              Krushal is propelled by a leadership team deeply passionate about driving IT solutions innovation and Tech Solution Modernization and relentlessly committed to delivering transformative success for our clients across diverse industries.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <p className="text-white/90">
                Our leadership brings over 100+ years of combined experience in B2B, Agri, Dairy, Rural, and Healthcare sectors, with expertise in both business and technology roles, transforming the rural ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <LeadershipSection />
    </div>
  );
};

export default Leadership;
