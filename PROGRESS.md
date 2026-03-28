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
- `src/components/CountryLinks.tsx` — 국가 링크 + 비교표 + 계산기 링크
- `src/components/FAQAccordion.tsx` — placeholder (Phase 4에서 연결)
- `src/components/ScenarioCard.tsx` — placeholder (Phase 4에서 연결)
- page.tsx에서 CountryLinks + Disclaimer만 사용

### Phase 4 — Content Structuring & Markdown Upgrade
- **커밋**: `46530ee` feat: GFM tables, scenario cards, FAQ accordion with section parsing
- `remark-gfm` 설치 → 테이블 6개 정상 렌더링
- `src/lib/markdown.ts` 전면 리팩토링:
  - Scenario 파싱: "## Take-Home Scenarios" → h3 Scenario A/B/C 분리
  - FAQ 파싱: "## Frequently Asked Questions" → bold 질문 기준 분리
  - 파싱된 섹션은 contentHtml에서 제거 (중복 방지)
- `ScenarioCard.tsx` — shadcn Card 기반, 3개 시나리오 카드 렌더링
- `FAQAccordion.tsx` — shadcn Accordion (Base UI), 6개 FAQ 항목
- page.tsx에서 모든 컴포넌트 연결 완료

---

## 현재 상태

### Git
- **브랜치**: main
- **최신 커밋**: `46530ee`
- **remote**: origin → https://github.com/defazr/takehomehub.com.git
- **상태**: clean (uncommitted changes 없음)

### 기술 스택
- Next.js 16.2.1 (Turbopack)
- React 19.2.4
- TypeScript 5
- Tailwind CSS v4 (postcss 방식)
- shadcn/ui v4 (Base UI 기반 — Radix 아님)
- remark + remark-gfm + remark-html
- gray-matter

### 주요 파일 구조
```
content/guides/tax/
  us.md          ← 완성본 (2000+ words)
  germany.md     ← frontmatter only
  canada.md      ← frontmatter only
  uk.md          ← frontmatter only
  india.md       ← frontmatter only

src/lib/
  markdown.ts    ← getGuideBySlug() + getAllGuides() + 파싱 로직

src/app/guides/tax/[country]/
  page.tsx       ← dynamic route + SSG

src/components/
  CountryLinks.tsx
  Disclaimer.tsx
  FAQAccordion.tsx
  ScenarioCard.tsx
  ui/            ← shadcn 컴포넌트 (button, card, table, accordion, tabs)
```

### 동작하는 URL
- `/guides/tax/us` — US 가이드 전체 렌더링
- `/guides/tax/germany` 등 — frontmatter만 있어서 빈 페이지

---

## 다음 작업: Phase 5

아직 Phase 5 지시서를 받지 않았다.
예상되는 다음 단계:

1. **나머지 국가 콘텐츠 작성** (germany, canada, uk, india)
   - US 마스터 템플릿 구조를 정확히 따라야 함
   - PROJECT_SPEC.md §22 STRUCTURE LOCK 준수
2. **Homepage** (`/` — HUB 페이지)
3. **비교 페이지** (`/compare/youtube-tax-by-country`)
4. **계산기 페이지** (`/calculators/youtube-earnings-after-tax`)
5. **기타**: Glossary, About/Disclaimer 페이지

---

## 주의사항 (이어서 작업할 때)

1. **shadcn/ui는 Base UI 기반** — Radix UI API 사용 금지 (예: `type="single"` 같은 props 없음)
2. **Tailwind v4** — `@plugin` 방식으로 플러그인 추가 (`@import` 아님)
3. **Markdown 원본 수정 금지** — 파싱 로직으로 섹션 분리, 원본은 그대로 유지
4. **PROJECT_SPEC.md가 single source of truth** — 구조/순서 변경 금지
5. **remark-gfm 필수** — 없으면 테이블이 텍스트로 출력됨

---

## 실행 명령어 (빠른 시작)

```bash
cd /Users/dapala.corp/python/root/scripts/takehomehub-v2
npm run dev          # 개발 서버
npm run build        # 빌드 확인
git log --oneline    # 커밋 히스토리
```
