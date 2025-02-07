
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { ArrowRight, Smartphone, Globe, Users, ShieldCheck, Code, Container, MessageSquare, Database } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MobileFirstDigital = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E5DEFF] to-white/50 -z-10" />
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transforming Ideas into Engaging Digital Experiences
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We build web, mobile, and voice applications that drive business growth through enriching, human-centered design.
            </p>
            <p className="text-lg text-gray-600 mb-12">
              Krushal helps clients create seamless, intuitive digital solutions that prioritize user experience and deliver measurable business results, whether B2B or B2C.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate("/contact")}
                className="bg-[#9b87f5] hover:bg-[#8B5CF6] text-white px-8 py-6 text-lg"
              >
                Get a Free Consultation <ArrowRight className="ml-2" />
              </Button>
              <Button 
                onClick={() => navigate("/explore-services")}
                variant="outline"
                className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#E5DEFF] px-8 py-6 text-lg"
              >
                Explore Our Services <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Statistics Section */}
      <section className="py-16 bg-[#F6F6F7]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Conversion Rate */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Supercharge Your Conversions with Mobile-First
              </h3>
              <p className="text-2xl text-[#673AB7] font-bold mb-4">
                46% increase in conversions
              </p>
            </div>

            {/* Customer Retention */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Retain More Customers with a Flawless Mobile Experience
              </h3>
              <p className="text-2xl text-[#673AB7] font-bold mb-4">
                40% customer retention boost
              </p>
            </div>

            {/* Audience Reach */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Capture a Larger Audience with Mobile Optimization
              </h3>
              <p className="text-2xl text-[#673AB7] font-bold mb-4">
                54% of total web traffic
              </p>
            </div>

            {/* Future-Proofing */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Prepare for the Mobile-Dominant Future
              </h3>
              <p className="text-2xl text-[#673AB7] font-bold mb-4">
                72% projected mobile traffic
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Experience-Led Engineering
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We emphasize the outcome and the experience. Our deep engineering capabilities and experience design solutions define the clearest route to success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Container className="w-12 h-12 text-[#9b87f5]" />,
                title: "Digital Platform",
                description: "A single platform across web, mobile & other devices"
              },
              {
                icon: <Code className="w-12 h-12 text-[#9b87f5]" />,
                title: "Custom Development",
                description: "First Mile Operations Platform tailored to your needs"
              },
              {
                icon: <Users className="w-12 h-12 text-[#9b87f5]" />,
                title: "User Experience",
                description: "Engineering led by exclusive user experience across channels"
              },
              {
                icon: <ShieldCheck className="w-12 h-12 text-[#9b87f5]" />,
                title: "Security & Reliability",
                description: "Complete DevOps with reliability, observability & security"
              }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-[#F6F6F7]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Tailored Solutions for Every Platform
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-12 h-12 text-[#9b87f5]" />,
                title: "Web Application Development",
                description: "Building responsive and scalable web applications with a focus on user experience and performance."
              },
              {
                icon: <Smartphone className="w-12 h-12 text-[#9b87f5]" />,
                title: "Mobile Application Development",
                description: "Creating native and cross-platform mobile applications for iOS and Android devices."
              },
              {
                icon: <MessageSquare className="w-12 h-12 text-[#9b87f5]" />,
                title: "Voice Application Development",
                description: "Developing voice-enabled applications for platforms like Alexa and Google Assistant."
              },
              {
                icon: <Code className="w-12 h-12 text-[#9b87f5]" />,
                title: "Digital Engineering",
                description: "Digital engineering services across all technology stacks."
              },
              {
                icon: <Database className="w-12 h-12 text-[#9b87f5]" />,
                title: "API Development",
                description: "Ensuring seamless data flow with robust API development and management."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#673AB7] to-[#9b87f5] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Transform Your Digital Presence?
          </h2>
          <Button 
            onClick={() => navigate("/contact")}
            className="bg-white text-[#673AB7] hover:bg-gray-100 px-8 py-6 text-lg"
          >
            Contact Us Today <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default MobileFirstDigital;
