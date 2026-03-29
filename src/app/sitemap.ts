import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://takehomehub.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/guides/tax/us`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/compare/youtube-tax-by-country`,
      lastModified: new Date(),
    },
  ];
}
