import type { ComponentProps, JSX } from "react";
import { cn } from "../lib";

/**
 * @component @name X
 * @description SVG icon component, renders SVG Element.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyI+PHRpdGxlPlg8L3RpdGxlPjxwYXRoIGQ9Ik0xNC4yMzQgMTAuMTYyIDIyLjk3NyAwaC0yLjA3MmwtNy41OTEgOC44MjRMNy4yNTEgMEguMjU4bDkuMTY4IDEzLjM0M0wuMjU4IDI0SDIuMzNsOC4wMTYtOS4zMThMMTYuNzQ5IDI0aDYuOTkzem0tMi44MzcgMy4yOTktLjkyOS0xLjMyOUwzLjA3NiAxLjU2aDMuMTgybDUuOTY1IDguNTMyLjkyOSAxLjMyOSA3Ljc1NCAxMS4wOWgtMy4xODJ6IiAvPjwvc3ZnPg==)
 *
 * @param {Object} props - Any SVG attribute props
 * @returns {JSX.Element} JSX Element
 *
 */
export function XIcon({ ref, ...props }: ComponentProps<"svg">): JSX.Element {
  return (
    <svg
      ref={ref}
      {...props}
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(props.className)}
    >
      <title>X</title>
      <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z" />
    </svg>
  );
}
