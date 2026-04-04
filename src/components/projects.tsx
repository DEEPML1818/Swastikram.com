import { motion } from "framer-motion";
import { ExternalLink, Github, FolderCode, Activity, Shield, Cpu, Zap, Lock } from "lucide-react";

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
    status: "🏎️ TOYOTA_GR_PARTNER",
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
    status: "🚀 LIVE_BCH_MAINNET",
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
  // Combine flagship projects with standard ones
  const allProjects = [...flagshipProjects, ...initialProjects];

  return (
    <section id="projects" className="py-12 relative overflow-hidden bg-transparent perspective-1000">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col mb-10">
          <div className="flex items-center gap-3 mb-4">
             <FolderCode className="w-5 h-5 text-secondary" />
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">Deployed_Protocols_06</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-2">
            The <span className="text-secondary italic">Registry.</span>
          </h2>
          <p className="text-muted-foreground font-medium max-w-xl">
            A curated record of production-grade architectures, from agentic financial standards to motorsport analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {allProjects.map((project, idx) => (
            <motion.div
              key={idx}
              className={`group perspective-1000 ${project.isFlagship ? 'col-span-full' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <motion.div 
                className={`h-full glass-card border-white/5 rounded-[3.5rem] overflow-hidden bento-inner-shadow flex flex-col lg:flex-row transition-all duration-500 hover:border-secondary/30 ${project.title === 'GR Race Guardian' ? 'border-primary/20 bg-primary/[0.01]' : ''}`}
                whileHover={{ rotateX: 1, rotateY: -1, translateZ: 10 }}
              >
                {/* Visual Preview */}
                <div className={`relative ${project.isFlagship ? 'lg:w-1/2 min-h-[400px] bg-black/40 p-12' : 'h-64'} overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5`}>
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className={`w-full h-full ${project.isFlagship ? 'object-contain' : 'object-cover'} grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-1000`}
                    />
                  ) : (
                    <div className="w-full h-full bg-secondary/5 flex items-center justify-center">
                       <FolderCode className="w-12 h-12 text-white/5" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black via-transparent to-transparent opacity-80" />
                  <div className="absolute inset-0 scan-line opacity-10 pointer-events-none" />
                </div>

                <div className="p-10 lg:p-14 flex flex-col flex-1 relative">
                  {/* Status HUD */}
                  <div className="absolute top-10 right-10 flex flex-col items-end gap-2">
                     <span className="px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-[8px] font-black uppercase tracking-widest text-secondary shadow-[0_0_15px_rgba(var(--secondary),0.1)]">
                        {project.status || "ACTIVE_PROTOCOL"}
                     </span>
                     <span className="font-mono text-[7px] text-white/20 uppercase tracking-widest">ID: 0x{idx}F_SECURE</span>
                  </div>

                  <div className="mb-6 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-secondary h-fit w-fit">
                    <Activity className="w-4 h-4 animate-pulse" />
                    {project.category}
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-bold mb-10 leading-relaxed text-md max-w-2xl">
                    {project.description}
                  </p>

                  {/* Flagship Dossier Details */}
                  {project.dossier && (
                    <div className="grid md:grid-cols-3 gap-8 mb-12 p-8 rounded-3xl bg-white/[0.01] border border-white/5">
                       <div className="space-y-3">
                          <span className="text-[9px] font-black uppercase tracking-widest text-white/30 italic">Target_Problem</span>
                          <p className="text-xs text-muted-foreground leading-relaxed">{project.dossier.problem}</p>
                       </div>
                       <div className="space-y-3 border-l border-white/5 pl-8">
                          <span className="text-[9px] font-black uppercase tracking-widest text-white/30 italic">System_Solution</span>
                          <p className="text-xs text-muted-foreground leading-relaxed">{project.dossier.solution}</p>
                       </div>
                       <div className="space-y-3 border-l border-white/5 pl-8 text-secondary">
                          <span className="text-[9px] font-black uppercase tracking-widest opacity-40 italic">Key_Innovation</span>
                          <p className="text-xs opacity-80 leading-relaxed">{project.dossier.innovation}</p>
                       </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-12">
                    {project.tech && project.tech.split(' • ').map((tag, tIdx) => (
                      <span 
                        key={tIdx}
                        className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest text-white/40 group-hover:text-white transition-all hover:bg-secondary/20 hover:border-secondary/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-10">
                    <div className="flex gap-6">
                      <motion.div 
                        className="flex flex-col gap-2 cursor-not-allowed group/lock"
                        whileHover={{ scale: 1.05 }}
                      >
                         <span className="text-[8px] font-black uppercase tracking-widest text-white/20 italic">Access_Protocol</span>
                         <div className="flex items-center gap-2 text-white/40 group-hover/lock:text-primary transition-colors">
                            <Lock className="w-5 h-5" />
                            <span className="text-[10px] font-black uppercase tracking-widest">Repository_Restricted</span>
                         </div>
                      </motion.div>

                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="magnetic-button flex flex-col gap-2 px-10 py-4 rounded-3xl bg-secondary text-black hover:scale-105 transition-all group/deploy"
                        >
                           <div className="flex items-center gap-3">
                              <Zap className="w-5 h-5" />
                              <span className="text-[11px] font-black uppercase tracking-[0.2em]">Deploy_Protocol</span>
                           </div>
                        </a>
                      )}
                    </div>
                    <div className="hidden lg:flex items-center gap-4 opacity-10">
                       <Activity className="w-3 h-3 text-secondary animate-pulse" />
                       <span className="font-mono text-[8px]">SUBSTRATE_HEALTH: 100%</span>
                    </div>
                  </div>
                </div>

                {/* Animated Accent Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
