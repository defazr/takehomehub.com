# GPT Handoff — 2026-03-29 (Session 2)

이 문서는 GPT(지시서 작성자)가 다음 세션에서 Claude Code에 지시를 내릴 때 참고하는 핸드오프 문서다.
이전 핸드오프(GPT-HANDOFF-2026-03-29.md) 이후 진행된 작업을 기록한다.

---

## 이번 세션에서 완료한 작업

### Phase 8 — Trust Signals + SEO
- **커밋**: `d10e262`
- Source Transparency 블록 (Disclaimer에 공식 출처 + 최종 검증일)
- FAQ Schema (JSON-LD) — 5개국 페이지 + Comparison 페이지
- Breadcrumb Schema (JSON-LD) — 5개국 페이지 + Comparison 페이지
- Calculator SEO 텍스트 3문단 추가 (키워드 포함)
- Open Graph 기본 설정 (og:title, og:description, og:url, og:site_name, og:locale)
- Twitter Card 설정

### Phase 8.5 — Design Polish (Minimal)
- **커밋**: `576060d`
- Typography 통일 (H1/H2/H3/본문 prose overrides)
- Spacing 일관성 (mt-10~12, max-w-3xl)
- Table 가독성 (padding, border, mobile overflow)
- Sticky nav + backdrop blur
- Navigation에 Calculator 링크 추가
- 모바일 반응형 (font-size, table padding 축소)

### Phase 8.5+ — Antigravity Kit Polish
- **커밋**: `cb8b34b`
- AG Kit 검색 실행 (경로: `/Users/dapala.corp/dust-fazr/.claude/skills/ui-ux-pro-max/`)
- shadow-sm 카드, nav 브랜딩 ("TakeHomeHub")

### Phase 9 (코드 부분) — GA4 + Deployment
- **커밋**: `576e90d` — GA4 via 환경변수 (`NEXT_PUBLIC_GA_ID`)
- `.env.local` 생성 (gitignore에 `.env*` 포함 확인)
- Vercel 환경변수 Production + Preview 추가

### Design Overhaul — AG Kit Design System 전면 적용
- **커밋**: `3d1756a`
- **폰트**: Geist → Lexend (heading) + Source Sans 3 (body)
- **컬러**: Navy #0F172A + Blue #1E3A8A + Gold CTA #CA8A04 + 배경 #F8FAFC
- **Homepage**: Dark hero 섹션 + Gold CTA 버튼 + 국가별 카드 그리드
- **Calculator**: 색상 구분 카드 (빨강 세금, 초록 take-home, 금색 retention)
- **테이블**: Header 배경 + uppercase label + hover 효과
- **H2**: 하단 border-bottom 구분선 추가
- **Nav**: 배경 blur + hover transition + 브랜딩

### Vercel 배포
- `vercel --prod` — `takehomehub.com`에 연결 완료
- Vercel 프로젝트: `takehomehub-v2`
- GitHub 연결: `defazr/takehomehub.com` main 브랜치

---

## 현재 사이트 상태

### 라이브 URL
- **https://takehomehub.com** — Production (새 디자인 적용)
- **https://takehomehub-v2.vercel.app** — Vercel 기본 도메인

### 동작하는 페이지 (8개)
| URL | 설명 |
|---|---|
| `/` | Homepage (dark hero + 국가 카드) |
| `/guides/tax/us` | US Tax Guide |
| `/guides/tax/germany` | Germany Tax Guide |
| `/guides/tax/canada` | Canada Tax Guide |
| `/guides/tax/uk` | UK Tax Guide |
| `/guides/tax/india` | India Tax Guide |
| `/compare/youtube-tax-by-country` | 비교 테이블 (실제 데이터 + FAQ schema) |
| `/calculators/youtube-earnings-after-tax` | 계산기 (3점 보간) |

### Git
- **최신 커밋**: `3d1756a`
- **repo**: https://github.com/defazr/takehomehub.com.git
- **branch**: main

---

## 디자인 시스템 (AG Kit 기반)

| 항목 | 값 |
|---|---|
| Style | Minimalism & Swiss Style |
| Primary | #0F172A (navy) |
| Secondary | #1E3A8A (blue) |
| CTA | #CA8A04 (gold) |
| Background | #F8FAFC (warm slate) |
| Text | #020617 |
| Heading Font | Lexend |
| Body Font | Source Sans 3 |
| AG Kit 경로 | `/Users/dapala.corp/dust-fazr/.claude/skills/ui-ux-pro-max/` |

---

## Phase 9 남은 수동 작업

- [ ] Google Search Console: 소유권 확인 (DNS)
- [ ] Sitemap 제출 (`https://takehomehub.com/sitemap.xml`)
- [ ] 핵심 3개 URL 인덱싱 요청 (`/`, `/compare/...`, `/guides/tax/us`)
- [ ] Reddit/Twitter 초기 신호 (5~20 클릭)
- [ ] 3~7일 대기 (코드/콘텐츠 수정 금지)
- [ ] DNS 설정 확인 (Vercel 권장: A → 76.76.21.21, CNAME www → cname.vercel-dns.com)

---

## 아직 안 한 것

| 항목 | 우선순위 |
|---|---|
| Glossary 페이지 (`/glossary`) | 인덱싱 관찰 후 |
| About + Disclaimer 페이지 (`/about`) | 인덱싱 관찰 후 |
| Comparison 페이지 디자인 업그레이드 | 선택 |
| Calculator 정확도 (실제 세금 엔진) | 선택 |

---

## 기술 제약 (필독)

1. shadcn/ui v4 = Base UI 기반 (Radix API 금지)
2. Tailwind v4 = `@plugin` 방식
3. Next.js 16 params = Promise (`await params` 필수)
4. remark-gfm 필수
5. Markdown 원본 수정 금지
6. 임시 콘텐츠 삽입 금지
7. AG Kit 디자인 시스템 유지 (navy/gold/Lexend)

---

## 실행 명령어

```bash
cd /Users/dapala.corp/python/root/scripts/takehomehub-v2
npm run dev              # 개발 서버
npm run build            # 빌드 확인
vercel --prod            # 수동 배포
git log --oneline        # 커밋 히스토리
```
