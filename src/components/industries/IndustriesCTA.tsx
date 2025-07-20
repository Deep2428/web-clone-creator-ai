
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, Award, Shield, CheckCircle } from "lucide-react";

const IndustriesCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Industry?</h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Join thousands of satisfied clients who trust NIKOLAX Electrical for their critical infrastructure protection needs.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <Shield className="h-6 w-6 text-amber-400 mr-4" />
                <div>
                  <div className="font-semibold">Industry-Leading Expertise</div>
                  <div className="text-slate-300">Over 20 years of specialized experience</div>
                </div>
              </div>
              <div className="flex items-center">
                <Award className="h-6 w-6 text-amber-400 mr-4" />
                <div>
                  <div className="font-semibold">Certified Quality</div>
                  <div className="text-slate-300">ISO 9001:2015 & IEC 62305 compliant</div>
                </div>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-amber-400 mr-4" />
                <div>
                  <div className="font-semibold">Proven Track Record</div>
                  <div className="text-slate-300">1000+ successful installations across India</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <Badge variant="outline" className="border-amber-400 text-amber-400 px-4 py-2">
                24/7 Support
              </Badge>
              <Badge variant="outline" className="border-amber-400 text-amber-400 px-4 py-2">
                Pan-India Service
              </Badge>
              <Badge variant="outline" className="border-amber-400 text-amber-400 px-4 py-2">
                10-Year Warranty
              </Badge>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +91 98765 43210
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                <Mail className="mr-2 h-5 w-5" />
                Get Free Consultation
              </Button>
            </div>
          </div>
          
          <Card className="bg-white/95 backdrop-blur text-slate-900">
            <CardHeader>
              <CardTitle className="text-2xl">Get Industry-Specific Quote</CardTitle>
              <CardDescription>Tell us about your project requirements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input 
                  placeholder="Company Name" 
                  className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <select className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Select Industry</option>
                  <option>Power Plants</option>
                  <option>High-Rise Buildings</option>
                  <option>Telecom Towers</option>
                  <option>Manufacturing</option>
                  <option>Data Centers</option>
                  <option>Hospitals</option>
                </select>
              </div>
              <input 
                placeholder="Contact Person" 
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input 
                placeholder="Email Address" 
                type="email"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input 
                placeholder="Phone Number" 
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <textarea 
                placeholder="Project Details & Requirements" 
                rows={4}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              ></textarea>
              <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 text-lg">
                Request Detailed Quote
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IndustriesCTA;
