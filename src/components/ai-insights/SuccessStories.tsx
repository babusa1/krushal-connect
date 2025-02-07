
import { ChartLine, Database } from "lucide-react";
import SuccessStoryCard from "./SuccessStoryCard";

const SuccessStories = () => {
  const stories = [
    {
      client: "Dairy Farm",
      industry: "Dairy",
      challenge: "Needed to optimize milk production and reduce costs.",
      solution: "Implemented an AI-powered system to monitor cow health and environmental conditions.",
      outcome: "Increased milk production by 18% and reduced labor costs.",
      icon: Database
    },
    {
      client: "AgriTech Company",
      industry: "Agritech",
      challenge: "Improve soil health and increase crop yields.",
      solution: "Utilized AI-driven analytics to assess soil composition.",
      outcome: "Increased crop yields by 20% and reduced fertilizer usage by 15%.",
      icon: ChartLine
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <SuccessStoryCard
              key={index}
              {...story}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
