import { motion } from "framer-motion";
import { FolderCode, Github, Zap } from "lucide-react";

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

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary/60 mb-5">Projects</p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Featured{" "}
            <span style={{ background: "linear-gradient(135deg, hsl(180,80%,55%) 0%, hsl(252,100%,70%) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Work.
            </span>
          </h2>
          <p className="text-white/45 text-base max-w-xl leading-relaxed">
            A curated record of production-grade architectures, from agentic financial standards to motorsport analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {allProjects.map((project, idx) => (
            <motion.div
              key={idx}
              className={`group ${project.isFlagship ? 'col-span-full' : ''}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <div className={`h-full glass-card rounded-[2.5rem] overflow-hidden bento-inner-shadow flex flex-col lg:flex-row border-white/[0.06] hover:border-white/15 transition-all duration-500 hover:shadow-[0_24px_64px_rgba(0,0,0,0.5)]`}>
                
                {/* Visual Preview */}
                <div className={`relative ${project.isFlagship ? 'lg:w-1/2 min-h-[350px] bg-black/20 p-8' : 'h-64'} overflow-hidden border-b lg:border-b-0 lg:border-r border-white/[0.06]`}>
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className={`w-full h-full ${project.isFlagship ? 'object-contain' : 'object-cover'} grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.01] transition-all duration-700 ease-out`}
                    />
                  ) : (
                    <div className="w-full h-full bg-secondary/5 flex items-center justify-center">
                       <FolderCode className="w-12 h-12 text-white/5" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#060608] via-transparent to-transparent opacity-90" />
                </div>

                <div className="p-8 lg:p-12 flex flex-col flex-1 relative justify-between">
                  <div>
                    {/* Status Badge */}
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-xs font-semibold uppercase tracking-wider text-secondary/70">
                        {project.category}
                      </span>
                      {project.status && (
                        <span className="px-3 py-1 rounded-lg bg-secondary/10 border border-secondary/20 text-[10px] font-semibold text-secondary">
                          {project.status}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-4 group-hover:text-secondary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-white/50 mb-8 leading-relaxed text-sm md:text-base max-w-2xl font-normal">
                      {project.description}
                    </p>

                    {/* Project Details */}
                    {project.dossier && (
                      <div className="grid md:grid-cols-3 gap-6 mb-8 p-6 rounded-2xl bg-white/[0.01] border border-white/[0.04]">
                         <div className="space-y-1.5">
                            <span className="text-[10px] font-semibold uppercase tracking-wider text-white/30">Problem</span>
                            <p className="text-xs text-white/50 leading-relaxed font-normal">{project.dossier.problem}</p>
                         </div>
                         <div className="space-y-1.5 border-t md:border-t-0 md:border-l border-white/[0.05] pt-4 md:pt-0 md:pl-6">
                            <span className="text-[10px] font-semibold uppercase tracking-wider text-white/30">Solution</span>
                            <p className="text-xs text-white/50 leading-relaxed font-normal">{project.dossier.solution}</p>
                         </div>
                         <div className="space-y-1.5 border-t md:border-t-0 md:border-l border-white/[0.05] pt-4 md:pt-0 md:pl-6 text-secondary">
                            <span className="text-[10px] font-semibold uppercase tracking-wider opacity-60">Innovation</span>
                            <p className="text-xs opacity-80 leading-relaxed font-normal">{project.dossier.innovation}</p>
                         </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {project.tech && project.tech.split(' • ').map((tag, tIdx) => (
                        <span 
                          key={tIdx}
                          className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-[10px] font-medium text-white/45 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-6 border-t border-white/[0.06]">
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white/70 text-xs font-semibold hover:bg-white/8 hover:text-white transition-all duration-300"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-black text-xs font-semibold hover:opacity-90 transition-all duration-300"
                        style={{ background: "linear-gradient(135deg, hsl(180,80%,55%) 0%, hsl(252,100%,70%) 100%)" }}
                      >
                        <Zap className="w-4 h-4" />
                        View Live
                      </a>
                    )}
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
