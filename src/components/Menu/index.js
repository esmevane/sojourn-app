// @flow

import React from 'react'
import { Backdrop, Container } from './styles'
import * as State from 'state'

const Menu = ({ children, show }: HasChildren & Showable) =>
  <Backdrop show={show}>
    <Container show={show}>
      {children}
    </Container>
  </Backdrop>

export default State.connectMenu(Menu)
