import Reveal from "./Reveal";

export default function Portfolio({ copy }) {
  const [firstProject, ...otherProjects] = copy.projects;

  return (
    <section
      id="portfolio"
      data-surface="section"
      className="relative overflow-hidden bg-white px-4 py-28 text-zinc-900 transition-colors duration-500 sm:py-32 dark:bg-[#03040d] dark:text-white"
    >
      <div className="absolute inset-0 bg-grid-sleek opacity-[0.03] dark:opacity-20" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent opacity-70 dark:via-brand-500/40" aria-hidden />
      <div className="absolute -top-32 left-[10%] hidden h-96 w-96 rounded-full bg-brand-600/20 blur-[150px] dark:block" aria-hidden />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.4em] text-brand-600 dark:text-brand-200/80">{copy.headline}</span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="text-3xl font-display font-semibold sm:text-4xl">{copy.title}</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-4 text-lg text-zinc-600 dark:text-white/70">{copy.intro}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3 lg:grid-rows-[repeat(2,minmax(0,1fr))]">
          {firstProject && (
            <Reveal className="group relative overflow-hidden rounded-[36px] border border-zinc-200 bg-white shadow-sm shadow-zinc-200/60 transition lg:col-span-2 dark:border-white/10 dark:bg-white/[0.07]">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/15 via-transparent to-brand-700/15 opacity-0 transition duration-700 group-hover:opacity-100" aria-hidden />
              <div className="relative h-full">
                <img
                  src={firstProject.image}
                  alt={firstProject.title}
                  className="h-80 w-full object-cover"
                  loading="lazy"
                />
                <div className="grid gap-4 px-8 py-8">
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.4em] text-brand-500 dark:text-brand-200/80">
                    <span>{firstProject.sector}</span>
                    <span>•</span>
                    <span>{firstProject.timeline}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">{firstProject.title}</h3>
                  <p className="text-sm text-zinc-600 dark:text-white/65">{firstProject.description}</p>
                  {firstProject.results && (
                    <div className="grid gap-3 sm:grid-cols-3">
                      {firstProject.results.map((result) => (
                        <div key={result.label} className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-600 dark:border-white/10 dark:bg-black/50 dark:text-white/60">
                          <p className="text-lg font-semibold text-zinc-900 dark:text-white">{result.value}</p>
                          <p className="text-xs uppercase tracking-wide text-zinc-500 dark:text-white/40">{result.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {firstProject.extra && (
                    <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-xs text-zinc-600 shadow-sm shadow-zinc-200/60 dark:border-white/10 dark:bg-black/40 dark:text-white/60">
                      <p className="text-sm font-semibold text-zinc-900 dark:text-white">{firstProject.extra.heading}</p>
                      <ul className="mt-2 space-y-1">
                        {firstProject.extra.items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-500" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          )}

          <div className="grid gap-8">
            {otherProjects.slice(0, 2).map((project, index) => (
              <Reveal
                key={project.title}
                delay={index * 80}
                className="group overflow-hidden rounded-[32px] border border-zinc-200 bg-white shadow-sm shadow-zinc-200/60 transition dark:border-white/10 dark:bg-white/[0.05]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-52 w-full object-cover"
                  loading="lazy"
                />
                <div className="space-y-3 px-6 py-6">
                  <span className="text-xs uppercase tracking-[0.4em] text-brand-500 dark:text-brand-200/80">{project.sector}</span>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">{project.title}</h3>
                  <p className="text-sm text-zinc-600 dark:text-white/60">{project.description}</p>
                  {project.results && (
                    <div className="flex flex-wrap gap-3 text-xs text-zinc-500 dark:text-white/50">
                      {project.results.map((result) => (
                        <span key={result.label} className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 dark:border-white/10 dark:bg-black/50">
                          <span className="font-semibold text-zinc-900 dark:text-white">{result.value}</span>
                          <span>{result.label}</span>
                        </span>
                      ))}
                    </div>
                  )}
                  {project.extra && (
                    <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-xs text-zinc-600 shadow-sm shadow-zinc-200/60 dark:border-white/10 dark:bg-black/40 dark:text-white/60">
                      <p className="text-sm font-semibold text-zinc-900 dark:text-white">{project.extra.heading}</p>
                      <ul className="mt-2 space-y-1">
                        {project.extra.items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-500" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          {otherProjects[2] && (
            <Reveal className="group overflow-hidden rounded-[36px] border border-zinc-200 bg-white shadow-sm shadow-zinc-200/60 transition lg:col-span-3 dark:border-white/10 dark:bg-white/[0.06]">
              <div className="grid gap-0 md:grid-cols-[1.2fr_0.8fr] md:items-center">
                <img
                  src={otherProjects[2].image}
                  alt={otherProjects[2].title}
                  className="h-72 w-full object-cover"
                  loading="lazy"
                />
                <div className="space-y-4 px-6 py-8 md:px-8">
                  <span className="text-xs uppercase tracking-[0.4em] text-brand-500 dark:text-brand-200/80">{otherProjects[2].sector}</span>
                  <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">{otherProjects[2].title}</h3>
                  <p className="text-sm text-zinc-600 dark:text-white/65">{otherProjects[2].description}</p>
                  {otherProjects[2].results && (
                    <div className="grid gap-3 sm:grid-cols-3">
                      {otherProjects[2].results.map((result) => (
                        <div key={result.label} className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-600 dark:border-white/10 dark:bg-black/50 dark:text-white/60">
                          <p className="text-lg font-semibold text-zinc-900 dark:text-white">{result.value}</p>
                          <p className="text-xs uppercase tracking-wide text-zinc-500 dark:text-white/40">{result.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {otherProjects[2].extra && (
                    <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-xs text-zinc-600 shadow-sm shadow-zinc-200/60 dark:border-white/10 dark:bg-black/40 dark:text-white/60">
                      <p className="text-sm font-semibold text-zinc-900 dark:text-white">{otherProjects[2].extra.heading}</p>
                      <ul className="mt-2 space-y-1">
                        {otherProjects[2].extra.items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-500" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          )}
        </div>

        {copy.cta && (
          <Reveal delay={200} className="mt-14 flex flex-col items-center gap-5 rounded-3xl border border-zinc-200 bg-gradient-to-r from-brand-500/10 via-brand-600/10 to-transparent px-8 py-10 text-center shadow-sm shadow-zinc-200/40 backdrop-blur-xl dark:border-white/10 dark:bg-gradient-to-r dark:from-brand-500/20 dark:via-brand-600/20 dark:to-transparent">
            <p className="text-sm uppercase tracking-[0.4em] text-zinc-500 dark:text-white/60">{copy.cta.label}</p>
            <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">{copy.cta.title}</h3>
            <p className="max-w-2xl text-sm text-zinc-600 dark:text-white/65">{copy.cta.description}</p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-zinc-200 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:border-brand-500/50 hover:text-brand-600 dark:border-white/20 dark:text-white dark:hover:text-white"
            >
              {copy.cta.button}
            </a>
          </Reveal>
        )}
      </div>
    </section>
  );
}
