import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Workflow } from "./components/Workflow";

export type ThemeMode = "dark" | "light";

function PortfolioPage() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");

    return savedTheme === "light" ? "light" : "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className={`theme-${theme} min-h-screen overflow-hidden bg-slate-950 text-slate-200`}>
      <div className="site-backdrop pointer-events-none fixed inset-0 -z-10" />
      <Navigation theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Workflow />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-slate-800 px-5 py-8 text-center text-sm text-slate-500">
        © 2026 Apirat Mathasathien. Built with React, Vite, TypeScript, and
        Tailwind CSS.
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioPage />} />
      <Route path="*" element={<PortfolioPage />} />
    </Routes>
  );
}

export default App;
