// @flow

import React from 'react'
import chroma from 'chroma-js'
import styled from 'styled-components'

type DrawerProps = { children?: any }

const paper = chroma('cornsilk').desaturate(0.3).brighten(0.3).css()
const Backdrop = styled.div`
  background: rgba(0, 0, 0, 0.4);

  display: flex;
  justify-content:flex-end;
  align-items: center;
  align-content: center;

  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 2;
`

const Container = styled.div`
  width: 30vw;
  height: 100vh;
  background: ${paper};
`

const Drawer = ({ children }: DrawerProps) =>
  <Backdrop>
    <Container>
      { children }
    </Container>
  </Backdrop>

export default Drawer
