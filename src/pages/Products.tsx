import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductsHero from "@/components/products/ProductsHero";
import ProductCategory from "@/components/products/ProductCategory";
import ProductsCTA from "@/components/products/ProductsCTA";
import { productCategories } from "@/data/products";

const Products = () => {

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="products" />
      <ProductsHero />
      
      {/* Product Categories */}
      {productCategories.map((category, categoryIndex) => (
        <ProductCategory 
          key={category.id} 
          category={category} 
          index={categoryIndex} 
        />
      ))}
      
      <ProductsCTA />
      <Footer />
    </div>
  );
};

export default Products;
