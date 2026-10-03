import { carCta } from "@/lib/site";

export function SisterCta({ label, content }: { label: string; content?: string }) {
  return (
    <a
      href={carCta(content)}
      className="inline-flex items-center justify-center rounded-full bg-gold px-4 py-2 text-sm font-medium text-bg hover:bg-gold-dim"
    >
      {label}
    </a>
  );
}
