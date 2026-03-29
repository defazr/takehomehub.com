import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getGuideBySlug, getAllGuides } from "@/lib/markdown";
import CountryLinks from "@/components/CountryLinks";
import Disclaimer from "@/components/Disclaimer";
import ScenarioCard from "@/components/ScenarioCard";
import FAQAccordion from "@/components/FAQAccordion";

const countryNames: Record<string, string> = {
  us: "United States",
  germany: "Germany",
  canada: "Canada",
  uk: "United Kingdom",
  india: "India",
};

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
  const displayName = countryNames[country] || country;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: sections.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://takehomehub.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tax Guides",
        item: "https://takehomehub.com/compare/youtube-tax-by-country",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: displayName,
        item: `https://takehomehub.com/guides/tax/${country}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="prose mx-auto py-12 px-4 max-w-3xl">
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
    </>
  );
}
