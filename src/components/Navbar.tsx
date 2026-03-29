import { Link, useLocation } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const scrollTo = (id: string) => {
    if (!isHome) return;
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button
            onClick={() => scrollTo("hero")}
            className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollTo("premise")}
            className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            The Premise
          </button>
          <button
            onClick={() => scrollTo("team")}
            className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            The Team
          </button>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/perspectives"
            className="px-5 py-2 rounded-full bg-glow text-primary-foreground text-sm font-semibold cta-glow hover:scale-105 transition-transform dark:text-primary"
          >
            Shifting Narratives
          </Link>
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-foreground" />
            ) : (
              <Moon className="w-4 h-4 text-foreground" />
            )}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
