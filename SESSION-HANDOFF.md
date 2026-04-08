# Session Handoff — Claude Code 세션 간 인수인계

---

## 빠른 시작

1. 이 파일 읽기
2. `PROJECT_SPEC.md` 읽기
3. 최신 핸드오프: `GPT-HANDOFF-2026-04-08.md`

---

## 현재 상태 (2026-04-08)

- **라이브**: https://takehomehub.com
- **Console 에러**: 0
- **23 페이지** (전체 구조 완성)
- **Git**: main
- **GA4**: 정상 동작 (body inline script 방식)
- **AdSense**: ads.txt + meta tag 배포됨 → 승인 대기
- **GSC**: 노출 증가 중
- **Redirect**: 3개 배포 + 검증 완료
- **Vercel**: Pro 결제 완료
- **프로젝트 단계**: 전체 구조 완성 → 관찰 모드

---

## 2026-04-08 — 전체 구조 완성

- 비교 4개 추가: US vs Canada/India, UK vs Germany/Canada, Germany vs Canada
- 롱테일 3개 추가: How Much Tax, Do YouTubers Pay Taxes Germany, YouTube Income Tax by Country
- 허브 1개: YouTube Tax Rates Comparison
- 총 23페이지, sitemap 23개 URL
- 내부 링크: 허브에서 21개 링크로 전체 연결

## 2026-04-05 — Content Expansion Phase 1

- 비교 3개: US vs Germany, US vs UK, Do YouTubers Pay Taxes US

## 2026-04-02 — Phase 16 + AdSense + GA4 + Redirect

- Phase 16 완료, AdSense 해결, GA4 fix, 301 redirect 3개

## 2026-03-30 — GA4 안정화

- useEffect → body inline script, GoogleAnalytics.tsx 삭제

---

## 즉시 해야 할 것

### 관찰 모드
- GSC 데이터 모니터링
- 추가 콘텐츠 없음 (구조 완성)
- 기존 페이지 수정 금지
- 데이터 기반으로 다음 방향 결정

---

## 기술 제약 (필독)

| 제약 | 설명 |
|---|---|
| **next/script 사용 금지** | appendChild 에러. GA4는 body inline script, AdSense는 `GoogleAdSense.tsx` useEffect 패턴 |
| shadcn/ui | Base UI 기반 (Radix 금지) |
| Tailwind | v4, `@plugin` 방식 |
| Next.js | v16, `params` = Promise |
| prose | `max-width: none` |
| 디자인 | AG Kit: #0F172A / #1E3A8A / #CA8A04 / Lexend / Source Sans 3 |
| compare/guides 페이지 | TSX 직접 작성 (마크다운 아님) |
| sitemap | 수동 URL 나열 (자동 아님) |
| 마크다운 파서 | `content/guides/tax` 하드코딩 — 수정 금지 |

---

## 환경변수

| Key | Value | 위치 |
|---|---|---|
| `NEXT_PUBLIC_GA_ID` | `G-L3M1S3QK71` | .env.local + Vercel |
| `NEXT_PUBLIC_ADSENSE_ID` | `ca-pub-7976139023602789` | .env.local + Vercel |

---

## 주요 파일

| 파일 | 역할 |
|---|---|
| `src/app/layout.tsx` | GA4 inline script (body 최상단) + AdSense meta tag |
| `src/components/GoogleAdSense.tsx` | AdSense (useEffect) — 건드리지 않는다 |
| `src/components/Footer.tsx` | 3단 Footer |
| `src/components/MobileMenu.tsx` | 햄버거 (Sheet/Base UI) |
| `src/components/TaxCalculator.tsx` | 계산기 + 국가 가이드 링크 |
| `src/app/compare/*/page.tsx` | 비교 페이지 8개 (TSX 직접) |
| `src/app/guides/*/page.tsx` | 롱테일 + 허브 페이지 (TSX 직접) |
| `src/app/sitemap.ts` | sitemap (수동 URL, 23개) |
| `next.config.ts` | redirects 3개 |
| `public/ads.txt` | AdSense 소유권 확인용 |

---

## 배포

```bash
vercel --prod --force --yes
```
