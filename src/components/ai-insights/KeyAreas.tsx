
import { ChartBar, ChartLine, Target, Users } from "lucide-react";
import InsightCard from "./InsightCard";

const KeyAreas = () => {
  const areas = [
    {
      icon: Users,
      title: "Consumer Insights",
      description: "Analyzing consumer behavior to tailor products and services."
    },
    {
      icon: Target,
      title: "Marketing Insights",
      description: "Optimizing campaigns to reach the right audience with personalized messages."
    },
    {
      icon: ChartBar,
      title: "Product Insights",
      description: "Improving product development by identifying market gaps and needs."
    },
    {
      icon: ChartLine,
      title: "Predictive Analytics",
      description: "Forecasting customer behavior and business outcomes."
    }
  ];

  return (
    <section className="py-16 bg-[#F8F7FF]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">Key Areas of Application</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((item, index) => (
            <InsightCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyAreas;
