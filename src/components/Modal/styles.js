// @flow

import styled from 'styled-components'
import * as Theme from 'themes'

const slideUp = ({ show }) =>
  show
    ? 'translate3d(0, 0, 0)'
    : 'translate3d(0, 100vh, 0)'

const fadeIn = ({ show }) =>
  show
    ? Theme.shadow
    : Theme.transparent

export const Backdrop = styled.div`
  background: ${fadeIn};

  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

  overflow: hidden;
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 4;

  pointer-events: none;
  transition: ${Theme.transition};
  transition-delay: ${Theme.transition};
`

export const Container = styled.div`
  background: ${Theme.background};
  box-shadow: 0 0 24px -4px ${Theme.foreground};
  border-radius: ${Theme.borderRadius};

  width: 40vw;
  min-height: 20vh;
  max-height: 80vh;

  transition: ${Theme.transition};
  transform: ${slideUp}
`
