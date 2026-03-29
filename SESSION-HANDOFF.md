# Session Handoff — Claude Code 세션 간 인수인계

이 파일은 Claude Code가 새 세션에서 작업을 이어받을 때 가장 먼저 읽어야 하는 문서다.

---

## 빠른 시작

1. 이 파일 읽기
2. `PROGRESS.md` 읽기
3. `PROJECT_SPEC.md` 읽기 (구조 규칙)
4. 최신 `GPT-HANDOFF-*.md` 읽기 → `GPT-HANDOFF-2026-03-29-v2.md`

---

## 현재 상태 (2026-03-29 세션 2 종료 시점)

- **사이트 라이브**: https://takehomehub.com
- **디자인 오버홀 완료** — AG Kit 기반 (navy/gold, Lexend, hero layout)
- **8개 페이지** 정상 렌더링 + SSG + Vercel 배포
- **5개국 콘텐츠** 전부 완성 (US, Germany, Canada, UK, India)
- **계산기** 동작 (3점 보간, 5개국)
- **SEO**: FAQ/Breadcrumb schema, OG tags, sitemap, robots
- **GA4** 연결 (환경변수 방식)
- **Git**: main 브랜치, `3d1756a`, clean state

---

## 핵심 기술 제약 (반드시 준수)

| 제약 | 설명 |
|---|---|
| shadcn/ui | Base UI 기반. Radix API 사용 금지 |
| Tailwind | v4. 플러그인은 `@plugin` 방식 |
| Next.js | v16. `params`는 Promise, `await` 필수 |
| Markdown | 원본 수정 금지. 파싱 로직으로 섹션 분리 |
| 콘텐츠 | 임시/placeholder 삽입 절대 금지 |
| 디자인 | AG Kit 시스템 유지 (navy/gold/Lexend/Source Sans 3) |
| CountryLinks | 새 국가 추가 시 `ready: true` 변경 필수 |

---

## 디자인 시스템

| 항목 | 값 |
|---|---|
| Primary | #0F172A (navy) |
| Secondary | #1E3A8A (blue) |
| CTA | #CA8A04 (gold) |
| Background | #F8FAFC |
| Text | #020617 |
| Heading | Lexend |
| Body | Source Sans 3 |

---

## 주요 파일 위치

| 파일 | 역할 |
|---|---|
| `PROJECT_SPEC.md` | Single source of truth (구조/규칙) |
| `PROGRESS.md` | 상세 진행 상황 |
| `GPT-HANDOFF-2026-03-29-v2.md` | 최신 GPT 핸드오프 |
| `content/guides/tax/*.md` | 5개국 콘텐츠 |
| `src/lib/markdown.ts` | Markdown 파싱 + 섹션 추출 |
| `src/components/TaxCalculator.tsx` | 계산기 (client) |
| `src/components/CountryLinks.tsx` | 국가 링크 (ready 플래그) |
| `src/app/globals.css` | 디자인 시스템 (prose overrides, colors, fonts) |
| `.env.local` | GA4 ID (gitignore 대상) |

---

## 남은 작업

### Phase 9 수동 작업 (코드 변경 없음)
- GSC 소유권 확인 + sitemap 제출 + 인덱싱 요청
- 초기 트래픽 신호 (Reddit/Twitter)
- 3~7일 관찰 (코드/콘텐츠 수정 금지)

### 인덱싱 관찰 후
- Glossary 페이지 (`/glossary`)
- About + Disclaimer 페이지 (`/about`)
- (선택) Calculator 정확도 업그레이드
- (선택) Comparison 페이지 디자인 개선

---

## Vercel 배포

```bash
vercel --prod  # 수동 배포 (GitHub auto-deploy도 설정됨)
```

Vercel 프로젝트: `takehomehub-v2`
환경변수: `NEXT_PUBLIC_GA_ID=G-L3M1S3QK71` (Production + Preview)
