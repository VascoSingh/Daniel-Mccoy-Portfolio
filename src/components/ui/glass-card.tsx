
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  blur?: "sm" | "md" | "lg";
  opacity?: "low" | "medium" | "high";
  border?: boolean;
  hover?: boolean;
}

const blurValues = {
  sm: "backdrop-blur-sm",
  md: "backdrop-blur-md",
  lg: "backdrop-blur-lg",
};

const opacityValues = {
  low: "bg-white/5 dark:bg-black/5",
  medium: "bg-white/10 dark:bg-black/10",
  high: "bg-white/20 dark:bg-black/20",
};

export function GlassCard({
  children,
  className,
  blur = "md",
  opacity = "medium",
  border = true,
  hover = true,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        blurValues[blur],
        opacityValues[opacity],
        border && "border border-white/10 dark:border-white/5",
        hover && "hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300",
        "rounded-xl shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
}
