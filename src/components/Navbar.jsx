import { useState } from "react";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import fineroxPhoto from "../finerox-photo.png";

const anchors = ["#home", "#about", "#services", "#portfolio", "#contact"];

export default function Navbar({ navItems, language, onLanguageChange, theme, onThemeToggle }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50">
      <div className="mx-auto flex w-full max-w-7xl items-center px-4">
        <div className="relative flex w-full items-center justify-between overflow-hidden md:overflow-visible rounded-full border border-zinc-200/70 bg-white/90 px-5 py-3 text-zinc-800 shadow-[0_20px_45px_-25px_rgba(15,23,42,0.16)] backdrop-blur-2xl transition-colors duration-500 dark:border-white/15 dark:bg-black/85 dark:text-white">
          <span
            className="pointer-events-none absolute inset-0 hidden bg-black/30 opacity-70 dark:block"
            aria-hidden
          />

          <a href="#home" className="flex items-center gap-3 text-lg font-semibold tracking-wide">
            <img
              src={fineroxPhoto}
              alt="Finerox logo"
              className="h-16 w-auto max-w-[220px] flex-shrink-0 rounded-2xl bg-transparent object-contain px-2.5 py-1.5"
            />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={anchors[index]}
                className="text-sm font-medium uppercase tracking-wide text-zinc-500 transition hover:text-zinc-900 dark:text-white/70 dark:hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <LanguageToggle current={language} onChange={onLanguageChange} />
            <ThemeToggle theme={theme} onToggle={onThemeToggle} />
          </div>

          <button
            className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-200/70 bg-white/80 text-zinc-700 transition hover:border-brand-500/40 hover:text-zinc-900 dark:border-white/15 dark:bg-white/10 dark:text-white md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mx-auto mt-3 w-full max-w-7xl px-4 md:hidden">
          <div className="rounded-3xl border border-zinc-200/70 bg-white/90 p-6 text-zinc-700 shadow-[0_30px_60px_-18px_rgba(15,23,42,0.2)] backdrop-blur-2xl transition-colors duration-500 dark:border-white/10 dark:bg-black/90 dark:text-white">
            <nav className="flex flex-col gap-5 text-base">
              {navItems.map((item, index) => (
                <a
                  key={item}
                  href={anchors[index]}
                  onClick={() => setIsOpen(false)}
                  className="font-medium uppercase tracking-wide text-zinc-600 transition hover:text-zinc-900 dark:text-white/70 dark:hover:text-white"
                >
                  {item}
                </a>
              ))}
            </nav>
            <div className="mt-6 flex flex-col gap-4">
              <LanguageToggle current={language} onChange={onLanguageChange} />
              <ThemeToggle theme={theme} onToggle={onThemeToggle} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
