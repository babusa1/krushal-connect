
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { ArrowRight, Leaf, LineChart, Target, Users } from "lucide-react";

const FirstMileSolutions = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-[#E5DEFF] to-white">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-[#673AB7] mb-4">
            Krushal: Reimagining the First Mile for Underserved Markets
          </h1>
          <p className="text-xl text-[#6E59A5] mb-6 max-w-3xl">
            Unlocking Untapped Potential: Empowering Dairy Farmers and Transforming Rural Economies
          </p>
          <div className="bg-white/80 backdrop-blur rounded-lg p-6 mb-8 inline-block">
            <p className="text-[#7E69AB] font-medium">
              50-100% Higher Margins, Improved Livelihoods, and Sustainable Practices
              <br />
              Revolutionizing India's First Mile, One Farmer at a Time
            </p>
          </div>
          <Button 
            className="bg-[#9b87f5] hover:bg-[#8B5CF6] text-white px-8 py-6 rounded-full text-lg font-medium flex items-center gap-2"
          >
            Modernize Your First Mile Operations <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#673AB7] mb-8">
            Modernize or Languish - Rural India, Ready for a Revolution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "80M", label: "farmers" },
              { number: "1B", label: "consumers" },
              { number: "4-5X", label: "lower yields than global average" },
              { number: "15%", label: "first mile inefficiency losses" }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-[#FF5722] mb-2">{stat.number}</div>
                <div className="text-[#6E59A5]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4 bg-[#F8F9FA]">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#673AB7] mb-8">
            Krushal: First Mile as a Service
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <LineChart className="w-8 h-8 text-[#FF5722]" />,
                title: "50-100% Higher Margins",
                features: ["Farm extension ops", "Cattle nutrition ops", "Procurement ops"]
              },
              {
                icon: <Target className="w-8 h-8 text-[#FF5722]" />,
                title: "Solutions at Speed",
                features: ["Milk data analytics", "Field staff earnings", "Quality management"]
              },
              {
                icon: <Users className="w-8 h-8 text-[#FF5722]" />,
                title: "Comprehensive Support",
                features: ["Training & support", "24/7 assistance", "Expert consultation"]
              }
            ].map((solution, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold text-[#673AB7] mb-4">{solution.title}</h3>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="text-[#6E59A5] flex items-center gap-2">
                      <Leaf className="w-4 h-4 text-[#FF5722]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#673AB7] mb-8">
            Use Cases for First Mile Transformation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Dairy",
                features: ["Farm & nutrition mgmt", "Animal care", "Central operations", "Systems", "Insights"]
              },
              {
                title: "Agribusiness",
                features: ["Farm extension ops", "Farm input adoption", "Procurement ops", "Crop analytics", "Staff earnings"]
              },
              {
                title: "Finance",
                features: ["Field operations", "Loan origination", "Loan monitoring", "Collection ops", "Risk management"]
              },
              {
                title: "Insurance",
                features: ["Field agent ops", "Product reco engine", "Customer & policy", "Monitoring & claims", "Risk management"]
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-[#673AB7] mb-4">{useCase.title}</h3>
                <ul className="space-y-2">
                  {useCase.features.map((feature, idx) => (
                    <li key={idx} className="text-[#6E59A5] flex items-center gap-2">
                      <Leaf className="w-4 h-4 text-[#FF5722]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-16 px-4 bg-[#F8F9FA]">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#673AB7] mb-8">
            Impact in Action: Transforming Rural Livelihoods
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { metric: "80%", label: "Repeat Business", description: "For the ecosystem" },
              { metric: "2x", label: "Margin Increase", description: "For Dairies" },
              { metric: "2-4x", label: "Earnings Growth", description: "For Farmers" }
            ].map((outcome, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl font-bold text-[#FF5722] mb-2">{outcome.metric}</div>
                <div className="text-xl font-semibold text-[#673AB7] mb-2">{outcome.label}</div>
                <div className="text-[#6E59A5]">{outcome.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#673AB7] to-[#9b87f5] text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            First Mile as a Service for Underserved Markets
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join the revolution in rural transformation
          </p>
          <Button 
            className="bg-white text-[#673AB7] hover:bg-[#E5DEFF] px-8 py-6 rounded-full text-lg font-medium flex items-center gap-2 mx-auto"
          >
            Contact Us <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default FirstMileSolutions;
