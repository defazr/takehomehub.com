# Session Handoff — Claude Code 세션 간 인수인계

---

## 빠른 시작

1. 이 파일 읽기
2. `PROJECT_SPEC.md` 읽기
3. 최신 핸드오프: `GPT-HANDOFF-2026-04-14.md`

---

## 현재 상태 (2026-04-14)

- **라이브**: https://takehomehub.com
- **Console 에러**: 0
- **23 페이지** (색인 15 / 미색인 8)
- **Git**: main
- **GA4**: 정상 동작 (body inline script 방식)
- **AdSense**: 재신청 완료, 승인 대기
- **GSC**: 노출 2,057 / 클릭 3 / Germany 가이드 60% 점유
- **Redirect**: 3개 배포 + 검증 완료
- **Vercel**: Pro 결제 완료
- **프로젝트 단계**: 1차 개입 완료 → 효과 측정 대기 (4/18 체크)

---

## 2026-04-14 — 1차 개입 (내부 링크 추가 + UX 개선)

- GSC 데이터 분석: 노출 2,057 / 클릭 3 / Germany 가이드 60% 점유
- 트리거 충족 → 홈페이지에 Top Comparisons 블록 추가 (us-vs-germany, us-vs-canada)
- Germany 가이드에 us-vs-germany 비교 링크 1개 추가
- Germany Related 섹션 빈 줄 추가 (가독성 개선)
- 미색인 페이지 건드리지 않음 (자연 크롤링 대기)
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

### 1차 개입 효과 측정 (4/18 체크)
- us-vs-germany 노출 21 → 증가 여부
- us-vs-canada 노출 7 → 증가 여부
- 클릭 0 → 1 발생 여부
- 미색인 7페이지 자연 크롤링 진행 여부
- 효과 입증 시 → US/CA/UK/IN 가이드에도 같은 패턴 확장
- 4/18 전까지 추가 개입 금지

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
