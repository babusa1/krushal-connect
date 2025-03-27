import React from "react";
import Navigation from "@/components/Navigation";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Banknote,
  Building,
  Calculator,
  ClipboardList,
  TrendingUp,
} from "lucide-react";

const Finance = () => {
  const navigate = useNavigate();

  const heroSection = {
    title: "Empowering Financial Institutions with AI-Driven Solutions",
    description:
      "Revolutionize your finance operations with our cutting-edge AI and machine learning technologies.",
    imageUrl:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  };

  const solutions = [
    {
      title: "AI-Powered Risk Assessment",
      description:
        "Enhance risk management with AI algorithms that analyze vast datasets to predict potential risks and fraud.",
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
    },
    {
      title: "Automated Compliance",
      description:
        "Streamline regulatory compliance with AI-driven tools that ensure adherence to industry standards and reduce manual effort.",
      icon: <ClipboardList className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Fraud Detection",
      description:
        "Detect and prevent fraudulent activities in real-time with AI systems that identify suspicious patterns and anomalies.",
      icon: <Banknote className="w-8 h-8 text-red-500" />,
    },
    {
      title: "Personalized Customer Service",
      description:
        "Improve customer satisfaction with AI-powered chatbots and virtual assistants that provide personalized support and guidance.",
      icon: <Building className="w-8 h-8 text-purple-500" />,
    },
    {
      title: "Algorithmic Trading",
      description:
        "Optimize trading strategies with AI algorithms that analyze market trends and execute trades with precision and speed.",
      icon: <Calculator className="w-8 h-8 text-yellow-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <PageBreadcrumb
        items={[{ label: "Industries" }, { label: "Finance" }]}
      />

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent z-10" />
          <img
            src={heroSection.imageUrl}
            alt={heroSection.title}
            className="w-full h-[500px] object-cover"
          />
        </div>
        <div className="container mx-auto px-4 py-24 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {heroSection.title}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {heroSection.description}
            </p>
            <Button
              onClick={() => navigate("/contact")}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg"
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our AI-Driven Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold flex items-center gap-2">
                    {solution.icon}
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{solution.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Ready to Transform Your Finance Operations?
          </h2>
          <p className="text-xl mb-8">
            Contact us today to learn more about how our AI solutions can
            benefit your financial institution.
          </p>
          <Button
            onClick={() => navigate("/contact")}
            className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 text-lg"
          >
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Finance;
