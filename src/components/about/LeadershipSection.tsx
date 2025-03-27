
import React from "react";
import { UserCircle2 } from "lucide-react";

const LeadershipSection = () => {
  const leaders = [
    {
      name: "John Smith",
      title: "Chief Executive Officer",
      description: "With over 20 years of experience in the technology sector, John leads our company vision and strategic direction.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Sarah Johnson",
      title: "Chief Technology Officer",
      description: "Sarah brings 15 years of expertise in AI and machine learning to drive our technical innovation and product development.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      name: "Michael Chen",
      title: "Chief Operating Officer",
      description: "Michael oversees our day-to-day operations and ensures our solutions are delivered with excellence to all clients.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-[#673AB7] mb-12">
        Our Leadership Team
      </h1>
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-16">
        Meet the experienced professionals guiding our company's strategic vision and driving innovation in rural technology solutions.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {leaders.map((leader, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="flex flex-col items-center mb-6">
              {leader.image ? (
                <img 
                  src={leader.image} 
                  alt={leader.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-[#673AB7]"
                />
              ) : (
                <UserCircle2 className="w-32 h-32 text-[#673AB7]" />
              )}
            </div>
            <h3 className="text-xl font-bold text-center mb-2">{leader.name}</h3>
            <p className="text-[#673AB7] font-medium text-center mb-4">{leader.title}</p>
            <p className="text-gray-600 text-center">{leader.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadershipSection;
