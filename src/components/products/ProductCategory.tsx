import ProductCard from "./ProductCard";
import { ProductCategory as ProductCategoryType } from "@/data/products";

interface ProductCategoryProps {
  category: ProductCategoryType;
  index: number;
}

const ProductCategory = ({ category, index }: ProductCategoryProps) => {
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
    <section className={index % 2 === 0 ? "py-16" : "py-16 bg-slate-50"}>
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
          {category.products.map((product, productIndex) => (
            <ProductCard key={productIndex} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;