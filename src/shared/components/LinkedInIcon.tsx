import type { ComponentProps, JSX } from "react";

/**
 * @component @name X
 * @description SVG icon component, renders SVG Element.
 *
 * @preview ![img](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBMaWNlbnNlOiBNSVQuIE1hZGUgYnkgTHVjaWRlIENvbnRyaWJ1dG9yczogaHR0cHM6Ly9sdWNpZGUuZGV2LyAtLT4KPHN2ZyAKICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgd2lkdGg9IjI0IgogIGhlaWdodD0iMjQiCiAgdmlld0JveD0iMCAwIDI0IDI0IgogIGZpbGw9Im5vbmUiCiAgc3Ryb2tlPSJjdXJyZW50Q29sb3IiCiAgc3Ryb2tlLXdpZHRoPSIyIgogIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIKICBzdHJva2UtbGluZWpvaW49InJvdW5kIgo+CiAgPHBhdGggZD0iTTE2IDhhNiA2IDAgMDE2IDZ2N2gtNHYtN2EyIDIgMCAwMC0yLTIgMiAyIDAgMDAtMiAydjdoLTR2LTdhNiA2IDAgMDE2LTZ6IiAvPgogIDxyZWN0IHg9IjIiIHk9IjkiIHdpZHRoPSI0IiBoZWlnaHQ9IjEyIiAvPgogIDxjaXJjbGUgY3g9IjQiIGN5PSI0IiByPSIyIiAvPgo8L3N2Zz4=)
 *
 * @param {Object} props - Any SVG attribute props
 * @returns {JSX.Element} JSX Element
 *
 */
export function LinkedInIcon({
  ref,
  ...props
}: ComponentProps<"svg">): JSX.Element {
  return (
    <svg
      ref={ref}
      width="100px"
      height="100px"
      viewBox="0 0 24 24"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
