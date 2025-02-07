
interface StatProps {
  number: string;
  label: string;
}

const MarketOpportunity = () => {
  const stats: StatProps[] = [
    { number: "80M", label: "farmers" },
    { number: "1B", label: "consumers" },
    { number: "4-5X", label: "lower yields than global average" },
    { number: "15%", label: "first mile inefficiency losses" }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#673AB7] mb-8">
          Modernize or Languish - Rural India, Ready for a Revolution
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold text-[#FF5722] mb-2">{stat.number}</div>
              <div className="text-[#6E59A5]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketOpportunity;
