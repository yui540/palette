import * as React from 'react'
import { Container, BgColor, ProductName, ColorCode } from './styles'

interface Props {
  num: number
  color: string
  productName: string
  onMouseOver(num: number): void
  onMouseOut(): void
  showModal(num: number): void
}

export default class Color extends React.Component<Props, {}> {
  public render() {
    const {
      productName,
      color,
      num,
      onMouseOver,
      onMouseOut,
      showModal
    } = this.props

    return (
      <Container
        color={color}
        onMouseOver={() => onMouseOver(num)}
        onMouseOut={() => onMouseOut()}
        onClick={() => showModal(num)}
      >
        <BgColor color={color} />
        <ProductName>{productName}</ProductName>
        <ColorCode>{color}</ColorCode>
      </Container>
    )
  }
}
