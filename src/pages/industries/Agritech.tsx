
import React from "react";
import Navigation from "@/components/Navigation";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  Clock,
  Code,
  CreditCard,
  FileText,
  FolderKanban,
  HeartHandshake,
  HelpCircle,
  Home,
  Image,
  LayoutDashboard,
  LineChart,
  Link,
  ListChecks,
  Mail,
  MessageSquare,
  Network,
  Package,
  Pencil,
  Percent,
  PieChart,
  Pilcrow,
  Plus,
  Projector, // Fixed: Changed from Projector2 to Projector
  Rocket,
  Scale,
  Settings,
  Share2,
  ShieldCheck,
  ShoppingCart,
  Sliders,
  Star,
  Table,
  Tag,
  Target,
  TextSelect,
  Timer,
  Trophy,
  Upload,
  User,
  Users,
  Volume1,
  Wifi,
} from "lucide-react";

const Agritech = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <PageBreadcrumb 
        items={[
          { label: "Industries" },
          { label: "Agritech" }
        ]}
      />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-4">Agritech Solutions</h1>
        <p className="text-gray-700 text-center">Explore our innovative solutions for the agriculture industry.</p>
      </div>
    </div>
  );
};

export default Agritech;
