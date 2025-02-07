
import React from "react";
import { BookOpen, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface InsightProps {
  title: string;
  description: string;
  date: string;
  type: "blog" | "case-study";
}

const InsightsSection = () => {
  const insights: InsightProps[] = [
    {
      title: "Digital Transformation in Rural Agriculture",
      description: "How digital solutions are revolutionizing farming practices and improving yields.",
      date: "March 2024",
      type: "blog"
    },
    {
      title: "Dairy Farm Optimization Success Story",
      description: "A case study on implementing digital solutions for dairy farm management.",
      date: "February 2024",
      type: "case-study"
    },
    {
      title: "The Future of AgriTech",
      description: "Exploring upcoming trends in agricultural technology and their impact.",
      date: "March 2024",
      type: "blog"
    },
    {
      title: "Maharashtra Farming Community Success",
      description: "How digital adoption transformed a farming community's productivity.",
      date: "January 2024",
      type: "case-study"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#1EAEDB] mb-4">Insights</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Discover the latest trends, success stories, and insights from our experience in transforming rural businesses.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((insight, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4">
                  {insight.type === "blog" ? (
                    <BookOpen className="w-8 h-8 text-[#1EAEDB]" />
                  ) : (
                    <FileText className="w-8 h-8 text-[#1EAEDB]" />
                  )}
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-[#E5F7FB] text-[#1EAEDB] text-sm font-medium mb-4">
                  {insight.type === "blog" ? "Blog" : "Case Study"}
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">{insight.title}</h3>
                <p className="text-gray-600 mb-4">{insight.description}</p>
                <p className="text-sm text-gray-500">{insight.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
