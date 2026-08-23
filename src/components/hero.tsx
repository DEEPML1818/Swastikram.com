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
        <div className="max-w-4xl">
          <motion.div 
            className="flex flex-col items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Tag/Badge */}
            <motion.div
              className="flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full bg-black/[0.03] border border-black/[0.08]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[11px] font-medium text-foreground/60 tracking-wider">Systems Architect & AI Engineer</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground tracking-tight mb-6 leading-[0.9] select-none" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Swastik <span style={{ background: "linear-gradient(135deg, hsl(252,100%,70%) 0%, hsl(282,90%,72%) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Ram.</span>
            </h1>

            <p className="text-foreground/70 font-normal max-w-2xl mb-8 text-base md:text-lg leading-relaxed">
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
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-black/[0.03] border border-black/[0.08] text-foreground/75 text-sm font-semibold hover:bg-black/5 hover:text-foreground transition-all duration-300 hover:-translate-y-0.5"
                whileTap={{ scale: 0.97 }}
              >
                Let's talk
              </motion.a>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-black/[0.06] w-full">
              {[
                { value: "15+", label: "Hackathon wins" },
                { value: "6+", label: "Years building" },
                { value: "3+", label: "Mainnet systems" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-0.5">
                  <span className="text-xl md:text-2xl font-black text-foreground" style={{ fontFamily: "'Outfit', sans-serif" }}>{stat.value}</span>
                  <span className="text-[11px] text-foreground/50 font-medium">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
