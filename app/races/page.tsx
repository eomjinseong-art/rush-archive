import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Sources } from "@/components/Sources";
import { races } from "@/data/races";
import { breadcrumbLd, canonicalUrl, jsonLd, pageMetadata } from "@/lib/seo";
import { RACES_DESCRIPTION } from "@/lib/siteConfig";

export const metadata: Metadata = pageMetadata({
  title: "레이스와 서킷",
  description: RACES_DESCRIPTION,
  path: "/races",
});

export default function RacesPage() {
  const allSources = [...new Map(races.flatMap((r) => r.sources).map((s) => [s.href, s])).values()];
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "레이스", path: "/races" },
          ]),
          ...races.map((r) => ({
            "@type": "SportsEvent",
            name: r.nameEn,
            alternateName: r.nameKo,
            location: { "@type": "Place", name: r.circuitKo },
            url: canonicalUrl(`/races#${r.id}`),
          })),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "레이스" }]} />
      <h1 className="mt-5 font-serif text-3xl text-paper">레이스와 서킷</h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{RACES_DESCRIPTION}</p>
      <ol className="mt-8 space-y-5">
        {races.map((r) => (
          <li key={r.id} id={r.id} className="scroll-mt-32 rounded-xl border border-line p-5">
            <p className="text-xs text-gold">
              {r.date} · {r.circuitKo}
            </p>
            <h2 className="mt-1 font-serif text-xl text-paper">
              {r.nameKo} <span className="text-sm text-muted">{r.nameEn}</span>
            </h2>
            {r.result ? <p className="mt-2 text-sm text-paper">결과: {r.result}</p> : null}
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <p className="text-sm leading-7 text-paper/90">
                <span className="mr-1 text-xs text-muted">영화</span>
                {r.inFilm}
              </p>
              <p className="text-sm leading-7 text-paper/90">
                <span className="mr-1 text-xs text-gold">실제</span>
                {r.real}
              </p>
            </div>
          </li>
        ))}
      </ol>
      <Sources sources={allSources} />
    </div>
  );
}
