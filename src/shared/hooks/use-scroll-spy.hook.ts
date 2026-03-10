import { useEffect, useMemo, useRef, useState } from "react";

export function useScrollSpy(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);

  // Stabilize the array reference — only recreate when the actual values change,
  // preventing unnecessary observer teardown/setup from unstable array references.
  const stableIds = useMemo(
    () => sectionIds,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(sectionIds)],
  );

  // Track visibility state of ALL observed sections across callback batches.
  // IntersectionObserver only sends entries that crossed a threshold, so we
  // must persist the latest entry for each section to compare them accurately.
  const entryMapRef = useRef<Map<string, IntersectionObserverEntry>>(new Map());

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      // Offset top by header height (~64px + margin) so sections behind the
      // sticky header are not considered "visible".
      rootMargin: "-70px 0px 0px 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };

    const validSections = stableIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (validSections.length === 0) return;

    entryMapRef.current.clear();

    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      // Update the persisted map with latest entries from this batch.
      for (const entry of entries) {
        entryMapRef.current.set(entry.target.id, entry);
      }

      // Determine the most visible section from the full map.
      let bestId: string | null = null;
      let maxRatio = 0;

      for (const [id, entry] of entryMapRef.current) {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          bestId = id;
        }
      }

      setActiveId(bestId);
    };

    const observer = new IntersectionObserver(handleObserver, observerOptions);
    for (const section of validSections) {
      observer.observe(section);
    }

    return () => {
      observer.disconnect();
    };
  }, [stableIds]);

  return { activeId, setActiveId };
}
