import { motion } from "framer-motion";
import { 
  Cpu, Shield, Globe, Layers
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
    color: "hsl(var(--foreground))",
    skills: ["React", "Node.js", "TypeScript", "Docker", "CI/CD", "PostgreSQL"],
    meta: ""
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-transparent perspective-1000">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col mb-16">
           <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/60 mb-5">Skills & Tools</p>
           <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-4">
              What I work with.
           </h2>
           <p className="text-foreground/60 text-base max-w-xl leading-relaxed">
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
                 className="h-full glass-card border-black/[0.05] p-8 rounded-[2.5rem] relative overflow-hidden transition-all duration-500 group-hover:border-primary/30 group-hover:bg-primary/[0.01] bento-inner-shadow"
                 whileHover={{ rotateX: 5, rotateY: -5, translateZ: 20 }}
              >
                {/* HUD Decorative Background */}
                <div className="absolute top-0 right-0 p-8 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity">
                   {category.icon}
                </div>

                <div className="relative z-10">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-transform duration-500 group-hover:scale-110 shadow-lg border border-black/[0.08]"
                    style={{ backgroundColor: `${category.color}10` }}
                  >
                    <div style={{ color: category.color }}>{category.icon}</div>
                  </div>

                  <h3 className="text-xl font-black text-foreground uppercase tracking-tight mb-8 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {category.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        className="px-3 py-1.5 rounded-lg bg-black/[0.03] border border-black/[0.08] text-xs font-medium text-foreground/60 group-hover:text-foreground/90 transition-all cursor-default"
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


      </div>
    </section>
  );
}
