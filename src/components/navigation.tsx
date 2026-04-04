import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#journey", label: "Odyssey" },
    { href: "#skills", label: "Arsenal" },
    { href: "#projects", label: "Protocols" },
    { href: "#media", label: "Press" },
    { href: "#hackathons", label: "Trophies" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-lg bg-background/80 border-b border-border/10"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xl font-bold gradient-text">SR</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`transition-colors duration-200 ${
                    index === 0
                      ? "text-foreground hover:text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-testid={`nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-primary focus:outline-none p-2 bg-white/5 rounded-xl border border-white/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="mobile-menu-button"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
        >
          <div className="mx-6 my-4 p-4 space-y-2 bg-background/95 backdrop-blur-3xl rounded-3xl border border-white/10 shadow-2xl">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-6 py-4 text-sm font-black uppercase tracking-widest text-muted-foreground hover:text-white hover:bg-white/5 rounded-2xl transition-all duration-300"
                data-testid={`mobile-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
