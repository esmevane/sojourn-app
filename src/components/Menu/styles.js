// @flow

import styled from 'styled-components'
import * as Theme from 'themes'

const slideRight = ({ show }) =>
  show
    ? 'translate3d(0, 0, 0)'
    : 'translate3d(-100vw, 0, 0)'

const fadeIn = ({ show }) =>
  show
    ? Theme.shadow
    : Theme.transparent

export const Backdrop = styled.div`
  background: ${fadeIn};

  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-content: center;

  overflow: hidden;
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 3;

  pointer-events: none;
  transition: ${Theme.transition};
  transition-delay: ${Theme.transition};
`

export const Container = styled.div`
  background: ${Theme.background};
  box-shadow: 0 0 24px -4px ${Theme.foreground};

  width: 30vw;
  height: 100vh;

  transition: ${Theme.transition};
  transform: ${slideRight}
`
