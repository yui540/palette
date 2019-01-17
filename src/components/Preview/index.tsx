import * as React from 'react'
import {
  Container,
  ColorCode
} from './styles'

interface Props {
  color: string
  open: boolean
}

export default class Preview extends React.Component<Props, {}> {
  public render() {
    const { color, open } = this.props

    return (
      <Container color={color} data-open={open}>
        <ColorCode>{color}</ColorCode>
      </Container>
    )
  }
}
