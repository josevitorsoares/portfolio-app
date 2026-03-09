import { Button } from "@/shared/components/ui";
import { VITE_ARTICLE_URL } from "@/shared/envs";
import { useOpenDialog } from "@/shared/hooks";
import { ExternalLinkIcon, FileTextIcon } from "lucide-react";
import { ArticleCard } from "./components";

export function ArticleProject() {
  const { handleOpenChange } = useOpenDialog();

  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
      <div className="flex-1 order-2 lg:order-1">
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
          Publicação na Revista de Sistemas e Computação - RSC
        </h3>
        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
          Além de código, dedico tempo para documentar aprendizados e marcos da
          minha trajetória. Este projeto é o meu{" "}
          <strong>Trabalho de Conclusão de Curso (TCC)</strong> para a graduação
          em <strong>Análise e Desenvolvimento de Sistemas (ADS)</strong>. O
          trabalho descreve o desenvolvimento de uma ferramenta voltada para o
          monitoramento da erosão costeira, utilizando técnicas de{" "}
          <strong>Processamento Digital de Imagens (PDI)</strong>, para
          automatizar a detecção de bordas em imagens de satélite. A pesquisa
          foi publicada na{" "}
          <strong>Revista de Sistemas e Computação (RSC)</strong>.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={VITE_ARTICLE_URL}
            target="_blank"
            className="flex h-12.5 items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/20"
          >
            <ExternalLinkIcon size={20} /> Ler na Revista
          </a>
          <Button
            onClick={() => handleOpenChange(true)}
            className="flex h-12.5 items-center text-md gap-2 px-6! cursor-pointer [&>svg]:size-auto! bg-white dark:bg-slate-800 text-slate-700 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            <FileTextIcon size={20} /> Visualizar PDF
          </Button>
        </div>
      </div>
      <div className="flex-1 w-full flex justify-center lg:justify-end order-1 lg:order-2">
        <ArticleCard />
      </div>
    </div>
  );
}
