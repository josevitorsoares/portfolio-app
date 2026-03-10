import { VITE_API_URL } from "@/shared/envs";
import axios, {
  AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios";
import type { ApiResponse, HttpResponse } from "./types";

export const axiosInstance = axios.create({
  baseURL: VITE_API_URL,
  timeout: 30 * 1000, // 30 seconds is the maximum time per request
  headers: {
    "Content-Type": "application/json",
  },
});

type RequestOptions<D = unknown> = Omit<
  AxiosRequestConfig<D>,
  "url" | "baseURL"
>;

/**
 * Performs an HTTP request using the configured Axios instance.
 *
 * Wraps Axios with a normalized response format, handling both successful
 * responses and errors (including rate limiting and network failures).
 *
 * @template ResponseData - The expected shape of the response `data` field.
 * @template RequestBody - The shape of the request body, if any.
 *
 * @param path - The endpoint path to request (appended to the base URL).
 * @param options - Optional Axios request configuration (method, headers, data, params, etc.).
 *                  The `url` and `baseURL` properties are omitted since they are managed internally.
 *
 * @returns A promise that resolves to an `HttpResponse<ResponseData>` object containing:
 * - `statusCode` – The HTTP status code of the response.
 * - `data` – The deserialized response payload (only present on success).
 * - `message` – A human-readable message from the server or a default error description.
 * - `error` – A short error identifier (only present on failure).
 *
 * @example
 * // GET request
 * const result = await http<User>('/users/me');
 * if (result.data) console.log(result.data.name);
 *
 * @example
 * // POST request with body
 * const result = await http<AuthToken, LoginBody>('/auth/login', {
 *   method: 'POST',
 *   data: { email: 'user@example.com', password: 'secret' },
 * });
 */
export async function http<ResponseData = unknown, RequestBody = unknown>(
  path: string,
  options?: RequestOptions<RequestBody>,
): Promise<HttpResponse<ResponseData>> {
  try {
    const response = await axiosInstance.request<
      ApiResponse<ResponseData> | ResponseData,
      AxiosResponse<ApiResponse<ResponseData> | Blob>,
      RequestBody
    >({
      url: path,
      method: options?.method ?? "GET",
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
    });

    if (options?.responseType && options.responseType !== "json") {
      return {
        statusCode: response.status,
        data: response.data as ResponseData,
      };
    }

    const jsonResponse = response.data as ApiResponse<ResponseData>;

    return {
      statusCode: response.status,
      data: jsonResponse.data,
      message: jsonResponse.message,
    };
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      const axiosError = error as AxiosError<ApiResponse<unknown>>;
      const status = axiosError.response?.status || 500;
      const errorData = axiosError.response?.data;

      if (status === 429) {
        return {
          statusCode: status,
          message:
            "Muitas requisições. Por favor, aguarde alguns instantes antes de tentar novamente.",
          error: "Too Many Requests",
        };
      }

      return {
        statusCode: status,
        message: errorData?.message ?? "Ocorreu um erro durante a requisição",
        error: errorData?.error ?? "Unknown Error",
      };
    }

    // Erro de rede ou outro erro inesperado do axios
    return {
      statusCode: 500,
      message: "Ocorreu um erro inesperado na comunicação com o servidor.",
      error: "Internal Server Error",
    };
  }
}
