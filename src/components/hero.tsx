import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Globe, Shield, Zap, Activity, Fingerprint } from "lucide-react";

const features = [
  { icon: <Cpu />, label: "AI_LOGIC", status: "STABLE", color: "text-primary" },
  { icon: <Globe />, label: "WEB3_GRID", status: "SYNCED", color: "text-secondary" },
  { icon: <Shield />, label: "SEC_ARCH", status: "ACTIVE", color: "text-accent" },
  { icon: <Zap />, label: "ZKP_CORE", status: "LOADED", color: "white" }
];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 overflow-hidden bg-transparent perspective-1000">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Fingerprint className="w-5 h-5 text-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary glitch-text" data-text="IDENTITY_VERIFIED">IDENTITY_VERIFIED</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.85] select-none">
              Swastik <br />
              <span className="text-primary italic">Ram.</span> <br />
              <span className="text-4xl md:text-6xl text-white/50">Systems Architect.</span>
            </h1>
            
            <p className="text-muted-foreground font-medium max-w-xl mb-12 text-lg leading-relaxed">
              Engineering high-substance decentralized protocols and machine intelligence since 2019. 
              Focusing on the <span className="text-white border-b border-primary/20 pb-0.5">void between logic and execution.</span>
            </p>

            <div className="flex flex-wrap gap-6 items-center">
              <motion.a
                href="#projects"
                className="magnetic-button group px-10 py-5 rounded-2xl bg-primary text-black font-black uppercase tracking-widest text-[11px] shadow-[0_20px_50px_rgba(var(--primary),0.3)] hover:scale-105 transition-all"
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  Access Protocols <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </motion.a>
              
              <div className="flex items-center gap-4 opacity-30">
                 <div className="flex -space-x-4">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-10 h-10 rounded-full border border-white/20 bg-background/50 backdrop-blur-md" />
                    ))}
                 </div>
                 <span className="text-[9px] font-black uppercase tracking-widest text-white italic">Active_Telemetry</span>
              </div>
            </div>
          </motion.div>

          {/* High Substance Grid Hub */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                className="group relative h-48 glass-card border-white/5 p-8 rounded-[2.5rem] flex flex-col justify-between transition-all duration-500 hover:border-primary/30 hover:bg-primary/[0.02] bento-inner-shadow"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + (idx * 0.1) }}
                whileHover={{ rotateX: 5, rotateY: -5, translateZ: 20 }}
              >
                <div className={`${item.color} opacity-40 group-hover:opacity-100 transition-all scale-100 group-hover:scale-110`}>
                   {item.icon}
                </div>
                
                <div className="flex flex-col gap-1">
                   <span className="text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">{item.label}</span>
                   <div className="flex items-center gap-2">
                      <Activity className={`w-2 h-2 animate-pulse ${item.color}`} />
                      <span className="text-[8px] font-mono text-white/20 uppercase tracking-tighter">{item.status}</span>
                   </div>
                </div>
                
                <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                   {item.icon}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Atmospheric Accents: Background Substance */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-20">
         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[160px] rounded-full" />
         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 blur-[160px] rounded-full" />
      </div>
    </section>
  );
}
