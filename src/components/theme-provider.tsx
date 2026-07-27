'use client'

import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from 'next-themes'

// next-themes가 테마 깜빡임 방지용 인라인 <script>를 렌더하는데,
// React 19가 컴포넌트 내부 script 태그에 경고를 냄. SSR에선 정상 동작하는 오탐이라 dev에서만 필터.
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  const orig = console.error
  console.error = (...args: unknown[]) => {
    if (typeof args[0] === 'string' && args[0].includes('Encountered a script tag')) return
    orig.apply(console, args)
  }
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
