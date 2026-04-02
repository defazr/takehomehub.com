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
- **Phase 16**: 완료 (HTTP 200 = 11/11, 404 = 0, 링크 정상)
- **GA4**: 정상 동작 (body inline script 방식)
- **AdSense**: ads.txt + meta tag 배포됨 → Google 검토 요청 가능 상태
- **프로젝트 단계**: BUILD 종료 → 운영/관찰 모드 진입
- **배포**: 일시 중단 (ISR Write 초과 관찰)

---

## 2026-04-02 — 301 Redirect + ISR 관찰

- 301 redirect 3개 추가 (next.config.ts)
- ISR Write 초과 상태 기록 (계정 shared)
- 배포 일시 중단 결정
- build clean 상태 유지

## 2026-03-30 — GA4 안정화

- GA4 초기화 방식 변경 (useEffect → body inline script)
- collect 요청 정상화
- GoogleAnalytics.tsx 삭제
- GA_ID.trim() 적용
- build clean 확보

---

## 즉시 해야 할 것

### STEP B (04-03 예정)
- Vercel ISR Writes 상태 확인
- git push + vercel deploy
- Redirect 3개 URL 검증
- GA4 실시간 유지 확인
- GSC URL 검사 + 재크롤 요청

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
| `src/app/layout.tsx` | GA4 inline script (body 최상단) |
| `src/components/GoogleAdSense.tsx` | AdSense (useEffect) — 건드리지 않는다 |
| `src/components/Footer.tsx` | 3단 Footer |
| `src/components/MobileMenu.tsx` | 햄버거 (Sheet/Base UI) |
| `src/components/TaxCalculator.tsx` | 계산기 + 국가 가이드 링크 |
| `public/og-image.png` | OG 이미지 (1200x630) |
| `public/favicon.ico` | Favicon |
| `public/ads.txt` | AdSense 소유권 확인용 |

---

## 배포

```bash
vercel --prod --force --yes
```
