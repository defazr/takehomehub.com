# TakeHomeHub — Claude UI 세션 핸드오프

> 이 문서를 새 Claude UI 세션 시작 시 붙여넣으면 맥락이 이어집니다.
> 마지막 업데이트: 2026-04-18

---

## 1. 프로젝트 개요

- **사이트**: https://takehomehub.com
- **목적**: YouTube 크리에이터 세금 정보 사이트 (5개국: US, Germany, Canada, UK, India)
- **스택**: Next.js 16 + React 19 + Tailwind v4 + shadcn/ui (Base UI) + Vercel Pro
- **GitHub**: https://github.com/defazr/takehomehub.com
- **상태**: 23페이지 라이브, 운영 모드

---

## 2. 현재 단계 (2026-04-18)

**운영 모드 — 2차 개입 완료, 효과 측정 대기**

- 1차 개입(4/14): 홈 비교 링크 2개 + Germany 역방향 링크 → 효과 입증됨
- 2차 개입(4/18): 홈 비교 링크 3개로 확장 + US/Canada/UK 역방향 링크 추가
- 다음 체크: 4/22~23 (2차 효과 측정)
- AdSense 승인 대기, GA4 정상

### GSC 현황 (3/29~4/16)
- 총 노출 2,704 / 클릭 4 / 색인 16 / 미색인(미크롤링) 7
- Germany 가이드 노출 58% 점유 (1,568회)
- 비교 페이지: us-vs-germany 31, us-vs-canada 15, us-vs-uk 8

### 다음 판단 기준

| 결과 | 액션 |
|---|---|
| 비교 노출 증가 + 클릭 발생 | India 가이드에도 같은 패턴 확장 |
| 변화 없음 | 미색인 7페이지 수동 색인 요청 |
| CTR 0% 지속 | 메타 타이틀/디스크립션 최적화 검토 |

**4/22 이전 추가 개입 금지.**

---

## 3. 라이브 페이지 (23개)

### 국가 가이드 (5개) — 마크다운 기반
- `/guides/tax/us` `/guides/tax/germany` `/guides/tax/canada` `/guides/tax/uk` `/guides/tax/india`

### 비교 페이지 (8개) — TSX 직접 작성
- `/compare/youtube-tax-by-country` (메인 비교 테이블)
- `/compare/us-vs-germany-youtube-tax`
- `/compare/us-vs-uk-youtube-tax`
- `/compare/us-vs-canada-youtube-tax`
- `/compare/uk-vs-germany-youtube-tax`
- `/compare/germany-vs-canada-youtube-tax`
- `/compare/uk-vs-canada-youtube-tax`
- `/compare/us-vs-india-youtube-tax`

### 롱테일 + 허브 (5개) — TSX 직접 작성
- `/guides/do-youtubers-pay-taxes-us`
- `/guides/do-youtubers-pay-taxes-germany`
- `/guides/how-much-tax-do-youtubers-pay`
- `/guides/youtube-income-tax-by-country`
- `/guides/youtube-tax-rates-comparison`

### 기타 (5개)
- `/` (홈) `/calculators/youtube-earnings-after-tax` `/glossary` `/about` `/privacy-policy`

---

## 4. 기술 제약 (필독)

