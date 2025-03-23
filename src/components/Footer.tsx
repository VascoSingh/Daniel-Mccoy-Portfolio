import { Linkedin, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and copyright */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="font-display font-medium tracking-tighter mb-2 text-lg">
              <span className="text-primary">MECH</span>PORTFOLIO
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          
          {/* Social links */}
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a 
              href="https://www.linkedin.com/in/danny-mccoy-5118b82a9/" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
          
          {/* Back to top button */}
          <Button 
            variant="outline" 
            size="icon" 
            onClick={scrollToTop}
            className="rounded-full"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </Button>
        </div>
      </div>
    </footer>
  );
}
