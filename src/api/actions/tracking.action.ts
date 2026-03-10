import { VITE_API_URL } from "@/shared/envs";
import type { Tracking } from "@/shared/schemas";
import { http } from "../http";
import type { ActionResponse } from "./types";

export async function trackObjectAction(
  trackingCode: string,
): Promise<ActionResponse<Tracking>> {
  const response = await http<Tracking>(
    `${VITE_API_URL}/track/${trackingCode}`,
    {
      method: "GET",
    },
  );

  if (response.statusCode !== 200) {
    return { success: false, message: response.message };
  }

  return { success: true, data: response.data };
}
