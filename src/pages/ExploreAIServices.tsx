
import Navigation from "@/components/Navigation";
import { Brain, ChartLine, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ExploreAIServices = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Users,
      title: "Customer Intelligence",
      description: "Gain a 360-degree view of your customers. Understand their behavior, preferences, and needs to create personalized experiences and build lasting loyalty.",
      bullets: [
        "Deep Customer Understanding: Segment customers based on behavior and needs",
        "Personalized Experiences: Tailor offers and content for maximum impact",
        "Sentiment & Feedback Analysis: Analyze customer opinions from text data",
        "Predictive Churn Reduction: Proactively engage at-risk customers"
      ]
    },
    {
      icon: Brain,
      title: "Operational Excellence",
      description: "Optimize your internal processes and assets for peak performance and efficiency, reducing costs and maximizing productivity.",
      bullets: [
        "Process Optimization: Identify and eliminate operational bottlenecks",
        "Predictive Maintenance & Asset Management: Minimize downtime",
        "Intelligent Supply Chain: Streamline logistics and optimize inventory",
        "Advanced Fraud & Anomaly Detection: Protect your business"
      ]
    },
    {
      icon: Target,
      title: "Market & Competitive Advantage",
      description: "Stay ahead of the competition and identify new opportunities by understanding market trends and your competitive landscape.",
      bullets: [
        "Market Trend Forecasting: Predict market shifts and trends",
        "Competitive Landscape Analysis: Understand competitor strategies",
        "Demand & Pricing Optimization: Maximize revenue with optimized pricing"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with Background Image */}
      <section className="relative pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80"
            alt="AI Data Analytics"
            className="w-full h-[500px] object-cover"
          />
        </div>
        <div className="container mx-auto px-4 py-24 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Transform Data into Strategic Advantage
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-12 animate-fade-in">
              Unlock hidden potential with Krushal's AI-Powered Insights
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#403E43]">
              Krushal: AI-Powered Insight Services
            </h2>
            <p className="text-[#8E9196]">
              Unlock the full potential of your data with our AI-Powered Insight services. We transform complex data into clear, actionable intelligence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all group hover:-translate-y-2 duration-300">
                <service.icon className="w-12 h-12 text-[#1EAEDB] mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-[#8E9196] mb-4 italic">"{service.description}"</p>
                <ul className="space-y-3 text-gray-600">
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-[#1EAEDB] rounded-full"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Call to Action Button */}
          <div className="text-center mt-16">
            <Button
              onClick={() => navigate("/contact")}
              className="bg-[#1EAEDB] hover:bg-[#33C3F0] text-white px-8 py-6 text-lg animate-fade-in hover:scale-105 transition-transform duration-300"
            >
              Get a Free Consultation <ChartLine className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-[#F6F6F7]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#403E43] mb-6">
            Ready to Unlock Your Data's Potential?
          </h2>
          <p className="text-[#8E9196] mb-8 max-w-2xl mx-auto">
            Contact Krushal today to discuss how our AI-Powered Insight services can transform your business.
          </p>
          <Button 
            onClick={() => navigate("/contact")}
            className="bg-[#1EAEDB] hover:bg-[#33C3F0] text-white px-8 py-6 text-lg"
          >
            Request a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ExploreAIServices;
