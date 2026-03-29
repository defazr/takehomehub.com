# GPT Handoff — 2026-03-29

이 문서는 GPT(지시서 작성자)가 다음 세션에서 Claude Code에 지시를 내릴 때 참고하는 핸드오프 문서다.

---

## 세션 요약

2026-03-29 세션에서 Phase 1 ~ Phase 7까지 완료했다.
사이트의 핵심 기능이 모두 동작하는 상태다.

---

## 완료된 Phase 목록

| Phase | 내용 | 커밋 |
|---|---|---|
| 1 | Project Foundation (Next.js + shadcn + content) | `1e0e46c` |
| 2 | US Tax Guide Markdown Rendering | `07ed319` |
| 3 | Component Separation (Disclaimer, CountryLinks, FAQ/Scenario) | `b2d98a6` |
| 4 | GFM Tables + ScenarioCard + FAQAccordion + Section Parsing | `46530ee` |
| 5A | SEO Foundation (metadata, homepage, compare, sitemap, robots) | `8c935a3` |
| 5B | 5개국 콘텐츠 (US→Germany→Canada→UK→India) | `9d86134` ~ `adbf489` |
| 6 | Comparison Upgrade + Internal Linking | `39f22d8` |
| 7 | Tax Calculator MVP (3-point interpolation) | `d71f143` |

---

## 현재 사이트 상태

### 동작하는 페이지 (8개)
- `/` — Homepage (5개국 링크 + Compare + Calculator)
- `/guides/tax/us` — US Tax Guide (완성본)
- `/guides/tax/germany` — Germany Tax Guide (완성본)
- `/guides/tax/canada` — Canada Tax Guide (완성본)
- `/guides/tax/uk` — UK Tax Guide (완성본)
- `/guides/tax/india` — India Tax Guide (완성본)
- `/compare/youtube-tax-by-country` — 비교 테이블 (실제 데이터, FAQ 5개)
- `/calculators/youtube-earnings-after-tax` — 계산기 (3점 보간, 5개국)

### SEO
- `sitemap.xml` — 8개 URL 포함
- `robots.txt` — Allow: /
- 각 페이지 `<title>` + `<meta description>` 설정 완료

### 콘텐츠 상태
- 5개국 모두 2000+ words
- 각 페이지: ScenarioCard 3개 + FAQAccordion 6개 + CountryLinks + Disclaimer
- GFM 테이블 정상 렌더링

---

## 아직 안 한 것 (PROJECT_SPEC.md 기준)

### 필수 (§8 Required Pages)
1. **Glossary 페이지** (`/glossary`) — 세금 용어집
2. **About + Disclaimer 페이지** (`/about`) — 사이트 소개 + 법적 고지

### 선택적 개선
3. Calculator 정확도 업그레이드 (실제 세금 엔진) — Phase 8로 예정
4. UI/디자인 개선 — 현재 prose 기본 스타일
5. Navigation에 Calculator 링크 추가 (현재 Home + Compare만)
6. Vercel 배포 설정

---

## 기술 스택 주의사항 (Claude Code에 전달 필수)

1. **shadcn/ui v4 = Base UI 기반** — Radix UI API 사용 금지
2. **Tailwind v4** — `@plugin` 방식 (NOT `@import`)
3. **Next.js 16** — `params`는 `Promise`, `await params` 필수
4. **remark-gfm** — 없으면 테이블이 텍스트로 출력됨
5. **Markdown 원본 수정 금지** — 파싱 로직으로 섹션 분리
6. **CountryLinks `ready` 플래그** — 콘텐츠 추가 시 true로 변경 필요
7. **임시 콘텐츠 삽입 절대 금지** — SSOT 깨짐

---

## 계산기 로직 요약

### 3점 선형 보간 방식
각 국가별 Scenario A/B/C의 실효세율을 기준점으로 사용:

| 국가 | Low (연소득→세율) | Mid | High |
|---|---|---|---|
| US | $12,000→14% | $60,000→22% | $240,000→30% |
| Germany | €12,000→20% | €60,000→26% | €240,000→32% |
| Canada | C$18,000→19% | C$90,000→34% | C$360,000→39% |
| UK | £12,000→0% | £60,000→23% | £240,000→42% |
| India | ₹12L→0% | ₹60L→8% | ₹2.4Cr→23% |

### 보간 공식
- low~mid: `lowRate + ((income - lowIncome) / (midIncome - lowIncome)) * (midRate - lowRate)`
- mid~high: `midRate + ((income - midIncome) / (highIncome - midIncome)) * (highRate - midRate)`
- 경계: income < low → lowRate, income > high → highRate

---

## 다음 세션 추천 작업 순서

1. **Glossary + About 페이지** (Phase 8A) — PROJECT_SPEC §8 완성
2. **Navigation 업데이트** — Calculator 링크 추가
3. **Vercel 배포** — takehomehub.com 연결
4. **Calculator 정확도** (Phase 8B) — 실제 세금 엔진 (선택)

---

## 실행 명령어

```bash
cd /Users/dapala.corp/python/root/scripts/takehomehub-v2
npm run dev          # 개발 서버 (localhost:3000)
npm run build        # 빌드 확인
git log --oneline    # 커밋 히스토리
```

---

## Git 정보
- **repo**: https://github.com/defazr/takehomehub.com.git
- **branch**: main
- **latest commit**: `d71f143`
