import React from "react";
import Navigation from "@/components/Navigation";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const AISoftware = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <PageBreadcrumb 
        items={[
          { label: "Products & Solutions", path: "/products" },
          { label: "AI Software" }
        ]}
      />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475"
            alt="AI Software"
            className="w-full h-[400px] object-cover"
          />
        </div>
        <div className="container mx-auto px-4 py-24 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Development Tools Suite
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Intelligent testing, code analysis, and AI-driven SDLC automation tools
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Intelligent Testing</h3>
              <p className="text-gray-700">Automated testing with AI-driven insights to identify and fix bugs faster.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Code Analysis</h3>
              <p className="text-gray-700">Advanced code analysis tools to improve code quality and maintainability.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">SDLC Automation</h3>
              <p className="text-gray-700">Automate your software development lifecycle with AI-powered tools.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Benefit 1 */}
            <div className="p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Faster Development</h3>
              <p className="text-gray-700">Accelerate your development process with AI-driven automation.</p>
            </div>

            {/* Benefit 2 */}
            <div className="p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Improved Code Quality</h3>
              <p className="text-gray-700">Enhance code quality with intelligent analysis and testing tools.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#9b87f5] to-[#8B5CF6] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Revolutionize Your Development Process?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us to learn more about how our AI Development Tools Suite can transform your software development lifecycle.
          </p>
          <button 
            onClick={() => window.location.href = '/contact'}
            className="bg-white text-[#8B5CF6] hover:bg-gray-100 px-8 py-6 text-lg rounded-full"
          >
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default AISoftware;
