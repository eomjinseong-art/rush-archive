import { ARCHIVES, type ArchiveId } from "@/lib/network";
import { SITE_ID, archiveNetworkUrl } from "@/lib/site";
import { SISTER_CARS } from "@/data/sisterCarList";

export type SisterCarLink = {
  brand: string;
  siteLabel: string;
  nameKo: string;
  nameEn: string;
  href: string;
};

export type SisterCar = {
  site: ArchiveId;
  brand: string;
  slug: string;
  nameKo: string;
  nameEn: string;
};

export function sisterCarsForBrands(brands: string[]): SisterCarLink[] {
  const wanted = new Set(brands);
  return SISTER_CARS.filter((car) => car.site !== SITE_ID && wanted.has(car.brand)).map((car) => {
    const archive = ARCHIVES.find((a) => a.id === car.site)!;
    return {
      brand: car.brand,
      siteLabel: archive.label,
      nameKo: car.nameKo,
      nameEn: car.nameEn,
      href: archiveNetworkUrl(archive.url, `/cars/${car.slug}`, "car"),
    };
  });
}
