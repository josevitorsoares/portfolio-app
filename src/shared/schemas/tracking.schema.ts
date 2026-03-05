import z from "zod";
import { isValidCorreiosTrackingCode } from "../lib";

const tracksSchema = z.object({
  description: z.string(),
  status: z.string(),
  origin: z.string(),
  destination: z.string().optional(),
  date: z.string(),
  time: z.string(),
});

export const trackingSchema = z.object({
  code: z.string(),
  type: z.string(),
  tracks: z.array(tracksSchema),
});

export type Tracking = z.infer<typeof trackingSchema>;

export const packageSchema = z.object({
  trackingCode: z
    .string()
    .refine((value) => isValidCorreiosTrackingCode(value), {
      message: "Código de rastreamento inválido",
    }),
});

export type Package = z.infer<typeof packageSchema>;
