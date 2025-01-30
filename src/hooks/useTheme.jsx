"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(null);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (!savedTheme) {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const defaultTheme = prefersDarkMode ? "dark" : "light";
      setTheme(defaultTheme);
      document.documentElement.classList.add(defaultTheme);
    }

    setTheme(savedTheme);
    document.documentElement.classList.add(savedTheme);
  }, []);

  // Mientras se carga el tema, evita renderizar hasta que el cliente determine el tema
  if (theme === null) return null;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
