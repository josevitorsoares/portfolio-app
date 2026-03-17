import { MinusIcon, PlusIcon } from "lucide-react";
import { memo, useEffect, useState, type KeyboardEvent } from "react";
import { Button, Input } from "./ui";

const ZOOM_CONFIG = {
  MIN: 0.5,
  MAX: 3.0,
  STEP: 0.25,
};

type PDFToolbarProps = {
  currentPage: number;
  numPages: number;
  zoom: number;
  onPageChange: (page: number) => void;
  onZoomChange: (zoom: number) => void;
};

const PDFToolbar = memo(
  ({
    currentPage,
    numPages,
    zoom,
    onPageChange,
    onZoomChange,
  }: PDFToolbarProps) => {
    const [inputPage, setInputPage] = useState(currentPage.toString());

    useEffect(() => {
      setInputPage(currentPage.toString());
    }, [currentPage]);

    const handlePageSubmit = () => {
      const targetPage = parseInt(inputPage, 10);

      if (isNaN(targetPage) || targetPage < 1 || targetPage > numPages) {
        setInputPage(currentPage.toString());

        return;
      }

      if (targetPage === currentPage) {
        return;
      }

      onPageChange(targetPage);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        handlePageSubmit();
      }
    };

    const handleZoomOut = () => {
      onZoomChange(Math.max(ZOOM_CONFIG.MIN, zoom - ZOOM_CONFIG.STEP));
    };

    const handleZoomIn = () => {
      onZoomChange(Math.min(ZOOM_CONFIG.MAX, zoom + ZOOM_CONFIG.STEP));
    };

    return (
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 shadow-xl border border-slate-200 dark:border-slate-700 rounded-lg px-2 md:px-4 py-2 flex items-center gap-2 sm:gap-4 z-50">
        <div className="flex items-center gap-0 sm:gap-2 border-r border-gray-300 dark:border-zinc-700 pr-0 sm:pr-4">
          <Button
            onClick={handleZoomOut}
            disabled={zoom <= ZOOM_CONFIG.MIN}
            className="p-1 size-7 bg-transparent md:[&>svg]:size-auto! hover:bg-slate-200 dark:hover:bg-slate-900 disabled:opacity-50 disabled:cursor-not-allowed rounded transition-colors"
            aria-label="Diminuir Zoom"
            title="Diminuir Zoom"
          >
            <MinusIcon className="stroke-white" />
          </Button>

          <span className="text-xs md:text-sm font-medium w-12 text-center">
            {Math.round(zoom * 100)}%
          </span>

          <Button
            onClick={handleZoomIn}
            disabled={zoom >= ZOOM_CONFIG.MAX}
            className="p-1 size-7 bg-transparent md:[&>svg]:size-auto! hover:bg-slate-200 dark:hover:bg-slate-900 disabled:opacity-50 disabled:cursor-not-allowed rounded transition-colors"
            aria-label="Aumentar Zoom"
            title="Aumentar Zoom"
          >
            <PlusIcon className="stroke-white" />
          </Button>
        </div>

        {/* Controles de Paginação */}
        <div className="flex items-center gap-1 sm:gap-2 text-xs md:text-sm">
          <span>Página</span>
          <Input
            type="number"
            value={inputPage}
            onChange={(event) => setInputPage(event.target.value)}
            onBlur={handlePageSubmit}
            onKeyDown={handleKeyDown}
            className="w-7 h-7 sm:h-8 p-0 md:w-10 text-sm sm:text-md text-center border border-slate-200 dark:border-slate-700 rounded bg-transparent md:py-1 hide-arrows focus:outline-none focus:ring-2 focus:ring-blue-500"
            min={1}
            max={numPages}
          />
          <span>de {numPages}</span>
        </div>
      </div>
    );
  },
);

PDFToolbar.displayName = "PDFToolbar";

export { PDFToolbar };
