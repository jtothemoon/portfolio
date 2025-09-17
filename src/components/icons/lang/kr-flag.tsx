import { type SVGProps } from 'react'

export function KrFlagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      viewBox='0 0 32 32'
    >
      <rect x='1' y='4' width='30' height='24' rx='4' ry='4' fill='#f1f1f1'></rect>
      <path
        d='M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z'
        opacity='.15'
      ></path>
      <path
        d='M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z'
        fill='#fff'
        opacity='.2'
      ></path>

      <g transform='translate(16,16) scale(0.25)' clipPath='url(#clip)'>
        <defs>
          <clipPath id='clip'>
            <rect x='-60' y='-40' width='120' height='80' rx='8' ry='8'/>
          </clipPath>
        </defs>
        <g transform='rotate(33.69)'>
          <g id='태극'>
            <path d='M-24,0A24,24 0 0 1 24,0Z' fill='#CD313A'/>
            <path d='M24,0A24,24 0 0 1 -24,0Z' fill='#004998'/>
            <circle cx='-12' cy='0' r='12' fill='#CD313A' strokeWidth='0'/>
            <circle cx='12' cy='0' r='12' fill='#004998' strokeWidth='0'/>
          </g>
          <path id='건' d='M-52,-12v24h4v-24Z m6,0v24h4v-24Z m6,0v24h4v-24Z' fill='#0E0E0E'/>
          <path id='곤' d='M36,-12v11h4v-11Z m0,13v11h4v-11Z m6,-13v11h4v-11Z m0,13v11h4v-11Z m6,-13v11h4v-11Z m0,13v11h4v-11Z' fill='#0E0E0E'/>
        </g>
        <g transform='rotate(-33.69)'>
          <path id='리' d='M-52,-12v24h4v-24Z m6,0v11h4v-11Z m0,13v11h4v-11Z m6,-13v24h4v-24Z' fill='#0E0E0E'/>
          <path id='감' d='M36,-12v11h4v-11Z m0,13v11h4v-11Z m6,-13v24h4v-24Z m6,0v11h4v-11Z m0,13v11h4v-11Z' fill='#0E0E0E'/>
        </g>
      </g>
    </svg>
  )
}