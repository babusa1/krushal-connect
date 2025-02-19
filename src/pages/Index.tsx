
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Solution from "@/components/Solution";
import IndustryUseCases from "@/components/sections/IndustryUseCases";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#673AB7] mb-8 font-baloo">
          Transforming Rural Industries with AI-Powered Solutions
        </h2>
      </div>
      <Solution />
      <IndustryUseCases />
    </div>
  );
};

export default Index;
