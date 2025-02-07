
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Bot, Cpu, Database, LineChart, Brain, Network, ArrowRight } from "lucide-react";
import HeroCarousel from "@/components/hero/HeroCarousel";

const AIPoweredAgents = () => {
  const navigate = useNavigate();

  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1677442135703-1787c823b2b2",
      title: "Empowering Industries with Intelligent AI Agents",
      tagline: "Unleash the transformative power of Artificial Intelligence with cutting-edge solutions"
    },
    {
      url: "https://images.unsplash.com/photo-1676299081847-c837f2deed85",
      title: "Tailored AI Solutions",
      tagline: "Custom AI Agents designed for your specific business needs"
    },
    {
      url: "https://images.unsplash.com/photo-1682686580036-b5e25932ce9a",
      title: "Intelligent Automation",
      tagline: "Streamline processes and enhance efficiency with AI-driven automation"
    }
  ];

  const services = [
    {
      icon: Bot,
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
      icon: Brain,
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
      icon: Database,
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

  const industries = [
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
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <HeroCarousel 
        images={carouselImages}
        buttonConfig={{
          text: "Explore AI Agents",
          onClick: () => navigate("/explore-ai-agents")
        }}
      />

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We create bespoke AI Agents tailored to your unique needs, delivering intelligent automation and game-changing results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <service.icon className="w-12 h-12 text-[#673AB7] mb-6" />
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
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

      {/* Process Section */}
      <section className="py-16 bg-[#F6F6F7]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How We Do It
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
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
            ].map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-6">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#673AB7] to-[#9b87f5] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to explore the possibilities of AI Agents?
          </h2>
          <Button 
            onClick={() => navigate("/contact")}
            className="bg-white text-[#673AB7] hover:bg-gray-100 px-8 py-6 text-lg"
          >
            Contact Us Today <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AIPoweredAgents;
