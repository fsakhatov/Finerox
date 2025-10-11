import { useEffect, useRef, useState } from "react";
import { languages } from "../i18n/translations";

export default function LanguageToggle({ current, onChange }) {
  const [open, setOpen] = useState(false);
  const popoverRef = useRef(null);

  useEffect(() => {
    const handleClickAway = (event) => {
      if (!popoverRef.current) return;
      if (!popoverRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickAway);
    return () => document.removeEventListener("mousedown", handleClickAway);
  }, []);

  const currentLanguage = languages[current];
  const options = Object.values(languages);

  return (
    <div ref={popoverRef} className="relative z-50">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-sm font-semibold text-zinc-700 shadow-sm transition hover:border-brand-500/60 hover:text-zinc-900 dark:border-white/20 dark:bg-black/70 dark:text-white dark:hover:text-white"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="text-base leading-none" aria-hidden>
          {currentLanguage?.flag}
        </span>
        <span className="hidden sm:inline">{currentLanguage?.label}</span>
        <svg
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : "rotate-0"}`}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 z-50 mt-2 w-[calc(100vw-3rem)] min-w-[10rem] max-w-[16rem] overflow-hidden rounded-2xl border border-zinc-200 bg-white/95 p-1 shadow-xl shadow-black/10 backdrop-blur dark:border-white/10 dark:bg-black/90 md:right-0 md:left-auto md:w-auto md:min-w-[12rem]">
          <ul role="listbox" className="flex flex-col">
            {options.map((lang) => {
              const isActive = current === lang.code;
              return (
                <li key={lang.code}>
                  <button
                    type="button"
                    onClick={() => {
                      onChange(lang.code);
                      setOpen(false);
                    }}
                    className={`flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                      isActive
                        ? "bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-glow"
                        : "text-zinc-600 hover:bg-zinc-100 dark:text-white/70 dark:hover:bg-white/10"
                    }`}
                    role="option"
                    aria-selected={isActive}
                  >
                    <span className="text-base leading-none" aria-hidden>
                      {lang.flag}
                    </span>
                    <span>{lang.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
