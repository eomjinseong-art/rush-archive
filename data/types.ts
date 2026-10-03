import type { AutopixGuideId } from "@/lib/site";

export type Source = {
  label: string;
  href: string;
};

export type LicensedImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  author: string;
  license: string;
  licenseUrl: string;
  sourceUrl: string;
  sourceLabel: string;
  objectPosition?: string;
  /** 영화 속 차와 같은 개체·세부 사양이 아닐 때 붙이는 메모. */
  referenceNote?: string;
};

export type CarKind = "프로토타입 레이스카" | "GT 레이스카" | "포뮬러 1" | "로드카" | "스포츠카";

/**
 * 영화 촬영에 쓴 차가 무엇이었는지.
 * replica: 영화용 레플리카 / real: 실제 차(같은 차종의 진짜 차) / mixed: 실차와 레플리카 함께
 * story-only: 실화에만 나오고 영화에서는 다른 차로 바뀜 / unknown: 확인 못 함
 */
export type FilmUse = "replica" | "real" | "mixed" | "story-only" | "unknown";

export type Car = {
  slug: string;
  nameKo: string;
  nameEn: string;
  brand: string;
  brandKo: string;
  relatedBrands?: string[];
  kind: CarKind;
  /** 대표 연식 또는 시기 */
  era: string;
  filmUse: FilmUse;
  /** 영화에서 누가, 어디서 */
  inFilm: string;
  /** 촬영에 실제로 쓴 차 */
  filmCar: string;
  /** 실제 역사 속 이 차 */
  history: string;
  oneLiner: string;
  body: string[];
  uncertain?: string;
  guide: AutopixGuideId;
  featured?: boolean;
  sources: Source[];
};

export type CastMember = {
  actor: string;
  actorKo: string;
  role: string;
  roleKo: string;
  note?: string;
};

export type TruthItem = {
  topic: string;
  film: string;
  real: string;
  verdict: "사실에 가까움" | "각색" | "창작" | "시간 압축" | "확인 안 됨";
};

export type Film = {
  titleKo: string;
  titleEn: string;
  altTitles: string[];
  year: number;
  releases: { label: string; date: string }[];
  directorKo: string;
  directorEn: string;
  writers: string;
  runtime: string;
  distributor: string;
  budget: string;
  boxOffice: string;
  awards: string;
  synopsis: string[];
  production: string[];
  cast: CastMember[];
  truth: TruthItem[];
  /** 자료 차이 */
  differences: string[];
  sources: Source[];
};

export type Person = {
  id: string;
  nameKo: string;
  nameEn: string;
  years: string;
  role: string;
  portrayedBy?: string;
  body: string[];
  sources: Source[];
};

export type Race = {
  id: string;
  nameKo: string;
  nameEn: string;
  date: string;
  circuitKo: string;
  inFilm: string;
  real: string;
  result?: string;
  sources: Source[];
};
