
import { Brain, Network, Signal } from "lucide-react";
import AIApproachCard from "./AIApproachCard";

const TransformData = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-3xl font-bold text-primary mb-6">Transform Data into Your Competitive Advantage</h2>
          <p className="text-gray-700 mb-8">
            In today's fast-paced world, data is your most valuable asset, but only if you can unlock its hidden potential. AI-Powered Insights are the key. We use cutting-edge Artificial Intelligence to sift through the noise and deliver clear, actionable intelligence, enabling your business to make smarter decisions, faster.
          </p>
          <h3 className="text-2xl font-semibold text-primary mb-4">Our AI-Driven Approach</h3>
          <div className="space-y-6">
            <AIApproachCard
              icon={Brain}
              title="Artificial Intelligence (AI): Smarter, Faster Insights"
              description="Leverage AI to analyze massive datasets at superhuman speed. We process complex data to reveal hidden patterns and surface insights you'd otherwise miss."
            />
            <AIApproachCard
              icon={Network}
              title="Machine Learning (ML): Evolving Insights for Business Growth"
              description="Move beyond static reports. ML systems learn from your data, constantly refining accuracy and prediction. Insights become sharper and more relevant as your business evolves."
            />
            <AIApproachCard
              icon={Signal}
              title="Natural Language Processing (NLP): Deep Customer Understanding"
              description="Unlock the voice of your customer. NLP analyzes text data from feedback to social media, revealing sentiment, trends, and a deeper understanding of your market."
            />
          </div>
          
          <div className="mt-8 p-6 bg-[#F8F7FF] rounded-lg border border-[#E5DEFF]">
            <h3 className="text-2xl font-semibold text-primary mb-4">Impact: Strategic Advantage, Data-Driven Success</h3>
            <p className="text-gray-700">
              Krushal's AI Insights transform data into your strategic weapon. Decide with confidence, optimize operations, deeply understand customers, and unlock new growth opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformData;
