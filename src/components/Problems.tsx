
import { AlertTriangle, TrendingDown, Clock, Activity } from "lucide-react";

const problems = [
  {
    icon: <Activity className="w-8 h-8 text-[#9b87f5]" />,
    title: "Productivity Gap",
    description: "Labor productivity lags behind global benchmarks",
  },
  {
    icon: <AlertTriangle className="w-8 h-8 text-[#9b87f5]" />,
    title: "Quality & Safety",
    description: "Milk adulteration and safety concerns persist",
  },
  {
    icon: <Clock className="w-8 h-8 text-[#9b87f5]" />,
    title: "First Mile Inefficiencies",
    description: "Add 5-15% to rural operation costs",
  },
  {
    icon: <TrendingDown className="w-8 h-8 text-[#9b87f5]" />,
    title: "Low Milk Productivity",
    description: "India trails global peers by 4-5x",
  },
];

const Problems = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#6E59A5] mb-4">
            Addressing Critical Gaps in Rural India
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#D6BCFA]"
            >
              <div className="mb-4">{problem.icon}</div>
              <h3 className="text-xl font-semibold text-[#7E69AB] mb-2">
                {problem.title}
              </h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;

