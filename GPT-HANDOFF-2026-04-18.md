# TakeHomeHub — GPT 핸드오프 (2026-04-18)

> Claude Code 세션 종료 후 GPT에서 이어서 작업할 때 사용.

---

## 1. 오늘 한 일 (4/18)

### 보고서 작성
- GSC + GA4 + Coverage 데이터 분석 → `REPORT-2026-04-18.md` 생성
- 1차 개입(4/14) 효과 입증: us-vs-germany +48%, us-vs-canada +114%
- 운영 판단 기준 2개 충족 확인 (홈 업데이트 + 역방향 링크)

### 2차 개입 실행 (커밋 e09582b)
변경 파일 4개:

| 파일 | 변경 내용 |
|---|---|
| `src/app/page.tsx` | Top Comparisons에 US vs UK 카드 추가 (2→3개), grid `sm:grid-cols-2 lg:grid-cols-3` |
| `content/guides/tax/us.md` | Related 섹션에 "Compare US vs Germany — Side-by-Side" 링크 추가 + 빈 줄 |
| `content/guides/tax/canada.md` | Related 섹션에 "Compare US vs Canada — Side-by-Side" 링크 추가 + 빈 줄 |
| `content/guides/tax/uk.md` | Related 섹션에 "Compare US vs UK — Side-by-Side" 링크 추가 + 빈 줄 |

### 건드리지 않은 것
- Germany 가이드 (1차에서 이미 완료)
- India 가이드 (데이터 약함)
- 미색인 페이지로 가는 링크 (크롤링 안 된 7페이지)
- sitemap, SSOT 수치, 디자인 시스템

---

## 2. 현재 GSC 상태 (3/29~4/16)

| 지표 | 값 |
|---|---|
| 총 노출 | 2,704 |
| 총 클릭 | 4 |
| 평균 CTR | 0.15% |
| 평균 순위 | 8.9 |
| 색인 | 16 / 26 |

### 페이지별 핵심

| 페이지 | 노출 | 클릭 | 순위 |
|---|---|---|---|
| Germany 가이드 | 1,568 | 2 | 6.71 |
| Canada 가이드 | 363 | 1 | 9.26 |
| US 가이드 | 251 | 1 | 17.45 |
| India 가이드 | 237 | 0 | 8.63 |
| 비교 메인 | 180 | 0 | 6.72 |
| us-vs-germany | 31 | 0 | 7.97 |
| us-vs-canada | 15 | 0 | 6.47 |
| us-vs-uk | 8 | 0 | 7.75 |

### 미색인 7페이지 (발견됨, 크롤링 안 됨)
- /compare/germany-vs-canada-youtube-tax
- /compare/uk-vs-canada-youtube-tax
- /compare/uk-vs-germany-youtube-tax
- /guides/do-youtubers-pay-taxes-germany
- /guides/how-much-tax-do-youtubers-pay
- /guides/youtube-income-tax-by-country
- /guides/youtube-tax-rates-comparison

---

## 3. 내부 링크 현황 (2차 개입 후)

| 가이드 | 비교 링크 대상 | 추가 시점 |
|---|---|---|
| Germany | us-vs-germany | 1차 (4/14) |
| US | us-vs-germany | 2차 (4/18) |
| Canada | us-vs-canada | 2차 (4/18) |
| UK | us-vs-uk | 2차 (4/18) |
| India | — | 미수정 (데이터 약함) |

홈페이지 Top Comparisons: us-vs-germany, us-vs-canada, us-vs-uk (3개)

---

## 4. 다음 체크포인트 (4/22~23)

확인 항목:
1. us-vs-uk 노출 8 → 증가 여부 (2차 개입 효과)
2. us-vs-germany / us-vs-canada 노출 추가 증가 여부
3. 비교 페이지 첫 클릭 발생 여부
4. 미색인 7페이지 크롤링 시작 여부

### 판단 기준
- 비교 페이지 노출 증가 + 클릭 발생 → 성공, India 가이드에도 같은 패턴 확장 검토
- 변화 없음 → 미색인 페이지 수동 색인 요청 (GSC URL 검사)
- CTR 0% 지속 → 메타 타이틀/디스크립션 최적화 검토

### 절대 하지 말 것
- 4/22 이전 추가 개입
- 미색인 페이지로 내부 링크 추가
- SSOT 수치 변경
- India 가이드 수정 (근거 부족)

---

## 5. 참고 파일

| 파일 | 용도 |
|---|---|
| `REPORT-2026-04-18.md` | 오늘 분석 보고서 (GSC + GA4 + Coverage 상세) |
| `CLAUDE-UI-HANDOFF.md` | Claude UI 세션용 전체 맥락 핸드오프 |
| `src/app/page.tsx` | 홈페이지 (Top Comparisons 섹션) |
| `content/guides/tax/*.md` | 5개국 가이드 (Related 섹션) |
