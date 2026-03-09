/* eslint-disable react-hooks/set-state-in-effect */
// We ignore the rule because URL.createObjectURL is a side effect that
// requires browser memory allocation and cleanup.

import { useEffect, useState } from "react";

export function useObjectUrl(blob: Blob | undefined): string | null {
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!blob) {
      setUrl(null);
      return;
    }

    const objectUrl = URL.createObjectURL(blob);
    setUrl(objectUrl);

    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [blob]);

  return url;
}
