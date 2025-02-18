import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChartLine, Users, Database, Percent, Bot, Cloud, Stethoscope } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CaseStudy {
  title: string;
  project: string;
  solution: string;
  highlights: string[];
  approach: string[];
  results: string[];
  industry: string;
  icon: React.ComponentType;
}

const CaseStudies = () => {
  const [activeTab, setActiveTab] = useState("all");

  const caseStudies: CaseStudy[] = [
    {
      title: "Tracking Sub-Unit Inventory for Protocol Adherence",
      project: "An agri-service provider aimed to ensure precise medicine usage per protocols for desired livestock outcomes, while preventing pilferage and ensuring accurate procurement by the on-contract local ground team.",
      solution: "Apart from streamlining the process of medicine procurement and control pilferage, the system tracked sub-unit inventory at the time of usage and implemented robust signals to fortify procurement controls.",
      highlights: [
        "Precise Partial Inventory Usage Tracking",
        "Industry Standard Data Model",
        "Localized UI",
        "Offline Capabilities"
      ],
      approach: [
        "Evaluated various best practices and Implemented the same for partial-use inventory",
        "Designed a user-friendly, localization enabled interface",
        "Ensured offline operation on mobile apps",
        "Developed near real-time reporting solution"
      ],
      results: [
        "Identified 20% of cases with protocol deviations, reduced to <5%",
        "Optimized inventory costs through detailed tracking",
        "Significantly reduced pilferage"
      ],
      industry: "Agriculture",
      icon: Database
    },
    {
      title: "Personalized Feeding Plan for Dairy Farms",
      project: "An agri-service provider needed to recommend balanced ration of food for different animals to ensure optimal milk productivity at lowest cost.",
      solution: "Implemented SmartRation to generate optimal food quantity per animal, considering 7 key parameters and local feed availability.",
      highlights: [
        "Cost Optimization",
        "Simplified Management",
        "Innovative Approach",
        "Expert Endorsement"
      ],
      approach: [
        "Linear Programming Module configuration",
        "Configuration driven weights",
        "Pipelining Optimized Solutions",
        "Review, override and regenerate capability"
      ],
      results: [
        "25% increase in farmer engagement",
        "50% increase in partnership sales",
        "15-20% increase in milk income"
      ],
      industry: "Dairy",
      icon: ChartLine
    },
    {
      title: "Created visibility for a dairy into milk procurement",
      project: "A dairy sought to forecast milk procurement from its suppliers over the next year, considering the variability in milk production due to breed, lactation stages of animals, pregnancy condition, seasonal fluctuations and farm management practices",
      solution: "Krushal developed a milk data projection algorithm using enhanced public source data tailored to local conditions.",
      highlights: [
        "Optimization & Continuous Adjustment",
        "Deep Insights for dairy",
      ],
      approach: [
        "Configuration for Algorithm Adjustment",
        "Validation of output",
        "Reporting and Insights",
      ],
      results: [
        "Improved Procurement Planning",
        "Stable Milk Availability",
      ],
      industry: "Dairy",
      icon: Users
    },
    {
      title: "Transforming livestock veterinarian services through analytics",
      project: "Multiple dairies providing veterinarian services to farmers wanted to improve customer satisfaction and ROI of their service",
      solution: "Krushal developed a data analytics solution that integrated service-level data with dimensional data at animal, farmer, geography, & disease levels.",
      highlights: [
        "Customer segmentation",
        "Unprecedented traceability and insights",
      ],
      approach: [
        "Entity Driven Data Pipeline",
        "Intermediate Validated Data Platform",
        "Metrics Based On Business and Priorities",
      ],
      results: [
        "Optimized On-Ground Service Delivery",
        "Cost Reduction",
        "Targeted Customer Segmentation",
        "Optimized Pricing",
      ],
      industry: "Veterinary",
      icon: Stethoscope
    },
    {
      title: "Enabling a CEO dashboard for a large on-ground marketing agency",
      project: "A large marketing agency wanted to have near-real-time visibility into the utilizations and performance of their 1 million ad-slots.",
      solution: "Krushal developed a reporting dashboard for the use by the CEO. The CEO could look at the company’s marketing assets’ overall utilization and performance, drill down to the most granular level, be it by city, locality, the exact bus shelter and so on, and along with the time level drilling to understand the sale and utilization of ad-slots in those specific areas at a given time or time-range. It also helps the CEO to identify and segment their customers, e.g. top performing customers - to be maintained, the next level of customers - to be developed and low performing customers - to be let go or be used in ad-hoc manner.",
      highlights: [
        "Customer segmentation",
        "Location benefits",
        "Strategic Overhaul",
      ],
      approach: [
        "Entity Driven Data Pipeline",
        "Metrics Based On Business and Priorities",
        "Only here and now matter",
      ],
      results: [
        "Effective input to sales team",
        "Cost Reduction",
        "Targeted Customer Segmentation",
        "Dynamic Pricing",
      ],
      industry: "Marketing",
      icon: Percent
    },
    {
      title: "Building a cost efficient platform",
      project: "An agri service provider providing veterinarian services wanted to build an animal care platform to manage all sales and services that can work in a rural environment seamlessly",
      solution: "Krushal developed a comprehensive animal health platform as per a roadmap prioritized to business initiatives. On-field staff of sales and services were enabled on the platform. Apart from a call center, a central veterinarian team required to support on-field services was enabled on the platform. Granular data at a geography, farm and animal level helped analytics that helped in fine tuned training to sales and service staff, eased customer and asset onboarding, improve operations, reduce inventory related costs, negotiated better pricing for inputs, enabled better product portfolio creation for different customer segments",
      highlights: [
        "Extensibility",
      ],
      approach: [
        "Align to business roadmap",
        "Long Term Cost Efficiency",
        "Granular Data Capture",
        "Ease of Business",
      ],
      results: [
        "Quick User Adoption",
        "Adherence to Process",
        "Customer Segmentation and Reach",
      ],
      industry: "Agriculture",
      icon: Bot
    },
    {
      title: "PMO Design for a Foundation to Manage Multi-Vendor Implementation with Critical Milestones",
      project: "A Foundation aimed at providing exceptional experiences in art, culture, history, innovation, etc., in their museum-like experience centers sought to implement systems to manage complex operations and ensure strict adherence to timelines.",
      solution: "Krushal convinced the client to establish a PMO and managed it on their behalf. This streamlined the systems rollout and supported operations, allowing the client to scale up efficiently and serve its users effectively",
      highlights: [
        "Vision Realization",
        "Structuring Success",
      ],
      approach: [
        "Comprehending Client Priorities",
        "Risk Assessment",
        "Management Aligned Recommendation",
        "Operationalizing PMO",
        "Vendor & Stakeholder Management",
      ],
      results: [
        "Strengthened PMO Capabilities",
        "Efficient Project Rollout",
        "Enhanced Vendor & Stakeholder Management",
      ],
      industry: "Foundation",
      icon: Users
    },
    {
      title: "Krushal Field Operations Platform - Revolutionizing On-Ground Efficiency with Offline Capability",
      project: "Krushal identified the need for a versatile Field Operations Platform designed to streamline and enhance the efficiency of on-ground operations across various industries, and deliver on the full functionality even in the absence of internet",
      solution: "Krushal implemented a comprehensive solution that integrated real-time field data with backend systems, creating a centralized platform for managing (re-assign, create adhoc, rescheduling) of on-ground activities and monitoring, reporting around them. The entire solution was on the mobile app for field users that would work with a small on-mobile database even without internet",
      highlights: [
        "Efficiency & Savings",
        "Enhanced Decision-Making",
        "Uninterrupted Mobile Functionality",
      ],
      approach: [
        "We developed a solution that functions both online and offline, built on a microservices platform using an open-source stack.",
        "Real-Time Data Collection",
        "Centralized Monitoring & Reporting",
        "Task Management & Resource Optimization",
        "Communication & Collaboration",
        "Data Analytics",
        "Compliance & Geolocation",
      ],
      results: [
        "Increased Productivity",
        "Enhanced Success Rates",
        "Cost Reduction",
        "Strategic Decision-Making",
        "Uninterrupted Functionality",
      ],
      industry: "Operations",
      icon: Database
    },
    {
      title: "Krushal Enhancing Efficiency and Reducing Costs Through Comprehensive DevOps Solutions",
      project: "A agri-service provider embarked on a project to enhance its tech team’s build efficiency, reduce costs, and optimize cloud infra",
      solution: "Krushal provided an integrated approach combining TerraForm (cloud service provisioning), SonarQube (integrated into VS Code), Docker (containerization), GitLab CI/CD, Portainer / Grafana, and Argo CD to streamline development, build workflows, automate build processes, and manage scalability",
      highlights: [
        "Developer Control",
        "Reduced Dev Ops Costs",
      ],
      approach: [
        "Automated CI/CD Pipeline",
        "Containerization with Docker",
        "Infrastructure as Code",
        "Real-Time Monitoring",
        "Optimized Development",
        "Continuous Quality & Security",
      ],
      results: [
        "Scalable & Flexible Infrastructure",
        "Enhanced Reliability",
        "Significant Cost Savings",
        "Increased Build Efficiency",
      ],
      industry: "DevOps",
      icon: Cloud
    },
  ];

  const industries = [...new Set(caseStudies.map(study => study.industry))];

  const filteredCaseStudies = activeTab === "all" 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === activeTab);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-[#1EAEDB] mb-4">
            Case Studies
          </h1>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Explore our success stories across different industries, showcasing how we've helped businesses transform their operations through innovative solutions.
          </p>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full justify-start overflow-x-auto">
              <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
                All Industries
              </TabsTrigger>
              {industries.map((industry) => (
                <TabsTrigger 
                  key={industry} 
                  value={industry}
                  onClick={() => setActiveTab(industry)}
                >
                  {industry}
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {filteredCaseStudies.map((study, index) => {
                const Icon = study.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Icon className="w-12 h-12 text-[#1EAEDB] mb-4" />
                      <div className="inline-block px-3 py-1 rounded-full bg-[#E5F7FB] text-[#1EAEDB] text-sm font-medium mb-4">
                        {study.industry}
                      </div>
                      <h3 className="text-xl font-semibold mb-4 text-gray-900">
                        {study.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {study.project}
                      </p>
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-gray-900">Key Results:</h4>
                        <ul className="list-disc list-inside text-gray-600">
                          {study.results.map((result, idx) => (
                            <li key={idx}>{result}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CaseStudies;
