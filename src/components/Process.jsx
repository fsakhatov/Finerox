import Reveal from "./Reveal";

export default function Process({ copy }) {
  if (!copy) return null;

  return (
    <section
      data-surface="section"
      className="relative overflow-hidden bg-white px-4 py-28 text-zinc-900 transition-colors duration-500 sm:py-32 dark:bg-[#02030e] dark:text-white"
    >
      <div className="absolute inset-0 bg-grid-sleek opacity-[0.03] dark:opacity-20" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent opacity-70 dark:via-brand-500/40" aria-hidden />
      <div className="absolute -top-40 right-[20%] hidden h-80 w-80 rounded-full bg-brand-600/20 blur-[150px] dark:block" aria-hidden />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.4em] text-brand-600 dark:text-brand-200/80">{copy.kicker}</span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="text-3xl font-display font-semibold sm:text-4xl">{copy.title}</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-4 text-lg text-zinc-600 dark:text-white/70">{copy.subtitle}</p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6">
          {copy.steps.map((step, index) => (
            <Reveal
              key={step.title}
              delay={index * 100}
              className="flex flex-col gap-5 rounded-[32px] border border-zinc-200 bg-white px-6 py-6 shadow-sm shadow-zinc-200/50 backdrop-blur-xl transition sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:bg-white/[0.06] dark:shadow-none"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 text-lg font-semibold text-zinc-700 dark:border-white/10 dark:bg-black/60 dark:text-white">
                  {(index + 1).toString().padStart(2, "0")}
                </div>
                <div className="max-w-2xl">
                  <p className="text-xs uppercase tracking-[0.4em] text-zinc-400 dark:text-white/40">{step.phase}</p>
                  <h3 className="mt-2 text-xl font-semibold text-zinc-900 dark:text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-white/60">{step.description}</p>
                </div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-3 text-sm text-zinc-600 dark:border-white/10 dark:bg-black/60 dark:text-white/60">
                {step.duration}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
