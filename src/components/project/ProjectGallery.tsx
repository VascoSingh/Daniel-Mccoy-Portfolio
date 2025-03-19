
import { Project } from "@/context/ProjectContext";
import { RevealAnimation } from "@/components/ui/reveal-animation";
import { GlassCard } from "@/components/ui/glass-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

interface ProjectGalleryProps {
  project: Project;
  imageDescriptions: string[];
}

export function ProjectGallery({ project, imageDescriptions }: ProjectGalleryProps) {
  return (
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
                  {imageDescriptions[index] && (
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
  );
}
