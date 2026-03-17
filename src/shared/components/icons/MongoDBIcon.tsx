import { cn } from "@/shared/lib";
import type { ComponentProps, JSX } from "react";

/**
 * @component @name MongoDB
 * @description SVG icon component, renders SVG Element.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IndoaXRlIi8+ICAKICA8dGl0bGU+TW9uZ29EQjwvdGl0bGU+CiAgICA8cGF0aCBkPSJNMTcuMTkzIDkuNTU1Yy0xLjI2NC01LjU4LTQuMjUyLTcuNDE0LTQuNTczLTguMTE1LS4yOC0uMzk0LS41My0uOTU0LS43MzUtMS40NC0uMDM2LjQ5NS0uMDU1LjY4NS0uNTIzIDEuMTg0LS43MjMuNTY2LTQuNDM4IDMuNjgyLTQuNzQgMTAuMDItLjI4MiA1LjkxMiA0LjI3IDkuNDM1IDQuODg4IDkuODg0bC4wNy4wNUE3My40OSA3My40OSAwIDAxMTEuOTEgMjRoLjQ4MWMuMTE0LTEuMDMyLjI4NC0yLjA1Ni41MS0zLjA3LjQxNy0uMjk2LjYwNC0uNDYzLjg1LS42OTNhMTEuMzQyIDExLjM0MiAwIDAwMy42MzktOC40NjRjLjAxLS44MTQtLjEwMy0xLjY2Mi0uMTk3LTIuMjE4em0tNS4zMzYgOC4xOTVzMC04LjI5MS4yNzUtOC4yOWMuMjEzIDAgLjQ5IDEwLjY5NS40OSAxMC42OTUtLjM4MS0uMDQ1LS43NjUtMS43Ni0uNzY1LTIuNDA1eiIvPgo8L3N2Zz4=)
 *
 * @param {Object} props - Any SVG attribute props
 * @returns {JSX.Element} JSX Element
 *
 */
export function MongoDBIcon({
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
      <title>MongoDB</title>
      <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
    </svg>
  );
}
