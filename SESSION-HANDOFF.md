# Session Handoff — Claude Code 세션 간 인수인계

---

## 빠른 시작

1. 이 파일 읽기
2. `PROGRESS.md` 읽기
3. `PROJECT_SPEC.md` 읽기
4. 최신 `GPT-HANDOFF-2026-03-29-v3.md` 읽기

---

## 현재 상태 (2026-03-29 세션 3 종료)

- **사이트 라이브**: https://takehomehub.com
- **11 페이지** 배포 완료
- **AdSense 신청 준비 완료**
- **Git**: main, `fb06839`, clean
- **Vercel**: takehomehub-v2 프로젝트, GA4 환경변수 설정 완료

---

## 페이지 목록 (11개)

| URL | 설명 |
|---|---|
| `/` | Homepage (dark hero) |
| `/guides/tax/us` | US Guide |
| `/guides/tax/germany` | Germany Guide |
| `/guides/tax/canada` | Canada Guide |
| `/guides/tax/uk` | UK Guide |
| `/guides/tax/india` | India Guide |
| `/compare/youtube-tax-by-country` | Comparison |
| `/calculators/youtube-earnings-after-tax` | Calculator |
| `/glossary` | Tax Glossary |
| `/about` | About |
| `/privacy-policy` | Privacy Policy |

---

## 기술 제약

| 제약 | 설명 |
|---|---|
| shadcn/ui | Base UI 기반 (Radix 금지) |
| Tailwind | v4, `@plugin` 방식 |
| Next.js | v16, `params` = Promise |
| Sheet | Base UI Dialog, uncontrolled |
| Markdown | 원본 수정 금지 |
| 디자인 | AG Kit: navy/gold/Lexend/Source Sans 3 |
| 콘텐츠 | placeholder 금지 |

---

## 디자인 시스템

| 항목 | 값 |
|---|---|
| Primary | #0F172A |
| Secondary | #1E3A8A |
| CTA | #CA8A04 |
| Background | #F8FAFC |
| Text | #020617 |
| Heading | Lexend |
| Body | Source Sans 3 |

---

## 주요 파일

| 파일 | 역할 |
|---|---|
| `PROJECT_SPEC.md` | 구조/규칙 SSOT |
| `GPT-HANDOFF-2026-03-29-v3.md` | 최신 핸드오프 |
| `content/guides/tax/*.md` | 5개국 콘텐츠 |
| `content/guides/glossary.md` | 용어집 |
| `src/lib/markdown.ts` | Markdown 파싱 |
| `src/components/TaxCalculator.tsx` | 계산기 |
| `src/components/MobileMenu.tsx` | 햄버거 메뉴 (Sheet) |
| `src/components/Footer.tsx` | 푸터 (11개 링크) |
| `src/app/globals.css` | 디자인 시스템 |
| `.env.local` | GA4 ID |

---

## 남은 작업

### 즉시 (수동, 코드 변경 없음)
- GSC sitemap 제출 + 인덱싱 요청
- AdSense 신청
- 3-7일 관찰

### 이후 (선택)
- Calculator 정확도 업그레이드
- 다크모드
- 추가 국가 콘텐츠

---

## 배포

```bash
cd /Users/dapala.corp/python/root/scripts/takehomehub-v2
vercel --prod
```

Vercel 환경변수: `NEXT_PUBLIC_GA_ID=G-L3M1S3QK71`
