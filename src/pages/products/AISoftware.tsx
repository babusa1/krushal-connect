
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import HeroCarousel from "@/components/hero/HeroCarousel";
import { ArrowRight, Brain, Code, Bug, LineChart, 
         Shield, Database, Rocket, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const AISoftware = () => {
  const navigate = useNavigate();

  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3",
      title: "AI-Powered Development: 10x Productivity",
      tagline: "Transform Your SDLC, Cut Costs, and Deliver Superior Software"
    },
    {
      url: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
      title: "Revolutionizing Software Development",
      tagline: "Built for Today's Development Challenges"
    }
  ];

  const challenges = [
    "Delayed releases and missed deadlines",
    "Costly rework due to defects and miscommunication",
    "Compromised quality and increased risk of critical bugs",
    "Difficulty in maintaining and scaling complex codebases"
  ];

  const features = [
    {
      icon: <Brain className="w-12 h-12 text-[#8B5CF6]" />,
      title: "AI-Driven SDLC",
      description: "Intelligently automates and manages the entire software development lifecycle",
      impact: "40% reduction in time to market"
    },
    {
      icon: <Bug className="w-12 h-12 text-[#8B5CF6]" />,
      title: "AI-Driven Test Management",
      description: "Generates smart test cases and automates test execution",
      impact: "80% reduction in testing effort"
    },
    {
      icon: <Code className="w-12 h-12 text-[#8B5CF6]" />,
      title: "Code Analyzer & Enhancer",
      description: "Automatically identifies and resolves code defects",
      impact: "Significant reduction in technical debt"
    },
    {
      icon: <Database className="w-12 h-12 text-[#8B5CF6]" />,
      title: "Functional Spec Generator",
      description: "Automatically generates comprehensive functional specifications",
      impact: "Reduced rework and faster project kickoff"
    }
  ];

  const impacts = [
    {
      icon: <Rocket className="w-12 h-12 text-white" />,
      title: "Unleash Productivity",
      description: "Automate repetitive tasks and accelerate development cycles"
    },
    {
      icon: <Shield className="w-12 h-12 text-white" />,
      title: "Elevate Quality",
      description: "Detect defects early and enforce coding standards"
    },
    {
      icon: <Bug className="w-12 h-12 text-white" />,
      title: "Streamline Testing",
      description: "Automate test case generation and execution"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-white" />,
      title: "Fortify Regression",
      description: "Automatically identify and prevent regressions"
    }
  ];

  const whyKrushal = [
    {
      title: "AI-First Approach",
      description: "Leverage the latest advancements in artificial intelligence and machine learning"
    },
    {
      title: "Seamless Integration",
      description: "Integrates with your existing development tools and workflows"
    },
    {
      title: "Scalable and Secure",
      description: "Built on a cloud-native architecture for demanding development needs"
    },
    {
      title: "Expert Support",
      description: "Dedicated team of experienced software development and AI experts"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <PageBreadcrumb 
        items={[
          { label: "Products", path: "/about" },
          { label: "AI Software" }
        ]}
      />
      
      <HeroCarousel 
        images={carouselImages}
        buttonConfig={{
          text: "Schedule a Demo",
          onClick: () => navigate("/contact")
        }}
      />

      {/* The Challenge Section */}
      <section className="py-16 bg-[#F6F6F7]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            The Challenge
          </h2>
          <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Traditional software development struggles with increasing complexity, tight deadlines, 
            and the constant pressure to deliver high-quality software. Manual processes, fragmented 
            tools, and limited insights result in:
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {challenges.map((challenge, index) => (
              <div key={index} className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-md">
                <div className="w-2 h-2 bg-[#8B5CF6] rounded-full"></div>
                <p className="text-gray-700">{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Key Features & Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-[#F8F7FF] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="bg-[#8B5CF6] text-white px-4 py-2 rounded-full inline-block">
                  Impact: {feature.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gradient-to-br from-[#9b87f5] to-[#8B5CF6] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Impact on Quality & Productivity
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impacts.map((impact, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-lg p-8 rounded-lg">
                <div className="mb-4 flex justify-center">{impact.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{impact.title}</h3>
                <p className="text-gray-100">{impact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Krushal Section */}
      <section className="py-16 bg-[#F6F6F7]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Krushal?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyKrushal.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-semibold mb-4 text-[#8B5CF6]">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#9b87f5] to-[#8B5CF6] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Revolutionize Your Software Development?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Achieve 10x productivity gains and deliver unbreakable software quality with Krushal's AI-powered platform.
          </p>
          <Button 
            onClick={() => navigate("/contact")}
            className="bg-white text-[#8B5CF6] hover:bg-gray-100 px-8 py-6 text-lg"
          >
            Schedule a Demo Today <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AISoftware;
