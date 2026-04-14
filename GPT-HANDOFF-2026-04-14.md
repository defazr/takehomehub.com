# GPT Handoff — 2026-04-14

---

## 현재 상태

- **23페이지** 라이브 / **색인 15** / **미색인 8** (자연 크롤링 대기)
- **트래픽 앵커**: Germany 가이드 (노출 60%, 1,219회)
- **성장 축**: 비교 페이지 4개 (순위 3~10위)
- **잠재 키워드**: "youtube tax calculator" (순위 8)
- **현재 모드**: 1차 개입 완료 → 효과 측정 대기

---

## 4/14 세션 작업 요약

### GSC + GA4 데이터 분석
- **GSC (3/29~4/12, 15일)**: 총 노출 2,057 / 클릭 3 / 평균 순위 8~9
- **GA4 (4/7~4/13, 7일)**: 활성 사용자 13명 / 평균 참여 20.7초
- Germany 가이드가 노출 60% 점유 — 사이트 엔진
- 비교 페이지 4개 순위 10 이내 진입
- us-vs-canada 순위 3.57 (전체 최고)

### 트리거 충족 → 1차 개입 실행
- 홈페이지 업데이트 트리거 충족
- 역방향 내부 링크 트리거 충족
- 카니발리제이션은 데이터 부족으로 보류

### 1차 개입 (커밋 338009f)
- **홈페이지**: "Top YouTube Tax Comparisons" 블록 추가
  - US vs Germany (노출 21, 순위 6.57)
  - US vs Canada (순위 3.57, 전체 최고)
- **Germany 가이드**: us-vs-germany 비교 링크 1개 추가
- 미색인 페이지(germany-vs-canada 등)는 건드리지 않음

### 2차 개입 — UX 미세 개선 (커밋 427620e)
- Germany 가이드 Related 섹션 빈 줄 6개 추가
- 한 줄로 합쳐지던 7개 링크 → 각각 독립 `<p>` 태그로 렌더링
- 스타일 강조 없음 (자연스러운 상태 유지)

### 검증 결과
- 빌드 0 에러
- 200 응답 4/4
- SSOT 무결성 변경 없음
- 라이브 페이지 HTML 검증 통과

---

## SSOT 수치 (변경 없음)

| 국가 | Retention | Highlight |
|---|---|---|
| US | 78% | $60k → $46,869 |
| Germany | 74% | €60k → €44,390 |
| Canada | 66% | C$90k → C$59,809 |
| UK | 77% | £60k → £46,111 |
| India | 92% | ₹60L → ₹55L |

---

## 다음 단계 (4/18 예정)

### 핵심 KPI 체크
- us-vs-germany 노출 21 → 증가 여부
- us-vs-canada 노출 7 → 증가 여부
- 클릭 0 → 1 발생 여부

### 보조 체크
- Germany 가이드 노출 1,219 유지/증가 여부
- /compare/youtube-tax-by-country 순위 변동
- 미색인 7페이지 자연 크롤링 진행 (1970-01-01 → 실제 날짜)
- 카니발리제이션 여부 (검색어×URL 매핑)

### 시나리오별 다음 단계

| 결과 | 다음 단계 |
|---|---|
| 노출 증가 | 내부 링크 효과 입증 → US/CA/UK/IN 가이드에도 같은 패턴 확장 |
| 클릭 발생 | CTR 싸움 진입 → 제목/메타 최적화 검토 |
| 변화 없음 | 2차 개입 → CA/UK 가이드 비교 링크 추가 |

---

## 절대 하지 말 것

- ❌ 다른 가이드(US/Canada/UK/India) 수정
- ❌ 링크 더 추가
- ❌ 디자인 손대기
- ❌ 구조 바꾸기
- ❌ 미색인 페이지 직접 개입
- ❌ SSOT 수치 변경

---

## 관련 커밋

- `338009f` — feat: add top comparison links to homepage + Germany guide
- `427620e` — style: improve Germany guide Related section readability

---

## 기술 제약 (이전과 동일)

| 제약 | 설명 |
|---|---|
| next/script 사용 금지 | appendChild 에러. GA4는 body inline script, AdSense는 useEffect |
| shadcn/ui | Base UI 기반 (Radix 금지) |
| Tailwind v4 | `@plugin` 방식 |
| Next.js 16 | params = Promise, await 필수 |
| compare/guides 페이지 | TSX 직접 작성 (마크다운 아님) |
| sitemap | 수동 URL 나열 (자동 아님) |
| 마크다운 파서 | `content/guides/tax` 하드코딩 — 수정 금지 |
