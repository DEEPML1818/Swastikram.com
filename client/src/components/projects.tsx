import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "ETNPump.fun",
      description:
        "Next-generation liquidity and memecoin pump environment for Electroneum blockchain. Features sophisticated bonding curves, factory-based token deployment, and innovative liquidity management with enhanced security measures.",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      link: "https://github.com/DEEPML1818/ETNPump.fun",
      alt: "Cryptocurrency trading platform with advanced charts and data",
      tech: "Solidity • Electroneum • Bonding Curves • DeFi",
      status: "🚀 Live & Deployed",
      category: "DeFi",
    },
    {
      title: "SuiSend",
      description:
        "Offline-first NFC crypto wallet for Android and iOS. Store Sui blockchain keypairs on NTAG215 NFC cards, enabling secure offline transaction signing with deferred blockchain syncing. Think 'Touch 'n Go' meets Web3.",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      link: "https://github.com/DEEPML1818/SuiSend",
      alt: "NFC technology and mobile payment interface",
      tech: "React Native • Sui • NFC • Move • Wormhole",
      status: "📱 Mobile App",
      category: "Wallet",
    },
    {
      title: "AlgoTrader",
      description:
        "Advanced algorithmic trading platform with modular architecture, robust risk management, and extensible plugin ecosystem. Features backtesting, deployment monitoring, and automated strategy execution.",
      image:
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      link: "https://github.com/DEEPML1818/AlgoTrader",
      alt: "Algorithmic trading dashboard with real-time data and charts",
      tech: "TypeScript • React • Node.js • Trading APIs",
      status: "🤖 AI Trading",
      category: "Trading",
    },
    {
      title: "Ai-vs-Ai",
      description:
        "Real-world Python simulation pitting two LLMs in red-team vs blue-team cybersecurity warfare. Demonstrates adversarial AI interactions, prompt injection attacks, and defensive filtering mechanisms.",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      link: "https://github.com/DEEPML1818/AI-vs-AI",
      alt: "AI warfare simulation with neural networks battling",
      tech: "Python • Gemini 2.5 Flash • Cybersecurity • LLMs",
      status: "🧠 AI Research",
      category: "AI Security",
    },
    {
      title: "dSOC",
      description:
        "Decentralized Security Operations Center built on IOTA and EVM blockchains. Provides immutable incident management, role-based access for security analysts, and automated reward distribution for security operations.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      link: "https://github.com/DEEPML1818/Decentralized-SOC",
      alt: "Cybersecurity operations center with monitoring systems",
      tech: "IOTA • Solidity • Security • Incident Management",
      status: "🏆 Hackathon Winner",
      category: "Security",
    },
    {
      title: "DeFiSyNc",
      description:
        "Cross-chain liquidity aggregator powered by machine learning algorithms that optimize slippage, reduce transaction costs, and maximize yield across multiple blockchain networks with advanced routing.",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      link: "https://github.com/DEEPML1818/Cross-chain-Liquidity-Pool-Aggregator-with-AI-Optimization",
      alt: "Cross-chain DeFi protocol with multiple blockchain connections",
      tech: "Solidity • Python ML • Wormhole • Cross-chain",
      status: "🌉 Cross-chain",
      category: "DeFi",
    },
    {
      title: "NFTInu",
      description:
        "Revolutionary NFT rental platform democratizing access to virtual real estate, gaming items, and digital art through flexible rental models and transparent blockchain transactions.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      link: "https://github.com/DEEPML1818/NFTInu/tree/master",
      alt: "Modern developer workspace with multiple monitors showing code",
      tech: "Solidity • React • IPFS",
      status: "🎨 NFT Platform",
      category: "NFT",
    },
    {
      title: "Cyberport",
      description:
        "Next-generation maritime navigation platform combining real-time weather data, AI-powered route optimization, and comprehensive news feeds to ensure safe and efficient ocean travel.",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      link: "https://cyberport.digital/",
      alt: "Cybersecurity visualization with network nodes and connections",
      tech: "Node.js • AI APIs • Real-time Data",
      status: "🌊 Live Platform",
      category: "Navigation",
    },
    {
      title: "Legal Aid Certification System",
      description:
        "Decentralized platform providing legal assistance to individuals who cannot afford lawyer fees using blockchain verification and automated certification processes.",
      image:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      link: "https://github.com/DEEPML1818/legal-aid-app",
      alt: "Abstract blockchain technology with glowing network connections",
      tech: "Blockchain • Legal Tech • Verification",
      status: "⚖️ Legal Tech",
      category: "Social Impact",
    },
    {
      title: "NexGuard Insurance",
      description:
        "Decentralized insurance platform for DeFi users with AI-powered risk assessment and automated claims processing, providing comprehensive coverage for smart contract risks.",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      link: "https://github.com/DEEPML1818/NexGuard_Insurance",
      alt: "Cybersecurity concept with digital locks and security elements",
      tech: "Solidity • AI Risk Assessment • DeFi",
      status: "🛡️ InsurTech",
      category: "Insurance",
    },
    {
      title: "MetaTasker",
      description:
        "Blockchain-powered platform simplifying on-chain employment and identity management with secure, transparent records and streamlined verification processes.",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      link: "https://github.com/DEEPML1818/Process-Implementation-Design-for-Onchain-Employment-and-Identity-Platform",
      alt: "Abstract blockchain network with interconnected nodes and data flow",
      tech: "Blockchain • Identity • Employment",
      status: "👔 Employment",
      category: "Identity",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4">Featured Projects</h2>
          <p className="text-lg sm:text-xl text-muted-foreground">Building the future of decentralized applications</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-card rounded-xl overflow-hidden shadow-lg border border-border group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 left-3">
                  <span className="text-xs bg-primary/90 text-primary-foreground px-2 py-1 rounded-full font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="text-xs bg-secondary/90 text-secondary-foreground px-2 py-1 rounded-full font-medium">
                    {project.status}
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.split(' • ').map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs text-primary bg-primary/10 rounded px-2 py-1 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm touch-manipulation"
                  whileHover={{ x: 5 }}
                  data-testid={`link-project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  View on GitHub
                  <ExternalLink className="ml-1 h-4 w-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/DEEPML1818"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-lg font-medium transition-all duration-300"
            whileHover={{ scale: 1.05, backgroundColor: "hsl(158, 64%, 52%)", color: "hsl(222, 84%, 5%)" }}
            whileTap={{ scale: 0.95 }}
            data-testid="link-github-all-projects"
          >
            View All Projects on GitHub
            <ExternalLink className="ml-2 h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
