import { motion } from "framer-motion";
import { Cpu, Code2, ShieldAlert, Zap, Globe } from "lucide-react";

const milestones = [
  {
    year: "2015",
    title: "The Genesis",
    description: "Started coding at age 6. Initial forays into logic through basic scripts and game development. The foundation of a decade-long obsession.",
    icon: Code2,
    color: "text-blue-400",
  },
  {
    year: "2018",
    title: "Full-Stack Ascent",
    description: "Mastered JavaScript and Python. Developed and deployed first real-world applications, learning the intricacies of end-to-end system design.",
    icon: Globe,
    color: "text-green-400",
  },
  {
    year: "2021",
    title: "Deep-Tech Evolution",
    description: "Pivoted into the intersections of AI and Blockchain. Began architecting smart contracts and researching adversarial AI security models.",
    icon: Cpu,
    color: "text-primary",
  },
  {
    year: "2024",
    title: "Global Recognition",
    description: "Dominated the 2024 hackathon circuit. Secured 11+ prizes and bounties across ETHKL, Base, and Solana. Launched major protocols like ETNPump.",
    icon: Zap,
    color: "text-secondary",
  },
  {
    year: "2025",
    title: "System Architect",
    description: "Currently age 16. Architecting the future of decentralized security operations (dSOC) and intelligent automation for a more transparent future.",
    icon: ShieldAlert,
    color: "text-accent",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-24 px-6 relative overflow-hidden bg-background">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/60 mb-5">Odyssey</p>
          <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-4">
            The{" "}
            <span style={{ background: "linear-gradient(135deg, hsl(252,100%,70%) 0%, hsl(282,90%,72%) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Odyssey.
            </span>
          </h2>
          <p className="text-foreground/60 text-base max-w-xl mx-auto leading-relaxed">
            A 10-year evolution from a curious 6-year-old to a systems architect building the decentralized future.
          </p>
        </motion.div>
 
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-primary via-secondary to-accent opacity-20 hidden md:block" />
 
          <div className="space-y-16 md:space-y-28">
            {milestones.map((ms, index) => (
              <motion.div
                key={ms.year}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                {/* Content */}
                <div className="flex-1 w-full">
                  <div className="glass-card p-8 md:p-10 border-black/[0.05] rounded-2xl hover:border-primary/45 transition-all duration-300 relative group">
                    <div className="absolute -top-6 right-8 text-6xl font-black text-foreground/[0.03] select-none transition-colors group-hover:text-primary/[0.05]">
                      {ms.year}
                    </div>
                    <div className="flex items-center gap-3.5 mb-4">
                       <div className={`p-2.5 rounded-xl bg-black/[0.03] border border-black/[0.08] ${ms.color}`}>
                         <ms.icon className="w-5 h-5" />
                       </div>
                       <h3 className="text-xl font-bold text-foreground tracking-tight">
                         {ms.title}
                       </h3>
                    </div>
                    <p className="text-sm text-foreground/65 leading-relaxed font-normal">
                      {ms.description}
                    </p>
                  </div>
                </div>
 
                {/* Point */}
                <div className="relative z-10 flex items-center justify-center w-10 h-10">
                   <div className="absolute inset-0 bg-background border-4 border-black/[0.08] rounded-full" />
                   <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${index % 2 === 0 ? "from-primary" : "from-secondary"} to-white shadow-[0_0_15px_rgba(130,80,255,0.4)]`} />
                </div>

                {/* Spacer for empty side */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
