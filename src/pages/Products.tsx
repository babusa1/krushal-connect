
import React from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { LineChart, Brain, BarChart3 } from "lucide-react";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const Products = () => {
  const navigate = useNavigate();

  const products = [
    {
      title: "Field Operations",
      description: "Transform your field operations with our AI-driven technology solutions",
      icon: <LineChart className="w-12 h-12 text-[#8B5CF6]" />,
      path: "/products/field-operations"
    },
    {
      title: "Personalized Insights",
      description: "Data-driven personalized insights for informed decision making",
      icon: <BarChart3 className="w-12 h-12 text-[#8B5CF6]" />,
      path: "/products/personalized-insights"
    },
    {
      title: "AI Development Tools Suite",
      description: "Intelligent testing, code analysis, and AI-driven SDLC automation tools",
      icon: <Brain className="w-12 h-12 text-[#8B5CF6]" />,
      path: "/products/ai-software"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <PageBreadcrumb 
        items={[
          { label: "Products & Solutions" }
        ]}
      />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
            alt="Products & Solutions"
            className="w-full h-[400px] object-cover"
          />
        </div>
        <div className="container mx-auto px-4 py-24 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Products & Solutions
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Cutting-edge technology solutions designed to transform your business
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="border border-gray-200 shadow-lg hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="mb-4">{product.icon}</div>
                  <CardTitle className="text-xl font-semibold text-[#8B5CF6]">{product.title}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button 
                    onClick={() => navigate(product.path)}
                    className="w-full bg-[#8B5CF6] hover:bg-[#7C3AED]"
                  >
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#9b87f5] to-[#8B5CF6] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Explore Our Solutions?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us to learn more about how our products can transform your business
          </p>
          <Button 
            onClick={() => navigate("/contact")}
            className="bg-white text-[#8B5CF6] hover:bg-gray-100 px-8 py-6 text-lg"
          >
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Products;
