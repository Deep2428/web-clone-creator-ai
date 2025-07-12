
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, Building, Factory, Phone, Mail, MapPin, Award, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation currentPage="home" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              India's Shield Against <br />
              <span className="text-amber-400">Electrical Hazards</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 leading-relaxed">
              Advanced lightning protection, earthing systems, and safety components — engineered to protect infrastructure, people, and assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-3">
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3">
                Request a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                We Are Built for <span className="text-blue-900">Infrastructure-Grade Protection</span>
              </h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                At NIKOLAX Electrical, we deliver high-performance safety and grounding solutions trusted across infrastructure, power, telecom, industrial, and government sectors.
              </p>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Backed by technology used by global leaders in lightning and electrical safety, our offerings meet international standards — ensuring compliance, reliability, and long-term protection.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900 mb-2">500+</div>
                  <div className="text-slate-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900 mb-2">20+</div>
                  <div className="text-slate-600">Years Experience</div>
                </div>
              </div>
              <Button className="bg-blue-900 hover:bg-blue-800">
                Learn More About Us
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22" 
                alt="Electrical Infrastructure" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products & Solutions */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Products & Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive electrical safety solutions engineered for India's diverse industrial landscape
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <Zap className="h-8 w-8 text-blue-900" />
                </div>
                <CardTitle className="text-xl text-slate-900">Lightning Protection Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 mb-4 leading-relaxed">
                  Advanced lightning protection devices including air terminals, conductors, and surge arresters 
                  designed for comprehensive facility protection.
                </CardDescription>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-slate-700">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    ESE Air Terminals
                  </div>
                  <div className="flex items-center text-sm text-slate-700">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Down Conductors
                  </div>
                  <div className="flex items-center text-sm text-slate-700">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Surge Arresters
                  </div>
                </div>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                  <Shield className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-xl text-slate-900">Earthing & Grounding Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 mb-4 leading-relaxed">
                  Precision-engineered earthing solutions including chemical earthing, copper bonded rods, 
                  and maintenance-free earthing systems.
                </CardDescription>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-slate-700">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Chemical Earthing
                  </div>
                  <div className="flex items-center text-sm text-slate-700">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Copper Bonded Rods
                  </div>
                  <div className="flex items-center text-sm text-slate-700">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Maintenance-Free Systems
                  </div>
                </div>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <Building className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-slate-900">Surge Protection Devices</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 mb-4 leading-relaxed">
                  High-performance SPDs for AC and DC applications, protecting sensitive equipment 
                  from electrical surges and transients.
                </CardDescription>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-slate-700">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Type 1, 2 & 3 SPDs
                  </div>
                  <div className="flex items-center text-sm text-slate-700">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    AC/DC Protection
                  </div>
                  <div className="flex items-center text-sm text-slate-700">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Remote Monitoring
                  </div>
                </div>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Trusted by India's leading industries for critical electrical safety solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Factory className="h-12 w-12 text-blue-900 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 mb-1">Power Plants</h3>
              <p className="text-sm text-slate-600">Thermal, hydro & renewable energy</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Building className="h-12 w-12 text-blue-900 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 mb-1">High-Rise Buildings</h3>
              <p className="text-sm text-slate-600">Commercial & residential towers</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Zap className="h-12 w-12 text-blue-900 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 mb-1">Telecom Towers</h3>
              <p className="text-sm text-slate-600">Mobile & communication infrastructure</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Factory className="h-12 w-12 text-blue-900 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 mb-1">Factories</h3>
              <p className="text-sm text-slate-600">Manufacturing & processing units</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Shield className="h-12 w-12 text-blue-900 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 mb-1">Government</h3>
              <p className="text-sm text-slate-600">Critical infrastructure projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Certifications & Standards</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our products meet the highest international and national quality standards
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            <Badge variant="outline" className="text-lg px-6 py-3 border-blue-200 text-blue-900">
              <Award className="h-5 w-5 mr-2" />
              ISO 9001:2015
            </Badge>
            <Badge variant="outline" className="text-lg px-6 py-3 border-blue-200 text-blue-900">
              <Award className="h-5 w-5 mr-2" />
              IEC 62305
            </Badge>
            <Badge variant="outline" className="text-lg px-6 py-3 border-blue-200 text-blue-900">
              <Award className="h-5 w-5 mr-2" />
              BIS Certified
            </Badge>
            <Badge variant="outline" className="text-lg px-6 py-3 border-blue-200 text-blue-900">
              <Award className="h-5 w-5 mr-2" />
              IS 2309
            </Badge>
            <Badge variant="outline" className="text-lg px-6 py-3 border-blue-200 text-blue-900">
              <Award className="h-5 w-5 mr-2" />
              UL Listed
            </Badge>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Infrastructure?</h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Get in touch with our technical experts for customized electrical safety solutions 
                tailored to your specific requirements.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-amber-400 mr-4" />
                  <div>
                    <div className="font-semibold">Call Us</div>
                    <div className="text-slate-300">+91 98765 43210</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-amber-400 mr-4" />
                  <div>
                    <div className="font-semibold">Email Us</div>
                    <div className="text-slate-300">info@nikolaxelectrical.com</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-amber-400 mr-4" />
                  <div>
                    <div className="font-semibold">Visit Us</div>
                    <div className="text-slate-300">Mumbai, Maharashtra, India</div>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-white text-slate-900">
              <CardHeader>
                <CardTitle className="text-2xl">Request Quote</CardTitle>
                <CardDescription>Get a customized solution for your project</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    placeholder="First Name" 
                    className="px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input 
                    placeholder="Last Name" 
                    className="px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <input 
                  placeholder="Company Name" 
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  placeholder="Email Address" 
                  type="email"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  placeholder="Phone Number" 
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select Service Type</option>
                  <option>Lightning Protection</option>
                  <option>Earthing Solutions</option>
                  <option>Surge Protection</option>
                  <option>Complete Safety Audit</option>
                </select>
                <textarea 
                  placeholder="Project Details" 
                  rows={4}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3">
                  Submit Inquiry
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
