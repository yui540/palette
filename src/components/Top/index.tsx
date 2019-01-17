import * as React from 'react'
import {
  Container,
  ColorWrapper,
} from './styles'
import Color from '../Color'
import Modal from '../Modal'
import colors from '../../config/colors'

interface Props {}

export default class Top extends React.Component<Props, {}> {
  private onMouseOver(num: number) {
    console.log(colors[num])
  }

  private onMouseOut() {
    console.log(/mouse out/)
  }

  public render() {
    return (
      <Container>
        <ColorWrapper>
          {colors.map((li, key) => (
            <Color
              key={key}
              num={key}
              color={li.color}
              productName={li.product.name}
              onMouseOver={this.onMouseOver.bind(this)}
              onMouseOut={this.onMouseOut.bind(this)}
            />
          ))}
        </ColorWrapper>
      </Container>
    )
  }
}
