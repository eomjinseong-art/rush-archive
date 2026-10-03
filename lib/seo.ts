import type { Metadata } from "next";
import { FILM } from "@/data/film";
import type { Car } from "@/data/types";
import { FILM_USE_LABEL } from "@/lib/cars";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { FILM_SHORT, OG_ALT } from "@/lib/siteConfig";

export const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: OG_ALT,
} as const;

export function canonicalUrl(path: string) {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function clip(text: string, max = 150) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, max - 1).trim()}…`;
}

export function pageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  /** 페이지 고유 사진(절대 URL). 없으면 사이트 기본 OG 이미지. */
  image?: { url: string; width: number; height: number; alt: string };
}): Metadata {
  const ogImages = image ? [image] : [OG_IMAGE];
  const isHome = path === "/" || path === "";
  const documentTitle = isHome ? SITE_NAME : `${title} · ${SITE_NAME}`;
  const url = canonicalUrl(path);
  const text = clip(description);
  return {
    title: isHome ? { absolute: SITE_NAME } : title,
    description: text,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "ko_KR",
      url,
      siteName: SITE_NAME,
      title: documentTitle,
      description: text,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: documentTitle,
      description: text,
      images: [image ? image.url : OG_IMAGE.url],
    },
  };
}

export function carSeoTitle(car: Pick<Car, "nameKo">) {
  return `${FILM_SHORT} 차 · ${car.nameKo}`;
}

export function carSeoDescription(car: Car) {
  return clip(`${FILM_SHORT}(${FILM.year})의 ${car.nameKo}(${car.nameEn}). ${FILM_USE_LABEL[car.filmUse]}. ${car.oneLiner}`);
}

type Crumb = { name: string; path: string };

export function breadcrumbLd(items: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

export function itemListLd(name: string, path: string, items: { name: string; path: string }[]) {
  return {
    "@type": "ItemList",
    name,
    url: canonicalUrl(path),
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: canonicalUrl(item.path),
    })),
  };
}

export function websiteLd(description: string) {
  return {
    "@type": "WebSite",
    name: SITE_NAME,
    url: canonicalUrl("/"),
    inLanguage: "ko",
    description,
  };
}

export function movieLd() {
  const minutes = /^(\d+)/.exec(FILM.runtime)?.[1];
  return {
    "@type": "Movie",
    name: FILM.titleKo,
    alternateName: [FILM.titleEn, ...FILM.altTitles],
    datePublished: FILM.releases[0]?.date ?? String(FILM.year),
    ...(minutes ? { duration: `PT${minutes}M` } : {}),
    director: { "@type": "Person", name: FILM.directorEn },
    actor: FILM.cast.slice(0, 6).map((c) => ({ "@type": "Person", name: c.actor })),
    description: FILM.synopsis[0],
    url: canonicalUrl("/film"),
    inLanguage: "ko",
  };
}

/** Thing, not Product: this archive does not sell the car. */
export function carThingLd(car: Car, imageUrl?: string) {
  return {
    "@type": "Thing",
    additionalType: "https://schema.org/Vehicle",
    name: car.nameKo,
    alternateName: car.nameEn,
    description: car.oneLiner,
    url: canonicalUrl(`/cars/${car.slug}`),
    brand: { "@type": "Brand", name: car.brandKo },
    ...(imageUrl ? { image: imageUrl } : {}),
  };
}

export function jsonLd(nodes: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
