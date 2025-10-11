import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Highlights from "./components/Highlights";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Insights from "./components/Insights";
import CallToAction from "./components/CallToAction";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { translations } from "./i18n/translations";
import { useTheme } from "./hooks/useTheme";

function App() {
  const [language, setLanguage] = useState("uz");
  const { theme, toggleTheme } = useTheme();
  const [adminOnly, setAdminOnly] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.location.hash === "#admin";
  });

  useEffect(() => {
    const handleHashChange = () => {
      setAdminOnly(window.location.hash === "#admin");
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const copy = useMemo(() => translations[language], [language]);

  if (adminOnly) {
    return (
      <div className="min-h-screen bg-[#05050c] text-zinc-100 transition-colors duration-500 dark:bg-[#05050c]">
        <Contact copy={copy.contact} adminOnly />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#05050c] text-zinc-100 transition-colors duration-500 dark:bg-[#05050c]">
      <Navbar
        navItems={copy.nav}
        language={language}
        onLanguageChange={setLanguage}
        theme={theme}
        onThemeToggle={toggleTheme}
      />
      <main className="space-y-0">
        <Hero copy={copy.hero} />
        <About copy={copy.about} language={language} />
        <Highlights copy={copy.highlights} />
        <Services copy={copy.services} />
        <Portfolio copy={copy.portfolio} />
        <Insights copy={copy.insights} />
        <CallToAction copy={copy.callToAction} />
        <Contact copy={copy.contact} />
      </main>
      <Footer copy={copy.footer} />
    </div>
  );
}

export default App;
