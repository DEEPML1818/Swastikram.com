import React, { useState, useEffect } from "react";
import { FolderCode, Github, Zap, ChevronLeft, ChevronRight, Shield, Cpu, Coins, Smartphone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    image: "/media/gr-race-guardian.png",
    link: "https://devpost.com/software/gr-race-guardian"
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
    image: "/media/cashapi-logo.png",
    link: "https://dorahacks.io/buidl/39454"
  }
];

const isLogoImage = (imagePath?: string, title?: string) => {
  if (!imagePath) return false;
  const path = imagePath.toLowerCase();
  
  // Rich mockups or full illustration cards should stay object-cover
  if (
    path.includes("ai-vs-ai") ||
    path.includes("legal-aid") ||
    path.includes("gr-race-guardian")
  ) {
    return false;
  }
  
  // Specific logo types or custom logos
  return (
    path.endsWith(".png") ||
    path.includes("logo") ||
    path.includes("nexguard") ||
    path.includes("algotrader") ||
    path.includes("dsoc") ||
    path.includes("nftinu") ||
    path.includes("metatasker") ||
    path.includes("cyberport") ||
    path.includes("suisend") ||
    path.includes("defisync")
  );
};

const getCategoryStyles = (category?: string) => {
  const cat = (category || "").toLowerCase();
  if (cat.includes("security") || cat.includes("audit") || cat.includes("insurtech")) {
    return {
      glow: "hover:shadow-[0_0_50px_rgba(239,68,68,0.25)]",
      border: "border-red-500/20 dark:border-red-500/30 group-hover:border-red-500/50",
      badge: "bg-red-500/10 border-red-500/20 text-red-500 dark:text-red-400",
      bg: "from-red-500/10 to-rose-600/10",
      btnBg: "linear-gradient(135deg, hsl(0, 84%, 60%) 0%, hsl(343, 80%, 50%) 100%)",
      accent: "text-red-500"
    };
  }
  if (cat.includes("defi") || cat.includes("finance") || cat.includes("wallet") || cat.includes("trading") || cat.includes("blockchain")) {
    return {
      glow: "hover:shadow-[0_0_50px_rgba(16,185,129,0.25)]",
      border: "border-emerald-500/20 dark:border-emerald-500/30 group-hover:border-emerald-500/50",
      badge: "bg-emerald-500/10 border-emerald-500/20 text-emerald-500 dark:text-emerald-400",
      bg: "from-emerald-500/10 to-teal-600/10",
      btnBg: "linear-gradient(135deg, hsl(142, 70%, 45%) 0%, hsl(172, 66%, 40%) 100%)",
      accent: "text-emerald-500"
    };
  }
  if (cat.includes("ai") || cat.includes("analytics") || cat.includes("research")) {
    return {
      glow: "hover:shadow-[0_0_50px_rgba(139,92,246,0.25)]",
      border: "border-violet-500/20 dark:border-violet-500/30 group-hover:border-violet-500/50",
      badge: "bg-violet-500/10 border-violet-500/20 text-violet-500 dark:text-violet-400",
      bg: "from-violet-500/10 to-indigo-600/10",
      btnBg: "linear-gradient(135deg, hsl(263, 90%, 65%) 0%, hsl(245, 100%, 70%) 100%)",
      accent: "text-violet-500"
    };
  }
  // Default / Web3 / Other
  return {
    glow: "hover:shadow-[0_0_50px_rgba(59,130,246,0.25)]",
    border: "border-blue-500/20 dark:border-blue-500/30 group-hover:border-blue-500/50",
    badge: "bg-blue-500/10 border-blue-500/20 text-blue-500 dark:text-blue-400",
    bg: "from-blue-500/10 to-sky-600/10",
    btnBg: "linear-gradient(135deg, hsl(217, 91%, 60%) 0%, hsl(199, 89%, 48%) 100%)",
    accent: "text-blue-500"
  };
};

