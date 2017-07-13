// @flow

import React from 'react'
import chroma from 'chroma-js'
import styled from 'styled-components'

type ModalProps = { children?: any }

const paper = chroma('cornsilk').desaturate(0.3).brighten(0.3).css()
const Backdrop = styled.div`
  background: rgba(0, 0, 0, 0.4);

  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 4;
`

const Container = styled.div`
  width: 40vw;
  min-height: 20vh;
  background: ${paper};

`

const Modal = ({ children }: ModalProps) =>
  <Backdrop>
    <Container>
      { children }
    </Container>
  </Backdrop>

export default Modal
