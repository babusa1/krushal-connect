
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface SuccessStoryProps {
  icon: LucideIcon;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  outcome: string;
}

const SuccessStoryCard = ({ icon: Icon, client, industry, challenge, solution, outcome }: SuccessStoryProps) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="mb-4 w-12 h-12 bg-[#E5DEFF] rounded-full flex items-center justify-center">
          <div className="text-[#9b87f5]"><Icon /></div>
        </div>
        <h3 className="text-xl font-semibold text-[#6E59A5] mb-2">{client}</h3>
        <p className="text-sm text-gray-500 mb-4">Industry: {industry}</p>
        <div className="space-y-2">
          <p className="text-sm"><span className="font-semibold">Challenge:</span> {challenge}</p>
          <p className="text-sm"><span className="font-semibold">Solution:</span> {solution}</p>
          <p className="text-sm"><span className="font-semibold">Outcome:</span> {outcome}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SuccessStoryCard;
