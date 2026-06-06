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
import { copy, type LanguageMode } from "./data/i18n";

export type ThemeMode = "dark" | "light";

function PortfolioPage() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");

    return savedTheme === "light" ? "light" : "dark";
  });
  const [language, setLanguage] = useState<LanguageMode>(() => {
    const savedLanguage = window.localStorage.getItem("portfolio-language");

    return savedLanguage === "th" ? "th" : "en";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("portfolio-language", language);
  }, [language]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === "en" ? "th" : "en"));
  };

  const text = copy[language];

  return (
    <div className={`theme-${theme} min-h-screen overflow-hidden bg-slate-950 text-slate-200`}>
      <div className="site-backdrop pointer-events-none fixed inset-0 -z-10" />
      <Navigation
        language={language}
        theme={theme}
        onToggleLanguage={toggleLanguage}
        onToggleTheme={toggleTheme}
      />
      <main>
        <Hero language={language} />
        <About language={language} />
        <Experience language={language} />
        <Projects language={language} />
        <Workflow language={language} />
        <Skills language={language} />
        <Education language={language} />
        <Contact language={language} />
      </main>
      <footer className="border-t border-slate-800 px-5 py-8 text-center text-sm text-slate-500">
        &copy; 2026 Apirat Mathasathien. {text.footer}
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
