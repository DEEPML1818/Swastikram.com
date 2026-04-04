import { motion } from "framer-motion";
import { Shield, Zap, Target, BookOpen, Quote, Activity, Fingerprint } from "lucide-react";

const technicalSpecs = [
  { label: "Systems Architecture", value: "6.5 Years", color: "from-primary/20", border: "border-primary/30" },
  { label: "Logic Affinity", value: "Rust, Move, Solidity", color: "from-secondary/20", border: "border-secondary/30" },
  { label: "Security Vectors", value: "AI-Powered Auditing", color: "from-accent/20", border: "border-accent/30" },
  { label: "Network Uptime", value: "100% Deployed", color: "from-white/10", border: "border-white/20" }
];

export default function Dossier() {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-transparent perspective-1000">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Direct Narrative Column: The Prodigy Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Fingerprint className="w-5 h-5 text-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Identity_Log_01</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.85]">
               The <span className="text-primary italic">Ghost</span> in <br />
               the Machine.
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground font-medium mb-12">
              <p>
                From his first computer at <span className="text-white">age 6</span> to a Blockchain Architect at <span className="text-white">16</span>, the architect navigates the void between raw syntax and high-stakes execution. 
                A decade of self-driven odyssey has evolved into the engineering of <span className="text-white">resilient, sovereign protocols.</span>
              </p>
              <p>
                With <span className="text-white">15+ international hackathon wins</span> recorded (including ETHKL24, Solana Wormhole, and Toyota GR), the mission remains constant: 
                Building the digital infrastructure for the machine-to-machine economy.
              </p>
            </div>

            <div className="p-8 glass-card border-l-2 border-l-primary rounded-r-3xl italic opacity-60 flex gap-4">
               <Quote className="w-12 h-12 text-primary opacity-20" />
               <p className="text-md font-bold leading-relaxed">
                 "Architecture is not about aesthetics alone; it is about the structural integrity of sovereign logic."
               </p>
            </div>
          </motion.div>

          {/* High Density Technical HUD Column */}
          <div className="grid gap-4">
             {technicalSpecs.map((spec, i) => (
                <motion.div
                  key={i}
                  className={`group relative p-8 glass-card border-white/5 rounded-[2.5rem] bg-gradient-to-r ${spec.color} to-transparent transition-all duration-500 hover:border-primary/30 bento-inner-shadow`}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                   <div className="flex justify-between items-center mb-6 px-2">
                      <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 group-hover:text-white transition-colors">{spec.label}</h3>
                      <Activity className="w-4 h-4 text-primary animate-pulse opacity-40 group-hover:opacity-100" />
                   </div>
                   
                   <div className="flex items-end justify-between px-2">
                      <span className="text-2xl font-black text-white uppercase tracking-tight">{spec.value}</span>
                      <div className="flex gap-1 mb-2">
                         {[...Array(5)].map((_, j) => (
                            <div key={j} className={`w-1 h-3 rounded-full ${j < 4 ? 'bg-primary/50' : 'bg-white/10'}`} />
                         ))}
                      </div>
                   </div>

                   <div className="absolute top-0 right-0 p-8 opacity-[0.02]">
                      <Fingerprint className="w-24 h-24" />
                   </div>
                </motion.div>
             ))}

             <motion.div 
               className="p-8 glass-card border-white/5 rounded-[2.5rem] bg-background/40 flex items-center justify-between group"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
             >
                <div className="flex items-center gap-4">
                   <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                      <BookOpen className="w-5 h-5 text-primary" />
                   </div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">20+ Whitepapers_Analyzed</span>
                </div>
                <div className="p-2 rounded-full border border-white/5 h-fit w-fit">
                   <Target className="w-4 h-4 text-primary animate-bounce" />
                </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
