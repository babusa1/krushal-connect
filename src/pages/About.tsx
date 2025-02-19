
import React from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Target, Users, BarChart, Code } from "lucide-react";
import Problems from "@/components/Problems";

const About = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: <Target className="w-12 h-12 text-[#673AB7]" />,
      title: "Innovation",
      description: "Driving technological advancement in rural markets"
    },
    {
      icon: <Users className="w-12 h-12 text-[#673AB7]" />,
      title: "Collaboration",
      description: "Building strong partnerships for lasting impact"
    },
    {
      icon: <BarChart className="w-12 h-12 text-[#673AB7]" />,
      title: "Excellence",
      description: "Delivering high-quality solutions consistently"
    },
    {
      icon: <Code className="w-12 h-12 text-[#673AB7]" />,
      title: "Technology",
      description: "Leveraging cutting-edge tech for rural transformation"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c"
            alt="About Krushal"
            className="w-full h-[500px] object-cover"
          />
        </div>
        <div className="container mx-auto px-4 py-24 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-baloo">
              About Us
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Transforming rural industries through innovative technology solutions
            </p>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#673AB7] mb-12 font-baloo">
            The Challenges We Address
          </h2>
          <Problems />
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-[#F8F7FF]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#673AB7] mb-12 font-baloo">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all text-center"
              >
                <div className="flex flex-col items-center">
                  {value.icon}
                  <h3 className="text-xl font-bold mt-4 mb-2 text-[#673AB7] font-baloo">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#673AB7] to-[#8B5CF6] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-baloo">
            Ready to Learn More?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover how we're transforming industries through technology
          </p>
          <Button 
            onClick={() => navigate("/contact")}
            className="bg-white text-[#673AB7] hover:bg-gray-100 px-8 py-6 text-lg rounded-full"
          >
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
