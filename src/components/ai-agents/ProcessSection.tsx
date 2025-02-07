import { Brain, LineChart, Network, Bot } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: <Brain className="w-12 h-12 text-[#673AB7]" />,
      title: "Understand Your Needs",
      description: "Deep analysis of your business challenges and opportunities"
    },
    {
      icon: <LineChart className="w-12 h-12 text-[#673AB7]" />,
      title: "Design Solutions",
      description: "Develop tailored AI Agents for your unique requirements"
    },
    {
      icon: <Network className="w-12 h-12 text-[#673AB7]" />,
      title: "Develop & Deploy",
      description: "Build and deploy reliable and scalable AI Agents"
    },
    {
      icon: <Bot className="w-12 h-12 text-[#673AB7]" />,
      title: "Support & Optimize",
      description: "Continuous monitoring and optimization for peak performance"
    }
  ];

  return (
    <section className="py-16 bg-[#F6F6F7]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          How We Do It
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;