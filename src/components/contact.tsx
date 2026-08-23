import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  const socialLinks = [
    { name: "Email", href: "mailto:deepml1818@gmail.com", icon: Mail },
    { name: "GitHub", href: "https://github.com/swastikram", icon: Github },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/swastikram/", icon: Linkedin },
    { name: "Twitter", href: "https://x.com/Swastik_Ram", icon: Twitter },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/60 mb-5">Contact</p>
          <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-6">
            Get in{" "}
            <span style={{ background: "linear-gradient(135deg, hsl(252,100%,70%) 0%, hsl(282,90%,72%) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Touch.
            </span>
          </h2>
          <p className="text-foreground/60 text-base md:text-lg font-normal max-w-xl mx-auto mb-12 leading-relaxed">
            I'm always open to discussing new systems, smart contract audits, or intelligent automation projects.
          </p>
        </motion.div>
 
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="glass-card px-5 py-4 rounded-xl flex items-center gap-3 border-black/[0.05] hover:border-primary/35 transition-all duration-300">
                <div className="w-9 h-9 bg-black/[0.03] rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <link.icon className="h-4.5 w-4.5 text-foreground/50 group-hover:text-primary transition-colors" />
                </div>
                <span className="text-[11px] font-semibold text-foreground/50 group-hover:text-foreground transition-colors">
                  {link.name}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
 
        <motion.div
          className="glass-card p-10 md:p-12 border-primary/20 bg-gradient-to-br from-primary/[0.02] to-transparent relative overflow-hidden rounded-3xl"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[120px] rounded-full -mr-32 -mt-32" />
          <p className="text-xl md:text-2xl text-foreground/60 font-normal italic mb-8 leading-relaxed relative z-10">
            "The future isn't something that happens to us; it's something we <span className="text-foreground font-semibold">create</span> with every line of code."
          </p>
          <div className="flex items-center justify-center gap-4 relative z-10">
             <div className="h-px w-8 bg-black/10"></div>
             <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">Swastik Ram</p>
             <div className="h-px w-8 bg-black/10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
