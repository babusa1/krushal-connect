
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Brain, Cloud, Users, DollarSign, BarChart, Globe, Lightbulb } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WhatWeDo = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center py-20 mt-16">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-black/60 z-10"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
        
        <div className="container relative z-20 px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Krushal: Intelligent Technology for a Thriving Future
            </h1>
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 mt-8">
              <p className="text-lg md:text-xl text-gray-800 mb-4">
                We're building the <span className="font-semibold text-[#673AB7]">'AWS for Rural,'</span> empowering vital industries with intelligent technology.
              </p>
              <p className="text-gray-700">
                Krushal delivers transformative AI and Cloud solutions that drive over <span className="font-semibold text-[#673AB7]">60% early detection</span> of mastitis, signal farm-level antibiotic usage, and reduce milk procurement costs by <span className="font-semibold text-[#673AB7]">Rs. 0.36 per liter</span>.
              </p>
              <p className="text-[#673AB7] font-semibold italic mt-4">
                "Everyone in the industry needs this," - Dairy CEO
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Krushal Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-8 h-8 text-[#673AB7]" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                About Krushal: Impact-Driven Innovation
              </h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Krushal is a technology company specializing in modernizing essential industries like 
              <span className="font-semibold"> Dairy, FMCG, and Agritech</span>. We leverage 
              <span className="font-semibold"> Artificial Intelligence, Cloud Computing, and DevOps </span> 
              to deliver fit-for-purpose solutions that drive significant improvements in productivity, 
              quality, and market access.
            </p>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <Brain className="w-8 h-8 text-[#673AB7]" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Expertise: AI, Cloud, and Industry Depth
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Globe className="w-10 h-10 text-[#673AB7] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Deep Industry Knowledge</h3>
                <p className="text-gray-600">Understanding the unique challenges of each sector.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Brain className="w-10 h-10 text-[#673AB7] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Cutting-Edge AI & Data Insights</h3>
                <p className="text-gray-600">Actionable intelligence for strategic decisions.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Cloud className="w-10 h-10 text-[#673AB7] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Comprehensive Cloud & DevOps</h3>
                <p className="text-gray-600">Scalable and efficient technology infrastructure.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Users className="w-10 h-10 text-[#673AB7] mb-4" />
                <h3 className="text-xl font-semibold mb-2">User-Centric Design</h3>
                <p className="text-gray-600">Exceptional experiences powered by a robust tech framework.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <BarChart className="w-8 h-8 text-[#673AB7]" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Impact: Quantifiable Results for Our Clients
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                <DollarSign className="w-12 h-12 text-[#673AB7] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Reduce Costs</h3>
                <p className="text-gray-600">Streamline operations and optimize resource utilization.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                <BarChart className="w-12 h-12 text-[#673AB7] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Improve Productivity</h3>
                <p className="text-gray-600">Enhance efficiency and output across the value chain.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                <Globe className="w-12 h-12 text-[#673AB7] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Gain Market Access</h3>
                <p className="text-gray-600">Modernize processes to compete effectively.</p>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 text-center">
              In the past two years, Krushal solutions like <span className="font-semibold">Smart(Field)Ops</span>, 
              <span className="font-semibold"> SmartRation</span>, and <span className="font-semibold">SmartProjection</span> have 
              empowered thousands of end-users to achieve these results.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-[#673AB7] text-white">
        <div className="container px-4 mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <Lightbulb className="w-16 h-16 mx-auto mb-6 text-white/90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Modernize and Transform Your Business with Krushal?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today to discover how our intelligent technology solutions can drive impactful results for your organization.
            </p>
            <Button 
              className="bg-white text-[#673AB7] hover:bg-gray-100 text-lg px-8 py-6 rounded-full"
              onClick={() => navigate("/contact")}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
