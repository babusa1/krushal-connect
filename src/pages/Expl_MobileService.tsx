
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Globe, Smartphone, Mic, Server, Database, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ExploreServices = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E5DEFF] to-white/50 -z-10" />
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8 animate-fade-in">
            Our Comprehensive Digital Services
          </h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12 animate-fade-in">
            Transform your business with our end-to-end digital solutions, powered by cutting-edge technology and expertise
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Application Development */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all group hover:-translate-y-2 duration-300">
              <Globe className="w-12 h-12 text-[#9b87f5] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold mb-4">Web Application Development</h3>
              <p className="text-[#8E9196] mb-4 italic">"From concept to cloud-ready in record time"</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#9b87f5] rounded-full"></span>
                  <span>Custom web applications that scale with your business</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#9b87f5] rounded-full"></span>
                  <span>Progressive Web Apps for offline capabilities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#9b87f5] rounded-full"></span>
                  <span>Responsive design for all devices</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#9b87f5] rounded-full"></span>
                  <span>Performance optimization and SEO</span>
                </li>
              </ul>
            </div>

            {/* Mobile Application Development */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all group hover:-translate-y-2 duration-300">
              <Smartphone className="w-12 h-12 text-[#9b87f5] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold mb-4">Mobile Application Development</h3>
              <p className="text-[#8E9196] mb-4 italic">"Your business in your customers' pockets"</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#9b87f5] rounded-full"></span>
                  <span>Native iOS and Android excellence</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#9b87f5] rounded-full"></span>
                  <span>Cross-platform solutions for wider reach</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#9b87f5] rounded-full"></span>
                  <span>Performance-optimized mobile experiences</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#9b87f5] rounded-full"></span>
                  <span>Seamless app store deployment</span>
                </li>
              </ul>
            </div>

            {/* Voice Application Development */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all group hover:-translate-y-2 duration-300">
              <Mic className="w-12 h-12 text-[#9b87f5] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold mb-4">Voice Application Development</h3>
              <p className="text-[#8E9196] mb-4 italic">"Give your app a voice that resonates"</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#9b87f5] rounded-full"></span>
                  <span>Intuitive voice-enabled applications</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#9b87f5] rounded-full"></span>
                  <span>Custom Alexa Skills development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#9b87f5] rounded-full"></span>
                  <span>Google Assistant Actions integration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#9b87f5] rounded-full"></span>
                  <span>Voice-first UX design</span>
                </li>
              </ul>
            </div>

            {/* Digital Engineering */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all group hover:-translate-y-2 duration-300">
              <Server className="w-12 h-12 text-[#9b87f5] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold mb-4">Digital Engineering</h3>
              <p className="text-[#8E9196] mb-4 italic">"Building the foundation for digital excellence"</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#9b87f5] rounded-full"></span>
                  <span>Scalable architecture design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#9b87f5] rounded-full"></span>
                  <span>Cloud infrastructure optimization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#9b87f5] rounded-full"></span>
                  <span>Robust API development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#9b87f5] rounded-full"></span>
                  <span>Enterprise-grade security</span>
                </li>
              </ul>
            </div>

            {/* API Development */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all group hover:-translate-y-2 duration-300">
              <Database className="w-12 h-12 text-[#9b87f5] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold mb-4">API Development</h3>
              <p className="text-[#8E9196] mb-4 italic">"Connect, integrate, and scale seamlessly"</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#9b87f5] rounded-full"></span>
                  <span>Modern RESTful API architecture</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#9b87f5] rounded-full"></span>
                  <span>Comprehensive API documentation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#9b87f5] rounded-full"></span>
                  <span>Third-party integration expertise</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#9b87f5] rounded-full"></span>
                  <span>Real-time performance monitoring</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Case Studies Button */}
          <div className="text-center mt-16">
            <Button
              onClick={() => navigate("/case-studies")}
              className="bg-[#9b87f5] hover:bg-[#8B5CF6] text-white px-8 py-6 text-lg animate-fade-in hover:scale-105 transition-transform duration-300"
            >
              View Our Case Studies <BookOpen className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExploreServices;
