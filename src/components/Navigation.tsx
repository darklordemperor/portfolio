import { Code2, Languages, Moon, Sun } from "lucide-react";
import type { ThemeMode } from "../App";
import { copy, type LanguageMode } from "../data/i18n";
import { profile } from "../data/resume";
import { scrollToSection } from "../utils/scroll";

const links = [
  ["about", "about"],
  ["experience", "experience"],
  ["projects", "projects"],
  ["workflow", "workflow"],
  ["skills", "skills"],
  ["contact", "contact"],
] as const;

type NavigationProps = {
  language: LanguageMode;
  theme: ThemeMode;
  onToggleLanguage: () => void;
  onToggleTheme: () => void;
};

export function Navigation({
  language,
  theme,
  onToggleLanguage,
  onToggleTheme,
}: NavigationProps) {
  const ThemeIcon = theme === "dark" ? Sun : Moon;
  const text = copy[language];
  const nextThemeLabel =
    theme === "dark" ? text.nav.switchLight : text.nav.switchDark;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <button
          type="button"
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-3 text-white"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-sky-400 text-slate-950">
            <Code2 className="h-5 w-5" />
          </span>
          <span className="hidden font-semibold sm:block">{profile.name}</span>
          <span className="font-semibold sm:hidden">AM</span>
        </button>

        <div className="hidden items-center gap-5 md:flex">
          {links.map(([labelKey, id]) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollToSection(id)}
              className="text-sm font-medium text-slate-300 hover:text-sky-200"
            >
              {text.nav[labelKey]}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleLanguage}
            aria-label={text.nav.language}
            title={text.nav.language}
            className="inline-flex h-9 items-center justify-center gap-1 rounded-md border border-sky-400/40 px-2 text-xs font-bold uppercase text-sky-200 transition hover:bg-sky-400/10"
          >
            <Languages className="h-4 w-4" />
            {language === "en" ? "TH" : "EN"}
          </button>
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={nextThemeLabel}
            title={nextThemeLabel}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-sky-400/40 text-sky-200 transition hover:bg-sky-400/10"
          >
            <ThemeIcon className="h-5 w-5" />
          </button>
          <a
            href={`mailto:${profile.email}`}
            className="hidden rounded-md border border-sky-400/40 px-3 py-2 text-sm font-semibold text-sky-200 hover:bg-sky-400/10 sm:inline-flex"
          >
            {text.nav.contact}
          </a>
        </div>
      </nav>
    </header>
  );
}
