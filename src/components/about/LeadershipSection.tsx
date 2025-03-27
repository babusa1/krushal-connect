
import React from "react";
import { Linkedin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const LeadershipSection = () => {
  const leaders = [
    {
      name: "Gauravharan",
      title: "CEO & MD",
      image: "/lovable-uploads/79a196b4-e97d-4308-a4e5-41fcec739a22.png",
      linkedin: "https://linkedin.com/in/gaurav-haran-a746537"
    },
    {
      name: "Rochan S",
      title: "CTO",
      image: "/lovable-uploads/b75b0f6c-5053-478e-8458-a0021a8d5fc3.png",
      linkedin: "https://linkedin.com/in/srochan"
    },
    {
      name: "Naveen Babu S A",
      title: "Head of AI & Technology Solutions",
      image: "/lovable-uploads/f7a042e8-a011-4465-8e68-2c2e2d5be32e.png",
      linkedin: "https://linkedin.com/in/naveenbabusa"
    },
    {
      name: "Sandeep Raju",
      title: "Chairman & CFO",
      image: "/lovable-uploads/88c6a233-bbf5-4c43-8f9a-1da562a18059.png",
      linkedin: "https://linkedin.com/in/sandeepraju"
    },
    {
      name: "Namrata Vora",
      title: "Chief Impact Officer",
      image: "/lovable-uploads/77b95b64-9527-4de8-9ef7-fd1e8dc12ef6.png",
      linkedin: "https://linkedin.com/in/namratajvora"
    },
    {
      name: "Geetika Goel",
      title: "CIO",
      image: "/lovable-uploads/d07d4147-9f40-490a-a363-39dfd25e216b.png",
      linkedin: "https://linkedin.com/in/goelgeetika"
    },
    {
      name: "Ravish Chavan",
      title: "Chief Program Manager",
      image: "",
      initials: "RC",
      linkedin: "https://linkedin.com/in/ravish-chavan-64553935"
    }
  ];

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border hover:border-[#673AB7] transition-colors">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="w-32 h-32 mb-4">
                    {leader.image ? (
                      <AvatarImage src={leader.image} alt={leader.name} />
                    ) : (
                      <AvatarFallback className="bg-[#E5DEFF] text-[#673AB7] text-xl">
                        {leader.initials}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <h3 className="text-xl font-bold text-[#673AB7] mb-2 font-baloo">{leader.name}</h3>
                  <p className="text-gray-600 mb-4">{leader.title}</p>
                  <a 
                    href={leader.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#E5DEFF] hover:bg-[#673AB7] transition-colors group"
                  >
                    <Linkedin className="w-5 h-5 text-[#673AB7] group-hover:text-white" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
