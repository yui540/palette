import * as React from 'react'
import {
  Container,
  Inner,
  Panel,
  Header,
  Title,
  Body,
  ColorContent,
  ProductName,
  ColorCode,
  ColorLine,
  PrevButton,
  NextButton,
  Footer,
  CopyButton,
  LineFront,
  LineBack
} from './styles'

interface Props {
  color: string
  productName: string
  productLink: string
}

export default class Modal extends React.Component<Props, {}> {
  public render() {
    const { productName, productLink, color } = this.props

    return (
      <Container>
        <Inner>
          <LineBack>
            <div />
            <div />
          </LineBack>
          <Panel>
            <Header>
              <Title>
                {productName}
              </Title>
            </Header>
            <Body>
              <ColorContent>
                <ProductName>
                  <span>Product: </span>
                  <span>{productName}</span>
                </ProductName>
                <ColorCode>
                  <span>ColorCode: </span>
                  <span>{color}</span>
                </ColorCode>
                <ColorLine color={color} />
              </ColorContent>
              <PrevButton />
              <NextButton />
            </Body>
            <Footer>
              <CopyButton />
            </Footer>
          </Panel>
          <LineFront>
            <div />
            <div />
          </LineFront>
        </Inner>
      </Container>
    )
  }
}
