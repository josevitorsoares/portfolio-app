import { LinkedInIcon } from "@/shared/components/icons";
import { MailIcon } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-bold uppercase tracking-wider mb-6">
          <MailIcon size={16} /> Vamos Conversar
        </div>

        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Interessado em{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600">
            trocar ideias?
          </span>
        </h2>

        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Estou sempre aberto a expandir meu networking, colaborar em projetos
          open-source ou discutir sobre tecnologia. Sinta-se à vontade para me
          mandar uma mensagem!
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <a
            href="mailto:josevitorgoncalvessoares@gmail.com"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-base sm:text-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-indigo-500/30"
          >
            <MailIcon size={24} /> Me mande um E-mail
          </a>

          <a
            href="https://linkedin.com/in/josevitorsoares"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/80 rounded-2xl font-bold text-base sm:text-lg transition-all transform hover:-translate-y-1 shadow-sm"
          >
            <LinkedInIcon className="size-6 text-blue-600 dark:text-blue-400" />{" "}
            Conectar no LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
