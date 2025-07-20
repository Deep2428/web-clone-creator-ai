
import { Building, Factory, Zap, Shield, Database, Heart } from "lucide-react";

export interface Solution {
  name: string;
  description: string;
}

export interface Industry {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: any;
  iconColor: string;
  bgColor: string;
  projects: number;
  challenges: string[];
  solutions: Solution[];
}

export const industriesData: Industry[] = [
  {
    id: "power-plants",
    title: "Power Plants & Substations",
    description: "Critical electrical infrastructure requires the highest level of protection against lightning strikes and electrical surges. Our specialized solutions ensure uninterrupted power generation and distribution across thermal, hydro, and renewable energy facilities.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e",
    icon: Factory,
    iconColor: "text-amber-600",
    bgColor: "bg-amber-100",
    projects: 150,
    challenges: [
      "Protection of high-voltage equipment and transformers",
      "Ensuring operational continuity and preventing costly downtime",
      "Meeting stringent safety regulations and compliance standards",
      "Protecting against both direct lightning strikes and induced surges"
    ],
    solutions: [
      {
        name: "Substation Lightning Protection",
        description: "Comprehensive protection systems for outdoor switchyards and control buildings"
      },
      {
        name: "Equipment Grounding",
        description: "Specialized earthing solutions for generators, transformers, and control systems"
      },
      {
        name: "Surge Protection",
        description: "Multi-level SPD systems for sensitive control and monitoring equipment"
      },
      {
        name: "Maintenance Services",
        description: "Regular testing and maintenance to ensure optimal system performance"
      }
    ]
  },
  {
    id: "high-rise-buildings",
    title: "High-Rise Buildings & Complexes",
    description: "Modern skyscrapers and commercial complexes face unique lightning protection challenges due to their height and complex electrical systems. Our solutions protect both the structure and its occupants from electrical hazards.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    icon: Building,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-100",
    projects: 300,
    challenges: [
      "Protecting tall structures from direct lightning strikes",
      "Safeguarding elevators, HVAC, and building management systems",
      "Ensuring resident and occupant safety",
      "Compliance with local building codes and international standards"
    ],
    solutions: [
      {
        name: "ESE Air Terminals",
        description: "Advanced early streamer emission systems for comprehensive building protection"
      },
      {
        name: "Structural Lightning Protection",
        description: "Integrated protection systems within building frameworks"
      },
      {
        name: "Elevator Protection",
        description: "Specialized surge protection for elevator control systems"
      },
      {
        name: "Fire Safety Integration",
        description: "Coordinated protection with fire detection and suppression systems"
      }
    ]
  },
  {
    id: "telecom-towers",
    title: "Telecom Towers & Infrastructure",
    description: "Communication towers are prime targets for lightning strikes due to their height and isolated locations. Our protection systems ensure uninterrupted telecommunications services and protect expensive equipment investments.",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13",
    icon: Zap,
    iconColor: "text-green-600",
    bgColor: "bg-green-100",
    projects: 500,
    challenges: [
      "Extreme exposure to lightning strikes due to height and location",
      "Protection of sensitive RF and transmission equipment",
      "Minimizing service interruptions and maintaining network reliability",
      "Dealing with remote locations and harsh environmental conditions"
    ],
    solutions: [
      {
        name: "Tower Lightning Protection",
        description: "Complete protection systems for cellular and broadcast towers"
      },
      {
        name: "RF Equipment Protection",
        description: "Specialized surge protection for transmitters and receivers"
      },
      {
        name: "Base Station Earthing",
        description: "Low-resistance earthing systems for equipment shelters"
      },
      {
        name: "Remote Monitoring",
        description: "IoT-enabled monitoring systems for remote facility management"
      }
    ]
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Industrial Facilities",
    description: "Industrial facilities house critical production equipment and processes that cannot afford electrical disruptions. Our protection systems safeguard manufacturing operations and prevent costly production losses.",
    image: "https://images.unsplash.com/photo-1581092335878-7d6956c18f70",
    icon: Shield,
    iconColor: "text-purple-600",
    bgColor: "bg-purple-100",
    projects: 250,
    challenges: [
      "Protecting automated production lines and control systems",
      "Preventing production downtime and equipment damage",
      "Ensuring worker safety in industrial environments",
      "Managing complex electrical distribution systems"
    ],
    solutions: [
      {
        name: "Industrial Surge Protection",
        description: "Heavy-duty SPDs for motor control centers and production equipment"
      },
      {
        name: "Process Control Protection",
        description: "Specialized protection for PLCs, SCADA, and automation systems"
      },
      {
        name: "Facility-Wide Earthing",
        description: "Comprehensive earthing networks for large industrial complexes"
      },
      {
        name: "Emergency Systems",
        description: "Protection for backup power and emergency shutdown systems"
      }
    ]
  },
  {
    id: "data-centers",
    title: "Data Centers & IT Infrastructure",
    description: "Data centers require the highest level of electrical protection to ensure continuous operation and data integrity. Our solutions protect critical IT infrastructure from power quality issues and electrical disturbances.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    icon: Database,
    iconColor: "text-cyan-600",
    bgColor: "bg-cyan-100",
    projects: 75,
    challenges: [
      "Ensuring 99.99% uptime for critical IT services",
      "Protecting against micro-surges that can cause data corruption",
      "Managing complex power distribution and backup systems",
      "Maintaining strict environmental and safety standards"
    ],
    solutions: [
      {
        name: "Precision Surge Protection",
        description: "Ultra-sensitive SPDs for servers and networking equipment"
      },
      {
        name: "UPS System Protection",
        description: "Specialized protection for uninterruptible power supply systems"
      },
      {
        name: "Raised Floor Earthing",
        description: "Specialized earthing solutions for raised floor environments"
      },
      {
        name: "Power Quality Monitoring",
        description: "Real-time monitoring of power quality parameters"
      }
    ]
  },
  {
    id: "healthcare",
    title: "Hospitals & Healthcare Facilities",
    description: "Healthcare facilities require uninterrupted power for life-critical equipment and patient safety. Our protection systems ensure reliable operation of medical devices and emergency systems.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f",
    icon: Heart,
    iconColor: "text-red-600",
    bgColor: "bg-red-100",
    projects: 120,
    challenges: [
      "Protecting life-critical medical equipment and systems",
      "Ensuring continuous operation of emergency and backup systems",
      "Meeting strict healthcare regulations and safety standards",
      "Preventing electrical interference with sensitive medical devices"
    ],
    solutions: [
      {
        name: "Medical Grade Protection",
        description: "Hospital-grade surge protection for critical care equipment"
      },
      {
        name: "Isolated Power Systems",
        description: "Specialized protection for operating rooms and ICUs"
      },
      {
        name: "Emergency Power Protection",
        description: "Protection for generators and emergency distribution systems"
      },
      {
        name: "Patient Safety Systems",
        description: "Comprehensive earthing and equipotential bonding solutions"
      }
    ]
  }
];
