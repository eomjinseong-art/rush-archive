import type { Source } from "@/data/types";

export function Sources({
  sources,
  footnotes,
}: {
  sources: Source[];
  footnotes?: { n: number; text: string }[];
}) {
  return (
    <section className="mt-10 space-y-4 border-t border-line pt-6">
      {footnotes && footnotes.length > 0 && (
        <ol className="space-y-2 text-xs text-muted">
          {footnotes.map((fn) => (
            <li id={`fn-${fn.n}`} key={fn.n}>
              [{fn.n}] {fn.text}
            </li>
          ))}
        </ol>
      )}
      <div>
        <h2 className="font-serif text-lg text-gold">출처</h2>
        <ul className="mt-2 space-y-1 text-sm">
          {sources.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                className="text-muted underline decoration-line underline-offset-4 hover:text-gold"
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Fn({ n }: { n: number }) {
  return (
    <a href={`#fn-${n}`} className="ml-0.5 text-[10px] text-gold align-super">
      [{n}]
    </a>
  );
}
