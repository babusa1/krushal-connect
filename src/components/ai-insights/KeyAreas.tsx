
import { Brain, BarChart3, LineChart, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const KeyAreas = () => {
  const areas = [
    {
      icon: Users,
      title: "Customer Intelligence",
      description: "Gain a 360-degree view of your customers. Understand behavior, preferences, and needs to create personalized experiences."
    },
    {
      icon: Brain,
      title: "Operational Excellence",
      description: "Optimize internal processes and assets for peak performance, reducing costs and maximizing productivity."
    },
    {
      icon: BarChart3,
      title: "Market Intelligence",
      description: "Stay ahead by understanding market trends and competitive landscape to identify new opportunities."
    },
    {
      icon: LineChart,
      title: "Predictive Analytics",
      description: "Make data-driven decisions with advanced forecasting and trend analysis capabilities."
    }
  ];

  return (
    <section className="py-16 bg-[#F8F7FF]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#6E59A5] mb-12">Key Areas of Application</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((item, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="mb-4 w-12 h-12 mx-auto bg-[#E5DEFF] rounded-full flex items-center justify-center group-hover:bg-[#9b87f5] transition-colors duration-300">
                  <div className="text-[#9b87f5] group-hover:text-white transition-colors duration-300">
                    <item.icon />
                  </div>
                </div>
                <h3 className="font-semibold text-[#6E59A5] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyAreas;

