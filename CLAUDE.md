# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 일반적으로 사용되는 명령어

### 개발 및 빌드
- `npm run dev` - 개발 서버 시작 (http://localhost:3000)
- `npm run build` - 프로덕션 빌드
- `npm run start` - 프로덕션 서버 실행
- `npm run lint` - ESLint 검사 실행

### 프로젝트별 설정
- 타입체크: TypeScript 설정으로 자동화되어 있음 (`tsconfig.json`)
- 테스트: 별도 테스트 프레임워크 없음 (필요시 확인 후 설정)

## 아키텍처 및 코드 구조

### 기술 스택
- **프레임워크**: Next.js 16 (App Router, 빌드/개발 기본 Turbopack)
- **UI 런타임**: React 19
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **UI 컴포넌트**: shadcn/ui (Radix UI 기반)
- **국제화**: next-intl (한국어/영어 지원)
- **테마**: next-themes (다크/라이트 모드)
- **폰트**: Geist Sans/Mono
- **배포**: Vercel

### 디렉토리 구조
```
src/
├── app/[locale]/              # 국제화 라우팅 (ko, en)
│   ├── layout.tsx            # 루트 레이아웃
│   ├── page.tsx              # 홈페이지 (소개/hero)
│   ├── projects/             # 프로젝트 페이지
│   ├── career/               # 경력 페이지
│   ├── contact/              # 연락처 페이지
│   ├── resume/               # 이력서 페이지
│   └── [...rest]/            # catch-all (404 처리)
├── app/api/send/route.ts     # 연락처 이메일 전송 API (edge runtime)
├── app/sitemap.ts            # 동적 사이트맵
├── components/               # UI 컴포넌트
│   ├── ui/                   # shadcn/ui 컴포넌트
│   ├── icons/                # 커스텀 아이콘
│   │   ├── tags/             # 기술 스택 아이콘 (frontend/backend/mobile/database/devops/ai-ml/tools 서브카테고리)
│   │   └── lang/             # 언어 플래그 아이콘들
│   ├── hero/                 # 히어로 섹션
│   ├── projects/             # 프로젝트 관련 컴포넌트
│   ├── career/               # 경력 관련 컴포넌트
│   └── contact/              # 연락처 폼 + 이메일 템플릿
├── data/                     # 정적 데이터 (AVATAR, LINKS, iconMap) — 콘텐츠는 여기 없음, messages 참고
├── constants/                # 네비게이션 항목(getNavItems) 및 data 재export
├── i18n/                     # 국제화 설정 (request.ts에 locales/defaultLocale 정의)
├── messages/                 # 언어별 메시지 + 콘텐츠 데이터 (ko.json, en.json)
├── lib/                      # 유틸리티 (utils.ts=cn, validation.ts=Zod 스키마)
├── hook/                     # 커스텀 훅 (use-pagination 등)
└── proxy.ts                  # 로케일 처리 (Next 16 proxy 규칙, 구 middleware.ts)
```

### 콘텐츠 데이터 관리 (중요)
- **프로젝트/경력/이력서 콘텐츠는 `src/messages/ko.json`, `en.json`에 저장됨** — 별도 데이터 파일이 아님. `src/data/`에는 AVATAR, LINKS, `iconMap`만 있음.
- 프로젝트는 `projects.items` 배열, 경력은 `career`, 이력서는 `resume` 키 하위에 위치.
- **각 프로젝트의 `tags[].icon`은 컴포넌트가 아니라 문자열** (예: `"NestJSIcon"`). 이 문자열은 렌더링 시 `src/data/index.ts`의 `iconMap`을 통해 실제 아이콘 컴포넌트로 변환됨.
  - 따라서 새 태그 아이콘을 쓰려면: 아이콘 컴포넌트 생성 → `iconMap`에 등록 → messages JSON의 `icon` 문자열이 `iconMap` 키와 정확히 일치해야 함.
  - `icon` 필드가 없는 태그는 아이콘 없이 이름만 표시됨 (예: `"TypeORM"`, `"JWT"`).
- **콘텐츠 수정 시 `ko.json`과 `en.json` 양쪽을 모두 갱신할 것** (구조가 동일해야 함).

### 국제화 시스템
- **기본 언어**: 한국어 (`ko`)
- **지원 언어**: 한국어, 영어 (`locales`는 `src/i18n/request.ts`에 정의)
- **라우팅**: `localePrefix: 'never'` (URL에 언어 코드 표시 안함)
- **메시지 파일**: `src/messages/ko.json`, `src/messages/en.json`
- **프록시**: `src/proxy.ts`에서 언어 처리 (`/api`, `_next`, `_vercel`, 파일 경로는 제외). Next 16에서 `middleware` → `proxy` 규칙으로 변경됨. next-intl `createMiddleware` 핸들러를 default export로 사용
- **언어 전환**: `src/components/lang-switcher.tsx`가 `NEXT_LOCALE` 쿠키를 설정하고 `router.refresh()` 호출 (별도 navigation API 미사용)

### UI 컴포넌트 시스템
- **기본**: shadcn/ui 컴포넌트 (`@/components/ui/`)
- **설정**: `components.json`에서 관리
- **테마**: CSS 변수 기반, 다크/라이트 모드 지원
- **폰트**: Geist Sans (기본), Geist Mono (코드용)

### 아이콘 관리
- **기술 스택 아이콘**: `src/components/icons/tags/<카테고리>/` (frontend, backend, mobile, database, devops, ai-ml, tools)
- **소셜/일반 아이콘**: `src/components/icons/`
- **아이콘 맵핑**: `src/data/index.ts`의 `iconMap`에서 문자열 → 컴포넌트 중앙 관리
- **사용법**: 새 기술 아이콘 추가 시 적절한 카테고리에 컴포넌트 생성 후 `iconMap`에 등록 필요 (messages JSON의 `icon` 문자열과 키 일치)

### 상태 관리 및 폼
- **폼**: react-hook-form + Zod 검증
- **토스트**: sonner 사용
- **툴팁**: Radix UI 기반

### 성능 최적화
- **이미지**: Next.js Image 컴포넌트, AVIF/WebP 형식 우선
- **번들**: Next.js 자동 최적화
- **뷰 전환**: next-view-transitions 사용
- **분석**: Vercel Analytics + Speed Insights

## 개발 시 주의사항

### 새 페이지 추가
- `src/app/[locale]/` 하위에 생성
- 국제화 메시지를 `ko.json`, `en.json`에 추가
- 타입 안정성을 위해 메시지 키 확인

### 새 기술 아이콘 추가
1. `src/components/icons/tags/<카테고리>/` 하위에 컴포넌트 생성 (예: `frontend/`, `ai-ml/`)
2. `src/data/index.ts`에 import 후 `iconMap`에 등록
3. messages JSON에서 해당 태그의 `icon` 문자열을 `iconMap` 키와 동일하게 설정
4. 일관된 크기 (24x24) 및 스타일 유지

### 스타일링
- Tailwind CSS 클래스 사용
- `cn()` 유틸리티로 조건부 스타일링
- CSS 변수 활용한 테마 대응

### 타입 정의
- `src/types.d.ts`에 공통 타입 정의
- `IconComponent` 타입 활용
- 엄격한 TypeScript 설정 준수

### 이메일 기능 (연락처 폼 흐름)
- **폼 컴포넌트**: `src/components/contact/form.tsx` — react-hook-form + Zod
- **클라이언트 검증 스키마**: `src/lib/validation.ts`의 `getFormSchema` (i18n 메시지 사용, honeypot 필드 포함, message에 URL 차단 refine)
- **API 라우트**: `src/app/api/send/route.ts` — edge runtime. 폼과 **별도의 자체 검증**을 수행하며, IP 기반 인메모리 rate limiting(1분당 3회) 적용 후 Resend로 전송
- **이메일 템플릿**: `src/components/contact/email-template.tsx`
- **이메일 서비스**: Resend, **환경 변수 `RESEND_API_KEY` 필요**
- 참고: rate limit은 인메모리 Map이라 서버리스/edge 인스턴스 간 공유되지 않음 (모범 사례는 route.ts 주석 참고)

### ESLint 설정
- **설정 파일**: `.eslintrc.cjs` (ESLint 8, eslintrc 방식). 확장: eslint-config-love, standard-with-typescript, next/core-web-vitals
- **플러그인**: react, react-hooks, import, promise
- **실행**: Next 16에서 `next lint`가 제거되어 `npm run lint`는 `eslint src --ext .js,.jsx,.ts,.tsx`를 직접 호출함
- **자동 수정**: `npm run lint -- --fix`
- 주의: IDE 포매터(4-space/무 curly-spacing)와 ESLint standard 규칙이 충돌하므로 저장 후 `--fix` 필요할 수 있음

### 주의: React 19 + next-themes
- next-themes(미유지보수)가 인라인 `<script>`를 렌더해 React 19가 "Encountered a script tag" 경고를 냄 (SSR에선 정상 동작하는 오탐). `src/components/theme-provider.tsx`에서 dev 한정으로 해당 경고만 필터링함

### 의존성 참고
- `sharp`는 Next 16이 `^0.34.5`로 고정하나 libvips CVE 때문에 `package.json`의 `overrides`로 `^0.35.3` 강제. Next이 sharp 0.35를 채택하면 override 제거 가능