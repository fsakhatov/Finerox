import { useState } from "react";
import Reveal from "./Reveal";

export default function Contact({ copy }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3200);
  };

  return (
    <section
      id="contact"
      data-surface="section"
      className="relative overflow-hidden bg-white px-4 pb-32 pt-28 text-zinc-900 transition-colors duration-500 dark:bg-[#01030a] dark:text-white"
    >
      <div className="absolute inset-0 bg-grid-sleek opacity-[0.03] dark:opacity-20" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent opacity-70 dark:via-brand-500/30" aria-hidden />
      <div className="absolute -bottom-40 right-[12%] hidden h-96 w-96 rounded-full bg-brand-500/20 blur-[160px] dark:block" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="space-y-6">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.4em] text-brand-600 dark:text-brand-200/80">{copy.ribbon}</span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="text-3xl font-display font-semibold sm:text-4xl">{copy.title}</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-lg text-zinc-600 dark:text-white/70">{copy.intro}</p>
          </Reveal>

          <Reveal delay={180} className="grid gap-4 text-sm text-zinc-600 dark:text-white/70">
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-200/60 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs uppercase tracking-[0.4em] text-zinc-400 dark:text-white/50">{copy.labels.office}</p>
              <p className="mt-2 text-base text-zinc-900 dark:text-white">{copy.office}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={`tel:${copy.phone.replace(/[^\d+]/g, "")}`}
                className="rounded-3xl border border-zinc-200 bg-white p-6 text-zinc-900 shadow-sm shadow-zinc-200/60 transition hover:border-brand-500/50 dark:border-white/10 dark:bg-white/5 dark:text-white"
              >
                <p className="text-xs uppercase tracking-[0.4em] text-zinc-400 dark:text-white/50">{copy.labels.phone}</p>
                <p className="mt-2 text-base font-medium">{copy.phone}</p>
              </a>
              <a
                href={`mailto:${copy.email}`}
                className="rounded-3xl border border-zinc-200 bg-white p-6 text-zinc-900 shadow-sm shadow-zinc-200/60 transition hover:border-brand-500/50 dark:border-white/10 dark:bg-white/5 dark:text-white"
              >
                <p className="text-xs uppercase tracking-[0.4em] text-zinc-400 dark:text-white/50">{copy.labels.email}</p>
                <p className="mt-2 text-base font-medium">{copy.email}</p>
              </a>
            </div>
          </Reveal>

          {copy.channels && (
            <Reveal delay={240} className="grid gap-4 sm:grid-cols-2">
              {copy.channels.map((channel) => (
                <div key={channel.title} className="rounded-3xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600 shadow-sm shadow-zinc-200/60 dark:border-white/10 dark:bg-black/60 dark:text-white/70">
                  <p className="text-xs uppercase tracking-[0.4em] text-zinc-400 dark:text-white/50">{channel.title}</p>
                  <p className="mt-2 text-sm">{channel.description}</p>
                  <p className="mt-4 text-sm font-semibold text-zinc-900 dark:text-white">{channel.value}</p>
                </div>
              ))}
            </Reveal>
          )}
        </div>

        <Reveal delay={120} className="relative overflow-hidden rounded-[36px] border border-zinc-200 bg-white p-8 shadow-[0_40px_90px_-30px_rgba(15,23,42,0.1)] backdrop-blur-2xl dark:border-white/10 dark:bg-black/70 dark:shadow-[0_40px_90px_-30px_rgba(15,23,42,0.85)]">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 via-transparent to-brand-700/10 dark:from-brand-500/15 dark:via-transparent dark:to-brand-700/15" aria-hidden />
          <form onSubmit={handleSubmit} className="relative grid gap-5">
            <div>
              <label className="text-xs uppercase tracking-[0.4em] text-zinc-400 dark:text-white/50" htmlFor="name">
                {copy.form.name}
              </label>
              <input
                id="name"
                type="text"
                required
                className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/40 dark:border-white/10 dark:bg-black/40 dark:text-white"
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="text-xs uppercase tracking-[0.4em] text-zinc-400 dark:text-white/50" htmlFor="company">
                  {copy.form.company}
                </label>
                <input
                  id="company"
                  type="text"
                  className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/40 dark:border-white/10 dark:bg-black/40 dark:text-white"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.4em] text-zinc-400 dark:text-white/50" htmlFor="budget">
                  {copy.form.budget}
                </label>
                <select
                  id="budget"
                  className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/40 dark:border-white/10 dark:bg-black/40 dark:text-white"
                >
                  {copy.form.budgetRanges.map((range) => (
                    <option key={range} className="bg-white text-zinc-900 dark:bg-[#01030a] dark:text-white">
                      {range}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.4em] text-zinc-400 dark:text-white/50" htmlFor="email">
                {copy.form.email}
              </label>
              <input
                id="email"
                type="email"
                required
                className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/40 dark:border-white/10 dark:bg-black/40 dark:text-white"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.4em] text-zinc-400 dark:text-white/50" htmlFor="message">
                {copy.form.message}
              </label>
              <textarea
                id="message"
                rows="4"
                required
                className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/40 dark:border-white/10 dark:bg-black/40 dark:text-white"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-500 via-brand-600 to-brand-800 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.03]"
            >
              {copy.form.submit}
            </button>
            {submitted && (
              <p className="rounded-2xl border border-brand-500/40 bg-brand-500/10 px-4 py-3 text-sm font-medium text-brand-600 dark:border-brand-500/40 dark:text-brand-200">
                {copy.form.success}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
