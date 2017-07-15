// @flow

import React from 'react'
import { Backdrop, Container } from './styles'

const Menu = ({ children, show }: HasChildren & MenuState) =>
  <Backdrop show={ show }>
    <Container show={ show }>
      { children }
    </Container>
  </Backdrop>

export default Menu
