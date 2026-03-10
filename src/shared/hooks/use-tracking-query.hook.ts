import { trackObjectAction } from "@/api/actions";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import type { Package } from "../schemas";

export function useTrackingQuery(data: Package | null) {
  const trackingQueryKey = ["tracking", data] as const;

  return useQuery({
    queryKey: trackingQueryKey,
    queryFn: async () => {
      const response = await trackObjectAction(data!.trackingCode);

      if (!response.success) {
        throw new Error(
          response.message ??
            "Infelizmente ocorreu um erro ao rastrear este objeto",
        );
      }

      return response.data;
    },
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5,
    enabled: !!data,
    refetchOnWindowFocus: true,
  });
}
