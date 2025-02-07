import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { ArrowRight, Leaf, LineChart, Target, Users } from "lucide-react";
import { useEffect, useState } from "react";

const FirstMileSolutions = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    {
      url: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac",
      title: "Dairy Solutions",
      tagline: "Transforming dairy operations with modern first-mile solutions"
    },
    {
      url: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937",
      title: "Agritech Innovation",
      tagline: "Empowering farmers with cutting-edge agricultural technology"
    },
    {
      url: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
      title: "Insurance Services",
      tagline: "Secure futures with innovative insurance solutions"
    },
    {
      url: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc",
      title: "Banking Solutions",
      tagline: "Revolutionizing rural banking accessibility"
    },
    {
      url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
      title: "Healthcare Access",
      tagline: "Bridging healthcare gaps in rural communities"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with Carousel */}
      <section className="relative min-h-[90vh] flex items-center justify-center py-20 mt-16">
        {/* Background Images with Overlay */}
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
                  Krushal: Reimagining the First Mile for Underserved Markets
                  <br />
                  Unlocking Untapped Potential and Transforming Rural Economies
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

      {/* Market Opportunity Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#673AB7] mb-8">
            Modernize or Languish - Rural India, Ready for a Revolution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "80M", label: "farmers" },
              { number: "1B", label: "consumers" },
              { number: "4-5X", label: "lower yields than global average" },
              { number: "15%", label: "first mile inefficiency losses" }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-[#FF5722] mb-2">{stat.number}</div>
                <div className="text-[#6E59A5]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4 bg-[#F8F9FA]">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#673AB7] mb-8">
            Krushal: First Mile as a Service
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <LineChart className="w-8 h-8 text-[#FF5722]" />,
                title: "50-100% Higher Margins",
                features: ["Farm extension ops", "Cattle nutrition ops", "Procurement ops"]
              },
              {
                icon: <Target className="w-8 h-8 text-[#FF5722]" />,
                title: "Solutions at Speed",
                features: ["Milk data analytics", "Field staff earnings", "Quality management"]
              },
              {
                icon: <Users className="w-8 h-8 text-[#FF5722]" />,
                title: "Comprehensive Support",
                features: ["Training & support", "24/7 assistance", "Expert consultation"]
              }
            ].map((solution, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold text-[#673AB7] mb-4">{solution.title}</h3>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="text-[#6E59A5] flex items-center gap-2">
                      <Leaf className="w-4 h-4 text-[#FF5722]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section - Updated Heading */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#673AB7] mb-8">
            Empowering Rural Innovation Across Industries
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Dairy",
                features: ["Farm & nutrition mgmt", "Animal care", "Central operations", "Systems", "Insights"]
              },
              {
                title: "Agribusiness",
                features: ["Farm extension ops", "Farm input adoption", "Procurement ops", "Crop analytics", "Staff earnings"]
              },
              {
                title: "Finance",
                features: ["Field operations", "Loan origination", "Loan monitoring", "Collection ops", "Risk management"]
              },
              {
                title: "Insurance",
                features: ["Field agent ops", "Product reco engine", "Customer & policy", "Monitoring & claims", "Risk management"]
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-[#673AB7] mb-4">{useCase.title}</h3>
                <ul className="space-y-2">
                  {useCase.features.map((feature, idx) => (
                    <li key={idx} className="text-[#6E59A5] flex items-center gap-2">
                      <Leaf className="w-4 h-4 text-[#FF5722]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-16 px-4 bg-[#F8F9FA]">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#673AB7] mb-8">
            Impact in Action: Transforming Rural Livelihoods
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { metric: "80%", label: "Repeat Business", description: "For the ecosystem" },
              { metric: "2x", label: "Margin Increase", description: "For Dairies" },
              { metric: "2-4x", label: "Earnings Growth", description: "For Farmers" }
            ].map((outcome, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl font-bold text-[#FF5722] mb-2">{outcome.metric}</div>
                <div className="text-xl font-semibold text-[#673AB7] mb-2">{outcome.label}</div>
                <div className="text-[#6E59A5]">{outcome.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#673AB7] to-[#9b87f5] text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            First Mile as a Service for Underserved Markets
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join the revolution in rural transformation
          </p>
          <Button 
            className="bg-white text-[#673AB7] hover:bg-[#E5DEFF] px-8 py-6 rounded-full text-lg font-medium flex items-center gap-2 mx-auto"
          >
            Contact Us <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default FirstMileSolutions;
