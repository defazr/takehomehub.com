# TakeHomeHub — 진행 상황 (2026-03-29)

---

## 완료된 Phase

### Phase 1 — Project Foundation Setup
- **커밋**: `1e0e46c` setup: Next.js + shadcn + content structure
- Next.js (App Router + TypeScript + Tailwind CSS + ESLint + src dir)
- shadcn/ui: button, card, table, accordion, tabs
- gray-matter + remark + remark-html 설치
- content/guides/tax/ 폴더 생성
- us.md (완성본), germany/canada/uk/india (frontmatter only)
- PROJECT_SPEC.md (25개 섹션)
- Git remote: https://github.com/defazr/takehomehub.com.git

### Phase 2 — US Tax Guide Rendering
- **커밋**: `07ed319` feat: US tax guide markdown rendering with dynamic routes
- `src/lib/markdown.ts` — gray-matter + remark로 markdown → HTML 변환
- `src/app/guides/tax/[country]/page.tsx` — dynamic route + generateStaticParams
- `@tailwindcss/typography` — `@plugin` 방식으로 globals.css에 적용 (Tailwind v4)
- `/guides/tax/us` 접속 시 정상 렌더링 확인

### Phase 3 — Component Separation (Safe Version)
- **커밋**: `b2d98a6` feat: component separation
- H1 중복 제거 (markdown 내부 첫 H1 → HTML 변환 후 regex 제거)
- `src/components/Disclaimer.tsx` — YMYL 고정 문구
- `src/components/CountryLinks.tsx` — 국가 링크 + 비교표 + 계산기 링크 (ready 플래그로 활성/비활성 관리)
- `src/components/FAQAccordion.tsx` — placeholder (Phase 4에서 연결)
- `src/components/ScenarioCard.tsx` — placeholder (Phase 4에서 연결)
- page.tsx에서 CountryLinks + Disclaimer만 사용

### Phase 4 — Content Structuring & Markdown Upgrade
- **커밋**: `46530ee` feat: GFM tables, scenario cards, FAQ accordion with section parsing
- `remark-gfm` 설치 → 테이블 정상 렌더링
- `src/lib/markdown.ts` 전면 리팩토링:
  - Scenario 파싱: "## Take-Home Scenarios" → h3 Scenario A/B/C 분리
  - FAQ 파싱: "## Frequently Asked Questions" → bold 질문 기준 분리
  - 파싱된 섹션은 contentHtml에서 제거 (중복 방지)
- `ScenarioCard.tsx` — shadcn Card 기반, 3개 시나리오 카드 렌더링
- `FAQAccordion.tsx` — shadcn Accordion (Base UI 기반), FAQ 항목 렌더링
- page.tsx에서 모든 컴포넌트 연결 완료

### Phase 5A — SEO Foundation
- **커밋**: `8c935a3` feat: SEO foundation
- `generateMetadata()` 추가 (Next.js 16 — params는 Promise, await 필요)
- Homepage `/` 생성 (US 링크만 활성, 나머지 Coming soon)
- Comparison 페이지 `/compare/youtube-tax-by-country` 생성
- Navigation (layout.tsx) — Home + Compare
- `sitemap.ts` — /, /guides/tax/us, /compare
- `robots.ts` — Allow: /, sitemap 링크
- CountryLinks에 `ready` 플래그 추가 (콘텐츠 없는 국가 비활성)

### Phase 5B — 국가별 콘텐츠 추가 (진행 중)
- **커밋**: `9d86134` content: add Germany tax guide ✅
- **커밋**: `4c7764b` content: add Canada tax guide ✅
- UK — 아직 미작성 ❌
- India — 아직 미작성 ❌

---

## 현재 상태

### Git
- **브랜치**: main
- **최신 커밋**: `4c7764b` content: add Canada tax guide
- **remote**: origin → https://github.com/defazr/takehomehub.com.git
- **상태**: clean (uncommitted changes 없음)

### 기술 스택
- Next.js 16.2.1 (Turbopack)
- React 19.2.4
- TypeScript 5
- Tailwind CSS v4 (postcss 방식, `@plugin`으로 플러그인 추가)
- shadcn/ui v4 (Base UI 기반 — Radix 아님, `type="single"` 같은 props 없음)
- remark + remark-gfm + remark-html
- gray-matter

