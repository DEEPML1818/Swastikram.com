import { motion } from "framer-motion";
import { Newspaper, ExternalLink, ArrowUpRight } from "lucide-react";

interface MediaItem {
  title: string;
  publication: string;
  link: string;
  description: string;
  image?: string;
}

export default function Media({ initialMedia = [] }: { initialMedia?: MediaItem[] }) {
  if (!initialMedia || !Array.isArray(initialMedia)) return null;

  return (
    <section id="media" className="py-28 relative overflow-hidden bg-transparent">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[180px]"
          style={{ background: "radial-gradient(circle, rgba(130,80,255,0.06) 0%, transparent 70%)" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, hsl(252,100%,70%), transparent)" }} />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">Press Archive</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
            In the{" "}
            <span style={{ background: "linear-gradient(135deg, hsl(252,100%,70%) 0%, hsl(282,90%,72%) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Media.
            </span>
          </h2>
          <p className="text-white/45 text-lg max-w-xl leading-relaxed font-normal">
            Featured stories, interviews, and editorial coverage across global publications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {initialMedia.map((item, index) => {
            const filename = item.image ? item.image.split("/").pop() : null;
            const imagePath = filename ? `/media/${filename}` : null;

            return (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col border-white/[0.06] hover:border-white/14 transition-all duration-400 hover:shadow-[0_24px_64px_rgba(0,0,0,0.6)]">
                  {/* Image area */}
                  <div className="relative h-48 overflow-hidden bg-white/[0.03]">
                    {imagePath ? (
                      <img
                        src={imagePath}
                        alt={item.title}
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Newspaper className="w-10 h-10 text-white/10" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-[#060608]/20 to-transparent" />
                    
                    {/* Publication badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-semibold text-white/70">
                        {item.publication}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-base font-bold text-white/90 group-hover:text-white mb-2.5 leading-snug transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed line-clamp-2 mb-5 font-normal flex-1">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                      <span className="text-[11px] font-medium text-white/30 uppercase tracking-wider">Read article</span>
                      <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300">
                        <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
