import HeroSection from "@/components/landing/hero-section";
import NavbarSection from "@/components/landing/navbar-section";

export default function Home() {
  return (
    <main className="relative w-full">
      <NavbarSection />
      <HeroSection />
    </main>
  );
}
