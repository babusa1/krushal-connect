
import { Truck, Rocket, Brain, Blocks, Users, DollarSign, Award, Handshake, AlertTriangle, TrendingDown, Clock, Activity } from "lucide-react";

const Solution = () => {
  const problems = [
    {
      icon: <Activity className="w-8 h-8 text-indigo-500" />,
      title: "Productivity Gap",
      description: "Labor productivity lags behind global benchmarks",
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-indigo-500" />,
      title: "Quality & Safety",
      description: "Milk adulteration and safety concerns persist",
    },
    {
      icon: <Clock className="w-8 h-8 text-indigo-500" />,
      title: "First Mile Inefficiencies",
      description: "Add 5-15% to rural operation costs",
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-indigo-500" />,
      title: "Low Milk Productivity",
      description: "India trails global peers by 4-5x",
    },
  ];

  const industries = [
    {
      title: "Dairy Operations",
      image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac",
      description: "End-to-end dairy supply chain solutions"
    },
    {
      title: "Insurance Services",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
      description: "Rural insurance delivery platform"
    },
    {
      title: "Financial Solutions",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0",
      description: "Digital financial services for rural India"
    },
    {
      title: "Agritech Integration",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      description: "Smart farming and agriculture solutions"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#F1F0FB] to-white">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* First Mile as a Service */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-[#8B5CF6] mb-4 flex items-center justify-center lg:justify-start gap-2">
                <Truck className="w-8 h-8" />
                First Mile as a Service
              </h2>
              <p className="text-gray-600">
                Comprehensive solutions for Dairy, Insurance, Finance, and Agritech sectors
              </p>
            </div>

            {/* Industry Coverage Section */}
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E5DEFF]">
              <h3 className="text-xl font-semibold text-[#8B5CF6] mb-6">Industry Coverage</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industries.map((industry, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-lg hover:shadow-xl transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={industry.image} 
                        alt={industry.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#8B5CF6]/90 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h4 className="font-semibold text-lg mb-1">{industry.title}</h4>
                      <p className="text-sm opacity-90">{industry.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Critical Gaps Section */}
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E5DEFF]">
              <h3 className="text-xl font-semibold text-[#8B5CF6] mb-4">Addressing Critical Gaps in Rural India</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {problems.map((problem, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F1F0FB] transition-colors">
                    <div className="flex-shrink-0">{problem.icon}</div>
                    <div>
                      <h4 className="font-semibold text-[#8B5CF6]">{problem.title}</h4>
                      <p className="text-sm text-gray-600">{problem.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tech Solutions at SPEED */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-[#8B5CF6] mb-4 flex items-center justify-center lg:justify-start gap-2">
                <Rocket className="w-8 h-8" />
                Tech Solutions at SPEED
              </h2>
              <p className="text-gray-600">
                How we deliver cutting-edge technology solutions
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="Tech Solutions"
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E5DEFF]">
                  <Brain className="w-8 h-8 text-[#D946EF] mb-4" />
                  <h3 className="text-xl font-semibold text-[#8B5CF6] mb-2">
                    AI-Driven Development
                  </h3>
                  <p className="text-gray-600">
                    Accelerated customization using AI tools for tailored solutions
                  </p>
                </div>
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E5DEFF]">
                  <Blocks className="w-8 h-8 text-[#D946EF] mb-4" />
                  <h3 className="text-xl font-semibold text-[#8B5CF6] mb-2">
                    Standardized Components
                  </h3>
                  <p className="text-gray-600">
                    Pre-built components, libraries, and frameworks for rapid deployment
                  </p>
                </div>
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E5DEFF]">
                  <Users className="w-8 h-8 text-[#D946EF] mb-4" />
                  <h3 className="text-xl font-semibold text-[#8B5CF6] mb-2">
                    Client-Oriented Team
                  </h3>
                  <p className="text-gray-600">
                    A team trained to use the latest tools and align to client priorities
                  </p>
                </div>
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E5DEFF]">
                  <DollarSign className="w-8 h-8 text-[#D946EF] mb-4" />
                  <h3 className="text-xl font-semibold text-[#8B5CF6] mb-2">
                    Competitive Pricing
                  </h3>
                  <p className="text-gray-600">
                    SaaS-like pricing with custom solutions tailored to client needs
                  </p>
                </div>
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E5DEFF]">
                  <Award className="w-8 h-8 text-[#D946EF] mb-4" />
                  <h3 className="text-xl font-semibold text-[#8B5CF6] mb-2">
                    People Excellence
                  </h3>
                  <p className="text-gray-600">
                    Client-centric, prioritized, continuous improvement
                  </p>
                </div>
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E5DEFF]">
                  <Handshake className="w-8 h-8 text-[#D946EF] mb-4" />
                  <h3 className="text-xl font-semibold text-[#8B5CF6] mb-2">
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
      </div>
    </section>
  );
};

export default Solution;
