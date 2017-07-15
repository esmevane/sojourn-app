// @flow

import styled from 'styled-components'
import { Backdrop as BaseBackdrop } from 'components/App/styles'
import * as Theme from 'themes'

const slideRight = ({ show }) =>
  show
    ? 'translate3d(0, 0, 0)'
    : 'translate3d(-100vw, 0, 0)'

export const Backdrop = BaseBackdrop.extend`
  z-index: 3;
`

export const Container = styled.div`
  background: ${Theme.background};
  box-shadow: 0 0 24px -4px ${Theme.foreground};

  width: 30vw;
  height: 100vh;

  transition: ${Theme.transition};
  transform: ${slideRight}
`
