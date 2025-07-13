
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductsHero from "@/components/products/ProductsHero";
import ProductsIntro from "@/components/products/ProductsIntro";
import ProductCategoriesGrid from "@/components/products/ProductCategoriesGrid";
import ProductsCTA from "@/components/products/ProductsCTA";

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="products" />
      <ProductsHero />
      <ProductsIntro />
      <ProductCategoriesGrid />
      <ProductsCTA />
      <Footer />
    </div>
  );
};

export default Products;
