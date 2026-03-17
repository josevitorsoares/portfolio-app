import { memo, useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Document, Page, pdfjs } from "react-pdf";
import { useContainerWidth } from "../hooks";
import { PDFToolbar } from "./PDFToolbar";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import type { PageCallback } from "react-pdf/dist/shared/types.js";
import { Skeleton } from "./ui";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

type PDFLazyPageProps = {
  pageNumber: number;
  width: number;
  onVisible: (page: number) => void;
};

const PDFLazyPage = memo(
  ({ pageNumber, width, onVisible }: PDFLazyPageProps) => {
    const { ref: renderRef, inView: shouldRender } = useInView({
      rootMargin: "150% 0px",
    });

    const { ref: visibleRef, inView: isCurrentlyVisible } = useInView({
      rootMargin: "-45% 0px -45% 0px",
    });

    const [aspectRatio, setAspectRatio] = useState<number>(1.414);

    const setRefs = useCallback(
      (node: HTMLDivElement | null) => {
        renderRef(node);
        visibleRef(node);
      },
      [renderRef, visibleRef],
    );

    useEffect(() => {
      if (isCurrentlyVisible) onVisible(pageNumber);
    }, [isCurrentlyVisible, pageNumber, onVisible]);

    if (!width) {
      return null;
    }

    const exactHeight = width * aspectRatio;

    const handlePageLoad = (page: PageCallback) => {
      const viewPort = page.getViewport({ scale: 1 });
      const realAspectRatio = viewPort.height / viewPort.width;

      setAspectRatio(realAspectRatio);
    };

    return (
      <div
        ref={setRefs}
        id={`pdf-page-${pageNumber}`}
        className="my-4 flex justify-center bg-white shadow-md transition-opacity duration-300"
        style={{ minHeight: exactHeight, width }}
      >
        {shouldRender ? (
          <Page
            pageNumber={pageNumber}
            width={width}
            renderTextLayer={true}
            renderAnnotationLayer={false}
            onLoadSuccess={handlePageLoad}
            loading={
              <Skeleton
                style={{ width, height: exactHeight }}
                className="bg-slate-200 dark:bg-slate-700"
              />
            }
          />
        ) : (
          // Fora da margem de 150%, mostramos apenas a caixa vazia (sem animação para poupar CPU)
          <div
            style={{ width, height: exactHeight }}
            className="bg-gray-50 dark:bg-zinc-900"
          />
        )}
      </div>
    );
  },
);

PDFLazyPage.displayName = "PDFLazyPage";

type PDFViewerProps = {
  fileUrl: string;
};

export function PDFViewer({ fileUrl }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [zoom, setZoom] = useState<number>(1);

  const containerRef = useRef<HTMLDivElement>(null);
  const containerWidth = useContainerWidth(containerRef);

  const baseWidth = Math.min(containerWidth || 740, 1000);
  const currentWidth = baseWidth * zoom;

  const handlePageVisible = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const handleJumpToPage = (page: number) => {
    const element = document.getElementById(`pdf-page-${page}`);
    if (!element) return;

    element.scrollIntoView({ behavior: "smooth", block: "start" });
    setCurrentPage(page);
  };

  return (
    <div
      ref={containerRef}
      className="relative rounded-md flex flex-col items-center overflow-auto h-screen w-full bg-white dark:bg-slate-800 py-4"
    >
      <Document
        file={fileUrl}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        loading={
          <p className="text-blue-500 py-10 font-medium">
            Carregando documento...
          </p>
        }
      >
        {Array.from(new Array(numPages), (_, index) => (
          <PDFLazyPage
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            width={currentWidth}
            onVisible={handlePageVisible}
          />
        ))}
      </Document>

      {numPages > 0 && (
        <PDFToolbar
          currentPage={currentPage}
          numPages={numPages}
          zoom={zoom}
          onPageChange={handleJumpToPage}
          onZoomChange={setZoom}
        />
      )}
    </div>
  );
}
