
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle } from "lucide-react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent Successfully!",
        description: "Our team will get back to you within 24 hours.",
      });
    }, 2000);
  };

  return (
    <Card className="border-0 shadow-2xl bg-white">
      <CardHeader>
        <CardTitle className="text-2xl text-slate-900">Send Us a Message</CardTitle>
        <p className="text-slate-600">
          Fill out the form below and we'll get back to you within 24 hours.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name *"
              required
              className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Last Name *"
              required
              className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <input
            type="text"
            placeholder="Company Name"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          
          <div className="grid grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email Address *"
              required
              className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="tel"
              placeholder="Phone Number *"
              required
              className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <select 
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select Service Type *</option>
            <option value="lightning">Lightning Protection Systems</option>
            <option value="earthing">Earthing & Grounding Solutions</option>
            <option value="surge">Surge Protection Devices</option>
            <option value="audit">Complete Safety Audit</option>
            <option value="maintenance">Maintenance & Support</option>
            <option value="consultation">Technical Consultation</option>
          </select>
          
          <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option value="">Select Industry</option>
            <option value="power">Power Plants</option>
            <option value="buildings">High-Rise Buildings</option>
            <option value="telecom">Telecom Towers</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="datacenters">Data Centers</option>
            <option value="hospitals">Hospitals & Healthcare</option>
            <option value="other">Other</option>
          </select>
          
          <textarea
            placeholder="Project Details & Requirements *"
            required
            rows={5}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          ></textarea>
          
          <div className="flex items-start">
            <input
              type="checkbox"
              id="consent"
              required
              className="mt-1 mr-3 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="consent" className="text-sm text-slate-600">
              I agree to receive communications from NIKOLAX Electrical and understand 
              that I can unsubscribe at any time. *
            </label>
          </div>
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-900 hover:bg-blue-800 text-white py-4 text-lg font-semibold shadow-lg"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Sending Message...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </>
            )}
          </Button>
          
          <div className="text-center">
            <p className="text-sm text-slate-500">
              <CheckCircle className="inline h-4 w-4 text-green-600 mr-1" />
              Your information is secure and will never be shared with third parties.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
