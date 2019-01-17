import styled from 'styled-components'
import { spLayout } from '../../breakpoint'

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: calc((100% - 740px) / 2);
  height: 100%;
  background-color: ${props => props.color};
  transition: all .3s cubic-bezier(0, 0, 0, 1.01) 0s;
  transform: translateX(100%);
  border-radius: 70% 0 0 70%;
  overflow: hidden;

  &[data-open=true] {
    transform: translateX(0);
    border-radius: 0% 0 0 0%;
  }

  ${spLayout(`display: none;`)}
`

export const ColorCode = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 20px;
  color: rgba(255,255,255,.6);
  text-align: center;
  text-transform: uppercase;
  transform: translate(-50%, -50%);
`
