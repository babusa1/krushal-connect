
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#E5DEFF] to-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-primary mb-6">Ready to Transform Your Business?</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Contact us today for a free consultation and discover how AI-powered insights can drive your business forward.
        </p>
        <Button 
          className="bg-primary hover:bg-primary-light text-white px-8 py-6 text-lg rounded-full"
          onClick={() => window.location.href = '/contact'}
        >
          Request a Demo
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
