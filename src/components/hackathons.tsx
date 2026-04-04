import { motion } from "framer-motion";
import { Trophy, Calendar, Code2, Target, Award, Cpu, Activity, Fingerprint, Zap, Shield } from "lucide-react";

export default function Hackathons() {
  const hackathons = [
    {
      name: "BCH-1 Hackcelerator",
      year: "2026",
      achievement: "CashAPI: Agentic Payments",
      description: "Implemented HTTP 402 Micropayment Standard for AI agents on Bitcoin Cash mainnet.",
      category: "BCH_FINANCIAL",
      icon: <Activity className="w-6 h-6 text-primary" />,
      status: "🥇 PROTOCOL_WINNER"
    },
    {
      name: "Hack the Track (Toyota GR)",
      year: "2025",
      achievement: "GR Race Guardian",
      description: "Professional motorsport analytics & Digital Twin technology presented to Toyota GR.",
      category: "AI_ANALYTICS",
      icon: <Cpu className="w-6 h-6 text-secondary" />,
      status: "🏎️ FLAGSHIP_PRESENTATION"
    },
    {
      name: "ETHKL24",
      year: "2024",
      achievement: "Bounties + Side Prize",
      description: "Layer 2 scaling application using Scroll, ICP, and Worldcoin technology.",
      category: "ETHEREUM",
      icon: <Target className="w-6 h-6 text-accent" />,
      status: "💎 BOUNTY_WINNER"
    },
    {
      name: "Solana Wormhole",
      year: "2024",
      achievement: "Cross-chain Innovation",
      description: "Cross-chain asset transfer tool leveraging Wormhole protocol for instant liquidity.",
      category: "SOLANA",
      icon: <Zap className="w-6 h-6 text-primary" />,
      status: "🌐 INTEROP_LEAD"
    },
    {
      name: "Sui Overflow",
      year: "2025",
      achievement: "SuiAuditWarp",
      description: "Advanced smart contract auditing tools specifically for Move-based developers.",
      category: "SECURITY",
      icon: <Shield className="w-6 h-6 text-white" />,
      status: "️🛡️ SEC_WINNER"
    },
    {
      name: "IOTA Malaysia",
      year: "2025",
      achievement: "dSOC Winner",
      description: "Decentralized Security Operations Center for enterprise blockchain management.",
      category: "INFRASTRUCTURE",
      icon: <Trophy className="w-6 h-6 text-secondary" />,
      status: "◊ INFRA_WINNER"
    }
  ];

  const stats = [
    { label: "Hackathons", value: "15+", icon: Code2 },
    { label: "Active_Time", value: "3.5Y", icon: Calendar },
    { label: "Major_Awards", value: "10+", icon: Trophy },
  ];

  return (
    <section id="hackathons" className="py-24 px-6 relative overflow-hidden bg-transparent perspective-1000">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col mb-20">
           <div className="flex items-center gap-3 mb-4">
              <Trophy className="w-5 h-5 text-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Protocol_Wins_07</span>
           </div>
           <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">
              Hackathon <span className="text-primary italic">Ledger.</span>
           </h2>
           <p className="text-muted-foreground font-medium max-w-xl">
              A high-density record of verifiable wins and architectural breakthroughs across 15+ global stages.
           </p>
        </div>

        {/* Global Record Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-card p-10 group bento-inner-shadow rounded-[2.5rem]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-8">
                 <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-primary/40 transition-all duration-500">
                   <stat.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                 </div>
                 <Fingerprint className="w-4 h-4 opacity-10 group-hover:opacity-30 transition-opacity" />
              </div>
              <div className="text-5xl font-black text-white mb-2 tracking-tighter flex items-end gap-2">
                 {stat.value}
                 <span className="w-2 h-2 bg-primary rounded-full animate-pulse mb-3" />
              </div>
              <div className="text-[9px] font-black uppercase tracking-widest text-primary/60">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* The Win Registry */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-24">
          {hackathons.map((hack, index) => (
            <motion.div
              key={hack.name}
              className="glass-card p-10 group relative rounded-[3rem] bento-inner-shadow overflow-hidden flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ rotateX: 2, rotateY: -2, translateZ: 10 }}
            >
              <div className="flex items-start justify-between mb-10">
                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-primary/40 transition-colors">
                    {hack.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white uppercase tracking-tight group-hover:text-primary transition-colors">
                      {hack.name}
                    </h3>
                    <p className="text-[9px] font-black uppercase tracking-widest text-white/20 italic">{hack.category}</p>
                  </div>
                </div>
                <span className="text-[10px] text-white/10 font-bold opacity-0 group-hover:opacity-100 transition-opacity">{hack.year}</span>
              </div>
              
              <div className="mb-8">
                <span className={`px-4 py-1.5 rounded-full border border-white/10 text-[9px] font-black uppercase tracking-[0.2em] transition-all bg-white/5 group-hover:bg-primary/20 group-hover:border-primary/40`}>
                  {hack.status}
                </span>
              </div>
              
              <h4 className="text-md font-black text-white mb-4 uppercase tracking-tighter">{hack.achievement}</h4>
              <p className="text-xs text-muted-foreground font-medium leading-relaxed mb-10 line-clamp-3">
                {hack.description}
              </p>

              <div className="mt-auto pt-6 border-t border-white/5 opacity-20 flex justify-between items-center group-hover:opacity-60 transition-opacity">
                 <span className="text-[8px] font-mono">SEQ_WIN_ID: 0x{index}A</span>
                 <Activity className="w-3 h-3 animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Milestone Terminal */}
        <motion.div
          className="glass-card p-12 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-[4rem] border-white/5 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-6 mb-16 px-4">
            <Trophy className="h-8 w-8 text-primary shadow-[0_0_20px_rgba(var(--primary),0.3)]" />
            <h3 className="text-3xl font-black text-white uppercase tracking-[0.3em]">System_Milestones</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 px-4">
            <div className="space-y-8">
              <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.5em] italic">Infrastructure_Deployments</h4>
              <ul className="space-y-6">
                {[
                  "ETNPump.fun - Full Bonding Curve Implementation",
                  "CryptoPayRoll - Enterprise BCH Disbursement",
                  "AuditWarp - Multi-Chain Security Guard"
                ].map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground font-bold flex items-center gap-4 group">
                    <div className="w-1 h-3 bg-primary/40 group-hover:bg-primary transition-all rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-8">
              <h4 className="text-[10px] font-black text-secondary uppercase tracking-[0.5em] italic">Architecture_Validation</h4>
              <ul className="space-y-6">
                {[
                  "0-Conf Settlement Optimization Protocol",
                  "Tokenomics Simulation Engine (Monte Carlo)",
                  "Agentic Smart Contract Interoperability"
                ].map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground font-bold flex items-center gap-4 group">
                    <div className="w-1 h-3 bg-secondary/40 group-hover:bg-secondary transition-all rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}