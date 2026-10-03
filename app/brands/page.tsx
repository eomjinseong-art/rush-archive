import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { sisterCarsForBrands } from "@/data/sisterCars";
import { brandGroups, brandSlug } from "@/lib/cars";
import { itemListLd, jsonLd, pageMetadata } from "@/lib/seo";
import { FILM_SHORT } from "@/lib/siteConfig";

export const metadata: Metadata = pageMetadata({
  title: `${FILM_SHORT} 자동차 브랜드`,
  description: `${FILM_SHORT}에 나온 자동차를 브랜드별로 모았습니다. 다른 영화 아카이브의 같은 브랜드 차도 함께 잇습니다.`,
  path: "/brands",
});

export default function BrandsPage() {
  const brands = brandGroups();
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <JsonLd
        data={jsonLd([
          itemListLd(
            `${FILM_SHORT} 자동차 브랜드`,
            "/brands",
            brands.map((entry) => ({ name: entry.brandKo, path: `/brands#${brandSlug(entry.brand)}` })),
          ),
        ])}
      />
      <h1 className="font-serif text-3xl text-paper">브랜드로 보기</h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
        {brands.length}개 브랜드. 차량이 많은 브랜드부터 적었습니다. 다른 영화 아카이브에 같은 브랜드 차가 있으면 함께 잇습니다.
      </p>
      <div className="mt-8 space-y-6">
        {brands.map((entry) => {
          const sisters = sisterCarsForBrands([entry.brand]);
          return (
            <section key={entry.brand} id={brandSlug(entry.brand)} className="scroll-mt-32 rounded-xl border border-line p-5">
              <h2 className="font-serif text-xl text-gold">
                {entry.brandKo}{" "}
                <span className="text-sm text-muted">
                  {entry.brand} · {entry.items.length}대
                </span>
              </h2>
              <ul className="mt-3 space-y-1.5 text-sm">
                {entry.items.map((car) => (
                  <li key={car.slug}>
                    <Link href={`/cars/${car.slug}`} className="text-paper hover:text-gold">
                      {car.nameKo}
                    </Link>
                    <span className="ml-2 text-xs text-muted">{car.inFilm}</span>
                  </li>
                ))}
              </ul>
              {sisters.length > 0 ? (
                <p className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted">
                  <span>다른 아카이브:</span>
                  {sisters.map((item) => (
                    <a key={item.href} href={item.href} className="underline decoration-line underline-offset-4 hover:text-gold">
                      {item.siteLabel} · {item.nameKo}
                    </a>
                  ))}
                </p>
              ) : null}
            </section>
          );
        })}
      </div>
    </div>
  );
}
