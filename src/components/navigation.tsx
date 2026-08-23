import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

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
    { href: "#media", label: "Press" },
    { href: "#articles", label: "Articles" },
    { href: "#skills", label: "Skills" },
    { href: "#hackathons", label: "Hackathons" },
    { href: "#projects", label: "Projects" },
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
      className="fixed top-0 left-0 w-full z-50 py-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
          isScrolled
            ? "bg-background/80 dark:bg-card/75 backdrop-blur-2xl border border-foreground/5 dark:border-white/[0.04] shadow-[0_8px_32px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-foreground font-black text-lg group-hover:text-foreground/75 transition-colors tracking-tight">
              Swastik <span className="text-primary italic">Ram.</span>
            </span>
          </motion.button>

          <div className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <motion.button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="px-3.5 py-2 rounded-xl text-sm font-medium text-foreground/60 hover:text-foreground hover:bg-foreground/[0.04] transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                data-testid={`nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </motion.button>
            ))}
            <div className="h-4 w-px bg-foreground/10 mx-2.5" />
            <ThemeToggle />
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground/75 hover:text-foreground p-2 bg-foreground/[0.03] hover:bg-foreground/[0.06] rounded-xl border border-foreground/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="mobile-menu-button"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mx-6 mt-2 p-3 space-y-1 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-3xl rounded-2xl border border-black/[0.08] dark:border-white/[0.05] shadow-2xl">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-4 py-3 text-sm font-medium text-foreground/65 hover:text-foreground hover:bg-foreground/[0.04] rounded-xl transition-all duration-200"
                  data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
