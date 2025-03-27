
import React from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Truck, Bot, Brain, Smartphone, Cloud } from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
            alt="Technology Solutions"
            className="w-full h-[500px] object-cover"
          />
        </div>
        <div className="container mx-auto px-4 py-24 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-baloo">
              What We Do
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Transforming industries through innovative technology solutions
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#673AB7] mb-12 font-baloo">Our Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer">
              <div className="flex flex-col items-center text-center">
                <Truck className="w-12 h-12 text-[#673AB7]" />
                <h3 className="text-xl font-bold mt-4 mb-2 text-[#673AB7] font-baloo">First Mile Solutions</h3>
                <p className="text-gray-600">Transforming operations in rural and underserved markets</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer">
              <div className="flex flex-col items-center text-center">
                <Bot className="w-12 h-12 text-[#673AB7]" />
                <h3 className="text-xl font-bold mt-4 mb-2 text-[#673AB7] font-baloo">AI Agents</h3>
                <p className="text-gray-600">Intelligent automation for enhanced efficiency</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer">
              <div className="flex flex-col items-center text-center">
                <Brain className="w-12 h-12 text-[#673AB7]" />
                <h3 className="text-xl font-bold mt-4 mb-2 text-[#673AB7] font-baloo">AI-Powered Insights</h3>
                <p className="text-gray-600">Data-driven decision making for better outcomes</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer">
              <div className="flex flex-col items-center text-center">
                <Smartphone className="w-12 h-12 text-[#673AB7]" />
                <h3 className="text-xl font-bold mt-4 mb-2 text-[#673AB7] font-baloo">Mobile First Digital</h3>
                <p className="text-gray-600">User-centric solutions for seamless experiences</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer">
              <div className="flex flex-col items-center text-center">
                <Cloud className="w-12 h-12 text-[#673AB7]" />
                <h3 className="text-xl font-bold mt-4 mb-2 text-[#673AB7] font-baloo">Cloud &amp; DevOps</h3>
                <p className="text-gray-600">Scalable infrastructure for modern applications</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section className="py-16 bg-[#F8F7FF]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#673AB7] mb-12 font-baloo">Market Opportunity</h2>
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#673AB7] mb-8 font-baloo">Modernize or Languish - Rural India, Ready for a Revolution</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                  <div className="text-3xl font-bold text-[#FF5722] mb-2 font-baloo">80M</div>
                  <div className="text-[#6E59A5]">farmers</div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                  <div className="text-3xl font-bold text-[#FF5722] mb-2 font-baloo">1B</div>
                  <div className="text-[#6E59A5]">consumers</div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                  <div className="text-3xl font-bold text-[#FF5722] mb-2 font-baloo">4-5X</div>
                  <div className="text-[#6E59A5]">lower yields than global average</div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                  <div className="text-3xl font-bold text-[#FF5722] mb-2 font-baloo">15%</div>
                  <div className="text-[#6E59A5]">first mile inefficiency losses</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#673AB7] mb-12 font-baloo">Our Impact</h2>
          <section className="py-16 px-4 bg-[#F8F9FA]">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#673AB7] mb-8">Krushal: First Mile as a Service</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chart-line w-8 h-8 text-[#FF5722]">
                      <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                      <path d="m19 9-5 5-4-4-3 3"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[#673AB7] mb-4">50-100% Higher Margins</h3>
                  <ul className="space-y-2">
                    <li className="text-[#6E59A5] flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-leaf w-4 h-4 text-[#FF5722]">
                        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                      </svg>
                      Farm extension ops
                    </li>
                    <li className="text-[#6E59A5] flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-leaf w-4 h-4 text-[#FF5722]">
                        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                      </svg>
                      Cattle nutrition ops
                    </li>
                    <li className="text-[#6E59A5] flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-leaf w-4 h-4 text-[#FF5722]">
                        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                      </svg>
                      Procurement ops
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-target w-8 h-8 text-[#FF5722]">
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="6"></circle>
                      <circle cx="12" cy="12" r="2"></circle>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[#673AB7] mb-4">Solutions at Speed</h3>
                  <ul className="space-y-2">
                    <li className="text-[#6E59A5] flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-leaf w-4 h-4 text-[#FF5722]">
                        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                      </svg>
                      Milk data analytics
                    </li>
                    <li className="text-[#6E59A5] flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-leaf w-4 h-4 text-[#FF5722]">
                        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                      </svg>
                      Field staff earnings
                    </li>
                    <li className="text-[#6E59A5] flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-leaf w-4 h-4 text-[#FF5722]">
                        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                      </svg>
                      Quality management
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users w-8 h-8 text-[#FF5722]">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[#673AB7] mb-4">Comprehensive Support</h3>
                  <ul className="space-y-2">
                    <li className="text-[#6E59A5] flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-leaf w-4 h-4 text-[#FF5722]">
                        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                      </svg>
                      Training &amp; support
                    </li>
                    <li className="text-[#6E59A5] flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-leaf w-4 h-4 text-[#FF5722]">
                        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                      </svg>
                      24/7 assistance
                    </li>
                    <li className="text-[#6E59A5] flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-leaf w-4 h-4 text-[#FF5722]">
                        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                      </svg>
                      Expert consultation
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-16 bg-[#F8F7FF]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#673AB7] mb-12 font-baloo">Outcomes That Matter</h2>
          <section className="py-16 px-4 bg-[#F8F9FA]">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#673AB7] mb-8 font-baloo">Impact in Action: Transforming Rural Livelihoods</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                  <div className="text-4xl font-bold text-[#FF5722] mb-2 font-baloo">80%</div>
                  <div className="text-xl font-semibold text-[#673AB7] mb-2 font-baloo">Repeat Business</div>
                  <div className="text-[#6E59A5]">For the ecosystem</div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                  <div className="text-4xl font-bold text-[#FF5722] mb-2 font-baloo">2x</div>
                  <div className="text-xl font-semibold text-[#673AB7] mb-2 font-baloo">Margin Increase</div>
                  <div className="text-[#6E59A5]">For Dairies</div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                  <div className="text-4xl font-bold text-[#FF5722] mb-2 font-baloo">2-4x</div>
                  <div className="text-xl font-semibold text-[#673AB7] mb-2 font-baloo">Earnings Growth</div>
                  <div className="text-[#6E59A5]">For Farmers</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#673AB7] to-[#8B5CF6] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-baloo">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Contact us to discuss how our solutions can help your organization thrive</p>
          <Button 
            onClick={() => navigate("/contact")}
            className="bg-white text-[#673AB7] hover:bg-gray-100 px-8 py-6 text-lg rounded-full"
          >
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
