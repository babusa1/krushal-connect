import { Bot, Brain, Database } from "lucide-react";

interface ServiceProps {
  icon: JSX.Element;
  title: string;
  description: string;
  features: string[];
}

const ServicesSection = () => {
  const services = [
    {
      icon: <Bot className="w-12 h-12 text-[#673AB7]" />,
      title: "AI Agent Development",
      description: "Custom AI Agents designed to meet your specific business needs across various industries.",
      features: [
        "Natural Language Processing",
        "Machine Learning Integration",
        "Automated Decision Making",
        "Real-time Data Processing"
      ]
    },
    {
      icon: <Brain className="w-12 h-12 text-[#673AB7]" />,
      title: "Intelligent Automation",
      description: "Implement AI-driven automation to streamline processes, reduce costs, and enhance efficiency.",
      features: [
        "Process Optimization",
        "Workflow Automation",
        "Resource Management",
        "Performance Monitoring"
      ]
    },
    {
      icon: <Database className="w-12 h-12 text-[#673AB7]" />,
      title: "Data-Driven Insights",
      description: "Leverage AI to analyze vast datasets, providing actionable insights and improving decision-making.",
      features: [
        "Predictive Analytics",
        "Pattern Recognition",
        "Trend Analysis",
        "Strategic Recommendations"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#673AB7] mb-8">
          What We Do
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#673AB7] mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <Bot className="w-4 h-4 text-[#673AB7] mr-2" />
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

export default ServicesSection;