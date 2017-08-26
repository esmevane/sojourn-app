// @flow

import React from 'react'
import { Backdrop, Container } from './styles'

const Drawer = ({ children, show }: HasChildren & DrawerState) =>
  <Backdrop show={ show }>
    <Container show={ show }>
      { children }
    </Container>
  </Backdrop>

export default Drawer