
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactHero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30 px-6 py-2 text-lg mb-6">
            🤝 Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Connect with Our <span className="text-amber-400">Experts</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Ready to secure your infrastructure? Our certified engineers are here to provide 
            customized electrical safety solutions for your specific needs.
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="h-8 w-8 text-amber-400" />
              </div>
              <div className="text-sm text-slate-300">Call Us</div>
              <div className="font-semibold">+91 98765 43210</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail className="h-8 w-8 text-amber-400" />
              </div>
              <div className="text-sm text-slate-300">Email Us</div>
              <div className="font-semibold">info@nikolax.com</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="h-8 w-8 text-amber-400" />
              </div>
              <div className="text-sm text-slate-300">Visit Us</div>
              <div className="font-semibold">Mumbai, India</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="h-8 w-8 text-amber-400" />
              </div>
              <div className="text-sm text-slate-300">Support Hours</div>
              <div className="font-semibold">24/7 Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
