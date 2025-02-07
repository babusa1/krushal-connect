
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
            className="absolute inset-0 bg-gradient-to-r from-[#673AB7]/80 to-[#8B5CF6]/80 z-10"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay',
            }}
          />
        </div>
        
        <div className="container relative z-20 px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transforming Industries with Intelligent Technology
            </h1>
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 mt-8">
              <p className="text-lg md:text-xl text-gray-800 mb-4">
                Building the next generation of <span className="font-semibold text-[#8B5CF6]">intelligent solutions</span> for rural India
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-[#F8F7FF] p-4 rounded-lg border border-[#E5DEFF]">
                  <h3 className="font-semibold text-[#673AB7] mb-2">Smart(Field)Ops</h3>
                  <p className="text-sm text-gray-600">
                    60% improvement in early detection of quality issues
                  </p>
                </div>
                <div className="bg-[#F8F7FF] p-4 rounded-lg border border-[#E5DEFF]">
                  <h3 className="font-semibold text-[#673AB7] mb-2">SmartRation</h3>
                  <p className="text-sm text-gray-600">
                    Optimize feed costs by 15-20% through AI-driven insights
                  </p>
                </div>
                <div className="bg-[#F8F7FF] p-4 rounded-lg border border-[#E5DEFF]">
                  <h3 className="font-semibold text-[#673AB7] mb-2">SmartProjection</h3>
                  <p className="text-sm text-gray-600">
                    Reduce procurement costs by ₹0.36 per liter
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Krushal Section */}
      <section className="py-20 bg-[#F8F7FF]">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-8 h-8 text-[#8B5CF6]" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#673AB7]">
                Driving Impact Through Innovation
              </h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Krushal, we're revolutionizing essential industries through
              <span className="font-semibold text-[#8B5CF6]"> AI-powered solutions</span>, 
              <span className="font-semibold text-[#8B5CF6]"> Cloud infrastructure</span>, and
              <span className="font-semibold text-[#8B5CF6]"> DevOps excellence</span>. 
              Our technologies are purposefully designed to enhance productivity, quality, and 
              market access across rural India's vital sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <Brain className="w-8 h-8 text-[#F97316]" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#673AB7]">
                Our Core Capabilities
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E5DEFF] hover:border-[#8B5CF6] transition-colors">
                <Globe className="w-10 h-10 text-[#F97316] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-[#673AB7]">Industry Expertise</h3>
                <p className="text-gray-600">Delivering targeted solutions for dairy, FMCG, and agritech sectors.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E5DEFF] hover:border-[#8B5CF6] transition-colors">
                <Brain className="w-10 h-10 text-[#F97316] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-[#673AB7]">AI & Analytics</h3>
                <p className="text-gray-600">Advanced algorithms providing actionable business intelligence.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E5DEFF] hover:border-[#8B5CF6] transition-colors">
                <Cloud className="w-10 h-10 text-[#F97316] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-[#673AB7]">Cloud Solutions</h3>
                <p className="text-gray-600">Scalable infrastructure enabling digital transformation.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E5DEFF] hover:border-[#8B5CF6] transition-colors">
                <Users className="w-10 h-10 text-[#F97316] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-[#673AB7]">Human-Centered Design</h3>
                <p className="text-gray-600">Intuitive interfaces built for real-world usability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-20 bg-[#F8F7FF]">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <BarChart className="w-8 h-8 text-[#F97316]" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#673AB7]">
                Measurable Impact
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E5DEFF] hover:border-[#8B5CF6] transition-colors text-center">
                <DollarSign className="w-12 h-12 text-[#F97316] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-[#673AB7]">Cost Optimization</h3>
                <p className="text-gray-600">Reducing operational costs through smart automation.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E5DEFF] hover:border-[#8B5CF6] transition-colors text-center">
                <BarChart className="w-12 h-12 text-[#F97316] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-[#673AB7]">Enhanced Efficiency</h3>
                <p className="text-gray-600">Streamlining processes for maximum productivity.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E5DEFF] hover:border-[#8B5CF6] transition-colors text-center">
                <Globe className="w-12 h-12 text-[#F97316] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-[#673AB7]">Market Growth</h3>
                <p className="text-gray-600">Expanding reach through digital transformation.</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-[#E5DEFF]">
              <p className="text-lg text-gray-700 text-center leading-relaxed">
                Our flagship solutions like <span className="font-semibold text-[#8B5CF6]">Smart(Field)Ops</span>, 
                <span className="font-semibold text-[#8B5CF6]"> SmartRation</span>, and 
                <span className="font-semibold text-[#8B5CF6]"> SmartProjection</span> have 
                revolutionized operations for thousands of users, delivering unprecedented efficiency 
                and cost savings across the value chain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-[#673AB7] to-[#8B5CF6] text-white">
        <div className="container px-4 mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <Lightbulb className="w-16 h-16 mx-auto mb-6 text-white/90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join the growing network of businesses leveraging Krushal's intelligent technology solutions.
            </p>
            <Button 
              className="bg-white text-[#673AB7] hover:bg-gray-100 text-lg px-8 py-6 rounded-full"
              onClick={() => navigate("/contact")}
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
