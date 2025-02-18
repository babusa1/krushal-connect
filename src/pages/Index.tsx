
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Solution from "@/components/Solution";
import IndustryUseCases from "@/components/sections/IndustryUseCases";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Solution />
      <IndustryUseCases />
    </div>
  );
};

export default Index;
