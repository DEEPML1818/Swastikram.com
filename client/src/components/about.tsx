import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">About Me</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a 16-year-old developer passionate about building transparent and efficient
                systems that bridge the gap between Web2 and Web3. My journey began at age 6 with
                my first computer, and by 10, I was already writing my first lines of code.
              </p>

              <p>
                Six years later, I've mastered multiple programming paradigms - from blockchain
                languages like Solidity, Rust, Golang, and Vyper for building secure DApps, to
                traditional languages like Python, JavaScript, TypeScript, Ruby, PHP, C, and C++
                for full-stack development.
              </p>

              <p>
                What sets me apart is my ability to see the bigger picture. I don't just code - I
                architect solutions that solve real-world problems. Whether it's building
                cross-chain liquidity aggregators, AI-powered DeFi platforms, or maritime
                navigation systems, I thrive on creating applications that make a difference.
              </p>

              <p>
                My expertise spans the entire blockchain ecosystem - from EVM and Layer 2 solutions
                to emerging platforms like Solana and Sui. I'm particularly passionate about the
                intersection of AI and blockchain, building systems that are not just decentralized,
                but intelligent.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <motion.div
                className="flex items-center space-x-3 text-primary bg-primary/10 rounded-lg p-4"
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-2xl">💻</span>
                <div>
                  <div className="font-semibold">First Computer</div>
                  <div className="text-sm text-muted-foreground">Age 6 - The journey begins</div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3 text-primary bg-primary/10 rounded-lg p-4"
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-2xl">🚀</span>
                <div>
                  <div className="font-semibold">Started Coding</div>
                  <div className="text-sm text-muted-foreground">Age 10 - Building the future</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Abstract blockchain technology visualization"
              className="rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
