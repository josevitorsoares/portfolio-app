import { useEffect, useState } from "react";
import {
  AboutMe,
  Contact,
  Education,
  Footer,
  Header,
  Hero,
  Projects,
  WorkExperience,
} from "../components";

export function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      return;
    }

    document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark bg-slate-950" : "bg-slate-50"}`}
    >
      <div className="min-h-screen text-slate-900 dark:text-slate-100 font-sans">
        <Header
          darkMode={darkMode}
          toggleTheme={() => setDarkMode(!darkMode)}
        />

        <main>
          <Hero />

          <Projects />

          <AboutMe />

          <WorkExperience />

          <Education />

          <Contact />

          <Footer />
        </main>
      </div>
    </div>
  );
}
