import Reveal from "./Reveal";

export default function Hero({ copy }) {
  const card = copy.card ?? {};
  const highlights = copy.highlights ?? {};
  const topHighlight = highlights.top;
  const bottomHighlight = highlights.bottom;

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-white px-4 pt-36 pb-28 text-zinc-900 transition-colors duration-500 sm:pt-44 dark:bg-black dark:text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-500/5 via-transparent to-brand-700/5 dark:from-brand-500/12 dark:via-transparent dark:to-brand-700/12"
        aria-hidden
      />
      <div className="absolute inset-0 bg-grid-sleek opacity-10 dark:opacity-20" aria-hidden />

      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="relative z-10 space-y-10">
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-zinc-200/80 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.5em] text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-white/70">
              {copy.kicker}
            </span>
          </Reveal>
          <Reveal delay={80} className="space-y-6">
            <h1 className="text-4xl font-display font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {copy.title}
            </h1>
            <p className="max-w-xl text-lg text-zinc-600 sm:text-xl dark:text-white/70">{copy.subtitle}</p>
          </Reveal>
          <Reveal delay={140} className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-500 via-brand-600 to-brand-800 px-7 py-3 text-base font-semibold text-white shadow-glow transition hover:scale-[1.03] hover:shadow-glow-lg"
            >
              {copy.ctaPrimary}
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-zinc-200 px-7 py-3 text-base font-semibold text-zinc-700 transition hover:border-brand-500/60 hover:text-zinc-900 dark:border-white/15 dark:text-white/80 dark:hover:text-white"
            >
              {copy.ctaSecondary}
            </a>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-3">
            {copy.stats.map((stat, index) => (
              <Reveal
                key={stat.label}
                delay={(index + 1) * 120}
                className="rounded-3xl border border-zinc-200 bg-white px-5 py-6 text-center shadow-sm shadow-black/10 dark:border-white/15 dark:bg-white/10 dark:shadow-inner dark:shadow-black/40"
              >
                <p className="text-3xl font-semibold text-zinc-900 sm:text-4xl dark:text-white">{stat.value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-white/60">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="relative z-10 flex justify-center">
          <div className="relative w-full max-w-xl">
            <div className="absolute -inset-6 rounded-[40px] border border-zinc-200/60 bg-white/40 blur-xl dark:border-white/5 dark:bg-transparent" aria-hidden />
            <div className="relative overflow-hidden rounded-[40px] border border-zinc-200 bg-white p-6 shadow-[0_40px_80px_-35px_rgba(15,23,42,0.2)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_40px_80px_-35px_rgba(15,23,42,0.85)]">
              <div className="overflow-hidden rounded-3xl border border-zinc-200 dark:border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
                  alt={card.imageAlt ?? "Finerox team collaborating in a high-tech workspace"}
                  className="h-72 w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-6 space-y-4 text-zinc-600 dark:text-white/70">
                {card.badge && (
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-zinc-400 dark:text-white/40">
                    <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    {card.badge}
                  </div>
                )}
                {card.title && <p className="text-xl font-semibold text-zinc-900 dark:text-white">{card.title}</p>}
                {card.description && <p className="text-sm">{card.description}</p>}
                {(card.tech || card.year) && (
                  <div className="flex items-center justify-between text-xs text-zinc-400 dark:text-white/40">
                    <span>{card.tech}</span>
                    <span>{card.year}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {copy.trusted && (
        <div className="mx-auto mt-20 max-w-7xl">
          <Reveal className="flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-zinc-200 bg-white/80 px-6 py-4 text-zinc-500 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-white/50">
            <span className="text-xs uppercase tracking-[0.4em] text-zinc-500 dark:text-white/60">{copy.trusted.title}</span>
            <div className="flex flex-wrap items-center gap-6 text-sm font-medium">
              {copy.trusted.brands.map((brand) => (
                <span key={brand} className="text-zinc-500 dark:text-white/60">
                  {brand}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      )}
    </section>
  );
}
