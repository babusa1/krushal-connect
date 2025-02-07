
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Globe, Smartphone, Mic, Server, Database, BookOpen, ArrowRight } from "lucide-react";
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
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
            Our Comprehensive Digital Services
          </h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Transform your business with our end-to-end digital solutions
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Application Development */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <Globe className="w-12 h-12 text-[#9b87f5] mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Web Application Development</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Building responsive and scalable web applications</li>
                <li>• Progressive Web Apps (PWAs)</li>
                <li>• Cross-browser compatibility</li>
                <li>• Performance optimization</li>
              </ul>
            </div>

            {/* Mobile Application Development */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <Smartphone className="w-12 h-12 text-[#9b87f5] mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Mobile Application Development</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Native iOS and Android development</li>
                <li>• Cross-platform solutions</li>
                <li>• Mobile app optimization</li>
                <li>• App store deployment</li>
              </ul>
            </div>

            {/* Voice Application Development */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <Mic className="w-12 h-12 text-[#9b87f5] mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Voice Application Development</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Voice-enabled applications</li>
                <li>• Alexa Skills</li>
                <li>• Google Assistant Actions</li>
                <li>• Voice UI/UX design</li>
              </ul>
            </div>

            {/* Digital Engineering */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <Server className="w-12 h-12 text-[#9b87f5] mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Digital Engineering</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Architecture design</li>
                <li>• Cloud infrastructure</li>
                <li>• API development</li>
                <li>• Security implementation</li>
              </ul>
            </div>

            {/* API Development */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <Database className="w-12 h-12 text-[#9b87f5] mb-6" />
              <h3 className="text-2xl font-semibold mb-4">API Development</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• RESTful APIs</li>
                <li>• API documentation</li>
                <li>• Integration services</li>
                <li>• Performance monitoring</li>
              </ul>
            </div>
          </div>

          {/* Case Studies Button */}
          <div className="text-center mt-16">
            <Button
              onClick={() => navigate("/case-studies")}
              className="bg-[#9b87f5] hover:bg-[#8B5CF6] text-white px-8 py-6 text-lg"
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
