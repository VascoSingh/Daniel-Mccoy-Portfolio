import { RevealAnimation } from "./ui/reveal-animation";
import { GlassCard } from "./ui/glass-card";
import { Badge } from "@/components/ui/badge";

// These arrays will be used to display skills
const technicalSkills = [
  "CAD Design", "3D Design", "Manufacturing", 
  "Prototyping", "Automation", "Design for Assembly", 
  "Plumbing", "Experimental Research"
];

const softwareSkills = [
  "SOLIDWORKS", "MATLAB", "Microsoft Excel"
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
                  src="https://media.licdn.com/dms/image/v2/D4E03AQE-wvNE2CnJTA/profile-displayphoto-shrink_400_400/B4EZXy8j4zGgAg-/0/1743537717121?e=1749686400&v=beta&t=iS0Xcv0R5kgYSlxstTQ-Vo6v6OGPeKGrzZMm9cLJiqk" 
                  alt="Danny McCoy - Mechanical Engineering Student" 
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
                Mechanical Engineering Student at Vanderbilt University
              </h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  As a mechanical engineering student, I've been inspired by the power and ingenuity of technology 
                  to develop solutions for the future. Through this admiration and curiosity, I've developed skills 
                  in 3D design, manufacturing, and automation to create impactful innovation in this field.
                </p>
                <p>
                  Currently, I'm working as a Mechanical Engineer intern at Aircapture, where I'm involved in 
                  Direct Air Capture (DAC) technology development and manufacturing. My experience includes 
                  leading automation projects at 1Micro, where I significantly improved production efficiency, 
                  and running a successful landscaping business that served over 120 customers.
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
