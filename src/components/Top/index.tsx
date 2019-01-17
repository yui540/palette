import * as React from 'react'
import {
  Container,
  ColorWrapper,
} from './styles'
import Color from '../Color'
import Modal from '../Modal'
import Preview from '../Preview'
import colors from '../../config/colors'

interface Props {}

interface State {
  open: boolean
  color: string
}

export default class Top extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      open: false,
      color: '#ffffff'
    }
  }

  private onMouseOver(num: number) {
    const color = colors[num]

    this.setState({
      color: color.color,
      open: true
    })
  }

  private onMouseOut() {
    this.setState({ open: false })
  }

  public render() {
    const { color, open } = this.state

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
        <Preview
          open={open}
          color={color}
        />
      </Container>
    )
  }
}
