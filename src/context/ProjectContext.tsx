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
  solution?: string;
  outcome?: string;
  imageDescriptions?: string[];
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
      "/lovable-uploads/3a17bb76-cb4e-4b52-9e02-22e3b4817401.png",
      "/lovable-uploads/a0f0271f-1694-487d-9300-ee6e65f61572.png",
      "/lovable-uploads/b4648942-a215-499d-96ee-d0cf8ed2eb9e.png",
      "/lovable-uploads/2e9ca5ae-fab6-489e-8948-742bf740ecd3.png",
      "/lovable-uploads/9782bba2-37e2-42e4-b5da-90921161fd7c.png",
      "/lovable-uploads/f89b9b23-f31f-48f6-9c71-c74a2f1dca06.png",
      "/lovable-uploads/2d3c3c35-fc42-4a33-b75b-a4d532816ecd.png"
    ],
    technologies: ["CAD Design", "Prototyping", "3D Printing", "Laser Cutting", "Material Analysis", "Mechanical Analysis", "Machining"],
    date: "2025",
    clientName: "U.S. Military"
  },
  {
    id: "2",
    title: "R&D Pipe Flow Experiment",
    shortDescription: "Developed a pipe flow experiment to explore laminar flow in a subsection of a DAC unit.",
    description: "Led the development of a pipe flow experiment that increased understanding of laminar flow characteristics in Direct Air Capture (DAC) units. The system incorporated advanced measurement techniques and precise flow control to ensure accurate data collection and analysis.",
    coverImage: "https://pub.mdpi-res.com/fluids/fluids-09-00098/article_deploy/html/images/fluids-09-00098-g001.png?1713667677",
    images: [
      "https://i.imgur.com/1d6dPK7.png",
      "https://i.imgur.com/aMSovts.jpeg",
      "https://i.imgur.com/S71O6q2.jpeg",
      "https://i.imgur.com/qBNwX44.jpeg",
      "https://i.imgur.com/ymQ9ZJD.jpeg"
    ],
    imageDescriptions: [
      "P&ID: This shows the piping and instrumentation diagram of the experimental setup with the faucet cartridge installed.",
      "Version 1: Here is the first version of the experiment (w/o faucet cartridge). From this experiment, I determined that the system was not achieving laminar flow.",
      "Version 2: Here is the second version of the experiment (w/ faucet cartridge). From this experiment, I verified that incremental flow would allow for laminar flow.",
      "Rear of Experiment: This shows the actuated valve, relief valve, pressure indicator, and vacuum valve and vacuum pump attachment.",
      "Front of Experiment: This shows the steam reservoir, the pressure indicator, the faucet cartridge valve, and the pneumatic valve."
    ],
    technologies: ["Experimental Research", "Data Analysis", "Plumbing", "Thermodynamics", "Fluid Mechanics"],
    date: "2024",
    clientName: "Aircapture",
    solution: "To achieve the experiment, I designed a controlled setup using pneumatic and actuated valves to precisely regulate the timing of the fluid flow. Steam was generated from a water reservoir equipped with a pressure indicator, allowing me to monitor the transition from water to steam by carefully heating the system. A copper pipe, designed to mimic the DAC unit's piping, was fitted with four thermocouples to record temperature changes over time, enabling the analysis of the temperature gradient and confirmation of laminar flow conditions. A vacuum pump established the necessary initial vacuum conditions, while a relief valve was incorporated to ensure system safety throughout the experiment.",
    outcome: "The experiment revealed that the system was not achieving laminar flow as initially intended. Analysis of the temperature gradient and flow conditions indicated inconsistencies that suggested turbulent behavior. To address this, I determined that incorporating a control valve to regulate the flow rate into the pipe would be necessary. This solution took the form of a faucet cartridge, allowing for incremental adjustments to the steam flow rate. By implementing this modification, the system could be fine-tuned to better control fluid dynamics, increasing the likelihood of achieving stable laminar flow."
  },
  {
    id: "3",
    title: "Faucet Cartridge 3D Modeling",
    shortDescription: "Modeled a standard faucet cartridge to integrate into larger assemblies and machine compatible components out of new materials",
    description: "The primary challenge of this project was reverse engineering a faucet cartridge from the ground up. This required precise measurements and detailed modeling to accurately recreate its function within a full assembly.",
    coverImage: "https://images.ctfassets.net/q2hzfkp3j57e/6CIAwMrzUsQkeeCqEUoScG/65edd550b5784984ec573836a4e4116f/cnc-milling-1.webp?w=1600&h=1200&fm=jpg&q=82",
    images: [
      "https://i.imgur.com/ExeGlUM.jpeg",
      "https://i.imgur.com/7yH27wz.jpeg",
    ],
    imageDescriptions: [
      "Part Comparison: On the left are the two components that melted during testing. On the right are the new PEEK components that were manufactured based on my model.",
      "Melted Component: This is the plastic component that melted from high temperatures from testing. This connects the rotational component to the ceramic sealing, allowing the cartridge to act as a valve.",
      "SOLIDWORKS model of faucet cartridge"
    ],
    technologies: ["SOLIDWORKS", "CNC Machining", "Material Science"],
    date: "2024",
    clientName: "Aircapture",
    solution: "Using SOLIDWORKS, I meticulously designed a 3D model that replicated the original component's dimensions and functionality. This allowed for material modifications for each component, letting the company tailor it to their needs. Additionally, I made intentional design modifications to minimize manufacturing time and cost.",
    outcome: "Using my 3D model, inner components of the faucet cartridge that failed due to high temperatures in steam flow could be manufactured from PEEK to withstand these new high temperatures while keeping the rest of the faucet cartridge completely stock. This not only made a faucet cartridge a viable solution for steam flow but also reduced the cost of manufacturing for the company."
  },
  {
    id: "4",
    title: "Automated Manufacturing System",
    shortDescription: "Designed and implemented an automated manufacturing system for precision components.",
    description: "Developed and implemented a state-of-the-art automated manufacturing system that significantly improved production efficiency and quality control. The system integrated advanced robotics and control systems to ensure precise component manufacturing. The manufacturing requirements were to assembly, align, glue, and program each key tag for immediate use.",
    coverImage: "https://img.machinedesign.com/files/base/ebm/machinedesign/image/2023/11/6568d0487c14aa001f741983-jpg_version_211_2023_ur30_machinetending_image_03.png?auto=format,compress&fit=crop&q=45&h=356&height=356&w=640&width=640",
    images: [
      "https://i.imgur.com/Fo6as58.png",
      "https://i.imgur.com/riYfaHF.jpeg",
      "https://www.youtube.com/shorts/J9xxNIeHv9Y"
    ],
    imageDescriptions: [
      "Key Tag Example: A fully assembled key tag showing the final product that the automated system produces.",
      "Alignment Precision: This demonstrates the critical alignment requirements. The chip must be perfectly positioned within the key tag chassis for programming and functionality. The manufacturing process must prevent chip misalignment during glue setting.",
      "Manufacturing Process: Video demonstration of the automated key tag assembly and programming process."
    ],
    technologies: ["Robotics", "Control Systems", "Programming", "Process Optimization", "Automation"],
    date: "2023",
    clientName: "1Micro",
    solution: "The task required diagnosing performance issues, refining robotic programming, and implementing optimizations to improve consistency and throughput.",
    outcome: "The project transformed from an unreliable system into a high-performing automated process capable of increasing daily production capacity by 1.5x."
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
