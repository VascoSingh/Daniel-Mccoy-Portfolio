
import { Button } from "@/components/ui/button";
import { RevealAnimation } from "@/components/ui/reveal-animation";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center px-6 py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/20 dark:to-transparent" />
      
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-20 w-60 h-60 bg-blue-300/20 dark:bg-blue-800/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-7xl mx-auto py-20 z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <RevealAnimation type="slideUp" delay={100}>
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium tracking-wider bg-primary/10 text-primary mb-4">
              MECHANICAL ENGINEER
            </span>
          </RevealAnimation>
          
          <RevealAnimation type="slideUp" delay={300}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl">
              Engineering precision with <span className="text-primary">innovative</span> solutions
            </h1>
          </RevealAnimation>
          
          <RevealAnimation type="slideUp" delay={500}>
            <p className="text-muted-foreground max-w-2xl text-lg">
              Specialized in mechanical design and engineering solutions that combine 
              cutting-edge technology with practical implementation for real-world problems.
            </p>
          </RevealAnimation>
          
          <RevealAnimation type="slideUp" delay={700}>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" className="px-8">
                View My Work
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                Contact Me
              </Button>
            </div>
          </RevealAnimation>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm font-medium mb-2">Scroll</span>
        <ChevronDown size={20} />
      </div>
    </section>
  );
}
