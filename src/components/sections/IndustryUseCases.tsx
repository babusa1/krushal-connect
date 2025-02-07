
import { Leaf } from "lucide-react";

interface UseCaseProps {
  title: string;
  features: string[];
}

const IndustryUseCases = () => {
  const useCases: UseCaseProps[] = [
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
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#673AB7] mb-8">
          Empowering Rural Innovation Across Industries
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
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
  );
};

export default IndustryUseCases;
