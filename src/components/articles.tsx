import { motion } from "framer-motion";
import { BookOpen, ArrowUpRight } from "lucide-react";

const articles = [
  {
    title: "Quantum Computers vs. Bitcoin: The Cryptographic War",
    publication: "Medium",
    date: "2025",
    readTime: "12 min read",
    description: "Analyzing post-quantum cryptography (PQC) and the resilience of SHA-256 against Shor's Algorithm in next-gen financial layers.",
    link: "https://medium.com/@swastikram",
    tags: ["Quantum", "Bitcoin", "PQC"]
  },
  {
    title: "AI Red Teaming: Breaking the Weights of LLMs",
    publication: "Technical Blog",
    date: "2025",
    readTime: "8 min read",
    description: "Systematic vulnerabilities in prompt injection and model alignment. How to secure autonomous agents from adversarial prompt engineering.",
    link: "https://medium.com/@swastikram",
    tags: ["AI Security", "LLM", "Red Teaming"]
  },
  {
    title: "The Architecture of HTTP 402: Payment Required",
    publication: "BCH Infrastructure",
    date: "2026",
    readTime: "15 min read",
    description: "Restoring the missing pillar of the internet protocol suite. Making micropayments a native standard for machine-to-machine economies.",
    link: "https://medium.com/@swastikram",
    tags: ["Protocols", "HTTP 402", "BCH"]
  }
];

export default function Articles() {
  return (
    <section id="articles" className="py-24 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent/60 mb-5">Writing</p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Technical{" "}
            <span style={{ background: "linear-gradient(135deg, hsl(282,90%,72%) 0%, hsl(252,100%,70%) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Articles.
            </span>
          </h2>
          <p className="text-white/45 text-base max-w-xl leading-relaxed">
             Insights on cryptography, language model security, and machine-to-machine payment infrastructure.
          </p>
        </div>

        <div className="grid gap-4">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <a 
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 md:p-8 glass-card rounded-2xl border-white/[0.06] hover:border-white/15 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                   <div className="flex-grow">
                      <div className="flex items-center gap-3.5 mb-4 text-xs font-semibold tracking-wide text-white/35">
                         <span className="text-accent">{article.publication}</span>
                         <div className="w-1 h-1 bg-white/20 rounded-full" />
                         <span>{article.date}</span>
                         <div className="w-1 h-1 bg-white/20 rounded-full" />
                         <span>{article.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-accent transition-colors leading-tight">
                         {article.title}
                      </h3>
                      
                      <p className="text-white/45 mb-6 max-w-3xl leading-relaxed text-sm font-normal line-clamp-2">
                        {article.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {article.tags.map((tag, tIdx) => (
                          <span 
                            key={tIdx}
                            className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-[10px] font-medium text-white/40"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                   </div>

                   <div className="flex items-center md:border-l border-white/[0.06] md:pl-10">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/50 group-hover:bg-accent/25 group-hover:border-accent/40 group-hover:text-accent transition-all duration-300">
                         <ArrowUpRight className="w-5 h-5" />
                      </div>
                   </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
