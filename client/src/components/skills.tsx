import { motion } from "framer-motion";

export default function Skills() {
  const techCategories = {
    "Languages": [
      { name: "Solidity", icon: "⛓️" },
      { name: "Rust", icon: "🦀" },
      { name: "Golang", icon: "🐹" },
      { name: "Vyper", icon: "🐍" },
      { name: "Move", icon: "📦" },
      { name: "Python", icon: "🐍" },
      { name: "JavaScript", icon: "🟨" },
      { name: "TypeScript", icon: "🔷" },
      { name: "C++", icon: "⚙️" },
      { name: "Java", icon: "☕" },
      { name: "Swift", icon: "🍎" },
      { name: "PHP", icon: "🐘" },
    ],
    "Blockchain": [
      { name: "Ethereum", icon: "💎" },
      { name: "Solana", icon: "🌟" },
      { name: "Sui", icon: "🔮" },
      { name: "IOTA", icon: "◊" },
      { name: "Polkadot", icon: "🟣" },
      { name: "Cosmos", icon: "🌌" },
      { name: "BSC", icon: "🟡" },
      { name: "Wormhole", icon: "🌉" },
    ],
    "Frontend": [
      { name: "React", icon: "⚛️" },
      { name: "Vue.js", icon: "🟢" },
      { name: "Angular", icon: "🔴" },
      { name: "Next.js", icon: "▲" },
      { name: "Tailwind", icon: "🎨" },
      { name: "Chakra UI", icon: "💫" },
    ],
    "Backend": [
      { name: "Node.js", icon: "🟢" },
      { name: "Express", icon: "🚀" },
      { name: "GraphQL", icon: "🔺" },
      { name: "REST", icon: "🌐" },
    ],
    "AI & ML": [
      { name: "TensorFlow", icon: "🔥" },
      { name: "PyTorch", icon: "🌟" },
      { name: "OpenAI GPT", icon: "🧠" },
      { name: "Scikit-learn", icon: "🤖" },
      { name: "Keras", icon: "🎯" },
      { name: "Pandas", icon: "🐼" },
      { name: "NumPy", icon: "🔢" },
      { name: "Jupyter", icon: "📊" },
      { name: "Hugging Face", icon: "🤗" },
      { name: "LangChain", icon: "⛓️" },
      { name: "Computer Vision", icon: "👁️" },
      { name: "NLP", icon: "💬" },
    ],
    "DevOps": [
      { name: "Docker", icon: "🐳" },
      { name: "Kubernetes", icon: "☸️" },
      { name: "Git", icon: "🔄" },
      { name: "CI/CD", icon: "🔄" },
    ]
  };

  return (
    <section className="py-20 px-6 bg-card/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4">Skills & Technologies</h2>
          <p className="text-lg sm:text-xl text-muted-foreground">Full-stack expertise across Web2, Web3, and AI/ML</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12 px-4">
          {Object.entries(techCategories).map(([category, techs], categoryIndex) => (
            <motion.div
              key={category}
              className="bg-card/50 rounded-2xl p-6 border border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold gradient-text mb-4">{category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {techs.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="text-center group cursor-pointer tech-icon-hover"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:creative-glow"
                    >
                      <span className="text-sm group-hover:creative-text-glow">{tech.icon}</span>
                    </motion.div>
                    <p className="text-[10px] font-medium text-muted-foreground group-hover:text-primary transition-colors">
                      {tech.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold gradient-text mb-6 text-center">Specialized Expertise</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-primary/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <h4 className="font-semibold mb-2">AI + Blockchain</h4>
                <p className="text-sm text-muted-foreground">AI-powered trading bots, tokenomics simulation, smart contract auditing automation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-secondary/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🔗</span>
                </div>
                <h4 className="font-semibold mb-2">DeFi & Tokenomics</h4>
                <p className="text-sm text-muted-foreground">Bonding curves, liquidity pools, memecoin economics, anti-dump mechanisms</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-primary/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h4 className="font-semibold mb-2">Security & Auditing</h4>
                <p className="text-sm text-muted-foreground">Smart contract auditing, dSOC, vulnerability detection automation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-secondary/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🌉</span>
                </div>
                <h4 className="font-semibold mb-2">Cross-Chain</h4>
                <p className="text-sm text-muted-foreground">Wormhole protocol, cross-chain liquidity, multi-chain systems</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI-Powered Innovation
              </span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-card/50 rounded-xl p-6 border border-blue-500/20">
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-xl">📈</span>
                </div>
                <h4 className="font-bold mb-3 text-center">AI Trading Systems</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• ML-powered DeFi trading algorithms</li>
                  <li>• Automated strategy optimization</li>
                  <li>• Risk management and portfolio balancing</li>
                  <li>• Real-time market sentiment analysis</li>
                </ul>
              </div>
              
              <div className="bg-card/50 rounded-xl p-6 border border-purple-500/20">
                <div className="w-12 h-12 mx-auto mb-4 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-xl">🔍</span>
                </div>
                <h4 className="font-bold mb-3 text-center">Smart Contract AI</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Automated vulnerability detection</li>
                  <li>• Code pattern analysis and optimization</li>
                  <li>• Gas usage prediction and optimization</li>
                  <li>• Security audit automation (AuditWarp)</li>
                </ul>
              </div>
              
              <div className="bg-card/50 rounded-xl p-6 border border-pink-500/20">
                <div className="w-12 h-12 mx-auto mb-4 bg-pink-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-xl">💡</span>
                </div>
                <h4 className="font-bold mb-3 text-center">Tokenomics AI</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Economic model simulation and testing</li>
                  <li>• Dynamic pricing algorithms</li>
                  <li>• Liquidity pool optimization</li>
                  <li>• Memecoin economics modeling</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-4">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-blue-400">Featured AI Projects:</span> AI-powered trading bot (Solana AI Hackathon), 
                  AuditWarp AI auditing suite, dSOC security automation, and tokenomics simulation engines
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold gradient-text mb-4">Hackathon Champion 🏆</h3>
            <p className="text-muted-foreground mb-4">
              Winner of 15+ blockchain hackathons including ETHKL24, Solana Wormhole, Base Chain, and many more
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm">
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full">15+ Hackathons</span>
              <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full">Multiple Wins</span>
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full">AI + Blockchain</span>
              <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full">Auditing Tools</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
