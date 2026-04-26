# Session Handoff — Claude Code 세션 간 인수인계

---

## 빠른 시작

1. 이 파일 읽기
2. `PROJECT_SPEC.md` 읽기
3. 최신 핸드오프: `GPT-HANDOFF-2026-04-26.md`

---

## 현재 상태 (2026-04-26)

- **라이브**: https://takehomehub.com
- **Console 에러**: 0
- **23 페이지** (색인 17 / 미색인 6~7)
- **Git**: main
- **GA4**: 정상 동작 (body inline script 방식)
- **AdSense**: 5월 중순까지 재신청 보류
- **GSC**: 노출 3,996 / 클릭 5 / Germany 가이드 50% 점유
- **Redirect**: 3개 배포 + 검증 완료
- **Vercel**: Pro 결제 완료
- **프로젝트 단계**: 3차 개입 + 헤더 정합성 완료 → 효과 측정 대기 (4/30~5/1 체크)

---

## 2026-04-26 — 3차 개입 + 헤더 정합성

- GSC 4/26 보고서: 노출 3,996 (+20%) / 클릭 5 / 수동 색인 효과 입증
- do-youtubers-pay-taxes-germany 신규 색인 → 노출 41 / 순위 8.44
- 3차 개입: do-youtubers-germany → /guides/tax/germany 링크 1개 추가 (커밋 `02b2c25`)
- 헤더 정합성: 데스크톱 헤더 + 햄버거에 Glossary 추가 (커밋 `c8c49b6`)
- About은 Footer 전용 유지 (햄버거 추가 안 함)

## 2026-04-18 — 2차 개입 (홈 확장 + 역방향 링크)

- 1차 개입 효과 입증 (us-vs-germany +48%, us-vs-canada +114%)
- 홈 Top Comparisons US vs UK 추가, US/Canada/UK 가이드에 비교 링크 추가
- 커밋: `e09582b`

## 2026-04-14 — 1차 개입 (내부 링크 추가 + UX 개선)

- 홈페이지에 Top Comparisons 블록 추가 (us-vs-germany, us-vs-canada)
- Germany 가이드에 us-vs-germany 비교 링크 1개 추가
- 커밋: `338009f`, `427620e`

## 2026-04-08 — 전체 구조 완성 + QA 통과

- 비교 4개 + 롱테일 3개 + 허브 1개 배포 (총 23페이지)
- QA 전수 검사: 수치 PASS, 링크 PASS, SEO PASS
- SSOT 수정: $15,750→$15,000 (2곳) + 통화 중복 제거 (2곳)
- 카니발리제이션 Cluster A 감지 → GSC 데이터 관찰 후 판단

## 2026-04-05 — Content Expansion Phase 1

- 비교 3개: US vs Germany, US vs UK, Do YouTubers Pay Taxes US

## 2026-04-02 — Phase 16 + AdSense + GA4 + Redirect

- Phase 16 완료, AdSense 해결, GA4 fix, 301 redirect 3개

## 2026-03-30 — GA4 안정화

- useEffect → body inline script, GoogleAnalytics.tsx 삭제

---

## 즉시 해야 할 것

### 효과 측정 (4/30~5/1 체크)
1. do-youtubers-germany 노출 41 → 상승 여부
2. 색인 페이지 17 → 추가 증가
3. 클릭 5 → 6+ 발생
4. Germany 가이드 ↔ do-youtubers 트래픽 흐름 (GA4)
5. Glossary 노출 40 변화 (헤더 추가 효과)
6. us-vs-canada / us-vs-uk 정체 해소
- 4/30 전까지 추가 개입 금지
- AdSense 재신청 5월 중순까지 보류

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
