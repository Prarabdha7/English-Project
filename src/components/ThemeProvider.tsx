import { createContext, useContext, useEffect, useState, useCallback, useRef } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: (e: React.MouseEvent) => void;
}

const ThemeContext = createContext<ThemeContextType>({ theme: "dark", toggleTheme: () => {} });

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("dark");
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const toggleTheme = useCallback((e: React.MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;
    const newTheme = theme === "dark" ? "light" : "dark";

    // Create overlay
    const overlay = document.createElement("div");
    overlay.style.cssText = `
      position: fixed; inset: 0; z-index: 9999; pointer-events: none;
      background: ${newTheme === "dark" ? "#0A0A0A" : "#F5F5F7"};
      clip-path: circle(0% at ${x}px ${y}px);
      transition: clip-path 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    `;
    document.body.appendChild(overlay);
    overlayRef.current = overlay;

    requestAnimationFrame(() => {
      const maxDist = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );
      const radius = (maxDist / Math.min(window.innerWidth, window.innerHeight)) * 100 + 10;
      overlay.style.clipPath = `circle(${radius}% at ${x}px ${y}px)`;
    });

    setTimeout(() => {
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      setTheme(newTheme);
      setTimeout(() => {
        overlay.remove();
      }, 100);
    }, 500);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
