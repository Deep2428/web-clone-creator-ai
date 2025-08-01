
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Award, Users, Target, Eye, Heart, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation currentPage="about" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About NIKOLAX ELECTRICALS</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Two decades of engineering excellence in electrical safety solutions
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-8">We Are Built for Infrastructure-Grade Protection</h2>
            <p className="text-xl text-slate-700 mb-8 leading-relaxed">
              NIKOLAX ELECTRICALS is a future-ready company providing next-generation lightning protection, earthing systems, surge protection, and grounding solutions.
            </p>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              Our mission is simple — to make Indian infrastructure safer, smarter, and more electrically resilient. Whether it's a solar plant, airport, refinery, high-rise, or data center, we serve mission-critical sectors where reliability is non-negotiable.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Though new in the market, we bring together the best components, engineered and manufactured by top-tier OEMs — chosen for their global trust and technical superiority. Our role is to make these systems accessible, support installation planning, and ensure they're deployed right the first time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-3xl font-bold text-blue-900 mb-4 flex items-center">
                <span className="text-4xl mr-3">🌍</span>
                Our Vision
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                To be India's most trusted partner for safe, smart, and sustainable electrical grounding and lightning protection — empowering every building and project to meet global safety benchmarks.
              </p>
            </div>

            <div className="bg-amber-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-amber-800 mb-4 flex items-center">
                <span className="text-3xl mr-3">🎯</span>
                Our Mission
              </h3>
              <ul className="text-slate-700 space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  Supply reliable, certified, and industry-grade electrical safety components
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  Bridge the gap between world-class OEMs and local project needs
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  Educate the industry about compliant lightning and earthing systems
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  Provide technical support and transparent pricing clients can trust
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Us</h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                At NIKOLAX ELECTRICALS, we are proud to offer lightning protection and earthing solutions that meet the highest global standards of safety and performance.
              </p>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                The products we provide are backed by unmatched quality and over two decades of engineering expertise. Designed for reliability and tested in some of the most demanding environments, our systems are trusted across critical infrastructure, industrial plants, commercial facilities, and smart energy projects.
              </p>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Whether it's an advanced ESE Lightning Arrester or a zero-maintenance Chemical Earthing System, our solutions bring together cutting-edge technology, proven designs, and technical precision — ensuring your people, property, and operations remain protected.
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-900 mb-2">500+</div>
                  <div className="text-slate-600">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-900 mb-2">20+</div>
                  <div className="text-slate-600">Years</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-900 mb-2">100+</div>
                  <div className="text-slate-600">Clients</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" 
                alt="Industrial Infrastructure" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose NIKOLAX ELECTRICALS?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The reasons why India's leading industries trust us with their most critical projects
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Engineering Excellence</h3>
                  <p className="text-slate-600">
                    Our team of qualified engineers brings decades of experience in electrical safety design 
                    and implementation.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Quality Assurance</h3>
                  <p className="text-slate-600">
                    All our products meet international standards including IEC, ISO, and BIS certifications 
                    for guaranteed performance.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">B2B Focus</h3>
                  <p className="text-slate-600">
                    We understand the unique requirements of industrial and infrastructure projects, 
                    providing tailored solutions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Comprehensive Support</h3>
                  <p className="text-slate-600">
                    From initial consultation to installation and maintenance, we provide end-to-end 
                    technical support.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Pan-India Presence</h3>
                  <p className="text-slate-600">
                    With projects across India, we understand local conditions and regulatory requirements 
                    in every state.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1527576539890-dfa815648363" 
                alt="Engineering Excellence" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Certifications</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Recognized quality standards that ensure reliability and performance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card className="text-center border-2 border-blue-100 hover:border-blue-300 transition-colors">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-blue-900 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">ISO 9001:2015</h3>
                <p className="text-sm text-slate-600">Quality Management System</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-2 border-blue-100 hover:border-blue-300 transition-colors">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-blue-900 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">IEC 62305</h3>
                <p className="text-sm text-slate-600">Lightning Protection Standard</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-2 border-blue-100 hover:border-blue-300 transition-colors">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-blue-900 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">BIS Certified</h3>
                <p className="text-sm text-slate-600">Bureau of Indian Standards</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-2 border-blue-100 hover:border-blue-300 transition-colors">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-blue-900 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">IS 2309</h3>
                <p className="text-sm text-slate-600">Lightning Arresters Standard</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-2 border-blue-100 hover:border-blue-300 transition-colors">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-blue-900 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">UL Listed</h3>
                <p className="text-sm text-slate-600">International Safety Standard</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Partner with Us?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of satisfied clients who trust NIKOLAX ELECTRICALS for their electrical safety needs. 
            Let's discuss how we can protect your infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
              Get Quote Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
