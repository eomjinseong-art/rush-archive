import { ARCHIVES, getArchive, type ArchiveId } from "@/lib/network";
import {
  CAMPAIGN,
  DEFAULT_SITE_URL,
  SITE_ID,
  SITE_SLUG,
} from "@/lib/siteConfig";

export {
  SITE_ID,
  SITE_SLUG,
  SITE_NAME,
  SITE_EN,
  SITE_TAGLINE,
  SITE_SUB,
  FAN_SITE_DISCLAIMER,
  CAMPAIGN,
} from "@/lib/siteConfig";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;

export const SISTER_SITE_URL =
  process.env.NEXT_PUBLIC_SISTER_SITE_URL ?? "https://car-parts-cpang.vercel.app";

export const AUTOPIX_LABEL = "오토픽스";
export const CAR_CTA_LABEL = "이 차량 용품 보러 가기 · 오토픽스";

export const NAV = [
  { href: "/", label: "홈" },
  { href: "/film", label: "영화" },
  { href: "/people", label: "실존 인물" },
  { href: "/races", label: "레이스" },
  { href: "/cars", label: "차량" },
  { href: "/brands", label: "브랜드" },
  { href: "/sources", label: "출처" },
] as const;

export type NetworkMedium = "header" | "footer" | "home" | "car";

function withUtm(
  base: string,
  path = "/",
  opts?: { medium?: string; campaign?: string; content?: string },
) {
  const url = new URL(path, base);
  url.searchParams.set("utm_source", SITE_SLUG);
  url.searchParams.set("utm_medium", opts?.medium ?? "header");
  url.searchParams.set("utm_campaign", opts?.campaign ?? CAMPAIGN);
  if (opts?.content) url.searchParams.set("utm_content", opts.content);
  return url.toString();
}

export function archiveNetworkUrl(base: string, path = "/", medium: NetworkMedium = "header") {
  return withUtm(base, path, { medium, campaign: "archive-network" });
}

/** 이 사이트를 뺀 나머지 아카이브. */
export function otherArchives() {
  return ARCHIVES.filter((a) => a.id !== SITE_ID);
}

export function archiveUrl(id: ArchiveId, medium: NetworkMedium = "header") {
  return archiveNetworkUrl(getArchive(id).url, "/", medium);
}

export function sisterUrl(
  path = "/",
  opts?: { medium?: string; campaign?: string; content?: string },
) {
  return withUtm(SISTER_SITE_URL, path, opts);
}

export function autopixUrl(medium: "header" | "footer" | "home" = "header") {
  return sisterUrl("/", { medium, campaign: CAMPAIGN });
}

/**
 * 차량 CTA. 오토픽스는 정적 단일 페이지라 카테고리·검색을 URL로 받지 않습니다.
 * 그래서 홈으로 보내고, 어느 차에서 왔는지는 utm_content=차량 slug로 남깁니다.
 */
export function carCta(content?: string) {
  return sisterUrl("/", { medium: "cta", campaign: CAMPAIGN, content });
}

/** 오토픽스 관리 가이드 (정적 페이지, HTTP 200 확인). */
export const AUTOPIX_GUIDES = {
  wash: { path: "/wiki/01-wash.html", label: "셀프 세차 기본 세트" },
  maintain: { path: "/wiki/02-maintain.html", label: "주기적으로 가는 소모품" },
  cabin: { path: "/wiki/03-cabin.html", label: "실내를 편하게" },
  electro: { path: "/wiki/04-electro.html", label: "거치·충전·하이패스" },
  safety: { path: "/wiki/05-safety.html", label: "트렁크에 둘 안전 용품" },
} as const;

export type AutopixGuideId = keyof typeof AUTOPIX_GUIDES;

export function autopixGuideUrl(id: AutopixGuideId, content?: string) {
  return sisterUrl(AUTOPIX_GUIDES[id].path, { medium: "cta", campaign: CAMPAIGN, content });
}
