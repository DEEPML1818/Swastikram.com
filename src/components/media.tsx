import { motion } from "framer-motion";
import { Newspaper, ExternalLink, Bookmark, Activity } from "lucide-react";

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
    <section id="media" className="py-32 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-8">
             <div className="h-px w-12 bg-accent/40" />
             <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Pulse_Log_02</h2>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6 leading-tight">
            Press <span className="text-accent italic">Archive.</span>
          </h2>
          <p className="text-xl text-muted-foreground font-medium max-w-2xl leading-relaxed">
            Documenting the evolution of decentralized logic and system design in <span className="text-white">global media</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {initialMedia.map((item, index) => {
            // Robust filename extraction for public serving
            const filename = item.image ? item.image.split('/').pop() : null;
            const imagePath = filename ? `/media/${filename}` : null;
            
            return (
              <motion.div
                key={index}
                className="group perspective-1000"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="glass-card border-white/5 bento-inner-shadow rounded-[3rem] overflow-hidden flex flex-col h-full transition-all duration-500 group-hover:border-accent/40 group-hover:bg-accent/[0.02]"
                  whileHover={{ rotateX: 2, rotateY: -2, translateZ: 10 }}
                >
                  {/* Cinematic Preview Image */}
                  <div className="relative h-64 overflow-hidden border-b border-white/5">
                    {imagePath ? (
                      <img 
                        src={imagePath} 
                        alt={item.title}
                        className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-white/5">
                         <Newspaper className="w-12 h-12 text-white/10" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                    
                    {/* HUD Scanline overlay on image */}
                    <div className="absolute inset-0 scan-line opacity-20 pointer-events-none" />
                  </div>

                  <div className="p-10 flex flex-col flex-1">
                    {/* Card HUD Header */}
                    <div className="flex justify-between items-start mb-8">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
                          <Newspaper className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-accent/60">{item.publication}</span>
                          <span className="text-[10px] font-mono text-white/20 uppercase tracking-tighter">Secure_Dispatch_ID_{index}</span>
                        </div>
                      </div>
                      <Bookmark className="w-5 h-5 text-white/5 group-hover:text-accent/40 transition-colors" />
                    </div>

                    <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-6 group-hover:text-accent transition-colors duration-300 leading-tight">
                      {item.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-12 text-md leading-relaxed font-bold line-clamp-2">
                       {item.description}
                    </p>

                    <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                         <Activity className="w-3 h-3 text-accent animate-pulse" />
                         <span className="text-[9px] font-black uppercase tracking-widest text-white/30 italic">Technical_Release</span>
                      </div>
                      
                      <motion.a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="magnetic-button inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-accent hover:text-white transition-colors group/link px-6 py-3 rounded-xl bg-accent/10 border border-accent/20"
                        whileHover={{ scale: 1.05 }}
                      >
                        Read Dispatch
                        <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
