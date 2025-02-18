import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FirstMileSolutions from "./pages/FirstMileSolutions";
import Contact from "./pages/Contact";
import MobileFirstDigital from "./pages/MobileFirstDigital";
import Expl_MobileService from "./pages/Expl_MobileService";
import ExploreFirstMileServices from "./pages/ExploreFirstMileServices";
import AIPoweredInsights from "./pages/AIPoweredInsights";
import ExploreAIServices from "./pages/ExploreAIServices";
import AIPoweredAgents from "./pages/AIPoweredAgents";
import ExploreAIAgents from "./pages/ExploreAIAgents";
import CloudAndDevOps from "./pages/CloudAndDevOps";
import ExploreCloudServices from "./pages/ExploreCloudServices";
import WhatWeDo from "./pages/WhatWeDo";
import AboutKrushal from "./pages/AboutKrushal";
import Leadership from "./pages/Leadership";
import Careers from "./pages/Careers";
import FieldOperations from "./pages/products/FieldOperations";
import PersonalizedInsights from "./pages/products/PersonalizedInsights";
import AISoftware from "./pages/products/AISoftware";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/first-mile-solutions" element={<FirstMileSolutions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mobile-first-digital" element={<MobileFirstDigital />} />
          <Route path="/explore-mobile-services" element={<Expl_MobileService />} />
          <Route path="/explore-firstmile-services" element={<ExploreFirstMileServices />} />
          <Route path="/ai-insights" element={<AIPoweredInsights />} />
          <Route path="/explore-ai-services" element={<ExploreAIServices />} />
          <Route path="/ai-agents" element={<AIPoweredAgents />} />
          <Route path="/explore-ai-agents" element={<ExploreAIAgents />} />
          <Route path="/cloud-and-devops" element={<CloudAndDevOps />} />
          <Route path="/explore-cloud-services" element={<ExploreCloudServices />} />
          <Route path="/about" element={<WhatWeDo />} />
          <Route path="/about-krushal" element={<AboutKrushal />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/products/field-operations" element={<FieldOperations />} />
          <Route path="/products/personalized-insights" element={<PersonalizedInsights />} />
          <Route path="/products/ai-software" element={<AISoftware />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
