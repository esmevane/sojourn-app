// @flow

import styled from 'styled-components'
import createTheme from 'themes'

const Theme = createTheme()

export const Overlay = styled.div`
  pointer-events: ${props => (props.show ? 'auto' : 'none')};

  grid-area: head-anchor / head-anchor / span 3 / span 5;

  background: ${Theme.colors.white.alpha(0.8).css()};

  opacity: ${props => (props.show ? 1 : 0)};

  transition: ${Theme.transition.duration};
`
