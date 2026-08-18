import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden bg-transparent">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle, rgba(130,80,255,0.08) 0%, transparent 70%)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle, rgba(80,200,200,0.06) 0%, transparent 70%)" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Tag/Badge */}
            <motion.div
              className="flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[11px] font-medium text-white/50 tracking-wider">Systems Architect & AI Engineer</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-6 leading-[0.9] select-none" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Swastik<br />
              <span style={{ background: "linear-gradient(135deg, hsl(252,100%,70%) 0%, hsl(282,90%,72%) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Ram.</span>
            </h1>

            <p className="text-white/45 font-normal max-w-lg mb-8 text-base md:text-lg leading-relaxed">
              Designing secure decentralized protocols and intelligent AI agents. 
              Translating complex research into production-grade systems.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <motion.a
                href="#projects"
                className="group flex items-center gap-2 px-6 py-3.5 rounded-2xl text-white text-sm font-semibold shadow-[0_8px_32px_rgba(130,80,255,0.25)] hover:shadow-[0_12px_48px_rgba(130,80,255,0.45)] transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, hsl(252,100%,70%) 0%, hsl(282,90%,72%) 100%)" }}
                whileTap={{ scale: 0.97 }}
              >
                Explore Projects
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
              
              <motion.a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-white/70 text-sm font-semibold hover:bg-white/8 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                whileTap={{ scale: 0.97 }}
              >
                Let's talk
              </motion.a>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-white/[0.05] w-full">
              {[
                { value: "15+", label: "Hackathon wins" },
                { value: "6+", label: "Years building" },
                { value: "3+", label: "Mainnet systems" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-0.5">
                  <span className="text-xl md:text-2xl font-black text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>{stat.value}</span>
                  <span className="text-[11px] text-white/35 font-medium">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Profile Card Showcase */}
          <motion.div 
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative group max-w-[340px] w-full aspect-[4/5] rounded-[2.5rem] p-3 bg-white/[0.02] border border-white/5 shadow-2xl bento-inner-shadow">
              <div className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: "radial-gradient(circle at top, rgba(130,80,255,0.06), transparent 70%)" }} />
              
              <div className="w-full h-full rounded-[2rem] overflow-hidden bg-black/20 border border-white/5 relative">
                <img 
                  src="/avatar.png" 
                  alt="Swastik Ram" 
                  className="w-full h-full object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-95 transition-all duration-700 ease-out scale-100 group-hover:scale-[1.02]"
                />
                
                {/* Subtle vignette gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Overlay details */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white tracking-wide">Swastik Ram</span>
                    <span className="text-[10px] text-white/40 font-medium">Kuala Lumpur, MY</span>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
