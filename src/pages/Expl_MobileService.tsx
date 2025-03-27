
import Navigation from "@/components/Navigation";
import { Globe, Smartphone, Mic, Server, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const ExploreServices = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <PageBreadcrumb 
        items={[
          { label: "Services", path: "/mobile-first-digital" },
          { label: "Mobile-First Digital", path: "/mobile-first-digital" },
          { label: "Digital Services" }
        ]}
      />
      
      {/* Hero Section with Background Image */}
      <section className="relative pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80"
            alt="Digital Services"
            className="w-full h-[500px] object-cover"
          />
        </div>
        <div className="container mx-auto px-4 py-24 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Comprehensive Digital Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-12 animate-fade-in">
              Transform your business with our end-to-end digital solutions, powered by cutting-edge technology and expertise
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#403E43]">
              Digital Development Services
            </h2>
            <p className="text-[#8E9196]">
              Unlock the full potential of digital technology with our comprehensive development services. We transform complex requirements into seamless digital solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Application Development */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all group hover:-translate-y-2 duration-300">
              <Globe className="w-12 h-12 text-[#1EAEDB] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold mb-4">Web Application Development</h3>
              <p className="text-[#8E9196] mb-4 italic">"From concept to cloud-ready in record time"</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#1EAEDB] rounded-full"></span>
                  <span>Custom web applications that scale with your business</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#1EAEDB] rounded-full"></span>
                  <span>Progressive Web Apps for offline capabilities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#1EAEDB] rounded-full"></span>
                  <span>Responsive design for all devices</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#1EAEDB] rounded-full"></span>
                  <span>Performance optimization and SEO</span>
                </li>
              </ul>
            </div>

            {/* Mobile Application Development */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all group hover:-translate-y-2 duration-300">
              <Smartphone className="w-12 h-12 text-[#1EAEDB] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold mb-4">Mobile Application Development</h3>
              <p className="text-[#8E9196] mb-4 italic">"Your business in your customers' pockets"</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#1EAEDB] rounded-full"></span>
                  <span>Native iOS and Android excellence</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#1EAEDB] rounded-full"></span>
                  <span>Cross-platform solutions for wider reach</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#1EAEDB] rounded-full"></span>
                  <span>Performance-optimized mobile experiences</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#1EAEDB] rounded-full"></span>
                  <span>Seamless app store deployment</span>
                </li>
              </ul>
            </div>

            {/* Voice Application Development */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all group hover:-translate-y-2 duration-300">
              <Mic className="w-12 h-12 text-[#1EAEDB] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold mb-4">Voice Application Development</h3>
              <p className="text-[#8E9196] mb-4 italic">"Give your app a voice that resonates"</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#1EAEDB] rounded-full"></span>
                  <span>Intuitive voice-enabled applications</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#1EAEDB] rounded-full"></span>
                  <span>Custom Alexa Skills development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#1EAEDB] rounded-full"></span>
                  <span>Google Assistant Actions integration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#1EAEDB] rounded-full"></span>
                  <span>Voice-first UX design</span>
                </li>
              </ul>
            </div>

            {/* Digital Engineering */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all group hover:-translate-y-2 duration-300">
              <Server className="w-12 h-12 text-[#1EAEDB] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold mb-4">Digital Engineering</h3>
              <p className="text-[#8E9196] mb-4 italic">"Building the foundation for digital excellence"</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#1EAEDB] rounded-full"></span>
                  <span>Scalable architecture design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#1EAEDB] rounded-full"></span>
                  <span>Cloud infrastructure optimization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#1EAEDB] rounded-full"></span>
                  <span>Robust API development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#1EAEDB] rounded-full"></span>
                  <span>Enterprise-grade security</span>
                </li>
              </ul>
            </div>

            {/* API Development */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all group hover:-translate-y-2 duration-300">
              <Database className="w-12 h-12 text-[#1EAEDB] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold mb-4">API Development</h3>
              <p className="text-[#8E9196] mb-4 italic">"Connect, integrate, and scale seamlessly"</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#1EAEDB] rounded-full"></span>
                  <span>Modern RESTful API architecture</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#1EAEDB] rounded-full"></span>
                  <span>Comprehensive API documentation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#1EAEDB] rounded-full"></span>
                  <span>Third-party integration expertise</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#1EAEDB] rounded-full"></span>
                  <span>Real-time performance monitoring</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="text-center mt-16">
            <Button
              onClick={() => navigate("/case-studies")}
              className="bg-[#1EAEDB] hover:bg-[#33C3F0] text-white px-8 py-6 text-lg animate-fade-in hover:scale-105 transition-transform duration-300"
            >
              View Our Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-[#F6F6F7]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#403E43] mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-[#8E9196] mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our digital development services can transform your business.
          </p>
          <Button 
            onClick={() => navigate("/contact")}
            className="bg-[#1EAEDB] hover:bg-[#33C3F0] text-white px-8 py-6 text-lg"
          >
            Request a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ExploreServices;
