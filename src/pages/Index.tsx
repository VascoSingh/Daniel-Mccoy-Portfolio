
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Biography } from "@/components/Biography";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Biography />
      <ProjectGrid />
      <Contact />
      <Footer />
    </div>
  );
}
