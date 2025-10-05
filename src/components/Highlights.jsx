import Reveal from "./Reveal";

export default function Highlights({ copy }) {
  if (!copy) return null;

  return (
    <section
      data-surface="section"
      className="relative overflow-hidden bg-white px-4 py-28 text-zinc-900 transition-colors duration-500 sm:py-32 dark:bg-[#02030c] dark:text-white"
    >
      <div className="absolute inset-0 bg-grid-sleek opacity-[0.03] dark:opacity-15" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent opacity-70 dark:via-white/20" aria-hidden />
      <div className="absolute -bottom-32 left-[15%] hidden h-96 w-96 rounded-full bg-brand-500/20 blur-[160px] dark:block" aria-hidden />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-6">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.4em] text-brand-600 dark:text-brand-200/80">{copy.kicker}</span>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="text-3xl font-display font-semibold sm:text-4xl">{copy.title}</h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-lg text-zinc-600 dark:text-white/70">{copy.subtitle}</p>
            </Reveal>

            {copy.stats && (
              <Reveal delay={180} className="grid gap-4 sm:grid-cols-3">
                {copy.stats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-zinc-200 bg-white px-5 py-5 text-center shadow-sm shadow-zinc-200/60 dark:border-white/10 dark:bg-white/5">
                    <p className="text-3xl font-semibold text-zinc-900 dark:text-white">{stat.value}</p>
                    <p className="text-xs uppercase tracking-wide text-zinc-500 dark:text-white/50">{stat.label}</p>
                  </div>
                ))}
              </Reveal>
            )}
          </div>

          <div className="grid gap-6">
            {copy.items.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 80}
                className="group relative overflow-hidden rounded-[32px] border border-zinc-200 bg-white p-7 shadow-sm shadow-zinc-200/60 transition dark:border-white/10 dark:bg-white/[0.05]"
              >
                <span className="absolute inset-0 bg-gradient-to-br from-brand-500/15 via-transparent to-brand-700/15 opacity-0 transition duration-700 group-hover:opacity-100" aria-hidden />
                <div className="relative space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm uppercase tracking-[0.4em] text-zinc-400 dark:text-white/40">{item.category}</p>
                    <span className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-500 dark:text-brand-200/80">{item.metric}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">{item.title}</h3>
                  <p className="text-sm text-zinc-600 dark:text-white/60">{item.description}</p>
                  {item.detail && <p className="text-xs text-zinc-400 dark:text-white/40">{item.detail}</p>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
