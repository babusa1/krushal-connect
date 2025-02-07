
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0EA5E9]/95 to-transparent" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-left md:text-center">
            <h1 className="animate-fadeIn text-4xl md:text-6xl font-bold text-white mb-6">
              Krushal: Modernizing First Mile & Mass Customization
            </h1>
            <p className="animate-fadeIn text-lg md:text-xl text-white/90 mb-8 delay-100">
              Empowering Farmers, Transforming Rural Economies with AI-Powered Tech Solutions
            </p>
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 mb-8 shadow-lg">
              <p className="text-[#0EA5E9] font-medium mb-4">
                &gt;60% early detection of mastitis, Farm-level antibiotics signalling, and Reduce procurement cost of milk by Rs. 0.36 / liter of milk
              </p>
              <div className="flex flex-col space-y-2 text-[#403E43] italic">
                <p>"You're building AWS for Rural," - Foundation CEO</p>
                <p>"Everyone in the industry needs this," - Dairy CEO</p>
              </div>
            </div>
            <Button 
              className="animate-fadeIn bg-[#1EAEDB] hover:bg-[#0FA0CE] text-white px-8 py-6 rounded-full text-lg font-medium flex items-center gap-2 mx-auto md:mx-0 md:inline-flex transition-colors duration-300"
            >
              Modernize Your Operations <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
