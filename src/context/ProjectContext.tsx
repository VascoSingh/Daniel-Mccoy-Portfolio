
import { createContext, ReactNode, useContext, useState } from "react";

export type Project = {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  coverImage: string;
  images: string[];
  technologies: string[];
  date: string;
  clientName?: string;
};

// Sample project data
const initialProjects: Project[] = [
  {
    id: "1",
    title: "Heavy Weapons Transportation System",
    shortDescription: "Designed and manufactured a passive transportation system for U.S. military heavy weaponry.",
    description: "Led the development of a passive transportation system for U.S. military heavy weaponry that increased mobility and deployment efficiency. The system incorporated advanced materials and mechanical design principles to ensure durability and reliability in various operational environments.",
    coverImage: "/lovable-uploads/bc3af0e5-7065-480f-a341-ecc62aab626f.png",
    images: [
      "/lovable-uploads/bc3af0e5-7065-480f-a341-ecc62aab626f.png",
      "https://i.imgur.com/RCxEyFH.jpg",
      "https://i.imgur.com/Wn3S86A.jpg",
      "https://i.imgur.com/V0ZXwQd.jpg",
      "https://i.imgur.com/tTEeC6n.jpg",
      "https://i.imgur.com/3mwMv72.jpg"
    ],
    technologies: ["CAD Design", "Prototyping", "3D Printing", "Laser Cutting", "Material Analysis", "Mechanical Analysis", "Machining"],
    date: "2025",
    clientName: "U.S. Military"
  },
  {
    id: "2",
    title: "Automated Manufacturing System",
    shortDescription: "Designed and implemented an automated manufacturing system for precision components.",
    description: "Led the development of a fully automated manufacturing system that increased production efficiency by 45%. The system incorporated advanced robotics, computer vision, and machine learning algorithms to identify and correct manufacturing defects in real-time.",
    coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["CAD Design", "Robotics", "PLC Programming", "Machine Vision"],
    date: "2023",
    clientName: "TechManufacturing Inc."
  },
  {
    id: "3",
    title: "Sustainable Energy Conversion System",
    shortDescription: "Developed a high-efficiency energy conversion system for sustainable power generation.",
    description: "Engineered an innovative energy conversion system that captures and converts waste heat into usable electricity. The system achieves 38% efficiency, significantly higher than industry standards, and has been implemented in three manufacturing facilities.",
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["Thermodynamics", "Finite Element Analysis", "SOLIDWORKS", "Energy Modeling"],
    date: "2022"
  },
  {
    id: "4",
    title: "Advanced Prosthetic Limb",
    shortDescription: "Created a lightweight, durable prosthetic limb with enhanced mobility and comfort.",
    description: "Designed and prototyped a next-generation prosthetic limb using composite materials and additive manufacturing techniques. The design reduced weight by 30% while increasing strength and durability, and incorporated advanced sensors for improved user control and feedback.",
    coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["Biomechanics", "3D Printing", "Material Science", "Human-Centered Design"],
    date: "2022-2023"
  },
  {
    id: "5",
    title: "Automated HVAC Optimization System",
    shortDescription: "Developed an intelligent HVAC system that reduces energy consumption by 32%.",
    description: "Created an AI-driven HVAC optimization system that continuously monitors environmental conditions and adjusts settings to maximize comfort while minimizing energy usage. The system has been implemented in commercial buildings, resulting in significant cost savings and reduced carbon footprint.",
    coverImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["Thermal Dynamics", "IoT Sensors", "Control Systems", "Machine Learning"],
    date: "2021"
  }
];

type ProjectContextType = {
  projects: Project[];
  getProject: (id: string) => Project | undefined;
};

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [projects] = useState<Project[]>(initialProjects);

  const getProject = (id: string) => {
    return projects.find(project => project.id === id);
  };

  return (
    <ProjectContext.Provider value={{ projects, getProject }}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProjects() {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error("useProjects must be used within a ProjectProvider");
  }
  return context;
}
