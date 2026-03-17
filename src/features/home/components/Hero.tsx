import {
  FastifyIcon,
  GitHubIcon,
  MongoDBIcon,
  NextJSIcon,
  NodeJSIcon,
  PostgreSQLIcon,
  ReactIcon,
  RedisIcon,
  TailwindCSSIcon,
  TypeScriptIcon,
} from "@/shared/components/icons";
import { Button } from "@/shared/components/ui";
import { useSmoothScroll } from "@/shared/hooks";
import { ArrowRightIcon, TerminalIcon } from "lucide-react";
import { TechBadge } from "./TechBadge";

export function Hero() {
  const scrollToSection = useSmoothScroll();

  return (
    <section id="hero" className="relative pt-24 pb-20 overflow-hidden">
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
          Bem-vindo ao meu espaço digital. Aqui você encontra um resumo da minha
          trajetória, projetos de destaque e as tecnologias que utilizo para
          transformar ideias em soluções robustas e eficientes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            className="w-full sm:w-auto h-13 px-8! py-3.5! text-md [&>svg]:size-auto! bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            onClick={() => scrollToSection("projects")}
          >
            Explorar Projetos <ArrowRightIcon size={20} />
          </Button>

          <a
            href="https://github.com/josevitorsoares/"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-white font-semibold rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/80 transition-all flex items-center justify-center gap-2"
          >
            <GitHubIcon className="size-5 fill-white" /> GitHub
          </a>
        </div>

        <div className="flex flex-col items-center mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <p className="text-sm sm:text-lg text-slate-500 dark:text-slate-400 mb-6 font-medium">
            Stack & Ferramentas
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-slate-400 max-w-3xl">
            <TechBadge
              className="hover:-translate-y-1 text-md sm:text-lg"
              icon={
                <TypeScriptIcon className="size-4 sm:size-5 fill-[#3178C6] bg-white rounded-xs" />
              }
              label="TypeScript"
            />
            <TechBadge
              className="hover:-translate-y-1 text-md sm:text-lg"
              icon={<NodeJSIcon className="size-4 sm:size-5 fill-[#5FA04E]" />}
              label="Node.JS"
            />
            <TechBadge
              className="hover:-translate-y-1 text-md sm:text-lg"
              icon={<FastifyIcon className="size-4 sm:size-5 fill-white" />}
              label="Fastify"
            />
            <TechBadge
              className="hover:-translate-y-1 text-md sm:text-lg"
              icon={<ReactIcon className="size-4 sm:size-5 fill-[#61DAFB]" />}
              label="React"
            />
            <TechBadge
              className="hover:-translate-y-1 text-md sm:text-lg"
              icon={<NextJSIcon className="size-4 sm:size-5 fill-black" />}
              label="NextJS"
            />
            <TechBadge
              className="hover:-translate-y-1 text-md sm:text-lg"
              icon={
                <TailwindCSSIcon className="size-4 sm:size-5 fill-[#06B6D4]" />
              }
              label="TailwindCSS"
            />
            <TechBadge
              className="hover:-translate-y-1 text-md sm:text-lg"
              icon={<PostgreSQLIcon className="size-4 sm:size-5" />}
              label="PostgreSQL"
            />
            <TechBadge
              className="hover:-translate-y-1 text-md sm:text-lg"
              icon={<MongoDBIcon className="size-4 sm:size-5 fill-[#47A248]" />}
              label="MongoDB"
            />
            <TechBadge
              className="hover:-translate-y-1 text-md sm:text-lg"
              icon={<RedisIcon className="size-4 sm:size-5 fill-[#FF4438]" />}
              label="Redis"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
