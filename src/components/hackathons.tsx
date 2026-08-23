import { motion } from "framer-motion";
import { Trophy, Calendar, Award, Shield, Zap, Cpu } from "lucide-react";

export default function Hackathons() {
  const hackathons = [
    {
      name: "BCH-1 Hackcelerator",
      year: "2026",
      achievement: "CashAPI: Agentic Payments",
      description: "Implemented HTTP 402 Micropayment Standard for AI agents on Bitcoin Cash mainnet.",
      category: "Fintech",
      icon: <Award className="w-5 h-5 text-primary" />,
      status: "🥇 1st Place"
    },
    {
      name: "Hack the Track (Toyota GR)",
      year: "2025",
      achievement: "GR Race Guardian",
      description: "Professional motorsport analytics & Digital Twin technology presented to Toyota GR engineering teams.",
      category: "Machine Learning",
      icon: <Cpu className="w-5 h-5 text-secondary" />,
      status: "🏁 Toyota GR Presentation"
    },
    {
      name: "ETHKL24",
      year: "2024",
      achievement: "Bounties + Side Prize",
      description: "Layer 2 scaling application using Scroll, ICP, and Worldcoin technology.",
      category: "Web3",
      icon: <Trophy className="w-5 h-5 text-accent" />,
      status: "💎 Bounty Winner"
    },
    {
      name: "Solana Wormhole",
      year: "2024",
      achievement: "Cross-chain Liquidity",
      description: "Cross-chain asset transfer tool leveraging Wormhole protocol for instant liquidity.",
      category: "Cross-chain",
      icon: <Zap className="w-5 h-5 text-primary" />,
      status: "🌐 Interop Award"
    },
    {
      name: "Sui Overflow",
      year: "2025",
      achievement: "SuiAuditWarp",
      description: "Advanced smart contract auditing tools specifically for Move-based developers.",
      category: "Security",
      icon: <Shield className="w-5 h-5 text-white" />,
      status: "🛡️ Security Award"
    },
    {
      name: "IOTA Malaysia",
      year: "2025",
      achievement: "dSOC Winner",
      description: "Decentralized Security Operations Center for enterprise blockchain management.",
      category: "Infrastructure",
      icon: <Trophy className="w-5 h-5 text-secondary" />,
      status: "🏆 Infrastructure Winner"
    }
  ];

  const stats = [
    { label: "Hackathons Entered", value: "15+", icon: Award },
    { label: "Active Years", value: "3.5Y", icon: Calendar },
    { label: "Major Wins", value: "10+", icon: Trophy },
  ];

  return (
    <section id="hackathons" className="py-24 px-6 relative overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="flex flex-col mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/60 mb-5">Hackathons</p>
          <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-4">
             Hackathon <span style={{ background: "linear-gradient(135deg, hsl(252,100%,70%) 0%, hsl(282,90%,72%) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Victories.</span>
          </h2>
          <p className="text-foreground/60 text-base max-w-xl leading-relaxed">
             A track record of build-focused hackathons, building prototype engines and shipping under time pressure.
          </p>
        </div>
 
        {/* Global Record Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-card p-8 group bento-inner-shadow rounded-2xl hover:border-black/[0.12] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-6">
                 <div className="w-10 h-10 bg-black/[0.03] border border-black/[0.08] rounded-xl flex items-center justify-center">
                    <stat.icon className="h-4.5 w-4.5 text-primary group-hover:scale-105 transition-transform" />
                 </div>
              </div>
              <div className="text-4xl font-bold text-foreground mb-1 tracking-tight flex items-end gap-1.5" style={{ fontFamily: "'Outfit', sans-serif" }}>
                 {stat.value}
              </div>
              <div className="text-[11px] font-semibold text-foreground/50 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
 
        {/* The Win Registry */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {hackathons.map((hack, index) => (
            <motion.div
              key={hack.name}
              className="glass-card p-8 group relative rounded-2xl bento-inner-shadow overflow-hidden flex flex-col h-full border-black/[0.05] hover:border-black/[0.12] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start justify-between mb-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-black/[0.03] border border-black/[0.08] rounded-xl flex items-center justify-center">
                    {hack.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                      {hack.name}
                    </h3>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-foreground/45">{hack.category}</p>
                  </div>
                </div>
                <span className="text-xs text-foreground/40 font-medium">{hack.year}</span>
              </div>
              
              <div className="mb-6">
                <span className="px-3 py-1 rounded-lg border border-black/[0.08] text-[10px] font-semibold text-foreground/70 bg-black/[0.02]">
                  {hack.status}
                </span>
              </div>
              
              <h4 className="text-sm font-semibold text-foreground mb-2 tracking-tight">{hack.achievement}</h4>
              <p className="text-xs text-foreground/65 leading-relaxed font-normal flex-grow line-clamp-3">
                {hack.description}
              </p>
            </motion.div>
          ))}
        </div>
 
        {/* Milestone Terminal */}
        <motion.div
          className="glass-card p-8 bg-gradient-to-br from-primary/[0.02] via-transparent to-transparent rounded-3xl border-black/[0.05] relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3.5 mb-10 px-2">
            <Trophy className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-bold text-foreground tracking-tight">Technical Implementations</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-2">
            <div className="space-y-6">
              <h4 className="text-xs font-semibold text-primary uppercase tracking-wider">Infrastructure & Scaling</h4>
              <ul className="space-y-4">
                {[
                  "ETNPump.fun - Full Bonding Curve Implementation",
                  "CryptoPayRoll - Enterprise BCH Disbursement",
                  "AuditWarp - Multi-Chain Security Guard"
                ].map((item, i) => (
                  <li key={i} className="text-sm text-foreground/75 font-normal flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary/60 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-xs font-semibold text-secondary uppercase tracking-wider">Systems & Research</h4>
              <ul className="space-y-4">
                {[
                  "0-Conf Settlement Optimization Protocol",
                  "Tokenomics Simulation Engine (Monte Carlo)",
                  "Agentic Smart Contract Interoperability"
                ].map((item, i) => (
                  <li key={i} className="text-sm text-foreground/75 font-normal flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-secondary/60 rounded-full" />
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
