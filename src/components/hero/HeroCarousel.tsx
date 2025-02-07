
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarouselImage {
  url: string;
  title: string;
  tagline: string;
}

interface HeroCarouselProps {
  images: CarouselImage[];
}

const HeroCarousel = ({ images }: HeroCarouselProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-20 mt-16">
      {images.map((image, index) => (
        <div
          key={image.url}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
            currentImage === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${image.url}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      ))}

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-left md:text-center">
            <h1 className="animate-fadeIn text-3xl md:text-5xl font-bold text-white mb-6">
              {images[currentImage].title}
            </h1>
            <p className="animate-fadeIn text-lg md:text-xl text-white/90 mb-8">
              {images[currentImage].tagline}
            </p>
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 mb-8 shadow-lg">
              <p className="text-[#7E69AB] font-medium">
                Democratizing Digital Access with Mobile-First Solutions
                <br />
                Where Digital Transformation Meets Real-World Impact
              </p>
            </div>
            <Button 
              className="animate-fadeIn bg-[#9b87f5] hover:bg-[#8B5CF6] text-white px-8 py-6 rounded-full text-lg font-medium flex items-center gap-2 mx-auto md:mx-0 md:inline-flex"
            >
              Modernize Your Operations <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

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

export default HeroCarousel;
