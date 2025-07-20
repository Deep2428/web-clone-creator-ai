
import { Building, Factory, Zap, Shield } from "lucide-react";

const IndustriesHero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Industries We <span className="text-amber-400">Protect</span>
          </h1>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            From power plants to high-rise buildings, we provide comprehensive electrical safety solutions 
            across India's most critical infrastructure sectors.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Factory className="h-8 w-8 text-amber-400" />
              </div>
              <h3 className="font-semibold">Power Plants</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Building className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="font-semibold">High-Rise Buildings</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="font-semibold">Telecom Towers</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="font-semibold">Manufacturing</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesHero;
