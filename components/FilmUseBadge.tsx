import { FILM_USE_LABEL } from "@/lib/cars";
import type { FilmUse } from "@/data/types";

const tone: Record<FilmUse, string> = {
  replica: "border-sky-400/50 text-sky-300",
  real: "border-emerald-400/50 text-emerald-300",
  mixed: "border-gold/60 text-gold",
  "story-only": "border-rose-400/50 text-rose-300",
  unknown: "border-line text-muted",
};

export function FilmUseBadge({ use }: { use: FilmUse }) {
  return (
    <span className={`rounded-full border px-2 py-0.5 text-[11px] ${tone[use]}`}>{FILM_USE_LABEL[use]}</span>
  );
}
