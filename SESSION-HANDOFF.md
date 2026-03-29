# Session Handoff — Claude Code 세션 간 인수인계

---

## 빠른 시작

1. 이 파일 읽기
2. `PROJECT_SPEC.md` 읽기
3. 최신 핸드오프: `GPT-HANDOFF-2026-03-29-v5.md`

---

## 현재 상태 (2026-03-29)

- **라이브**: https://takehomehub.com
- **Console 에러**: 0
- **11 페이지**
- **Git**: `7162d1c` on main
- **AdSense**: 코드 배포됨, Google 인증 실패 상태 (확인 필요)

---

## 즉시 해야 할 것

### Phase 16 — Site Integrity Check
- 전체 11 URL HTTP 200 확인 (curl)
- 내부 링크 클릭 검증
- AdSense 스크립트 프로덕션 로딩 확인

---

## 기술 제약 (필독)

| 제약 | 설명 |
|---|---|
| **next/script 사용 금지** | appendChild 에러. `GoogleAnalytics.tsx` / `GoogleAdSense.tsx` 패턴 사용 |
| shadcn/ui | Base UI 기반 (Radix 금지) |
| Tailwind | v4, `@plugin` 방식 |
| Next.js | v16, `params` = Promise |
| prose | `max-width: none` |
| 디자인 | AG Kit: #0F172A / #1E3A8A / #CA8A04 / Lexend / Source Sans 3 |

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
| `src/components/GoogleAnalytics.tsx` | GA4 (useEffect) |
| `src/components/GoogleAdSense.tsx` | AdSense (useEffect) |
| `src/components/Footer.tsx` | 3단 Footer |
| `src/components/MobileMenu.tsx` | 햄버거 (Sheet/Base UI) |
| `src/components/TaxCalculator.tsx` | 계산기 + 국가 가이드 링크 |
| `public/og-image.png` | OG 이미지 (1200x630) |
| `public/favicon.ico` | Favicon |

---

## 배포

```bash
vercel --prod --force --yes
```
