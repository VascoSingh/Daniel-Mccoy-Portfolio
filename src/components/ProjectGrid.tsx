
import { useProjects } from "@/context/ProjectContext";
import { ProjectCard } from "./ProjectCard";
import { RevealAnimation } from "./ui/reveal-animation";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { GlassCard } from "./ui/glass-card";
import { Badge } from "./ui/badge";

interface ProjectGridProps {
  featuredProjectId?: string;
}

export function ProjectGrid({ featuredProjectId }: ProjectGridProps) {
  const { projects, getProject } = useProjects();
  const featuredProject = featuredProjectId ? getProject(featuredProjectId) : null;
  
  // Filter out the featured project from the regular grid if it exists
  const regularProjects = featuredProject 
    ? projects.filter(p => p.id !== featuredProjectId) 
    : projects;

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
        
        {/* Featured Project */}
        {featuredProject && (
          <RevealAnimation type="fadeIn" className="mb-16">
            <GlassCard className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="h-full">
                  <img 
                    src={featuredProject.coverImage} 
                    alt={featuredProject.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <span className="text-sm font-medium text-primary tracking-wider">FEATURED PROJECT</span>
                    <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4">{featuredProject.title}</h3>
                    <p className="text-muted-foreground mb-6">{featuredProject.shortDescription}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {featuredProject.technologies.slice(0, 5).map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                      {featuredProject.technologies.length > 5 && (
                        <Badge variant="outline">
                          +{featuredProject.technologies.length - 5} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <Link to={`/project/${featuredProject.id}`}>
                    <Button className="w-full sm:w-auto group">
                      View project details
                      <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </GlassCard>
          </RevealAnimation>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularProjects.map((project, index) => (
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
