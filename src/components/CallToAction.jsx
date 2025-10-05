import Reveal from "./Reveal";

export default function CallToAction({ copy }) {
  if (!copy) return null;

  return (
    <section
      data-surface="section"
      className="relative overflow-hidden bg-white px-4 py-24 text-zinc-900 transition-colors duration-500 sm:py-28 dark:bg-[#010208] dark:text-white"
    >
      <div className="absolute inset-0 bg-grid-sleek opacity-[0.02] dark:opacity-10" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent opacity-70 dark:via-brand-500/30" aria-hidden />
      <div className="absolute -top-32 left-[20%] hidden h-72 w-72 rounded-full bg-brand-500/20 blur-[130px] dark:block" aria-hidden />

      <div className="relative mx-auto max-w-5xl">
        <Reveal className="relative overflow-hidden rounded-[40px] border border-zinc-200 bg-gradient-to-br from-brand-500/5 via-brand-500/0 to-white px-8 py-12 text-center shadow-sm shadow-zinc-200/50 backdrop-blur-2xl dark:border-white/10 dark:bg-gradient-to-br dark:from-brand-600/20 dark:via-brand-600/10 dark:to-transparent">
          <div className="absolute inset-0 animate-gradient-drift bg-gradient-to-r from-white/30 via-transparent to-white/20 opacity-50 dark:opacity-70" aria-hidden />
          <div className="relative space-y-6">
            <span className="text-xs uppercase tracking-[0.4em] text-brand-600 dark:text-white/60">{copy.kicker}</span>
            <h2 className="text-3xl font-display font-semibold sm:text-4xl">{copy.title}</h2>
            <p className="text-lg text-zinc-600 dark:text-white/70">{copy.subtitle}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-brand-500/40 transition hover:scale-[1.03]"
              >
                {copy.primary}
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-zinc-200 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:border-brand-500/50 hover:text-brand-600 dark:border-white/20 dark:text-white"
              >
                {copy.secondary}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
