
import React from "react";

const AboutUsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#673AB7] mb-10">About Us</h2>
          
          <div className="text-lg text-gray-700 space-y-6">
            <p>
              Krushal AI is a technology company specializing in innovative solutions for rural industries. 
              Our mission is to bridge the technology gap in underserved sectors, bringing cutting-edge 
              AI, mobile, and cloud solutions to transform traditional businesses.
            </p>
            
            <p>
              Founded in 2020, we've grown from a small team of passionate technologists to a 
              company at the forefront of rural digital transformation. We believe that technology 
              should be accessible to all businesses, regardless of their location or industry.
            </p>
            
            <p>
              Our team combines deep technical expertise with industry knowledge, allowing us to 
              create solutions that address real-world challenges in agriculture, dairy, finance, 
              and other rural sectors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
