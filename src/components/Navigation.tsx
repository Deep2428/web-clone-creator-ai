
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Logo from "./Logo";

interface NavigationProps {
  currentPage?: string;
}

const Navigation = ({ currentPage = "" }: NavigationProps) => {
  const isActive = (page: string) => currentPage === page;

  return (
    <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <Logo variant="dark" size="md" />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-slate-700 hover:text-blue-900 font-medium transition-colors ${
                isActive("home") ? "text-blue-900 border-b-2 border-blue-900" : ""
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-slate-700 hover:text-blue-900 font-medium transition-colors ${
                isActive("about") ? "text-blue-900 border-b-2 border-blue-900" : ""
              }`}
            >
              About Us
            </Link>
            <Link 
              to="/products" 
              className={`text-slate-700 hover:text-blue-900 font-medium transition-colors ${
                isActive("products") ? "text-blue-900 border-b-2 border-blue-900" : ""
              }`}
            >
              Products
            </Link>
            <Link 
              to="/industries" 
              className={`text-slate-700 hover:text-blue-900 font-medium transition-colors ${
                isActive("industries") ? "text-blue-900 border-b-2 border-blue-900" : ""
              }`}
            >
              Industries
            </Link>
            <Link 
              to="/contact" 
              className={`text-slate-700 hover:text-blue-900 font-medium transition-colors ${
                isActive("contact") ? "text-blue-900 border-b-2 border-blue-900" : ""
              }`}
            >
              Contact
            </Link>
          </div>
          <Link to="/contact">
            <Button className="bg-blue-900 hover:bg-blue-800 text-white transition-colors">
              Get Quote
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
