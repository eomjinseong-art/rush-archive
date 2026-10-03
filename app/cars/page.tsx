import type { Metadata } from "next";
import { AutopixBanner } from "@/components/AutopixBanner";
import { CarExplorer } from "@/components/CarExplorer";
import { JsonLd } from "@/components/JsonLd";
import { cars } from "@/lib/cars";
import { itemListLd, jsonLd, pageMetadata } from "@/lib/seo";
import { CARS_INTRO, CARS_TITLE } from "@/lib/siteConfig";

export const metadata: Metadata = pageMetadata({
  title: CARS_TITLE,
  description: `${CARS_INTRO} 모두 ${cars.length}대.`,
  path: "/cars",
});

export default function CarsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd
        data={jsonLd([
          itemListLd(
            CARS_TITLE,
            "/cars",
            cars.map((car) => ({ name: car.nameKo, path: `/cars/${car.slug}` })),
          ),
        ])}
      />
      <h1 className="font-serif text-3xl text-paper">{CARS_TITLE}</h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
        {CARS_INTRO} 모두 {cars.length}대입니다. 카드의 배지는 촬영에 쓴 차가 실제 차인지, 영화용 레플리카인지,
        실화에만 나오는 차인지를 뜻합니다.
      </p>
      <div className="mt-6">
        <AutopixBanner content="cars" />
      </div>
      <div className="mt-8">
        <CarExplorer />
      </div>
    </div>
  );
}
