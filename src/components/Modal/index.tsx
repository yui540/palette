import * as React from 'react'
import {
  Bg,
  Container,
  Inner,
  Close,
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
  LineBack,
} from './styles'

interface Props {
  modal: boolean
  color: string
  productName: string
  productLink: string
  hiddenModal(): void
  prevColor(): void
  nextColor(): void
}

export default class Modal extends React.Component<Props, {}> {
  private clickCopy(colorCode: string) {
    const ele = document.createElement('div')

    ele.appendChild(document.createElement('pre')).textContent = colorCode
    ele.style.position = 'fixed'
    ele.style.bottom = '-100%'

    document.body.appendChild(ele)
    document.getSelection()!.selectAllChildren(ele)
    document.execCommand('copy')

    document.body.removeChild(ele)
  }

  public render() {
    const {
      productName,
      productLink,
      color,
      modal,
      hiddenModal,
      prevColor,
      nextColor
    } = this.props

    return (
      <>
        <Bg data-show={modal} />
        <Container data-show={modal}>
          <Inner data-show={modal}>
            <Close onClick={() => hiddenModal()} />
            <LineBack>
              <div />
              <div />
            </LineBack>
            <Panel>
              <Header>
                <Title>{productName}</Title>
              </Header>
              <Body>
                <ColorContent data-show={modal}>
                  <ProductName data-show={modal}>
                    <span>Product: </span>
                    <span>{productName}</span>
                  </ProductName>
                  <ColorCode data-show={modal}>
                    <span>ColorCode: </span>
                    <span>{color}</span>
                  </ColorCode>
                  <ColorLine data-show={modal} color={color} />
                </ColorContent>
                <PrevButton onClick={() => prevColor()} data-show={modal} />
                <NextButton onClick={() => nextColor()} data-show={modal} />
              </Body>
              <Footer>
                <CopyButton onClick={() => this.clickCopy(color)} />
              </Footer>
            </Panel>
            <LineFront>
              <div />
              <div />
            </LineFront>
          </Inner>
        </Container>
      </>
    )
  }
}
