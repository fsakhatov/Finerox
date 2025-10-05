import Reveal from "./Reveal";

export default function Insights({ copy }) {
  if (!copy) return null;

  return (
    <section
      data-surface="section"
      className="relative overflow-hidden bg-white px-4 py-28 text-zinc-900 transition-colors duration-500 sm:py-32 dark:bg-[#03040e] dark:text-white"
    >
      <div className="absolute inset-0 bg-grid-sleek opacity-[0.03] dark:opacity-15" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent opacity-70 dark:via-white/15" aria-hidden />
      <div className="absolute -bottom-44 right-[18%] hidden h-96 w-96 rounded-full bg-brand-600/20 blur-[160px] dark:block" aria-hidden />

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

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {copy.articles.map((article, index) => (
            <Reveal
              key={article.title}
              delay={index * 80}
              className="group overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-sm shadow-zinc-200/60 transition hover:shadow-lg dark:border-white/10 dark:bg-white/[0.05]"
            >
              <img
                src={article.image}
                alt={article.title}
                className="h-52 w-full object-cover"
                loading="lazy"
              />
              <div className="space-y-4 px-6 py-6">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-zinc-400 dark:text-white/50">
                  <span>{article.category}</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">{article.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-white/60">{article.description}</p>
                <button className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition hover:text-brand-700 dark:text-white dark:hover:text-brand-200">
                  {article.cta}
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
