import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";

const guidesDirectory = path.join(process.cwd(), "content/guides/tax");

export interface Scenario {
  title: string;
  contentHtml: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface GuideSections {
  scenarios: Scenario[];
  faq: FAQ[];
}

export interface GuideData {
  contentHtml: string;
  frontmatter: {
    title: string;
    description: string;
    primaryKeyword: string;
    lastUpdated: string;
    country: string;
  };
  sections: GuideSections;
}

function parseScenarios(contentHtml: string): Scenario[] {
  // Find the scenarios section: starts at "Take-Home Scenarios"
  const scenarioHeaderMatch = contentHtml.match(
    /<h2[^>]*>Take-Home Scenarios[^<]*<\/h2>/
  );
  if (!scenarioHeaderMatch) return [];

  const startIdx =
    contentHtml.indexOf(scenarioHeaderMatch[0]) +
    scenarioHeaderMatch[0].length;

  // Find next h2 after scenarios section
  const afterScenarios = contentHtml.slice(startIdx);
  const nextH2Match = afterScenarios.match(/<h2[^>]*>/);
  const scenariosBlock = nextH2Match
    ? afterScenarios.slice(0, afterScenarios.indexOf(nextH2Match[0]))
    : afterScenarios;

  // Split by h3 "Scenario" headers
  const scenarioRegex = /<h3[^>]*>(Scenario [ABC][^<]*)<\/h3>/g;
  const scenarios: Scenario[] = [];
  let match;
  const positions: { title: string; start: number }[] = [];

  while ((match = scenarioRegex.exec(scenariosBlock)) !== null) {
    positions.push({
      title: match[1],
      start: match.index + match[0].length,
    });
  }

  for (let i = 0; i < positions.length; i++) {
    const end =
      i + 1 < positions.length
        ? scenariosBlock.indexOf(
            `<h3`,
            positions[i].start
          )
        : scenariosBlock.length;

    // Find the actual next h3 after current position
    const remaining = scenariosBlock.slice(positions[i].start);
    const nextH3 = remaining.match(/<h3[^>]*>/);
    const contentEnd = nextH3
      ? positions[i].start + remaining.indexOf(nextH3[0])
      : scenariosBlock.length;

    scenarios.push({
      title: positions[i].title,
      contentHtml: scenariosBlock.slice(positions[i].start, contentEnd).trim(),
    });
  }

  return scenarios;
}

function parseFAQ(contentHtml: string): FAQ[] {
  const faqHeaderMatch = contentHtml.match(
    /<h2[^>]*>Frequently Asked Questions<\/h2>/
  );
  if (!faqHeaderMatch) return [];

  const startIdx =
    contentHtml.indexOf(faqHeaderMatch[0]) + faqHeaderMatch[0].length;

  // Find next h2 after FAQ section
  const afterFaq = contentHtml.slice(startIdx);
  const nextH2Match = afterFaq.match(/<h2[^>]*>/);
  const faqBlock = nextH2Match
    ? afterFaq.slice(0, afterFaq.indexOf(nextH2Match[0]))
    : afterFaq;

  // Split by bold question pattern: <strong>question</strong>
  const parts = faqBlock.split(/<strong>/);
  const faqs: FAQ[] = [];

  for (let i = 1; i < parts.length; i++) {
    const closeBold = parts[i].indexOf("</strong>");
    if (closeBold === -1) continue;

    const question = parts[i].slice(0, closeBold).trim();
    let answer = parts[i].slice(closeBold + "</strong>".length).trim();

    // Clean up: remove wrapping <p> tags and leading newlines
    answer = answer.replace(/^[\n\r]+/, "").trim();
    // Remove trailing </p> and any trailing whitespace
    answer = answer.replace(/<\/p>\s*$/, "").trim();
    // Remove leading <br> or newline
    answer = answer.replace(/^<br\s*\/?>[\n\r]*/, "").trim();
    // Remove leading newline characters
    answer = answer.replace(/^\n+/, "").trim();

    if (question && answer) {
      faqs.push({ question, answer });
    }
  }

  return faqs;
}

function removeSection(
  contentHtml: string,
  headerRegex: RegExp
): string {
  const match = contentHtml.match(headerRegex);
  if (!match) return contentHtml;

  const startIdx = contentHtml.indexOf(match[0]);
  const afterSection = contentHtml.slice(startIdx + match[0].length);
  const nextH2Match = afterSection.match(/<h2[^>]*>/);

  const endIdx = nextH2Match
    ? startIdx + match[0].length + afterSection.indexOf(nextH2Match[0])
    : contentHtml.length;

  // Also remove any <hr> right before the section header
  let adjustedStart = startIdx;
  const before = contentHtml.slice(0, startIdx);
  const hrMatch = before.match(/<hr>\s*$/);
  if (hrMatch) {
    adjustedStart = startIdx - hrMatch[0].length;
  }

  return contentHtml.slice(0, adjustedStart) + contentHtml.slice(endIdx);
}

export async function getGuideBySlug(
  slug: string
): Promise<GuideData | null> {
  const filePath = path.join(guidesDirectory, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(remarkGfm)
    .use(html)
    .process(content);

  let fullHtml = processedContent
    .toString()
    .replace(/<h1[^>]*>.*?<\/h1>/, "");

  // Parse sections from full HTML
  const scenarios = parseScenarios(fullHtml);
  const faq = parseFAQ(fullHtml);

  // Remove parsed sections from contentHtml to avoid duplication
  let contentHtml = fullHtml;
  contentHtml = removeSection(
    contentHtml,
    /<h2[^>]*>Take-Home Scenarios[^<]*<\/h2>/
  );
  contentHtml = removeSection(
    contentHtml,
    /<h2[^>]*>Frequently Asked Questions<\/h2>/
  );

  return {
    contentHtml,
    frontmatter: data as GuideData["frontmatter"],
    sections: { scenarios, faq },
  };
}

export function getAllGuides(): string[] {
  const files = fs.readdirSync(guidesDirectory);
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}
