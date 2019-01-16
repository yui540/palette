import * as React from 'react'
import {
  Container,
} from './styles'
import Modal from '../Modal'

interface Props {}

export default class Top extends React.Component<Props, {}> {
  public render() {
    return (
      <Container>
        <Modal
          color="#4aa9a4"
          productName="臆病な魔女"
          productLink="https://github.com/yui540/unmoral"
        />
      </Container>
    )
  }
}
