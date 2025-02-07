
import React from "react";
import { Heart, Users, ChartPie, Stethoscope } from "lucide-react";
import CaseStudyCard from "./CaseStudyCard";

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      region: "Maharashtra",
      challenge: "High healthcare costs for farmers",
      solution: "Implemented animal care plans through vet/paravet ecosystem focusing on preventive care and nutrition",
      outcome: "Reduced animal illness and healthcare costs",
      icon: Heart
    },
    {
      region: "Tamil Nadu",
      challenge: "Dairy struggling with farmer loyalty and milk quantity",
      solution: "Deployed on-field team with farmer helpline for veterinary and advisory services",
      outcome: "Improved practices adoption and higher milk yield",
      icon: Users
    },
    {
      region: "Andhra Pradesh",
      challenge: "Dairy facing milk quality issues",
      solution: "On-field team implementation of nutrition best practices",
      outcome: "Enhanced milk quality standards",
      icon: ChartPie
    },
    {
      region: "Bihar",
      challenge: "Lack of veterinary support for paravet network",
      solution: "Centralized veterinarian service with standard protocols and inventory management",
      outcome: "Improved field staff training and prescription management",
      icon: Stethoscope
    }
  ];

  return (
    <section className="py-16 bg-[#F8F7FF]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} {...study} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
