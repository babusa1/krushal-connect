
import Navigation from "@/components/Navigation";
import { Linkedin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Leadership = () => {
  const executives = [
    {
      name: "Gauravharan",
      role: "CEO & MD",
      linkedin: "https://linkedin.com/in/gaurav-haran-a746537",
      image: "/lovable-uploads/79a196b4-e97d-4308-a4e5-41fcec739a22.png"
    },
    {
      name: "Rochan S",
      role: "CTO",
      linkedin: "https://linkedin.com/in/srochan",
      image: "/lovable-uploads/b75b0f6c-5053-478e-8458-a0021a8d5fc3.png"
    },
    {
      name: "Naveen Babu S A",
      role: "Head of AI & Technology Solutions",
      linkedin: "https://linkedin.com/in/naveenbabusa",
      image: "/lovable-uploads/f7a042e8-a011-4465-8e68-2c2e2d5be32e.png"
    },
    {
      name: "Sandeep Raju",
      role: "Chairman & CFO",
      linkedin: "https://linkedin.com/in/sandeepraju",
      image: "/lovable-uploads/88c6a233-bbf5-4c43-8f9a-1da562a18059.png"
    },
    {
      name: "Namrata Vora",
      role: "Chief Impact Officer",
      linkedin: "https://linkedin.com/in/namratajvora",
      image: "/lovable-uploads/77b95b64-9527-4de8-9ef7-fd1e8dc12ef6.png"
    },
    {
      name: "Geetika Goel",
      role: "CIO",
      linkedin: "https://linkedin.com/in/goelgeetika",
      image: "/lovable-uploads/d07d4147-9f40-490a-a363-39dfd25e216b.png"
    },
    {
      name: "Ravish Chavan",
      role: "Chief Program Manager",
      linkedin: "https://linkedin.com/in/ravish-chavan-64553935",
      image: "/lovable-uploads/placeholder-avatar.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 mt-16">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/lovable-uploads/9114eb0c-c8f9-4859-ac25-dfea74a21dbc.png')",
            backgroundBlendMode: "overlay"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#673AB7] to-[#8B5CF6] opacity-90" />
        </div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-baloo">
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
                    <h3 className="text-xl font-bold text-[#673AB7] mb-2 font-baloo">{executive.name}</h3>
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
