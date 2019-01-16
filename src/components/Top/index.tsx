import * as React from 'react'
import {
  Container,
  Title,
} from './styles'

interface Props {
  
}

export default class Top extends React.Component<Props, {}> {
  render() {
    return (
      <Container>
        <Title>Hello, palette.</Title>
      </Container>
    )
  }
}
