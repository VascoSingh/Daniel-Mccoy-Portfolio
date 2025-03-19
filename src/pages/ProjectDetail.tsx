
import { useParams, useNavigate } from "react-router-dom";
import { useProjects } from "@/context/ProjectContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { RevealAnimation } from "@/components/ui/reveal-animation";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const { getProject } = useProjects();
  const navigate = useNavigate();
  
  const project = getProject(id || "");
  
  useEffect(() => {
    if (!project) {
      navigate("/");
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [project, navigate]);
  
  if (!project) {
    return null;
  }

  // Image descriptions for project 1
  const imageDescriptions = id === "1" ? [
    "Full transportation system design",
    "The transportation system deployed with the crew-served weapon mounted",
    "Side view showing the collapsible design",
    "Final product ready for field testing",
    "The system allows for easy transport across various terrains",
    "The transportation system in collapsed configuration"
  ] : [];
  
  return (
    <>
      <Navbar />
      
      <main className="pt-24 min-h-screen">
        {/* Hero section */}
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
        
        {/* Project details */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <RevealAnimation type="slideUp" className="lg:col-span-2">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Project Overview</h2>
                  <p className="text-muted-foreground">{project.description}</p>
                  
                  {/* Additional project content */}
                  <div className="space-y-6 pt-4">
                    {id === "1" && (
                      <>
                        <h3 className="text-xl font-semibold">The Previous Solution</h3>
                        <p className="text-muted-foreground">
                          The U.S. military currently allocates a component (ex. ammo, barrel, tripod, etc.) to different infantry members who then have to carry the additional 40-60 lbs in their rucksack.
                        </p>
                      </>
                    )}
                    
                    <h3 className="text-xl font-semibold">The Challenge</h3>
                    {id === "1" ? (
                      <p className="text-muted-foreground">
                        The project presented several complex engineering challenges, including optimizing manufacturability, minimizing weight while maximizing strength, and ensuring reliability under extreme conditions. These challenges are particularly critical in military applications, where heavy weapons and equipment must be transported across varied terrains. For example, assistant gunners (AGs) operating M2 .50 Cal Machine Guns face significant physical strain, as the full system can weigh up to 200 lbs, making weight reduction and durability essential factors in the design process.
                      </p>
                    ) : (
                      <p className="text-muted-foreground">
                        The project presented several complex engineering challenges, including optimization for 
                        manufacturability, minimizing weight while maximizing strength, and ensuring reliability 
                        under extreme conditions.
                      </p>
                    )}
                    
                    <h3 className="text-xl font-semibold">Our Solution</h3>
                    {id === "1" ? (
                      <p className="text-muted-foreground">
                        Using advanced CAD modeling and rapid prototyping, my team developed an pull cart design that minimizes fatigue, improves mobility, and overall enhances functionality in rugged terrains.
                      </p>
                    ) : (
                      <p className="text-muted-foreground">
                        Using advanced CAD modeling and simulation software, I developed an innovative design that 
                        incorporated composite materials and topology optimization. The result was a lightweight yet 
                        robust solution that exceeded performance requirements.
                      </p>
                    )}
                    
                    <h3 className="text-xl font-semibold">The Outcome</h3>
                    {id === "1" ? (
                      <p className="text-muted-foreground">
                        The final design allows for the full weapon system (gun & ammo) to be transported by only 2 soldiers, entirely removing extra strain on other soldiers as well as consolidating the weapon system to one location. Additionally, the design has a load capacity of 400 lbs and is collapsable for easy transport without loads.
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
              
              <RevealAnimation type="slideUp" delay={200} className="space-y-6">
                <h2 className="text-2xl font-bold">Project Gallery</h2>
                {project.images.length > 1 ? (
                  <Carousel className="w-full relative">
                    <CarouselContent>
                      {project.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <GlassCard className="p-2 overflow-hidden">
                            <img 
                              src={image} 
                              alt={`${project.title} - ${imageDescriptions[index] || `Image ${index + 1}`}`} 
                              className="w-full h-auto aspect-video object-cover rounded-lg"
                            />
                            {id === "1" && imageDescriptions[index] && (
                              <p className="mt-2 text-sm text-center text-muted-foreground">
                                {imageDescriptions[index]}
                              </p>
                            )}
                          </GlassCard>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="-left-4 lg:-left-6" />
                    <CarouselNext className="-right-4 lg:-right-6" />
                  </Carousel>
                ) : (
                  <div className="space-y-4">
                    {project.images.map((image, index) => (
                      <GlassCard key={index} className="p-2 overflow-hidden">
                        <img 
                          src={image} 
                          alt={`${project.title} - Image ${index + 1}`} 
                          className="w-full h-auto rounded-lg"
                        />
                      </GlassCard>
                    ))}
                  </div>
                )}
              </RevealAnimation>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
