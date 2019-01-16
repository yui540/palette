import styled from 'styled-components'
import { pcLayout, spLayout } from '../../breakpoint'

export const Container = styled.div`
  ${pcLayout(`
    min-width: 760px;
  `)}
`
