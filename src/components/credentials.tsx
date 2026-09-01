import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Award, 
  ShieldCheck, 
  ExternalLink, 
  FileText, 
  Clock, 
  Eye, 
  X, 
  Download,
  GraduationCap
} from "lucide-react";
import { 
  industryCertifications, 
  statementsOfAccomplishment, 
  featuredCertification, 
  type CredentialItem 
} from "../data/credentials";

export default function Credentials() {
  const [activeModalItem, setActiveModalItem] = useState<{
    item: CredentialItem;
    previewType: 'pdf' | 'banner' | 'certImg';
  } | null>(null);

  // Google accredited certifications (excluding featured DataCamp)
  const googleCertifications = industryCertifications.filter(c => c.id !== featuredCertification.id);
  
  // Track vs Individual Courses in accomplishments
  const careerTrack = statementsOfAccomplishment.find(a => a.type === 'career_track');
  const courseAccomplishments = statementsOfAccomplishment.filter(a => a.type === 'course');

  return (
    <section id="credentials" className="py-6 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 relative z-10 space-y-6">
        
        {/* ========================================================= */}
        {/* TOP BLOCK: INDUSTRY CERTIFICATIONS (TIME-BOUND)          */}
        {/* ========================================================= */}
        <motion.div 
          className="p-5 md:p-7 glass-card border-black/[0.06] dark:border-white/[0.06] rounded-[2rem] bento-inner-shadow relative overflow-hidden"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {/* Subtle Background Icon */}
          <div className="absolute top-0 right-0 p-6 opacity-[0.03] dark:opacity-[0.02] pointer-events-none">
            <ShieldCheck className="w-48 h-48 text-primary" />
          </div>

          {/* Block 1 Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-5 pb-4 border-b border-black/[0.05] dark:border-white/[0.05] relative z-10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-bold uppercase tracking-wider mb-1">
                <ShieldCheck className="w-3 h-3" />
                Category I • Time-Bound & Renewable
              </div>
              <h2 className="text-xl md:text-2xl font-black text-foreground uppercase tracking-tight">
                Industry <span className="text-primary italic">Certifications.</span>
              </h2>
            </div>

            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              {industryCertifications.length} Active Accreditations
            </span>
          </div>

          {/* Featured AI Engineer Spotlight Mini-Card */}
          <div className="mb-4 p-4 rounded-2xl border border-primary/25 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent dark:from-primary/15 dark:via-zinc-900/60 dark:to-transparent flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-13 h-13 md:w-15 md:h-15 rounded-xl bg-white/90 dark:bg-zinc-900/90 border border-primary/20 p-1.5 shadow-sm shrink-0 flex items-center justify-center">
                <img 
                  src={featuredCertification.badgeImg} 
                  alt="Badge" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
                  <span className="text-[8.5px] font-black uppercase tracking-wider text-primary bg-primary/15 px-1.5 py-0.5 rounded">
                    Featured AI Certification
                  </span>
                  <span className="text-[8.5px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                    2-Yr Renewable
                  </span>
                  <span className="text-[9px] font-mono text-muted-foreground hidden sm:inline">
                    ID: {featuredCertification.credentialId}
                  </span>
                </div>
                <h3 className="text-sm md:text-base font-black text-foreground uppercase tracking-tight">
                  {featuredCertification.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Issued by DataCamp • Certified August 31, 2026
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-end md:self-center shrink-0">
              {featuredCertification.bannerImg && (
                <button
                  onClick={() => setActiveModalItem({ item: featuredCertification, previewType: 'banner' })}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/70 dark:bg-zinc-800/80 border border-black/10 dark:border-white/10 text-foreground font-bold text-xs uppercase hover:bg-white dark:hover:bg-zinc-700 transition-all cursor-pointer shadow-sm"
                >
                  <Eye className="w-3.5 h-3.5 text-primary" />
                  Banner
                </button>
              )}
              {featuredCertification.pdfUrl && (
                <button
                  onClick={() => setActiveModalItem({ item: featuredCertification, previewType: 'pdf' })}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground font-bold text-xs uppercase hover:opacity-90 transition-all shadow-sm cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  View PDF
                </button>
              )}
            </div>
          </div>

          {/* Google Badges 4-Column Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {googleCertifications.map((badge) => (
              <div
                key={badge.id}
                className="group/badge p-3.5 rounded-2xl bg-white/50 dark:bg-zinc-900/40 border border-black/[0.04] dark:border-white/[0.04] hover:border-primary/25 transition-all text-center flex flex-col justify-between"
              >
                <div className="w-13 h-13 md:w-14 md:h-14 mx-auto mb-2 flex items-center justify-center">
                  <img 
                    src={badge.badgeImg} 
                    alt={badge.title} 
                    className="w-full h-full object-contain grayscale-[15%] group-hover/badge:grayscale-0 transition-all duration-300 group-hover/badge:scale-105"
                  />
                </div>
                <div className="mb-2">
                  <span className="text-[8px] font-bold text-primary block uppercase tracking-wider mb-0.5">
                    Google Verified
                  </span>
                  <h4 className="text-[11px] font-bold text-foreground leading-tight group-hover/badge:text-primary transition-colors">
                    {badge.title}
                  </h4>
                </div>
                {badge.verifyUrl && (
                  <a 
                    href={badge.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1 text-[10px] font-bold text-primary hover:underline pt-1 border-t border-black/[0.03] dark:border-white/[0.03]"
                  >
                    Verify <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </motion.div>


        {/* ========================================================= */}
        {/* BOTTOM BLOCK: STATEMENTS OF ACCOMPLISHMENT (PERMANENT)    */}
        {/* ========================================================= */}
        <motion.div 
          className="p-5 md:p-7 glass-card border-black/[0.06] dark:border-white/[0.06] rounded-[2rem] bento-inner-shadow relative overflow-hidden"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {/* Subtle Background Icon */}
          <div className="absolute top-0 right-0 p-6 opacity-[0.03] dark:opacity-[0.02] pointer-events-none">
            <GraduationCap className="w-48 h-48 text-amber-500" />
          </div>

          {/* Block 2 Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-5 pb-4 border-b border-black/[0.05] dark:border-white/[0.05] relative z-10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-[11px] font-bold uppercase tracking-wider mb-1">
                <GraduationCap className="w-3 h-3" />
                Category II • Permanent Statements of Accomplishment
              </div>
              <h2 className="text-xl md:text-2xl font-black text-foreground uppercase tracking-tight">
                Statements of <span className="text-amber-500 italic">Accomplishment.</span>
              </h2>
            </div>

            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              {statementsOfAccomplishment.length} Awarded
            </span>
          </div>

          {/* Career Track (30h) Highlight Mini-Card */}
          {careerTrack && (
            <div className="mb-4 p-4 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent dark:from-amber-500/15 dark:via-zinc-900/60 dark:to-transparent flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400 p-2.5 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
                    <span className="text-[8.5px] font-black uppercase tracking-wider text-amber-700 dark:text-amber-300 bg-amber-500/20 px-1.5 py-0.5 rounded">
                      Career Track
                    </span>
                    <span className="text-[8.5px] font-bold text-foreground/80 bg-black/5 dark:bg-white/5 px-1.5 py-0.5 rounded flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5 text-amber-500" /> 30 Hours
                    </span>
                    <span className="text-[9px] font-mono text-muted-foreground">
                      {careerTrack.credentialNumber}
                    </span>
                  </div>
                  <h3 className="text-sm md:text-base font-black text-foreground uppercase tracking-tight">
                    {careerTrack.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Awarded by DataCamp • Completed August 30, 2026
                  </p>
                </div>
              </div>

              {careerTrack.pdfUrl && (
                <button
                  onClick={() => setActiveModalItem({ item: careerTrack, previewType: 'pdf' })}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 text-black font-bold text-xs uppercase hover:bg-amber-400 transition-all shadow-sm cursor-pointer shrink-0 self-end md:self-center"
                >
                  <FileText className="w-3.5 h-3.5" />
                  View Track PDF
                </button>
              )}
            </div>
          )}

          {/* 7 Completed Course Statements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {courseAccomplishments.map((course) => (
              <div
                key={course.id}
                className="p-3 rounded-xl bg-white/40 dark:bg-zinc-900/30 border border-black/[0.04] dark:border-white/[0.04] hover:border-amber-500/25 transition-all flex flex-col justify-between"
              >
                <div className="mb-2">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-black/5 dark:bg-white/5 text-muted-foreground flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5 text-amber-500" />
                      {course.hours}h Course
                    </span>
                    <span className="text-[9px] font-mono text-muted-foreground/70">
                      {course.credentialNumber}
                    </span>
                  </div>

                  <h4 className="text-[11.5px] font-bold text-foreground leading-snug line-clamp-2">
                    {course.title}
                  </h4>
                </div>

                <div className="pt-2 border-t border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between text-[10px]">
                  <span className="text-muted-foreground text-[9px]">
                    {course.issueDate}
                  </span>

                  {course.pdfUrl && (
                    <button
                      onClick={() => setActiveModalItem({ item: course, previewType: 'pdf' })}
                      className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-600 dark:text-amber-400 hover:underline cursor-pointer"
                    >
                      <FileText className="w-3 h-3" />
                      PDF
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Universal Lightbox Modal for PDF & Banner Previews */}
      <AnimatePresence>
        {activeModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalItem(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              transition={{ type: "spring", bounce: 0.15, duration: 0.35 }}
              className="relative z-10 w-full max-w-4xl bg-zinc-950 text-white rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[88vh]"
            >
              {/* Modal Header */}
              <div className="p-4 border-b border-white/10 flex items-center justify-between gap-4 bg-zinc-900/60">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/20 text-primary">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white leading-tight">
                      {activeModalItem.item.title}
                    </h3>
                    <p className="text-[11px] text-white/60">
                      {activeModalItem.item.issuer} • {activeModalItem.item.credentialId || activeModalItem.item.credentialNumber || activeModalItem.item.issueDate}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {activeModalItem.item.pdfUrl && (
                    <a
                      href={activeModalItem.item.pdfUrl}
                      download
                      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                      title="Download PDF"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {activeModalItem.item.verifyUrl && (
                    <a
                      href={activeModalItem.item.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-primary text-primary-foreground font-bold text-xs flex items-center gap-1 hover:opacity-90"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Verify
                    </a>
                  )}
                  <button
                    onClick={() => setActiveModalItem(null)}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-4 overflow-y-auto flex-1 flex items-center justify-center bg-black/40">
                {activeModalItem.previewType === 'banner' && activeModalItem.item.bannerImg && (
                  <img 
                    src={activeModalItem.item.bannerImg} 
                    alt={activeModalItem.item.title} 
                    className="max-h-[70vh] w-auto object-contain rounded-lg border border-white/10"
                  />
                )}

                {activeModalItem.previewType === 'pdf' && activeModalItem.item.pdfUrl && (
                  <iframe
                    src={`${activeModalItem.item.pdfUrl}#toolbar=0`}
                    className="w-full h-[65vh] rounded-lg border border-white/10 bg-white"
                    title={activeModalItem.item.title}
                  />
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