### 콘텐츠 상태
```
content/guides/tax/
  us.md          ← 완성본 ✅ (2000+ words, 렌더링 확인)
  germany.md     ← 완성본 ✅ (2900+ words, 렌더링 확인)
  canada.md      ← 완성본 ✅ (3100+ words, 렌더링 확인)
  uk.md          ← frontmatter only ❌
  india.md       ← frontmatter only ❌
```

### CountryLinks 활성 상태
```
us       → ready: true  ✅
germany  → ready: true  ✅
canada   → ready: true  ✅
uk       → ready: false ❌ (콘텐츠 추가 시 true로 변경 필요)
india    → ready: false ❌ (콘텐츠 추가 시 true로 변경 필요)
```

### 주요 파일 구조
```
content/guides/tax/
  us.md, germany.md, canada.md, uk.md, india.md

src/lib/
  markdown.ts    ← getGuideBySlug() + getAllGuides() + 시나리오/FAQ 파싱

src/app/
  page.tsx                                    ← Homepage
  layout.tsx                                  ← Nav (Home + Compare)
  sitemap.ts                                  ← sitemap.xml
  robots.ts                                   ← robots.txt
  guides/tax/[country]/page.tsx               ← 국가 가이드 (dynamic + SSG + metadata)
  compare/youtube-tax-by-country/page.tsx      ← 비교 테이블

src/components/
  CountryLinks.tsx   ← ready 플래그로 활성/비활성 관리
  Disclaimer.tsx     ← YMYL 고정 문구
  FAQAccordion.tsx   ← shadcn Accordion (Base UI)
  ScenarioCard.tsx   ← shadcn Card
  ui/                ← shadcn 컴포넌트 (button, card, table, accordion, tabs)
```

### 동작하는 URL
- `/` — Homepage
- `/guides/tax/us` — US 가이드
- `/guides/tax/germany` — Germany 가이드
- `/guides/tax/canada` — Canada 가이드
- `/compare/youtube-tax-by-country` — 비교 테이블
- `/sitemap.xml` — Sitemap
- `/robots.txt` — Robots

---

## 다음 작업

### 즉시 해야 할 것 (Phase 5B 계속)
1. **UK 콘텐츠 작성** → `content/guides/tax/uk.md` 저장 → CountryLinks `ready: true`
2. **India 콘텐츠 작성** → `content/guides/tax/india.md` 저장 → CountryLinks `ready: true`
3. 각 콘텐츠 저장 후: 렌더링 확인 → 빌드 확인 → git commit + push

### 5B 완료 후
4. Homepage 업데이트 (모든 국가 링크 활성화)
5. Comparison 페이지 업데이트 (모든 국가 링크 활성화)
6. sitemap.ts 업데이트 (모든 국가 URL 추가)

### 이후 Phase
- Calculator 페이지 (`/calculators/youtube-earnings-after-tax`)
- Glossary 페이지 (`/glossary`)
- About + Disclaimer 페이지 (`/about`)

---

## 주의사항 (이어서 작업할 때 — 필독)

1. **shadcn/ui는 Base UI 기반** — Radix UI API 사용 금지 (예: `type="single"` 같은 props 없음)
2. **Tailwind v4** — `@plugin` 방식으로 플러그인 추가 (`@import` 아님)
3. **Markdown 원본 수정 금지** — 파싱 로직으로 섹션 분리, 원본은 그대로 유지
4. **PROJECT_SPEC.md가 single source of truth** — 구조/순서 변경 금지
5. **remark-gfm 필수** — 없으면 테이블이 텍스트로 출력됨
6. **Next.js 16 params는 Promise** — `await params` 필요 (generateMetadata 포함)
7. **콘텐츠 추가 시 CountryLinks ready 플래그 변경 필수**
8. **임시 콘텐츠 삽입 금지** — SSOT 깨짐 방지

---

## 콘텐츠 추가 절차 (새 국가 추가 시)

1. `content/guides/tax/{country}.md` 에 전체 콘텐츠 저장 (frontmatter 포함)
2. `src/components/CountryLinks.tsx` 에서 해당 국가 `ready: true` 변경
3. `npm run build` 로 빌드 확인
4. 프로덕션 서버에서 렌더링 확인 (H1, title, 테이블, ScenarioCard, FAQAccordion, CountryLinks, Disclaimer)
5. `git add` → `git commit` → `git push origin main`

---

## 실행 명령어 (빠른 시작)

```bash
cd /Users/dapala.corp/python/root/scripts/takehomehub-v2
npm run dev          # 개발 서버
npm run build        # 빌드 확인
git log --oneline    # 커밋 히스토리
```
