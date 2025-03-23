import { cn } from "@/lib/utils";

interface YouTubeVideoProps {
  videoId: string;
  isShort?: boolean;
  className?: string;
  muted?: boolean;
}

export function YouTubeVideo({ videoId, isShort = false, className, muted = true }: YouTubeVideoProps) {
  // For Shorts, we use a different aspect ratio and player
  const aspectRatio = isShort ? "aspect-[9/16]" : "aspect-video";
  const width = isShort ? "max-w-sm" : "w-full";
  
  return (
    <div className={cn("relative overflow-hidden rounded-lg", aspectRatio, width, className)}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&mute=${muted ? 1 : 0}&controls=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
} 