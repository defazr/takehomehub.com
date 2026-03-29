import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getGuideBySlug, getAllGuides } from "@/lib/markdown";
import CountryLinks from "@/components/CountryLinks";
import Disclaimer from "@/components/Disclaimer";
import ScenarioCard from "@/components/ScenarioCard";
import FAQAccordion from "@/components/FAQAccordion";

export async function generateStaticParams() {
  const slugs = getAllGuides();
  return slugs.map((slug) => ({ country: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}): Promise<Metadata> {
  const { country } = await params;
  const guide = await getGuideBySlug(country);

  if (!guide) {
    return { title: "Not Found" };
  }

  return {
    title: guide.frontmatter.title,
    description: guide.frontmatter.description,
  };
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

  const { contentHtml, frontmatter, sections } = guide;

  return (
    <main className="prose mx-auto py-10 px-4">
      <h1>{frontmatter.title}</h1>
      <p className="text-sm text-gray-500">
        Last updated: {frontmatter.lastUpdated}
      </p>

      <article dangerouslySetInnerHTML={{ __html: contentHtml }} />

      <ScenarioCard scenarios={sections.scenarios} />

      <FAQAccordion faq={sections.faq} />

      <CountryLinks currentCountry={frontmatter.country} />

      <Disclaimer />
    </main>
  );
}
