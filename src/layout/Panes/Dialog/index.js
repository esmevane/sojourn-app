// @flow

import styled from 'styled-components'
import createTheme from 'themes'

const Theme = createTheme()

export const Dialog = styled.div`
  pointer-events: auto;

  background-color: ${Theme.colors.white
    .darken(0.2)
    .alpha(0.85)
    .css()};

  border-radius: ${Theme.sizes.tiny}px;
  box-shadow: 0 ${Theme.sizes.tiny}px ${Theme.sizes.base}px -${Theme.sizes
      .base * 0.4}px ${Theme.colors.black.alpha(0.5).css()};

  display: grid;
  grid-template-areas: 'controls' 'content' 'actions';
  grid-template-rows:
    ${Theme.sizes.giant * 1.5}px 1fr
    ${Theme.sizes.giant * 1.5}px;

  margin: ${Theme.sizes.base}px auto;
  min-height: ${Theme.sizes.giant * 7}px;
  width: 60%;
`
