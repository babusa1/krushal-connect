
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-[#0EA5E9]/10 to-white py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="animate-fadeIn text-4xl md:text-6xl font-bold text-[#0EA5E9] mb-6">
            Krushal: Modernizing the First Mile
          </h1>
          <p className="animate-fadeIn text-lg md:text-xl text-[#403E43] mb-8 delay-100">
            Empowering Farmers, Transforming Rural Economies with AI-Powered Tech Solutions
          </p>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 mb-8 shadow-lg">
            <p className="text-[#0EA5E9] font-medium mb-4">
              &gt;60% early detection of mastitis, Farm-level antibiotics signalling, and Reduce procurement cost of milk by Rs. 0.36 / liter of milk
            </p>
            <div className="flex flex-col space-y-2 text-[#403E43] italic">
              <p>"You're building AWS for Rural," - Foundation CEO</p>
              <p>"Everyone in the industry needs this," - Dairy CEO</p>
            </div>
          </div>
          <Button 
            className="animate-fadeIn bg-[#1EAEDB] hover:bg-[#0FA0CE] text-white px-8 py-6 rounded-full text-lg font-medium flex items-center gap-2 mx-auto transition-colors duration-300"
          >
            Modernize Your Operations <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
