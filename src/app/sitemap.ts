import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://takehomehub.com";

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/guides/tax/us`, lastModified: new Date() },
    { url: `${baseUrl}/guides/tax/germany`, lastModified: new Date() },
    { url: `${baseUrl}/guides/tax/canada`, lastModified: new Date() },
    { url: `${baseUrl}/guides/tax/uk`, lastModified: new Date() },
    { url: `${baseUrl}/guides/tax/india`, lastModified: new Date() },
    { url: `${baseUrl}/compare/youtube-tax-by-country`, lastModified: new Date() },
    { url: `${baseUrl}/compare/us-vs-germany-youtube-tax`, lastModified: new Date() },
    { url: `${baseUrl}/compare/us-vs-uk-youtube-tax`, lastModified: new Date() },
    { url: `${baseUrl}/calculators/youtube-earnings-after-tax`, lastModified: new Date() },
    { url: `${baseUrl}/guides/do-youtubers-pay-taxes-us`, lastModified: new Date() },
    { url: `${baseUrl}/glossary`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date() },
  ];
}
