import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", target: "hero" },
  { label: "The Premise", target: "premise" },
  { label: "Shifting Narratives", target: "timeline" },
  { label: "Converging Narrative", target: "convergence" },
  { label: "The Team", target: "team" },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const scrollTo = (id: string) => {
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
        <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollTo(item.target)}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors whitespace-nowrap"
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={toggleTheme}
          className="w-10 h-10 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform flex-shrink-0"
        >
          {theme === "dark" ? (
            <Sun className="w-4 h-4 text-foreground" />
          ) : (
            <Moon className="w-4 h-4 text-foreground" />
          )}
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
