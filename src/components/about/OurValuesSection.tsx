
import React from "react";
import { Shield, Heart, Lightbulb, Gem, Target, Users } from "lucide-react";

const OurValuesSection = () => {
  const values = [
    {
      icon: <Target className="h-12 w-12 text-[#673AB7]" />,
      title: "Purpose-Driven",
      description: "We create solutions with clear intentions and measurable impact."
    },
    {
      icon: <Shield className="h-12 w-12 text-[#673AB7]" />,
      title: "Integrity",
      description: "We are committed to ethical practices and transparency in all we do."
    },
    {
      icon: <Heart className="h-12 w-12 text-[#673AB7]" />,
      title: "Empathy",
      description: "We deeply understand our clients' challenges and design with compassion."
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-[#673AB7]" />,
      title: "Innovation",
      description: "We constantly seek new and better ways to solve complex problems."
    },
    {
      icon: <Gem className="h-12 w-12 text-[#673AB7]" />,
      title: "Excellence",
      description: "We pursue the highest standards in everything we create."
    },
    {
      icon: <Users className="h-12 w-12 text-[#673AB7]" />,
      title: "Collaboration",
      description: "We believe the best solutions emerge from diverse teams working together."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#673AB7] mb-10">Our Values</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-center mb-3">{value.title}</h3>
              <p className="text-gray-600 text-center">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValuesSection;
