import type { MetadataRoute } from "next";
import { siteMeta } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteMeta.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
