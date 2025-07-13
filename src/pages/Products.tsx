
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductsHero from "@/components/products/ProductsHero";
import ProductsCTA from "@/components/products/ProductsCTA";

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="products" />
      <ProductsHero />
      <ProductsCTA />
      <Footer />
    </div>
  );
};

export default Products;
