import { PDFViewer } from "@/shared/components";
import { Button } from "@/shared/components/ui";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/ui/dialog";
import { useArticleQuery, useObjectUrl, useOpenDialog } from "@/shared/hooks";
import { DownloadIcon, FileTextIcon, XIcon } from "lucide-react";
import { type ReactNode } from "react";

type ArticleDialogProps = {
  trigger: () => ReactNode;
};

export function ArticleDialog({ trigger }: ArticleDialogProps) {
  const { data: pdfBlob, isFetching } = useArticleQuery();
  const pdfURL = useObjectUrl(pdfBlob);

  const { isOpened, handleOpenChange } = useOpenDialog();

  if (isFetching) {
    return (
      <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
        Buscando documento...
      </span>
    );
  }

  if (!pdfURL) {
    return null;
  }

  return (
    <Dialog open={isOpened} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{trigger()}</DialogTrigger>
      <DialogContent
        aria-describedby={undefined}
        // [&>button]:hidden -> remove default close button
        className="w-full max-w-4xl! h-[85vh] p-0 gap-0 [&>button]:hidden bg-white dark:bg-slate-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden "
      >
        <div className="flex items-center justify-between px-3 md:px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
              <FileTextIcon className="size-4.5 md:size-6" />
            </div>
            <div>
              <DialogTitle className=" font-bold text-slate-800 dark:text-white text-sm md:text-lg truncate md:text-wrap max-w-38 md:max-w-md">
                Shorextractor: um aplicativo desktop para extração automática de
                linhas de costa
              </DialogTitle>
              <p className="text-xs text-slate-500">Visualização de PDF</p>
            </div>
            <a
              href={pdfURL}
              download="Shorextractor_-_Um_Aplicativo_Desktop_Para_Extracao_Automatica_de_Linhas_de_Costa"
              tabIndex={-1}
            >
              <Button className="w-8 h-8 md:w-55 md:h-12 p-0! bg-slate-900 dark:bg-white md:[&>svg]:size-auto! text-white text-md dark:text-slate-900 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2 cursor-pointer">
                <DownloadIcon className="size-5" />
                <span className="hidden md:inline">Baixar PDF Original</span>
              </Button>
            </a>
          </div>

          <DialogClose asChild>
            <Button
              size={"icon-lg"}
              className="p-2! bg-transparent [&>svg]:size-auto! hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-500"
            >
              <XIcon size={24} />
              <span className="sr-only">Fechar</span>
            </Button>
          </DialogClose>
        </div>

        <div className="flex-1 bg-slate-100 dark:bg-black/50 p-4 overflow-hidden relative group">
          <div className="w-full h-full bg-white dark:bg-slate-800 shadow-sm rounded-lg flex flex-col items-center justify-center text-center pb-9 border border-slate-200 dark:border-slate-700">
            <PDFViewer fileUrl={pdfURL} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
