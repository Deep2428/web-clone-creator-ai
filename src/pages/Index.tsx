
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Zap, Users, Award, CheckCircle, Phone, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="home" />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30 px-4 py-2 text-sm mb-6">
                Lightning Protection Specialists Since 2000
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Protecting India's Critical <span className="text-amber-400">Infrastructure</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                NIKOLAX ELECTRICALS delivers world-class lightning protection, earthing systems, and surge protection solutions for power plants, high-rise buildings, and industrial facilities across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
                  Get Expert Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                  View Our Solutions
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-slate-700">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">1000+</div>
                  <div className="text-sm text-slate-300">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">20+</div>
                  <div className="text-sm text-slate-300">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">50+</div>
                  <div className="text-sm text-slate-300">Expert Engineers</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                alt="Electrical Infrastructure" 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-6 rounded-xl shadow-2xl max-w-xs">
                <div className="flex items-center mb-2">
                  <Shield className="h-8 w-8 text-blue-600 mr-3" />
                  <div>
                    <div className="font-bold text-lg">100% Safety</div>
                    <div className="text-sm text-slate-600">Guaranteed Protection</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Lightning Protection Works */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How Our Lightning Protection System Works</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Understanding the complete lightning protection system from air terminal to earthing
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/lovable-uploads/520d8524-016b-41a6-b6f2-854f53c4e7b0.png" 
                alt="ASLA ESE Air Terminal Lightning Protection System Diagram" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Complete System Components</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-blue-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">ASLA ESE Air Terminal</h4>
                    <p className="text-slate-600">Advanced Early Streamer Emission technology installed on the roof with mounting base for optimal lightning interception.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-amber-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Down Conductor System</h4>
                    <p className="text-slate-600">High-conductivity copper conductors with axis conductor saddles for safe lightning current path to ground.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-green-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Lightning Strike Counter</h4>
                    <p className="text-slate-600">Axis lightning strike counter monitors and records lightning activity for maintenance tracking.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-purple-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Earthing System</h4>
                    <p className="text-slate-600">Comprehensive earthing system with electrical earthing line ensures safe dissipation of lightning energy into the ground.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <h4 className="font-bold text-slate-900 mb-2">Key Advantages</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" /> 60m protection radius coverage</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" /> IEC 62305 international standard compliance</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" /> Real-time lightning strike monitoring</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" /> Integrated earthing system design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose NIKOLAX ELECTRICALS</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              At NIKOLAX ELECTRICALS, we are proud to offer lightning protection and earthing solutions that meet the highest global standards of safety and performance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581092335878-7d6956c18f70" 
                alt="Electrical Safety Solutions" 
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                The products we provide are backed by unmatched quality and over two decades of engineering expertise. Designed for reliability and tested in some of the most demanding environments, our systems are trusted across critical infrastructure, industrial plants, commercial facilities, and smart energy projects.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Whether it's an advanced ESE Lightning Arrester or a zero-maintenance Chemical Earthing System, our solutions bring together cutting-edge technology, proven designs, and technical precision — ensuring your people, property, and operations remain protected.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-slate-700">ISO 9001:2015 Certified</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-slate-700">IEC 62305 Compliant</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-slate-700">10-Year Warranty</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-slate-700">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive electrical safety solutions designed for India's most critical infrastructure
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="/lovable-uploads/24ab51c8-6222-48b1-a075-bf221c321255.png" 
                  alt="Lightning Protection Systems" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Lightning Protection</CardTitle>
                <CardDescription>
                  Advanced ESE air terminals and lightning rod systems for comprehensive facility protection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" /> 60m protection radius</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" /> IEC 62305 compliant</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" /> Weather resistant design</li>
                </ul>
                <Button className="w-full mt-4" variant="outline">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789" 
                  alt="Earthing Systems" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-amber-600" />
                </div>
                <CardTitle>Earthing Systems</CardTitle>
                <CardDescription>
                  Chemical earthing and copper bonded rod solutions for optimal electrical safety
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" /> Maintenance-free operation</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" /> Low resistance values</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" /> 20+ year lifespan</li>
                </ul>
                <Button className="w-full mt-4" variant="outline">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1621905252107-b7d4e5b9e7b5" 
                  alt="Surge Protection" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Surge Protection</CardTitle>
                <CardDescription>
                  High-performance SPDs protecting sensitive equipment from electrical surges
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" /> High discharge capacity</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" /> Remote indication</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" /> DIN rail mounting</li>
                </ul>
                <Button className="w-full mt-4" variant="outline">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Industries We Protect</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Trusted by leading organizations across critical infrastructure sectors
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                  alt="Power Plants" 
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="font-semibold text-slate-900 mb-2">Power Plants</h3>
                <p className="text-sm text-slate-600">Critical power generation facilities</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <img 
                  src="https://images.unsplash.com/photo-1487252665478-49b61b47f302" 
                  alt="High-Rise Buildings" 
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="font-semibold text-slate-900 mb-2">High-Rise Buildings</h3>
                <p className="text-sm text-slate-600">Commercial and residential towers</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e" 
                  alt="Telecom Towers" 
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="font-semibold text-slate-900 mb-2">Telecom Towers</h3>
                <p className="text-sm text-slate-600">Communication infrastructure</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Manufacturing" 
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="font-semibold text-slate-900 mb-2">Manufacturing</h3>
                <p className="text-sm text-slate-600">Industrial production facilities</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e" 
                alt="Our Vision" 
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Vision</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                To be India's most trusted partner in electrical safety solutions, protecting critical infrastructure through innovative lightning protection, earthing, and surge protection systems.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                We envision a future where every facility, from power plants to high-rise buildings, operates with complete confidence in their electrical safety systems.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-slate-900">Excellence</div>
                  <div className="text-sm text-slate-600">In every solution</div>
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-lg">
                  <Shield className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                  <div className="font-semibold text-slate-900">Safety</div>
                  <div className="text-sm text-slate-600">Always first priority</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Infrastructure?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Get expert consultation on lightning protection and earthing solutions tailored to your specific needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Call: +91 98765 43210
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              <Mail className="mr-2 h-5 w-5" />
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
