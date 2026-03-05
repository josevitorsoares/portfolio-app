import z from "zod";

const envSchema = z.object({
  VITE_API_URL: z.string(),
  VITE_TRACKING_API_URL: z.url(),
});

const env = envSchema.parse(import.meta.env, {
  error: () => {
    return { message: "Invalid environment variable" };
  },
});

export const { VITE_API_URL, VITE_TRACKING_API_URL } = env;