const getCategoryIcon = (category?: string) => {
  const cat = (category || "").toLowerCase();
  if (cat.includes("security") || cat.includes("audit") || cat.includes("insurtech")) {
    return <Shield className="w-10 h-10 text-red-500/20 dark:text-red-500/25 group-hover:scale-110 transition-transform duration-500" />;
  }
  if (cat.includes("defi") || cat.includes("finance") || cat.includes("trading") || cat.includes("blockchain")) {
    return <Coins className="w-10 h-10 text-emerald-500/20 dark:text-emerald-500/25 group-hover:scale-110 transition-transform duration-500" />;
  }
  if (cat.includes("wallet") || cat.includes("mobile") || cat.includes("app")) {
    return <Smartphone className="w-10 h-10 text-blue-500/20 dark:text-blue-500/25 group-hover:scale-110 transition-transform duration-500" />;
  }
  if (cat.includes("ai") || cat.includes("analytics") || cat.includes("research")) {
    return <Cpu className="w-10 h-10 text-violet-500/20 dark:text-violet-500/25 group-hover:scale-110 transition-transform duration-500" />;
  }
  return <FolderCode className="w-10 h-10 text-foreground/20 dark:text-white/15 group-hover:scale-110 transition-transform duration-500" />;
};

export default function Projects({ initialProjects = [] }: { initialProjects?: Project[] }) {
  const allProjects = [...initialProjects, ...flagshipProjects];
  const N = allProjects.length;
  
  const [rotationIndex, setRotationIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(320);
  const [cardHeight, setCardHeight] = useState(220);
  const [radius, setRadius] = useState(654);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number>(-1);

  const angleStep = 360 / N;
  const activeIdx = ((rotationIndex % N) + N) % N;

  const handleNextProject = () => {
    const nextIdx = (selectedProjectIndex + 1) % N;
    setSelectedProjectIndex(nextIdx);
    setSelectedProject(allProjects[nextIdx]);
  };

  const handlePrevProject = () => {
    const prevIdx = (selectedProjectIndex - 1 + N) % N;
    setSelectedProjectIndex(prevIdx);
    setSelectedProject(allProjects[prevIdx]);
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 640;
      const width = isMobile ? 290 : 440;
      setCardWidth(width);
      setCardHeight(isMobile ? 180 : 270);
      //Apother of polygon: r = w / (2 * tan(PI/N))
      const calculatedRadius = Math.round((width / 2) / Math.tan(Math.PI / N));
      setRadius(calculatedRadius);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [N]);

  const handlePrev = () => {
    setRotationIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setRotationIndex((prev) => prev + 1);
  };

  const handleDotClick = (dIdx: number) => {
    const currentActive = ((rotationIndex % N) + N) % N;
    let diff = dIdx - currentActive;
    if (diff > N / 2) diff -= N;
    if (diff < -N / 2) diff += N;
    setRotationIndex((prev) => prev + diff);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background Cybernetic Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.015)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary/60 mb-5">Projects</p>
            <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-4">
              Featured{" "}
              <span style={{ background: "linear-gradient(135deg, hsl(180,80%,55%) 0%, hsl(252,100%,70%) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Work.
              </span>
            </h2>
            <p className="text-foreground/60 text-base max-w-xl leading-relaxed font-normal">
              An interactive 3D rotating cylinder of deployed protocols, systems, and cryptographic tools.
            </p>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center gap-2.5 self-start md:self-end">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-xl bg-foreground/[0.03] hover:bg-foreground/[0.06] border border-foreground/10 hover:border-foreground/20 flex items-center justify-center text-foreground/75 hover:text-foreground transition-all duration-300 active:scale-95"
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-xl bg-foreground/[0.03] hover:bg-foreground/[0.06] border border-foreground/10 hover:border-foreground/20 flex items-center justify-center text-foreground/75 hover:text-foreground transition-all duration-300 active:scale-95"
              aria-label="Next Project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3D Circular Polygon Rotating Viewport */}
        <div 
          className="relative w-full h-[310px] md:h-[410px] flex items-center justify-center overflow-visible select-none my-12" 
          style={{ perspective: "1800px" }}
        >
          {/* 3D Polygon Prism Container */}
          <div
            className="absolute transition-transform duration-700"
            style={{
              width: `${cardWidth}px`,
              height: `${cardHeight}px`,
              transformStyle: "preserve-3d",
              transform: `translateZ(-${radius}px) rotateY(${-rotationIndex * angleStep}deg)`,
              transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)"
            }}
          >
            {allProjects.map((project, idx) => {
              const cardAngle = idx * angleStep;
              
              const diff = Math.min(
                Math.abs(idx - activeIdx),
                N - Math.abs(idx - activeIdx)
              );

              // Circular opacity styling
              const isActive = diff === 0;
              const opacity = isActive ? 1 : diff === 1 ? 0.7 : diff === 2 ? 0.35 : 0.15;
              const pointerEvents = isActive ? "auto" : "none";

              const styles = getCategoryStyles(project.category);

              return (
                <div
                  key={idx}
                  className="absolute inset-0 transition-all duration-700 cursor-pointer"
                  style={{
                    transform: `rotateY(${cardAngle}deg) translateZ(${radius}px)`,
                    opacity: opacity,
                    pointerEvents: "auto", // Allow clicking side cards to rotate them
                    backfaceVisibility: "visible", // Enable viewing cards in the back of the cylinder
                    transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)"
                  }}
                  onClick={() => {
                    if (!isActive) {
                      handleDotClick(idx);
                    } else {
                      setSelectedProject(project);
                      setSelectedProjectIndex(idx);
                    }
                  }}
                >
                  {/* Seamless polygon panels */}
                  <div className={`relative w-full h-full rounded-2xl overflow-hidden border border-white/10 dark:border-white/5 shadow-2xl transition-all duration-500 group ${isActive ? `${styles.glow} ${styles.border}` : ""}`}>
                    
                    {/* Panel background image */}
                    {/* Panel background image */}
                    {project.image ? (
                      isLogoImage(project.image, project.title) ? (
                        <div className="absolute inset-0 bg-zinc-950/80 flex items-center justify-center p-6 border-b border-white/5">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                      ) : (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      )
                    ) : (
                      <div className="absolute inset-0 bg-zinc-900 flex flex-col items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:12px_12px]" />
                        <div className="absolute w-20 h-20 rounded-full bg-gradient-to-tr from-primary/10 to-secondary/10 filter blur-xl" />
                        {getCategoryIcon(project.category)}
                      </div>
                    )}
                    
                    {/* Dark gradient mask overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/45 to-black/70 group-hover:via-black/35 group-hover:to-black/60 transition-all duration-500" />
                    
                    {/* Panel content (Title + Meta labels + Hover slide-up links) */}
                    <div className="absolute inset-0 flex flex-col justify-between p-5 text-white z-10">
                      
                      {/* Top bar */}
                      <div className="flex justify-between items-center w-full">
                        <span className="text-[8px] font-black uppercase tracking-widest bg-white/10 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
                          {project.category}
                        </span>
                        {project.status && (
                          <span className="text-[7.5px] font-bold bg-white/5 backdrop-blur-md px-1.5 py-0.5 rounded border border-white/10 text-white/70">
                            {project.status}
                          </span>
                        )}
                      </div>

                      {/* Center Project Title Overlay */}
                      <div className="text-center my-auto px-2">
                        <h3 className="text-base sm:text-xl font-black uppercase tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] leading-snug group-hover:scale-102 transition-transform duration-300">
                          {project.title}
                        </h3>
                        {isActive && (
                          <p className="text-[9px] text-white/60 font-normal mt-1 leading-normal line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {project.description}
                          </p>
                        )}
                      </div>

                      {/* Action buttons slide-up (Only interactive on active card) */}
                      <div className="flex items-center gap-2 pt-2 border-t border-white/10 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 w-full mt-auto">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex-1 flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 text-white text-[9px] font-bold transition-all duration-300"
                          >
                            <Github className="w-3 h-3" />
                            Code
                          </a>
                        )}
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex-1 flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg text-white text-[9px] font-bold hover:opacity-90 transition-all duration-300 shadow-sm"
                            style={{ background: styles.btnBg }}
                          >
                            <Zap className="w-3 h-3" />
                            Live
                          </a>
                        )}
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Indicator dots */}
        <div className="flex justify-center gap-1.5 mt-8">
          {Array.from({ length: N }).map((_, dIdx) => (
            <button
              key={dIdx}
              onClick={() => handleDotClick(dIdx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                activeIdx === dIdx ? "w-6 bg-secondary" : "w-1.5 bg-foreground/15"
              }`}
              aria-label={`Go to slide ${dIdx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* Details Modal Popup */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="relative w-full max-w-2xl bg-zinc-950/90 border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden p-6 md:p-8 flex flex-col gap-6"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Meta Tags */}
              <div className="flex items-center gap-3">
                <span className="text-[9px] font-black uppercase tracking-widest bg-white/10 px-3 py-1 rounded border border-white/10 text-white/80">
                  {selectedProject.category}
                </span>
                {selectedProject.status && (
                  <span className="text-[8.5px] font-bold bg-white/5 px-2 py-0.5 rounded border border-white/10 text-white/70">
                    {selectedProject.status}
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <div className="pr-12">
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-3">
                  {selectedProject.title}
                </h3>
                <p className="text-white/70 text-xs md:text-sm leading-relaxed font-normal">
                  {selectedProject.description}
                </p>
              </div>

              {/* Image Preview */}
              {selectedProject.image && (
                <div className="w-full h-44 md:h-56 rounded-xl overflow-hidden border border-white/10 bg-zinc-950/80 flex items-center justify-center p-4">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className={`max-w-full max-h-full ${isLogoImage(selectedProject.image, selectedProject.title) ? "object-contain" : "object-cover"} rounded-lg`}
                  />
                </div>
              )}

              {/* Dossier sections (Problem, Solution, Innovation) if available */}
              {selectedProject.dossier && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-white/10 pt-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-black uppercase tracking-widest text-primary italic">The Problem</span>
                    <p className="text-white/60 text-[10px] leading-relaxed font-normal">{selectedProject.dossier.problem}</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-black uppercase tracking-widest text-secondary italic">The Solution</span>
                    <p className="text-white/60 text-[10px] leading-relaxed font-normal">{selectedProject.dossier.solution}</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-black uppercase tracking-widest text-accent italic">The Innovation</span>
                    <p className="text-white/60 text-[10px] leading-relaxed font-normal">{selectedProject.dossier.innovation}</p>
                  </div>
                </div>
              )}

              {/* Tech Tags */}
              <div className="border-t border-white/10 pt-4">
                <span className="text-[9px] font-black uppercase tracking-widest text-white/40 block mb-2">Technologies</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tech.split(" • ").map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/5 text-[9px] font-medium text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer navigation & links */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-4 mt-auto">
                {/* Modal Navigation */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevProject}
                    className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all cursor-pointer"
                    aria-label="Previous project"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNextProject}
                    className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all cursor-pointer"
                    aria-label="Next project"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* External Action Links */}
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  {selectedProject.link && (
                    selectedProject.link.includes("github.com") ? (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white text-[10px] font-bold transition-all duration-300"
                      >
                        <Github className="w-4 h-4" />
                        Code Repository
                      </a>
                    ) : (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-white text-[10px] font-bold hover:opacity-90 transition-all duration-300 shadow-sm"
                        style={{ background: getCategoryStyles(selectedProject.category).btnBg }}
                      >
                        <Zap className="w-4 h-4" />
                        Visit Project
                      </a>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
