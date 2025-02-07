
import React from "react";
import { Tractor, Building2, LineChart } from "lucide-react";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const services = [
    {
      title: "Field Services",
      description: "Comprehensive farm and animal care management",
      icon: Tractor,
      items: [
        {
          subtitle: "Farm Care Plan",
          points: [
            "Farm, Herd & Manure Management",
            "Health Advisory Services",
            "Nutrition Advisory Programs"
          ]
        },
        {
          subtitle: "Animal Care Plan",
          points: [
            "Preventive Care Solutions",
            "Reproductive Care Programs",
            "Diagnostics & Curative Care",
            "Medicines & Consumables Supply"
          ]
        }
      ]
    },
    {
      title: "Central Services",
      description: "AI-powered veterinary and farmer support",
      icon: Building2,
      items: [
        {
          subtitle: "Central Vet Assist",
          points: [
            "Rules-based Diagnosis Systems",
            "Treatment & Prescriptions",
            "Field Service Quality Management"
          ]
        },
        {
          subtitle: "Central Farmer Assist",
          points: [
            "24/7 Farmer Helpline",
            "Personalized Smart Ration",
            "Cattle Loans & Insurance"
          ]
        }
      ]
    },
    {
      title: "System & Insights",
      description: "Data-driven operations and analytics",
      icon: LineChart,
      items: [
        {
          subtitle: "Field Operations",
          points: [
            "Logistics & Staff Management"
          ]
        },
        {
          subtitle: "Farm & Milk Insights",
          points: [
            "Farm & Milk Data Analysis",
            "Targeted Farm Actions",
            "GHG Tracking & Credits"
          ]
        },
        {
          subtitle: "Animal Care Technology",
          points: [
            "Animal & Farm Records",
            "Vet Service Automation",
            "Antibiotics Risk Alerts"
          ]
        }
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
