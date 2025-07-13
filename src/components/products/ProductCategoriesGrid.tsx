
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Shield, 
  Plug, 
  Wrench, 
  FlaskConical, 
  Settings 
} from "lucide-react";

const ProductCategoriesGrid = () => {
  const categories = [
    {
      id: 1,
      title: "ESE Lightning Protection Systems",
      icon: Zap,
      description: "Early Streamer Emission (ESE) Air Terminals for proactive lightning capture and safe discharge. Ideal for industrial rooftops, towers, and high-risk installations.",
      keyPoints: [
        "High-efficiency lightning dissipation",
        "Maintenance-free design", 
        "Complies with NFC 17-102 / IEC 62305"
      ],
      color: "blue"
    },
    {
      id: 2,
      title: "Earthing Electrodes & Rods",
      icon: Shield,
      description: "High-performance grounding electrodes for safe fault current dissipation and corrosion resistance.",
      keyPoints: [
        "Copper Bonded Rods",
        "Pipe-in-Pipe Electrodes",
        "Chemical Earthing",
        "Maintenance-Free Systems"
      ],
      color: "amber"
    },
    {
      id: 3,
      title: "Surge Protection Devices (SPD)",
      icon: Plug,
      description: "Protective devices to guard sensitive equipment from voltage spikes and lightning-induced surges.",
      keyPoints: [
        "Type 1 / Type 2 / Type 3 SPDs",
        "Single & Three-Phase",
        "DIN-rail Compatible"
      ],
      color: "green"
    },
    {
      id: 4,
      title: "Earthing & Bonding Accessories",
      icon: Wrench,
      description: "Precision-grade accessories to complete your earthing infrastructure.",
      keyPoints: [
        "Copper/GI Strips and Cables",
        "Brass Clamps, Test Links",
        "Busbars, Earth Pit Covers"
      ],
      color: "blue"
    },
    {
      id: 5,
      title: "Earth Enhancing Compounds",
      icon: FlaskConical,
      description: "Advanced backfill materials to reduce electrode resistance and improve long-term performance.",
      keyPoints: [
        "Carbon-rich compounds",
        "Bentonite clay",
        "Moisture-locking additives"
      ],
      color: "amber"
    },
    {
      id: 6,
      title: "Customized Protection Systems",
      icon: Settings,
      description: "Site-specific lightning and earthing solutions tailored for specialized applications.",
      keyPoints: [
        "Solar Power Plants",
        "High-Rise Buildings",
        "Data Centers",
        "Airports & Factories"
      ],
      color: "green"
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
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Product Categories</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive range of electrical safety solutions engineered for critical infrastructure protection
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {categories.map((category) => (
            <Card key={category.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${getBgColor(category.color)} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <category.icon className={`h-6 w-6 ${getIconColor(category.color)}`} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-slate-900 mb-2">
                      {category.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  {category.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">
                    {category.id === 2 ? "Types Available:" : 
                     category.id === 3 ? "Categories:" :
                     category.id === 4 ? "Products Include:" :
                     category.id === 5 ? "Types:" :
                     category.id === 6 ? "Applications:" : "Key Points:"}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.keyPoints.map((point, index) => (
                      <Badge key={index} variant="outline" className="text-sm">
                        {point}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategoriesGrid;
