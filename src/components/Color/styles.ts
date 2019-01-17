import styled from 'styled-components'
import { pcLayout, spLayout } from '../../breakpoint'
import { beat } from './keyframes'

export const Container = styled.button`
  appearance: none;
  border: none;
  position: relative;
  width: calc(25% - 16px);
  height: 0;
  padding-top: 25%;
  margin: 4px;
  box-shadow: 0 0 6px rgba(0,0,0,.2);
  transition: all .15s ease-out 0s;
  cursor: pointer;

  &:focus {
    outline: 0;
    box-shadow: 0 0 5px 5px ${props => props.color};
  }

  &:hover div:nth-child(1) {
    transform: scale(.6);
    border-radius: 50%;
  }
  &:hover div:nth-child(1)::after {
    animation: ${beat} .8s cubic-bezier(0.7,-0.02, 0.24, 0.98) .3s infinite;
  }
  &:hover div:nth-child(2),
  &:hover div:nth-child(3) {
    color: #aaa;
    text-shadow: 0 0 0 transparent;
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
  padding: 5px;
  box-sizing: border-box;
  font-size: 12px;
  color: #fff;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-shadow: 0 0 2px rgba(0,0,0,.5);
  transition: all .45s cubic-bezier(0, 0, 0, 1.01) 0s;
`

export const ColorCode = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  font-size: 12px;
  text-align: right;
  color: #fff;
  text-transform: uppercase;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-shadow: 0 0 2px rgba(0,0,0,.5);
  transition: all .45s cubic-bezier(0, 0, 0, 1.01) 0s;
`
