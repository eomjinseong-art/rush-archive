import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CreditedMedia } from "@/components/CreditedMedia";
import { FilmUseBadge } from "@/components/FilmUseBadge";
import { JsonLd } from "@/components/JsonLd";
import { SameBrandCars } from "@/components/SameBrandCars";
import { SisterCta } from "@/components/SisterCta";
import { Sources } from "@/components/Sources";
import { carPhoto } from "@/data/carPhotos";
import { FILM_USE_HINT, brandSlug, cars, getCar, kindTone } from "@/lib/cars";
import { breadcrumbLd, carSeoDescription, carSeoTitle, carThingLd, jsonLd, pageMetadata } from "@/lib/seo";
import { AUTOPIX_GUIDES, CAR_CTA_LABEL, SITE_URL, autopixGuideUrl } from "@/lib/site";
import { CAR_CTA_LINE, FILM_SHORT } from "@/lib/siteConfig";

export function generateStaticParams() {
  return cars.map((car) => ({ slug: car.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const car = getCar(slug);
  if (!car) return { title: "차량" };
  const photo = carPhoto(car.slug);
  return pageMetadata({
    title: carSeoTitle(car),
    description: carSeoDescription(car),
    path: `/cars/${car.slug}`,
    image: photo
      ? { url: `${SITE_URL}${photo.src}`, width: photo.width, height: photo.height, alt: photo.alt }
      : undefined,
  });
}

export default async function CarPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const car = getCar(slug);
  if (!car) notFound();
  const guide = AUTOPIX_GUIDES[car.guide];
  const photo = carPhoto(car.slug);

  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "차량", path: "/cars" },
            { name: car.nameKo, path: `/cars/${car.slug}` },
          ]),
          carThingLd(car, photo ? `${SITE_URL}${photo.src}` : undefined),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/cars", label: "차량" }, { label: car.nameKo }]} />

      <header className="mt-5 rounded-2xl border border-line bg-[radial-gradient(circle_at_top_left,#C6A75E22,transparent_60%)] p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <FilmUseBadge use={car.filmUse} />
          <span className="rounded-full border border-gold/40 px-2 py-0.5 text-[11px] text-gold">{car.kind}</span>
          <span className="text-[11px] text-muted">{car.era}</span>
        </div>
        <h1 className="mt-4 font-serif text-3xl leading-tight text-paper">{car.nameKo}</h1>
        <p className="mt-1 text-sm text-muted">{car.nameEn}</p>
        <p className="mt-4 text-base leading-relaxed text-paper">{car.oneLiner}</p>
      </header>

      <section className="mt-6" aria-label="실제 차량 사진">
        <CreditedMedia
          image={photo}
          tone={kindTone[car.kind]}
          alt={photo?.alt ?? `${car.nameKo} 색 배경`}
          aspectClass="aspect-[16/10]"
          sizes="(max-width: 768px) 100vw, 768px"
          compactCredit={false}
          priority
        />
        {photo ? (
          <p className="mt-1 text-[11px] leading-5 text-muted">
            영화 장면이나 촬영용 레플리카가 아니라 같은 차종의 실제 차량 사진입니다. 색·번호·세부 사양은 영화 속 차와 다를 수 있습니다.
          </p>
        ) : (
          <p className="mt-2 text-[11px] leading-5 text-muted">
            자유 이용 라이선스로 쓸 수 있는 실제 차량 사진을 찾지 못해 색 배경으로 둡니다.
          </p>
        )}
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">한눈에</h2>
        <dl className="mt-3 divide-y divide-line rounded-lg border border-line text-sm">
          <div className="flex gap-3 px-4 py-3">
            <dt className="w-24 shrink-0 text-muted">브랜드</dt>
            <dd>
              <Link href={`/brands#${brandSlug(car.brand)}`} className="text-paper hover:text-gold">
                {car.brandKo} ({car.brand})
              </Link>
            </dd>
          </div>
          <div className="flex gap-3 px-4 py-3">
            <dt className="w-24 shrink-0 text-muted">영화 속 역할</dt>
            <dd className="text-paper">{car.inFilm}</dd>
          </div>
          <div className="flex gap-3 px-4 py-3">
            <dt className="w-24 shrink-0 text-muted">촬영 차량</dt>
            <dd className="text-paper">
              {car.filmCar}
              <span className="mt-1 block text-[11px] text-muted">{FILM_USE_HINT[car.filmUse]}</span>
            </dd>
          </div>
          <div className="flex gap-3 px-4 py-3">
            <dt className="w-24 shrink-0 text-muted">실제 역사</dt>
            <dd className="text-paper">{car.history}</dd>
          </div>
        </dl>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="font-serif text-xl text-gold">{FILM_SHORT} 속 이 차</h2>
        {car.body.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className="text-sm leading-7 text-paper">
            {paragraph}
          </p>
        ))}
        {car.uncertain ? (
          <p className="rounded-lg border border-line bg-card p-4 text-xs leading-6 text-muted">
            <span className="mr-1 text-gold">자료 차이</span>
            {car.uncertain}
          </p>
        ) : null}
      </section>

      <div className="mt-8 rounded-lg border border-gold/50 bg-card p-5">
        <p className="text-sm leading-7 text-paper">{CAR_CTA_LINE}</p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <SisterCta label={CAR_CTA_LABEL} content={car.slug} />
          <a
            href={autopixGuideUrl(car.guide, car.slug)}
            className="text-sm text-muted underline decoration-line underline-offset-4 hover:text-gold"
          >
            오토픽스 가이드 · {guide.label}
          </a>
        </div>
      </div>

      <SameBrandCars car={car} />

      <p className="mt-8 text-sm">
        <Link href="/cars" className="text-gold">
          차량 전체 →
        </Link>
      </p>

      <Sources sources={car.sources} />
    </article>
  );
}
