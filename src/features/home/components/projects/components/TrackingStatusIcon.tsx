import { cn } from "@/shared/lib";
import type { LucideIcon } from "lucide-react";
import type { ComponentProps, JSX } from "react";
import { statusIconMap, type TrackingStatus } from "./types";

type TrackingStatusIconProps = ComponentProps<LucideIcon> & {
  status: TrackingStatus;
};

/**
 * Renders a tracking status icon component based on the provided status.
 *
 * Maps the given status to a corresponding Lucide icon component and renders it
 * with the specified styling and size properties.
 *
 * @param ref - Forwarded reference to the underlying icon component
 * @param status - The tracking status that determines which icon to display
 * @param size - The icon size in pixels (default: 24)
 * @param color - The icon color (default: "currentColor")
 * @param className - Additional CSS classes to apply to the icon
 * @param props - Additional props passed to the icon component
 * @returns A JSX element representing the status icon
 *
 * @example
 * ```tsx
 * <TrackStatusIcon status="in_progress" size={20} color="blue" />
 * ```
 */
export function TrackStatusIcon({
  ref,
  status,
  size = 24,
  color = "currentColor",
  className,
  ...props
}: TrackingStatusIconProps): JSX.Element {
  const IconComponent = statusIconMap[status] || statusIconMap.unknown;

  return (
    <IconComponent
      ref={ref}
      size={size}
      color={color}
      className={cn(className)}
      {...props}
    />
  );
}
