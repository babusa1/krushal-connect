
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
