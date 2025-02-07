
import { Truck, Rocket, Brain, Blocks, Users, DollarSign, Award, Handshake } from "lucide-react";

const Solution = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-primary-light to-white">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* First Mile as a Service */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-primary mb-4 flex items-center justify-center lg:justify-start gap-2">
                <Truck className="w-8 h-8" />
                First Mile as a Service
              </h2>
              <p className="text-gray-600">
                Comprehensive solutions for Dairy, Insurance, Finance, and Agritech sectors
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <h3 className="text-xl font-semibold text-primary mb-4">Industry Coverage</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  Dairy Operations
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  Insurance Services
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  Financial Solutions
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  Agritech Integration
                </li>
              </ul>
            </div>
          </div>

          {/* Tech Solutions at SPEED */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-primary mb-4 flex items-center justify-center lg:justify-start gap-2">
                <Rocket className="w-8 h-8" />
                Tech Solutions at SPEED
              </h2>
              <p className="text-gray-600">
                How we deliver cutting-edge technology solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <Brain className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">
                  AI-Driven Development
                </h3>
                <p className="text-gray-600">
                  Accelerated customization using AI tools for tailored solutions
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <Blocks className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Standardized Components
                </h3>
                <p className="text-gray-600">
                  Pre-built components, libraries, and frameworks for rapid deployment
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <Users className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Client-Oriented Team
                </h3>
                <p className="text-gray-600">
                  A team trained to use the latest tools and align to client priorities
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <DollarSign className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Competitive Pricing
                </h3>
                <p className="text-gray-600">
                  SaaS-like pricing with custom solutions tailored to client needs
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <Award className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">
                  People Excellence
                </h3>
                <p className="text-gray-600">
                  Client-centric, prioritized, continuous improvement
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <Handshake className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Flexible Engagement
                </h3>
                <p className="text-gray-600">
                  Outcome-driven services or collaborative co-development, adaptable to client needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
