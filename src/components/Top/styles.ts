import styled from 'styled-components'
import { pcLayout, spLayout } from '../../breakpoint'

export const Container = styled.div``

export const Logo = styled.img`
  display: block;
  margin: 0 auto;
  transform: translateY(-30%);

  ${pcLayout(`width: 400px;`)}
  ${spLayout(`width: 65%;`)}
`

export const ColorWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;

  ${pcLayout(`
    max-width: 740px;
    margin-top: 10px;
  `)}
  ${spLayout(`margin-top: 5px;`)}
`

export const Footer = styled.footer`
  position: relative;
  width: 100%;
  overflow: hidden;

  ${pcLayout(`
    height: 120px;
    margin-top: 50px;
  `)}
  ${spLayout(`
    height: 50px;
    margin-top: 40px;
  `)}

  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 500%;
    height: 500%;
    transform-origin: left top;
  }
  div:nth-child(1) {
    transform: rotate(6deg);
    background-color: #2089a5;
  }
  div:nth-child(2) {
    transform: rotate(8deg);
    background-color: #c7aa71;
  }
  div:nth-child(3) {
    transform: rotate(12deg);
    background-color: #ad1341;
  }
  div:nth-child(4) {
    transform: rotate(16deg);
    background-color: #5d3523;
  }
`