| # | 제약 | 설명 |
|---|---|---|
| 1 | **next/script 사용 금지** | `appendChild` 에러 발생. GA4는 `layout.tsx` body 최상단 `dangerouslySetInnerHTML` inline script. AdSense는 `GoogleAdSense.tsx` useEffect 패턴. |
| 2 | **shadcn/ui = Base UI** | Radix 아님. `type="single"` 같은 Radix props 사용 불가. 컴포넌트 소스 먼저 확인. |
| 3 | **Tailwind v4** | `@plugin` directive 사용 (`@import` 아님). |
| 4 | **Next.js 16 params** | `params`가 Promise. 모든 곳에서 `await params` 필수. |
| 5 | **GA4 = inline script만** | useEffect로 하면 collect 요청 안 감. body 최상단 inline script로 dataLayer + config + gtag.js async 로드. |
| 6 | **prose max-width** | `@tailwindcss/typography`가 65ch 기본값 → `globals.css`에서 `max-width: none`으로 이미 오버라이드됨. |
| 7 | **Vercel env var** | `.trim()` 필수 (trailing newline 가능). `layout.tsx`에 이미 적용. |
| 8 | **compare/guides 페이지** | TSX 직접 작성. 마크다운 파서가 `content/guides/tax` 하드코딩이므로 다른 경로 마크다운 불가. |
| 9 | **sitemap 수동** | `src/app/sitemap.ts`에 URL 하드코딩. 새 페이지 추가 시 반드시 수동 추가. |

---

## 5. 디자인 시스템

**Style**: Swiss Minimalism — Trust & Authority

| 용도 | 값 |
|---|---|
| Primary (navy) | `#0F172A` |
| Secondary (blue) | `#1E3A8A` |
| CTA (gold) | `#CA8A04` |
| Background | `#F8FAFC` |
| Text | `#020617` |
| Muted text | `#64748B` / `#94A3B8` |
| Borders | `#E2E8F0` / `#CBD5E1` |
| Heading font | Lexend |
| Body font | Source Sans 3 |
| Hover transition | 200ms |
| Border radius | 0.625rem (10px) |

---

## 6. 주요 파일

| 파일 | 역할 |
|---|---|
| `src/app/layout.tsx` | GA4 inline script + AdSense meta + 네비게이션 |
| `src/components/GoogleAdSense.tsx` | AdSense useEffect 주입 — 건드리지 않는다 |
| `src/components/CountryLinks.tsx` | 국가 가이드 간 링크 (ready 플래그 관리) |
| `src/components/TaxCalculator.tsx` | 5개국 세금 계산기 (보간법) |
| `src/components/Footer.tsx` | 3단 Footer (Tools, Country Guides, Legal) |
| `src/lib/markdown.ts` | 마크다운 파서 (content/guides/tax 전용) |
| `src/app/sitemap.ts` | sitemap 수동 관리 (23 URL) |
| `next.config.ts` | 301 리다이렉트 3개 |
| `content/guides/tax/*.md` | 5개국 가이드 콘텐츠 (SSOT) |

---

## 7. 환경변수

| Key | Value |
|---|---|
| `NEXT_PUBLIC_GA_ID` | `G-L3M1S3QK71` |
| `NEXT_PUBLIC_ADSENSE_ID` | `ca-pub-7976139023602789` |

---

## 8. 워크플로우 규칙

1. **플레이스홀더 콘텐츠 절대 금지** — SSOT 훼손. 유저가 제공한 콘텐츠만 사용.
2. **페이즈별 순차 실행** — 지시받은 단계만 수행. 앞서나가지 않는다.
3. **CountryLinks ready 플래그** — 새 국가 콘텐츠 추가 시 `ready: false` → `true` 전환 필수.
4. **콘텐츠 독립 생성 금지** — 세금 관련 수치/내용은 Claude가 생성하지 않는다. 유저가 제공.

---

## 9. 소통 방식

- 한국어로 소통
- 구조화된 페이즈 지시를 따름 (외부 instructor가 생성한 spec을 붙여넣기)
- 단계 완료 후 결과 보고 → 다음 지시 대기
- SSOT + 구조 무결성 > 속도

---

## 10. 배포

```bash
vercel --prod --force --yes
```

---

## 11. Redirects

| From | To | Type |
|---|---|---|
| `/youtube-tax-calculator` | `/calculators/youtube-earnings-after-tax` | 301 |
| `/youtube-earnings-after-tax-calculator` | `/calculators/youtube-earnings-after-tax` | 301 |
| `/how-much-tax-do-youtubers-pay` | `/guides/tax/us` | 301 |
