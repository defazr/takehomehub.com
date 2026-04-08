# GPT HANDOFF — 2026-04-08

이전: GPT-HANDOFF-2026-04-02.md

---

## 1. 세션 요약

비교 콘텐츠 4개 + 롱테일 4개 + 허브 1개 배포. 11→23페이지. 전체 콘텐츠 구조 완성.

---

## 2. 이번 세션 배포 전체

| # | 페이지 | URL | 유형 |
|---|--------|-----|------|
| 1 | US vs Canada | `/compare/us-vs-canada-youtube-tax` | 비교 |
| 2 | UK vs Germany | `/compare/uk-vs-germany-youtube-tax` | 비교 |
| 3 | Germany vs Canada | `/compare/germany-vs-canada-youtube-tax` | 비교 |
| 4 | UK vs Canada | `/compare/uk-vs-canada-youtube-tax` | 비교 |
| 5 | US vs India | `/compare/us-vs-india-youtube-tax` | 비교 |
| 6 | How Much Tax Do YouTubers Pay | `/guides/how-much-tax-do-youtubers-pay` | 롱테일 |
| 7 | Do YouTubers Pay Taxes Germany | `/guides/do-youtubers-pay-taxes-germany` | 롱테일 |
| 8 | YouTube Income Tax by Country | `/guides/youtube-income-tax-by-country` | 롱테일 |
| 9 | YouTube Tax Rates Comparison | `/guides/youtube-tax-rates-comparison` | 허브 |

이전 세션 (04-05) 배포:
- US vs Germany, US vs UK, Do YouTubers Pay Taxes US

---

## 3. 전체 사이트 구조 (23페이지)

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

### 롱테일 (4)
- `/guides/do-youtubers-pay-taxes-us`
- `/guides/do-youtubers-pay-taxes-germany`
- `/guides/how-much-tax-do-youtubers-pay`
- `/guides/youtube-income-tax-by-country`

### 허브 (1)
- `/guides/youtube-tax-rates-comparison`

### 도구/유틸 (6)
- `/` (Homepage)
- `/compare/youtube-tax-by-country` (5국 비교 원본)
- `/calculators/youtube-earnings-after-tax`
- `/glossary`
- `/about`
- `/privacy-policy`

---

## 4. 수치 출처 (Scenario B 기준)

| 국가 | Gross | Total Tax | Take-home | Retention |
|------|-------|-----------|-----------|-----------|
| US | $60,000 | $13,131 | $46,869 | 78% |
| Germany | €60,000 | €15,610 | €44,390 | 74% |
| UK | £60,000 | £13,889 | £46,111 | 77% |
| Canada | C$90,000 | C$30,191 | C$59,809 | 66% |
| India | ₹60,00,000 | ₹4,99,200 | ₹55,00,800 | 92% |

---

## 5. 내부 링크 구조

- 허브 페이지(`youtube-tax-rates-comparison`): 21개 내부 링크
- `youtube-income-tax-by-country`: 17개 내부 링크
- `how-much-tax-do-youtubers-pay`: 11개 내부 링크
- 모든 비교 페이지: 계산기(중간) + 가이드 2개(하단)
- 내부 링크 방향: forward only (역방향 미추가 — 의도적)

---

## 6. 현재 상태

| 항목 | 상태 |
|------|------|
| 총 페이지 | 23 |
| sitemap | 23개 URL |
| build | 성공 (error 0) |
| GA4 | 정상 |
| AdSense | 승인 대기 |
| Console error | 0 |

---

## 7. GPT 수정 반영 기록

- India SE tax: "None" → "No separate self-employment tax (presumptive scheme applies)"
- US threshold: $15,750 → $15,000 (SSOT 일치)
- UK tax range: 20%–45% → 0%–45% (Personal Allowance 반영)
- "Most YouTubers" → "YouTubers typically"
- "Most creators" → "Many YouTube creators"
- NICs 구체적 비율 → 일반화 표현
- "lowest retention rate" → "one of the lower retention rates"
- "Which Country Is Best" → "Which Country Is More Favorable"
- India 87A → "significantly reduce tax liability at lower income levels"

---

## 8. 다음 단계

- 전체 구조 완성 — 추가 콘텐츠 없음
- GSC 데이터 관찰 후 방향 결정
- 기존 페이지 수정 금지

---

## 9. 한 줄 요약

→ 23페이지 전체 구조 완성. 비교 7개 + 롱테일 4개 + 허브 1개 배포 완료. 관찰 모드 진입.
