import { notFound } from "next/navigation";
import { getGuideBySlug, getAllGuides } from "@/lib/markdown";
import CountryLinks from "@/components/CountryLinks";
import Disclaimer from "@/components/Disclaimer";

export async function generateStaticParams() {
  const slugs = getAllGuides();
  return slugs.map((slug) => ({ country: slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;
  const guide = await getGuideBySlug(country);

  if (!guide) {
    notFound();
  }

  const { contentHtml, frontmatter } = guide;

  return (
    <main className="prose mx-auto py-10 px-4">
      <h1>{frontmatter.title}</h1>
      <p className="text-sm text-gray-500">
        Last updated: {frontmatter.lastUpdated}
      </p>

      <article dangerouslySetInnerHTML={{ __html: contentHtml }} />

      <CountryLinks currentCountry={frontmatter.country} />

      <Disclaimer />
    </main>
  );
}
