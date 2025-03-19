
import { Project } from "@/context/ProjectContext";
import { GlassCard } from "./ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { RevealAnimation } from "./ui/reveal-animation";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <RevealAnimation 
      type="slideUp" 
      delay={index * 100} 
      className="h-full"
    >
      <Link to={`/project/${project.id}`} className="block h-full">
        <GlassCard className="group h-full overflow-hidden flex flex-col transition-all duration-500 hover:shadow-xl">
          {/* Image container */}
          <div className="overflow-hidden aspect-video relative">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10" />
            <img 
              src={project.coverImage} 
              alt={project.title} 
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          
          {/* Content */}
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            
            <p className="text-muted-foreground text-sm mb-4 flex-grow">
              {project.shortDescription}
            </p>
            
            {/* Technologies used */}
            <div className="flex flex-wrap gap-1 mb-4">
              {project.technologies.slice(0, 3).map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{project.technologies.length - 3} more
                </Badge>
              )}
            </div>
            
            {/* View details button */}
            <Button variant="ghost" size="sm" className="w-full justify-between group">
              <span>View details</span>
              <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </GlassCard>
      </Link>
    </RevealAnimation>
  );
}
