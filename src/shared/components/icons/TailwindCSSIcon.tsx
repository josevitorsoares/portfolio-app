import { cn } from "@/shared/lib";
import type { ComponentProps, JSX } from "react";

/**
 * @component @name TailwindCSS
 * @description SVG icon component, renders SVG Element.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+ICAKICA8dGl0bGU+VGFpbHdpbmQgQ1NTPC90aXRsZT4KICAgIDxwYXRoIGQ9Ik0xMi4wMDEsNC44Yy0zLjIsMC01LjIsMS42LTYsNC44YzEuMi0xLjYsMi42LTIuMiw0LjItMS44YzAuOTEzLDAuMjI4LDEuNTY1LDAuODksMi4yODgsMS42MjQgQzEzLjY2NiwxMC42MTgsMTUuMDI3LDEyLDE4LjAwMSwxMmMzLjIsMCw1LjItMS42LDYtNC44Yy0xLjIsMS42LTIuNiwyLjItNC4yLDEuOGMtMC45MTMtMC4yMjgtMS41NjUtMC44OS0yLjI4OC0xLjYyNCBDMTYuMzM3LDYuMTgyLDE0Ljk3Niw0LjgsMTIuMDAxLDQuOHogTTYuMDAxLDEyYy0zLjIsMC01LjIsMS42LTYsNC44YzEuMi0xLjYsMi42LTIuMiw0LjItMS44YzAuOTEzLDAuMjI4LDEuNTY1LDAuODksMi4yODgsMS42MjQgYzEuMTc3LDEuMTk0LDIuNTM4LDIuNTc2LDUuNTEyLDIuNTc2YzMuMiwwLDUuMi0xLjYsNi00LjhjLTEuMiwxLjYtMi42LDIuMi00LjIsMS44Yy0wLjkxMy0wLjIyOC0xLjU2NS0wLjg5LTIuMjg4LTEuNjI0IEMxMC4zMzcsMTMuMzgyLDguOTc2LDEyLDYuMDAxLDEyeiIvPgo8L3N2Zz4=)
 *
 * @param {Object} props - Any SVG attribute props
 * @returns {JSX.Element} JSX Element
 *
 */
export function TailwindCSSIcon({
  ref,
  ...props
}: ComponentProps<"svg">): JSX.Element {
  return (
    <svg
      ref={ref}
      {...props}
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(props.className)}
    >
      <title>Tailwind CSS</title>
      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
    </svg>
  );
}
