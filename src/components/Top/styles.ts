import styled from 'styled-components'
import { pcLayout, spLayout } from '../../breakpoint'

export const Container = styled.div`
  margin: 0 auto;
  ${pcLayout(`
    max-width: 740px;
  `)}
`

export const ColorWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 80px;
`
