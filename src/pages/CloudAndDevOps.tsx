import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Rocket, Percent, Scale, ShieldCheck, Gauge } from "lucide-react";
import HeroCarousel from "@/components/hero/HeroCarousel";

const CloudAndDevOps = () => {
  const navigate = useNavigate();

  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      title: "Enterprise Cloud Solutions",
      tagline: "Transform your business with secure, scalable cloud infrastructure"
    },
    {
      url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
      title: "DevOps Excellence",
      tagline: "Automate, deploy, and scale with confidence"
    },
    {
      url: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f",
      title: "Cloud Migration & Optimization",
      tagline: "Seamless transitions to modern cloud architecture"
    }
  ];

  const buttonConfig = {
    text: "Contact Us Today",
    onClick: () => navigate("/contact")
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <HeroCarousel 
        images={carouselImages}
        buttonConfig={buttonConfig}
      />

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#6E59A5]">
            Why Businesses Choose Krushal for Cloud & DevOps
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Expertise & Experience",
                description: "Our certified cloud and DevOps engineers bring deep technical expertise and proven methodologies to every engagement."
              },
              {
                title: "Tailored Solutions",
                description: "We don't offer one-size-fits-all solutions. We craft customized strategies and services to meet your unique business needs and technical environment."
              },
              {
                title: "Results-Oriented Approach",
                description: "We are focused on delivering measurable outcomes – faster deployments, improved efficiency, enhanced security, and reduced costs."
              },
              {
                title: "End-to-End Services",
                description: "From initial strategy and migration to ongoing management and optimization, we provide complete lifecycle support for your cloud and DevOps initiatives."
              },
              {
                title: "Industry Best Practices",
                description: "We adhere to industry-leading security standards, compliance frameworks, and DevOps best practices to ensure robust and reliable solutions."
              }
            ].map((item, index) => (
              <div key={index} className="bg-[#F8F7FF] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-semibold mb-4 text-[#6E59A5]">{item.title}</h3>
                <p className="text-[#7E69AB]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-[#E5DEFF]/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#6E59A5]">
            Our Core Cloud & DevOps Service Areas
          </h2>
          
          {/* Cloud Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-[#6E59A5]">Cloud Services</h3>
            <p className="text-lg mb-6 text-[#7E69AB]">Navigate the cloud with confidence. Krushal's Cloud Services encompass:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Strategy & Consulting:\nCloud Readiness\nMigration Strategy\nCost Optimization",
                "Migration & Implementation:\nApplication & Database Migration\nIaC Deployment",
                "Managed Services:\n24/7 Monitoring\nSecurity\nPerformance Tuning",
                "Security Services:\nArchitecture Design\nVulnerability Management\nCompliance"
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                  <p className="text-[#7E69AB] whitespace-pre-line">{service}</p>
                </div>
              ))}
            </div>
          </div>

          {/* DevOps Services */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-[#6E59A5]">DevOps Services</h3>
            <p className="text-lg mb-6 text-[#7E69AB]">Accelerate your software delivery pipeline. Krushal's DevOps Services include:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Consulting & Implementation:\nDevOps Strategy\nCI/CD Pipeline Design\nToolchain Setup",
                "Infrastructure-as-Code (IaC):\nAutomated Infrastructure Provisioning\nManagement",
                "CI/CD Services:\nAutomated Build\nTest\nDeployment Pipelines",
                "Containerization & Orchestration:\nDocker\nKubernetes\nMicroservices"
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                  <p className="text-[#7E69AB] whitespace-pre-line">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#6E59A5]">
            Key Benefits of Partnering with Krushal
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket className="w-12 h-12 text-[#9b87f5]" />,
                title: "Accelerated Innovation",
                description: "Release new features and applications up to 50% faster",
                animation: "animate-float"
              },
              {
                icon: <Gauge className="w-12 h-12 text-[#9b87f5]" />,
                title: "Enhanced Efficiency",
                description: "Reduce operational overhead and improve resource utilization by 30%",
                animation: "animate-fadeIn"
              },
              {
                icon: <Scale className="w-12 h-12 text-[#9b87f5]" />,
                title: "Improved Scalability & Agility",
                description: "Scale your infrastructure and applications on demand to meet fluctuating business needs",
                animation: "animate-slideIn"
              },
              {
                icon: <Percent className="w-12 h-12 text-[#9b87f5]" />,
                title: "Reduced Costs",
                description: "Optimize cloud spending and infrastructure management costs by 20%",
                animation: "animate-float"
              },
              {
                icon: <ShieldCheck className="w-12 h-12 text-[#9b87f5]" />,
                title: "Strengthened Security",
                description: "Minimize security risks and ensure compliance with industry standards",
                animation: "animate-fadeIn"
              }
            ].map((benefit, index) => (
              <div 
                key={index} 
                className={`bg-[#F8F7FF] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all ${benefit.animation}`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-4 bg-white rounded-full shadow-md">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-[#6E59A5]">{benefit.title}</h3>
                  <p className="text-[#7E69AB]">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#E5DEFF]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#6E59A5]">
            Ready to Transform Your Cloud & DevOps Journey?
          </h2>
          <Button 
            onClick={() => navigate("/contact")}
            className="bg-[#6E59A5] text-white hover:bg-[#9b87f5] px-8 py-6 text-lg"
          >
            Contact Us Today <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CloudAndDevOps;
