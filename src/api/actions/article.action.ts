import { http } from "../http";
import type { ActionResponse } from "./types";

export async function getArticleAction(): Promise<ActionResponse<Blob>> {
  const response = await http<Blob>("/article", {
    responseType: "blob",
    headers: {
      Accept: "application/pdf",
    },
  });

  if (response.statusCode !== 200) {
    return {
      success: false,
      message: "Erro ao tentar acessar o arquivo PDF",
    };
  }

  return {
    success: true,
    data: response.data,
  };
}
