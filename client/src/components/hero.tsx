import { motion } from "framer-motion";
import { ArrowDown, ChevronRight } from "lucide-react";

export default function Hero() {
  const handleExploreClick = () => {
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-7xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block">Swastik</span>
            <span className="block gradient-text">Ram</span>
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="typing-animation">
              From first computer at 6 to blockchain architect at 16
            </p>
            <p className="mt-4 text-lg opacity-80">
              Building decentralized solutions that bridge AI, Web3, and real-world impact ✨
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <motion.button
              onClick={handleExploreClick}
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium transition-all duration-300"
              whileHover={{ scale: 1.05, backgroundColor: "hsl(158, 64%, 48%)" }}
              whileTap={{ scale: 0.95 }}
              data-testid="button-explore-work"
            >
              Explore My Work
              <ChevronRight className="ml-2 h-5 w-5" />
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="h-6 w-6 text-primary" />
        </motion.div>
      </div>
    </section>
  );
}
