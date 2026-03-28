# TakeHomeHub — PROJECT_SPEC.md

---

## 1. Core Strategy

* Authority-first SEO strategy
* Focus: YouTube Tax by Country
* Goal: Reach 1,000 organic sessions/month
* Initial niche: YouTube Tax (NOT income, NOT RPM)

---

## 2. Execution Model

Content → Template → Scale → Code
DO NOT start with tools
DO NOT start with UI
START with content

---

## 3. Phase 1 Scope

Countries (STRICT ORDER)

1. United States (MASTER TEMPLATE)
2. Germany
3. Canada
4. United Kingdom
5. India

DO NOT add more countries in Phase 1

---

## 4. File Structure

All content must be Markdown.
Location: /content/guides/tax/

* us.md
* germany.md
* canada.md
* uk.md
* india.md

---

## 5. Content Rules (MANDATORY)

Each page MUST:

* Be 2000+ words
* Include 3 scenarios: $1,000/month, $5,000/month, $20,000/month
* Show step-by-step tax calculation:
  Net SE income → SE tax → Deduction (half SE tax) → AGI → Taxable income → Tax by bracket → Final take-home
* Include 5+ FAQ (3–4 sentences each)
* Include internal links (placeholder allowed)
* Include comparison table references
* Include calculator references
* Include "Related Countries" section

---

## 6. SEO Rules

Each page MUST:

* Include primary keyword in first 100 words
* Use keyword naturally 3–4 times
* Use secondary keywords in subheadings
* Include FAQ section (schema-ready)

---

## 7. E-E-A-T (CRITICAL)

Each page MUST include:

* "Last updated: March 2026…" under H1
* Disclaimer at bottom
* Use official sources (IRS, HMRC, etc.)
* Accurate tax numbers (NO estimation)

---

## 8. Required Pages (Phase 1)

1. Homepage (HUB)
2. US Tax Guide (template)
3. Germany Tax Guide
4. Canada Tax Guide
5. UK Tax Guide
6. India Tax Guide
7. Tax Withholding Rates by Country (comparison page)
8. YouTube Earnings After Tax Calculator (tool)
9. YouTube Tax Glossary
10. About + Disclaimer page

---

## 9. Internal Linking Rules

Every page must link to:

* Homepage
* Comparison table
* Calculator
* At least 2 other country pages

Comparison page must link to ALL country pages

---

## 10. Content Workflow

1. US page = master template
2. All other countries MUST follow same structure
3. Only change:

   * Tax rates
   * Examples
   * Local rules

DO NOT change structure

---

## 11. Development Rules

* Stack: Next.js (App Router) + TypeScript + Tailwind + shadcn/ui
* Content comes from Markdown files
* DO NOT hardcode content inside components

---

## 12. Critical Constraints

DO NOT:

* Add Korea in Phase 1
* Add new topics (income, RPM, etc.)
* Start tool-first development
* Skip disclaimer
* Skip scenarios

---

## 13. Final Goal

Build a scalable authority site that:

* Dominates YouTube Tax niche
* Expands into YouTube Income later
* Evolves into decision platform

---

## 14. Instruction to Claude Code

Follow this file strictly.
Do NOT redesign structure
Do NOT simplify content
Do NOT skip steps
Ask if unclear

This file is the single source of truth.

---

## 15. URL Structure

/ → Homepage (HUB)
/guides/tax/us → US Tax Guide
/guides/tax/germany → Germany Tax Guide
/guides/tax/canada → Canada Tax Guide
/guides/tax/uk → UK Tax Guide
/guides/tax/india → India Tax Guide
/compare/youtube-tax-by-country → Comparison Table
/calculators/youtube-earnings-after-tax → Calculator
/glossary → Tax Glossary
/about → About + Disclaimer

---

## 16. Page Layout Structure

### Country Guide Template

1. H1 + "Last updated: March 2026..." line
2. Intro paragraph (primary keyword in first 100 words)
3. Tax classification section
4. Tax brackets table
5. Self-employment / local tax explanation
6. W-8BEN / Withholding section (with treaty rate table)
7. Deductions section
8. Take-home scenarios (3 scenarios with step-by-step math + summary table)
9. Key tax forms
10. FAQ (5+ questions, 3–4 sentences each, schema markup ready)
11. Related Country Guides + Calculator links
12. Disclaimer

### Homepage Layout

1. Hero section (site purpose)
2. Mini calculator widget
3. Country comparison table (top 5 countries)
4. Featured guides links
5. FAQ (5+)
6. CTA to calculator

---

## 17. Keyword Map

| Page          | Primary Keyword                       |
| ------------- | ------------------------------------- |
| Homepage      | youtube creator taxes by country      |
| US Guide      | youtube tax usa                       |
| Germany Guide | youtube tax germany                   |
| Canada Guide  | youtube tax canada                    |
| UK Guide      | youtube tax uk                        |
| India Guide   | youtube tax india                     |
| Comparison    | youtube withholding rates by country  |
| Calculator    | youtube earnings after tax calculator |

---

## 18. Project Folder Structure

/content/
  /guides/tax/
    us.md
    germany.md
    canada.md
    uk.md
    india.md

/src/
  /app/
    page.tsx
    /guides/tax/[country]/page.tsx
    /compare/youtube-tax-by-country/page.tsx
    /calculators/youtube-earnings-after-tax/page.tsx
    /glossary/page.tsx
    /about/page.tsx

  /components/
    TaxCalculator.tsx
    ComparisonTable.tsx
    ScenarioCard.tsx
    FAQAccordion.tsx
    CountryLinks.tsx
    Disclaimer.tsx

---

## 19. Content Loading Rule

* Use gray-matter + remark to parse Markdown files
* Each .md file must include frontmatter:

```
---
title: "YouTube Tax in the USA"
description: "Complete guide to YouTube creator taxes in the United States"
primaryKeyword: "youtube tax usa"
lastUpdated: "2026-03"
country: "us"
---
```

* Load content at build time (static generation)
* DO NOT fetch content at runtime

---

## 20. Deployment

* Platform: Vercel
* GitHub auto-deploy on push to main
* Domain: takehomehub.com

---

## 21. DO NOT MODIFY (STRICT)

* US guide master template structure
* Scenario logic ($1,000 / $5,000 / $20,000)
* Step-by-step tax calculation order
* Internal linking rules
* Section order across all country pages

---

## 22. STRUCTURE LOCK (CRITICAL)

The US guide defines the MASTER STRUCTURE.

ALL country pages MUST:

* Use IDENTICAL section order
* Use IDENTICAL calculation steps
* Use IDENTICAL scenario format

DO NOT:

* Reorder sections
* Merge sections
* Remove sections
* Add new sections

If unsure, COPY the US structure exactly.

---

## 23. Component Usage Rule

- Homepage MUST include:
  - TaxCalculator (mini version)
  - ComparisonTable

- Country Guide pages MUST include:
  - ScenarioCard
  - FAQAccordion
  - CountryLinks
  - Disclaimer

- Calculator page MUST use TaxCalculator (full version)
- Comparison page MUST use ComparisonTable (full version)

---

## 24. Data Source Rule (CRITICAL)

Tax data MUST come from:
- Official government sources only (IRS, HMRC, CRA, etc.)

DO NOT use:
- Blogs
- Forums
- AI-generated estimates
- Outdated data

If exact data is unavailable, STOP and ask.

---

## 25. Calculation Output Format

Each scenario MUST include:
1. Step-by-step bullet breakdown
2. Final summary table

Format MUST be identical across all country pages.
