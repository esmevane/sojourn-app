// @flow

import React from 'react'
import * as State from 'state'
import { Backdrop, Container } from './styles'

const Modal = ({ children, show }: HasChildren & ModalState) =>
  <Backdrop show={show}>
    <Container show={show}>
      {children}
    </Container>
  </Backdrop>

export default State.connectModal(Modal)
