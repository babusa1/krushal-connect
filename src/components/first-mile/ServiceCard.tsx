
import React from "react";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceItem {
  subtitle: string;
  points: string[];
}

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  items: ServiceItem[];
}

const ServiceCard = ({ title, description, icon: Icon, items }: ServiceCardProps) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-[#1EAEDB] transition-all">
      <Icon className="w-12 h-12 text-[#1EAEDB] mb-6" />
      <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      {items.map((item, idx) => (
        <div key={idx} className="mb-6">
          <h4 className="font-semibold text-[#1EAEDB] mb-3">{item.subtitle}</h4>
          <ul className="space-y-2">
            {item.points.map((point, pointIdx) => (
              <li key={pointIdx} className="flex items-start space-x-2 text-gray-600">
                <ArrowRight className="w-4 h-4 mt-1 text-[#1EAEDB]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
