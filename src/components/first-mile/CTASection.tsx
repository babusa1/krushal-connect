
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-16 bg-gradient-to-br from-[#1EAEDB] to-[#33C3F0] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Operations?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contact us to learn how our first mile solutions can optimize your dairy and agribusiness operations
        </p>
        <Button 
          onClick={() => navigate("/contact")}
          className="bg-white text-[#1EAEDB] hover:bg-[#E5F7FB] px-8 py-6 rounded-full text-lg font-medium"
        >
          Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
