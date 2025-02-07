
import { LineChart, Target, Users, Leaf } from "lucide-react";

interface SolutionProps {
  icon: JSX.Element;
  title: string;
  features: string[];
}

const SolutionSection = () => {
  const solutions: SolutionProps[] = [
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
  ];

  return (
    <section className="py-16 px-4 bg-[#F8F9FA]">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#673AB7] mb-8">
          Krushal: First Mile as a Service
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
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
  );
};

export default SolutionSection;
