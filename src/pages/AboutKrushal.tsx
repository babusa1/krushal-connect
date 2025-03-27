import React from "react";
import Navigation from "@/components/Navigation";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AboutKrushal = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <PageBreadcrumb 
        items={[
          { label: "About", path: "/about" },
          { label: "About Krushal" }
        ]}
      />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47a04ca0ecc7"
            alt="About Krushal"
            className="w-full h-[400px] object-cover"
          />
        </div>
        <div className="container mx-auto px-4 py-24 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About Krushal.AI
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Learn about our mission, vision, and the values that drive us
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-[#673AB7] mb-4">Our Mission</h2>
              <p className="text-gray-700 text-lg">
                To empower rural communities and transform industries through innovative AI-driven solutions.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#673AB7] mb-4">Our Vision</h2>
              <p className="text-gray-700 text-lg">
                To be the leading provider of AI solutions for rural development, creating sustainable impact and improving lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-[#F6F6F7]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#673AB7] mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Value Card 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold text-[#673AB7] mb-2">Innovation</h3>
              <p className="text-gray-600">We embrace creativity and continuously seek new ways to solve complex challenges.</p>
            </div>
            {/* Value Card 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold text-[#673AB7] mb-2">Impact</h3>
              <p className="text-gray-600">We are committed to making a positive and lasting difference in the communities we serve.</p>
            </div>
            {/* Value Card 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold text-[#673AB7] mb-2">Integrity</h3>
              <p className="text-gray-600">We operate with the highest ethical standards, ensuring transparency and trust in all our interactions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#673AB7] mb-12">Meet Our Team</h2>
          <p className="text-gray-700 text-lg text-center mb-8">
            We are a team of passionate individuals dedicated to driving innovation and creating meaningful impact.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member Card 1 */}
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-[#673AB7] mb-2">John Doe</h3>
              <p className="text-gray-600">CEO</p>
            </div>
            {/* Team Member Card 2 */}
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-[#673AB7] mb-2">Jane Smith</h3>
              <p className="text-gray-600">CTO</p>
            </div>
            {/* Team Member Card 3 */}
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b2933e"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-[#673AB7] mb-2">Emily White</h3>
              <p className="text-gray-600">COO</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#673AB7] to-[#9b87f5] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Learn More?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us to discover how Krushal.AI can transform your business and empower your community.
          </p>
          <Button 
            onClick={() => navigate("/contact")}
            className="bg-white text-[#673AB7] hover:bg-gray-100 px-8 py-6 text-lg"
          >
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutKrushal;
