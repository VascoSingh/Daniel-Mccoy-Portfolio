import { GlassCard } from "./ui/glass-card";
import { RevealAnimation } from "./ui/reveal-animation";
import { Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: <Phone size={20} />,
    title: "Phone",
    details: "(952) 693-5739",
    link: "tel:+19526935739"
  },
  {
    icon: <Mail size={20} />,
    title: "Email",
    details: "daniel.c.mccoy@vanderbilt.edu",
    link: "mailto:daniel.c.mccoy@vanderbilt.edu"
  },
  {
    icon: <MapPin size={20} />,
    title: "Location",
    details: "Nashville, Tennessee, United States",
    link: "https://maps.google.com"
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute -left-64 top-1/3 w-96 h-96 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto">
        <RevealAnimation type="slideUp">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary tracking-wider">GET IN TOUCH</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">Contact Me</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Interested in discussing engineering opportunities or collaborations?
              Feel free to reach out, and I'll get back to you as soon as possible.
            </p>
          </div>
        </RevealAnimation>
        
        <RevealAnimation type="fadeIn" delay={200}>
          <GlassCard className="max-w-2xl mx-auto p-8">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold">Let's connect</h3>
              <p className="text-muted-foreground">
                Have a project in mind or need consulting on a mechanical engineering challenge?
                I'm available for freelance work, consulting, and full-time opportunities.
              </p>
              
              <div className="space-y-6 mt-8">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index}
                    href={item.link}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors duration-300"
                  >
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-muted-foreground">{item.details}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </GlassCard>
        </RevealAnimation>
      </div>
    </section>
  );
}
