import type { MetadataRoute } from "next";
import { cars } from "@/lib/cars";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/film", "/people", "/races", "/cars", "/brands", "/sources", ...cars.map((car) => `/cars/${car.slug}`)];
  return paths.map((path) => ({ url: `${SITE_URL}${path}`, changeFrequency: "monthly", priority: path === "" ? 1 : 0.7 }));
}
