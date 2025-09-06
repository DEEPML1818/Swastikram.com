import { useEffect, useState } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Hackathons from "@/components/hackathons";
import Media from "@/components/media";
import Contact from "@/components/contact";
import Preloader from "@/components/preloader";
import ParticleBackground from "@/components/particle-background";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {isLoading && <Preloader />}
      <ParticleBackground />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Hackathons />
        <Media />
        <Contact />
      </main>
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Swastik Ram. Building the future of Web3, one block at a time.
          </p>
        </div>
      </footer>
    </div>
  );
}
