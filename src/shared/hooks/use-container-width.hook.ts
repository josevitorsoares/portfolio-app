import { useEffect, useState, type RefObject } from "react";

export function useContainerWidth(containerRef: RefObject<HTMLElement | null>) {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    let timeoutId: number;

    const observer = new ResizeObserver((entries) => {
      if (!entries.length) {
        return;
      }

      // Debounce: Only updates the state after 150ms from the end of resizing
      timeoutId = setTimeout(() => {
        setWidth(entries[0].contentRect.width - 64);
      }, 150);
    });

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, [containerRef]);

  return width;
}
