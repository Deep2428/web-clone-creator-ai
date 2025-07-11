import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

interface NavigationProps {
  currentPage?: string;
}

const Navigation = ({ currentPage = "" }: NavigationProps) => {
  const isActive = (page: string) => currentPage === page;

  return (
    <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-900" />
            <span className="text-2xl font-bold text-blue-900">NIKOLAX Electrical</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-slate-700 hover:text-blue-900 font-medium ${
                isActive("home") ? "text-blue-900 border-b-2 border-blue-900" : ""
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-slate-700 hover:text-blue-900 font-medium ${
                isActive("about") ? "text-blue-900 border-b-2 border-blue-900" : ""
              }`}
            >
              About Us
            </Link>
            <Link 
              to="/products" 
              className={`text-slate-700 hover:text-blue-900 font-medium ${
                isActive("products") ? "text-blue-900 border-b-2 border-blue-900" : ""
              }`}
            >
              Products
            </Link>
            <Link 
              to="/industries" 
              className={`text-slate-700 hover:text-blue-900 font-medium ${
                isActive("industries") ? "text-blue-900 border-b-2 border-blue-900" : ""
              }`}
            >
              Industries
            </Link>
            <Link 
              to="/contact" 
              className={`text-slate-700 hover:text-blue-900 font-medium ${
                isActive("contact") ? "text-blue-900 border-b-2 border-blue-900" : ""
              }`}
            >
              Contact
            </Link>
          </div>
          <Button className="bg-blue-900 hover:bg-blue-800 text-white">
            Get Quote
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;