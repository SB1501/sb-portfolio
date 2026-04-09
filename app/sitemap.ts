import type { MetadataRoute } from "next";
import { getUpdates } from "@/lib/updates";

const baseUrl = "https://shanebunting.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/projects", "/cv"];
  const updateRoutes = getUpdates().map((update) => ({
    url: `${baseUrl}/updates/${update.slug}`,
    lastModified: new Date(update.date),
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
    })),
    ...updateRoutes,
  ];
}
