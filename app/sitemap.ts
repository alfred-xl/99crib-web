import type { MetadataRoute } from "next";
import { siteUrl } from "./seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    "/how-it-works",
    "/accommodations",
    "/about",
    "/contact",
    "/safety",
    "/landlords",
    "/faq",
    "/careers",
    "/press",
  ].map((path) => ({ url: new URL(path, siteUrl).toString() }));
}
