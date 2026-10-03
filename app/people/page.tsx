import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Sources } from "@/components/Sources";
import { people } from "@/data/people";
import { breadcrumbLd, canonicalUrl, jsonLd, pageMetadata } from "@/lib/seo";
import { PEOPLE_DESCRIPTION } from "@/lib/siteConfig";

export const metadata: Metadata = pageMetadata({
  title: "실존 인물",
  description: PEOPLE_DESCRIPTION,
  path: "/people",
});

export default function PeoplePage() {
  const allSources = [...new Map(people.flatMap((p) => p.sources).map((s) => [s.href, s])).values()];
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "실존 인물", path: "/people" },
          ]),
          ...people.map((p) => ({
            "@type": "Person",
            name: p.nameEn,
            alternateName: p.nameKo,
            url: canonicalUrl(`/people#${p.id}`),
          })),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "실존 인물" }]} />
      <h1 className="mt-5 font-serif text-3xl text-paper">실존 인물</h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{PEOPLE_DESCRIPTION}</p>
      <nav className="mt-5 flex flex-wrap gap-2 text-xs">
        {people.map((p) => (
          <a key={p.id} href={`#${p.id}`} className="rounded-full border border-line px-3 py-1 text-muted hover:text-gold">
            {p.nameKo}
          </a>
        ))}
      </nav>
      <div className="mt-8 space-y-5">
        {people.map((p) => (
          <section key={p.id} id={p.id} className="scroll-mt-32 rounded-xl border border-line p-5">
            <h2 className="font-serif text-xl text-paper">
              {p.nameKo} <span className="text-sm text-muted">{p.nameEn}</span>
            </h2>
            <p className="mt-1 text-xs text-gold">
              {p.years} · {p.role}
              {p.portrayedBy ? ` · 영화: ${p.portrayedBy}` : ""}
            </p>
            <div className="mt-3 space-y-2">
              {p.body.map((t) => (
                <p key={t.slice(0, 30)} className="text-sm leading-7 text-paper/90">
                  {t}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
      <Sources sources={allSources} />
    </div>
  );
}
