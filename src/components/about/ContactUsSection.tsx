
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ContactUsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-[#673AB7] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Get In Touch</h2>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg opacity-90">
            Have questions about our services or interested in how we can help your business?
            Our team is ready to assist you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg">
            <Mail className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p className="text-center opacity-90">info@krushal.com</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg">
            <Phone className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-center opacity-90">+1 (123) 456-7890</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg">
            <MapPin className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">Visit Us</h3>
            <p className="text-center opacity-90">123 Technology Park, Bangalore, India</p>
          </div>
        </div>
        
        <div className="flex justify-center">
          <Button 
            onClick={() => navigate("/contact")}
            className="bg-white text-[#673AB7] hover:bg-gray-100 px-8 py-6 text-lg font-medium"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
