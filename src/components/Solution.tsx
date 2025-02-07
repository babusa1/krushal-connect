
import { Database, Code, Brain, Layers } from "lucide-react";

const Solution = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary to-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            First-Mile-as-a-Service: An AWS for Rural
          </h2>
          <p className="text-lg text-gray-600">
            A village-level capability anchored by milk, delivering Field Ops, Insights, Digitization, and Capital Access
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <Database className="w-10 h-10 text-primary-accent mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">
              Data Pipelines
            </h3>
            <p className="text-gray-600">
              Robust infrastructure for collecting and processing rural data
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <Brain className="w-10 h-10 text-primary-accent mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">
              AI Orchestration
            </h3>
            <p className="text-gray-600">
              Advanced AI systems for optimization and decision-making
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <Layers className="w-10 h-10 text-primary-accent mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">
              Microservices
            </h3>
            <p className="text-gray-600">
              Scalable architecture for flexible service delivery
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <Code className="w-10 h-10 text-primary-accent mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">
              Low-Code Framework
            </h3>
            <p className="text-gray-600">
              Rapid development platform for custom solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
