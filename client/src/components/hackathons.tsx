import { motion } from "framer-motion";
import { Trophy, Calendar, Code2 } from "lucide-react";

export default function Hackathons() {
  const hackathons = [
    {
      name: "ETHKL24",
      year: "2024",
      achievement: "Bounties Won + Side Prize",
      description: "Layer 2 scaling application using Scroll, ICP, and Worldcoin technology",
      category: "Ethereum",
      icon: "💎",
    },
    {
      name: "Base Chain Hackathon",
      year: "2024", 
      achievement: "Side Prize Winner",
      description: "Innovative solution leveraging Base chain for scalability and DApp optimization",
      category: "Base",
      icon: "🔵",
    },
    {
      name: "Solana Wormhole Hackathon",
      year: "2024",
      achievement: "Cross-chain Innovation",
      description: "Cross-chain asset transfer tool leveraging Wormhole protocol",
      category: "Solana",
      icon: "🌟",
    },
    {
      name: "Colosseum Codex: Radar",
      year: "2024",
      achievement: "DeFi Platform Built",
      description: "Decentralized data aggregation platform for real-time DeFi analytics",
      category: "Analytics",
      icon: "📊",
    },
    {
      name: "Solana Sigma Hackathon",
      year: "2024",
      achievement: "High-Performance DEX",
      description: "Created a high-performance DEX optimized for speed and low transaction costs",
      category: "Solana",
      icon: "⚡",
    },
    {
      name: "Solana AI Hackathon",
      year: "2024",
      achievement: "AI Trading Bot",
      description: "AI-powered trading bot using ML algorithms for DeFi strategy optimization",
      category: "AI + Blockchain",
      icon: "🤖",
    },
    {
      name: "Sui Hacker House KL",
      year: "2025",
      achievement: "AuditWarp",
      description: "Suite of smart contract auditing tools specifically for Sui blockchain",
      category: "Security",
      icon: "🔮",
    },
    {
      name: "IOTA Hackathon Malaysia",
      year: "2025",
      achievement: "dSOC Winner",
      description: "Decentralized Security Operations Center for blockchain security management",
      category: "Security",
      icon: "◊",
    },
    {
      name: "Sui Overflow",
      year: "2025",
      achievement: "SuiAuditWarp",
      description: "Advanced smart contract auditing tools for Sui developers",
      category: "Security",
      icon: "🛡️",
    },
  ];

  const stats = [
    { label: "Hackathons Participated", value: "15+", icon: Code2 },
    { label: "Years Active", value: "3+", icon: Calendar },
    { label: "Awards Won", value: "8+", icon: Trophy },
  ];

  return (
    <section id="hackathons" className="py-20 px-6 bg-card/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Hackathon Journey</h2>
          <p className="text-xl text-muted-foreground mb-8">
            15+ competitions, multiple wins, and countless innovations in Web3
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-card/50 rounded-xl p-6 border border-border"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={hackathon.name}
              className="bg-card rounded-xl p-6 border border-border group hover:border-primary/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <span className="text-lg">{hackathon.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                      {hackathon.name}
                    </h3>
                    <p className="text-xs text-primary/70 font-mono">{hackathon.category}</p>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                  {hackathon.year}
                </span>
              </div>
              
              <div className="mb-3">
                <span className="text-sm font-semibold text-secondary bg-secondary/10 px-2 py-1 rounded-full">
                  {hackathon.achievement}
                </span>
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {hackathon.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-8 border border-primary/20">
            <div className="flex items-center justify-center mb-4">
              <Trophy className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold gradient-text">Notable Achievements</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div>
                <h4 className="font-semibold mb-2">🏆 Competition Highlights</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• ETNPump.fun - Next-gen liquidity pump environment</li>
                  <li>• CryptoPayRoll - Multi-chain payroll system</li>
                  <li>• AuditWarp & AuditA - Smart contract auditing suites</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🎯 Specialized Focus</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Cross-chain interoperability solutions</li>
                  <li>• AI-powered DeFi and trading systems</li>
                  <li>• Security and auditing tool development</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}