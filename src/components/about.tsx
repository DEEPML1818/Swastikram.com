import { motion } from "framer-motion";
import { Terminal, Shield, Workflow } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
               <div className="h-px w-12 bg-primary/40" />
               <h2 className="text-sm font-black uppercase tracking-[0.4em] text-primary">Core Directives</h2>
            </div>
            
            <h3 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-12 leading-none">
              Architecting <span className="text-transparent stroke-white stroke-1">Trust</span> in a <span className="text-secondary">Decentralized</span> World.
            </h3>

            <div className="space-y-8">
              <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                My work exists at the critical failure point of traditional systems. By merging the immutable nature of <span className="text-white font-bold">Web3</span> with the adaptive intelligence of <span className="text-white font-bold">AI</span>, I build protocols that are inherently secure and fundamentally efficient.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                A decade of low-level mastery has taught me that complexity is the enemy of security. My methodology prioritizes <span className="text-primary italic">clean abstraction</span> and <span className="text-secondary italic">mathematical certainty</span>.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
               {[
                 { icon: Shield, label: "Hardened Security", sub: "dSOC & Auditing" },
                 { icon: Workflow, label: "Neural Flows", sub: "Predictive ML" },
                 { icon: Terminal, label: "Protocol Dev", sub: "Rust & Solidity" }
               ].map((item, i) => (
                 <div key={i} className="glass-card p-6 border-white/5 bento-inner-shadow hover:border-white/20 transition-all">
                    <item.icon className="w-5 h-5 text-primary mb-4" />
                    <span className="block text-xs font-black uppercase tracking-widest text-white mb-1">{item.label}</span>
                    <span className="text-[10px] uppercase text-muted-foreground tracking-tighter">{item.sub}</span>
                 </div>
               ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-2 aspect-square rounded-[3rem] border-white/5 bento-inner-shadow relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-50" />
              
              <div className="w-full h-full bg-background rounded-[2.8rem] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_40%,var(--primary)_0%,transparent_70%)] animate-pulse" />
                
                <div className="z-10 text-center">
                  <div className="text-[180px] font-black text-white opacity-5 select-none transition-transform duration-1000 group-hover:scale-110">SR</div>
                  <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full -mt-20 relative z-20">
                     <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
                     <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Identity Validated</span>
                  </div>
                </div>

                {/* Decorative Terminal Snippet */}
                <div className="absolute bottom-8 left-8 right-8 text-[9px] font-mono text-primary/30 select-none">
                   $ swastik_ram --init<br/>
                   &gt; system_check: optimal<br/>
                   &gt; architecture: multi-chain_intelligent<br/>
                   &gt; status: architecting_future_
                </div>
              </div>
              
              <div className="absolute inset-0 border-beam opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
