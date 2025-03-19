
import { useParams, useNavigate } from "react-router-dom";
import { useProjects } from "@/context/ProjectContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { ProjectHero } from "@/components/project/ProjectHero";
import { ProjectOverview } from "@/components/project/ProjectOverview";
import { ProjectGallery } from "@/components/project/ProjectGallery";

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
    "Prototype #1: This is the first iteration of our design where the focus was to test the wheel system, inspired by the drive system of a Mars Rover (Rocker-Bogie).",
    "Prototype #2: This is a continuation of our first prototype where we changed the bogie to have no angle (180°) to allow 360° rotation and still roll.",
    "Prototype #3: This is an upgraded version of our 2nd prototype where we incorporated larger wheels, a netting system for a payload, and a foldable handle to move the cart. The focus of this prototype was to demonstrate the wheel system over larger obstacles.",
    "CAD Model of Prototype #4: This CAD model shows the direction we wanted to move the project towards. It highlights a lower and longer chassis which lowers the center of gravity as well as allows for longer payloads.",
    "Prototype #4: This is our manufactured prototype where the frame is made out of 6061 T6 Aluminum, providing enough strength to carry 200 lbs.",
    "Prototype #5: This prototype is nearing our end product where it labels all of the components we've integrated.",
    "CAD Model of Final Product: This CAD model shows all the updates we want to incorporate into our final design and allowed us to conduct an FEA test to ensure correct material selection."
  ] : [];
  
  return (
    <>
      <Navbar />
      
      <main className="pt-24 min-h-screen">
        <ProjectHero project={project} />
        
        {/* Project details */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <ProjectOverview project={project} projectId={id || ""} />
              <ProjectGallery project={project} imageDescriptions={imageDescriptions} />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
