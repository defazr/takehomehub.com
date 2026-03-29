# Session Handoff — Claude Code 세션 간 인수인계

이 파일은 Claude Code가 새 세션에서 작업을 이어받을 때 가장 먼저 읽어야 하는 문서다.

---

## 빠른 시작

1. 이 파일 읽기
2. `PROGRESS.md` 읽기
3. `PROJECT_SPEC.md` 읽기 (구조 규칙)
4. 최신 `GPT-HANDOFF-*.md` 읽기 (GPT 지시자 컨텍스트)

---

## 현재 상태 (2026-03-29 세션 종료 시점)

- **Phase 7 완료** — 사이트 핵심 기능 모두 동작
- **8개 페이지** 정상 렌더링 + SSG 빌드 통과
- **5개국 콘텐츠** 전부 완성 (US, Germany, Canada, UK, India)
- **계산기** 동작 (3점 보간, 5개국)
- **Git**: main 브랜치, clean state, push 완료

---

## 핵심 기술 제약 (반드시 준수)

| 제약 | 설명 |
|---|---|
| shadcn/ui | Base UI 기반. Radix API 사용 금지 |
| Tailwind | v4. 플러그인은 `@plugin` 방식 |
| Next.js | v16. `params`는 Promise, `await` 필수 |
| Markdown | 원본 수정 금지. 파싱 로직으로 섹션 분리 |
| 콘텐츠 | 임시/placeholder 삽입 절대 금지 |
| CountryLinks | 새 국가 추가 시 `ready: true` 변경 필수 |

---

## 주요 파일 위치

| 파일 | 역할 |
|---|---|
| `PROJECT_SPEC.md` | Single source of truth (구조/규칙) |
| `PROGRESS.md` | 상세 진행 상황 + 파일 구조 + 절차 |
| `GPT-HANDOFF-2026-03-29.md` | GPT 지시자용 핸드오프 |
| `content/guides/tax/*.md` | 5개국 콘텐츠 (Markdown) |
| `src/lib/markdown.ts` | Markdown 파싱 + 섹션 추출 |
| `src/components/TaxCalculator.tsx` | 계산기 (클라이언트 컴포넌트) |
| `src/components/CountryLinks.tsx` | 국가 링크 (ready 플래그 관리) |

---

## 남은 작업

1. Glossary 페이지 (`/glossary`)
2. About + Disclaimer 페이지 (`/about`)
3. Navigation에 Calculator 링크 추가
4. Vercel 배포
5. (선택) Calculator 정확도 업그레이드
