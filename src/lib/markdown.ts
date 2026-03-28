import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const guidesDirectory = path.join(process.cwd(), "content/guides/tax");

export async function getGuideBySlug(slug: string) {
  const filePath = path.join(guidesDirectory, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    contentHtml,
    frontmatter: data as {
      title: string;
      description: string;
      primaryKeyword: string;
      lastUpdated: string;
      country: string;
    },
  };
}

export function getAllGuides(): string[] {
  const files = fs.readdirSync(guidesDirectory);
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}
