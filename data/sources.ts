import type { Source } from "./types";

export function wiki(title: string, label?: string): Source {
  return {
    label: `Wikipedia — ${label ?? title.replace(/_/g, " ")}`,
    href: `https://en.wikipedia.org/wiki/${title}`,
  };
}

export function imcdb(href: string, label: string): Source {
  return { label: `IMCDb — ${label}`, href };
}
