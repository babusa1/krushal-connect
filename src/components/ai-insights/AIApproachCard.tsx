
import { LucideIcon } from "lucide-react";

interface AIApproachCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const AIApproachCard = ({ icon: Icon, title, description }: AIApproachCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-[#E5DEFF] rounded-full">
          <Icon className="w-8 h-8 text-[#9b87f5]" />
        </div>
        <div>
          <h4 className="text-xl font-semibold text-[#6E59A5] mb-2">{title}</h4>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AIApproachCard;
