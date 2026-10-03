import { cars } from "@/data/cars";
import type { Car, CarKind, FilmUse } from "@/data/types";

export { cars };

export const FILM_USE_LABEL: Record<FilmUse, string> = {
  replica: "영화용 레플리카",
  real: "실제 차량",
  mixed: "실차 + 레플리카",
  "story-only": "실화에만 등장",
  unknown: "촬영 차량 미확인",
};

export const FILM_USE_HINT: Record<FilmUse, string> = {
  replica: "촬영에는 같은 모양으로 새로 만든 레플리카를 썼습니다.",
  real: "촬영에는 같은 차종의 실제 차를 썼습니다.",
  mixed: "촬영에는 실제 차와 레플리카를 섞어 썼습니다.",
  "story-only": "실제 이야기에 나오는 차입니다. 영화에서는 다른 차로 바뀌었거나 나오지 않습니다.",
  unknown: "촬영에 쓴 차가 실차인지 레플리카인지 확인하지 못했습니다.",
};

export const KINDS: CarKind[] = ["프로토타입 레이스카", "포뮬러 1", "GT 레이스카", "스포츠카", "로드카"];

export const kindTone: Record<CarKind, string> = {
  "프로토타입 레이스카": "linear-gradient(165deg,#10283a 0%,#0B0D10 55%,#3aa0c633 100%)",
  "포뮬러 1": "linear-gradient(165deg,#2a1410 0%,#0B0D10 55%,#c65e3233 100%)",
  "GT 레이스카": "linear-gradient(165deg,#241830 0%,#0B0D10 55%,#c6a75e33 100%)",
  스포츠카: "linear-gradient(165deg,#3a3418 0%,#0B0D10 55%,#C6A75E33 100%)",
  로드카: "linear-gradient(165deg,#102018 0%,#0B0D10 55%,#5e8a6a33 100%)",
};

export function getCar(slug: string) {
  return cars.find((car) => car.slug === slug);
}

export function brandSlug(brand: string) {
  return brand
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function sameBrandCars(car: Car) {
  const brands = new Set([car.brand, ...(car.relatedBrands ?? [])]);
  return cars.filter(
    (other) =>
      other.slug !== car.slug &&
      (brands.has(other.brand) || (other.relatedBrands ?? []).some((b) => b === car.brand)),
  );
}

export function brandGroups() {
  const map = new Map<string, { brand: string; brandKo: string; items: Car[] }>();
  for (const car of cars) {
    const group = map.get(car.brand) ?? { brand: car.brand, brandKo: car.brandKo, items: [] };
    group.items.push(car);
    map.set(car.brand, group);
  }
  return [...map.values()].sort((a, b) => b.items.length - a.items.length || a.brand.localeCompare(b.brand));
}
