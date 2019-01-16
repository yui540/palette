import { keyframes } from 'styled-components'

export const fadein = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`

export const fadeout = keyframes`
  from { opacity: 1; }
  to   { opacity: 0; }
`

export const slideRight = keyframes`
  from { transform: translateX(-100%); }
  to   { transform: translateX(0%); }
`

export const slideLeft = keyframes`
  from { transform: translateX(100%); }
  to   { transform: translateX(0%); }
`

export const slideTop = keyframes`
  from { transform: translateY(100%); }
  to   { transform: translateY(0%); }
`

export const slideBottom = keyframes`
  from { transform: translateY(-100%); }
  to   { transform: translateY(0%); }
`
