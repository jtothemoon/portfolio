import { GitHubIcon } from '@/components/icons/github'
import { TistoryIcon } from '@/components/icons/tistory'
import { InstagramIcon } from '@/components/icons/instagram'

// Frontend
import { CSSIcon } from '@/components/icons/tags/frontend/css'
import { HTMLIcon } from '@/components/icons/tags/frontend/html'
import { JavaScriptIcon } from '@/components/icons/tags/frontend/javascript'
import { NextJSIcon } from '@/components/icons/tags/frontend/nextjs'
import { ReactIcon } from '@/components/icons/tags/frontend/react'
import { TypeScriptIcon } from '@/components/icons/tags/frontend/typescript'
import { ShadcnIcon } from '@/components/icons/tags/frontend/shadcn-ui'
import { TailwindCSSIcon } from '@/components/icons/tags/frontend/tailwind-css'
import { AstroIcon } from '@/components/icons/tags/frontend/astro'
import { SvelteIcon } from '@/components/icons/tags/frontend/svelte'
import { BootstrapIcon } from '@/components/icons/tags/frontend/bootstrap'

// Backend
import { NodeJSIcon } from '@/components/icons/tags/backend/nodejs'
import { PythonIcon } from '@/components/icons/tags/backend/python'
import { JavaIcon } from '@/components/icons/tags/backend/java'
import { SpringIcon } from '@/components/icons/tags/backend/spring'
import { FlaskIcon } from '@/components/icons/tags/backend/flask'
import { VisualBasicIcon } from '@/components/icons/tags/backend/visual-basic'
import { KotlinIcon } from '@/components/icons/tags/backend/kotlin'

// Mobile
import { AndroidIcon } from '@/components/icons/tags/mobile/android'
import { FlutterIcon } from '@/components/icons/tags/mobile/flutter'
import { GradleIcon } from '@/components/icons/tags/mobile/gradle'
import { DartIcon } from '@/components/icons/tags/mobile/dart'

// Database
import { MySQLIcon } from '@/components/icons/tags/database/mysql'
import { SQLiteIcon } from '@/components/icons/tags/database/sqlite'
import { SupabaseIcon } from '@/components/icons/tags/database/supabase'

// DevOps
import { DockerIcon } from '@/components/icons/tags/devops/docker'
import { AWSIcon } from '@/components/icons/tags/devops/aws'
import { VercelIcon } from '@/components/icons/tags/devops/vercel'
import { LinuxIcon } from '@/components/icons/tags/devops/linux'
import { GitHubActionsIcon } from '@/components/icons/tags/devops/github-actions'
import { PNPMIcon } from '@/components/icons/tags/devops/pnpm'

// AI/ML
import { OpenAIIcon } from '@/components/icons/tags/ai-ml/openai'
import { TensorFlowIcon } from '@/components/icons/tags/ai-ml/tensorflow'
import { OpenCVIcon } from '@/components/icons/tags/ai-ml/opencv'
import { LangChainIcon } from '@/components/icons/tags/ai-ml/langchain'
import { ElevenLabsIcon } from '@/components/icons/tags/ai-ml/elevenlabs'
import { StreamlitIcon } from '@/components/icons/tags/ai-ml/streamlit'

// Tools
import { ViteIcon } from '@/components/icons/tags/tools/vite'
import { VitestIcon } from '@/components/icons/tags/tools/vitest'
import { SWCIcon } from '@/components/icons/tags/tools/swc'
import { ReduxIcon } from '@/components/icons/tags/tools/redux'
import { GraphQLIcon } from '@/components/icons/tags/tools/graphql'
import { BasehubIcon } from '@/components/icons/tags/tools/basehub'

import { FileTextIcon, BuildingIcon, MailIcon } from 'lucide-react'
import type { IconComponent } from '@/types'

export const AVATAR = {
  name: 'LIM HYUN JIN',
  initials: 'LHJ'
}

export const LINKS = [
  {
    title: 'GitHub',
    url: 'https://github.com/jtothemoon',
    icon: GitHubIcon
  },
  {
    title: 'Tistory',
    url: 'https://jtothemoon.com/',
    icon: TistoryIcon
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/j_tothemoon',
    icon: InstagramIcon
  },
  {
    title: 'Email',
    url: 'mailto:jtothemoon1987@gmail.com',
    icon: MailIcon
  },
  {
    title: 'CV App',
    url: 'https://cv.emapeire.xyz',
    icon: FileTextIcon
  },
  {
    title: 'Company',
    url: 'https://jamong.it.kr',
    icon: BuildingIcon
  }
]

export const iconMap: Record<string, IconComponent> = {
  CSSIcon,
  HTMLIcon,
  JavaScriptIcon,
  NextJSIcon,
  OpenAIIcon,
  ReactIcon,
  SWCIcon,
  TypeScriptIcon,
  ViteIcon,
  ShadcnIcon,
  TailwindCSSIcon,
  AstroIcon,
  SvelteIcon,
  NodeJSIcon,
  VitestIcon,
  BootstrapIcon,
  SupabaseIcon,
  ReduxIcon,
  PNPMIcon,
  VercelIcon,
  BasehubIcon,
  GraphQLIcon,
  VisualBasicIcon,
  LinuxIcon,
  JavaIcon,
  SpringIcon,
  PythonIcon,
  MySQLIcon,
  OpenCVIcon,
  AndroidIcon,
  FlaskIcon,
  ElevenLabsIcon,
  TensorFlowIcon,
  DockerIcon,
  GitHubActionsIcon,
  LangChainIcon,
  StreamlitIcon,
  AWSIcon,
  KotlinIcon,
  FlutterIcon,
  GradleIcon,
  DartIcon,
  SQLiteIcon
}
