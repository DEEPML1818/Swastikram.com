import { motion } from "framer-motion";
import { 
  Cpu, Shield, Globe, Layers, Award
} from "lucide-react";

const skillCategories = [
  {
    title: "Blockchain Architect",
    icon: <Globe className="w-8 h-8" />,
    color: "hsl(var(--primary))",
    skills: ["Solidity", "Rust", "Move", "Vyper", "EVM", "Cross-Chain"],
    meta: ""
  },
  {
    title: "AI Engineer",
    icon: <Cpu className="w-8 h-8" />,
    color: "hsl(var(--secondary))",
    skills: ["TensorFlow", "PyTorch", "NLP", "Trading Bots", "OpenAI GPT"],
    meta: ""
  },
  {
    title: "System Security",
    icon: <Shield className="w-8 h-8" />,
    color: "hsl(var(--accent))",
    skills: ["Smart Contract Auditing", "ZKP", "Pentesting", "Incident Mgmt"],
    meta: ""
  },
  {
    title: "Full-Stack Dev",
    icon: <Layers className="w-8 h-8" />,
    color: "white",
    skills: ["React", "Node.js", "TypeScript", "Docker", "CI/CD", "PostgreSQL"],
    meta: ""
  }
];

const geminiBadges = [
  { title: "Gemini API Essentials", img: "/badges/3f83c358-7987-43fe-b8bc-f93a40f0f918.png" },
  { title: "Generative AI Foundations", img: "/badges/8384a46b-5e98-41fc-8977-2ed934d35c5c.png" },
  { title: "Google Cloud AI", img: "/badges/aa1c214c-7e41-443e-bfb2-79e66b809140.png" },
  { title: "ML Engineering", img: "/badges/ea2723b7-7487-4118-a140-0c219aa1150a.png" }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-transparent perspective-1000">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col mb-16">
           <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/60 mb-5">Skills & Tools</p>
           <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
              What I work with.
           </h2>
           <p className="text-white/45 text-base max-w-xl leading-relaxed">
              My stack spans blockchain protocols, machine learning, and full-stack systems.
           </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              className="relative group perspective-1000"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <motion.div 
                 className="h-full glass-card border-white/5 p-8 rounded-[2.5rem] relative overflow-hidden transition-all duration-500 group-hover:border-primary/30 group-hover:bg-primary/[0.02] bento-inner-shadow"
                 whileHover={{ rotateX: 5, rotateY: -5, translateZ: 20 }}
              >
                {/* HUD Decorative Background */}
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                   {category.icon}
                </div>

                <div className="relative z-10">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-transform duration-500 group-hover:scale-110 shadow-lg border border-white/10"
                    style={{ backgroundColor: `${category.color}10` }}
                  >
                    <div style={{ color: category.color }}>{category.icon}</div>
                  </div>

                  <h3 className="text-xl font-black text-white uppercase tracking-tight mb-8 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {category.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-xs font-medium text-white/50 group-hover:text-white/80 transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {category.meta && (
                    <div className="hud-metadata text-[8px] mt-auto">
                       {category.meta}
                    </div>
                  )}
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Credentials Grid Restoration: Gemini Developer Badges */}
        <motion.div 
          className="p-12 glass-card border-white/5 rounded-[3.5rem] bento-inner-shadow relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
           <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <Award className="w-32 h-32 text-primary" />
           </div>

           <div className="flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
              <div className="flex-1">
                 <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">
                    Digital <span className="text-primary italic">Credentials.</span>
                 </h3>
                 <p className="text-muted-foreground font-medium text-sm max-w-md">
                    Verified competence in Generative AI, Machine Learning Engineering, and Gemini API integration by Google Cloud.
                 </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                 {geminiBadges.map((badge, bIdx) => (
                    <motion.div 
                       key={bIdx}
                       className="group/badge relative flex flex-col items-center gap-4 bg-background/40 backdrop-blur-3xl p-6 rounded-[2rem] border border-white/5 group-hover/badge:border-primary/30 transition-all"
                       whileHover={{ y: -5 }}
                    >
                       <div className="w-20 h-20 relative overflow-hidden">
                          <img 
                             src={badge.img} 
                             alt={badge.title} 
                             className="w-full h-full object-contain grayscale opacity-40 group-hover/badge:grayscale-0 group-hover/badge:opacity-100 transition-all duration-700"
                          />
                       </div>
                       <span className="text-[8px] font-black uppercase tracking-widest text-center text-white/30 group-hover/badge:text-primary transition-colors">
                          {badge.title}
                       </span>
                    </motion.div>
                 ))}
              </div>
           </div>
        </motion.div>
        
      </div>
    </section>
  );
}
