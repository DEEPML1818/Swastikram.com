import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const initialTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-xl bg-foreground/[0.03] border border-foreground/10" />
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="w-9 h-9 rounded-xl bg-foreground/[0.03] hover:bg-foreground/[0.06] border border-foreground/10 hover:border-foreground/20 flex items-center justify-center text-foreground/70 hover:text-foreground transition-all duration-300 relative overflow-hidden focus:outline-none"
      whileTap={{ scale: 0.92 }}
      whileHover={{ scale: 1.05 }}
      aria-label="Toggle Theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'dark' ? (
          <motion.div
            key="sun"
            initial={{ y: 15, opacity: 0, rotate: -40 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -15, opacity: 0, rotate: 40 }}
            transition={{ duration: 0.18, ease: "easeInOut" }}
            className="flex items-center justify-center"
          >
            <Sun className="w-[17px] h-[17px] text-amber-400 fill-amber-400/10" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ y: 15, opacity: 0, rotate: 40 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -15, opacity: 0, rotate: -40 }}
            transition={{ duration: 0.18, ease: "easeInOut" }}
            className="flex items-center justify-center"
          >
            <Moon className="w-[17px] h-[17px] text-primary" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
