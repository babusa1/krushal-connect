
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface InsightCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const InsightCard = ({ icon: Icon, title, description }: InsightCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6 text-center">
        <div className="mb-4 w-12 h-12 mx-auto bg-[#E5DEFF] rounded-full flex items-center justify-center group-hover:bg-[#9b87f5] transition-colors duration-300">
          <div className="text-[#9b87f5] group-hover:text-white transition-colors duration-300">
            <Icon />
          </div>
        </div>
        <h3 className="font-semibold text-[#6E59A5] mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default InsightCard;
