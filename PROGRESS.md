# TakeHomeHub — 진행 상황 (2026-03-29 최종)

---

## 완료된 Phase

### Phase 1 — Project Foundation Setup
- **커밋**: `1e0e46c`
- Next.js 16 (App Router + TypeScript + Tailwind CSS v4 + ESLint + src dir)
- shadcn/ui v4: button, card, table, accordion, tabs
- gray-matter + remark + remark-html + remark-gfm
- PROJECT_SPEC.md (25개 섹션)

### Phase 2 — US Tax Guide Rendering
- **커밋**: `07ed319`
- `src/lib/markdown.ts` — Markdown → HTML 변환 + 파싱
- `src/app/guides/tax/[country]/page.tsx` — dynamic route + SSG
- `@tailwindcss/typography` — `@plugin` 방식 (Tailwind v4)

### Phase 3 — Component Separation
- **커밋**: `b2d98a6`
- H1 중복 제거, Disclaimer, CountryLinks (ready 플래그), FAQ/Scenario placeholders

### Phase 4 — Content Structuring & Markdown Upgrade
- **커밋**: `46530ee`
- remark-gfm, ScenarioCard (shadcn Card), FAQAccordion (shadcn Accordion / Base UI)
- 시나리오/FAQ 파싱 → contentHtml에서 제거 (중복 방지)

### Phase 5A — SEO Foundation
- **커밋**: `8c935a3`
- generateMetadata (Next.js 16 — params는 Promise)
- Homepage, Compare 페이지, sitemap.ts, robots.ts, Navigation

### Phase 5B — 5개국 콘텐츠
- `9d86134` Germany ✅
- `4c7764b` Canada ✅
- `e3fb446` UK ✅
- `adbf489` India ✅

### Phase 6 — Comparison Upgrade & Internal Linking
- **커밋**: `39f22d8`
- 실제 데이터 비교 테이블 (Scenario B 수치)
- W-8BEN 비교 테이블
- 해석 섹션 (5개국 랭킹), FAQ 5개
- Homepage 5개국 전부 활성화

### Phase 7 — Calculator MVP
- **커밋**: `d71f143`
- TaxCalculator 컴포넌트 (클라이언트, 3점 선형 보간)
- 5개국 선택, 즉시 계산
- sitemap 8개 URL로 확장

---

## 현재 상태

### Git
- **브랜치**: main
- **최신 커밋**: `d71f143`
- **remote**: https://github.com/defazr/takehomehub.com.git
- **상태**: clean

### 동작하는 페이지 (8개)
| URL | 설명 |
|---|---|
| `/` | Homepage |
| `/guides/tax/us` | US Tax Guide |
| `/guides/tax/germany` | Germany Tax Guide |
| `/guides/tax/canada` | Canada Tax Guide |
| `/guides/tax/uk` | UK Tax Guide |
| `/guides/tax/india` | India Tax Guide |
| `/compare/youtube-tax-by-country` | 비교 테이블 |
| `/calculators/youtube-earnings-after-tax` | 계산기 |

### 기술 스택
- Next.js 16.2.1 (Turbopack)
- React 19.2.4, TypeScript 5
- Tailwind CSS v4 (`@plugin` 방식)
- shadcn/ui v4 (Base UI 기반 — Radix 아님)
- remark + remark-gfm + remark-html + gray-matter

### 파일 구조
```
content/guides/tax/
  us.md, germany.md, canada.md, uk.md, india.md  ← 전부 완성본

src/lib/
  markdown.ts    ← getGuideBySlug() + getAllGuides() + 시나리오/FAQ 파싱

src/app/
  page.tsx                                         ← Homepage
  layout.tsx                                       ← Nav (Home + Compare)
  sitemap.ts, robots.ts
  guides/tax/[country]/page.tsx                    ← 국가 가이드
  compare/youtube-tax-by-country/page.tsx           ← 비교 테이블
  calculators/youtube-earnings-after-tax/page.tsx   ← 계산기

src/components/
  TaxCalculator.tsx   ← 3점 보간 계산기 (client component)
  CountryLinks.tsx    ← 5개국 전부 ready: true
  Disclaimer.tsx, FAQAccordion.tsx, ScenarioCard.tsx
  ui/                 ← shadcn (button, card, table, accordion, tabs)
```

---

## 남은 작업

### PROJECT_SPEC.md §8 미완성
1. **Glossary 페이지** (`/glossary`)
2. **About + Disclaimer 페이지** (`/about`)

### 추가 개선
3. Navigation에 Calculator 링크 추가
4. Vercel 배포 (takehomehub.com)
5. Calculator 정확도 업그레이드 (실제 세금 엔진)

---

## 주의사항 (필독)

1. shadcn/ui = Base UI 기반 (Radix API 금지)
2. Tailwind v4 = `@plugin` (NOT `@import`)
3. Next.js 16 params = Promise (`await params` 필수)
4. remark-gfm 필수 (없으면 테이블 깨짐)
5. Markdown 원본 수정 금지
6. 임시 콘텐츠 삽입 금지
7. CountryLinks ready 플래그 관리 필수

---

## 실행 명령어

```bash
cd /Users/dapala.corp/python/root/scripts/takehomehub-v2
npm run dev          # 개발 서버
npm run build        # 빌드 확인
git log --oneline    # 커밋 히스토리
```
