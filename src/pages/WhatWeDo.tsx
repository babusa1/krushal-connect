
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Brain, Cloud, Users, DollarSign, BarChart, Globe, Lightbulb, Code, Smartphone, Bot } from "lucide-react";
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
            className="absolute inset-0 bg-gradient-to-r from-[#673AB7]/90 to-[#8B5CF6]/90 z-10"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay',
            }}
          />
        </div>
        
        <div className="container relative z-20 px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#9b87f5] mb-6 drop-shadow-lg">
              Transforming Industries Through Innovation
            </h1>
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 mt-8">
              <p className="text-lg md:text-xl text-gray-800 mb-4">
                Empowering businesses with <span className="font-semibold text-[#8B5CF6]">intelligent solutions</span>, from rural operations to cutting-edge technology services
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-[#F8F7FF] p-4 rounded-lg border border-[#E5DEFF]">
                  <h3 className="font-semibold text-[#673AB7] mb-2">AI & Cloud Excellence</h3>
                  <p className="text-sm text-gray-600">
                    Advanced AI agents and cloud solutions
                  </p>
                </div>
                <div className="bg-[#F8F7FF] p-4 rounded-lg border border-[#E5DEFF]">
                  <h3 className="font-semibold text-[#673AB7] mb-2">Digital Innovation</h3>
                  <p className="text-sm text-gray-600">
                    Mobile-first and DevOps solutions
                  </p>
                </div>
                <div className="bg-[#F8F7FF] p-4 rounded-lg border border-[#E5DEFF]">
                  <h3 className="font-semibold text-[#673AB7] mb-2">Rural Tech</h3>
                  <p className="text-sm text-gray-600">
                    Transforming rural operations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Solutions Section */}
      <section className="py-20 bg-[#F8F7FF]">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-8 h-8 text-[#8B5CF6]" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#673AB7]">
                Comprehensive Technology Solutions
              </h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Krushal, we deliver end-to-end technology solutions that drive transformation across industries. From 
              <span className="font-semibold text-[#8B5CF6]"> rural innovation</span> to
              <span className="font-semibold text-[#8B5CF6]"> advanced AI services</span>, our solutions are designed to 
              empower businesses for the future.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <Brain className="w-8 h-8 text-[#F97316]" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#673AB7]">
                Our Service Portfolio
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E5DEFF] hover:border-[#8B5CF6] transition-colors">
                <Bot className="w-10 h-10 text-[#F97316] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-[#673AB7]">AI Agents & Insights</h3>
                <p className="text-gray-600">Advanced AI solutions providing actionable intelligence and automated processes.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E5DEFF] hover:border-[#8B5CF6] transition-colors">
                <Cloud className="w-10 h-10 text-[#F97316] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-[#673AB7]">Cloud & DevOps</h3>
                <p className="text-gray-600">Scalable infrastructure and streamlined development operations.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E5DEFF] hover:border-[#8B5CF6] transition-colors">
                <Smartphone className="w-10 h-10 text-[#F97316] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-[#673AB7]">Mobile-First Digital</h3>
                <p className="text-gray-600">Intuitive mobile solutions for seamless user experiences.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E5DEFF] hover:border-[#8B5CF6] transition-colors">
                <Globe className="w-10 h-10 text-[#F97316] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-[#673AB7]">Rural Innovation</h3>
                <p className="text-gray-600">Transforming rural operations with smart technology solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact Section */}
      <section className="py-20 bg-[#F8F7FF]">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <BarChart className="w-8 h-8 text-[#F97316]" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#673AB7]">
                Delivering Real Results
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E5DEFF] hover:border-[#8B5CF6] transition-colors text-center">
                <Code className="w-12 h-12 text-[#F97316] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-[#673AB7]">Tech Innovation</h3>
                <p className="text-gray-600">Cutting-edge solutions driving digital transformation.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E5DEFF] hover:border-[#8B5CF6] transition-colors text-center">
                <Users className="w-12 h-12 text-[#F97316] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-[#673AB7]">User-Centric</h3>
                <p className="text-gray-600">Solutions designed for maximum adoption and impact.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E5DEFF] hover:border-[#8B5CF6] transition-colors text-center">
                <DollarSign className="w-12 h-12 text-[#F97316] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-[#673AB7]">Cost Efficiency</h3>
                <p className="text-gray-600">Optimized solutions for better ROI.</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-[#E5DEFF]">
              <p className="text-lg text-gray-700 text-center leading-relaxed">
                From our flagship rural solutions to advanced AI services, we've helped businesses achieve 
                <span className="font-semibold text-[#8B5CF6]"> significant efficiency gains</span>, 
                <span className="font-semibold text-[#8B5CF6]"> cost reductions</span>, and 
                <span className="font-semibold text-[#8B5CF6]"> enhanced market reach</span> across sectors.
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
              Join the growing network of businesses leveraging Krushal's comprehensive technology solutions.
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

