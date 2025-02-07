
import Navigation from "@/components/Navigation";
import { Target, Rocket, Brain, BarChart, Users, Sparkles, Truck, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AboutKrushal = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center py-20 mt-16">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(103, 58, 183, 0.9), rgba(139, 92, 246, 0.9)), url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Intelligent Technology for End-to-End & First Mile Impact
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Empowering industries with intelligent solutions that drive transformation 
              from the first mile to the end user, creating unprecedented efficiency and sustainable growth.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <p className="text-white/90">
                Revolutionizing operations through AI-driven solutions, mobile-first applications, 
                and comprehensive cloud services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Vision */}
              <div className="bg-white p-8 rounded-xl shadow-sm border hover:border-[#673AB7] transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-8 h-8 text-[#673AB7]" />
                  <h2 className="text-2xl font-bold text-[#673AB7]">Our Vision</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To empower industries with intelligent technology across the entire value chain, 
                  revolutionizing the 'First Mile' through AI, mobile-first solutions, and cloud innovation 
                  for transformative improvements in efficiency and sustainable growth.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-white p-8 rounded-xl shadow-sm border hover:border-[#673AB7] transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <Rocket className="w-8 h-8 text-[#673AB7]" />
                  <h2 className="text-2xl font-bold text-[#673AB7]">Our Mission</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To deliver impactful intelligent technology solutions that enable end-to-end transformation, 
                  with specialized expertise in First Mile Modernization, leveraging AI Agents, Mobile-First Applications, 
                  and comprehensive Cloud & DevOps services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Solutions Section */}
      <section className="py-20 bg-[#F8F7FF]">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#673AB7]">
              Solutions We Deliver
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Truck className="w-10 h-10 text-[#673AB7]" />,
                  title: "First Mile Solutions",
                  description: "Specialized solutions for transforming foundational operations, procurement, and field services in rural and underserved markets."
                },
                {
                  icon: <Brain className="w-10 h-10 text-[#673AB7]" />,
                  title: "AI & Intelligent Automation",
                  description: "AI Agents driving efficiency and proactive problem-solving, with specialized focus on First Mile operations."
                },
                {
                  icon: <Network className="w-10 h-10 text-[#673AB7]" />,
                  title: "End-to-End Transformation",
                  description: "Comprehensive solutions spanning the entire value chain, from first mile operations to end-user experiences."
                },
                {
                  icon: <Sparkles className="w-10 h-10 text-[#673AB7]" />,
                  title: "Mobile-First Applications",
                  description: "User-friendly solutions empowering field teams and enhancing operational efficiency in First Mile operations."
                }
              ].map((solution, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border hover:border-[#673AB7] transition-colors">
                  <div className="mb-4">{solution.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-[#673AB7]">{solution.title}</h3>
                  <p className="text-gray-600">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 text-[#673AB7]">Our Impact</h2>
            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-left">
                  <h3 className="text-xl font-semibold mb-4 text-[#673AB7]">First Mile Excellence</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• 60%+ early mastitis detection in dairy</li>
                    <li>• Farm-level antibiotic signalling</li>
                    <li>• Rs. 0.36/liter cost reduction</li>
                  </ul>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold mb-4 text-[#673AB7]">AI & Automation Impact</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• 40% reduction in processing time</li>
                    <li>• 85% automation in routine tasks</li>
                    <li>• 50% decrease in error rates</li>
                  </ul>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold mb-4 text-[#673AB7]">Mobile Solutions</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• 75% field operation efficiency gain</li>
                    <li>• 90% user adoption rate</li>
                    <li>• 65% faster data collection</li>
                  </ul>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold mb-4 text-[#673AB7]">Cloud Transformation</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• 99.9% system availability</li>
                    <li>• 45% infrastructure cost reduction</li>
                    <li>• 70% faster deployment cycles</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#673AB7] to-[#8B5CF6] text-white">
        <div className="container px-4 mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Shape the Future with Us
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join us in building intelligent solutions that transform industries from the First Mile forward.
            </p>
            <Button 
              className="bg-white text-[#673AB7] hover:bg-gray-100 text-lg px-8 py-6 rounded-full"
              onClick={() => navigate("/careers")}
            >
              Explore Careers
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutKrushal;

