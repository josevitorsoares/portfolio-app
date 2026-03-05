import { GitHubIcon } from "@/shared/components";
import {
  ArrowRightIcon,
  CodeIcon,
  DatabaseIcon,
  LayoutIcon,
  SmartphoneIcon,
  TerminalIcon,
} from "lucide-react";
import { TechBadge } from "./TechBadge";

export function Hero() {
  return (
    <section className="relative pt-24 pb-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-250 h-125 bg-indigo-500/20 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold uppercase tracking-wide mb-8 border border-slate-200 dark:border-slate-700 hover:border-indigo-500/50 transition-colors cursor-default">
          <TerminalIcon
            size={14}
            className="text-indigo-600 dark:text-indigo-400"
          />
          Full Stack Developer
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
          Olá, eu sou o <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600">
            José Vitor Soares
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
          Bem-vindo ao meu espaço digital. Aqui centralizo meus estudos,
          experimentos técnicos e projetos pessoais. Focado em evoluir
          constantemente e compartilhar conhecimento sobre desenvolvimento web.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            Explorar Projetos <ArrowRightIcon size={20} />
          </a>
          <a
            href="https://github.com/josevitorsoares/"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-white font-semibold rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/80 transition-all flex items-center justify-center gap-2"
          >
            <GitHubIcon className="size-5 fill-white" /> GitHub
          </a>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium">
            Stack & Ferramentas
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-slate-400">
            <TechBadge icon={<LayoutIcon size={16} />} label="Frontend" />
            <TechBadge icon={<DatabaseIcon size={16} />} label="Backend" />
            <TechBadge
              icon={<SmartphoneIcon size={16} />}
              label="Mobile First"
            />
            <TechBadge icon={<CodeIcon size={16} />} label="Clean Code" />
          </div>
        </div>
      </div>
    </section>
  );
}
