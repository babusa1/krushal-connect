
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    {
      url: "https://images.unsplash.com/photo-1595841696146-9c19408648f7?auto=format&fit=crop&w=2000&q=80", // Rural India farmer with cattle
      title: "First Mile Modernization",
      tagline: "Empowering Underserved Markets with Dairy, Agritech, Financial Services & Healthcare Solutions"
    },
    {
      url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
      title: "Mobile First Digital",
      tagline: "Human-Centric Solutions, Seamless Experiences"
    },
    {
      url: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      title: "Insights and Data",
      tagline: "Unlocking the Power of Unified Data"
    },
    {
      url: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
      title: "FutureReady CloudOps",
      tagline: "Automate, Orchestrate, Innovate: Your DevOps Partner"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-20 mt-16">
      {/* Background Image with Overlay */}
      {images.map((image, index) => (
        <div
          key={image.url}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
            currentImage === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      ))}

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-left md:text-center">
            <h1 className="animate-fadeIn text-4xl md:text-6xl font-bold text-white mb-6">
              {images[currentImage].title}
            </h1>
            <p className="animate-fadeIn text-lg md:text-xl text-white/90 mb-8 delay-100">
              {images[currentImage].tagline}
            </p>
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 mb-8 shadow-lg">
              <p className="text-[#7E69AB] font-medium mb-4">
                &gt;60% early detection of mastitis, Farm-level antibiotics signalling, and Reduce procurement cost of milk by Rs. 0.36 / liter of milk
              </p>
              <div className="flex flex-col space-y-2 text-[#6E59A5] italic">
                <p>"You're building AWS for Rural," - Foundation CEO</p>
                <p>"Everyone in the industry needs this," - Dairy CEO</p>
              </div>
            </div>
            <Button 
              className="animate-fadeIn bg-[#9b87f5] hover:bg-[#8B5CF6] text-white px-8 py-6 rounded-full text-lg font-medium flex items-center gap-2 mx-auto md:mx-0 md:inline-flex transition-colors duration-300"
            >
              Modernize Your Operations <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentImage === index ? "bg-white w-4" : "bg-white/50"
            }`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
