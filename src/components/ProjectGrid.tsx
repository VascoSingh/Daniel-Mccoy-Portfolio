
import { useProjects } from "@/context/ProjectContext";
import { ProjectCard } from "./ProjectCard";
import { RevealAnimation } from "./ui/reveal-animation";

export function ProjectGrid() {
  const { projects } = useProjects();

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -right-64 top-1/4 w-96 h-96 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
      <div className="absolute -left-32 bottom-1/4 w-64 h-64 bg-blue-200/20 dark:bg-blue-800/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto">
        <RevealAnimation type="slideUp">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary tracking-wider">MY WORK</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">Featured Projects</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Browse my portfolio of mechanical engineering projects, showcasing innovative solutions 
              and precision designs across various applications.
            </p>
          </div>
        </RevealAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
