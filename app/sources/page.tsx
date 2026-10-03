import type { Metadata } from "next";
import Link from "next/link";
import { ImageCredit } from "@/components/ImageCredit";
import { carPhotos } from "@/data/carPhotos";
import { FILM } from "@/data/film";
import { cars } from "@/lib/cars";
import { pageMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";
import { MISSING_PHOTO_NOTES, SOURCE_NOTES } from "@/lib/siteConfig";

export const metadata: Metadata = pageMetadata({
  title: "출처와 기준",
  description: `${SITE_NAME}가 사실을 확인한 방법과 참고 자료, 차량 사진의 저작자·라이선스·출처. 자료끼리 다르면 어떻게 적는지 설명합니다.`,
  path: "/sources",
});

export default function SourcesPage() {
  const withPhoto = cars.filter((car) => carPhotos[car.slug]);
  const withoutPhoto = cars.filter((car) => !carPhotos[car.slug]);
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 text-sm leading-7 text-paper">
      <h1 className="font-serif text-3xl">출처와 기준</h1>
      <h2 className="mt-8 font-serif text-xl text-gold">어떻게 확인했나</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        <li>영화 정보와 출연진은 영어 위키백과의 영화 문서를 기본으로 삼았습니다.</li>
        <li>실제 인물·레이스·차량은 각 위키백과 문서, 제조사 자료, 모터스포츠 매체 기사로 맞춰 보았습니다.</li>
        <li>촬영에 쓴 차는 IMCDb(Internet Movie Cars Database) 목록과 촬영 차량을 다룬 자동차 매체 기사를 참고했습니다.</li>
        <li>자료끼리 날짜·순위·차종이 다르면 확실한 부분만 본문에 쓰고, &lsquo;자료 차이&rsquo; 칸에 양쪽을 함께 적습니다.</li>
        {SOURCE_NOTES.map((note) => (
          <li key={note.slice(0, 30)}>{note}</li>
        ))}
      </ul>
      <h2 className="mt-8 font-serif text-xl text-gold">사진</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        <li>포스터, 영화 스틸, 스크린숏, 홍보 이미지는 쓰지 않습니다. 촬영용 레플리카를 찍은 사진도 쓰지 않습니다.</li>
        <li>
          차량 사진은 위키미디어 공용에 올라온 같은 차종의 실제 차량 사진 가운데 CC BY, CC BY-SA, CC0, 퍼블릭 도메인인 것만 씁니다.
          크기만 줄이고 WebP로 바꿨습니다.
        </li>
        <li>사진 속 차가 영화나 실화 속 바로 그 차(같은 차대 번호)라는 뜻은 아닙니다. 다르면 &lsquo;참고&rsquo;로 적습니다.</li>
        <li>맞는 자유 이용 사진이 없는 차는 색 배경으로 둡니다.</li>
      </ul>

      <h3 className="mt-6 font-serif text-lg text-paper">
        차량 사진 출처 <span className="text-sm text-muted">({withPhoto.length}/{cars.length}대)</span>
      </h3>
      <ul className="mt-3 divide-y divide-line rounded-lg border border-line">
        {withPhoto.map((car) => (
          <li key={car.slug} className="px-4 py-3">
            <Link href={`/cars/${car.slug}`} className="text-paper hover:text-gold">
              {car.nameKo}
            </Link>
            <ImageCredit image={carPhotos[car.slug]} as="p" />
          </li>
        ))}
      </ul>

      {withoutPhoto.length > 0 ? (
        <>
          <h3 className="mt-6 font-serif text-lg text-paper">
            사진 없이 색 배경으로 둔 차 <span className="text-sm text-muted">({withoutPhoto.length}대)</span>
          </h3>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            {withoutPhoto.map((car) => (
              <li key={car.slug}>
                <Link href={`/cars/${car.slug}`} className="hover:text-gold">
                  {car.nameKo}
                </Link>
                {MISSING_PHOTO_NOTES[car.slug] ? <span className="text-muted"> — {MISSING_PHOTO_NOTES[car.slug]}</span> : null}
              </li>
            ))}
          </ul>
        </>
      ) : null}

      <h2 className="mt-8 font-serif text-xl text-gold">주요 자료</h2>
      <ul className="mt-3 space-y-1">
        {FILM.sources.map((s) => (
          <li key={s.href}>
            <a href={s.href} className="text-muted underline decoration-line underline-offset-4 hover:text-gold" target="_blank" rel="noopener noreferrer">
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
