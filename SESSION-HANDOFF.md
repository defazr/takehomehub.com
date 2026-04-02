# Session Handoff — Claude Code 세션 간 인수인계

---

## 빠른 시작

1. 이 파일 읽기
2. `PROJECT_SPEC.md` 읽기
3. 최신 핸드오프: `GPT-HANDOFF-2026-04-02.md`

---

## 현재 상태 (2026-04-02)

- **라이브**: https://takehomehub.com
- **Console 에러**: 0
- **11 페이지**
- **Git**: main
- **GA4**: 정상 동작 (body inline script 방식)
- **AdSense**: ads.txt + meta tag 배포됨 → 승인 대기
- **GSC**: 런칭 4일차, 노출 60→102→120, 첫 클릭 발생
- **Redirect**: 3개 배포 + 검증 완료
- **Vercel**: Pro 결제 완료 (ISR 한도 해소)
- **프로젝트 단계**: 콘텐츠 확장 준비

---

## 2026-04-02 — Phase 16 + AdSense + GA4 + Redirect

- Phase 16 site integrity check 완료 (11/11 = 200, 404 = 0)
- AdSense 소유권 확인: ads.txt + meta tag 배포
- GA4 collect 미전송 해결: useEffect → body inline script 전환
- GoogleAnalytics.tsx 삭제
- env var .trim() 적용
- 301 redirect 3개 추가 + 배포 + 검증 완료
- 코드 구조 조사 완료 (compare=TSX 직접, sitemap=수동, 파서=하드코딩)

## 2026-03-30 — GA4 안정화

- GA4 초기화 방식 변경 (useEffect → body inline script)
- collect 요청 정상화
- GoogleAnalytics.tsx 삭제
- GA_ID.trim() 적용
- build clean 확보

---

## 즉시 해야 할 것

### 콘텐츠 3개 작성 (내일~)

1. `/compare/us-vs-germany-youtube-tax` — TSX 직접, 800~1200단어
2. `/compare/us-vs-uk-youtube-tax` — TSX 직접, 800~1200단어
3. `/guides/do-youtubers-pay-taxes-us` — TSX 직접, 800~1200단어

규칙: 기존 페이지 수정 금지, sitemap.ts 수동 추가, 내부 링크 2~3개 + 계산기 링크

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
| compare 페이지 | TSX 직접 작성 (마크다운 아님) |
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
| `src/app/compare/youtube-tax-by-country/page.tsx` | 비교 페이지 (TSX 직접) |
| `src/app/sitemap.ts` | sitemap (수동 URL) |
| `next.config.ts` | redirects 3개 |
| `public/og-image.png` | OG 이미지 (1200x630) |
| `public/favicon.ico` | Favicon |
| `public/ads.txt` | AdSense 소유권 확인용 |

---

## 배포

```bash
vercel --prod --force --yes
```
