import { Button } from "@/shared/components/ui";
import { useOpenDialog } from "@/shared/hooks";
import { ChevronRightIcon } from "lucide-react";
import { ArticleDialog } from "./ArticleDialog";

export function ArticleCard() {
  const handleOpenChange = useOpenDialog((state) => state.handleOpenChange);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col w-full max-w-md mx-auto">
      <div
        className="h-48 bg-slate-200 dark:bg-slate-700 relative rounded-2xl cursor-pointer overflow-hidden group"
        onClick={() => handleOpenChange(true)}
      >
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent z-10" />
        <img
          src="https://i.postimg.cc/ZKLwYzKD/shorextractor.jpg"
          alt="Imagem da tela inicial do app Shorextractor"
          className="absolute inset-0 opacity-80 group-hover:scale-105 transition-transform duration-500"
        />
        {/* <div className="absolute inset-0 bg-linear-to-br from-purple-500 to-indigo-600 opacity-80 group-hover:scale-105 transition-transform duration-500" /> */}
        <div className="absolute bottom-4 left-4 z-20">
          <span className="px-2 py-1 bg-white/20 backdrop-blur-md text-white text-xs rounded mb-2 inline-block border border-white/10">
            Publicado em Revista de Sistemas e Computação - RSC
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-4">
          <h3
            onClick={() => handleOpenChange(true)}
            className="text-xl font-bold text-slate-900 dark:text-white mb- cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            Shorextractor
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-3">
            Um aplicativo desktop para extração automática de linhas de costa.
          </p>
        </div>
        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
          <div className="flex flex-col items-start gap-1">
            <span className="text-xs text-slate-500 font-medium">
              Por José Vitor G. Soares e
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Willamys Rangel N. de Sousa
            </span>
          </div>
          <ArticleDialog
            trigger={() => (
              <Button className="text-sm bg-transparent hover:bg-transparent font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 hover:gap-2 cursor-pointer transition-all">
                Prévia PDF <ChevronRightIcon size={14} />
              </Button>
            )}
          />
        </div>
      </div>
    </div>
  );
}
