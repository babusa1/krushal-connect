
import React from "react";

const OurTeamSection = () => {
  const teams = [
    {
      title: "Engineering",
      count: 25,
      description: "Expert developers building scalable solutions"
    },
    {
      title: "Data Science",
      count: 12,
      description: "Specialists in AI and machine learning"
    },
    {
      title: "Product & Design",
      count: 8,
      description: "Creating intuitive, user-centered experiences"
    },
    {
      title: "Industry Experts",
      count: 10,
      description: "Domain knowledge across rural sectors"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#673AB7] mb-10">Our Team</h2>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-700">
            Our diverse team brings together expertise in technology, data science, 
            and industry knowledge to create innovative solutions for rural sectors.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teams.map((team, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:border-[#673AB7] transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">{team.title}</h3>
              <p className="text-3xl font-bold text-[#673AB7] mb-3">{team.count}+</p>
              <p className="text-gray-600">{team.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
