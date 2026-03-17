import { cn } from "@/shared/lib";
import type { ComponentProps, ReactNode } from "react";

type TechBadgeProps = {
  icon: ReactNode;
  label: string;
} & ComponentProps<"div">;

export function TechBadge({ ref, icon, label, ...props }: TechBadgeProps) {
  return (
    <div
      ref={ref}
      {...props}
      className={cn(
        "flex items-center gap-2 px-4 py-2 bg-slate-200 dark:bg-slate-800/50 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300",
        props.className,
      )}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}
