import Reveal from "./Reveal";

export default function About({ copy, language }) {
  const extraPillarMap = {
    uz: {
      title: "Innovatsion hamkorlik",
      description:
        "Dizayn, muhandislik va growth jamoalarimiz bir ritmda ishlaydi, jarayon davomida shaffoflik va oldindan belgilangan natijalarni kafolatlaymiz.",
    },
    en: {
      title: "Integrated delivery",
      description:
        "Design, engineering, and growth operate in one cadence, giving you visibility and dependable outcomes throughout the engagement.",
    },
    ru: {
      title: "Интегрированная доставка",
      description:
        "Команды дизайна, инженеров и роста работают в одном ритме, обеспечивая прозрачность и предсказуемый результат на каждом этапе.",
    },
  };

  const pillars = [...(copy.pillars || [])];
  const extraPillar = extraPillarMap[language];
  if (extraPillar) {
    pillars.push(extraPillar);
  }

  return (
    <section
      id="about"
      data-surface="section"
      className="relative overflow-hidden bg-white px-4 py-28 text-zinc-900 transition-colors duration-500 sm:py-32 dark:bg-[#050713] dark:text-white"
    >
      <div className="absolute inset-0 bg-grid-sleek opacity-[0.03] dark:opacity-[0.12]" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent opacity-70 dark:via-white/20" aria-hidden />
      <div className="absolute -top-40 right-[5%] hidden h-80 w-80 rounded-full bg-brand-500/20 blur-[160px] dark:block" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="space-y-8">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.4em] text-brand-600 dark:text-brand-200/80">{copy.mission}</span>
          </Reveal>
          <Reveal delay={60} className="space-y-6">
            <h2 className="text-3xl font-display font-semibold sm:text-4xl">{copy.title}</h2>
            <p className="text-lg text-zinc-600 dark:text-white/70">{copy.description}</p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {pillars.map((pillar, index) => (
              <Reveal
                key={pillar.title}
                delay={index * 80}
                className="group rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-200/60 transition hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:hover:shadow-glow"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-500/15 text-sm font-semibold text-brand-600 dark:bg-brand-500/30 dark:text-brand-100">
                  {(index + 1).toString().padStart(2, "0")}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-white">{pillar.title}</h3>
                <p className="mt-3 text-sm text-zinc-600 dark:text-white/60">{pillar.description}</p>
              </Reveal>
            ))}
          </div>

          {copy.metrics && (
            <Reveal delay={280} className="grid gap-4 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-200/60 dark:border-white/10 dark:bg-white/5">
              <div className="grid gap-4 sm:grid-cols-3">
                {copy.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 text-center dark:border-white/10 dark:bg-black/60">
                    <p className="text-3xl font-semibold text-zinc-900 dark:text-white">{metric.value}</p>
                    <p className="text-xs uppercase tracking-wide text-zinc-500 dark:text-white/50">{metric.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-zinc-600 dark:text-white/60">{copy.signature}</p>
            </Reveal>
          )}
        </div>

        <div className="relative grid gap-6">
          <Reveal className="overflow-hidden rounded-[32px] border border-zinc-200 shadow-sm shadow-zinc-200/60 dark:border-white/10">
            <img
              src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=1200&q=80"
              alt="Finerox strategy workshop"
              className="h-72 w-full object-cover"
              loading="lazy"
            />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            <Reveal className="overflow-hidden rounded-[28px] border border-zinc-200 shadow-sm shadow-zinc-200/60 dark:border-white/10">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"
                alt="Engineering excellence at Finerox"
                className="h-48 w-full object-cover"
                loading="lazy"
              />
            </Reveal>
            <Reveal delay={120} className="overflow-hidden rounded-[28px] border border-zinc-200 shadow-sm shadow-zinc-200/60 dark:border-white/10">
              <img
                src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80"
                alt="Design and product reviews"
                className="h-48 w-full object-cover"
                loading="lazy"
              />
            </Reveal>
          </div>

          {copy.timeline && (
            <Reveal delay={200} className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-200/60 dark:border-white/10 dark:bg-white/5">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-zinc-500 dark:text-white/50">{copy.timeline.title}</p>
              <div className="mt-4 space-y-4">
                {copy.timeline.stages.map((stage, index) => (
                  <div key={stage.period} className="flex items-start gap-4">
                    <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 text-sm font-semibold text-zinc-800 dark:border-white/10 dark:bg-black/60 dark:text-white/80">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-zinc-900 dark:text-white">{stage.period}</p>
                      <p className="text-sm text-zinc-600 dark:text-white/60">{stage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
