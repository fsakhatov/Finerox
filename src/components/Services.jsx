import Reveal from "./Reveal";

export default function Services({ copy }) {
  return (
    <section
      id="services"
      data-surface="section"
      className="relative overflow-hidden bg-white px-4 py-28 text-zinc-900 transition-colors duration-500 sm:py-32 dark:bg-[#020615] dark:text-white"
    >
      <div className="absolute inset-0 bg-grid-sleek opacity-[0.03] dark:opacity-15" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent opacity-70 dark:via-brand-500/50" aria-hidden />
      <div className="absolute -top-32 left-[20%] hidden h-80 w-80 rounded-full bg-brand-500/20 blur-[150px] dark:block" aria-hidden />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.4em] text-brand-600 dark:text-brand-200/80">{copy.headline}</span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="text-3xl font-display font-semibold sm:text-4xl">{copy.title}</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-3 text-lg text-zinc-600 dark:text-white/70">{copy.intro}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {copy.items.map((service, index) => (
            <Reveal
              key={service.title}
              delay={index * 80}
              className="group relative overflow-hidden rounded-[32px] border border-zinc-200 bg-white p-8 shadow-sm shadow-zinc-200/60 transition hover:shadow-lg dark:border-white/10 dark:bg-white/[0.06] dark:hover:shadow-glow"
            >
              <span className="absolute inset-0 bg-gradient-to-br from-brand-500/15 via-transparent to-brand-700/10 opacity-0 transition duration-700 group-hover:opacity-100" aria-hidden />
              <div className="relative flex h-full flex-col gap-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">{service.title}</h3>
                  <span className="text-xs uppercase tracking-[0.4em] text-brand-500 dark:text-brand-200/80">{service.code}</span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-white/60">{service.description}</p>
                <ul className="flex flex-wrap gap-2 text-xs uppercase tracking-wide text-zinc-500 dark:text-white/40">
                  {service.points.map((point) => (
                    <li key={point} className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 dark:border-white/10 dark:bg-black/40">
                      {point}
                    </li>
                  ))}
                </ul>
                {service.metric && (
                  <div className="mt-auto rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-600 dark:border-white/10 dark:bg-black/60 dark:text-white/60">
                    {service.metric}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {copy.accents && (
          <Reveal delay={240} className="mt-14 grid gap-6 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm shadow-zinc-200/60 sm:grid-cols-2 dark:border-white/10 dark:bg-black/60">
            {copy.accents.map((item) => (
              <div key={item.title} className="rounded-3xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600 shadow-sm shadow-zinc-200/60 dark:border-white/10 dark:bg-white/5 dark:text-white/60">
                <p className="text-lg font-semibold text-zinc-900 dark:text-white">{item.title}</p>
                <p className="mt-3">{item.description}</p>
              </div>
            ))}
          </Reveal>
        )}
      </div>
    </section>
  );
}
