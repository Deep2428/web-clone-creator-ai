
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const ProductsCTA = () => {
  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Infrastructure?</h2>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Get expert consultation on lightning protection and earthing solutions tailored to your specific requirements.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
            <Mail className="mr-2 h-5 w-5" />
            Get Free Quote
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
            <Phone className="mr-2 h-5 w-5" />
            Call Expert
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsCTA;
