import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Activity, ArrowRight, Fingerprint } from "lucide-react";

const articles = [
  {
    title: "Quantum Computers vs. Bitcoin: The Cryptographic War",
    publication: "Medium",
    date: "2025",
    readTime: "12 min",
    description: "Analyzing post-quantum cryptography (PQC) and the resilience of SHA-256 against Shore's Algorithm in next-gen financial layers.",
    link: "https://medium.com/@swastikram",
    tags: ["Quantum", "Bitcoin", "PQC"]
  },
  {
    title: "AI Red Teaming: Breaking the Weights of LLMs",
    publication: "Technical Blog",
    date: "2025",
    readTime: "8 min",
    description: "Systematic vulnerabilities in prompt injection and model alignment. How to secure autonomous agents from adversarial prompt engineering.",
    link: "https://medium.com/@swastikram",
    tags: ["AI_Sec", "LLM", "Red_Teaming"]
  },
  {
    title: "The Architecture of HTTP 402: Payment Required",
    publication: "BCH Infrastructure",
    date: "2026",
    readTime: "15 min",
    description: "Restoring the missing pillar of the internet protocol suite. Making micropayments a native standard for machine-to-machine economies.",
    link: "https://medium.com/@swastikram",
    tags: ["TCP_IP", "HTTP_402", "BCH"]
  }
];

export default function Articles() {
  return (
    <section id="articles" className="py-12 relative overflow-hidden bg-transparent perspective-1000">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col mb-10">
          <div className="flex items-center gap-3 mb-4">
             <BookOpen className="w-5 h-5 text-accent" />
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Technical_Intelligence_08</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-2">
            Thought <span className="text-accent italic">Leadership.</span>
          </h2>
          <p className="text-muted-foreground font-medium max-w-xl">
             Verifiable technical intelligence across the domains of cryptography, LLM security, and machine-to-machine economics.
          </p>
        </div>

        <div className="grid gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a 
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 md:p-8 glass-card border-white/5 rounded-[2rem] bg-gradient-to-r from-accent/5 to-transparent hover:border-accent/30 hover:bg-accent/[0.02] transition-all duration-500 bento-inner-shadow overflow-hidden group/card"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                   <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4 opacity-30 group-hover:opacity-60 transition-opacity">
                         <span className="text-[9px] font-black uppercase tracking-widest text-accent">{article.publication}</span>
                         <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                         <span className="text-[9px] font-mono text-white/40">{article.date}</span>
                         <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                         <span className="text-[9px] font-black uppercase tracking-widest text-white/50">{article.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-4 group-hover/card:text-accent transition-colors leading-tight">
                         {article.title}
                      </h3>
                      
                      <p className="text-muted-foreground font-medium mb-8 max-w-3xl leading-relaxed text-md line-clamp-2">
                        {article.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag, tIdx) => (
                          <span 
                            key={tIdx}
                            className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest text-white/30 group-hover/card:text-white transition-all"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                   </div>

                   <div className="flex items-center gap-6 md:border-l border-white/5 md:pl-12">
                      <motion.div 
                        className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover/card:scale-110 group-hover/card:bg-accent group-hover/card:text-black transition-all duration-500"
                        whileHover={{ rotate: 15 }}
                      >
                         <ArrowRight className="w-8 h-8 transition-transform group-hover/card:translate-x-1" />
                      </motion.div>
                   </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover/card:opacity-[0.05] transition-opacity">
                   <Fingerprint className="w-48 h-48" />
                </div>
                <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent scale-x-0 group-hover/card:scale-x-100 transition-transform duration-1000" />
                <div className="absolute inset-0 scan-line opacity-5 pointer-events-none" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Global Feed Activity */}
        <div className="mt-16 flex items-center justify-between opacity-10 font-mono text-[9px] px-8">
           <div className="flex items-center gap-4">
              <Activity className="w-3 h-3 animate-pulse" />
              <span>CONTENT_SYNC_ACTIVE: 0.98s LATENCY</span>
           </div>
           <div className="flex gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
              <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
              <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
           </div>
        </div>
      </div>
    </section>
  );
}
