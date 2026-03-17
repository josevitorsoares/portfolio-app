import { cn } from "@/shared/lib";
import type { ComponentProps, JSX } from "react";

/**
 * @component @name Redis
 * @description SVG icon component, renders SVG Element.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+CgogIDx0aXRsZT5SZWRpczwvdGl0bGU+CiAgICA8cGF0aCBkPSJNMjIuNzEgMTMuMTQ1Yy0xLjY2IDIuMDkyLTMuNDUyIDQuNDgzLTcuMDM4IDQuNDgzLTMuMjAzIDAtNC4zOTctMi44MjUtNC40OC01LjEyLjcwMSAxLjQ4NCAyLjA3MyAyLjY4NSA0LjIxNCAyLjYzIDQuMTE3LS4xMzMgNi45NC0zLjg1MiA2Ljk0LTcuMjM5IDAtNC4wNS0zLjAyMi02Ljk3Mi04LjI2OC02Ljk3Mi0zLjc1MiAwLTguNCAxLjQyOC0xMS40NTUgMy42ODVDMi41OSA2LjkzNyAzLjg4NSA5Ljk1OCA0LjM1IDkuNjI2YzIuNjQ4LTEuOTA0IDQuNzQ4LTMuMTMgNi43ODQtMy43NDRDOC4xMiA5LjI0NC44ODYgMTcuMDUgMCAxOC40MjVjLjEgMS4yNjEgMS42NiA0LjY0OCAyLjQyNCA0LjY0OC4yMzIgMCAuNDMxLS4xMzMuNjY0LS4zNjVhMTAwLjQ5IDEwMC40OSAwIDAgMCA1LjU0LTYuNzY1Yy4yMjIgMy4xMDQgMS43NDggNi44OTggNi4wMTQgNi44OTggMy44MTkgMCA3LjYwNC0yLjc1NiA5LjMzLTguOTY1LjItLjc2NC0uNzMtMS4zNjEtMS4yNjEtLjczem0tNC4zNDktNS4wMTNjMCAxLjk1OS0xLjkyNiAyLjkyMi0zLjY4NSAyLjkyMi0uOTQxIDAtMS42NjQtLjI0Ny0yLjIzNS0uNTY4IDEuMDUxLTEuNTkyIDIuMDkyLTMuMjI1IDMuMjEtNC45NzMgMS45NzIuMzM0IDIuNzEgMS40MyAyLjcxIDIuNjE5eiIvPgo8L3N2Zz4=)
 *
 * @param {Object} props - Any SVG attribute props
 * @returns {JSX.Element} JSX Element
 *
 */
export function RedisIcon({
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
      <title>Redis</title>

      <path d="M22.71 13.145c-1.66 2.092-3.452 4.483-7.038 4.483-3.203 0-4.397-2.825-4.48-5.12.701 1.484 2.073 2.685 4.214 2.63 4.117-.133 6.94-3.852 6.94-7.239 0-4.05-3.022-6.972-8.268-6.972-3.752 0-8.4 1.428-11.455 3.685C2.59 6.937 3.885 9.958 4.35 9.626c2.648-1.904 4.748-3.13 6.784-3.744C8.12 9.244.886 17.05 0 18.425c.1 1.261 1.66 4.648 2.424 4.648.232 0 .431-.133.664-.365a100.49 100.49 0 0 0 5.54-6.765c.222 3.104 1.748 6.898 6.014 6.898 3.819 0 7.604-2.756 9.33-8.965.2-.764-.73-1.361-1.261-.73zm-4.349-5.013c0 1.959-1.926 2.922-3.685 2.922-.941 0-1.664-.247-2.235-.568 1.051-1.592 2.092-3.225 3.21-4.973 1.972.334 2.71 1.43 2.71 2.619z" />
    </svg>
  );
}
