
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Award, Users, Shield } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Get in Touch</h2>
        <p className="text-lg text-slate-700 leading-relaxed mb-8">
          With over 20 years of expertise in electrical safety solutions, our team of certified 
          engineers is ready to help you protect your critical infrastructure.
        </p>
      </div>

      <div className="space-y-6">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
          <CardHeader>
            <CardTitle className="flex items-center text-blue-900">
              <MapPin className="h-6 w-6 mr-3" />
              Head Office
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 leading-relaxed">
              NIKOLAX Electrical Solutions Pvt. Ltd.<br />
              Plot No. 245, Industrial Area Phase-I<br />
              Andheri East, Mumbai - 400069<br />
              Maharashtra, India
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-amber-50 to-amber-100">
          <CardHeader>
            <CardTitle className="flex items-center text-amber-800">
              <Phone className="h-6 w-6 mr-3" />
              Phone & WhatsApp
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700">
              <strong>Sales:</strong> +91 98765 43210<br />
              <strong>Technical Support:</strong> +91 98765 43211<br />
              <strong>Emergency:</strong> +91 98765 43212
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
          <CardHeader>
            <CardTitle className="flex items-center text-green-800">
              <Mail className="h-6 w-6 mr-3" />
              Email Contacts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700">
              <strong>General:</strong> info@nikolax.com<br />
              <strong>Sales:</strong> sales@nikolax.com<br />
              <strong>Support:</strong> support@nikolax.com
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100">
          <CardHeader>
            <CardTitle className="flex items-center text-purple-800">
              <Clock className="h-6 w-6 mr-3" />
              Business Hours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700">
              <strong>Monday - Friday:</strong> 9:00 AM - 7:00 PM<br />
              <strong>Saturday:</strong> 9:00 AM - 5:00 PM<br />
              <strong>Emergency Support:</strong> 24/7 Available
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-slate-900 text-white p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Shield className="h-6 w-6 mr-3 text-amber-400" />
          Why Choose NIKOLAX?
        </h3>
        <div className="space-y-3">
          <div className="flex items-center">
            <Award className="h-5 w-5 text-amber-400 mr-3" />
            <span>ISO 9001:2015 & IEC 62305 Certified</span>
          </div>
          <div className="flex items-center">
            <Users className="h-5 w-5 text-amber-400 mr-3" />
            <span>Team of 50+ Certified Engineers</span>
          </div>
          <div className="flex items-center">
            <Shield className="h-5 w-5 text-amber-400 mr-3" />
            <span>1000+ Successful Installations</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          <Badge variant="outline" className="border-amber-400 text-amber-400">
            Pan-India Service
          </Badge>
          <Badge variant="outline" className="border-amber-400 text-amber-400">
            10-Year Warranty
          </Badge>
          <Badge variant="outline" className="border-amber-400 text-amber-400">
            24/7 Support
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
