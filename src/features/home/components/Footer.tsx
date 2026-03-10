import { GitHubIcon, LinkedInIcon } from "@/shared/components";
import { MailIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-slate-900 dark:bg-black text-center border-t border-slate-800">
      <div className="flex justify-center gap-6 mb-6">
        <a
          href="https://github.com/josevitorsoares"
          target="_blank"
          className="text-slate-400 hover:text-white transition-colors"
        >
          <GitHubIcon className="size-6 fill-current" />
        </a>
        <a
          href="https://linkedin.com/in/josevitorsoares"
          target="_blank"
          className="text-slate-400 hover:text-blue-400 transition-colors"
        >
          <LinkedInIcon className="size-6 stroke-current" />
        </a>
        <a
          href="mailto:josevitorgoncalvessoares@gmail.com"
          className="text-slate-400 hover:text-red-400 transition-colors"
        >
          <MailIcon size={24} />
        </a>
      </div>
      <p className="text-slate-500 text-sm">
        © 2026 José Vitor Soares. Desenvolvido com React & Tailwind CSS.
      </p>
    </footer>
  );
}
