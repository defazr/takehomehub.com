# GPT HANDOFF — 2026-04-02

이전: GPT-HANDOFF-2026-03-30.md

---

## 1. 세션 요약

GA4 안정화 이후 404 URL redirect 처리 + ISR 상태 기록 + 배포 정책 수립.

---

## 2. 핵심 변경 사항

### 2.1 GA4 구조 변경 (03-30 완료, 기록)

- useEffect → body 최상단 inline script 방식 전환
- window.dataLayer 초기화 순서: dataLayer 정의 → config push → gtag.js async 로드
- `src/components/GoogleAnalytics.tsx` 삭제
- GA4 실시간 정상 확인됨

### 2.2 404 URL → 301 Redirect 처리

`next.config.ts`에 redirects 추가:

| 기존 URL | → | 대상 URL |
|----------|---|-----------|
| `/youtube-tax-calculator` | → | `/calculators/youtube-earnings-after-tax` |
| `/youtube-earnings-after-tax-calculator` | → | `/calculators/youtube-earnings-after-tax` |
| `/how-much-tax-do-youtubers-pay` | → | `/guides/tax/us` |

- `permanent: true` (308 Permanent Redirect)
- SEO 관점에서 301과 동일 효과

### 2.3 ISR 상태

- Vercel ISR Writes 한도 초과 상태
- 계정 전체(shared) 영향
- TakeHomeHub 자체는 정적 생성(SSG)이므로 직접적 영향 적음
- 상태 관찰 중

---

## 3. 배포 정책

- Vercel 배포 **일시 중단**
- 이유: ISR 상태 관찰
- 오늘(04-02): 로컬 작업 + 커밋만 (push/deploy 금지)
- 내일(04-03, STEP B): ISR 상태 확인 후 push + deploy

---

## 4. 현재 상태

| 항목 | 상태 |
|------|------|
| build | 성공 (error 0 / warning 0) |
| GA4 | 정상 동작 |
| AdSense | 승인 대기 (ads.txt + meta tag 배포됨) |
| GSC | 인덱싱 대기 |
| Console error | 0 |
| 404 URLs | redirect 준비 완료 (미배포) |

---

## 5. 다음 단계 (STEP B — 04-03)

1. Vercel Usage에서 ISR Writes 상태 확인
2. `git push origin main`
3. `vercel --prod --force --yes`
4. Redirect 검증: 3개 URL 정상 이동 확인
5. GA4 실시간 유지 확인
6. Console error 0 확인
7. GSC URL 검사 + 재크롤 요청

---

## 6. 운영 규칙

- 구조 변경 금지
- 페이지 생성 금지
- 리팩토링 금지
- redirect만 적용

---

## 7. 파일 변경

| 파일 | 변경 |
|------|------|
| `next.config.ts` | redirects 3개 추가 |
| `GPT-HANDOFF-2026-04-02.md` | 신규 |
| `SESSION-HANDOFF.md` | 업데이트 |

---

## 8. 한 줄 요약

→ 404 redirect 준비 완료 + ISR 관찰 중 → 내일 배포
