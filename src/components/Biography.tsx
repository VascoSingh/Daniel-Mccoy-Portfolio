
import { RevealAnimation } from "./ui/reveal-animation";
import { GlassCard } from "./ui/glass-card";
import { Badge } from "@/components/ui/badge";

// These arrays will be used to display skills
const technicalSkills = [
  "CAD Design", "Mechanical Analysis", "Prototyping", 
  "3D Printing", "CNC Machining", "FEA", 
  "Material Selection", "Precision Engineering"
];

const softwareSkills = [
  "SolidWorks", "AutoCAD", "MATLAB", 
  "ANSYS", "Fusion 360", "LabVIEW"
];

export function Biography() {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute -left-64 top-1/3 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
          {/* Profile Image in Glass Card */}
          <RevealAnimation type="slideInFromLeft" className="w-full md:w-5/12">
            <GlassCard className="p-3 relative">
              <div className="rounded-lg overflow-hidden aspect-square relative img-hover-zoom">
                <img 
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=800&q=80" 
                  alt="Mechanical Engineer Portrait" 
                  className="w-full h-full object-cover rounded-lg transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-24 h-24 border-2 border-primary/30 rounded-lg -z-10"></div>
                <div className="absolute -bottom-2 -left-2 w-32 h-32 border-2 border-primary/30 rounded-lg -z-10"></div>
              </div>
            </GlassCard>
          </RevealAnimation>
          
          {/* Bio Content */}
          <div className="w-full md:w-7/12">
            <RevealAnimation type="slideInFromRight" delay={200}>
              <span className="text-sm font-medium text-primary tracking-wider">ABOUT ME</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Mechanical Engineer with a passion for innovative solutions
              </h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  With over 8 years of experience in mechanical engineering, I specialize in creating 
                  efficient, sustainable, and innovative mechanical systems that address complex challenges 
                  across various industries.
                </p>
                <p>
                  My approach combines precise technical knowledge with creative problem-solving, allowing 
                  me to develop solutions that are both practical and forward-thinking. I'm particularly 
                  interested in sustainable design, automation systems, and precision engineering.
                </p>
              </div>
              
              {/* Skills Section */}
              <div className="mt-8 space-y-4">
                <h3 className="text-lg font-semibold">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <h3 className="text-lg font-semibold mt-4">Software Proficiency</h3>
                <div className="flex flex-wrap gap-2">
                  {softwareSkills.map((skill) => (
                    <Badge key={skill} variant="outline" className="px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
