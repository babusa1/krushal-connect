
import Navigation from "@/components/Navigation";
import { Linkedin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Leadership = () => {
  const executives = [
    {
      name: "Gauravharan",
      role: "CEO & MD",
      linkedin: "https://linkedin.com/in/gauravharan",
      image: "/lovable-uploads/placeholder-avatar.png" // Replace with actual image path once uploaded
    },
    {
      name: "Rochan S",
      role: "CTO",
      linkedin: "https://linkedin.com/in/rochan-s",
      image: "/lovable-uploads/placeholder-avatar.png"
    },
    {
      name: "Naveen Babu S A",
      role: "Head of AI & Technology Solutions",
      linkedin: "https://linkedin.com/in/naveen-babu",
      image: "/lovable-uploads/placeholder-avatar.png"
    },
    {
      name: "Sandeep",
      role: "Chairman & CFO",
      linkedin: "https://linkedin.com/in/sandeep",
      image: "/lovable-uploads/placeholder-avatar.png"
    },
    {
      name: "Namratha",
      role: "Chief Impact Officer",
      linkedin: "https://linkedin.com/in/namratha",
      image: "/lovable-uploads/placeholder-avatar.png"
    },
    {
      name: "Geetika Goel",
      role: "CIO",
      linkedin: "https://linkedin.com/in/geetika-goel",
      image: "/lovable-uploads/placeholder-avatar.png"
    },
    {
      name: "Ravish",
      role: "Director",
      linkedin: "https://linkedin.com/in/ravish",
      image: "/lovable-uploads/placeholder-avatar.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 mt-16">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#673AB7] to-[#8B5CF6] opacity-90" />
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Leadership
            </h1>
            <p className="text-xl leading-relaxed mb-8">
              Krushal is propelled by a leadership team deeply passionate about driving IT solutions innovation 
              and Tech Solution Modernization and relentlessly committed to delivering transformative success 
              for our clients across diverse industries.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <p className="text-white/90">
                Our leadership brings over 100+ years of combined experience in B2B, Agri, Dairy, Rural, 
                and Healthcare sectors, with expertise in both business and technology roles, 
                transforming the rural ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Team Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {executives.map((executive) => (
                <div 
                  key={executive.name}
                  className="bg-white p-6 rounded-xl shadow-sm border hover:border-[#673AB7] transition-colors"
                >
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="w-32 h-32 mb-4">
                      <AvatarImage src={executive.image} alt={executive.name} />
                      <AvatarFallback className="bg-[#E5DEFF] text-[#673AB7] text-xl">
                        {executive.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-bold text-[#673AB7] mb-2">{executive.name}</h3>
                    <p className="text-gray-600 mb-4">{executive.role}</p>
                    <a 
                      href={executive.linkedin}
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
    </div>
  );
};

export default Leadership;
