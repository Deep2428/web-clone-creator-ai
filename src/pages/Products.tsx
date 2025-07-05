
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, Building, Factory, CheckCircle, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
  const productCategories = [
    {
      id: "lightning-protection",
      title: "Lightning Protection Systems",
      description: "Advanced lightning protection devices for comprehensive facility protection",
      icon: Zap,
      color: "blue",
      products: [
        {
          name: "ESE Air Terminals",
          image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
          description: "Early Streamer Emission air terminals with superior protection radius and proven efficiency.",
          features: ["60m protection radius", "Stainless steel construction", "IEC 62305 compliant", "10-year warranty"],
          applications: ["Industrial facilities", "High-rise buildings", "Power plants"]
        },
        {
          name: "Down Conductors",
          image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e",
          description: "High-conductivity copper and aluminum down conductors for safe lightning current dissipation.",
          features: ["Copper & aluminum options", "Various cross-sections", "Corrosion resistant", "Easy installation"],
          applications: ["Commercial buildings", "Industrial structures", "Telecom towers"]
        },
        {
          name: "Lightning Rods",
          image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
          description: "Traditional and modern lightning rod systems for effective strike termination.",
          features: ["Multiple tip designs", "Weather resistant", "Low maintenance", "Proven technology"],
          applications: ["Residential buildings", "Warehouses", "Agricultural structures"]
        }
      ]
    },
    {
      id: "earthing-systems",
      title: "Earthing & Grounding Systems",
      description: "Precision-engineered earthing solutions for optimal electrical safety",
      icon: Shield,
      color: "amber",
      products: [
        {
          name: "Chemical Earthing",
          image: "https://images.unsplash.com/photo-1581092335878-7d6956c18f70",
          description: "Maintenance-free chemical earthing systems with consistent low resistance values.",
          features: ["Low resistance", "Maintenance-free", "Salt & moisture resistant", "20+ year lifespan"],
          applications: ["Power substations", "Industrial plants", "Telecom installations"]
        },
        {
          name: "Copper Bonded Rods",
          image: "https://images.unsplash.com/photo-1621905252472-e8de56a96885",
          description: "High-grade copper bonded steel rods for superior conductivity and corrosion resistance.",
          features: ["99.9% pure copper", "Molecularly bonded", "Various lengths", "Easy driving"],
          applications: ["Electrical panels", "Equipment grounding", "Building earthing"]
        },
        {
          name: "Structural Earthing",
          image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13",
          description: "Comprehensive structural earthing solutions for building frames and infrastructure.",
          features: ["Integrated design", "Code compliant", "Galvanized components", "Professional installation"],
          applications: ["Steel structures", "Concrete buildings", "Industrial facilities"]
        }
      ]
    },
    {
      id: "surge-protection",
      title: "Surge Protection Devices",
      description: "High-performance SPDs protecting sensitive equipment from electrical surges",
      icon: Building,
      color: "green",
      products: [
        {
          name: "Type 1 SPDs",
          image: "https://images.unsplash.com/photo-1621905252107-b7d4e5b9e7b5",
          description: "Class I surge arresters for main distribution panels and service entrances.",
          features: ["High discharge capacity", "Remote indication", "Thermal disconnect", "DIN rail mounting"],
          applications: ["Main electrical panels", "Service entrances", "Critical equipment"]
        },
        {
          name: "Type 2 SPDs", 
          image: "https://images.unsplash.com/photo-1558618047-3dd3d86bd1c9",
          description: "Class II surge protection for sub-distribution and final circuits.",
          features: ["Compact design", "LED status indication", "Easy replacement", "Multiple pole options"],
          applications: ["Sub-panels", "Motor control centers", "Sensitive electronics"]
        },
        {
          name: "DC Surge Arresters",
          image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
          description: "Specialized surge protection for DC systems and renewable energy installations.",
          features: ["DC rated", "Solar compatible", "Wide voltage range", "Weather resistant"],
          applications: ["Solar installations", "Battery systems", "DC motor drives"]
        }
      ]
    }
  ];

  const getIconColor = (color: string) => {
    switch (color) {
      case "blue": return "text-blue-600";
      case "amber": return "text-amber-600";
      case "green": return "text-green-600";
      default: return "text-blue-600";
    }
  };

  const getBgColor = (color: string) => {
    switch (color) {
      case "blue": return "bg-blue-100";
      case "amber": return "bg-amber-100";
      case "green": return "bg-green-100";
      default: return "bg-blue-100";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-900" />
              <span className="text-2xl font-bold text-blue-900">Bharat Shield</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-slate-700 hover:text-blue-900 font-medium">Home</Link>
              <Link to="/about" className="text-slate-700 hover:text-blue-900 font-medium">About Us</Link>
              <Link to="/products" className="text-blue-900 font-medium border-b-2 border-blue-900">Products</Link>
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
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Premium Electrical Safety <span className="text-amber-400">Products</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Comprehensive range of lightning protection, earthing, and surge protection solutions 
              engineered for India's critical infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      {productCategories.map((category, categoryIndex) => (
        <section key={category.id} className={categoryIndex % 2 === 0 ? "py-16" : "py-16 bg-slate-50"}>
          <div className="container mx-auto px-6">
            {/* Category Header */}
            <div className="text-center mb-12">
              <div className={`w-16 h-16 ${getBgColor(category.color)} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <category.icon className={`h-8 w-8 ${getIconColor(category.color)}`} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{category.title}</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">{category.description}</p>
            </div>

            {/* Products Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              {category.products.map((product, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl text-slate-900">{product.name}</CardTitle>
                    <CardDescription className="text-slate-600 leading-relaxed">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Key Features:</h4>
                      <div className="space-y-1">
                        {product.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-slate-700">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Applications */}
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Applications:</h4>
                      <div className="flex flex-wrap gap-1">
                        {product.applications.map((app, appIndex) => (
                          <Badge key={appIndex} variant="outline" className="text-xs">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" className="flex-1 text-sm">
                        View Details
                      </Button>
                      <Button className="flex-1 bg-blue-900 hover:bg-blue-800 text-sm">
                        Get Quote
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Custom Solutions?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Our engineering team can design bespoke electrical safety solutions tailored to your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Speak to Expert
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              Download Catalog
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-amber-400" />
                <span className="text-2xl font-bold">Bharat Shield</span>
              </div>
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

export default Products;
