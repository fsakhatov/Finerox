import { useState } from "react";
import Reveal from "./Reveal";

const DEFAULT_ADMIN_PASSWORD = "finerox-admin";
const API_URL =
  import.meta.env.VITE_CONTACTS_API_URL || "https://68e95477f1eeb3f856e3c0a3.mockapi.io/api/v1/contacts";

export default function Contact({ copy, adminOnly = false }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submissions, setSubmissions] = useState([]);
  const [adminAuthenticated, setAdminAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [adminLoading, setAdminLoading] = useState(false);
  const [adminError, setAdminError] = useState(null);

  const normalizeSubmissions = (data) => {
    if (!Array.isArray(data)) return [];
    const parseTime = (entry) => {
      const source = entry?.submittedAt || entry?.createdAt || entry?.updatedAt || entry?.created_at;
      const time = new Date(source ?? 0).getTime();
      return Number.isNaN(time) ? 0 : time;
    };
    return data
      .slice()
      .sort((a, b) => parseTime(b) - parseTime(a));
  };

  const fetchSubmissions = async () => {
    if (!API_URL) {
      setAdminError(copy.admin.fetchError);
      return;
    }

    setAdminLoading(true);
    setAdminError(null);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Failed to fetch submissions");
      }
      const data = await response.json();
      setSubmissions(normalizeSubmissions(data));
    } catch (error) {
      console.error("[Contact] Failed to fetch submissions", error);
      setAdminError(copy.admin.fetchError);
    } finally {
      setAdminLoading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitError(null);
    setSubmitted(false);
    const formData = new FormData(event.target);
    const name = formData.get("name")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !phone || !message) {
      return;
    }

    const payload = {
      name,
      phone,
      message,
      submittedAt: new Date().toISOString(),
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      const savedSubmission = await response.json();
      const enrichedSubmission = {
        ...savedSubmission,
        submittedAt: savedSubmission.submittedAt ?? payload.submittedAt,
      };

      setSubmissions((previous) => {
        const next = previous.filter((entry) => entry.id !== enrichedSubmission.id);
        next.unshift(enrichedSubmission);
        return normalizeSubmissions(next);
      });

      setSubmitted(true);
      event.target.reset();
      setTimeout(() => setSubmitted(false), 3200);
    } catch (error) {
      console.error("[Contact] Failed to submit form", error);
      setSubmitted(false);
      setSubmitError(copy.form.error);
    }
  };

  const handleAdminLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const password = formData.get("adminPassword")?.toString().trim() ?? "";

    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD || DEFAULT_ADMIN_PASSWORD;

    if (password === adminPassword) {
      setAdminAuthenticated(true);
      setLoginError(false);
      event.target.reset();
      await fetchSubmissions();
      return;
    }

    setLoginError(true);
  };

  const handleAdminLogout = () => {
    setAdminAuthenticated(false);
    setAdminLoading(false);
    setAdminError(null);
  };

  const formatTimestamp = (timestamp) => {
    try {
      const date = new Date(timestamp);
      if (Number.isNaN(date.getTime())) return timestamp;
      return date.toLocaleString(undefined, {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
    } catch {
      return timestamp;
    }
  };

  const containerClass = adminOnly
    ? "relative mx-auto max-w-3xl"
    : "relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start";

  const adminPanelClass = `relative overflow-hidden rounded-[36px] border border-zinc-200 bg-white p-8 shadow-[0_40px_90px_-30px_rgba(15,23,42,0.1)] backdrop-blur-2xl dark:border-white/10 dark:bg-black/70 dark:shadow-[0_40px_90px_-30px_rgba(15,23,42,0.85)] ${
    adminOnly ? "mx-auto" : ""
  }`;

  const renderAdminPanel = () => (
    <Reveal delay={adminOnly ? 0 : 180} className={adminPanelClass}>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 via-transparent to-brand-700/10 dark:from-brand-500/15 dark:via-transparent dark:to-brand-700/15" aria-hidden />
      <div className="relative grid gap-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{copy.admin.title}</h3>
          {adminAuthenticated && (
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={fetchSubmissions}
                className="rounded-full border border-brand-500/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-600 transition hover:border-brand-500 hover:bg-brand-500/10 dark:border-brand-400/50 dark:text-brand-200"
              >
                {copy.admin.refresh}
              </button>
              <button
                type="button"
                onClick={handleAdminLogout}
                className="rounded-full border border-brand-500/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-600 transition hover:border-brand-500 hover:bg-brand-500/10 dark:border-brand-400/50 dark:text-brand-200"
              >
                {copy.admin.logout}
              </button>
            </div>
          )}
        </div>

        {adminAuthenticated ? (
          adminLoading ? (
            <p className="text-sm text-zinc-600 dark:text-white/70">{copy.admin.loading}</p>
          ) : adminError ? (
            <p className="rounded-3xl border border-red-500/40 bg-red-500/10 p-6 text-sm font-medium text-red-600 dark:border-red-400/40 dark:bg-red-500/10 dark:text-red-200">
              {adminError}
            </p>
          ) : submissions.length === 0 ? (
            <p className="text-sm text-zinc-600 dark:text-white/70">{copy.admin.empty}</p>
          ) : (
            <ul className="grid gap-4">
              {submissions.map((submission) => (
                <li
                  key={submission.id}
                  className="rounded-3xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600 shadow-sm shadow-zinc-200/60 dark:border-white/10 dark:bg-black/60 dark:text-white/70"
                >
                  <p className="text-xs uppercase tracking-[0.4em] text-zinc-400 dark:text-white/50">
                    {copy.admin.submittedAt}:{" "}
                    {formatTimestamp(submission.submittedAt || submission.createdAt || submission.updatedAt)}
                  </p>
                  <p className="mt-3 text-base font-semibold text-zinc-900 dark:text-white">
                    {copy.form.name}: {submission.name}
                  </p>
                  <p className="mt-1 text-base font-semibold text-zinc-900 dark:text-white">
                    {copy.form.phone}: {submission.phone}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-white/70">
                    {copy.form.message}: {submission.message}
                  </p>
                </li>
              ))}
            </ul>
          )
        ) : (
          <form onSubmit={handleAdminLogin} className="grid gap-4">
            <div>
              <label
                className="text-xs uppercase tracking-[0.4em] text-zinc-400 dark:text-white/50"
                htmlFor="adminPassword"
              >
                {copy.admin.passwordLabel}
              </label>
              <input
                id="adminPassword"
                name="adminPassword"
                type="password"
                required
                className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/40 dark:border-white/10 dark:bg-black/40 dark:text-white"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-500 via-brand-600 to-brand-800 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.03]"
            >
              {copy.admin.login}
            </button>
            {loginError && (
              <p className="rounded-2xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-600 dark:border-red-400/40 dark:text-red-200">
                {copy.admin.error}
              </p>
            )}
          </form>
        )}
        {!adminAuthenticated && (
          <p className="text-xs uppercase tracking-[0.4em] text-zinc-400 dark:text-white/50">
            {copy.admin.hint}
          </p>
        )}
      </div>
    </Reveal>
  );

  return (
    <section
      id="contact"
      data-surface="section"
      className={`relative overflow-hidden bg-white px-4 pb-32 pt-28 text-zinc-900 transition-colors duration-500 dark:bg-[#01030a] dark:text-white ${
        adminOnly ? "min-h-screen flex items-center justify-center" : ""
      }`}
    >
      <div className="absolute inset-0 bg-grid-sleek opacity-[0.03] dark:opacity-20" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent opacity-70 dark:via-brand-500/30" aria-hidden />
      <div className="absolute -bottom-40 right-[12%] hidden h-96 w-96 rounded-full bg-brand-500/20 blur-[160px] dark:block" aria-hidden />

      <div className={containerClass}>
        {!adminOnly ? (
          <>
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

            <Reveal
              delay={120}
              className="relative overflow-hidden rounded-[36px] border border-zinc-200 bg-white p-8 shadow-[0_40px_90px_-30px_rgba(15,23,42,0.1)] backdrop-blur-2xl dark:border-white/10 dark:bg-black/70 dark:shadow-[0_40px_90px_-30px_rgba(15,23,42,0.85)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 via-transparent to-brand-700/10 dark:from-brand-500/15 dark:via-transparent dark:to-brand-700/15" aria-hidden />
              <form onSubmit={handleSubmit} className="relative grid gap-5">
                <div>
                  <label className="text-xs uppercase tracking-[0.4em] text-zinc-400 dark:text-white/50" htmlFor="name">
                    {copy.form.name}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    inputMode="text"
                    required
                    onInput={(event) => {
                      event.target.value = event.target.value.replace(/[^A-Za-z\u00C0-\u024F\s'-]/g, "");
                    }}
                    className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/40 dark:border-white/10 dark:bg-black/40 dark:text-white"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.4em] text-zinc-400 dark:text-white/50" htmlFor="phone">
                    {copy.form.phone}
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    required
                    onInput={(event) => {
                      event.target.value = event.target.value.replace(/[^0-9+\-\s\(\)]/g, "");
                    }}
                    className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/40 dark:border-white/10 dark:bg-black/40 dark:text-white"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.4em] text-zinc-400 dark:text-white/50" htmlFor="message">
                    {copy.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
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
                {submitError && (
                  <p className="rounded-2xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-600 dark:border-red-400/40 dark:text-red-200">
                    {submitError}
                  </p>
                )}
                {submitted && (
                  <p className="rounded-2xl border border-brand-500/40 bg-brand-500/10 px-4 py-3 text-sm font-medium text-brand-600 dark:border-brand-500/40 dark:text-brand-200">
                    {copy.form.success}
                  </p>
                )}
              </form>
            </Reveal>
          </>
        ) : (
          renderAdminPanel()
        )}
      </div>
    </section>
  );
}
