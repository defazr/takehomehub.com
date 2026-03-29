# Session Handoff — Claude Code 세션 간 인수인계

---

## 빠른 시작

1. 이 파일 읽기
2. `PROJECT_SPEC.md` 읽기
3. 최신 핸드오프: `GPT-HANDOFF-2026-03-29-v4.md`

---

## 현재 상태 (2026-03-29 최종)

- **라이브**: https://takehomehub.com
- **Console 에러**: 0
- **11 페이지**, AdSense 신청 준비 완료
- **Git**: `ea1d840` on main, clean
- **모드**: 관찰 모드 (코드 수정 금지)

---

## 기술 제약 (필독)

| 제약 | 설명 |
|---|---|
| **next/script 사용 금지** | Next.js 16에서 appendChild 에러 발생. `GoogleAnalytics.tsx` 패턴 사용 |
| shadcn/ui | Base UI 기반 (Radix 금지) |
| Tailwind | v4, `@plugin` 방식 |
| Next.js | v16, `params` = Promise |
| prose | `max-width: none` (65ch 기본값 제거됨) |
| Markdown | 원본 수정 금지 |
| 디자인 | AG Kit: #0F172A / #1E3A8A / #CA8A04 / Lexend / Source Sans 3 |

---

## 주요 파일

| 파일 | 역할 |
|---|---|
| `src/components/GoogleAnalytics.tsx` | GA4 (useEffect 방식 — next/script 대체) |
| `src/components/Footer.tsx` | 3단 Footer (Tools/Countries/Legal) |
| `src/components/MobileMenu.tsx` | 햄버거 메뉴 (Sheet/Base UI) |
| `src/lib/markdown.ts` | Markdown 파싱 |
| `src/app/globals.css` | 디자인 시스템 |
| `next.config.ts` | source maps off |

---

## 남은 작업

### 수동 (코드 변경 없음)
- GSC sitemap 제출 + 인덱싱
- AdSense 신청
- 3-7일 관찰

### 이후 (선택)
- Calculator 정확도 업그레이드
- 다크모드 (AG Kit 다크 팔레트 필요)
- 추가 국가

---

## 배포

```bash
cd /Users/dapala.corp/python/root/scripts/takehomehub-v2
vercel --prod --force --yes
```
