import { type SVGProps } from 'react'

export function ElevenLabsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 50 50'
    >
      <path
        className="fill-[#000] dark:fill-[#E5E5E5]"
        d='M5,5v40h40V5H5z M24,34h-4V16h4V34z M30,34h-4V16h4V34z'
      />
    </svg>
  )
}
