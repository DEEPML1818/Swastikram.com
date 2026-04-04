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
    <section id="journey" className="py-32 px-6 relative overflow-hidden bg-background">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="premium-heading uppercase text-shadow-glow">The Odyssey</h2>
          <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto mt-6">
            A 10-year evolution from a curious 6-year-old to a system architect building the decentralized future.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-primary via-secondary to-accent opacity-20 hidden md:block" />

          <div className="space-y-24 md:space-y-40">
            {milestones.map((ms, index) => (
              <motion.div
                key={ms.year}
                className={`flex flex-col md:flex-row items-center gap-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Content */}
                <div className="flex-1 w-full">
                  <div className={`glass-card p-8 md:p-12 border-white/5 bento-inner-shadow hover:border-primary/40 transition-all duration-500 relative group`}>
                    <div className="absolute -top-10 left-0 text-7xl font-black text-white/5 select-none transition-colors group-hover:text-primary/10">
                      {ms.year}
                    </div>
                    <div className="flex items-center gap-4 mb-6">
                       <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${ms.color}`}>
                         <ms.icon className="w-6 h-6" />
                       </div>
                       <h3 className="text-3xl font-black uppercase tracking-tight text-white line-clamp-1">
                         {ms.title}
                       </h3>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                      {ms.description}
                    </p>
                    
                    {/* Border Beam Animation */}
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-full transition-all duration-700" />
                  </div>
                </div>

                {/* Point */}
                <div className="relative z-10 flex items-center justify-center w-12 h-12">
                   <div className="absolute inset-0 bg-background border-4 border-white/10 rounded-full" />
                   <motion.div 
                     className={`w-4 h-4 rounded-full bg-gradient-to-r ${index % 2 === 0 ? "from-primary" : "from-secondary"} to-white shadow-[0_0_15px_rgba(var(--primary),0.5)]`}
                     animate={{ scale: [1, 1.2, 1] }}
                     transition={{ duration: 2, repeat: Infinity }}
                   />
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
