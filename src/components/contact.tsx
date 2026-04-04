import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Link2 } from "lucide-react";

export default function Contact() {
  const socialLinks = [
    { name: "Email", href: "mailto:deepml1818@gmail.com", icon: Mail },
    { name: "GitHub", href: "https://github.com/DEEPML1818", icon: Github },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/swastikram/", icon: Linkedin },
    { name: "Twitter", href: "https://x.com/Swastik_Ram", icon: Twitter },
    { name: "Linktree", href: "https://www.swastikram.com/Linktree/index.html", icon: Link2 },
  ];

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="premium-heading uppercase">Initiate Protocol</h2>
          <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto mb-20 leading-relaxed">
            Ready to architect the next-gen protocols? I'm always open to <span className="accent-text">deep-tech collaborations</span> and <span className="text-white">innovative ventures</span>.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 mb-24">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="glass-card p-6 flex items-center gap-4 transition-all duration-500 hover:border-primary/50 hover:-translate-y-2">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <link.icon className="h-5 w-5 text-white/50 group-hover:text-primary transition-colors" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 group-hover:text-white transition-colors">
                  {link.name}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="glass-card p-16 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[120px] rounded-full -mr-32 -mt-32" />
          <p className="text-2xl text-muted-foreground font-medium italic mb-10 leading-relaxed relative z-10">
            "The future isn't something that happens to us; it's something we <span className="text-white">create</span> with every line of code."
          </p>
          <div className="flex items-center justify-center gap-6 relative z-10">
             <div className="h-px w-12 bg-white/10"></div>
             <p className="text-xs font-black uppercase tracking-[0.5em] text-primary">System Architect</p>
             <div className="h-px w-12 bg-white/10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
