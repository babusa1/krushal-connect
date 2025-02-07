
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ExploreFirstMileServices = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E5DEFF] to-white/50 -z-10" />
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
            First Mile Solutions & Services
          </h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Coming soon - Placeholder for First Mile Services content
          </p>
        </div>
      </section>
    </div>
  );
};

export default ExploreFirstMileServices;
