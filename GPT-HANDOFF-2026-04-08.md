# GPT HANDOFF — 2026-04-08

이전: GPT-HANDOFF-2026-04-02.md

---

## 1. 세션 요약

비교 콘텐츠 4개 추가 배포 (US vs Canada, UK vs Germany, Germany vs Canada, UK vs Canada, US vs India). 총 19페이지. 비교 콘텐츠 전부 완료.

---

## 2. 이번 세션 배포

| # | 페이지 | URL |
|---|--------|-----|
| 4 | US vs Canada | `/compare/us-vs-canada-youtube-tax` |
| 5 | UK vs Germany | `/compare/uk-vs-germany-youtube-tax` |
| 6 | Germany vs Canada | `/compare/germany-vs-canada-youtube-tax` |
| 7 | UK vs Canada | `/compare/uk-vs-canada-youtube-tax` |
| 8 | US vs India | `/compare/us-vs-india-youtube-tax` |

모두 배포 + 검증 완료 (200 OK, sitemap 반영, GA4 정상)

---

## 3. 전체 비교 콘텐츠 현황 (완료)

| # | 페이지 | 배포일 |
|---|--------|--------|
| 1 | US vs Germany | 04-05 |
| 2 | US vs UK | 04-05 |
| 3 | Do YouTubers Pay Taxes US | 04-05 |
| 4 | US vs Canada | 04-08 |
| 5 | UK vs Germany | 04-08 |
| 6 | Germany vs Canada | 04-08 |
| 7 | UK vs Canada | 04-08 |
| 8 | US vs India | 04-08 |

---

## 4. 수치 출처 (Scenario B 기준)

| 국가 | Gross | Total Tax | Take-home | Retention |
|------|-------|-----------|-----------|-----------|
| US | $60,000 | $13,131 | $46,869 | 78% |
| Germany | €60,000 | €15,610 | €44,390 | 74% |
| UK | £60,000 | £13,889 | £46,111 | 77% |
| Canada | C$90,000 | C$30,191 | C$59,809 | 66% |
| India | ₹60,00,000 | ₹4,99,200 | ₹55,00,800 | 92% |

주의: Canada(C$90K)와 India(₹60L)는 US $60K과 다른 금액 → retention rate 비교 방식 사용

---

## 5. 현재 사이트 구조 (19페이지)

### 원본 가이드 (5)
- `/guides/tax/us`, `/guides/tax/germany`, `/guides/tax/canada`, `/guides/tax/uk`, `/guides/tax/india`

### 비교 페이지 (7)
- `/compare/us-vs-germany-youtube-tax`
- `/compare/us-vs-uk-youtube-tax`
- `/compare/us-vs-canada-youtube-tax`
- `/compare/us-vs-india-youtube-tax`
- `/compare/uk-vs-germany-youtube-tax`
- `/compare/uk-vs-canada-youtube-tax`
- `/compare/germany-vs-canada-youtube-tax`

### 롱테일 (1)
- `/guides/do-youtubers-pay-taxes-us`

### 도구/유틸 (6)
- `/` (Homepage)
- `/compare/youtube-tax-by-country` (5국 비교)
- `/calculators/youtube-earnings-after-tax`
- `/glossary`
- `/about`
- `/privacy-policy`

---

## 6. 현재 상태

| 항목 | 상태 |
|------|------|
| 총 페이지 | 19 |
| build | 성공 (error 0) |
| GA4 | 정상 |
| AdSense | 승인 대기 |
| sitemap | 19개 URL |
| Console error | 0 |

---

## 7. 다음 단계

- 롱테일 콘텐츠 추가 (지시서 대기)
- 비교 콘텐츠는 전부 완료 — 추가 없음

---

## 8. 기술 패턴 (비교/롱테일 공통)

- TSX 직접 작성 (마크다운 아님)
- 수치는 가이드 Scenario B 원본 그대로
- sitemap.ts 수동 추가
- 내부 링크: 계산기(중간) + 가이드(하단)
- 기존 페이지 수정 금지

---

## 9. 한 줄 요약

→ 비교 콘텐츠 8개 전부 완료 (19페이지) → 롱테일 단계 진입
