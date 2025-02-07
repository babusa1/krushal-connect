
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-white to-secondary py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="animate-fadeIn text-4xl md:text-6xl font-bold text-primary mb-6">
            Krushal: Modernizing the First Mile
          </h1>
          <p className="animate-fadeIn text-lg md:text-xl text-gray-600 mb-8 delay-100">
            Empowering Farmers, Transforming Rural Economies with AI-Powered Tech Solutions
          </p>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 mb-8 shadow-lg">
            <p className="text-primary font-medium mb-4">
              >60% early detection of mastitis, Farm-level antibiotics signalling, and Reduce procurement cost of milk by Rs. 0.36 / liter of milk
            </p>
            <div className="flex flex-col space-y-2 text-gray-600 italic">
              <p>"You're building AWS for Rural," - Foundation CEO</p>
              <p>"Everyone in the industry needs this," - Dairy CEO</p>
            </div>
          </div>
          <Button 
            className="animate-fadeIn bg-primary-accent hover:bg-primary-accent/90 text-white px-8 py-6 rounded-full text-lg font-medium flex items-center gap-2 mx-auto"
          >
            Modernize Your Operations <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
