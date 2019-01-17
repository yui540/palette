import styled from 'styled-components'
import { pcLayout, spLayout } from '../../breakpoint'

export const Container = styled.div`
  margin: 0 auto;

  ${pcLayout(`max-width: 740px;`)}
`

export const Logo = styled.img`
  display: block;
  margin: 0 auto;
  transform: translateY(-30%);

  ${pcLayout(`width: 400px;`)}
  ${spLayout(`width: 65%;`)}
`

export const ColorWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${pcLayout(`margin-top: 10px;`)}
  ${spLayout(`margin-top: 5px;`)}
`
