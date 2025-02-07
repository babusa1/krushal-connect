
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#673AB7] to-[#9b87f5] py-20 px-4">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Have questions about our First Mile solutions? We're here to help transform rural ecosystems together.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[#673AB7] mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Email Us</h3>
                  <p className="text-gray-600">info@krushalconnect.com</p>
                  <p className="text-gray-600">support@krushalconnect.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[#673AB7] mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Call Us</h3>
                  <p className="text-gray-600">+91 (800) 123-4567</p>
                  <p className="text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM IST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#673AB7] mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Visit Us</h3>
                  <p className="text-gray-600">
                    L-148, 5TH Main Road<br />
                    Sector 6, HSR Layout<br />
                    Bengaluru, Karnataka 560102<br />
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-6 h-6 text-[#673AB7]" />
              <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">First Name</label>
                  <Input placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">Last Name</label>
                  <Input placeholder="Doe" required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Email</label>
                <Input type="email" placeholder="john@example.com" required />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Phone Number</label>
                <Input type="tel" placeholder="+91 98765 43210" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Message</label>
                <Textarea 
                  placeholder="Tell us about your requirements..."
                  className="min-h-[120px]"
                  required
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-[#673AB7] hover:bg-[#5829b0] text-white py-6"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
