
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="mb-4">
              <Logo variant="light" size="md" />
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              India's premier electrical safety solutions provider, protecting critical infrastructure 
              with engineering excellence since 2000.
            </p>
            <div className="space-y-2">
              <div className="text-slate-400">
                <strong>Head Office:</strong><br />
                Plot No. 245, Industrial Area Phase-I<br />
                Andheri East, Mumbai - 400069, Maharashtra
              </div>
              <div className="text-slate-400">
                <strong>Phone:</strong> <a href="tel:+919876543210" className="hover:text-white">+91 98765 43210</a><br />
                <strong>Email:</strong> <a href="mailto:info@nikolax.com" className="hover:text-white">info@nikolax.com</a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-2 text-slate-400">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
                <li><Link to="/industries" className="hover:text-white transition-colors">Industries</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
              <ul className="space-y-2 text-slate-400">
                <li><Link to="/products" className="hover:text-white transition-colors">Lightning Protection</Link></li>
                <li><Link to="/products" className="hover:text-white transition-colors">Earthing Systems</Link></li>
                <li><Link to="/products" className="hover:text-white transition-colors">Surge Protection</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Technical Support</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Get Quote</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 NIKOLAX Electrical Solutions Pvt. Ltd. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-2">
            <a href="#" className="hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white text-sm transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
