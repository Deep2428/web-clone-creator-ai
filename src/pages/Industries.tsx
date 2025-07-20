
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustrySection from "@/components/industries/IndustrySection";
import IndustriesCTA from "@/components/industries/IndustriesCTA";
import { industriesData } from "@/data/industries";

const Industries = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="industries" />
      <IndustriesHero />
      {industriesData.map((industry, index) => (
        <IndustrySection key={industry.id} industry={industry} index={index} />
      ))}
      <IndustriesCTA />
      <Footer />
    </div>
  );
};

export default Industries;
