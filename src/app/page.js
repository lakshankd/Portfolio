import HeroSection from "@/components/landing/hero-section";
import NavbarSection from "@/components/landing/navbar-section";
import ProjectSection from "@/components/landing/project-section";

export default function Home() {
  return (
    <main className="relative w-full">
      <NavbarSection />
      <HeroSection />
      <div className="h-[30rem] md:h-screen bg-black" /> {/* ← Critical fix */}
      <ProjectSection />
    </main>
  );
}
