import { LogoIcon } from "@/shared/components";
import { Button } from "@/shared/components/ui";
import { useScrollSpy, useSmoothScroll } from "@/shared/hooks";
import { cn } from "@/shared/lib";
import { MenuIcon, MoonIcon, SunIcon, XIcon } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Projetos", id: "projects" },
  { name: "Sobre", id: "about" },
  { name: "Experiências", id: "works" },
  { name: "Formações", id: "education" },
  { name: "Contato", id: "contact" },
];

const spySectionIds = ["hero", ...navLinks.map(({ id }) => id)];

type HeaderProps = {
  darkMode: boolean;
  toggleTheme: () => void;
};

export function Header({ darkMode, toggleTheme }: HeaderProps) {
  const [hasMobileMenuOpen, setHasMobileMenuOpen] = useState<boolean>(false);
  const activeSection = useScrollSpy(spySectionIds).activeId;
  const scrollToSection = useSmoothScroll();

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="w-full max-w-full">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 mr-2">
            <div className="w-10 h-9 bg-indigo-600 p-1 rounded-lg flex md:hidden items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-500/30">
              <LogoIcon className="fill-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800 dark:text-white hidden sm:block">
              josevitorsoares<span className="text-indigo-600">.dev</span>
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-4 sm:gap-6">
            {navLinks.map((link) => (
              <Button
                key={link.name}
                type="button"
                variant="link"
                onClick={() => scrollToSection(link.id)}
                className={cn(
                  "p-0! hover:no-underline text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-600 transition-colors cursor-pointer",
                  activeSection === link.id
                    ? "text-indigo-600!"
                    : "text-slate-600 dark:text-slate-300",
                )}
              >
                {link.name}
              </Button>
            ))}
          </nav>

          <div className="flex flex-row gap-1">
            <Button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Alternar tema"
            >
              {darkMode ? <SunIcon size={18} /> : <MoonIcon size={18} />}
            </Button>

            <div className="lg:hidden shrink-0">
              <Button
                variant={"ghost"}
                size="sm"
                onClick={() => setHasMobileMenuOpen(!hasMobileMenuOpen)}
                className="inline-flex items-center justify-center p-1.5 sm:p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 focus:outline-none"
                aria-label="Menu principal"
                aria-expanded={hasMobileMenuOpen}
              >
                <span className="sr-only">Abrir menu</span>
                {hasMobileMenuOpen ? (
                  <XIcon className="size-5 sm:size-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="size-5 sm:size-6" aria-hidden="true" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {hasMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-3 sm:px-4">
              <nav className="py-2 sm:py-3 space-y-1 text-slate-600 dark:text-slate-600 hover:bg-slate-200 dark:hover:bg-slate-700">
                {navLinks.map((link) => (
                  <Button
                    key={link.name}
                    type="button"
                    onClick={() => {
                      scrollToSection(link.id);
                      setHasMobileMenuOpen(false);
                    }}
                    className={
                      "block w-full bg-transparent text-center text-sm font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                    }
                  >
                    {link.name}
                  </Button>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
