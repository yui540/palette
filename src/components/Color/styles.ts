import styled from 'styled-components'
import { pcLayout, spLayout } from '../../breakpoint'
import { beat } from './keyframes'

export const Container = styled.button`
  appearance: none;
  border: none;
  position: relative;
  height: 0;
  transition: all .15s ease-out 0s;
  cursor: pointer;

  ${pcLayout(`
    width: 169px;
    padding-top: 169px;
    margin: 4px;
    box-shadow: 0 0 6px rgba(0,0,0,.2);
  `)}

  ${spLayout(`
    width: calc(25% - 5px);
    padding-top: calc(25% - 8px);
    margin: 2px;
    box-shadow: 0 0 2px rgba(0,0,0,.2);
  `)}

  &:focus {
    outline: 0;
    box-shadow: 0 0 5px 5px ${props => props.color};
    ${spLayout(`box-shadow: 0 0 0 0 transparent;`)}
  }

  &:hover div:nth-child(1) {
    ${pcLayout(`
      transform: scale(.6);
      border-radius: 50%;
    `)}
  }
  &:hover div:nth-child(1)::after {
    animation: ${beat} .8s cubic-bezier(0.7,-0.02, 0.24, 0.98) .3s infinite;
    ${spLayout(`animation: none;`)}
  }
  &:hover div:nth-child(2),
  &:hover div:nth-child(3) {
    ${pcLayout(`
      color: #aaa;
      text-shadow: 0 0 0 transparent;
    `)}
  }
`

export const BgColor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: all .45s cubic-bezier(0, 0, 0, 1.01) 0s;

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${props => props.color};
  }
`

export const ProductName = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  color: #fff;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  transition: all .45s cubic-bezier(0, 0, 0, 1.01) 0s;

  ${pcLayout(`
    font-size: 12px;
    padding: 5px;
    text-shadow: 0 0 3px rgba(0,0,0,.5);
  `)}

  ${spLayout(`
    font-size: 9px;
    padding: 2.5px;
    text-shadow: 0 0 1px rgba(0,0,0,.5);
  `)}
`

export const ColorCode = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  box-sizing: border-box;
  text-align: right;
  color: #fff;
  text-transform: uppercase;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  transition: all .45s cubic-bezier(0, 0, 0, 1.01) 0s;

  ${pcLayout(`
    font-size: 12px;
    padding: 5px;
    text-shadow: 0 0 3px rgba(0,0,0,.5);
  `)}

  ${spLayout(`
    font-size: 9px;
    padding: 2.5px;
    text-shadow: 0 0 1px rgba(0,0,0,.5);
  `)}
`
