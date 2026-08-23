import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

interface Badge {
  title: string;
  img: string;
  link: string;
}

const geminiBadges: Badge[] = [
  { 
    title: "Gemini Certified Student", 
    img: "/badges/3f83c358-7987-43fe-b8bc-f93a40f0f918.png",
    link: "https://edu.google.accredible.com/719c4a85-c088-4306-a8ad-818c16c2c10d#acc.hQlCaLr6"
  },
  { 
    title: "Educator Level 2", 
    img: "/badges/8384a46b-5e98-41fc-8977-2ed934d35c5c.png",
    link: "https://edu.google.accredible.com/5dd79ca8-9fd1-4175-9d08-ae7ce402083c#acc.YMo4iuwK"
  },
  { 
    title: "Educator Level 1", 
    img: "/badges/aa1c214c-7e41-443e-bfb2-79e66b809140.png",
    link: "https://edu.google.accredible.com/20589127-0968-431d-9757-2923485f1ffd#acc.2G04fQr9"
  },
  { 
    title: "Gemini Certified Faculty", 
    img: "/badges/ea2723b7-7487-4118-a140-0c219aa1150a.png",
    link: "https://edu.google.accredible.com/39002278-5ca5-4a33-8726-f6efe17746b7?key=48f9ad6e30f4f7b72e8303fc044e8f4ce705c93e6ff8ed0f525cfbe1c4532798#acc.JiVU0w5Q"
  }
];

export default function Credentials() {
  return (
    <section id="credentials" className="py-2 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="p-6 md:p-8 glass-card border-black/[0.05] dark:border-white/[0.04] rounded-[2rem] bento-inner-shadow relative overflow-hidden"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
           <div className="absolute top-0 right-0 p-6 opacity-[0.05] pointer-events-none">
              <Award className="w-24 h-24 text-primary" />
           </div>

           <div className="flex flex-col lg:flex-row justify-between items-center gap-8 relative z-10">
              <div className="flex-1 col-span-full lg:col-span-1">
                 <h3 className="text-2xl font-black text-foreground uppercase tracking-tighter mb-2">
                    Digital <span className="text-primary italic">Credentials.</span>
                 </h3>
                  <p className="text-muted-foreground font-medium text-xs max-w-md leading-relaxed">
                     Verified competence in Gemini for Education, Generative AI, and educational technology integration by Google.
                  </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full lg:w-auto">
                  {geminiBadges.map((badge, bIdx) => (
                    <motion.a 
                       key={bIdx}
                       href={badge.link}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="group/badge relative flex flex-col items-center gap-3 bg-white/40 dark:bg-zinc-900/45 backdrop-blur-3xl p-4 rounded-[1.5rem] border border-black/[0.05] dark:border-white/[0.04] group-hover/badge:border-primary/20 transition-all cursor-pointer block"
                       whileHover={{ y: -4 }}
                    >
                       <div className="w-16 h-16 relative overflow-hidden">
                          <img 
                             src={badge.img} 
                             alt={badge.title} 
                             className="w-full h-full object-contain grayscale opacity-60 group-hover/badge:grayscale-0 group-hover/badge:opacity-100 transition-all duration-700"
                          />
                       </div>
                       <span className="text-[7.5px] font-black uppercase tracking-widest text-center text-foreground/50 group-hover/badge:text-primary transition-colors line-clamp-1">
                          {badge.title}
                       </span>
                    </motion.a>
                 ))}
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
