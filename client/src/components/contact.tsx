import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Link2 } from "lucide-react";

export default function Contact() {
  const socialLinks = [
    {
      name: "Email",
      href: "mailto:deepml1818@gmail.com",
      icon: Mail,
      color: "text-blue-400",
    },
    {
      name: "GitHub",
      href: "https://github.com/DEEPML1818",
      icon: Github,
      color: "text-gray-400",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/mr-landlord-0b7376267/",
      icon: Linkedin,
      color: "text-blue-600",
    },
    {
      name: "Twitter",
      href: "https://x.com/Swastik_Ram",
      icon: Twitter,
      color: "text-blue-400",
    },
    {
      name: "Linktree",
      href: "https://www.swastikram.com/Linktree/index.html",
      icon: Link2,
      color: "text-green-400",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          className="px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-6">
            Let's Build Something Together
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ready to create the next big thing in Web3? I'm always excited to collaborate on
            innovative blockchain projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 mb-12 px-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 sm:p-6 bg-card rounded-xl border border-border transition-all duration-300 hover:border-primary group touch-manipulation"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true }}
              data-testid={`link-social-${link.name.toLowerCase()}`}
            >
              <motion.div
                className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-2 sm:mb-3 group-hover:bg-primary/30 transition-colors"
                whileHover={{ rotate: 5 }}
              >
                <link.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </motion.div>
              <span className="font-medium text-sm sm:text-base text-muted-foreground group-hover:text-primary transition-colors">
                {link.name}
              </span>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="bg-card/50 rounded-2xl p-6 sm:p-8 border border-border mx-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-base sm:text-lg text-muted-foreground mb-4"
            whileHover={{ scale: 1.02 }}
          >
            "The future belongs to those who build it. Let's create something extraordinary
            together."
          </motion.p>
          <p className="text-primary font-medium">- Swastik Ram</p>
        </motion.div>
      </div>
    </section>
  );
}
