import ContactSection from "@/components/landing/contact-section";
import FooterSection from "@/components/landing/footer-section";
import HeroSection from "@/components/landing/hero-section";
import NavbarSection from "@/components/landing/navbar-section";
import PathSection from "@/components/landing/path-section";
import ProjectSection from "@/components/landing/project-section";

export default function Home() {
  return (
    <main className="relative w-full dark:bg-black/[0.96]">
      <NavbarSection />
      <HeroSection />
      <div className="h-[30rem] md:h-screen bg-black" /> {/* ← Critical fix */}
      <ProjectSection />
      <PathSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
