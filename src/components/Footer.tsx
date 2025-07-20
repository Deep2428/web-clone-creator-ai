
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <Logo variant="light" size="md" />
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
          <p>&copy; 2024 NIKOLAX Electrical. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
