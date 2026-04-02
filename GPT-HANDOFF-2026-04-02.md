# GPT HANDOFF — 2026-04-02

이전: GPT-HANDOFF-2026-03-30.md

---

## 1. 세션 요약

Phase 16 사이트 무결성 검증 완료, AdSense 소유권 확인 해결, GA4 collect 문제 해결, 301 redirect 배포, 코드 구조 조사, 콘텐츠 확장 계획 확정.

---

## 2. 핵심 변경 사항

### 2.1 Phase 16 — Site Integrity Check (완료)

- HTTP 200 = 11/11
- 404 = 0, 내부 링크 전부 정상
- http→https redirect 정상 (308)
- sitemap.xml = 11개 URL 일치

### 2.2 AdSense 소유권 확인 해결

문제: Google "사이트를 확인할 수 없습니다"
원인: AdSense 스크립트가 useEffect (client-side JS)로만 주입 → 크롤러 감지 불가

해결 (스크립트 미변경):
- `public/ads.txt` 생성 → `google.com, pub-7976139023602789, DIRECT, f08c47fec0942fa0`
- `layout.tsx` metadata에 `other: { "google-adsense-account": "ca-pub-7976139023602789" }` 추가
- AdSense 스크립트(GoogleAdSense.tsx) 미변경 — JS 안정성 유지

### 2.3 GA4 collect 미전송 문제 해결

문제: gtag.js 로드됨, dataLayer 쌓임, 하지만 collect 요청 0건
원인: useEffect 기반 초기화로 dataLayer↔gtag.js 타이밍 불일치

해결:
- `GoogleAnalytics.tsx` 삭제
- layout.tsx body 최상단에 inline script 삽입 (dangerouslySetInnerHTML)
- 순서: dataLayer 정의 → config push → gtag.js async 로드
- GA4 실시간 정상 확인됨

### 2.4 env var trailing newline 수정

- Vercel 환경변수에 `\n` 붙어있던 문제 → `.trim()` 적용
- GA_ID, ADSENSE_ID 둘 다 수정

### 2.5 301 Redirect 3개 배포

`next.config.ts`에 redirects 추가 + 배포 완료:

| 기존 URL | → | 대상 URL |
|----------|---|-----------|
| `/youtube-tax-calculator` | → | `/calculators/youtube-earnings-after-tax` |
| `/youtube-earnings-after-tax-calculator` | → | `/calculators/youtube-earnings-after-tax` |
| `/how-much-tax-do-youtubers-pay` | → | `/guides/tax/us` |

- `permanent: true` (308 Permanent Redirect)
- 배포 후 3개 전부 정상 동작 검증 완료

### 2.6 ISR 상태

- Vercel ISR Writes 한도 초과 상태였음
- Vercel Pro 결제 완료 → 한도 해소

---

## 3. 코드 구조 조사 결과

### 마크다운 파싱
- 파서: `src/lib/markdown.ts`
- 경로: `content/guides/tax` 하드코딩
- 다른 경로 지원 안 됨

### /compare/ 라우팅
- `app/compare/youtube-tax-by-country/page.tsx` — TSX 직접 작성 (마크다운 아님)
- 새 비교 페이지 추가 시 TSX 직접 작성 방식

### sitemap
- `src/app/sitemap.ts` — 수동 URL 나열 (하드코딩)
- 새 페이지 추가 시 수동으로 URL 추가 필요

---

## 4. GSC 상태 (런칭 4일차)

- 노출: 60→102→120 (매일 증가)
- 첫 클릭 발생
- 독일 가이드 평균 순위 6.22 (강세)

---

## 5. 콘텐츠 확장 계획 (확정)

### 1순위: US vs Germany YouTube Tax
- URL: `/compare/us-vs-germany-youtube-tax`
- 방식: TSX 직접 작성, 800~1200단어
- 이유: 독일 가이드 노출 강세 → 연결 필수

### 2순위: US vs UK YouTube Tax
- URL: `/compare/us-vs-uk-youtube-tax`
- 방식: TSX 직접 작성, 800~1200단어

### 3순위: Do YouTubers Pay Taxes in the US
- URL: `/guides/do-youtubers-pay-taxes-us`
- 방식: TSX 직접 작성, 800~1200단어
- 이유: 영어 롱테일 키워드 강화

### 작성 규칙
- 과장 금지, 데이터 기반
- 내부 링크 2~3개 + 계산기 링크 필수
- sitemap.ts 수동 추가
- 기존 페이지 수정 금지
- 마크다운 파서 수정 금지

### 콘텐츠 구조 (공통)
1. 한 줄 결론 (상단)
2. 세금 구조 비교 (표)
3. 실제 예시 ($50,000 기준)
4. 내부 링크

---

## 6. 현재 상태

| 항목 | 상태 |
|------|------|
| 페이지 | 11개 라이브 |
| build | 성공 (error 0 / warning 0) |
| GA4 | 정상 동작 (body inline script) |
| AdSense | 승인 대기 (ads.txt + meta tag 배포됨) |
| GSC | 노출 증가 중, 첫 클릭 발생 |
| Redirect | 3개 배포 + 검증 완료 |
| Console error | 0 |
| Vercel | Pro 결제 완료 |

---

## 7. 현재 GA4 구조

```tsx
const GA_ID = process.env.NEXT_PUBLIC_GA_ID?.trim();

<body>
  {GA_ID && (
    <>
      <script dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `,
      }} />
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
    </>
  )}
```

---

## 8. 파일 변경 (이번 세션 전체)

| 파일 | 변경 |
|------|------|
| `public/ads.txt` | 신규 생성 |
| `src/app/layout.tsx` | AdSense meta tag 추가, GA4 inline script 전환, .trim() 적용 |
| `src/components/GoogleAnalytics.tsx` | 삭제 |
| `next.config.ts` | redirects 3개 추가 |

---

## 9. 다음 단계

- 콘텐츠 3개 작성 (US vs Germany → US vs UK → Do YouTubers Pay Taxes)
- 각 배포 후 200 응답 + sitemap 반영 + GA4 유지 확인
- 다음 주 GSC 데이터 기반으로 방향 결정

---

## 10. 한 줄 요약

→ Phase 16 완료 + AdSense/GA4 해결 + redirect 배포 + 콘텐츠 확장 계획 확정
→ 내일부터 콘텐츠 작성 시작
