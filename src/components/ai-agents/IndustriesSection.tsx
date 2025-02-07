import { Bot, Cpu } from "lucide-react";

interface Industry {
  title: string;
  description: string;
  features: string[];
}

const IndustriesSection = () => {
  const industries: Industry[] = [
    {
      title: "Dairy",
      description: "Transform operations with automated herd monitoring, milk quality analysis, and smart feed management.",
      features: ["Herd Monitoring", "Quality Analysis", "Feed Management", "Supply Chain"]
    },
    {
      title: "Healthcare",
      description: "Enhance patient care with virtual assistants, diagnostic support, and automated administrative tasks.",
      features: ["Virtual Assistants", "Diagnostic Support", "Admin Automation", "Treatment Planning"]
    },
    {
      title: "Insurance",
      description: "Revolutionize operations with automated claims processing and AI-driven risk assessment.",
      features: ["Claims Processing", "Fraud Detection", "Policy Recommendations", "Risk Assessment"]
    },
    {
      title: "Finance",
      description: "Elevate services with customer service chatbots, fraud prevention, and algorithmic trading.",
      features: ["Customer Service", "Fraud Prevention", "Financial Advice", "Trading Optimization"]
    },
    {
      title: "Agritech",
      description: "Drive sustainability with precision farming, automated irrigation, and pest management.",
      features: ["Precision Farming", "Smart Irrigation", "Pest Management", "Supply Chain"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Industries We Serve
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4">{industry.title}</h3>
              <p className="text-gray-600 mb-6">{industry.description}</p>
              <ul className="space-y-2">
                {industry.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <Cpu className="w-4 h-4 text-[#673AB7] mr-2" />
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

export default IndustriesSection;