import { Zap, Shield, Building } from "lucide-react";

export interface Product {
  name: string;
  image: string;
  description: string;
  features: string[];
  applications: string[];
}

export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  products: Product[];
}

export const productCategories: ProductCategory[] = [
  {
    id: "lightning-protection",
    title: "Lightning Protection Systems",
    description: "Advanced lightning protection devices for comprehensive facility protection",
    icon: Zap,
    color: "blue",
    products: [
      {
        name: "ESE Air Terminals",
        image: "/lovable-uploads/24ab51c8-6222-48b1-a075-bf221c321255.png",
        description: "Early Streamer Emission air terminals with superior protection radius and proven efficiency.",
        features: ["60m protection radius", "Stainless steel construction", "IEC 62305 compliant", "10-year warranty"],
        applications: ["Industrial facilities", "High-rise buildings", "Power plants"]
      },
      {
        name: "Down Conductors",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e",
        description: "High-conductivity copper and aluminum down conductors for safe lightning current dissipation.",
        features: ["Copper & aluminum options", "Various cross-sections", "Corrosion resistant", "Easy installation"],
        applications: ["Commercial buildings", "Industrial structures", "Telecom towers"]
      },
      {
        name: "Lightning Rods",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
        description: "Traditional and modern lightning rod systems for effective strike termination.",
        features: ["Multiple tip designs", "Weather resistant", "Low maintenance", "Proven technology"],
        applications: ["Residential buildings", "Warehouses", "Agricultural structures"]
      }
    ]
  },
  {
    id: "earthing-systems",
    title: "Earthing & Grounding Systems",
    description: "Precision-engineered earthing solutions for optimal electrical safety",
    icon: Shield,
    color: "amber",
    products: [
      {
        name: "Chemical Earthing",
        image: "https://images.unsplash.com/photo-1581092335878-7d6956c18f70",
        description: "Maintenance-free chemical earthing systems with consistent low resistance values.",
        features: ["Low resistance", "Maintenance-free", "Salt & moisture resistant", "20+ year lifespan"],
        applications: ["Power substations", "Industrial plants", "Telecom installations"]
      },
      {
        name: "Copper Bonded Rods",
        image: "https://images.unsplash.com/photo-1621905252472-e8de56a96885",
        description: "High-grade copper bonded steel rods for superior conductivity and corrosion resistance.",
        features: ["99.9% pure copper", "Molecularly bonded", "Various lengths", "Easy driving"],
        applications: ["Electrical panels", "Equipment grounding", "Building earthing"]
      },
      {
        name: "Structural Earthing",
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13",
        description: "Comprehensive structural earthing solutions for building frames and infrastructure.",
        features: ["Integrated design", "Code compliant", "Galvanized components", "Professional installation"],
        applications: ["Steel structures", "Concrete buildings", "Industrial facilities"]
      }
    ]
  },
  {
    id: "surge-protection",
    title: "Surge Protection Devices",
    description: "High-performance SPDs protecting sensitive equipment from electrical surges",
    icon: Building,
    color: "green",
    products: [
      {
        name: "Type 1 SPDs",
        image: "https://images.unsplash.com/photo-1621905252107-b7d4e5b9e7b5",
        description: "Class I surge arresters for main distribution panels and service entrances.",
        features: ["High discharge capacity", "Remote indication", "Thermal disconnect", "DIN rail mounting"],
        applications: ["Main electrical panels", "Service entrances", "Critical equipment"]
      },
      {
        name: "Type 2 SPDs", 
        image: "https://images.unsplash.com/photo-1558618047-3dd3d86bd1c9",
        description: "Class II surge protection for sub-distribution and final circuits.",
        features: ["Compact design", "LED status indication", "Easy replacement", "Multiple pole options"],
        applications: ["Sub-panels", "Motor control centers", "Sensitive electronics"]
      },
      {
        name: "DC Surge Arresters",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
        description: "Specialized surge protection for DC systems and renewable energy installations.",
        features: ["DC rated", "Solar compatible", "Wide voltage range", "Weather resistant"],
        applications: ["Solar installations", "Battery systems", "DC motor drives"]
      }
    ]
  }
];
