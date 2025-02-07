
import Navigation from "@/components/Navigation";
import { Target, Rocket } from "lucide-react";

const AboutKrushal = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#F8F7FF]">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Krushal
            </h1>
            <p className="text-xl text-gray-600">
              Transforming rural industries through intelligent technology solutions
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Vision */}
              <div className="bg-white p-8 rounded-xl shadow-sm border">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-8 h-8 text-[#673AB7]" />
                  <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading technology partner for rural industries, enabling their digital transformation and sustainable growth through innovative solutions that bridge the technological divide.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-white p-8 rounded-xl shadow-sm border">
                <div className="flex items-center gap-3 mb-6">
                  <Rocket className="w-8 h-8 text-[#673AB7]" />
                  <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To empower rural businesses with cutting-edge AI and cloud solutions that drive efficiency, reduce costs, and improve market access, while fostering sustainable practices and inclusive growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutKrushal;
