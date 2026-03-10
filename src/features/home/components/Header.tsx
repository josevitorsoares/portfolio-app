import { LogoIcon } from "@/shared/components";
import { Button } from "@/shared/components/ui";
import { cn } from "@/shared/lib";
import { MoonIcon, SunIcon } from "lucide-react";
import type { ComponentProps } from "react";

type HeaderProps = {
  darkMode: boolean;
  toggleTheme: () => void;
};

function NavLink({ href, children, ref, ...props }: ComponentProps<"a">) {
  return (
    <a
      ref={ref}
      href={href}
      {...props}
      className={cn(
        "text-sm font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors",
        props.className,
      )}
    >
      {children}
    </a>
  );
}

export function Header({ darkMode, toggleTheme }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 mr-2">
          <div className="w-10 h-9 bg-indigo-600 p-1 rounded-lg flex md:hidden items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-500/30">
            <LogoIcon className="fill-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-800 dark:text-white hidden sm:block">
            josevitorsoares<span className="text-indigo-600">.dev</span>
          </span>
        </div>

        <nav className="flex items-center gap-4 sm:gap-6">
          <NavLink href="#projects">Projetos</NavLink>

          <NavLink href="#about">Sobre</NavLink>

          <NavLink href="#contact">Contato</NavLink>

          <Button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Alternar tema"
          >
            {darkMode ? <SunIcon size={18} /> : <MoonIcon size={18} />}
          </Button>
        </nav>
      </div>
    </header>
  );
}
