
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { RevealAnimation } from "@/components/ui/reveal-animation";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Project } from "@/context/ProjectContext";

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  const navigate = useNavigate();

  return (
    <section className="relative pt-16 pb-24 px-6 md:px-12">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/20 dark:to-transparent" />
      
      <div className="max-w-7xl mx-auto relative">
        <RevealAnimation type="fadeIn">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")} 
            className="mb-8 pl-0 hover:pl-2 transition-all duration-300"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to all projects
          </Button>
        </RevealAnimation>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <RevealAnimation type="slideInFromLeft">
            <div className="space-y-4">
              <span className="inline-block py-1 px-3 rounded-full text-xs font-medium tracking-wider bg-primary/10 text-primary">
                Case Study
              </span>
              
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                {project.title}
              </h1>
              
              <p className="text-lg text-muted-foreground">
                {project.shortDescription}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="pt-4 flex flex-col md:flex-row gap-6">
                <div className="flex items-center">
                  <Calendar size={18} className="mr-2 text-primary" />
                  <span className="text-sm">{project.date}</span>
                </div>
                
                {project.clientName && (
                  <div className="flex items-center">
                    <User size={18} className="mr-2 text-primary" />
                    <span className="text-sm">Client: {project.clientName}</span>
                  </div>
                )}
              </div>
            </div>
          </RevealAnimation>
          
          <RevealAnimation type="slideInFromRight">
            <GlassCard className="p-3 overflow-hidden">
              <img 
                src={project.coverImage} 
                alt={project.title} 
                className="w-full h-auto rounded-lg"
              />
            </GlassCard>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
}
