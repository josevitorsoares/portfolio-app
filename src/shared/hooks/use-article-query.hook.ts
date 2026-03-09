import { getArticleAction } from "@/api/actions";
import { useQuery } from "@tanstack/react-query";

export function useArticleQuery() {
  const articleQuery: string[] = ["article"] as const;

  return useQuery({
    queryKey: articleQuery,
    queryFn: async () => {
      const response = await getArticleAction();

      if (!response.success) {
        throw new Error(response.message ?? "Erro ao buscar artigo");
      }

      return response.data;
    },
  });
}
