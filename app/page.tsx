import { CorePhilosophy } from "@/components/CorePhilosophy";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { SkillsCloud } from "@/components/SkillsCloud";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <CorePhilosophy />
      <Services />
      <FeaturedWork />
      <SkillsCloud />
      <Footer />
    </div>
  );
}
