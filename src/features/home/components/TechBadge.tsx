import type { ReactNode } from "react";

type TechBadgeProps = {
  icon: ReactNode;
  label: string;
};

export function TechBadge({ icon, label }: TechBadgeProps) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800/50 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300">
      {icon}
      <span>{label}</span>
    </div>
  );
}
