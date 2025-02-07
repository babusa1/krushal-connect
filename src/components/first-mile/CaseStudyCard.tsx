
import React from "react";
import { LucideIcon } from "lucide-react";

interface CaseStudyCardProps {
  region: string;
  challenge: string;
  solution: string;
  outcome: string;
  icon: LucideIcon;
}

const CaseStudyCard = ({ region, challenge, solution, outcome, icon: Icon }: CaseStudyCardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <Icon className="w-12 h-12 text-[#1EAEDB] mb-4" />
      <div className="inline-block px-3 py-1 rounded-full bg-[#E5F7FB] text-[#1EAEDB] text-sm font-medium mb-4">
        {region}
      </div>
      <h3 className="font-semibold mb-3 text-gray-900">Challenge:</h3>
      <p className="text-gray-600 mb-4">{challenge}</p>
      <h3 className="font-semibold mb-3 text-gray-900">Solution:</h3>
      <p className="text-gray-600 mb-4">{solution}</p>
      <h3 className="font-semibold mb-3 text-gray-900">Outcome:</h3>
      <p className="text-gray-600">{outcome}</p>
    </div>
  );
};

export default CaseStudyCard;
