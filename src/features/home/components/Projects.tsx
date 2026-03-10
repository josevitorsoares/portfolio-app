import { CodeIcon } from "lucide-react";
import { ArticleProject, CorreiosProject } from "./projects";

export function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col gap-32 border-t border-slate-200 dark:border-slate-800"
    >
      <div className="text-center sm:text-left -mb-15">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-bold uppercase tracking-wider mb-4">
          <CodeIcon size={16} /> Vitrine Técnica
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          Projetos em Destaque
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
          Soluções reais que combinam código limpo, APIs externas e Design
          System.
        </p>
      </div>

      <CorreiosProject />

      <ArticleProject />
    </section>
  );
}
