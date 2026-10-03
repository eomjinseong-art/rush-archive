import Link from "next/link";
import { FilmUseBadge } from "@/components/FilmUseBadge";
import { ImageCredit } from "@/components/ImageCredit";
import { SafeImage } from "@/components/SafeImage";
import { carPhoto } from "@/data/carPhotos";
import type { Car } from "@/data/types";
import { kindTone } from "@/lib/cars";

export function CarCard({ car }: { car: Car }) {
  const photo = carPhoto(car.slug);
  return (
    <Link
      href={`/cars/${car.slug}`}
      className="group flex h-full flex-col rounded-lg border border-line p-4 transition-colors hover:border-gold/60"
      style={{ backgroundImage: kindTone[car.kind] }}
    >
      {photo ? (
        <div className="-mx-1 -mt-1 mb-3">
          <div className="relative aspect-video overflow-hidden rounded-md" style={{ background: kindTone[car.kind] }}>
            <SafeImage
              src={photo.src}
              alt={photo.alt}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              objectPosition={photo.objectPosition}
            />
          </div>
          <ImageCredit image={photo} compact plain as="p" />
        </div>
      ) : (
        <div
          className="-mx-1 -mt-1 mb-3 flex aspect-video items-end rounded-md border border-line/60 p-3"
          style={{ background: kindTone[car.kind] }}
        >
          <span className="font-serif text-sm text-gold/80">{car.nameEn}</span>
        </div>
      )}
      <div className="flex flex-wrap items-center gap-2">
        <FilmUseBadge use={car.filmUse} />
        <span className="text-[11px] text-muted">{car.kind}</span>
      </div>
      <p className="mt-3 font-serif text-lg leading-snug text-paper group-hover:text-gold">{car.nameKo}</p>
      <p className="mt-0.5 text-[11px] text-muted">{car.nameEn}</p>
      <p className="mt-3 line-clamp-3 text-xs leading-5 text-muted">{car.oneLiner}</p>
      <p className="mt-auto pt-3 text-[11px] tracking-wide text-gold/80">{car.era}</p>
    </Link>
  );
}
