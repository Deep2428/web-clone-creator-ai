
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, Building, Factory, Phone, Mail, MapPin, Award, CheckCircle, ArrowRight, Users, TrendingUp, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  console.log('Index page rendering...');

  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation currentPage="home" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30 px-6 py-2 text-lg">
                India's Premier Electrical Safety Solutions
              </Badge>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              India's Shield Against <br />
              <span className="text-amber-400 bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                Electrical Hazards
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Advanced lightning protection, earthing systems, and safety components — engineered to protect infrastructure, people, and assets across India's critical industries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/products">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-4 text-lg shadow-xl">
                  Explore Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg shadow-xl">
                  Request a Quote
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">1000+</div>
                <p className="text-slate-300">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">20+</div>
                <p className="text-slate-300">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">99.9%</div>
                <p className="text-slate-300">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightning Protection Explanation */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <Zap className="h-8 w-8 text-amber-600" />
                </div>
                <h2 className="text-4xl font-bold text-slate-900">
                  Why Lightning Protection Matters
                </h2>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg shadow-sm">
                <p className="text-lg text-slate-800 font-medium leading-relaxed">
                  A single lightning strike can release over <span className="text-red-600 font-bold">100 million volts</span> of electricity — enough to destroy equipment, trigger fires, and put lives at risk.
                </p>
              </div>
              
              <p className="text-lg text-slate-700 leading-relaxed">
                That's why high-rise buildings, factories, and critical infrastructure must have a properly installed Lightning Protection System (LPS).
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">i</span>
                  </div>
                  How Our System Works:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start group">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-blue-700 transition-colors">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed pt-2">
                      The <strong>ESE Air Terminal</strong> on the rooftop captures the lightning strike with advanced early streamer emission technology.
                    </p>
                  </div>
                  <div className="flex items-start group">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-blue-700 transition-colors">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed pt-2">
                      The <strong>Down Conductor</strong> safely channels the current down the building structure.
                    </p>
                  </div>
                  <div className="flex items-start group">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-blue-700 transition-colors">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed pt-2">
                      The energy is dispersed harmlessly through a dedicated <strong>Earthing System</strong>.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white p-6 rounded-lg shadow-xl">
                <p className="text-lg leading-relaxed mb-4">
                  At <strong>NIKOLAX Electrical</strong>, we help you build that defense — engineered to meet international standards and tailored to your site's needs.
                </p>
                <Link to="/products">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
                    Learn More About Our Systems
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 p-8 rounded-2xl shadow-2xl">
                <img 
                  src="/lovable-uploads/edcd8407-88ef-403b-b08b-5d5d06e07cf1.png" 
                  alt="Lightning Protection System Diagram showing ESE Air Terminal, Down Conductor, and Earthing System" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-amber-400 text-slate-900 px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                Complete Protection System
              </div>
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
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <Zap className="h-8 w-8 text-blue-900" />
                </div>
                <CardTitle className="text-xl text-slate-900">Lightning Protection Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 h-48 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837" 
                    alt="Lightning Protection Systems"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
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
                <Link to="/products">
                  <Button variant="outline" className="w-full group-hover:bg-blue-900 group-hover:text-white transition-colors">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                  <Shield className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-xl text-slate-900">Earthing & Grounding Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 h-48 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581092335878-7d6956c18f70" 
                    alt="Earthing and Grounding Systems"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
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
                <Link to="/products">
                  <Button variant="outline" className="w-full group-hover:bg-amber-600 group-hover:text-white transition-colors">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <Building className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-slate-900">Surge Protection Devices</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 h-48 bg-gradient-to-br from-green-50 to-green-100 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1621905252107-b7d4e5b9e7b5" 
                    alt="Surge Protection Devices"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
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
                <Link to="/products">
                  <Button variant="outline" className="w-full group-hover:bg-green-600 group-hover:text-white transition-colors">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Trusted by India's leading industries for critical electrical safety solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <Link to="/industries" className="group">
              <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4 h-32 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e" 
                    alt="Power Plants"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">Power Plants</h3>
                <p className="text-sm text-slate-600">Thermal, hydro & renewable energy</p>
              </div>
            </Link>
            <Link to="/industries" className="group">
              <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab" 
                    alt="High-Rise Buildings"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">High-Rise Buildings</h3>
                <p className="text-sm text-slate-600">Commercial & residential towers</p>
              </div>
            </Link>
            <Link to="/industries" className="group">
              <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4 h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13" 
                    alt="Telecom Towers"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">Telecom Towers</h3>
                <p className="text-sm text-slate-600">Mobile & communication infrastructure</p>
              </div>
            </Link>
            <Link to="/industries" className="group">
              <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4 h-32 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581092335878-7d6956c18f70" 
                    alt="Manufacturing"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">Manufacturing</h3>
                <p className="text-sm text-slate-600">Industrial & processing units</p>
              </div>
            </Link>
            <Link to="/industries" className="group">
              <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4 h-32 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31" 
                    alt="Data Centers"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">Data Centers</h3>
                <p className="text-sm text-slate-600">Critical IT infrastructure</p>
              </div>
            </Link>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/industries">
              <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3">
                View All Industries
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose NIKOLAX Electrical?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Two decades of excellence in electrical safety solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center border-0 shadow-lg bg-gradient-to-br from-white to-blue-50">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-900" />
                </div>
                <CardTitle className="text-xl">Expert Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Certified engineers with 20+ years of experience in electrical safety solutions</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-lg bg-gradient-to-br from-white to-amber-50">
              <CardHeader>
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-xl">Proven Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">99.9% success rate with over 1000 successful installations across India</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-lg bg-gradient-to-br from-white to-green-50">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Round-the-clock technical support and emergency response services</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            <Badge variant="outline" className="text-lg px-6 py-3 border-blue-200 text-blue-900 bg-blue-50">
              <Award className="h-5 w-5 mr-2" />
              ISO 9001:2015
            </Badge>
            <Badge variant="outline" className="text-lg px-6 py-3 border-blue-200 text-blue-900 bg-blue-50">
              <Award className="h-5 w-5 mr-2" />
              IEC 62305
            </Badge>
            <Badge variant="outline" className="text-lg px-6 py-3 border-blue-200 text-blue-900 bg-blue-50">
              <Award className="h-5 w-5 mr-2" />
              BIS Certified
            </Badge>
            <Badge variant="outline" className="text-lg px-6 py-3 border-blue-200 text-blue-900 bg-blue-50">
              <Award className="h-5 w-5 mr-2" />
              IS 2309
            </Badge>
            <Badge variant="outline" className="text-lg px-6 py-3 border-blue-200 text-blue-900 bg-blue-50">
              <Award className="h-5 w-5 mr-2" />
              UL Listed
            </Badge>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-16 bg-slate-900 text-white">
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
                    <a href="tel:+919876543210" className="text-slate-300 hover:text-white">+91 98765 43210</a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-amber-400 mr-4" />
                  <div>
                    <div className="font-semibold">Email Us</div>
                    <a href="mailto:info@nikolax.com" className="text-slate-300 hover:text-white">info@nikolax.com</a>
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
                    className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input 
                    placeholder="Last Name" 
                    className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <input 
                  placeholder="Company Name" 
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
                <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Select Service Type</option>
                  <option>Lightning Protection</option>
                  <option>Earthing Solutions</option>
                  <option>Surge Protection</option>
                  <option>Complete Safety Audit</option>
                </select>
                <textarea 
                  placeholder="Project Details" 
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                ></textarea>
                <Link to="/contact">
                  <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 text-lg">
                    Submit Inquiry
                  </Button>
                </Link>
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
