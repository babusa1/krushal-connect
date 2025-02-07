import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CloudAndDevOps = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] bg-[#E5DEFF]">
        <div className="absolute inset-0">
          <div className="container mx-auto px-4 h-full flex items-center justify-center text-center">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold text-[#6E59A5] mb-6 animate-fadeIn">
                Krushal: Your Partner for Cloud & DevOps Success
              </h1>
              <p className="text-xl md:text-2xl text-[#7E69AB] max-w-3xl mx-auto mb-8 animate-fadeIn">
                Unlock agility, scalability, and efficiency with Krushal's expertise. We empower businesses to thrive in the cloud era, accelerating innovation and driving digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

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

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#6E59A5]">
            Key Benefits of Partnering with Krushal
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Accelerated Innovation",
                description: "Release new features and applications up to 50% faster."
              },
              {
                title: "Enhanced Efficiency",
                description: "Reduce operational overhead and improve resource utilization by 30%."
              },
              {
                title: "Improved Scalability & Agility",
                description: "Scale your infrastructure and applications on demand to meet fluctuating business needs."
              },
              {
                title: "Reduced Costs",
                description: "Optimize cloud spending and infrastructure management costs by 20%."
              },
              {
                title: "Strengthened Security",
                description: "Minimize security risks and ensure compliance with industry standards."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-[#F8F7FF] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-semibold mb-4 text-[#6E59A5]">{benefit.title}</h3>
                <p className="text-[#7E69AB]">{benefit.description}</p>
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