
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Dairy Farm Optimization",
      description: "Improved milk production and reduced costs through AI-driven insights.",
      imageUrl: "https://images.unsplash.com/photo-1557330533-349a34620b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      tags: ["Dairy", "AI", "Optimization"]
    },
    {
      title: "Financial Inclusion in Rural Areas",
      description: "Increased access to financial services using mobile technology.",
      imageUrl: "https://images.unsplash.com/photo-1501167786227-4cba60f6d8ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      tags: ["Finance", "Mobile", "Inclusion"]
    },
    {
      title: "Sustainable Farming Practices",
      description: "Enhanced crop yields and reduced environmental impact with precision agriculture.",
      imageUrl: "https://images.unsplash.com/photo-1470163395405-d2b80e7140c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      tags: ["Agritech", "Sustainability", "Precision"]
    },
    {
      title: "Insurance for Farmers",
      description: "Providing insurance services to farmers in rural India",
      imageUrl: "https://images.unsplash.com/photo-1661961112134-fbce0fdf3d99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      tags: ["Insurance", "Farmers", "Risk Management"]
    },
    {
      title: "AI-Driven Healthcare",
      description: "Improving healthcare accessibility and outcomes in remote regions.",
      imageUrl: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      tags: ["Healthcare", "AI", "Accessibility"]
    },
    {
      title: "Empowering Women Entrepreneurs",
      description: "Supporting women-led businesses through technology and financial literacy.",
      imageUrl: "https://images.unsplash.com/photo-1583525952490-3195286782d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      tags: ["Entrepreneurship", "Women", "Technology"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#673AB7] mb-12 font-baloo">
            Success Stories
          </h1>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Discover how our solutions are transforming rural industries and creating lasting impact
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-60 relative overflow-hidden">
                  <img 
                    src={study.imageUrl} 
                    alt={study.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "https://via.placeholder.com/400x300?text=Image+Not+Found";
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-[#673AB7] font-baloo">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {study.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="bg-[#E5DEFF] text-[#673AB7] px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button className="w-full bg-[#673AB7] text-white hover:bg-[#5E35B1]">
                    Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
