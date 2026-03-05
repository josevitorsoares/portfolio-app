export type ActionResponse<Data = unknown> = {
  success: boolean;
  data?: Data;
  message?: string;
};
