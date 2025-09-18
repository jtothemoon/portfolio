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
- **프레임워크**: Next.js 14 (App Router)
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
│   ├── page.tsx              # 홈페이지
│   ├── projects/             # 프로젝트 페이지
│   ├── career/               # 경력 페이지
│   └── contact/              # 연락처 페이지
├── components/               # UI 컴포넌트
│   ├── ui/                   # shadcn/ui 컴포넌트
│   ├── icons/                # 커스텀 아이콘
│   │   ├── tags/             # 기술 스택 아이콘들
│   │   └── lang/             # 언어 플래그 아이콘들
│   ├── hero/                 # 히어로 섹션
│   ├── projects/             # 프로젝트 관련 컴포넌트
│   ├── career/               # 경력 관련 컴포넌트
│   └── contact/              # 연락처 관련 컴포넌트
├── data/                     # 정적 데이터 (아바타, 링크, 아이콘 맵핑)
├── i18n/                     # 국제화 설정
├── messages/                 # 언어별 메시지 파일 (ko.json, en.json)
├── lib/                      # 유틸리티 함수
└── hook/                     # 커스텀 훅
```

### 국제화 시스템
- **기본 언어**: 한국어 (`ko`)
- **지원 언어**: 한국어, 영어
- **라우팅**: `localePrefix: 'never'` (URL에 언어 코드 표시 안함)
- **메시지 파일**: `src/messages/ko.json`, `src/messages/en.json`
- **미들웨어**: `src/middleware.ts`에서 언어 처리

### UI 컴포넌트 시스템
- **기본**: shadcn/ui 컴포넌트 (`@/components/ui/`)
- **설정**: `components.json`에서 관리
- **테마**: CSS 변수 기반, 다크/라이트 모드 지원
- **폰트**: Geist Sans (기본), Geist Mono (코드용)

### 아이콘 관리
- **기술 스택 아이콘**: `src/components/icons/tags/`
- **소셜/일반 아이콘**: `src/components/icons/`
- **아이콘 맵핑**: `src/data/index.ts`의 `iconMap`에서 중앙 관리
- **사용법**: 새 기술 아이콘 추가 시 컴포넌트 생성 후 `iconMap`에 등록 필요

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
1. `src/components/icons/tags/` 하위에 컴포넌트 생성
2. `src/data/index.ts`의 `iconMap`에 등록
3. 일관된 크기 (24x24) 및 스타일 유지

### 스타일링
- Tailwind CSS 클래스 사용
- `cn()` 유틸리티로 조건부 스타일링
- CSS 변수 활용한 테마 대응

### 타입 정의
- `src/types.d.ts`에 공통 타입 정의
- `IconComponent` 타입 활용
- 엄격한 TypeScript 설정 준수