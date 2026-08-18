import { motion } from "framer-motion";

const highlights = [
  { label: "Started coding", value: "Age 6", sub: "Back in 2015" },
  { label: "Hackathon wins", value: "15+", sub: "ETHKL, Solana, GR" },
  { label: "Primary languages", value: "Rust, Move, Solidity", sub: "+ 8 more" },
  { label: "Based in", value: "Malaysia", sub: "Selangor" },
];

export default function Dossier() {
  return (
    <section id="about" className="py-28 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/60 mb-5">About</p>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-8 leading-[1.05]">
              Building real things.<br />
              <span className="text-white/35 font-normal text-3xl">Since I was six.</span>
            </h2>
            <div className="space-y-5 text-[15px] text-white/50 leading-relaxed mb-10">
              <p>
                I picked up my first computer at <span className="text-white/80">age 6</span> and haven't stopped building since.
                Now 16, I work at the intersection of <span className="text-white/80">blockchain security</span> and <span className="text-white/80">AI</span> —
                designing systems that are hard to break and harder to fool.
              </p>
              <p>
                I've won <span className="text-white/80">15+ international hackathons</span> — ETHKL24, Solana Wormhole, Toyota GR —
                and spent the time between them studying whitepapers, breaking contracts, and shipping real protocols.
              </p>
            </div>
            <blockquote className="border-l-2 border-white/10 pl-5 text-white/30 italic text-sm leading-relaxed">
              "Architecture is not about aesthetics alone — it is about structural integrity."
            </blockquote>
          </motion.div>

          <div className="grid grid-cols-2 gap-3">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                className="glass-card rounded-2xl p-6 flex flex-col gap-1 hover:border-white/15 transition-all duration-300 cursor-default"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -2 }}
              >
                <span className="text-xs text-white/30 font-medium">{h.label}</span>
                <span className="text-lg font-bold text-white leading-tight">{h.value}</span>
                <span className="text-xs text-white/20">{h.sub}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
