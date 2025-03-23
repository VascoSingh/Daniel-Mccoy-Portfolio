import { Project } from "@/context/ProjectContext";
import { RevealAnimation } from "@/components/ui/reveal-animation";
import { GlassCard } from "@/components/ui/glass-card";
import { YouTubeVideo } from "@/components/ui/youtube-video";
import { Youtube, Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { useState } from "react";

interface ProjectGalleryProps {
  project: Project;
  imageDescriptions: string[];
}

export function ProjectGallery({ project, imageDescriptions }: ProjectGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Helper function to determine if a URL is a YouTube video
  const isYouTubeVideo = (url: string) => {
    return url.includes('youtube.com') || url.includes('youtu.be');
  };

  // Helper function to extract YouTube video ID
  const getYouTubeVideoId = (url: string) => {
    if (url.includes('shorts')) {
      return url.split('/shorts/')[1]?.split('?')[0];
    }
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
    return match ? match[1] : '';
  };

  // Helper function to determine if a YouTube URL is a Short
  const isYouTubeShort = (url: string) => {
    return url.includes('/shorts/');
  };

  return (
    <RevealAnimation type="slideUp" delay={200} className="space-y-8">
      <h2 className="text-2xl font-bold px-1">Project Gallery</h2>
      {project.images.length > 1 ? (
        <div className="space-y-6">
          {/* Main large image or video */}
          <GlassCard className="p-4 overflow-hidden">
            <div className="relative w-full">
              {isYouTubeVideo(project.images[selectedImageIndex]) ? (
                <YouTubeVideo 
                  videoId={getYouTubeVideoId(project.images[selectedImageIndex])}
                  isShort={isYouTubeShort(project.images[selectedImageIndex])}
                  muted={true}
                  className="mx-auto"
                />
              ) : (
                <div className="relative aspect-[16/10] w-full">
                  <img 
                    src={project.images[selectedImageIndex]} 
                    alt={`${project.title} - ${imageDescriptions[selectedImageIndex] || `Image ${selectedImageIndex + 1}`}`} 
                    className="absolute inset-0 w-full h-full object-contain bg-black/5 rounded-lg p-2"
                  />
                </div>
              )}
            </div>
            {imageDescriptions[selectedImageIndex] && (
              <p className="mt-6 text-sm text-center text-muted-foreground px-2">
                {imageDescriptions[selectedImageIndex]}
              </p>
            )}
          </GlassCard>

          {/* Thumbnail carousel */}
          <Carousel className="w-full relative px-8 max-w-3xl mx-auto">
            <CarouselContent className="py-2 flex justify-center">
              {project.images.map((image, index) => (
                <CarouselItem key={index} className="basis-1/5 md:basis-1/6 px-2 min-w-0">
                  <button
                    onClick={() => setSelectedImageIndex(index)}
                    className={`w-full p-2 rounded-lg transition-all duration-200 hover:scale-105 ${
                      selectedImageIndex === index 
                        ? 'ring-2 ring-primary shadow-lg' 
                        : 'hover:ring-2 hover:ring-primary/50'
                    }`}
                  >
                    <div className="aspect-square w-full overflow-hidden rounded-lg bg-black/5">
                      {isYouTubeVideo(image) ? (
                        <div className="w-full h-full bg-red-600/10 flex flex-col items-center justify-center gap-1">
                          <Youtube className="w-6 h-6 text-red-600" />
                          <Play className="w-4 h-4 text-red-600 fill-red-600" />
                        </div>
                      ) : (
                        <img 
                          src={image} 
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-2 lg:-left-4 bg-background/80 backdrop-blur-sm" />
            <CarouselNext className="-right-2 lg:-right-4 bg-background/80 backdrop-blur-sm" />
          </Carousel>
        </div>
      ) : (
        <div className="space-y-6">
          {project.images.map((image, index) => (
            <GlassCard key={index} className="p-4 overflow-hidden">
              <div className="relative w-full">
                {isYouTubeVideo(image) ? (
                  <YouTubeVideo 
                    videoId={getYouTubeVideoId(image)}
                    isShort={isYouTubeShort(image)}
                    muted={true}
                    className="mx-auto"
                  />
                ) : (
                  <div className="relative aspect-[16/10] w-full">
                    <img 
                      src={image} 
                      alt={`${project.title} - Image ${index + 1}`} 
                      className="absolute inset-0 w-full h-full object-contain bg-black/5 rounded-lg p-2"
                    />
                  </div>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      )}
    </RevealAnimation>
  );
}
