import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Globe, Shield, Zap } from "lucide-react";

const features = [
  { icon: Cpu, label: "AI Systems", sub: "ML & Inference", color: "text-primary", glow: "rgba(130,80,255,0.15)" },
  { icon: Globe, label: "Web3 Grid", sub: "Multi-chain", color: "text-secondary", glow: "rgba(80,200,200,0.12)" },
  { icon: Shield, label: "Security", sub: "Audit & dSOC", color: "text-accent", glow: "rgba(160,80,255,0.12)" },
  { icon: Zap, label: "ZK Proofs", sub: "Zero-knowledge", color: "text-white/70", glow: "rgba(255,255,255,0.06)" }
];

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-28 pb-16 overflow-hidden bg-transparent">
      {/* Ambient background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle, rgba(130,80,255,0.1) 0%, transparent 70%)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle, rgba(80,200,200,0.08) 0%, transparent 70%)" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/[0.05] border border-white/10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-white/60 tracking-wide">Systems Architect & AI Engineer</span>
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tight mb-6 leading-[0.88] select-none" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Swastik<br />
              <span style={{ background: "linear-gradient(135deg, hsl(252,100%,70%) 0%, hsl(282,90%,72%) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Ram.</span>
            </h1>

            <p className="text-white/50 font-normal max-w-lg mb-10 text-lg leading-relaxed">
              Engineering decentralized protocols and machine intelligence since 2019. 
              Bridging the gap between{" "}
              <span className="text-white/80 font-medium">Web3 security</span> and{" "}
              <span className="text-white/80 font-medium">adaptive AI</span>.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <motion.a
                href="#projects"
                className="group flex items-center gap-2 px-6 py-3.5 rounded-2xl text-white text-sm font-semibold shadow-[0_8px_32px_rgba(130,80,255,0.3)] hover:shadow-[0_12px_48px_rgba(130,80,255,0.5)] transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, hsl(252,100%,70%) 0%, hsl(282,90%,72%) 100%)" }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
              
              <motion.a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/[0.06] border border-white/10 text-white/80 text-sm font-semibold hover:bg-white/10 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                whileTap={{ scale: 0.97 }}
              >
                Get in touch
              </motion.a>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-white/[0.06]">
              {[
                { value: "15+", label: "Hackathon wins" },
                { value: "6+", label: "Years building" },
                { value: "3+", label: "Chain ecosystems" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-0.5">
                  <span className="text-2xl font-black text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>{stat.value}</span>
                  <span className="text-xs text-white/40 font-medium">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Feature cards grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                className="group relative h-44 glass-card bento-inner-shadow p-6 rounded-2xl flex flex-col justify-between transition-all duration-500 hover:border-white/15 cursor-default"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.3 + (idx * 0.08) }}
                whileHover={{ y: -4 }}
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at 30% 30%, ${item.glow}, transparent 70%)` }} />
                
                <div className={`${item.color} opacity-50 group-hover:opacity-100 transition-all duration-300`}>
                  <item.icon className="w-6 h-6" />
                </div>
                
                <div className="relative z-10">
                  <span className="block text-sm font-semibold text-white/80 group-hover:text-white transition-colors">{item.label}</span>
                  <span className="text-xs text-white/30 font-medium mt-0.5 block">{item.sub}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
