import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Cloud, Server, Database, Cog, Rocket, Infinity, Network, ChartBar } from "lucide-react";

const ExploreCloudServices = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-[#0EA5E9] to-[#1EAEDB] text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">
            Krushal: Cloud & DevOps Services - Powering Your Digital Future
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 animate-fadeIn">
            Transform your IT from a cost center to a competitive weapon. Krushal's Cloud & DevOps expertise delivers agility, scalability, and efficiency, accelerating your digital transformation and driving innovation.
          </p>
          <Button 
            onClick={() => navigate("/contact")}
            className="bg-white text-[#0EA5E9] hover:bg-white/90 px-8 py-6 text-lg rounded-full animate-fadeIn"
          >
            Get a Free Consultation
          </Button>
        </div>
      </section>

      {/* Cloud Solutions Section */}
      <section className="py-16 px-4 bg-[#F1F0FB]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#403E43] mb-4">
              Unlock the Power of Cloud with Krushal
            </h2>
            <p className="text-xl text-[#8E9196]">Cloud Solutions: Optimize, Scale, Secure.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Cloud className="w-12 h-12 text-[#0EA5E9]" />,
                title: "Strategic Cloud Consulting",
                description: "Visionary strategy and expert cost optimization for cloud ROI."
              },
              {
                icon: <Server className="w-12 h-12 text-[#0EA5E9]" />,
                title: "Seamless Cloud Migration",
                description: "Smooth, secure transitions with modern infrastructure deployment."
              },
              {
                icon: <Database className="w-12 h-12 text-[#0EA5E9]" />,
                title: "Intelligent Cloud Management",
                description: "24/7 proactive management, robust security, and compliance."
              },
              {
                icon: <Cog className="w-12 h-12 text-[#0EA5E9]" />,
                title: "Cutting-Edge Cloud",
                description: "Serverless, Containerization, and Orchestration for future-ready applications."
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col items-center text-center">
                  {service.icon}
                  <h3 className="text-xl font-semibold mt-4 mb-2 text-[#403E43]">
                    {service.title}
                  </h3>
                  <p className="text-[#8E9196]">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DevOps Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#403E43] mb-4">
              DevOps: Fueling Agility and Speed
            </h2>
            <p className="text-xl text-[#8E9196]">DevOps Expertise: Agility, Speed, Reliability.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Rocket className="w-12 h-12 text-[#0EA5E9]" />,
                title: "Strategic DevOps Transformation",
                description: "Expert consulting, training, and tailored DevOps implementation."
              },
              {
                icon: <Infinity className="w-12 h-12 text-[#0EA5E9]" />,
                title: "Automated Infrastructure",
                description: "Infrastructure-as-Code and Configuration Management for speed & consistency."
              },
              {
                icon: <Network className="w-12 h-12 text-[#0EA5E9]" />,
                title: "Rapid Software Delivery",
                description: "CI/CD pipelines and Release Automation for faster, reliable releases."
              },
              {
                icon: <ChartBar className="w-12 h-12 text-[#0EA5E9]" />,
                title: "Intelligent DevOps Tooling",
                description: "Integrated toolchains and proactive monitoring for peak performance."
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-[#F1F0FB] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col items-center text-center">
                  {service.icon}
                  <h3 className="text-xl font-semibold mt-4 mb-2 text-[#403E43]">
                    {service.title}
                  </h3>
                  <p className="text-[#8E9196]">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#0EA5E9] to-[#1EAEDB] text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Accelerate Your Digital Transformation?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact Krushal today to explore tailored Cloud & DevOps solutions for your business growth.
          </p>
          <Button 
            onClick={() => navigate("/contact")}
            className="bg-white text-[#0EA5E9] hover:bg-white/90 px-8 py-6 text-lg rounded-full"
          >
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ExploreCloudServices;