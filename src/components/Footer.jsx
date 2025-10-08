import Reveal from "./Reveal";
import fineroxPhoto from "../finerox-photo.png";

export default function Footer({ copy }) {
  return (
    <footer
      data-surface="section"
      className="relative overflow-hidden bg-white px-4 pb-12 pt-20 text-zinc-900 transition-colors duration-500 dark:bg-[#01020a] dark:text-white"
    >
      <div className="absolute inset-0 bg-grid-sleek opacity-[0.02] dark:opacity-10" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent opacity-70 dark:via-white/20" aria-hidden />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 rounded-3xl border border-zinc-200 bg-white px-8 py-10 shadow-sm shadow-zinc-200/60 backdrop-blur-xl transition lg:flex-row lg:items-center lg:justify-between dark:border-white/10 dark:bg-black/60">
        <Reveal className="flex items-center gap-4 text-lg font-semibold text-zinc-900 dark:text-white">
          <img
            src={fineroxPhoto}
            alt="Finerox logo"
            className="h-20 w-auto max-w-[240px] flex-shrink-0 rounded-3xl bg-transparent object-contain px-3.5 py-2.5"
          />
        </Reveal>

        <Reveal delay={120} className="flex flex-wrap items-center gap-4 text-sm text-zinc-500 dark:text-white/60">
          {copy.links.map((link) => (
            <a key={link} href="#" className="transition hover:text-brand-600 dark:hover:text-white">
              {link}
            </a>
          ))}
        </Reveal>

        {copy.socials && (
          <Reveal delay={200} className="flex flex-wrap items-center gap-4 text-sm text-zinc-500 dark:text-white/60">
            {copy.socials.map((item) => (
              <a key={item.label} href={item.href} className="rounded-full border border-zinc-200 px-4 py-2 transition hover:border-brand-500/50 hover:text-brand-600 dark:border-white/10 dark:hover:text-white">
                {item.label}
              </a>
            ))}
          </Reveal>
        )}
      </div>

      <Reveal delay={260} className="mx-auto mt-6 max-w-7xl text-sm text-zinc-500 dark:text-white/40">
        {copy.rights}
      </Reveal>
    </footer>
  );
}
