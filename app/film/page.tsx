import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Sources } from "@/components/Sources";
import { FILM } from "@/data/film";
import { breadcrumbLd, jsonLd, movieLd, pageMetadata } from "@/lib/seo";
import { FILM_PAGE_DESCRIPTION } from "@/lib/siteConfig";

export const metadata: Metadata = pageMetadata({
  title: `${FILM.titleKo} (${FILM.year}) 영화 정보와 실화`,
  description: FILM_PAGE_DESCRIPTION,
  path: "/film",
});

const verdictTone: Record<string, string> = {
  "사실에 가까움": "text-emerald-300 border-emerald-400/40",
  각색: "text-gold border-gold/50",
  창작: "text-rose-300 border-rose-400/40",
  "시간 압축": "text-sky-300 border-sky-400/40",
  "확인 안 됨": "text-muted border-line",
};

export default function FilmPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "영화", path: "/film" },
          ]),
          movieLd(),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "영화" }]} />
      <header className="mt-5 rounded-2xl border border-line bg-[radial-gradient(circle_at_top_left,#C6A75E22,transparent_60%)] p-6 sm:p-8">
        <p className="text-[11px] uppercase tracking-[0.22em] text-gold">{FILM.titleEn}</p>
        <h1 className="mt-2 font-serif text-3xl leading-tight text-paper sm:text-4xl">
          《{FILM.titleKo}》 <span className="text-muted">({FILM.year})</span>
        </h1>
        {FILM.altTitles.length > 0 ? (
          <p className="mt-2 text-xs text-muted">다른 제목: {FILM.altTitles.join(" · ")}</p>
        ) : null}
        <div className="mt-4 space-y-3">
          {FILM.synopsis.map((p) => (
            <p key={p.slice(0, 30)} className="text-sm leading-7 text-paper">
              {p}
            </p>
          ))}
        </div>
      </header>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">영화 정보</h2>
        <dl className="mt-3 divide-y divide-line rounded-lg border border-line text-sm">
          {[
            ["감독", `${FILM.directorKo} (${FILM.directorEn})`],
            ["각본", FILM.writers],
            ["개봉", FILM.releases.map((r) => `${r.label} ${r.date}`).join(" · ")],
            ["상영 시간", FILM.runtime],
            ["배급", FILM.distributor],
            ["제작비", FILM.budget],
            ["흥행 수입", FILM.boxOffice],
            ["수상", FILM.awards],
          ].map(([k, v]) => (
            <div key={k} className="flex gap-3 px-4 py-3">
              <dt className="w-20 shrink-0 text-muted">{k}</dt>
              <dd className="text-paper">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">출연진</h2>
        <div className="mt-3 overflow-x-auto rounded-lg border border-line">
          <table className="w-full text-left text-sm">
            <thead className="bg-card text-xs text-muted">
              <tr>
                <th className="px-4 py-2 font-normal">배우</th>
                <th className="px-4 py-2 font-normal">배역</th>
                <th className="px-4 py-2 font-normal">메모</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {FILM.cast.map((c) => (
                <tr key={c.actor + c.role}>
                  <td className="px-4 py-2 align-top text-paper">
                    {c.actorKo}
                    <span className="block text-[11px] text-muted">{c.actor}</span>
                  </td>
                  <td className="px-4 py-2 align-top text-paper">
                    {c.roleKo}
                    <span className="block text-[11px] text-muted">{c.role}</span>
                  </td>
                  <td className="px-4 py-2 align-top text-xs leading-5 text-muted">{c.note ?? ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-muted">
          실존 인물의 실제 삶은 <Link href="/people" className="text-gold">실존 인물</Link> 페이지에 따로 적었습니다.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">제작과 촬영</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-paper">
          {FILM.production.map((p) => (
            <li key={p.slice(0, 30)}>{p}</li>
          ))}
        </ul>
      </section>

      <section id="truth" className="mt-10 scroll-mt-32">
        <h2 className="font-serif text-2xl text-gold">실화 vs 영화</h2>
        <p className="mt-2 text-sm leading-6 text-muted">
          영화는 실화를 바탕으로 하지만 극적 효과를 위해 사건을 합치거나 순서를 바꾸고, 없던 장면을 넣었습니다.
        </p>
        <ol className="mt-5 space-y-4">
          {FILM.truth.map((item, i) => (
            <li key={item.topic} className="rounded-lg border border-line bg-card p-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-serif text-gold/70">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-serif text-lg text-paper">{item.topic}</h3>
                <span className={`rounded-full border px-2 py-0.5 text-[11px] ${verdictTone[item.verdict]}`}>
                  {item.verdict}
                </span>
              </div>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <p className="text-sm leading-7 text-paper/90">
                  <span className="mr-1 text-xs text-muted">영화</span>
                  {item.film}
                </p>
                <p className="text-sm leading-7 text-paper/90">
                  <span className="mr-1 text-xs text-gold">실제</span>
                  {item.real}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {FILM.differences.length > 0 ? (
        <section className="mt-8 rounded-lg border border-line bg-card p-5">
          <h2 className="font-serif text-lg text-gold">자료 차이</h2>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-xs leading-6 text-muted">
            {FILM.differences.map((d) => (
              <li key={d.slice(0, 30)}>{d}</li>
            ))}
          </ul>
        </section>
      ) : null}

      <Sources sources={FILM.sources} />
    </article>
  );
}
