
interface OutcomeProps {
  metric: string;
  label: string;
  description: string;
}

const OutcomesSection = () => {
  const outcomes: OutcomeProps[] = [
    { metric: "80%", label: "Repeat Business", description: "For the ecosystem" },
    { metric: "2x", label: "Margin Increase", description: "For Dairies" },
    { metric: "2-4x", label: "Earnings Growth", description: "For Farmers" }
  ];

  return (
    <section className="py-16 px-4 bg-[#F8F9FA]">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#673AB7] mb-8">
          Impact in Action: Transforming Rural Livelihoods
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {outcomes.map((outcome, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-[#FF5722] mb-2">{outcome.metric}</div>
              <div className="text-xl font-semibold text-[#673AB7] mb-2">{outcome.label}</div>
              <div className="text-[#6E59A5]">{outcome.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;
