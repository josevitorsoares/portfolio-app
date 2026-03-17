import { cn } from "@/shared/lib";
import type { ComponentProps, JSX } from "react";

/**
 * @component @name NextJS
 * @description SVG icon component, renders SVG Element.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoKICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMiIgZmlsbD0id2hpdGUiLz4KICA8dGl0bGU+TmV4dC5qczwvdGl0bGU+CiAgICA8cGF0aCBkPSJNMTguNjY1IDIxLjk3OEMxNi43NTggMjMuMjU1IDE0LjQ2NSAyNCAxMiAyNCA1LjM3NyAyNCAwIDE4LjYyMyAwIDEyUzUuMzc3IDAgMTIgMHMxMiA1LjM3NyAxMiAxMmMwIDMuNTgzLTEuNTc0IDYuODAxLTQuMDY3IDkuMDAxTDkuMjE5IDcuMkg3LjJ2OS41OTZoMS42MTVWOS4yNTFsOS44NSAxMi43MjdabS0zLjMzMi04LjUzMyAxLjYgMi4wNjFWNy4yaC0xLjZ2Ni4yNDVaIi8+Cjwvc3ZnPg==)
 *
 * @param {Object} props - Any SVG attribute props
 * @returns {JSX.Element} JSX Element
 *
 */
export function NextJSIcon({
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
      <title>Next.js</title>
      <circle cx="12" cy="12" r="12" fill="white" />
      <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z" />
    </svg>
  );
}
