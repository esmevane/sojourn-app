// @flow

import styled from 'styled-components'
import { Backdrop as BaseBackdrop } from 'components/App/styles'
import * as Theme from 'themes'

const slideUp = ({ show }) =>
  show
    ? 'translate3d(0, 0, 0)'
    : 'translate3d(0, 100vh, 0)'

export const Backdrop = BaseBackdrop.extend`
  z-index: 4;
`

export const Container = styled.div`
  background: ${Theme.background};
  box-shadow: ${Theme.boxShadow};
  border-radius: ${Theme.borderRadius};

  width: 40vw;
  min-height: 20vh;
  max-height: 80vh;

  transition: ${Theme.transition};
  transform: ${slideUp}
`
