import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
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
  );
};

export default ProductCard;