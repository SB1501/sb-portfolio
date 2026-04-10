import type { MetadataRoute } from "next";
import { getUpdates } from "@/lib/updates";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/projects", "/cv"];
  const updateRoutes = getUpdates().map((update) => ({
    url: `${SITE_URL}/updates/${update.slug}`,
    lastModified: new Date(update.date),
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: new Date(),
    })),
    ...updateRoutes,
  ];
}
