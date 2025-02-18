
import { Truck, Rocket, Brain, Blocks, Users, DollarSign, Building2, Globe, BriefcaseBusiness, AlertTriangle, TrendingDown, Clock, Activity } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Solution = () => {
  const navigate = useNavigate();
  
  const industries = [
    {
      title: "Dairy",
      icon: <Building2 className="w-12 h-12 text-[#673AB7] mb-4" />,
      description: "First Mile Solutions for a Sustainable Dairy Future",
      image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac",
      route: "/industries/dairy"
    },
    {
      title: "Insurance Services",
      icon: <Globe className="w-12 h-12 text-[#673AB7] mb-4" />,
      description: "AI-Powered Solutions for Rural Insurance",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
      route: "/industries/insurance"
    },
    {
      title: "Finance",
      icon: <BriefcaseBusiness className="w-12 h-12 text-[#673AB7] mb-4" />,
      description: "Empowering Rural Communities Through Innovative Financial Solutions",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      route: "/industries/finance"
    },
    {
      title: "Agritech",
      icon: <Globe className="w-12 h-12 text-[#673AB7] mb-4" />,
      description: "Data-Driven Farming Solutions for Enhanced Productivity",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      route: "/industries/agritech"
    }
  ];

  const problems = [
    {
      icon: <Activity className="w-8 h-8 text-[#673AB7]" />,
      title: "Productivity Gap",
      description: "Labor productivity lags behind global benchmarks",
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-[#FF5722]" />,
      title: "Quality & Safety",
      description: "Milk adulteration and safety concerns persist",
    },
    {
      icon: <Clock className="w-8 h-8 text-[#673AB7]" />,
      title: "First Mile Inefficiencies",
      description: "Add 5-15% to rural operation costs",
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-[#FF5722]" />,
      title: "Low Milk Productivity",
      description: "India trails global peers by 4-5x",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-20">
          {/* First Mile as a Service */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-[#673AB7] mb-4 flex items-center justify-center lg:justify-start gap-2">
                <Truck className="w-8 h-8 text-[#FF5722]" />
                First Mile as a Service
              </h2>
              <p className="text-[#8E9196]">
                Transforming rural operations through innovative solutions
              </p>
            </div>

            {/* Critical Gaps Section */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-[#E2E8F0]">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#673AB7] mb-6">Addressing Critical Gaps in Rural India</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {problems.map((problem, index) => (
                    <div 
                      key={index} 
                      className="group p-4 rounded-lg bg-[#F8FAFC] hover:bg-[#EDE7F6] transition-colors duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 p-2 bg-white rounded-lg shadow-md group-hover:shadow-lg transition-shadow">
                          {problem.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#673AB7] mb-1">{problem.title}</h4>
                          <p className="text-sm text-[#8E9196]">{problem.description}</p>
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
              <h2 className="text-3xl font-bold text-[#673AB7] mb-4 flex items-center justify-center lg:justify-start gap-2">
                <Rocket className="w-8 h-8 text-[#FF5722]" />
                Tech Solutions at SPEED
              </h2>
              <p className="text-[#8E9196]">
                Delivering cutting-edge technology solutions
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-[#E2E8F0]">
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="group p-6 rounded-lg bg-[#F8FAFC] hover:bg-[#EDE7F6] transition-all duration-300">
                    <Brain className="w-8 h-8 text-[#FF5722] mb-4" />
                    <h3 className="text-xl font-semibold text-[#673AB7] mb-2">
                      AI-Driven Development
                    </h3>
                    <p className="text-[#8E9196]">
                      Accelerated customization using AI tools
                    </p>
                  </div>
                  <div className="group p-6 rounded-lg bg-[#F8FAFC] hover:bg-[#EDE7F6] transition-all duration-300">
                    <Blocks className="w-8 h-8 text-[#673AB7] mb-4" />
                    <h3 className="text-xl font-semibold text-[#673AB7] mb-2">
                      Standardized Components
                    </h3>
                    <p className="text-[#8E9196]">
                      Pre-built components for rapid deployment
                    </p>
                  </div>
                  <div className="group p-6 rounded-lg bg-[#F8FAFC] hover:bg-[#EDE7F6] transition-all duration-300">
                    <Users className="w-8 h-8 text-[#FF5722] mb-4" />
                    <h3 className="text-xl font-semibold text-[#673AB7] mb-2">
                      Client-Oriented Team
                    </h3>
                    <p className="text-[#8E9196]">
                      Aligned to client priorities
                    </p>
                  </div>
                  <div className="group p-6 rounded-lg bg-[#F8FAFC] hover:bg-[#EDE7F6] transition-all duration-300">
                    <DollarSign className="w-8 h-8 text-[#673AB7] mb-4" />
                    <h3 className="text-xl font-semibold text-[#673AB7] mb-2">
                      Competitive Pricing
                    </h3>
                    <p className="text-[#8E9196]">
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
          <h2 className="text-4xl font-bold text-[#673AB7] mb-4">
            Industry Coverage
          </h2>
          <p className="text-[#8E9196] max-w-2xl mx-auto">
            Comprehensive solutions transforming rural India through technology and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-[#E2E8F0] cursor-pointer"
              onClick={() => navigate(industry.route)}
              role="button"
              aria-label={`Learn more about ${industry.title}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={industry.image} 
                  alt={industry.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#673AB7]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 text-center">
                {industry.icon}
                <h3 className="text-xl font-semibold text-[#673AB7] mb-2">{industry.title}</h3>
                <p className="text-[#8E9196]">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
