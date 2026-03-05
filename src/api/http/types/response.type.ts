export type HttpResponse<T = unknown> = {
  statusCode: number;
  data?: T;
  message?: string;
  error?: string;
};

export type ApiResponse<Data = unknown> = {
  data: Data;
  message?: string;
  error?: string;
};
