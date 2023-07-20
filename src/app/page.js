import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import SkillsSection from "@/components/skills/SkillsSection";
import Technologies from "@/components/technologies/Technologies";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <Technologies />
      <Projects />
    </div>
  );
}
