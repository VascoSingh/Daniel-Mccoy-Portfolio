import { Project } from "@/context/ProjectContext";
import { RevealAnimation } from "@/components/ui/reveal-animation";

interface ProjectOverviewProps {
  project: Project;
  projectId: string;
}

export function ProjectOverview({ project, projectId }: ProjectOverviewProps) {
  return (
    <RevealAnimation type="slideUp" className="lg:col-span-2">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Project Overview</h2>
        <p className="text-muted-foreground">{project.description}</p>
        
        {/* Additional project content */}
        <div className="space-y-6 pt-4">
          {projectId === "1" && (
            <>
              <h3 className="text-xl font-semibold">The Previous Solution</h3>
              <p className="text-muted-foreground">
                The U.S. military currently allocates a component (ex. ammo, barrel, tripod, etc.) to different infantry members who then have to carry the additional 40-60 lbs in their rucksack.
              </p>
            </>
          )}
          
          <h3 className="text-xl font-semibold">The Challenge</h3>
          {projectId === "1" ? (
            <p className="text-muted-foreground">
              The project presented several complex engineering challenges, including optimizing manufacturability, minimizing weight while maximizing strength, and ensuring reliability under extreme conditions. These challenges are particularly critical in military applications, where heavy weapons and equipment must be transported across varied terrains. For example, assistant gunners (AGs) operating M2 .50 Cal Machine Guns face significant physical strain, as the full system can weigh up to 200 lbs, making weight reduction and durability essential factors in the design process.
            </p>
          ) : projectId === "2" ? (
            <p className="text-muted-foreground">
              The challenge lay in accurately replicating a subsection of the system's fluid dynamics under controlled conditions. Using dimensional analysis and known starting parameters, such as steam pressure and a system under vacuum, I developed a completely new experimental setup to mimic the targeted fluid flow. Ensuring fidelity to real-world conditions while maintaining precise control over experimental variables required innovative problem-solving and careful calibration.
            </p>
          ) : (
            <p className="text-muted-foreground">
              The project presented several complex engineering challenges, including optimization for 
              manufacturability, minimizing weight while maximizing strength, and ensuring reliability 
              under extreme conditions.
            </p>
          )}
          
          <h3 className="text-xl font-semibold">Our Solution</h3>
          {projectId === "1" ? (
            <p className="text-muted-foreground">
              Using advanced CAD modeling and rapid prototyping, my team developed an pull cart design that minimizes fatigue, improves mobility, and overall enhances functionality in rugged terrains.
            </p>
          ) : projectId === "2" && project.solution ? (
            <p className="text-muted-foreground">
              {project.solution}
            </p>
          ) : (
            <p className="text-muted-foreground">
              Using advanced CAD modeling and simulation software, I developed an innovative design that 
              incorporated composite materials and topology optimization. The result was a lightweight yet 
              robust solution that exceeded performance requirements.
            </p>
          )}
          
          <h3 className="text-xl font-semibold">The Outcome</h3>
          {projectId === "1" ? (
            <p className="text-muted-foreground">
              The final design allows for the full weapon system (gun & ammo) to be transported by only 2 soldiers, entirely removing extra strain on other soldiers as well as consolidating the weapon system to one location. Additionally, the design has a load capacity of 400 lbs and is collapsable for easy transport without loads.
            </p>
          ) : projectId === "2" && project.outcome ? (
            <p className="text-muted-foreground">
              {project.outcome}
            </p>
          ) : (
            <p className="text-muted-foreground">
              The final design achieved a 30% weight reduction while increasing structural integrity by 15%. 
              Production costs were reduced by 22% through material optimization and streamlined manufacturing 
              processes.
            </p>
          )}
        </div>
      </div>
    </RevealAnimation>
  );
}
