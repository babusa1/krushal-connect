
import React from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { BriefcaseIcon, Users, Mail } from "lucide-react";

const Careers = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
            alt="Team Collaboration"
            className="w-full h-[500px] object-cover"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <div className="container mx-auto px-4 py-24 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fadeIn font-baloo">
              Bringing Together<br />Exciting Careers
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Mission Statement */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <Users className="h-12 w-12 text-[#1EAEDB]" />
              </div>
              <h2 className="text-3xl font-bold text-[#1EAEDB] mb-4 font-baloo">Our Mission</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                For us, work is more than accomplishing milestones. We believe in building lasting 
                relationships with employees that lay the foundation for our success stories.
              </p>
            </div>

            {/* Join Team Section */}
            <div className="bg-[#F8F9FA] rounded-2xl p-8 mb-16">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-[#1EAEDB] mb-4 font-baloo">Join the Team</h2>
                  <p className="text-gray-700 leading-relaxed">
                    If you are looking for an exciting workplace where team members bond like family, 
                    we got you covered. Did we mention we also build great solutions? We feel that 
                    is just the side effect of having a great team.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <BriefcaseIcon className="h-16 w-16 text-[#33C3F0]" />
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="text-center bg-[#E5F7FB] rounded-2xl p-8">
              <div className="flex justify-center mb-6">
                <Mail className="h-12 w-12 text-[#1EAEDB]" />
              </div>
              <h2 className="text-2xl font-bold text-[#1EAEDB] mb-4 font-baloo">
                Excited to work with us but don't see your position listed?
              </h2>
              <p className="text-gray-700 mb-6">
                Send your resume to{" "}
                <a 
                  href="mailto:careers@Krushal.in"
                  className="text-[#1EAEDB] hover:text-[#33C3F0] underline"
                >
                  careers@Krushal.in
                </a>
              </p>
              <Button 
                className="bg-[#1EAEDB] hover:bg-[#33C3F0] text-white px-8 py-6 rounded-full text-lg"
                onClick={() => window.location.href = "mailto:careers@Krushal.in"}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
