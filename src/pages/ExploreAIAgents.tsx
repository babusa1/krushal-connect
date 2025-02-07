import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Bot } from "lucide-react";

const ExploreAIAgents = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with Background Image */}
      <section className="relative pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
            alt="AI Technology"
            className="w-full h-[500px] object-cover"
          />
        </div>
        <div className="container mx-auto px-4 py-24 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
              Krushal: Pioneering Intelligent AI Agents Across Industries
            </h1>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed animate-fadeIn">
              Unlock seamless automation and efficiency with our custom AI Agents, delivering predictive analytics and intelligent decision-making across diverse industries. Revolutionize your operations with Krushal.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1EAEDB] mb-12">
            Industries We Serve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Dairy",
                description: "Transform your dairy operations with AI-driven solutions:",
                features: [
                  "Automated Herd Monitoring: Continuously track animal health, behavior, and milk production using sensor data, offering early alerts for potential issues.",
                  "Milk Quality Analysis & Prediction: Predict milk quality and detect contamination risks through automated sensor data and trend analysis.",
                  "Smart Feed Management: Optimize feed distribution based on individual animal needs, weather patterns, and production goals, reducing waste and enhancing health.",
                  "Supply Chain & Logistics Optimization: Streamline milk collection, processing, and distribution with AI-powered route optimization, demand prediction, and inventory management."
                ]
              },
              {
                title: "Healthcare",
                description: "Enhance patient care and operational efficiency with intelligent AI Agents:",
                features: [
                  "Virtual Patient Assistants: Provide 24/7 support, schedule appointments, manage medications, and offer personalized health information.",
                  "AI-Powered Diagnostic Support: Assist medical professionals with preliminary diagnosis using patient data, medical images, and research analysis.",
                  "Automated Administrative Tasks: Simplify insurance pre-authorization, medical coding, and report generation, freeing staff for patient-centric care.",
                  "Personalized Treatment Recommendations: Utilize patient history, genetic data, and treatment outcomes to suggest personalized treatment plans."
                ]
              },
              {
                title: "Insurance",
                description: "Revolutionize insurance processes and customer experiences:",
                features: [
                  "Automated Claims Processing: Accelerate claims processing by analyzing documents, verifying information, and detecting fraud.",
                  "Fraud Detection & Prevention: Identify and flag fraudulent claims in real-time, minimizing losses.",
                  "Personalized Policy Recommendations: Offer tailored policies based on customer profiles and risk assessments.",
                  "AI-Driven Risk Assessment: Enhance risk accuracy through comprehensive data analysis for precise underwriting and pricing."
                ]
              },
              {
                title: "Finance & Banking",
                description: "Transform financial services and banking with AI innovation:",
                features: [
                  "AI-Powered Customer Service Chatbots: Deliver instant, personalized support, answer queries, and improve customer satisfaction.",
                  "Fraud Prevention & Security Enhancement: Detect and prevent fraudulent transactions and cyber threats in real-time.",
                  "Personalized Financial Advice & Planning: Provide customized financial advice and investment recommendations.",
                  "Algorithmic Trading & Investment Optimization: Support trading strategies, optimize portfolios, and identify market opportunities."
                ]
              },
              {
                title: "Agritech",
                description: "Drive sustainable agriculture with AI advancements:",
                features: [
                  "Precision Farming & Crop Monitoring: Optimize water, fertilizer, and pesticide use by analyzing real-time data.",
                  "Automated Irrigation & Resource Management: Adjust water usage based on soil conditions, forecasts, and crop needs.",
                  "Pest & Disease Detection & Management: Detect pests and diseases early through image and sensor data analysis.",
                  "Supply Chain Optimization: Enhance logistics, predict demand, and reduce food waste with AI-driven solutions."
                ]
              }
            ].map((industry, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-[#1EAEDB] mb-4">{industry.title}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <ul className="space-y-3">
                  {industry.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <Bot className="w-5 h-5 text-[#1EAEDB] mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#1EAEDB] mb-6">
            Ready to explore the potential of AI Agents for your industry?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact Krushal today to discuss your specific needs and discover how our AI Agent development services can drive innovation and growth for your business.
          </p>
          <Button 
            onClick={() => navigate("/contact")}
            className="bg-[#1EAEDB] hover:bg-[#33C3F0] text-white px-8 py-6 text-lg rounded-full"
          >
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ExploreAIAgents;