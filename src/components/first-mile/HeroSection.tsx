
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative pt-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1501854140801-50d01698950b"
          alt="First Mile Solutions"
          className="w-full h-[500px] object-cover"
        />
      </div>
      <div className="container mx-auto px-4 py-24 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
            First Mile Solutions & Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-12 animate-fadeIn">
            Driving Excellence through Closed-Loop Partnerships with Dairies & AgriBusiness
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
