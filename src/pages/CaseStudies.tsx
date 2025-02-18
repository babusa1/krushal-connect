
import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChartLine, Users, Database, Percent, Bot, Cloud, Stethoscope, LucideIcon } from "lucide-react";
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
  icon: LucideIcon;
}

const CaseStudies = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);

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

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredCaseStudies.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [filteredCaseStudies.length]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8F7FF] to-white">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section with Featured Case Study */}
          <div className="relative mb-16 overflow-hidden rounded-2xl bg-gradient-to-r from-[#8B5CF6] to-[#7E69AB] p-8 md:p-12">
            <div className="relative z-10 text-white max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">
                Success Stories
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/90 animate-fadeIn delay-100">
                Discover how we've helped businesses transform their operations through innovative solutions.
              </p>
            </div>
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
          </div>

          {/* Featured Case Study Carousel */}
          <div className="mb-16 relative">
            <div className="overflow-hidden">
              <div className="transition-all duration-500 ease-in-out">
                <Card className="bg-white shadow-xl border-[#9b87f5]/20">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <filteredCaseStudies[currentIndex].icon className="w-16 h-16 text-[#9b87f5] mb-6" />
                        <div className="inline-block px-4 py-2 rounded-full bg-[#E5DEFF] text-[#8B5CF6] text-sm font-medium mb-4">
                          {filteredCaseStudies[currentIndex].industry}
                        </div>
                        <h2 className="text-2xl font-bold mb-4 text-[#1A1F2C]">
                          {filteredCaseStudies[currentIndex].title}
                        </h2>
                        <p className="text-gray-600 mb-6">
                          {filteredCaseStudies[currentIndex].project}
                        </p>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-[#F8F7FF] p-6 rounded-lg">
                          <h3 className="font-semibold mb-3 text-[#6E59A5]">Key Results</h3>
                          <ul className="space-y-2">
                            {filteredCaseStudies[currentIndex].results.map((result, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-[#9b87f5]">•</span>
                                <span className="text-gray-700">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {filteredCaseStudies.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? "w-6 bg-[#8B5CF6]" : "bg-[#D6BCFA]"
                  }`}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>
          </div>

          {/* Industry Filter Tabs */}
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full justify-start overflow-x-auto bg-[#F8F7FF] p-1">
              <TabsTrigger 
                value="all" 
                onClick={() => setActiveTab("all")}
                className="data-[state=active]:bg-[#8B5CF6] data-[state=active]:text-white"
              >
                All Industries
              </TabsTrigger>
              {industries.map((industry) => (
                <TabsTrigger 
                  key={industry} 
                  value={industry}
                  onClick={() => setActiveTab(industry)}
                  className="data-[state=active]:bg-[#8B5CF6] data-[state=active]:text-white"
                >
                  {industry}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Case Studies Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {filteredCaseStudies.map((study, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <study.icon className="w-12 h-12 text-[#9b87f5] mb-4 group-hover:scale-110 transition-transform" />
                    <div className="inline-block px-3 py-1 rounded-full bg-[#E5DEFF] text-[#8B5CF6] text-sm font-medium mb-4">
                      {study.industry}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-[#1A1F2C] group-hover:text-[#8B5CF6] transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {study.project}
                    </p>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-[#6E59A5]">Key Results:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="hover:text-[#8B5CF6] transition-colors">
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CaseStudies;
