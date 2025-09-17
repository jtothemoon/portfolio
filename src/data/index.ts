import { GitHubIcon } from '@/components/icons/github'
import { TistoryIcon } from '@/components/icons/tistory'
import { InstagramIcon } from '@/components/icons/instagram'
import { CSSIcon } from '@/components/icons/tags/css'
import { HTMLIcon } from '@/components/icons/tags/html'
import { JavaScriptIcon } from '@/components/icons/tags/javascript'
import { NextJSIcon } from '@/components/icons/tags/nextjs'
import { OpenAIIcon } from '@/components/icons/tags/openai'
import { ReactIcon } from '@/components/icons/tags/react'
import { SWCIcon } from '@/components/icons/tags/swc'
import { TypeScriptIcon } from '@/components/icons/tags/typescript'
import { ViteIcon } from '@/components/icons/tags/vite'
import { ShadcnIcon } from '@/components/icons/tags/shadcn-ui'
import { TailwindCSSIcon } from '@/components/icons/tags/tailwind-css'
import { AstroIcon } from '@/components/icons/tags/astro'
import { SvelteIcon } from '@/components/icons/tags/svelte'
import { NodeJSIcon } from '@/components/icons/tags/nodejs'
import { VitestIcon } from '@/components/icons/tags/vitest'
import { BootstrapIcon } from '@/components/icons/tags/bootstrap'
import { SupabaseIcon } from '@/components/icons/tags/supabase'
import { ReduxIcon } from '@/components/icons/tags/redux'
import { PNPMIcon } from '@/components/icons/tags/pnpm'
import { VercelIcon } from '@/components/icons/tags/vercel'
import { BasehubIcon } from '@/components/icons/tags/basehub'
import { GraphQLIcon } from '@/components/icons/tags/graphql'
import { VisualBasicIcon } from '@/components/icons/tags/visual-basic'
import { LinuxIcon } from '@/components/icons/tags/linux'
import { JavaIcon } from '@/components/icons/tags/java'
import { SpringIcon } from '@/components/icons/tags/spring'
import { PythonIcon } from '@/components/icons/tags/python'
import { MySQLIcon } from '@/components/icons/tags/mysql'
import { OpenCVIcon } from '@/components/icons/tags/opencv'
import { AndroidIcon } from '@/components/icons/tags/android'
import { FlaskIcon } from '@/components/icons/tags/flask'
import { ElevenLabsIcon } from '@/components/icons/tags/elevenlabs'
import { TensorFlowIcon } from '@/components/icons/tags/tensorflow'
import { DockerIcon } from '@/components/icons/tags/docker'
import { GitHubActionsIcon } from '@/components/icons/tags/github-actions'
import { LangChainIcon } from '@/components/icons/tags/langchain'
import { StreamlitIcon } from '@/components/icons/tags/streamlit'
import { AWSIcon } from '@/components/icons/tags/aws'
import { KotlinIcon } from '@/components/icons/tags/kotlin'
import { FlutterIcon } from '@/components/icons/tags/flutter'
import { GradleIcon } from '@/components/icons/tags/gradle'
import { DartIcon } from '@/components/icons/tags/dart'
import { SQLiteIcon } from '@/components/icons/tags/sqlite'
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
  SQLiteIcon,
}
