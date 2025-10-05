export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";

  return (
    <button
      onClick={onToggle}
      className="relative flex h-10 w-[4.5rem] items-center rounded-full bg-zinc-900/10 p-1 backdrop-blur-sm ring-1 ring-zinc-900/10 transition hover:ring-brand-500/60 dark:bg-white/10 dark:ring-white/15"
      aria-label="Toggle theme"
    >
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-full bg-white text-zinc-900 shadow transition-transform duration-300 dark:bg-zinc-900 dark:text-white ${
          isDark ? "translate-x-[1.25rem]" : "translate-x-0"
        }`}
      >
        {isDark ? (
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3v2" />
            <path d="M12 19v2" />
            <path d="M5.22 5.22l1.42 1.42" />
            <path d="M17.36 17.36l1.42 1.42" />
            <path d="M3 12h2" />
            <path d="M19 12h2" />
            <path d="M5.22 18.78l1.42-1.42" />
            <path d="M17.36 6.64l1.42-1.42" />
            <circle cx="12" cy="12" r="4" />
          </svg>
        ) : (
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </span>
    </button>
  );
}
