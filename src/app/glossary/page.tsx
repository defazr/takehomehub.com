import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";

export const metadata: Metadata = {
  title: "YouTube Tax Glossary: Key Terms Every Creator Should Know",
  description:
    "A complete glossary of tax terms for YouTube creators. Understand withholding tax, W-8BEN, self-employment tax, VAT, deductions, and more.",
};

async function getGlossaryContent() {
  const filePath = path.join(
    process.cwd(),
    "content/guides/glossary.md"
  );
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content } = matter(fileContents);

  const processedContent = await remark()
    .use(remarkGfm)
    .use(html)
    .process(content);

  return processedContent
    .toString()
    .replace(/<h1[^>]*>.*?<\/h1>/, "");
}

export default async function GlossaryPage() {
  const contentHtml = await getGlossaryContent();

  return (
    <main className="prose mx-auto py-12 px-4 max-w-4xl w-full">
      <h1>YouTube Tax Glossary: Key Terms Every Creator Should Know</h1>
      <p className="text-sm text-[#64748B] font-medium">
        Last updated: 2026-03
      </p>
      <article dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </main>
  );
}
