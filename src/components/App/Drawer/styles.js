// @flow

import styled from 'styled-components'
import { Backdrop as BaseBackdrop } from 'components/App/styles'
import * as Theme from 'themes'

const slideLeft = ({ show }) =>
  show
    ? 'translate3d(0, 0, 0)'
    : 'translate3d(100vw, 0, 0)'

export const Backdrop = BaseBackdrop.extend`
  z-index: 2;
`

export const Container = styled.div`
  background: ${Theme.background};
  box-shadow: ${Theme.boxShadow};

  width: 30vw;
  height: 100vh;

  transition: ${Theme.transition};
  transform: ${slideLeft}
`
