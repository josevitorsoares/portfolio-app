import type { LucideIcon } from "lucide-react";
import type { ComponentProps, JSX } from "react";
import { cn } from "../lib";
import { Button, Input } from "./ui";

type InputWithIconProps = ComponentProps<"input"> &
  Partial<{
    startIcon: LucideIcon;
    endIcon: LucideIcon;
    iconSize: number;
    iconClassName: string;
  }>;

export function InputWithIcon({
  ref,
  startIcon: StartIcon,
  endIcon: EndIcon,
  iconSize = 10,
  className,
  iconClassName,
  ...props
}: InputWithIconProps): JSX.Element {
  return (
    <div className="space-y-1 relative">
      {StartIcon && (
        <Button className="p-0 left-2 top-2 absolute flex flex-row items-center justify-center">
          <StartIcon size={20} className={cn("w-auto h-auto", iconClassName)} />
        </Button>
      )}

      <Input
        ref={ref}
        {...props}
        className={cn(
          "w-full outline-hidden text-md",
          StartIcon && "pl-15!",
          className,
        )}
      />

      {EndIcon && (
        <EndIcon
          size={iconSize}
          className={cn(
            "absolute flex flex-row items-center h-full",
            iconClassName,
          )}
        />
      )}
    </div>
  );
}
