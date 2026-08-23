import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FolderCode, Github, Zap, ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string;
  github?: string;
  link?: string;
  image?: string;
  category?: string;
  status?: string;
  isFlagship?: boolean;
  dossier?: {
    problem: string;
    solution: string;
    innovation: string;
  }
}

const flagshipProjects: Project[] = [
  {
    title: "GR Race Guardian",
    category: "Motorsport AI & Analytics",
    status: "Toyota GR Partner",
    isFlagship: true,
    description: "Professional motorsport analytics platform transforming raw race data into actionable intelligence using Digital Twin technology and Monte Carlo simulations.",
    tech: "Python • Node.js • Next.js • XGBoost • Gemini 2.0 Flash • Three.js • WebSockets • Monte Carlo • FastAPI",
    dossier: {
      problem: "Professional race engineering software is often inaccessible to grassroots and club motorsport teams due to cost and technical complexity.",
      solution: "A three-tier microservices architecture providing real-time telemetry, AI-powered pit strategy, and driver behavior modeling (Digital Twins).",
      innovation: "Achieved sub-2-second Monte Carlo simulations (500 outcomes) using NumPy vectorization and Gemini 2.0 function calling for autonomous race engineering."
    },
    image: "/media/gr-race-guardian.png"
  },
  {
    title: "CashAPI",
    category: "Machine-to-Machine Infrastructure",
    status: "Live BCH Mainnet",
    isFlagship: true,
    description: "The first HTTP 402 'Payment Required' gateway for the Bitcoin Cash ecosystem, enabling AI agents to autonomously settle micro-transactions.",
    tech: "Bitcoin Cash • Node.js • SDKs • 0-Conf • Agentic Micropayments • HTTP 402",
    dossier: {
      problem: "AI agents cannot pass credit card KYC, and existing crypto networks have fees too high for high-frequency $0.001 data requests.",
      solution: "Implements the internet's native 402 error code, allowing agents to detect payment requirements and settle instantly via BCH 0-conf.",
      innovation: "Moving BCH from 'Peer-to-Peer Cash' to 'Machine-to-Machine Infrastructure' for the autonomous agent economy."
    },
    image: "/media/cashapi-logo.png"
  }
];

export default function Projects({ initialProjects = [] }: { initialProjects?: Project[] }) {
  const allProjects = [...flagshipProjects, ...initialProjects];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, allProjects.length - cardsToShow));
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Carousel Header Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary/60 mb-5">Projects</p>
            <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-4">
              Featured{" "}
              <span style={{ background: "linear-gradient(135deg, hsl(180,80%,55%) 0%, hsl(252,100%,70%) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Work.
              </span>
            </h2>
            <p className="text-foreground/60 text-base max-w-xl leading-relaxed">
              A curated record of production-grade architectures, from agentic financial standards to motorsport analytics.
            </p>
          </div>

          <div className="flex items-center gap-2.5 self-start md:self-end">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-10 h-10 rounded-xl bg-foreground/[0.03] hover:bg-foreground/[0.06] border border-foreground/10 hover:border-foreground/20 flex items-center justify-center text-foreground/75 hover:text-foreground transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none"
              aria-label="Previous Projects"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= allProjects.length - cardsToShow}
              className="w-10 h-10 rounded-xl bg-foreground/[0.03] hover:bg-foreground/[0.06] border border-foreground/10 hover:border-foreground/20 flex items-center justify-center text-foreground/75 hover:text-foreground transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none"
              aria-label="Next Projects"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Window */}
        <div className="relative overflow-hidden -mx-3 px-1 py-4">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
            }}
          >
            {allProjects.map((project, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 px-3 transition-opacity duration-300"
                style={{ width: `${100 / cardsToShow}%` }}
              >
                <div className="glass-card rounded-[2rem] overflow-hidden border border-foreground/5 dark:border-white/[0.04] transition-all duration-300 h-[480px] flex flex-col hover:shadow-2xl group hover:-translate-y-1">
                  
                  {/* Visual Preview */}
                  <div className="relative h-44 overflow-hidden bg-foreground/[0.02] border-b border-foreground/5 dark:border-white/[0.04]">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale opacity-[0.75] group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <FolderCode className="w-10 h-10 text-foreground/10 animate-pulse" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-95" />
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      {/* Meta labels */}
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-secondary/80">
                          {project.category}
                        </span>
                        {project.status && (
                          <span className="px-2 py-0.5 rounded-lg bg-secondary/10 border border-secondary/20 text-[9px] font-semibold text-secondary">
                            {project.status}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-foreground tracking-tight mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-foreground/60 text-xs leading-relaxed font-normal line-clamp-3 mb-4">
                        {project.description}
                      </p>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1 mb-4 h-12 overflow-hidden items-start content-start">
                        {project.tech.split(" • ").map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded bg-foreground/[0.03] dark:bg-white/[0.02] border border-foreground/5 dark:border-white/[0.04] text-[9px] font-medium text-foreground/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-2 pt-4 border-t border-foreground/5 mt-auto">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-grow flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-foreground/[0.03] border border-foreground/5 text-foreground/75 text-[10px] font-bold hover:bg-foreground/[0.06] transition-all duration-300"
                        >
                          <Github className="w-3.5 h-3.5" />
                          Code
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-grow flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-white text-[10px] font-bold hover:opacity-95 transition-all duration-300"
                          style={{ background: "linear-gradient(135deg, hsl(180,80%,55%) 0%, hsl(252,100%,70%) 100%)" }}
                        >
                          <Zap className="w-3.5 h-3.5" />
                          Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicator dots */}
        <div className="flex justify-center gap-1.5 mt-8">
          {Array.from({ length: allProjects.length - cardsToShow + 1 }).map((_, dIdx) => (
            <button
              key={dIdx}
              onClick={() => setCurrentIndex(dIdx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === dIdx ? "w-6 bg-secondary" : "w-1.5 bg-foreground/15"
              }`}
              aria-label={`Go to slide ${dIdx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
