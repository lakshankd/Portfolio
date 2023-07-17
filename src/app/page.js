import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import SkillsSection from "@/components/skills/SkillsSection";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <HeroSection />
      <SkillsSection />
    </div>
  );
}
