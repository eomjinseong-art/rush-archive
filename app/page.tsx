import Link from "next/link";
import type { Metadata } from "next";
import { AutopixBanner } from "@/components/AutopixBanner";
import { CarCard } from "@/components/CarCard";
import { JsonLd } from "@/components/JsonLd";
import { FILM } from "@/data/film";
import { people } from "@/data/people";
import { races } from "@/data/races";
import { brandGroups, brandSlug, cars } from "@/lib/cars";
import { jsonLd, movieLd, pageMetadata, websiteLd } from "@/lib/seo";
import { SITE_EN, SITE_NAME, SITE_SUB, SITE_TAGLINE, archiveNetworkUrl, otherArchives } from "@/lib/site";
import { FEATURED, HOME_HEADLINE } from "@/lib/siteConfig";

export const metadata: Metadata = pageMetadata({
  title: SITE_NAME,
  description: `${SITE_TAGLINE}. ${SITE_SUB}`,
  path: "/",
});

export default function HomePage() {
  const featured = FEATURED.map((slug) => cars.find((car) => car.slug === slug)).filter(
    (car): car is (typeof cars)[number] => Boolean(car),
  );
  const brands = brandGroups();

  return (
    <div>
      <JsonLd data={jsonLd([websiteLd(`${SITE_TAGLINE}. ${SITE_SUB}`), movieLd()])} />
      <section className="border-b border-line bg-[radial-gradient(circle_at_20%_0%,#C6A75E22,transparent_55%)]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <p className="text-[11px] uppercase tracking-[0.26em] text-gold">{SITE_EN}</p>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-paper sm:text-5xl">
            {HOME_HEADLINE[0]}
            <br />
            {HOME_HEADLINE[1]}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-paper/90">{SITE_TAGLINE}.</p>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-muted">{SITE_SUB}</p>
          <dl className="mt-8 grid max-w-2xl grid-cols-2 gap-3 text-center sm:grid-cols-4">
            <div className="rounded-lg border border-line bg-card/70 p-3">
              <dt className="text-[11px] text-muted">개봉</dt>
              <dd className="mt-1 font-serif text-2xl text-gold">{FILM.year}</dd>
            </div>
            <div className="rounded-lg border border-line bg-card/70 p-3">
              <dt className="text-[11px] text-muted">차량</dt>
              <dd className="mt-1 font-serif text-2xl text-gold">{cars.length}대</dd>
            </div>
            <div className="rounded-lg border border-line bg-card/70 p-3">
              <dt className="text-[11px] text-muted">실존 인물</dt>
              <dd className="mt-1 font-serif text-2xl text-gold">{people.length}명</dd>
            </div>
            <div className="rounded-lg border border-line bg-card/70 p-3">
              <dt className="text-[11px] text-muted">레이스</dt>
              <dd className="mt-1 font-serif text-2xl text-gold">{races.length}개</dd>
            </div>
          </dl>
          <p className="mt-6 text-sm text-muted">
            《{FILM.titleKo}》({FILM.titleEn}, {FILM.year}) · 감독 {FILM.directorKo} · {FILM.runtime}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link href="/cars" className="rounded-full bg-gold px-4 py-2 font-medium text-bg hover:bg-gold-dim">
              차량 전체 보기
            </Link>
            <Link href="/film" className="rounded-full border border-line px-4 py-2 text-paper hover:border-gold/60">
              실화와 영화 비교
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-end justify-between gap-3">
          <h2 className="font-serif text-2xl text-paper">대표 차량</h2>
          <Link href="/cars" className="text-sm text-muted hover:text-gold">
            {cars.length}대 전체 →
          </Link>
        </div>
        <p className="mt-2 text-sm text-muted">
          카드마다 촬영에 쓴 차가 실제 차인지 영화용 레플리카인지 표시했습니다.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((car) => (
            <CarCard key={car.slug} car={car} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="flex items-end justify-between gap-3">
          <h2 className="font-serif text-2xl text-paper">실화 vs 영화</h2>
          <Link href="/film#truth" className="text-sm text-muted hover:text-gold">
            {FILM.truth.length}가지 전체 →
          </Link>
        </div>
        <ul className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
          {FILM.truth.slice(0, 3).map((item) => (
            <li key={item.topic} className="rounded-lg border border-line bg-card p-4">
              <p className="text-[11px] text-gold">{item.verdict}</p>
              <h3 className="mt-1 font-serif text-lg text-paper">{item.topic}</h3>
              <p className="mt-2 text-xs leading-6 text-muted">
                <span className="text-paper/80">영화</span> {item.film}
              </p>
              <p className="mt-1 text-xs leading-6 text-muted">
                <span className="text-paper/80">실제</span> {item.real}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-12 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-2xl text-paper">실존 인물</h2>
          <ul className="mt-4 divide-y divide-line rounded-lg border border-line">
            {people.slice(0, 6).map((person) => (
              <li key={person.id}>
                <Link href={`/people#${person.id}`} className="block px-4 py-3 hover:bg-card">
                  <span className="text-sm text-paper">{person.nameKo}</span>
                  <span className="ml-2 text-xs text-muted">{person.role}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/people" className="mt-3 inline-block text-sm text-gold">
            {people.length}명 전체 →
          </Link>
        </div>
        <div>
          <h2 className="font-serif text-2xl text-paper">레이스와 서킷</h2>
          <ul className="mt-4 divide-y divide-line rounded-lg border border-line">
            {races.slice(0, 6).map((race) => (
              <li key={race.id}>
                <Link href={`/races#${race.id}`} className="block px-4 py-3 hover:bg-card">
                  <span className="text-sm text-paper">{race.nameKo}</span>
                  <span className="ml-2 text-xs text-muted">{race.date}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/races" className="mt-3 inline-block text-sm text-gold">
            {races.length}개 전체 →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="font-serif text-2xl text-paper">브랜드로 보기</h2>
        <ul className="mt-5 flex flex-wrap gap-2">
          {brands.map((entry) => (
            <li key={entry.brand}>
              <Link
                href={`/brands#${brandSlug(entry.brand)}`}
                className="inline-block rounded-full border border-line px-3 py-1.5 text-sm text-paper hover:border-gold/60 hover:text-gold"
              >
                {entry.brandKo} <span className="text-muted">{entry.items.length}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <AutopixBanner content="home" />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <p className="text-[11px] uppercase tracking-[0.18em] text-gold">영화 속 자동차</p>
        <h2 className="mt-2 font-serif text-2xl text-paper">다른 영화 아카이브</h2>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {otherArchives().map((site) => (
            <a
              key={site.id}
              href={archiveNetworkUrl(site.url, "/", "home")}
              className="rounded-xl border border-line bg-card p-5 hover:border-gold/60"
            >
              <h3 className="font-serif text-lg text-paper">{site.label}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{site.blurb}</p>
              <p className="mt-3 text-sm text-gold">아카이브 열기 →</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
