
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Award, Users, Target, Eye, Heart, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-900" />
              <span className="text-2xl font-bold text-blue-900">Bharat Shield</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-slate-700 hover:text-blue-900 font-medium">Home</Link>
              <Link to="/about" className="text-blue-900 font-medium">About Us</Link>
              <Link to="/products" className="text-slate-700 hover:text-blue-900 font-medium">Products</Link>
              <Link to="/industries" className="text-slate-700 hover:text-blue-900 font-medium">Industries</Link>
              <Link to="/contact" className="text-slate-700 hover:text-blue-900 font-medium">Contact</Link>
            </div>
            <Button className="bg-blue-900 hover:bg-blue-800 text-white">
              Get Quote
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About Bharat Shield</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Two decades of engineering excellence in electrical safety solutions
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Legacy</h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Founded in 2000, Bharat Shield emerged from a vision to protect India's rapidly growing 
                industrial infrastructure from electrical hazards. What started as a small engineering 
                consultancy has evolved into one of India's most trusted names in electrical safety solutions.
              </p>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Our commitment to engineering precision, technical authority, and unwavering quality has 
                earned us the trust of leading industries across the nation. From protecting critical power 
                infrastructure to safeguarding high-rise buildings, we've been the shield that stands between 
                electrical hazards and India's progress.
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

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Foundation</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The principles that guide our engineering excellence and commitment to safety
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-900" />
                </div>
                <CardTitle className="text-2xl text-slate-900">Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 leading-relaxed">
                  To be India's foremost provider of electrical safety solutions, protecting critical 
                  infrastructure through innovative engineering, uncompromising quality, and technical excellence.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-2xl text-slate-900">Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 leading-relaxed">
                  To create a safer India where every critical infrastructure project is protected by 
                  world-class electrical safety systems, setting new standards in engineering excellence.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-slate-900">Values</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 leading-relaxed">
                  Engineering precision, technical authority, unwavering quality, customer-centricity, 
                  and continuous innovation in everything we do.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Bharat Shield */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose Bharat Shield?</h2>
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

      {/* Team Leadership (Placeholder) */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experienced professionals leading India's electrical safety revolution
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-slate-500" />
                </div>
                <CardTitle className="text-xl text-slate-900">Founder & CEO</CardTitle>
                <CardDescription className="text-slate-600">B.Tech Electrical, M.Tech Power Systems</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm leading-relaxed">
                  "Our mission is to protect India's infrastructure with world-class electrical safety solutions, 
                  built on engineering excellence and unwavering commitment to quality."
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-slate-500" />
                </div>
                <CardTitle className="text-xl text-slate-900">CTO</CardTitle>
                <CardDescription className="text-slate-600">Ph.D Electrical Engineering, IIT Delhi</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Leading our technical innovation and product development, ensuring we stay at the forefront 
                  of electrical safety technology.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-slate-500" />
                </div>
                <CardTitle className="text-xl text-slate-900">Head of Operations</CardTitle>
                <CardDescription className="text-slate-600">MBA Operations, 15+ Years Industry Experience</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Overseeing project execution and quality assurance, ensuring every installation meets 
                  our exacting standards.
                </p>
              </CardContent>
            </Card>
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
            Join hundreds of satisfied clients who trust Bharat Shield for their electrical safety needs. 
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
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-amber-400" />
                <span className="text-2xl font-bold">Bharat Shield</span>
              </Link>
              <p className="text-slate-400 leading-relaxed">
                India's premier electrical safety solutions provider, protecting critical infrastructure 
                with engineering excellence since 2000.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Products</h3>
              <ul className="space-y-2 text-slate-400">
                <li><Link to="/products" className="hover:text-white">Lightning Protection</Link></li>
                <li><Link to="/products" className="hover:text-white">Earthing Systems</Link></li>
                <li><Link to="/products" className="hover:text-white">Surge Protection</Link></li>
                <li><Link to="/products" className="hover:text-white">Safety Equipment</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Industries</h3>
              <ul className="space-y-2 text-slate-400">
                <li><Link to="/industries" className="hover:text-white">Power Plants</Link></li>
                <li><Link to="/industries" className="hover:text-white">High-Rise Buildings</Link></li>
                <li><Link to="/industries" className="hover:text-white">Telecom Towers</Link></li>
                <li><Link to="/industries" className="hover:text-white">Manufacturing</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-slate-400">
                <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link to="#" className="hover:text-white">Careers</Link></li>
                <li><Link to="#" className="hover:text-white">News</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Bharat Shield. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
