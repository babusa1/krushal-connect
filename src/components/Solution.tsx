
import { Truck, Rocket, Brain, Blocks, Users, DollarSign, Building2, Globe, BriefcaseBusiness, AlertTriangle, TrendingDown, Clock, Activity } from "lucide-react";

const Solution = () => {
  const industries = [
    {
      title: "Dairy Operations",
      icon: <Building2 className="w-12 h-12 text-[#0EA5E9] mb-4" />,
      description: "End-to-end dairy supply chain solutions",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      title: "Insurance Services",
      icon: <Globe className="w-12 h-12 text-[#0EA5E9] mb-4" />,
      description: "Rural insurance delivery platform",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    },
    {
      title: "Financial Solutions",
      icon: <BriefcaseBusiness className="w-12 h-12 text-[#0EA5E9] mb-4" />,
      description: "Digital financial services for rural India",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Agritech Integration",
      icon: <Globe className="w-12 h-12 text-[#0EA5E9] mb-4" />,
      description: "Smart farming and agriculture solutions",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334"
    }
  ];

  const problems = [
    {
      icon: <Activity className="w-8 h-8 text-[#0EA5E9]" />,
      title: "Productivity Gap",
      description: "Labor productivity lags behind global benchmarks",
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-[#0EA5E9]" />,
      title: "Quality & Safety",
      description: "Milk adulteration and safety concerns persist",
    },
    {
      icon: <Clock className="w-8 h-8 text-[#0EA5E9]" />,
      title: "First Mile Inefficiencies",
      description: "Add 5-15% to rural operation costs",
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-[#0EA5E9]" />,
      title: "Low Milk Productivity",
      description: "India trails global peers by 4-5x",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#F3F4F6] to-white">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-20">
          {/* First Mile as a Service */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-[#1E293B] mb-4 flex items-center justify-center lg:justify-start gap-2">
                <Truck className="w-8 h-8 text-[#0EA5E9]" />
                First Mile as a Service
              </h2>
              <p className="text-[#64748B]">
                Transforming rural operations through innovative solutions
              </p>
            </div>

            {/* Critical Gaps Section */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-[#E2E8F0]">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1E293B] mb-6">Addressing Critical Gaps in Rural India</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {problems.map((problem, index) => (
                    <div 
                      key={index} 
                      className="group p-4 rounded-lg bg-[#F8FAFC] hover:bg-[#F1F5F9] transition-colors duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 p-2 bg-white rounded-lg shadow-md group-hover:shadow-lg transition-shadow">
                          {problem.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#1E293B] mb-1">{problem.title}</h4>
                          <p className="text-sm text-[#64748B]">{problem.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tech Solutions at SPEED */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-[#1E293B] mb-4 flex items-center justify-center lg:justify-start gap-2">
                <Rocket className="w-8 h-8 text-[#0EA5E9]" />
                Tech Solutions at SPEED
              </h2>
              <p className="text-[#64748B]">
                Delivering cutting-edge technology solutions
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-[#E2E8F0]">
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="group p-6 rounded-lg bg-[#F8FAFC] hover:bg-[#F1F5F9] transition-all duration-300">
                    <Brain className="w-8 h-8 text-[#0EA5E9] mb-4" />
                    <h3 className="text-xl font-semibold text-[#1E293B] mb-2">
                      AI-Driven Development
                    </h3>
                    <p className="text-[#64748B]">
                      Accelerated customization using AI tools
                    </p>
                  </div>
                  <div className="group p-6 rounded-lg bg-[#F8FAFC] hover:bg-[#F1F5F9] transition-all duration-300">
                    <Blocks className="w-8 h-8 text-[#0EA5E9] mb-4" />
                    <h3 className="text-xl font-semibold text-[#1E293B] mb-2">
                      Standardized Components
                    </h3>
                    <p className="text-[#64748B]">
                      Pre-built components for rapid deployment
                    </p>
                  </div>
                  <div className="group p-6 rounded-lg bg-[#F8FAFC] hover:bg-[#F1F5F9] transition-all duration-300">
                    <Users className="w-8 h-8 text-[#0EA5E9] mb-4" />
                    <h3 className="text-xl font-semibold text-[#1E293B] mb-2">
                      Client-Oriented Team
                    </h3>
                    <p className="text-[#64748B]">
                      Aligned to client priorities
                    </p>
                  </div>
                  <div className="group p-6 rounded-lg bg-[#F8FAFC] hover:bg-[#F1F5F9] transition-all duration-300">
                    <DollarSign className="w-8 h-8 text-[#0EA5E9] mb-4" />
                    <h3 className="text-xl font-semibold text-[#1E293B] mb-2">
                      Competitive Pricing
                    </h3>
                    <p className="text-[#64748B]">
                      SaaS-like pricing model
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Coverage Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1E293B] mb-4">
            Industry Coverage
          </h2>
          <p className="text-[#64748B] max-w-2xl mx-auto">
            Comprehensive solutions transforming rural India through technology and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-[#E2E8F0]"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={industry.image} 
                  alt={industry.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0EA5E9]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 text-center">
                {industry.icon}
                <h3 className="text-xl font-semibold text-[#1E293B] mb-2">{industry.title}</h3>
                <p className="text-[#64748B]">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
