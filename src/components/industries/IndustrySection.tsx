
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Industry } from "@/data/industries";

interface IndustrySectionProps {
  industry: Industry;
  index: number;
}

const IndustrySection = ({ industry, index }: IndustrySectionProps) => {
  const isEven = index % 2 === 0;

  return (
    <section className={`py-16 ${isEven ? "bg-white" : "bg-slate-50"}`}>
      <div className="container mx-auto px-6">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}>
          <div className={isEven ? "order-1" : "order-2"}>
            <div className="relative">
              <img 
                src={industry.image} 
                alt={industry.title}
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
                {industry.projects}+ Projects
              </div>
            </div>
          </div>
          
          <div className={isEven ? "order-2" : "order-1"}>
            <div className="flex items-center mb-6">
              <div className={`w-16 h-16 ${industry.bgColor} rounded-full flex items-center justify-center mr-4`}>
                <industry.icon className={`h-8 w-8 ${industry.iconColor}`} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">{industry.title}</h2>
            </div>
            
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              {industry.description}
            </p>
            
            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Challenges We Address:</h3>
              {industry.challenges.map((challenge, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-slate-700">{challenge}</p>
                </div>
              ))}
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {industry.solutions.map((solution, idx) => (
                <Card key={idx} className="border-0 shadow-sm bg-gradient-to-br from-slate-50 to-blue-50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{solution.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">{solution.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3">
              View Case Studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
